import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)

const sumOfNumber = (n) => {
  n = n.toString();

  if (n.length > 1) {
    let counter = 0;
    for (let i = 0; i < n.length; i += 1) {
      counter += Number(n[i]);
    }
    return counter;
  }
  return Number(n);
};

const addDigits = (num) => {
  let sum = sumOfNumber(num).toString();
  if (sum.length > 1) {
    sum = sumOfNumber(sum);
  }
  return Number(sum);
};

export default addDigits;
// END
