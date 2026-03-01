import { fullAdder } from './full-adder.js'

export function add16(a16, b16) {
	const resultArray = [];
	let carry = 0;
	[carry, resultArray[0]] = fullAdder(a16[0], b16[0], 0);
	[carry, resultArray[1]] = fullAdder(a16[1], b16[1], carry);
	[carry, resultArray[2]] = fullAdder(a16[2], b16[2], carry);
	[carry, resultArray[3]] = fullAdder(a16[3], b16[3], carry);
	[carry, resultArray[4]] = fullAdder(a16[4], b16[4], carry);
	[carry, resultArray[5]] = fullAdder(a16[5], b16[5], carry);
	[carry, resultArray[6]] = fullAdder(a16[6], b16[6], carry);
	[carry, resultArray[7]] = fullAdder(a16[7], b16[7], carry);
	[carry, resultArray[8]] = fullAdder(a16[8], b16[8], carry);
	[carry, resultArray[9]] = fullAdder(a16[9], b16[9], carry);
	[carry, resultArray[10]] = fullAdder(a16[10], b16[10], carry);
	[carry, resultArray[11]] = fullAdder(a16[11], b16[11], carry);
	[carry, resultArray[12]] = fullAdder(a16[12], b16[12], carry);
	[carry, resultArray[13]] = fullAdder(a16[13], b16[13], carry);
	[carry, resultArray[14]] = fullAdder(a16[14], b16[14], carry);
	[carry, resultArray[15]] = fullAdder(a16[15], b16[15], carry);
	return resultArray
}