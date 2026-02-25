import {or16} from '../../logic-gates/or-16.js'

function testOr16(inputA, inputB, expResult){
	test(`testOr16 with inputA:${inputA}, and inputB:${inputB}, should give ${expResult}`, () =>
		expect(or16(inputA, inputB)).toStrictEqual(expResult)
	)
}

const inputA = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
const inputB = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]
const expRes = [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1]
testOr16(inputA, inputB, expRes)