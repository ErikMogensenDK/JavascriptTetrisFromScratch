import { nand } from '../../logic-gates/nand.js';

describe('Nand test', () =>{
  test('0 and 0 should return 1', () =>
    expect(nand(0,0)).toBe(1)
  )
})

describe('Nand test', () =>{
  test('0 and 1 should return 1', () =>
    expect(nand(0,1)).toBe(1)
  )
})

describe('Nand test', () =>{
  test('1 and 0 should return 1', () =>
    expect(nand(0,1)).toBe(1)
  )
})

describe('Nand test', () =>{
  test('1 and 1 should return 0', () =>
    expect(nand(1,1)).toBe(0)
  )
})

