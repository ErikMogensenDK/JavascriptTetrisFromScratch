import {and16} from '../../logic-gates/and16.js'

function testAnd16(inputA, inputB, expectedOutput){
	test(`testAnd16 with input ${inputA}, ${inputB}, should give ${expectedOutput}`, () =>
		expect(and16(inputA, inputB)).toStrictEqual(expectedOutput)
	)
}
const inputA = [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0]
const inputB = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
const expOut = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
testAnd16(inputA, inputB, expOut)