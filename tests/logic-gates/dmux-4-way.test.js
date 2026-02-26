import { dmux4Way } from "../../logic-gates/dmux-4-way";

function testDmux4Way(input, selectorArray, o1, o2, o3, o4) {
	test(`input: ${input}, with selector: ${selectorArray}, should give: ${o1}, ${o2}, ${o3}, ${o4}`, () =>
		expect(dmux4Way(input, selectorArray).toString()).toBe([o1, o2, o3, o4].toString())
	)
}

const selectA = [0, 0]
const selectB = [1, 0]
const selectC = [0, 1]
const selectD = [1, 1]

testDmux4Way(1, selectA, 1, 0, 0, 0)
testDmux4Way(1, selectB, 0, 1, 0, 0)
testDmux4Way(1, selectC, 0, 0, 1, 0)
testDmux4Way(1, selectD, 0, 0, 0, 1)