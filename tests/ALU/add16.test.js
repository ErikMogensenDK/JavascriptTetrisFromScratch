import { add16 } from "../../ALU/add16";

function testAdd16(a16, b16, exp16) {
	test(`a16:${a16.toString()} and b16:${b16.toString()} should give: ${exp16.toString()}`, () => {
		expect(add16(a16, b16).toString()).toStrictEqual(exp16.toString());
	})
}

// 0000000000001010 (10)
const a16 = [
  0, // bit 0 (lsb)
  1, // bit 1
  0, // bit 2
  1, // bit 3
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0  // bit 15 (msb)
];

// 0000000000000111 (7)
const b16 = [
  1, // bit 0
  1, // bit 1
  1, // bit 2
  0, // bit 3
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
];

// 0000000000010001 (17)
const exp16 = [
  1, // bit 0
  0, // bit 1
  0, // bit 2
  0, // bit 3
  1, // bit 4
  0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
];
testAdd16(a16, b16, exp16);
