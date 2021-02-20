const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const hundreds = "";
const result = "";
 
module.exports = function toReadable (number) {
  
    let lastNum = number % 10;
    if (number < 10) {return numbers[number];}
    else if (lastNum == 0) {return tens[(number / 10) - 1];}
    else if (number > 10 && number < 20) {return teens[lastNum - 1];}

    }
