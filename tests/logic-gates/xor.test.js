import xor from '../../logic-gates/xor.js'

function xorTest(inputOne,inputTwo, expectedOutput){
test(`${inputOne}, ${inputTwo} should give ${expectedOutput}`, () => {
	expect(xor(inputOne, inputTwo)).toBe(expectedOutput)
})
}
xorTest(0,0,0);
xorTest(1,0,1);
xorTest(0,1,1);
xorTest(1,1,0);