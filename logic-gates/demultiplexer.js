import { and } from './and.js'
import { not } from './not.js'
export function demultiplexer(input, selector){
	const a = and(not(selector), input);
	const b = and(selector, input);
	return [a, b]
}
