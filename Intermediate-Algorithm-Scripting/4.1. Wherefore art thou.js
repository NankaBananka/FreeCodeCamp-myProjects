function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  //making array from keys of source
  var sourceKeys = Object.keys(source);

  arr = collection.filter(function(obj){  //filtering collection array for right objects
    return sourceKeys.every(function(key){ //checking if for _every_ key in sourceKeys condition is true
      /*condition - checking for property [key] and value of that property. Use only bracket notation, 
      bcs we don't know exact name of the property */
      return (obj[key] === source[key] && obj.hasOwnProperty(key)); 
      });
  });
  
  
  // Only change code above this line
  return arr; //return result
}
