const fs = require("fs");
const readNumber = fs.readFileSync("num-aleat.txt").toString();
const stringNumber = readNumber.split(",");

// Function to perform insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

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

