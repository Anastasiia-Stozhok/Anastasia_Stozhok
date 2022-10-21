function filterList(list) {
  return list.filter((element) => typeof element === "number");
}

module.exports = filterList;
