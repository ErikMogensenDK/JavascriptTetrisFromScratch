import { halfAdder } from "../../ALU/half-adder";

function testHalfAdder(inA, inB, expCarry, expSum) {
	test(`testHalfAdder with in ${inA} and ${inB} should give ${expCarry}, and ${expCarry}`, () => {
		expect(halfAdder(inA,inB).toString()).toStrictEqual([expCarry, expSum].toString())
	})
}

testHalfAdder(0, 0, 0, 0)
testHalfAdder(0, 1, 0, 1)
testHalfAdder(1, 0, 0, 1)
testHalfAdder(1, 1, 1, 0)
