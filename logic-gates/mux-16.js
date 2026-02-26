import { mux } from './mux.js'

export function mux16(inA, inB, selector) {
	return inA.map((x, i) => mux(x, inB[i], selector))
}
