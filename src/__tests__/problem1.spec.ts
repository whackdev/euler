import { solution } from '../problem1';

describe('Multiples of 3 & 5', () => {
  it('should return a number', () => {
    expect(typeof solution(4)).toEqual('number');
  });
  it('should return the sum of all multiples of `3` or `5` less than `n`', () => {
    // [3, 5, 6, 9] = 23
    expect(solution(10)).toEqual(23);
    expect(solution(100)).toEqual(2318);
  });
});
