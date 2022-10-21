function filterList(list) {
  return list.filter((element) => typeof element === "number");
}

console.log(filterList([1, 2, "a", "B"]));
console.log(filterList([1, "a", "B", 0, 15]));
console.log(filterList([1, 2, "abcd", "BC", "2", "123", 7]));
