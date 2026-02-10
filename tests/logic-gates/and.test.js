import {and} from '../../logic-gates/and.js'

function testAnd(aBit, bBit, expectedOutput){
	describe('and-gate test', () => {
		test(`${aBit} and ${bBit} should return ${expectedOutput}`, () =>
			expect(and(aBit, bBit)).toBe(expectedOutput)
		)
	})
}
testAnd(1,1,1)
testAnd(0,1,0)
testAnd(1,0,0)
testAnd(0,0,0)