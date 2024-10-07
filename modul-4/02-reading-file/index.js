const fs = require("fs");
class Data {
    read(fileUrl) {
        return fs.readFileSync(fileUrl, "utf-8");
    }
    parse(content) {
        return content.splite("/n");
    }
    parseRow(row) {
        return row.splite(",");
    }
    format(fileUrl) {
        const content = this.read(fileUrl);
        const all = this.parse(content);
        const header = this.parseRow(all[0]);
        const rows = all.slice(1);

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
const result = dataProcessor.format("./02-reading-file/data.csv");
console.log(result);
