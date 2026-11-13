/**
 * Week 6 - Day 1: MongoDB Shell & Query Operations
 * Database: University_Programs
 * Collection: programs
 * 
 * You can run these commands directly inside `mongosh` or paste them into MongoDB Compass Aggregations/Shell.
 */

// 1. Switch to the University_Programs database
use University_Programs;

// 2. Insert One Program
db.programs.insertOne({
  name: "B.Tech Computer Science and Engineering",
  department: "IT_CS",
  durationYears: 4,
  feePerYear: 65000,
  eligibility: "10+2 with Physics, Chemistry, Maths (min 50%)",
  seatsAvailable: 60,
  isActive: true
});

// 3. Insert Many Programs (across IT_CS, Management, Agriculture)
db.programs.insertMany([
  {
    name: "B.Tech Information Technology",
    department: "IT_CS",
    durationYears: 4,
    feePerYear: 60000,
    eligibility: "10+2 with Physics, Chemistry, Maths (min 50%)",
    seatsAvailable: 45,
    isActive: true
  },
  {
    name: "BCA (Bachelor of Computer Applications)",
    department: "IT_CS",
    durationYears: 3,
    feePerYear: 40000,
    eligibility: "10+2 in any stream with Maths/Computer Science",
    seatsAvailable: 80,
    isActive: true
  },
  {
    name: "MCA (Master of Computer Applications)",
    department: "IT_CS",
    durationYears: 2,
    feePerYear: 55000,
    eligibility: "BCA/B.Sc CS or graduation with Maths",
    seatsAvailable: 40,
    isActive: true
  },
  {
    name: "BBA (Bachelor of Business Administration)",
    department: "Management",
    durationYears: 3,
    feePerYear: 45000,
    eligibility: "10+2 in any stream (min 45%)",
    seatsAvailable: 90,
    isActive: true
  },
  {
    name: "MBA (Master of Business Administration)",
    department: "Management",
    durationYears: 2,
    feePerYear: 75000,
    eligibility: "Bachelor's degree in any discipline (min 50%)",
    seatsAvailable: 60,
    isActive: true
  },
  {
    name: "Executive MBA",
    department: "Management",
    durationYears: 1,
    feePerYear: 90000,
    eligibility: "Graduation + 2 years work experience",
    seatsAvailable: 30,
    isActive: true
  },
  {
    name: "B.Sc (Hons) Agriculture",
    department: "Agriculture",
    durationYears: 4,
    feePerYear: 50000,
    eligibility: "10+2 with PCB / PCM / Agriculture (min 50%)",
    seatsAvailable: 75,
    isActive: true
  },
  {
    name: "M.Sc Agronomy",
    department: "Agriculture",
    durationYears: 2,
    feePerYear: 58000,
    eligibility: "B.Sc Agriculture (min 55%)",
    seatsAvailable: 25,
    isActive: true
  },
  {
    name: "Diploma in Organic Farming",
    department: "Agriculture",
    durationYears: 1,
    feePerYear: 25000,
    eligibility: "10th or 10+2 from a recognized board",
    seatsAvailable: 50,
    isActive: true
  }
]);

// 4. Read / Query Operations
// Find all programs
db.programs.find();

// Find a single program by name
db.programs.findOne({ name: "MCA (Master of Computer Applications)" });

// Find all programs in IT_CS department
db.programs.find({ department: "IT_CS" });

// Find programs with annual fee less than or equal to 50000
db.programs.find({ feePerYear: { $lte: 50000 } });

// 5. Update Operations
// Update one program: Increase seats for BCA
db.programs.updateOne(
  { name: "BCA (Bachelor of Computer Applications)" },
  { $set: { seatsAvailable: 100 } }
);

// Update many programs: Mark all Agriculture courses with an updated accreditation field
db.programs.updateMany(
  { department: "Agriculture" },
  { $set: { accreditedBy: "ICAR", lastReviewedYear: 2026 } }
);

// 6. Delete Operations
// Delete one program
db.programs.deleteOne({ name: "Diploma in Organic Farming" });

// Delete many programs that are inactive (example)
db.programs.deleteMany({ isActive: false });
