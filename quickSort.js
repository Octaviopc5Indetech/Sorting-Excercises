const fs = require("fs");
const readNumber = fs.readFileSync("num-aleat.txt").toString();
const stringNumber = readNumber.split(",");
const { performance } = require('perf_hooks');

const pivot = (arr, start = 0, end = arr.length + 1) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  
    let pivot = arr[start],
        pointer = start;
  
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < pivot  ) {
        pointer++;
        swap(arr, pointer, i);
      }
    };
    swap(arr, start, pointer);
  
    return pointer;
  }

const quickSort = (arr, start = 0, end = arr.length) => {
    let pivotIndex = pivot(arr, start, end);
  
    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  
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
const sortedData = quickSort(numberArray);
const endTime = performance.now();
const runtime = endTime - startTime;

console.log(sortedData);


console.log("Runtime:", runtime, "milliseconds");