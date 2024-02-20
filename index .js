const fs = require('fs');

// Function to read the content of the text file
function readTextFile(numerosRandom) {
    try {
        const data = fs.readFileSync(numerosRandom, 'utf8');
        return data.split('\n').map(line => line.trim()); // Assuming each line contains one piece of information
    } catch (err) {
        console.error('Error reading the file:', err);
        return [];
    }
}

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

// Read data from the text file
const numerosRandom = 'num-aleat.txt'; // Update with your file name
const data = readTextFile(numerosRandom);

// Sort the data using insertion sort
const sortedData = insertionSort(data);

// Output the sorted data
console.log("Sorted data:", sortedData);
