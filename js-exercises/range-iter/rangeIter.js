function rangeIter(lb, ub) {
  if (ub === undefined || typeof ub !== 'number' || lb === undefined || typeof lb !== 'number') {
    throw new TypeError('undefined is not a number');
  }
  const m = [];
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i += 1) {
      yield i;
    }
  }
  for (const value of generateSequence(lb, ub)) {
    m.push(value);
  }
  return m;
}
// function rangeIter(lb, ub) {
//   if (ub === undefined || typeof ub !== 'number' || lb === undefined || typeof lb !== 'number') {
//     throw new TypeError('undefined is not a number');
//   }
//   const x = [];
//   for (let i = lb; i <= ub; i += 1) {
//     x.push(i);
//   }
//   return x;
// }

export { rangeIter };
