import * as _ from "lodash";
import { parse, ParseResult } from "papaparse";
import { readFileSync, writeFile } from "fs";

function convert(): ParseResult {
	const file = readFileSync("./support/available-combinations.csv", "utf8");
	const result = parse(file, {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		complete: (result) => {
			// console.dir(result.data);
		},
	});
	return result;
}

const oldJson = convert();
const newJSONunsorted = _.mapValues(
	_.groupBy(oldJson.data, "Memory_GB"),
	(list) => _.map(list, (x) => x.CPU_vCPU)
);

let prettyJSON = JSON.stringify(newJSONunsorted, null, 2);
writeFile("./support/available-combinations.json", prettyJSON, (err) => {
	if (err) throw err;
	console.log("JSON file saved");
});
