import {and} from './and.js'
import {not} from './not.js'
import {or} from './or.js'

export function xor(aBit, bBit) {
	const tmp1 = and(not(aBit), bBit)
	const tmp2 = and(not(bBit), aBit)

	return(or(tmp1,tmp2))
}

export default xor;