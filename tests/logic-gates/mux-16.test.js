import { mux16 } from '../../logic-gates/mux-16.js'

function testMux16(inputA, inputB, selector, expRes) {
	test(`TestMux16 with inputA:${inputA}, inputB:${inputB}, selector:${selector} should give:${expRes}`, () => (
		expect(mux16(inputA, inputB, selector)).toStrictEqual(expRes))
	)
}

const inputA = Array(16).fill(0)
const inputB = Array(16).fill(1)
const selectA = 0
const selectB = 1

testMux16(inputA, inputB, selectA, inputA);
testMux16(inputA, inputB, selectB, inputB);
