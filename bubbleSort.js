const fs = require("fs");
const readNumber = fs.readFileSync("num-aleat.txt").toString();
const stringNumber = readNumber.split(",");
const { performance } = require('perf_hooks');



let numberArray = [];
for (let i of stringNumber) {
  let num = Number(i);
  if (!isNaN(num)) {
    numberArray.push(num);
  }
}

const startTime = performance.now();
const sortedData = insertionSort(numberArray);
const endTime = performance.now();
const runtime = endTime - startTime;

console.log(sortedData);

console.log("Runtime:", runtime, "milliseconds");
