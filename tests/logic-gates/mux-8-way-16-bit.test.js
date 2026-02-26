import { mux8Way } from "../../logic-gates/mux-8-way-16-bit";

function testMux8Way(inA, inB, inC, inD, inE, inF, inG, inH, selector, expOutput) {
	test(`a: ${inA}, b: ${inB}, c: ${inC}, d: ${inD}, selector: ${selector}should give ${expOutput}`, () => {
		const actualOutput = mux8Way(inA, inB, inC, inD, inE, inF, inG, inH, selector);
		expect(actualOutput.toString()).toStrictEqual(expOutput.toString())
	}
	)
}

// 8 distinct arrays
const a = Array(16).fill(0);
const b = Array(16).fill(1);
const c = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
const d = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const e = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
const f = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
const g = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1];
const h = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0];

// array selection bits seem reversed, due to the aBit being the bit at the 0th index
// rather than being the bit, which would naturally be to the rightmost when read
selectA = [0, 0, 0];
selectB = [1, 0, 0];
selectC = [0, 1, 0];
selectD = [1, 1, 0];
selectE = [0, 0, 1];
selectF = [1, 0, 1];
selectG = [0, 1, 1];
selectH = [1, 1, 1];

testMux8Way(a, b, c, d, e, f, g, h, selectA, a)
testMux8Way(a, b, c, d, e, f, g, h, selectB, b)
testMux8Way(a, b, c, d, e, f, g, h, selectC, c)
testMux8Way(a, b, c, d, e, f, g, h, selectD, d)
testMux8Way(a, b, c, d, e, f, g, h, selectE, e)
testMux8Way(a, b, c, d, e, f, g, h, selectF, f)
testMux8Way(a, b, c, d, e, f, g, h, selectG, g)
testMux8Way(a, b, c, d, e, f, g, h, selectH, h)
