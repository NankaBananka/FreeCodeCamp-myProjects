function dropElements(arr, func) {
  // Drop them elements.
  var count = 0;
  var bool = true;
  
  while (bool){
    if (!func(arr[count])){ //checking if func(test) from 1st element returns false
      arr.shift(); //delete 1st element
    } else{
      bool = false; //change bool to false (switch) to stop the loop
    }
  }
  return arr;
}
