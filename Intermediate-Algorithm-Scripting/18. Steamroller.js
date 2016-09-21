function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  var makeItSimple = function(arg){ //making function 
    if (!Array.isArray(arg)){ //if element is not an array, we push ot into our resulting array
      result.push(arg);
    } else{
      for (var i in arg){ //for each element in element (which is array) running function again
        makeItSimple(arg[i]);
      }
    }
  };
  arr.map(makeItSimple); //assigning function to every element in arr
  return result; //returning resulting array
}

