function truthCheck(collection, pre) {
//reduce returns result of function from result and current value
  return collection.reduce(function(result, current){
  //checking if object in collection has exact property (pre) and that Boolean(pre) returns true (is not null, undefines, empty)
    if (current.hasOwnProperty(pre) && Boolean(current[pre])) {
      return result && true;  //function will return true only if all objects will satisfy the condition above
    } else {
      return false; //return false for all other variants, so function will return false (false && true == false)
    }
  },true); //result value for the first iteration
}
