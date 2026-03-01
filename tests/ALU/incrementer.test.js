import { inc16 } from "../../ALU/inc16";

function testInc16(input16, exp16) {
  test(
    `in:${input16.toString()} should increment to: ${exp16.toString()}`,
    () => {
      expect(inc16(input16).toString()).toStrictEqual(exp16.toString());
    }
  );
}

// Helper: 16-bit zero
const ZERO16 = Array(16).fill(0);

// in = 0000...0000 (0) -> out = 0000...0001 (1)
const in0 = [...ZERO16];
const exp0 = [
  1, // bit 0
  0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0  // bit 15
];
testInc16(in0, exp0);

// in = 0000...0001 (1) -> out = 0000...0010 (2)
const in1 = [
  1, // bit 0
  0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
];
const exp1 = [
  0, // bit 0
  1, // bit 1
  0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
];
testInc16(in1, exp1);

// in = 0000...1111 (15) -> out = 0001...0000 (16)
const in15 = [
  1, // bit 0
  1, // bit 1
  1, // bit 2
  1, // bit 3
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
];
const exp15 = [
  0, // bit 0
  0, // bit 1
  0, // bit 2
  0, // bit 3
  1, // bit 4
  0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0
];
testInc16(in15, exp15);

// in = 1111...1111 (65535) -> out wraps to 0000...0000 (0)
const inMax = Array(16).fill(1);
const expMax = [...ZERO16];
testInc16(inMax, expMax);
