import { pick } from "../src/index";

/* --------------------------------------------
* When there is only 1 possible combination
-------------------------------------------- */

test("with 0.5GB memory, min cpu should be 256 (preference NOT specified)", () => {
	const cpu = pick("0.5");
	expect(cpu).toBe(256);
});

test("with 0.5GB memory, min cpu should be 256 (preference specified)", () => {
	const cpu = pick("0.5", "min");
	expect(cpu).toBe(256);
});

test("with 0.5GB memory, min cpu should be 256 (preference specified)", () => {
	const cpu = pick("0.5", "max");
	expect(cpu).toBe(256);
});

/* --------------------------------------------
* When there are many possible combinations
-------------------------------------------- */

test("with 2GB memory, min cpu should be 256 (preference NOT specified)", () => {
	const cpu = pick("2");
	expect(cpu).toBe(256);
});

test("with 2GB memory, min cpu should be 256 (preference specified)", () => {
	const cpu = pick("2", "min");
	expect(cpu).toBe(256);
});

test("with 2GB memory, max cpu should be 256 (preference specified)", () => {
	const cpu = pick("2", "max");
	expect(cpu).toBe(1024);
});
