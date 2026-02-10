import { nand } from '../../logic-gates/nand.js';

function testNand(aBit, bBit, expectedResult) {
  describe('Nand test', () => {
    test(`${aBit} and ${bBit} should return ${expectedResult}`, () =>
      expect(nand(aBit, bBit)).toBe(expectedResult))
  }
  )
}
testNand(0, 0, 1)
testNand(1, 0, 1)
testNand(0, 1, 1)
testNand(1, 1, 0)