function firstNonRepeatingLetter(givenString) {
  let lowerCaseString = givenString.toLowerCase();

  for (let c of lowerCaseString) {
    let indexOfChar = lowerCaseString.indexOf(c);
    if (indexOfChar === lowerCaseString.lastIndexOf(c)) {
      return givenString.charAt(indexOfChar);
    }
  }

  return "";
}

console.log(`1. ${firstNonRepeatingLetter("stress")}`);
console.log(`2. ${firstNonRepeatingLetter("aabbCc")}`);
console.log(`3. ${firstNonRepeatingLetter("sTreSS")}`);
console.log(`4. ${firstNonRepeatingLetter("")}`);
console.log(`5. ${firstNonRepeatingLetter("S")}`);
