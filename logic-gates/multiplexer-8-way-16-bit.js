import { multiplexer16 } from './multiplexer-16.js'

export function multiplexer8Way(inA, inB, inC, inD, inE, inF, inG, inH, selector){
	const aOrB = multiplexer16(inA, inB, selector[0])
	const cOrD = multiplexer16(inC, inD, selector[0])
	const eOrF = multiplexer16(inE, inF, selector[0])
	const gOrH = multiplexer16(inG, inH, selector[0])
	const aBOrCD = multiplexer16(aOrB, cOrD, selector[1])
	const eFOrGH= multiplexer16(eOrF, gOrH, selector[1])
	const final = multiplexer16(aBOrCD, eFOrGH, selector[2])
	return final
}