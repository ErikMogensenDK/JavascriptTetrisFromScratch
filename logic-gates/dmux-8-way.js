import { demux } from "./demux";

export function dmux8Way(input, selectorArray){
	const [abcd, efgh] = demux(input, selectorArray[2])
	const [ab, cd] = demux(abcd, selectorArray[1])
	const [ef, gh] = demux(efgh, selectorArray[1])
	const [a, b] = demux(ab, selectorArray[0])
	const [c, d] = demux(cd, selectorArray[0])
	const [e, f] = demux(ef, selectorArray[0])
	const [g, h] = demux(gh, selectorArray[0])
	return [a, b, c, d, e, f, g, h]
}
