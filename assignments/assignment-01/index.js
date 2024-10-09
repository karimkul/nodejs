const fs = require("fs");

function readCsv(fileUrl) {
    const content = fs.readFileSync(fileUrl, "utf-8");
    const rows = content.split("\n");
    const header = rows[0].split(",");
    const data = rows.slice(1).map((row) => {
        const values = row.split(",").map((value) => value.trim());

        return header.reduce((acc, curr, index) => {
            acc[curr] = values[index];
            return acc;
        }, {});
    });

    return data;
}

function countByProfession(data) {
    const professionCount = {};

    data.forEach((person) => {
        const profession = person.Profession;
        if (!professionCount[profession]) {
            professionCount[profession] = 0;
        }
        professionCount[profession]++;
    });

    return professionCount;
}

const data = readCsv("data.csv");
const professionCounts = countByProfession(data);

console.log(professionCounts);
