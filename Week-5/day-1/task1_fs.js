/**
 * Week 5 - Day 1 : Task 1 - Node.js File System (fs) Operations
 * Demonstrates synchronous and asynchronous file handling:
 * - write, read, append, and delete
 */

const fs = require('fs');
const path = require('path');

const demoFile = path.join(__dirname, 'student_notes.txt');

console.log('=== Node.js File System (fs) Module Demo ===\n');

// 1. Write file
console.log('1. Writing file...');
fs.writeFileSync(demoFile, 'Welcome to Week-5: Node.js & Express Fundamentals!\n');
console.log('-> File created successfully at:', demoFile);

// 2. Append to file
console.log('\n2. Appending data...');
fs.appendFileSync(demoFile, 'Topic: Built-in Core Modules (fs, path, os, http)\nStudent: Dipanshu Dashore\nDate: 2026-10-21\n');
console.log('-> Content appended successfully.');

// 3. Read file
console.log('\n3. Reading file content:');
const content = fs.readFileSync(demoFile, 'utf-8');
console.log('--------------------------------------------------');
console.log(content);
console.log('--------------------------------------------------');

// 4. File stats check
const stats = fs.statSync(demoFile);
console.log(`4. File Stats: Size = ${stats.size} bytes | Created = ${stats.birthtime.toLocaleString()}`);

console.log('\nTask 1 Completed successfully!');
