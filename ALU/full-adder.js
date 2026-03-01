import { halfAdder } from "./half-adder.js";
import { or } from "../logic-gates/or.js";

export function fullAdder(aBit, bBit, cBit) {
	const [initCarry, initSum] = halfAdder(aBit, bBit)
	const [secCarry, secSum] = halfAdder(cBit, initSum)
	const carry = or(initCarry, secCarry)
	return [carry, secSum]
}

export default fullAdder