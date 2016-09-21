//using filter to test arr for func (seconf argument)

function findElement(arr, func) {
  var num = 0;
  return arr.filter(func)[0]; //returning 1st element
}
