/**
 * Returns the sum of all multiples of 3 or 5 less than `n`
 */
function solution(n: Number) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

export { solution };
