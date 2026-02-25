import { multiplexer16 } from "./multiplexer-16";

export function multiplexer4Way(inA, inB, inC, inD, selectorArray){
	const aOrB = multiplexer16(inA, inB, selectorArray[0])
	const cOrD = multiplexer16(inC, inD, selectorArray[0])
	return multiplexer16(aOrB, cOrD, selectorArray[1])
}
