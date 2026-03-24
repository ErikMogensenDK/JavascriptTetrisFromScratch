import { mux16 } from "../logic-gates/mux-16"
import { not16 } from "../logic-gates/not-16"
import { add16 } from "../alu/add16"
import { and16 } from "../logic-gates/and-16"


export function alu(x16, y16, zx, nx, zy, ny, f, no){
	const zeroInput = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	const potentiallyZeroedX16 = mux16(x16, zeroInput, zx);
	const potentiallyZeroedY16 = mux16(y16, zeroInput, zy);

	const notX16Result = not16(potentiallyZeroedX16);
	const notOrZeroX = mux16(potentiallyZeroedX16, notX16Result, nx);

	const notY16Result = not16(potentiallyZeroedY16);
	const notOrZeroY = mux16(potentiallyZeroedY16, notY16Result, ny);


	const xPlusY = add16(notOrZeroX, notOrZeroY);
	const xAndY = and16(notOrZeroX, notOrZeroY);

	const fResult = mux16(xAndY, xPlusY, f);
	const notFResult = not16(fResult);

	const finalResult = mux16(fResult, notFResult, no)

	return finalResult;
}
// something to set the 16 bit array to 0