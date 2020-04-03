function robogersNeighborhood(message) {
  var result = [];
  var beepBoop = ["beep", "boop", "won't you be my neighbor"];

  if (message<=0) {
    alert("Please Enter a Positive Number");
    
  }

  for(var i=1; i<= message; i++){
    if (i === 3) {
      result.push(beepBoop[2]);
    } else if (i === 1) {
      result.push("beep");
    } else if (i === 2) {
      result.push("boop");
    } else {
      result.push("" + i);
    }
  }
  return result;
};

//Front-end:

$(document).ready(function(){
  $("form#robogers").submit(function(event){
    event.preventDefault();
    var message = parseInt($("input#messageInput").val());
    var output = robogersNeighborhood(message);
    
    
    $("#result").text(output);
  console.log(output);
  });
});