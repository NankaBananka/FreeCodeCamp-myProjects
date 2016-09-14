function convertToRoman(num) {
  /*resulting array*/
  var result = [];
  
  /* make two arrays for arabic and roman numerals for all values, which are not made with adding (IV) */
  var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; 
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  /* loop from the biggest arabic values (1000) */
  for (i = 0; i  < arabic.length; i++) {
    while (arabic[i] <= num){ //while [i] value of arabic array is less then num 
      result.push(roman[i]); //just add [i] value of roman array to result massive
      num -= arabic[i]; //and don't forget to reduce num
    };
  };
  return result.join(""); //make string from result array
};
