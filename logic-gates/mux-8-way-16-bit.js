import { mux16 } from './mux-16.js'

export function mux8Way(inA, inB, inC, inD, inE, inF, inG, inH, selector) {
	const aOrB = mux16(inA, inB, selector[0])
	const cOrD = mux16(inC, inD, selector[0])
	const eOrF = mux16(inE, inF, selector[0])
	const gOrH = mux16(inG, inH, selector[0])
	const aBOrCD = mux16(aOrB, cOrD, selector[1])
	const eFOrGH = mux16(eOrF, gOrH, selector[1])
	const final = mux16(aBOrCD, eFOrGH, selector[2])
	return final
}
