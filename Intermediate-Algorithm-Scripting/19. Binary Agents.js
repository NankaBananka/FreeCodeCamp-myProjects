function binaryAgent(str) {
//spliting string to the array
  str = str.split(" ").map(function(val){ //using map to assign a function to each element in the array
  //parseInt convert from binary type to int (charcode), fromCharCode returns element instead of code of element
    return String.fromCharCode(parseInt(val,2)); 
  }).join(""); //joining to the string
  
  return str;
}
