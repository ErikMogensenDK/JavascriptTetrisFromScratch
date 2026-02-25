import {multiplexer16} from '../../logic-gates/multiplexer-16.js'

function testMultiplexer16(inputA, inputB, selector, expRes) {
	test(`TestMultiplexer16 with inputA:${inputA}, inputB:${inputB}, selector:${selector} should give:${expRes}`, () => (
		expect(multiplexer16(inputA, inputB, selector)).toStrictEqual(expRes))
	)
}

const inputA = Array(16).fill(0)
const inputB = Array(16).fill(1)
const selectA = 0
const selectB = 1

testMultiplexer16(inputA, inputB, selectA, inputA);
testMultiplexer16(inputA, inputB, selectB, inputB);

