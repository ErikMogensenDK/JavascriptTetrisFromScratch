import { and } from './and.js'
import { not } from './not.js'

export function demux(input, selector) {
	const a = and(not(selector), input)
	const b = and(selector, input)
	return [a, b]
}
