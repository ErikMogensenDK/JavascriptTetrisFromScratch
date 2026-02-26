import { mux } from '../../logic-gates/mux.js'

function testMux(b1, b2, selector, expectedOutput) {
	test(`${b1}, ${b2} with selector ${selector}, should give ${expectedOutput}`, () =>
		expect(mux(b1, b2, selector)).toBe(expectedOutput)
	)
}

testMux(0, 0, 0, 0)
testMux(1, 0, 0, 1)
testMux(0, 1, 0, 0)
testMux(1, 1, 0, 1)

testMux(0, 0, 1, 0)
testMux(1, 0, 1, 0)
testMux(0, 1, 1, 1)
testMux(1, 1, 1, 1)
