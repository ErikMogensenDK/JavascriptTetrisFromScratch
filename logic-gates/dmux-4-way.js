import { demux } from './demux.js'

export function dmux4Way(input, selectorArray){
	const [ab, cd] = demux(input, selectorArray[1])
	const [a, b] = demux(ab, selectorArray[0])
	const [c, d] = demux(cd, selectorArray[0])
	return [a, b, c, d];
}