import { and } from './and.js'

export function and16(inputA, inputB) {
	return inputA.map((x, i) => and(x, inputB[i]))
}