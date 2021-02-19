function curry(fn) {
  return function curriedSolution(...value1) {
    if (value1.length >= fn.length) {
      return fn.apply(this, value1);
    }
    return function curried(...value2) {
      return curriedSolution.apply(this, value1.concat(value2));
    };
  };
}

export {
  curry,
};
