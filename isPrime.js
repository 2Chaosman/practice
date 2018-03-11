const isPrime = (num) => {
  if (num <= 0) {
    return false;
  } else if (num === 1) {
    return false;
  }
  let divider = 0

  for (let counter = 1; counter <= num; counter++) {
    if (num % counter === 0) {
      divider++;
    }
  }

  if (divider > 2) {
    return false;
  } else {
    return true;
  }
};
// END

export default isPrime;
