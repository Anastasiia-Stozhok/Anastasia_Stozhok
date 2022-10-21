function nextBigger(givenNumber) {
  let digitsArray = givenNumber.toString().split("");
  const length = digitsArray.length;
  let i = 0;
  for (i = length - 1; i > 0; i--) {
    if (digitsArray[i] > digitsArray[i - 1]) break;
  }

  if (i === 0) return -1;

  for (let j = length - 1; j > i - 1; j--) {
    if (digitsArray[i - 1] < digitsArray[j]) {
      let tempDigit = digitsArray[i - 1];
      digitsArray[i - 1] = digitsArray[j];
      digitsArray[j] = tempDigit;
      break;
    }
  }

  let partToSort = digitsArray.slice(i);
  partToSort.sort((a, b) => a - b);
  let partIndex = partToSort.length - 1;
  for (let k = length - 1; k > i - 1; k--) {
    digitsArray[k] = partToSort[partIndex];
    partIndex--;
  }

  let result = digitsArray.reduce(
    (res, digit) => res * 10 + parseInt(digit),
    0
  );
  return result;
}

console.log(`1. 12 ==> ${nextBigger(12)}`);
console.log(`2. 513 ==> ${nextBigger(513)}`);
console.log(`3. 2017 ==> ${nextBigger(2017)}`);
console.log(`3. 7456972 ==> ${nextBigger(7456972)}`);
console.log(`5. 9 ==> ${nextBigger(9)}`);
console.log(`6. 111 ==> ${nextBigger(111)}`);
console.log(`7. 531 ==> ${nextBigger(531)}`);
