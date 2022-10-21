function sumOfDigits(givenNumber) {
  let digitsArray = givenNumber.toString().split("");
  let sum = digitsArray.reduce((sum, digit) => sum + parseInt(digit), 0);

  if (sum > 9) sum = sumOfDigits(sum);

  return sum;
}

module.exports = sumOfDigits;
