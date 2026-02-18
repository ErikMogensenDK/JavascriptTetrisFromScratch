import and from './and.js'
import not from './not.js'

export function or(aBit, bBit){
	const andVar = not(and(not(aBit),not(bBit)))
	return(andVar)
}
export default or