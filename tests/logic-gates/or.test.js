import or from '../../logic-gates/or.js'

function testOr(aBit, bBit, expectedResult){
	test(`${aBit} and {bBit} should return {expectedResult}`, () =>
		expect(or(aBit, bBit)).toBe(expectedResult)
	)
}
testOr(1, 1, 1)
testOr(0, 1, 1)
testOr(1, 0, 1)
testOr(0, 0, 0)
