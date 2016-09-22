function addTogether() {
  var args = Array.prototype.slice.call(arguments); //making array from the arguments
  var a = args[0], b = args[1];
  
  
  //making function to check if type of argument is "number"
  var check = function(val){
    return typeof(val) === "number";
  };
  
  
  if (args.length === 2){
    if (check(a) && check(b)){ //if both args are numbers, then simply returning sum
      return a + b;
    } 
  //if we have 1 argument and it's type is "number" return another function (to request 2nd arg)
  } else if(args.length === 1 && check(a)){ 
      return function(y){
        if (check(y)){ //if 2nd arg's type is "number" returning sum of 1st and 2nd arguments
           return a + y;
        }
      };  
    }   

}

