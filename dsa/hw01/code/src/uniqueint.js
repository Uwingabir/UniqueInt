const fs = require('fs');
const path = require('path');

class UniqueInt {
    static processFile(inputFilePath, outputFilePath) {
        const inputData = fs.readFileSync(inputFilePath, 'utf8');
        const lines = inputData.split('\n');
        const uniqueIntegers = [];
        const seenIntegers = new Array(2047).fill(false); // To track integers from -1023 to 1023

        for (let line of lines) {
            // Clean the line and skip empty lines or lines with non-numeric data
            line = line.trim();
            if (!line || isNaN(line) || line.includes(' ')) continue;

            const num = parseInt(line, 10);

            if (num >= -1023 && num <= 1023 && !seenIntegers[num + 1023]) {
                uniqueIntegers.push(num);
                seenIntegers[num + 1023] = true;
            }
        }

        // Sort the unique integers
        uniqueIntegers.sort((a, b) => a - b);

        // Write the result to the output file
        const resultData = uniqueIntegers.join('\n') + '\n';
        fs.writeFileSync(outputFilePath, resultData, 'utf8');
    }
}

// Example of how to call the processFile method:
const inputDir = path.join(__dirname, '../../sample_inputs/small_sample_input_01.txt');
const outputDir = path.join(__dirname, '../../sample_results/small_sample_input_01.txt');

// Read input files from the sample_inputs directory
fs.readdirSync(inputDir).forEach(file => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, `${file}_results.txt`);
    UniqueInt.processFile(inputFilePath, outputFilePath);
});

module.exports = UniqueInt;
