import {and} from './and.js'
import {not} from './not.js'
import {or} from './or.js'

export function xor(aBit, bBit) {
	const both = and(aBit, bBit)
	const either = or(aBit,bBit)
	return(and(either, not(both)))
}

export default xor;