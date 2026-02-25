import {not16} from '../../logic-gates/not16.js'

function testNot16(input, expectedOutput){
	test(`testNot16 with input:${input}, should give ${expectedOutput}`, () =>
		expect(not16(input)).toStrictEqual(expectedOutput)
	)
}

const testArray =      [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]
const expectedOutput = [1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]

testNot16(testArray, expectedOutput);