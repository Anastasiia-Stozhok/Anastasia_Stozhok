function numberToIPv4(number) {
  let binaryNumber = number.toString(2).padStart(32, "0");
  let partOfIP = [];

  for (let i = 4; i > 0; i--) {
    partOfIP.push(binaryNumber.slice(32 - i * 8, 40 - i * 8));
  }
  partOfIP.forEach((elem, index) => (partOfIP[index] = parseInt(elem, 2)));

  return partOfIP.join(".");
}

console.log(`1. 2149583361 ==> ${numberToIPv4(2149583361)}`);
console.log(`2. 306777600 ==> ${numberToIPv4(306777600)}`);
console.log(`3. 32 ==> ${numberToIPv4(32)}`);
console.log(`4. 0 ==> ${numberToIPv4(0)}`);
