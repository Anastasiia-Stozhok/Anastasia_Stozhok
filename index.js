const filterList = require("./tasks/task-1");
const firstNonRepeatingLetter = require("./tasks/task-2");
const sumOfDigits = require("./tasks/task-3");
const countPairs = require("./tasks/task-4");
const meeting = require("./tasks/task-5");
const nextBigger = require("./tasks/task-6");
const numberToIPv4 = require("./tasks/task-7");

console.log("Task 1:");
console.log(`1. [1, 2, "a", "B"] ==> [${filterList([1, 2, "a", "B"])}]`);
console.log(
  `2. [1, "a", "B", 0, 15] ==> [${filterList([1, "a", "B", 0, 15])}]`
);
console.log(
  `3. [1, 2, "abcd", "BC", "2", "123", 7] ==> [${filterList([
    1,
    2,
    "abcd",
    "BC",
    "2",
    "123",
    7,
  ])}]`
);

console.log("\nTask 2:");
console.log(`1. stress ==> ${firstNonRepeatingLetter("stress")}`);
console.log(`2. aabbCc ==> ${firstNonRepeatingLetter("aabbCc")}`);
console.log(`3. sTreSS ==> ${firstNonRepeatingLetter("sTreSS")}`);
console.log(`4. "" ==> ${firstNonRepeatingLetter("")}`);
console.log(`5. S ==> ${firstNonRepeatingLetter("S")}`);

console.log("\nTask 3:");
console.log(`1 --> ${sumOfDigits(1)}`);
console.log(`16 --> ${sumOfDigits(16)}`);
console.log(`942 --> ${sumOfDigits(942)}`);
console.log(`13218 --> ${sumOfDigits(13218)}`);
console.log(`493193 --> ${sumOfDigits(493193)}`);

console.log("\nTask 4:");
console.log(
  `1. The number of pairs in [1, 3, 6, 2, 2, 0, 4, 5] t = 5 is ${countPairs(
    [1, 3, 6, 2, 2, 0, 4, 5],
    5
  )} `
);
console.log(
  `2. The number of pairs in [1, 3, 6, 2, 2, 0, 4, 5] t = 2 is ${countPairs(
    [1, 3, 6, 2, 2, 0, 4, 5],
    2
  )} `
);
console.log(`3. The number of pairs in [] t = 5  is ${countPairs([], 5)} `);
console.log(`4. The number of pairs in [5] t = 5 is ${countPairs([5], 5)} `);

console.log("\nTask 5:");
console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);

console.log("\nTask 6:");
console.log(`1. 12 ==> ${nextBigger(12)}`);
console.log(`2. 513 ==> ${nextBigger(513)}`);
console.log(`3. 2017 ==> ${nextBigger(2017)}`);
console.log(`3. 7456972 ==> ${nextBigger(7456972)}`);
console.log(`5. 9 ==> ${nextBigger(9)}`);
console.log(`6. 111 ==> ${nextBigger(111)}`);
console.log(`7. 531 ==> ${nextBigger(531)}`);

console.log("\nTask 7:");
console.log(`1. 2149583361 ==> ${numberToIPv4(2149583361)}`);
console.log(`2. 306777600 ==> ${numberToIPv4(306777600)}`);
console.log(`3. 32 ==> ${numberToIPv4(32)}`);
console.log(`4. 0 ==> ${numberToIPv4(0)}`);
