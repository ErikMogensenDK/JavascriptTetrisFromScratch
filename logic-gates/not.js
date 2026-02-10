import {nand} from './nand.js'

export function not(aBit){
	return nand(aBit,aBit);
}
export default not;
