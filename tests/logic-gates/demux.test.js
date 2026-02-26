import { demux } from '../../logic-gates/demux.js'

function testDemux(input, selector, expectedA, expectedB) {
	test(`${input} with selector ${selector}, should give ${expectedA}, ${expectedB}`, () =>
		expect(demux(input, selector)).toEqual([expectedA, expectedB]))
}

testDemux(0, 0, 0, 0)
testDemux(1, 0, 1, 0)
testDemux(0, 1, 0, 0)
testDemux(1, 1, 0, 1)
