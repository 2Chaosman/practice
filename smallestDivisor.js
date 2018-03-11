const smallestDivisor = (num) => {
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  const iter = (n, divider) => {
    if (n % divider === 0) {
      return divider;
    }
    return iter(n, divider + 1);
  };
  return iter(num, 2);
};

export default smallestDivisor;
