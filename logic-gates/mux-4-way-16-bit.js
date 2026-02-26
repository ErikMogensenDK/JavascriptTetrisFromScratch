import { mux16 } from "./mux-16";

export function mux4Way(inA, inB, inC, inD, selectorArray) {
	const aOrB = mux16(inA, inB, selectorArray[0])
	const cOrD = mux16(inC, inD, selectorArray[0])
	return mux16(aOrB, cOrD, selectorArray[1])
}
