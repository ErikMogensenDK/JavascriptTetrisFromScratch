import {multiplexer} from './multiplexer.js'

export function multiplexer16(inA, inB, selector){
	return inA.map((x, i) => (multiplexer(x, inB[i], selector[i])))
}