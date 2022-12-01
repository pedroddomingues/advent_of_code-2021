import * as fs from 'fs';
import * as path from 'path';

let input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let first_part: number;
let second_part: number;

const instructions = input.split('\n');

let horizontal: number = 0;
let depth: number = 0;

for (let index = 0; index < instructions.length; index++) {
	const element = instructions[index];
	const key_value = element.split(' ');
	if (key_value[0] === "forward")
		horizontal += +key_value[1];
	if (key_value[0] === "up")
		depth -= +key_value[1];
	if (key_value[0] === "down")
		depth += +key_value[1];
}

first_part = horizontal * depth;

horizontal = 0;
depth = 0;
let aim: number = 0;

for (let index = 0; index < instructions.length; index++) {
	const element = instructions[index];
	const key_value = element.split(' ');
	if (key_value[0] === "forward")
	{
		horizontal += +key_value[1];
		depth += +key_value[1]*aim;
	}
	if (key_value[0] === "up")
		aim -= +key_value[1];
	if (key_value[0] === "down")
		aim += +key_value[1];
}

second_part = horizontal * depth;

export default { first_part, second_part};
