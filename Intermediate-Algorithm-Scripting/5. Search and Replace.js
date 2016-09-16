function myReplace(str, before, after) {
  
  if (before[0] == before[0].toUpperCase()){ //checking for the first uppercase letter
    //changing in after arg first letter for uppercase, if before match the condition
    after = after[0].toUpperCase() + after.substr(1); 
  }
  
  return str.replace(before, after); //replacing before arg by after arg
}
