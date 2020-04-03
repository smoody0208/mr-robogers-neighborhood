function robogersNeighborhood(message) {
  var result = [];

  if (message < 0) {
    alert("Please Enter a Positive Number");
    return "";
    
  }

  for(var i = 0; i<= message; i++){
    if (i === 3) {
      result.push("won't you be my neighbor");
    } else if (i === 1) {
      result.push("beep");
    } else if (i === 2) {
      result.push("boop");
    } else {
      result.push(i);
    }
  }
  return result;
};

//Front-end:

$(document).ready(function(){
  $("form#robogers").submit(function(event){
    event.preventDefault();
    var result = robogersNeighborhood(message);
    var message = parseInt($("input#messageInput").val());
  console.log(result);
  console.log(message);
  });
  $("#result").show();
});