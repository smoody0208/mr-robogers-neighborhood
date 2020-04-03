function robogersNeighborhood(message) {
  var result = [];

  if (number<0) {
    alert("Please Enter a Positive Number");
    return "";
    console.log(message);
  }

  for(var i = 0; i<= message; i++){
    if (i === 3) {
      result.push("won't you be my neighbor");
    } else if (i === 1) {
      result.push("beep");
    } else if (i === 2) {
      result.push("ping");
    } else {
      result.push(i);
    }
  }
  return result;
};