const fs = require('fs');
const { performance } = require('perf_hooks');

// Function to read the content of the text file
function readTextFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return data.split('\n').map(line => line.trim().split(',')); // Assuming each line contains comma-separated values
    } catch (err) {
        console.error('Error reading the file:', err);
        return [];
    }
}

// Function to perform insertion sort based on a specific column
function insertionSort(arr, column) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && parseFloat(arr[j][column]) > parseFloat(current[column])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Read data from the text file
const filename = 'num-aleat.txt'; // Update with your file name
const data = readTextFile(filename);

// Convert numerical values to numbers
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (!isNaN(parseFloat(data[i][j]))) {
            data[i][j] = parseFloat(data[i][j]);
        }
    }
}

// Measure the runtime of sorting
const startTime = performance.now();
// Sort the data using insertion sort based on a specific column (e.g., column index 0)
const sortedData = insertionSort(data, 0); // Change 0 to the index of the column you want to sort by
const endTime = performance.now();
const runtime = endTime - startTime;

// Output the sorted data and runtime
console.log("Sorted data:", sortedData);
console.log("Runtime:", runtime, "milliseconds");
