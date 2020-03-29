$(document).ready(function() {
  
  let game = new bowlingGame;
  $("form").submit(function () {
    alert("button is clicked");
  });
  
  function showTotal(num) {
    $("#totalScore").text(num);
  }
  
  $("#myButton").click(function (e) {
    alert("Button is Clicked")
  });

  
  
  
  
  
  


  $("#calculateScoreTest").click(function (e) {
    for(let i = 0; i < 9; i++) {game.addFrame([1, 1])}
    game.addLastFrame([10, 10, 10])
    let total;
    total = game.gameTotal()
    showTotal(total);
  });
})