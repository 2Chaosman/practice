import { l, cons, reduce, has, reverse } from 'hexlet-pairs-data';

const union = (list1, list2) => {
  const unitedList = reduce((element, acc) => cons(element, acc), list2, reverse(list1));
  const filteredList1 = reduce((element, acc) => {
    if (!has(acc, element)) {
      return cons(element, acc);
    }
    return acc;
  }, l(), unitedList);
  return reverse(filteredList1);
};

const list1 = l(2, 3, 2, 1, 7);
const list2 = l(1, 5, 3, 5, 8, 9);
union(list1, list2);
