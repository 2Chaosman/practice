const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  } else {
    return begin + sequenceSum(begin, end - 1);
  }



  // END
};


export default sequenceSum;
