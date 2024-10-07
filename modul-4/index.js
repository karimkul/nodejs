const _ = require("lodash");
const fs = require("fs");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const chunkedArray = _.chunk(numbers, 3);
const content = fs.readFileSync("data.csv", "utf-8");
console.log(content);

const rows = content.split("\n");
console.log(rows);
