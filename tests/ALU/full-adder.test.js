import {fullAdder} from "../../ALU/full-adder.js";

function testFullAdder(inA, inB, inC, expCarry, expSum) {
	test(`testFullAdder with in ${inA}, ${inB} and ${inC} should give ${expCarry}, and ${expSum}`, () => {
		expect(fullAdder(inA,inB,inC).toString()).toStrictEqual([expCarry, expSum].toString())
	})
}

testFullAdder(0, 0, 0,  0, 0)
testFullAdder(0, 0, 1,  0, 1)
testFullAdder(0, 1, 0,  0, 1)
testFullAdder(0, 1, 1,  1, 0)
testFullAdder(1, 0, 0,  0, 1)
testFullAdder(1, 0, 1,  1, 0)
testFullAdder(1, 1, 0,  1, 0)
testFullAdder(1, 1, 1,  1, 1)
