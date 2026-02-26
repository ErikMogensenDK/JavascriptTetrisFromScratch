import { demultiplexer } from "./demultiplexer";

export function dmux8Way(input, selectorArray) {
	const [abcd, efgh] = demultiplexer(input, selectorArray[2])
	const [ab, cd] = demultiplexer(abcd, selectorArray[1])
	const [ef, gh] = demultiplexer(efgh, selectorArray[1])
	const [a, b] = demultiplexer(ab, selectorArray[0])
	const [c, d] = demultiplexer(cd, selectorArray[0])
	const [e, f] = demultiplexer(ef, selectorArray[0])
	const [g, h] = demultiplexer(gh, selectorArray[0])
	return [a, b, c, d, e, f, g, h]
}