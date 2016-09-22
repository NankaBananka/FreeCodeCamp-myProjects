function telephoneCheck(str) {
/*using RegExp is the only way to solve this
^(1?\s?) - checks if in the beginning we have "1" or "1 " or nothing
(\(\d{3}\)|\d{3}) - checks if next pattern we have is "###" or "(###)" (### - any number)
[\s\-] - checks if we have " " or "-" next
\d{3} - checks for "###" (# - number)
[\s\-] - see above
\d{4} - checks for "####" (# - number)
g - flag for "greedy" */

  var re =/^(1?\s?)?(\(\d{3}\)|\d{3})[\s\-]\d{3}[\s\-]\d{4}$/g;
  return re.test(str); //returns true if string matches RegExp
}

