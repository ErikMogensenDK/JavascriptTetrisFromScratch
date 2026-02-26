import { dmux8Way } from "../../logic-gates/dmux-8-way";

function testDmux8Way(input, selectorArray, o1, o2, o3, o4, o5, o6, o7, o8) {
	test(`input: ${input}, with selector: ${selectorArray}, should give: ${o1}, ${o2}, ${o3}, ${o4}, ${o5}, ${o6}, ${o7}, ${o8}`, () =>
		expect(dmux8Way(input, selectorArray).toString()).toBe([o1, o2, o3, o4, o5, o6, o7, o8].toString())
	)
}

const selectA = [0, 0, 0]
const selectB = [1, 0, 0]
const selectC = [0, 1, 0]
const selectD = [1, 1, 0]
const selectE = [0, 0, 1]
const selectF = [1, 0, 1]
const selectG = [0, 1, 1]
const selectH = [1, 1, 1]

testDmux8Way(1, selectA, 1, 0, 0, 0, 0, 0, 0, 0)
testDmux8Way(1, selectB, 0, 1, 0, 0, 0, 0, 0, 0)
testDmux8Way(1, selectC, 0, 0, 1, 0, 0, 0, 0, 0)
testDmux8Way(1, selectD, 0, 0, 0, 1, 0, 0, 0, 0)
testDmux8Way(1, selectE, 0, 0, 0, 0, 1, 0, 0, 0)
testDmux8Way(1, selectF, 0, 0, 0, 0, 0, 1, 0, 0)
testDmux8Way(1, selectG, 0, 0, 0, 0, 0, 0, 1, 0)
testDmux8Way(1, selectH, 0, 0, 0, 0, 0, 0, 0, 1)