import { mux16 } from "../logic-gates/mux-16"
import { not16 } from "../logic-gates/not-16"
import { add16 } from "../alu/add16"
import { and16 } from "../logic-gates/and-16"

const ZERO_ARRAY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

export function alu(x16, y16, zx, nx, zy, ny, f, no){
	// Note: In hardware, all paths compute in parallel via mux selection.
	// For efficiency, we could conditionally compute, but this preserves the ALU's combinatorial nature.

	const zeroedX = mux16(x16, ZERO_ARRAY, zx);
	const zeroedY = mux16(y16, ZERO_ARRAY, zy);

	const notZeroedX = not16(zeroedX);
	const notOrZeroX = mux16(zeroedX, notZeroedX, nx);

	const notZeroedY16 = not16(zeroedY);
	const notOrZeroY = mux16(zeroedY, notZeroedY16, ny);


	const xPlusY = add16(notOrZeroX, notOrZeroY);
	const xAndY = and16(notOrZeroX, notOrZeroY);

	const fResult = mux16(xAndY, xPlusY, f);
	const notFResult = not16(fResult);

	const finalResult = mux16(fResult, notFResult, no)

	return finalResult;
}