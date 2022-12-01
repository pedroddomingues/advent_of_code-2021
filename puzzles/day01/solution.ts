import * as fs from "fs";
import * as path from "path";

let input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const depth = input.split("\n");

let first_part = 0;
let second_part = 0;

depth.forEach((value, index, array) => {
	if (index > 0) {
		if (+value > +array[index - 1]) first_part++;
	}
});

const reducer = (a: number, b: number) => {
	return a + b;
};

let group1: number[] = [];
let group2: number[] = [];
let group3: number[] = [];
let group4: number[] = [];

for (let i = 0; i < depth.length; i = i + 3) {
	for (let j = 0; j < 3; j++) {
		group1.push(+depth[i + j]);
	}
	for (let j = 1; j < 4; j++) {
		group2.push(+depth[i + j]);
	}
	for (let j = 2; j < 5; j++) {
		group3.push(+depth[i + j]);
	}
	for (let j = 3; j < 6; j++) {
		group4.push(+depth[i + j]);
	}
	if (group2.reduce(reducer) > group1.reduce(reducer)) second_part++;
	if (group3.reduce(reducer) > group2.reduce(reducer)) second_part++;
	if (group4.reduce(reducer) > group3.reduce(reducer)) second_part++;
	group1 = [];
	group2 = [];
	group3 = [];
	group4 = [];
}

export default { first_part, second_part };
