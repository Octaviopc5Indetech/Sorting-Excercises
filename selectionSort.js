const fs = require("fs");
const readNumber = fs.readFileSync("num-aleat.txt").toString();
const stringNumber = readNumber.split(",");
const { performance } = require('perf_hooks');

const selection = arr => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  
    arr.forEach((item, i) => {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
      };
      swap(arr, i, min);
    });
  
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
