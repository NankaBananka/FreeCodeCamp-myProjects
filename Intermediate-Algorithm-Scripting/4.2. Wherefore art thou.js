function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var sourceKeys = Object.keys(source); //making array from properties of the source arg


   arr = collection.filter(function(obj){ //filtering collection array for right objects
     return sourceKeys.reduce(function(result, key){ //using reduce to check elements of sourceKeys to condition (return result after every iteration)
       return obj[key] === source[key] && obj.hasOwnProperty(key); //checking for conditions. Using only bracket notation
     }, false); //initial value = false, bcs at first we don't have any object satisfying the conditions
   });
  
    
    
  // Only change code above this line
  return arr; //returning result
}

