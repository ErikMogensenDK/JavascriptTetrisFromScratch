import { halfAdder } from "./half-adder";
export function inc16(in16){
	let carry = 0;
	const resultArray = [];
	[carry, resultArray[0]]= halfAdder(in16[0], 1);
	[carry, resultArray[1]]= halfAdder(in16[1], carry);
	[carry, resultArray[2]]= halfAdder(in16[2], carry);
	[carry, resultArray[3]]= halfAdder(in16[3], carry);
	[carry, resultArray[4]]= halfAdder(in16[4], carry);
	[carry, resultArray[5]]= halfAdder(in16[5], carry);
	[carry, resultArray[6]]= halfAdder(in16[6], carry);
	[carry, resultArray[7]]= halfAdder(in16[7], carry);
	[carry, resultArray[8]]= halfAdder(in16[8], carry);
	[carry, resultArray[9]]= halfAdder(in16[9], carry);
	[carry, resultArray[10]]= halfAdder(in16[10], carry);
	[carry, resultArray[11]]= halfAdder(in16[11], carry);
	[carry, resultArray[12]]= halfAdder(in16[12], carry);
	[carry, resultArray[13]]= halfAdder(in16[13], carry);
	[carry, resultArray[14]]= halfAdder(in16[14], carry);
	[carry, resultArray[15]]= halfAdder(in16[15], carry);
	return resultArray
}