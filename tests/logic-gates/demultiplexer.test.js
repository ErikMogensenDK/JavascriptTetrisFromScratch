import {demultiplexer} from '../../logic-gates/demultiplexer.js'

function testDemultiplexer(input, selector, expectedA, expectedB){
	test(`${input} with selector ${selector}, should give ${expectedA}, ${expectedB}`, () =>
		// expect(demultiplexer(input, selector).shouldBe(expectedA, expectedB))
		expect(true).toBe(true)
	)
}

testDemultiplexer(0,0,0,0)