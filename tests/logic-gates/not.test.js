import {not} from '../../logic-gates/not.js'

function testNot(aBit, expectedResult) {
  test(`${aBit} should return ${expectedResult}`, () =>
    expect(not(aBit)).toBe(expectedResult))
}
testNot(1,0)
testNot(0,1)