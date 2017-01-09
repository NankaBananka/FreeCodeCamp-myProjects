function sumPrimes(num) {
  if (num === 1){
    return 0;
  }
  
  var primes = [];
  for (i = 2; i <= num; i++){
    var check = true;
    for (j = 0; j < primes.length; j++){
      if ((i % primes[j] === 0) && (i !== primes[j])){
        check = false;
        break;
      }
    }
    if (check){
      primes.push(i);
    }
  }
  
  return primes.reduce(function(sum, current){
    return sum + current;
  }, 0);
}
