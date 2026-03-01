import { fullAdder } from "../../ALU/full-adder";

function testFullAdder(inA, inB, expCarry, expSum) {
	test(`testFullAdder with in ${inA} and ${inB} should give ${expCarry}, and ${expCarry}`, () => {
		expect(FullAdder(inA,inB).toString()).toStrictEqual([expCarry, expSum].toString())
	})
}

testFullAdder(0, 0, 0, 0)
testFullAdder(0, 1, 0, 1)
testFullAdder(1, 0, 0, 1)
testFullAdder(1, 1, 1, 0)
