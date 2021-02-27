// Simple  Tests
// Defining Some simple calculations
const sum = (a, b) => a + b;
const min = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;

// Parsing Test, from string to int
const parser = (string) => parseInt(string);

// We always export our consts in the end to access them to the test.js file
module.exports = { sum, min, multi, div, parser };
