"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString
		.replace(/\s*$/, "")
		.split("\n")
		.map((str) => str.replace(/\s*$/, ""));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the substrCount function below.
function substrCount(n, s) {
	let result = n;

	for (let pointer = 0; pointer < n; pointer++) {
		let repeat = 0;

		while (s[pointer] === s[pointer + 1] && pointer < n - 1) {
			pointer++;
			repeat++;
		}

		result += (repeat * (repeat + 1)) / 2;

		let shift = 1;
		while (
			pointer - shift >= 0 &&
			pointer + shift < n &&
			s[pointer + shift] === s[pointer - 1] &&
			s[pointer - shift] === s[pointer - 1]
		) {
			result++;
			shift++;
		}
	}

	return result;
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const n = parseInt(readLine(), 10);

	const s = readLine();

	const result = substrCount(n, s);

	ws.write(result + "\n");

	ws.end();
}
