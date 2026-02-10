import {nand} from './nand.js'
import {not} from './not.js'
export function and(aBit, bBit){
	return not(nand(aBit,bBit))
}

export default and;