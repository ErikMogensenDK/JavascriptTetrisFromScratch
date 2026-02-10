export function nand(aBit, bBit) {
	// return (aBit && bBit) ? 0 : 1
	return 1 - (aBit & bBit)
}