//Back-end

function robogersNeighborhood(message) {
  var result = [];
  var beepBoop = ["beep", "boop", "won't you be my neighbor"];
  var num = [1, 2, 3];

  if (message<=0) {
    alert("Please Enter a Positive Number");
    return "";
    
  }

  for(var i=0; i<= message; i++){
    if (i === num[2]) {
      result.push(" " + beepBoop[2]);
    } else if (i === num[0]) {
      result.push(" " + beepBoop[0]);
    } else if (i === num[1]) {
      result.push(" " + beepBoop[1]);
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