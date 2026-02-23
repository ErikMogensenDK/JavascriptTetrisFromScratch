import { and } from './and.js'
import { not } from './not.js'

export function or(aBit, bBit){
	return (not(and(not(aBit), not(bBit))));
}