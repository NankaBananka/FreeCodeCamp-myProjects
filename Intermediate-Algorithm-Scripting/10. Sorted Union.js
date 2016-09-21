function uniteUnique(arr) {
  
  //making one array from all arguments
  args = Array.prototype.slice.call(arguments).reduce(function(res, item){
    return res.concat(item);
  }); 
  
  //for each element in array checking if it is in array and pushing it, if it is not
  return args.reduce(function(res, item){
    if(res.indexOf(item) < 0){
      res.push(item);
    } 
    return res;
  }, []);
  
}
