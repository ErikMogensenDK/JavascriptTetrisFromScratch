import { multiplexer } from '../../logic-gates/multiplexer.js'

function testMultiplexer(b1, b2, selector, expectedOutput){
	test(`${b1}, ${b2} with selector ${selector}, should give ${expectedOutput}`, () =>
		expect(multiplexer(b1, b2, selector)).toBe(expectedOutput)
	)
}

testMultiplexer(0,0,0,0)
testMultiplexer(1,0,0,1)
testMultiplexer(0,1,0,0)
testMultiplexer(1,1,0,1)

testMultiplexer(0,0,1,0)
testMultiplexer(1,0,1,0)
testMultiplexer(0,1,1,1)
testMultiplexer(1,1,1,1)
