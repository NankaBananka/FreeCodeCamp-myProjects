function checkCashRegister(price, cash, cid) {
  var change = (cash - price) * 100, 
      changeLeft = change,
      totalChange = [],

      notes =  {"ONE HUNDRED":10000, 
                "TWENTY": 2000, 
                "TEN":1000,
                "FIVE": 500, 
                "ONE": 100, 
                "QUARTER": 25, 
                "DIME": 10,
                "NICKEL": 5, 
                "PENNY": 1 };

      
  var totalSum = function(arr){
    return arr.reduce(function(result,current){
      result += current[1] * 100;
      return result;
    }, 0);
  };

  
  if (totalSum(cid) < change) {
    return "Insufficient Funds";
  } else if (totalSum(cid) === change) {
    return "Closed";
  }
 
  
  for (var i = cid.length-1; i >= 0; i--){
    var note = cid[i][0],
        noteTotal = cid[i][1] * 100,
        noteValue = notes[note],
        noteAmount = noteTotal/noteValue,
        toChange = 0;
    while (changeLeft >= noteValue && noteAmount > 0){
      changeLeft -= noteValue;
      noteAmount --;
      toChange ++;
    }
    if (toChange !== 0){
      totalChange.push([note, (toChange * noteValue)/100]);
    }    
  }
  
  if (totalSum(totalChange) !== change){
    return "Insufficient Funds";
  }
  
  
  return totalChange;
}

