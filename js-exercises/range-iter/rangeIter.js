// implemented with * [ Symbol.iterator]()

function rangeIter(lb, ub) {
  if (ub === undefined || typeof ub !== 'number' || lb === undefined || typeof lb !== 'number') {
    throw new TypeError('undefined is not a number');
  }
  const rangeArray = [];
  const range = {
    from: lb,
    to: ub,
    * [Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value += 1) {
        yield value;
      }
    },
  };
  for (const value of range) {
    rangeArray.push(value);
  }
  return rangeArray;
}

// implemented with function* and yield

// function rangeIter(lb, ub) {
//   if (ub === undefined || typeof ub !== 'number' || lb === undefined || typeof lb !== 'number') {
//     throw new TypeError('undefined is not a number');
//   }
//   const rangeArray = [];
//   function* generateSequence(start, end) {
//     for (let i = start; i <= end; i += 1) {
//       yield i;
//     }
//   }
//   for (const value of generateSequence(lb, ub)) {
//     rangeArray.push(value);
//   }
//   return rangeArray;
// }

// implemented with normal js

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
