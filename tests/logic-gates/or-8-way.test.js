import { or8Way } from "../../logic-gates/or-8-way";

function testOr8Way(eightWayInput, expResult) {
	test(`inputA: ${eightWayInput}, should give expResult:${expResult}`, () => (
		expect(or8Way(eightWayInput)).toStrictEqual(expResult))
	)
}

const expInput1 = [0, 0, 0, 0, 0, 0, 0, 0];
const expOutput1 = 0;

const expInput2 = [0, 0, 0, 0, 1, 0, 0, 0];
const expOutput2 = 1;

const expInput3 = [0, 1, 0, 0, 0, 0, 0, 0];
const expOutput3 = 1;

testOr8Way(expInput1, expOutput1);
testOr8Way(expInput2, expOutput2);
testOr8Way(expInput3, expOutput3);