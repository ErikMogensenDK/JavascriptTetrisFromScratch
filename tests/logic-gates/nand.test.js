import { nand } from '../../logic-gates/nand.js';

function nandTest(aBit, bBit, expectedResult) {
  describe('Nand test', () => {
    test(`${aBit} and ${bBit} should return ${expectedResult}`, () =>
      expect(nand(aBit, bBit)).toBe(expectedResult))
  }
  )
}
nandTest(0, 0, 1)
nandTest(1, 0, 1)
nandTest(0, 1, 1)
nandTest(1, 1, 0)