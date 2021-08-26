"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
	return arr.sort().reduce((minDifference, value, currentIndex) => {
		if (currentIndex < arr.length - 1) {
			const neighborDifference = Math.abs(value - arr[currentIndex + 1]);
			if (neighborDifference < minDifference) {
				return neighborDifference;
			}
		}
		return minDifference;
	}, +Infinity);
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine().trim(), 10);

	const arr = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((arrTemp) => parseInt(arrTemp, 10));

	const result = minimumAbsoluteDifference(arr);

	ws.write(result + "\n");

	ws.end();
}
