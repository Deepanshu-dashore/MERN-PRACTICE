/**
 * Week 5 - Day 1 : Task 2 - OS and Path Modules
 * Demonstrates inspecting system specs and path manipulations
 */

const os = require('os');
const path = require('path');

console.log('=== Node.js OS & Path Modules Demo ===\n');

// 1. OS Module Information
console.log('--- Operating System Info ---');
console.log('OS Type:         ', os.type());
console.log('OS Platform:     ', os.platform());
console.log('Architecture:    ', os.arch());
console.log('OS Release:      ', os.release());
console.log('CPU Architecture:', os.cpus()[0]?.model || 'Generic CPU', `(${os.cpus().length} Cores)`);
console.log('Total Memory:    ', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');
console.log('Free Memory:     ', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');
console.log('Home Directory:  ', os.homedir());
console.log('System Uptime:   ', (os.uptime() / 3600).toFixed(2), 'hours');

// 2. Path Module Manipulations
console.log('\n--- Path Module Utilities ---');
const samplePath = path.join('projects', 'backend', 'api', 'server.js');
console.log('Normalized Joined Path:', samplePath);
console.log('Directory Name:        ', path.dirname(samplePath));
console.log('Base File Name:        ', path.basename(samplePath));
console.log('File Extension:        ', path.extname(samplePath));
console.log('Absolute Path:         ', path.resolve(samplePath));
console.log('Parsed Object:         ', path.parse(samplePath));

console.log('\nTask 2 Completed successfully!');
