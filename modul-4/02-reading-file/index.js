const fs = require("fs");
class Data {
    read(fileUrl) {
        return fs.readFileSync(fileUrl, "utf-8");
    }
    parse(content) {
        return content.split("\n");
    }

    parseRow(row) {
        return row.trim().split(",");
    }
    format(fileUrl) {
        const content = this.read(fileUrl);
        console.log("1", content);
        const all = this.parse(content);
        console.log(all);
        const header = this.parseRow(all[0]);
        console.log(header);
        const rows = all.slice(1);
        console.log(rows);

        const formattedData = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObj = {};
            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];
                personObj[label] = value;
            }

            return personObj;
        });

        return formattedData;
    }
}

const dataProcessor = new Data();
const result = dataProcessor.format("data.csv");
console.log(result);
