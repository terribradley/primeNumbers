$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("#userInput").val());
    var numList = [];
    // debugger;
    for (var i=2;i<=n;i++) numList.push(i);
    console.log(numList);

    for (i=0 ; i<numList.length ; i++) {
      var numListLength = numList.length;
      for (var x = numListLength ; x>i ; x--) {
        if (numList[x]%numList[i]===0) {
          console.log("slice"+numList[x]);
          numList.splice(x,1);
        }
      }
    }


    console.log(numList);

  });
});
