import {or} from './or.js'

export function or8Way(input){
	return input.reduce((acc, i) => or(acc, i), 0)
}