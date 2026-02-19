import {and} from './and.js'
import {not} from './not.js'

export function xor(aBit, bBit) {
	return(and(not(aBit), bBit))
}

export default xor;