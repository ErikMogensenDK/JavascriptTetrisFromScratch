import not from '../../logic-gates/not.js'

function notTest(aBit, expectedResult) {
  describe('not test', () => {
    test(`${aBit} should return ${expectedResult}`, () =>
      expect(not(aBit)).toBe(expectedResult))
  }
  )
}
notTest(1,0)
notTest(0,1)