import { and } from "../logic-gates/and"
import { xor } from "../logic-gates/xor" 

export function halfAdder(aBit, bBit){
	const carry = xor(aBit, bBit)
	const sum = and(aBit, bBit)
	return [sum, carry]
}
