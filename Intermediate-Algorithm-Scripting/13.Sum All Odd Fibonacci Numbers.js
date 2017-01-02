function sumFibs(num) {
  var previous = 0,
      current = 1,
      sum = 0;
  
  while (current <= num) {
    if (current % 2 !== 0) {
      sum = sum + current;
    }
    var next = previous + current;
    previous = current;
    current = next;
  }
   
  return sum;
}
