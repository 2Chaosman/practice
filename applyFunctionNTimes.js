const apply = (count, f, arg) => {

  const iter = (count, arg) => {
    if (count === 0) {
      return arg;
    } else {
      return iter(count - 1, f(arg));
    }
  }


  return iter(count, arg)

}

export default apply;
