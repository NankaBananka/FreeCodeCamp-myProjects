function fearNotLetter(str) {

  var value1 = str.charCodeAt(0); //finding charcode in utf-16 for first letter in string
  var value2 = str.charCodeAt(str.length-1); //finding charcode in utf-16 for last letter in string

  //loop for all charcodes between first and last one
  for (var i = value1; i <= value2; i++) { 
    if(str.indexOf(String.fromCharCode(i)) === -1 ) { //checking if letter from sequence (value1, ..., value2) is NOT in str
      return String.fromCharCode(i); //returning letter
    }
  }

}

