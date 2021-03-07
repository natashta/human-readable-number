const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let result="";
let hundreds = 0;

module.exports = function toReadable (number) {
    let lastNum = number % 10;
    let secondNum = Math.floor((number-(hundreds*100))/10);
    if (number == 0) {result = "zero";}
    else if (number == 100) {result = "one hundred";}
    else if (number < 10) {result = numbers[number -1];}
    else if (lastNum == 0) {result = tens[(number / 10) - 1];}
    else if (number > 10 && number < 20) {result = teens[lastNum - 1];}
    else if (number == 10 && number >= 20 && number < 100 ) {result = tens[secondNum - 1] + ' ' + numbers[lastNum -1];}
    else if (number >= 100 && lastNum == 0) {hundreds = Math.floor(number / 100); 
      result = numbers[hundreds -1] + ' hundred ' + tens[(number / 10) - 1];}
    else if (number > 100 && secondNum == 1 && lastNum !== 0) {hundreds = Math.floor(number / 100);
      result = numbers[hundreds -1] + ' hundred ' + teens[lastNum - 1];}
    else if (number > 100) {hundreds = Math.floor(number / 100); 
      result = numbers[hundreds -1]  + ' hundred ' + tens[secondNum - 1] + ' ' + numbers[lastNum -1];}

return result;
}
