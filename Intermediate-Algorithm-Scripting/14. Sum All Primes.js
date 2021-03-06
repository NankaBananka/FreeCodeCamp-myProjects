/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
*/


function sumPrimes(num) {
  if (num === 1){  //1 is not a prime
    return 0;
  }
  
  var primes = [];
  for (i = 2; i <= num; i++){
    var check = true;
    for (j = 0; j < primes.length; j++){
      if ((i % primes[j] === 0) && (i !== primes[j])){  //if we have devider except num itself, then it is not a prime, don't push in array
        check = false;
        break;
      }
    }
    if (check){
      primes.push(i);
    }
  }
  
  //reduce method to make a sum of array
  return primes.reduce(function(sum, current){
    return sum + current;
  }, 0);
}
