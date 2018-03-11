const isPalindrome = (word) => {
  const len = word.length;

  if (word.length < 2) {
    return true;
  }

  if (word[0] === word[len - 1]) {
    return isPalindrome(word.substr(1, len - 2));
  }

  return false;
};
