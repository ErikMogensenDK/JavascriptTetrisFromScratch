import or from '../../logic-gates/or.js'

function testOr(aBit, bBit, expectedResult){
	test(`${aBit} and {bBit} should return {expectedResult}`, () =>
		expect(or(aBit, bBit)).toBe(expectedResult)
	)
}

