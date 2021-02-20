const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


module.exports = function toReadable (number) {
    let hundreds = 0;
    let lastNum = number % 10;
    if (number >= 100) {hundreds = Math.floor(number / 100);}
    let secondNum = Math.floor((number-(hundreds*100))/10);
    if (number < 10) {return numbers[number];}
    else if (lastNum == 0) {return tens[(number / 10) - 1];}
    else if (number > 10 && number < 20) {return teens[lastNum - 1];}
    else if (number > 20 && number < 100) {return tens[secondNum - 1] + ' ' + numbers[lastNum];}
    else if (number >= 100) {return numbers[hundreds]  + ' hundred ' + tens[secondNum - 1] + ' ' + numbers[lastNum];}
}
