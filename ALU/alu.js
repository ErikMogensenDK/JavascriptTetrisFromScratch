import { mux16 } from "../logic-gates/mux-16"
import { not16 } from "../logic-gates/not-16"
import { add16 } from "../alu/add16"
import { and16 } from "../logic-gates/and-16"


export function alu(x16, y16, zx, nx, zy, ny, f, no){
	const zeroInput = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	const potentiallyZeroedX16 = mux16(x16, zeroInput, zx);
	console.log("potentiallyZeroedX16", potentiallyZeroedX16)
	const potentiallyZeroedY16 = mux16(y16, zeroInput, zy);
	console.log("potentiallyZeroedY16", potentiallyZeroedY16)

	const notX16Result = not16(potentiallyZeroedX16);
	console.log("notX16Result", notX16Result)
	const notOrZeroX = mux16(potentiallyZeroedX16, notX16Result, nx);
	console.log("notOrZeroX", notOrZeroX)

	const notY16Result = not16(potentiallyZeroedY16);
	console.log("notY16Result", notY16Result)
	const notOrZeroY = mux16(potentiallyZeroedY16, notY16Result, ny);
	console.log("notOrZeroY", notOrZeroY)


	const xPlusY = add16(notOrZeroX, notOrZeroY);
	console.log("xPlusY", xPlusY)
	const xAndY = and16(notOrZeroX, notOrZeroY);
	console.log("xAndY", xAndY)

	const fResult = mux16(xAndY, xPlusY, f);
	console.log("fResult", fResult)
	const notFResult = not16(fResult);
	console.log("notFResult", notFResult)

	const finalResult = mux16(fResult, notFResult, no)
	console.log("finalResult", finalResult)

	return finalResult;
}
// something to set the 16 bit array to 0