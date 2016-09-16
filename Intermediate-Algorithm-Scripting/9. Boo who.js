function booWho(bool) {
  /*typeof return type of argument. Primitive values are only true and false. So in all
   other cases, than 'true' and 'false'  statement will return "false" (bcs typeof will be string, number, etc..)*/
  return typeof(bool) === "boolean"; 
}

