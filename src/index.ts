import { readFileSync } from "fs";
import * as path from "path";

export function pick(memoryMib: string, preference?: string): number {
	const jsonPath = path.join(
		__dirname,
		"..",
		"support",
		"available-combinations.json"
	);
	const raw = readFileSync(jsonPath);
	const combinations = JSON.parse(raw.toString());

	if (preference == "max") {
		return Math.max(...combinations[memoryMib]);
	}

	// Fallback/default is minimum CPU
	return Math.min(...combinations[memoryMib]);
}
