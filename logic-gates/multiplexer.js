import { or } from './or.js'
import { and } from './and.js'
import { not } from './not.js'

export function multiplexer(aBit, bBit, selector){
	const aSelectedPath = and(not(selector), aBit)
	const bSelectedPath = and(selector, bBit)
	return or(aSelectedPath, bSelectedPath)
}