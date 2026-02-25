import { or } from './or.js'

export function or16(inputA, inputB) {
	return inputA.map((x, i) => or(x, inputB[i]))
}