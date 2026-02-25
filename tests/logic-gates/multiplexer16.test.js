import {multiplexer16} from '../../logic-gates/multiplexer16.js'

function testMultiplexer16(inputA, inputB, selector, expRes) {
	test(`TestMultiplexer16 with inputA:${inputA}, inputB:${inputB}, selector:${selector} should give:{expRes}`, () => (
		expect(multiplexer16(inputA, inputB, selector)).toStrictEqual(expRes))
	)
}

const inputA =   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const inputB =   [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0];
const selector = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1];
const expOut =   [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0];

testMultiplexer16(inputA, inputB, selector, expOut);

