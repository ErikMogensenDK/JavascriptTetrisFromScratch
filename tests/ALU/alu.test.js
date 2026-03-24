import { alu } from "../../ALU/alu"

// converter between integer and LSB-first 16-bit vector
const toBits = (v) => {
	const arr = new Array(16).fill(0)
	for (let i = 0; i < 16; i++) {
		arr[i] = (v >> i) & 1
	}
	return arr
}

// Manually created test arrays
const zeroArray = toBits(0x0000)
const oneArray = toBits(0x0001)
const notOneArray = toBits(0xFFFE)
const negOneArray = toBits(0xFFFF)

const xPattern = toBits(0x5555) // 0101 recurring
const yPattern = toBits(0x3333) // 0011 recurring

const xPlus1OverflowPattern = toBits(0xFFFF) // 65535 + 1 -> 0 (wrap)
const yPlus1CarryPattern = toBits(0x00FF) // 255 + 1 -> 256

const xNegPattern = toBits(0x0003) // 3 -> -3
const yNegPattern = toBits(0x8000) // -32768 -> 32768 (itself in signed two's complement)

// Test cases: [description, x, y, zx, nx, zy, ny, f, no, expected]
const testCases = [
	["0",     zeroArray, zeroArray, 1, 0, 1, 0, 1, 0, zeroArray],
	["1",     zeroArray, zeroArray, 1, 1, 1, 1, 1, 1, oneArray],
	["-1",    zeroArray, zeroArray, 1, 1, 1, 0, 1, 0, negOneArray],
	["x",     oneArray,  zeroArray, 0, 0, 1, 1, 0, 0, oneArray],
	["y",     zeroArray, oneArray,  1, 1, 0, 0, 0, 0, oneArray],
	["!x",    oneArray,  zeroArray, 0, 0, 1, 1, 0, 1, notOneArray],
	["!y",    zeroArray, oneArray,  1, 1, 0, 0, 0, 1, notOneArray],
	["-x",    oneArray,  zeroArray, 0, 0, 1, 1, 1, 1, negOneArray],
	["-y",    zeroArray, oneArray,  1, 1, 0, 0, 1, 1, negOneArray],
	["x+1",   zeroArray, zeroArray, 0, 1, 1, 1, 1, 1, oneArray],
	["y+1",   zeroArray, zeroArray, 1, 1, 0, 1, 1, 1, oneArray],
	["x-1",   zeroArray, zeroArray, 0, 0, 1, 1, 1, 0, negOneArray],
	["y-1",   zeroArray, zeroArray, 1, 1, 0, 0, 1, 0, negOneArray],
	["x+y",   oneArray,  oneArray,  0, 0, 0, 0, 1, 0, [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
	["x-y",   oneArray,  oneArray,  0, 1, 0, 0, 1, 1, zeroArray],
	["y-x",   oneArray,  oneArray,  0, 0, 0, 1, 1, 1, zeroArray],
	["x&y",   oneArray,  oneArray,  0, 0, 0, 0, 0, 0, oneArray],
	["x|y",   oneArray,  oneArray,  0, 1, 0, 1, 0, 1, oneArray],

	// edge cases
	["x+1 overflow", xPlus1OverflowPattern, zeroArray, 0, 1, 1, 1, 1, 1, zeroArray],
	["y+1 carry", zeroArray, yPlus1CarryPattern, 1, 1, 0, 1, 1, 1, toBits(0x0100)],
	["-x nonzero", xNegPattern, zeroArray, 0, 0, 1, 1, 1, 1, toBits(0xFFFD)],
	["-y nonzero", zeroArray, yNegPattern, 1, 1, 0, 0, 1, 1, yNegPattern],
	["x|y wide", xPattern, yPattern, 0, 1, 0, 1, 0, 1, toBits(0x7777)],
]

// Run data-driven tests
testCases.forEach(([desc, x, y, zx, nx, zy, ny, f, no, expected]) => {
	test(`ALU: ${desc}`, () => {
		const result = alu(x, y, zx, nx, zy, ny, f, no)
		expect(result.toString()).toStrictEqual(expected.toString())
	})
})
