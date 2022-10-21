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

module.exports = firstNonRepeatingLetter;
