import { demultiplexer } from './demultiplexer.js'

export function dmux4Way(input, selectorArray){
	const [ab, cd] = demultiplexer(input, selectorArray[1])
	const [a, b] = demultiplexer(ab, selectorArray[0])
	const [c, d] = demultiplexer(cd, selectorArray[0])
	return [a, b, c, d];
}