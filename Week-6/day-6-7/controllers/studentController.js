const mongoose = require("mongoose");
const Student = require("../models/studentModel");
const Course = require("../models/courseModel");

// 1. Create Student
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      success: true,
      message: "Student profile registered successfully",
      data: student
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// 2. Get Students (Query: search, department, sort, pagination, populate)
exports.getStudents = async (req, res) => {
  try {
    const { search, department, sortBy, page = 1, limit = 5 } = req.query;

    const query = {};

    // Search by name regex
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    // Filter by department
    if (department) {
      query.department = department;
    }

    // Sorting
    let sortOptions = { createdAt: -1 };
    if (sortBy) {
      const [field, order] = sortBy.split(":");
      sortOptions = { [field]: order === "desc" ? -1 : 1 };
    }

    // Pagination
    const pageNum = Math.max(1, parseInt(page, 10));
    const limitNum = Math.max(1, parseInt(limit, 10));
    const skip = (pageNum - 1) * limitNum;

    const total = await Student.countDocuments(query);
    const students = await Student.find(query)
      .populate("courses", "title code credits instructor")
      .sort(sortOptions)
      .skip(skip)
      .limit(limitNum);

    res.status(200).json({
      success: true,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum)
      },
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// 3. Get Single Student by ID
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid student ID format" });
    }

    const student = await Student.findById(id).populate("courses", "title code credits instructor");
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// 4. Update Student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid student ID format" });
    }

    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    }).populate("courses", "title code credits instructor");

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Student details updated successfully",
      data: student
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// 5. Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid student ID format" });
    }

    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Student record deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// 6. Enroll Course in Student Profile
exports.enrollCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ success: false, message: "Invalid ID format" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    if (student.courses.includes(courseId)) {
      return res.status(400).json({ success: false, message: "Student is already enrolled in this course" });
    }

    student.courses.push(courseId);
    await student.save();

    await student.populate("courses", "title code credits instructor");

    res.status(200).json({
      success: true,
      message: "Enrolled in course successfully",
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
