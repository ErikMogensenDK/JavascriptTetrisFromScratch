import {demultiplexer} from '../../logic-gates/demultiplexer.js'

function testDemultiplexer(input, selector, expectedA, expectedB){
	test(`${input} with selector ${selector}, should give ${expectedA}, ${expectedB}`, () =>
		expect(demultiplexer(input, selector)).toEqual([expectedA, expectedB]))
}

testDemultiplexer(0,0,0,0)
testDemultiplexer(1,0,1,0)
testDemultiplexer(0,1,0,0)
testDemultiplexer(1,1,0,1)