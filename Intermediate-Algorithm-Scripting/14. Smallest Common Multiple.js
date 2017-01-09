function smallestCommons(arr) {
//sorting array, bcs logically better to begin from largest numbers
  arr.sort(function(a, b){
    return b - a;
  });
 
 //creating ranged array (we need to find least common multiply to all numbers in _range_)
  var newarr = [];
  for (i = arr[0]; i >= arr[1]; i--){
    newarr.push(i);
  }
  
  //Euclid's algorithm for finding greatest common devider (we need it to find LCM)
  function gcd(x, y){
    if (x % y === 0){
      return y;
    } else{
      return gcd(y, x % y);
    }
}
  //function for making LCM
  function scm(x, y){
    return (x * y)/gcd(x, y);
  }
   
  //implementing reduce method to array to find LCM for all elements 
  //(The gcd is an associative function: gcd(a, gcd(b, c)) = gcd(gcd(a, b), c) )
  return newarr.reduce(function(previous, current){
    var gcdStart = gcd(previous, current);
    console.log(scm(previous, current));
    return scm(previous, current);
  });
  
}
