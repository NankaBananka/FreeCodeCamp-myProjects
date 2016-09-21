function translatePigLatin(str) {
  //using RegEx to match vowels in the word (all vowels of English alphabet)
  var vowels = /[aeiou]/gi;
 
  if (str[0].match(vowels)){ //checking if first letter of str (str[0]) is vowel
    return str + "way"; //simlly returning result: str + "way"
  } else{
    /*looking for first position of our RegEx vowels: ```str.match(vowels)[0]``` returns array, where first element is 
    first element which was found in string. indexOf is giving position of this element in string */
    firstVowel = str.indexOf(str.match(vowels)[0]); 
    /* slicing string to 2 parts: before first vowel and after, at the end simly cancatenating "ay"
    return str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
  }
  
}
