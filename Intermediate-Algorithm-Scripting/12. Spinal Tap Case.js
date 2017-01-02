function spinalCase(str) {
  var re1 = /([a-z])([A-Z])/g,    //regExp for finding words without split simbol between 
      re2 = /[\s\_]/g;            //regExp for finding space and "_" simbols
  
  
  //first replace insert space between wirds where needed, second - replace all simbols to "-"
  return str.replace(re1, '$1 $2').replace(re2, "-").toLowerCase();
  
}
