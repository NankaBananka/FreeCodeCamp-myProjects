function sym(args) {

  var argsArray = Array.prototype.slice.call(arguments);

  // this function is exactly as per code taken from challenge "diff two arrays"
  var arrCheck = function(arr1, arr2){
    var arr1Filtered = [], arr2Filtered = [];

    arr1Filtered = arr1.filter(function(value) {
        return (arr2.indexOf(value) === -1);
    });

    arr2Filtered = arr2.filter(function(value) {
      return (arr1.indexOf(value) === -1);
    });

    return [].concat(arr1Filtered,arr2Filtered);    
  };

  // filter out as per Symmetric difference rules
  var result = argsArray.reduce(function(result, current){
    return arrCheck(result, current);
  },[]);

  //remove duplicates from results array
  return result.filter(function(item, pos) {
    return result.indexOf(item) === pos;
  });

}

