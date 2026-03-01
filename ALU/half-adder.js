import { and } from "../logic-gates/and.js"
import { xor } from "../logic-gates/xor.js" 

export function halfAdder(aBit, bBit){
	const sum = xor(aBit, bBit)
	const carry = and(aBit, bBit)
	return [carry, sum]
}
