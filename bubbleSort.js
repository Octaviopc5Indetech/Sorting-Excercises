const fs = require("fs");
const readNumber = fs.readFileSync("num-aleat.txt").toString();
const stringNumber = readNumber.split(",");
const { performance } = require('perf_hooks');