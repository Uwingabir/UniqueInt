# UniqueInt

UniqueInt is a Node.js program that processes text files containing integers and outputs a sorted list of unique integers within a specific range.

## Features

- Reads integers from input text files
- Identifies unique integers in the range of -1023 to 1023
- Sorts the unique integers in ascending order
- Outputs the results to new text files

## Directory Structure

```
project_root/
├── dsa/
│   └── hw01/
│       ├── code/
│       │   └── src/
│       │       └── uniqueint.js
│       ├── sample_inputs/
│       │   └── *.txt
│       └── sample_results/
│           └── *.txt (generated)
```

## Prerequisites

- Node.js (v12.0.0 or higher recommended)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.

## Usage

1. Place your input text files in the `dsa/hw01/sample_inputs/` directory.
2. Open a terminal and navigate to the `dsa/hw01/code/src/` directory.
3. Run the program using Node.js:

   ```
   node uniqueint.js
   ```

4. The program will process all .txt files in the `sample_inputs` directory and create corresponding output files in the `sample_results` directory.

## Input Format

- Each input file should contain one integer per line.
- Empty lines and non-numeric data will be ignored.
- Integers outside the range of -1023 to 1023 will be ignored.

## Output Format

- Each output file will contain the sorted list of unique integers, one per line.
- The output files will be named the same as the input files, with 'input' replaced by 'result' in the filename.

## Example

Input file (`sample_inputs/small_sample_input_01.txt`):
```
5
3
5
-7
1000
3
-1500
```

Output file (`sample_results/small_sample_result_01.txt`):
```
-7
3
5
1000
```

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](insert_link_here) if you want to contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)
