const fs = require("fs");
const readNumber = fs.readFileSync("num-aleat.txt").toString();
const stringNumber = readNumber.split(",");
const { performance } = require('perf_hooks');

const bubble = arr => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
      };
    };
  
    return arr;
  };
  


let numberArray = [];
for (let i of stringNumber) {
  let num = Number(i);
  if (!isNaN(num)) {
    numberArray.push(num);
  }
}

const startTime = performance.now();
const sortedData = bubble(numberArray);
const endTime = performance.now();
const runtime = endTime - startTime;

console.log(sortedData);

console.log("Runtime:", runtime, "milliseconds");
