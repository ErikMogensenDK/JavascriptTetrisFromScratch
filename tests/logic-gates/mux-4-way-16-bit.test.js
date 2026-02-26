import { mux4Way } from "../../logic-gates/mux-4-way-16-bit";

function testMux4Way(inA, inB, inC, inD, selector, expOutput) {
	test(`a: ${inA}, b: ${inB}, c: ${inC}, d: ${inD}, selector: ${selector}should give ${expOutput}`, () => {
		const actualOutput = mux4Way(inA, inB, inC, inD, selector);
		expect(actualOutput.toString()).toStrictEqual(expOutput.toString())
	}
	)
}

// 4 distinct arrays 
const a = Array(16).fill(0);
const b = Array(16).fill(1);
const c = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
const d = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

// array selection bits seem reversed, due to the aBit being the bit at the 0th index
// rather than being the bit, which would naturally be to the rightmost when read (LSB)
selectA = [0, 0];
selectB = [1, 0];
selectC = [0, 1];
selectD = [1, 1];

testMux4Way(a, b, c, d, selectA, a)
testMux4Way(a, b, c, d, selectB, b)
testMux4Way(a, b, c, d, selectC, c)
testMux4Way(a, b, c, d, selectD, d)
