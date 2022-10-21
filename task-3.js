function sumOfDigits(givenNumber) {
  let digitsArray = givenNumber.toString().split("");
  let sum = digitsArray.reduce((sum, digit) => sum + parseInt(digit), 0);

  if (sum > 9) sum = sumOfDigits(sum);

  return sum;
}

console.log(`1 --> ${sumOfDigits(1)}`);
console.log(`16 --> ${sumOfDigits(16)}`);
console.log(`942 --> ${sumOfDigits(942)}`);
console.log(`13218 --> ${sumOfDigits(13218)}`);
console.log(`493193 --> ${sumOfDigits(493193)}`);
