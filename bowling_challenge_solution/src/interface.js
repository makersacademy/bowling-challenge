$(document).ready(function() {
  let total;  
  let game = new bowlingGame;
  // $("form").submit(function () {
  //   alert("button is clicked");
  // });
  
  function showTotal(num) {
    $("#totalScore").text(num);
  }

  $("#inputFrame").click(function (e) {
    let firstRoll;
    let secondRoll;
    firstRoll = parseInt($("#firstRoll").val());
    secondRoll = parseInt($("#secondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    
  })

  
  
  
  
  
  


  $("#calculateScoreTest").click(function (e) {
    // for(let i = 0; i < 8; i++) {game.addFrame([1, 1])};
    // game.addLastFrame([10, 10]);
    if(game.frames.length < 10) {
      showTotal("You have not put in enough frames to calculate the total.")
    } else {
      total = game.gameTotal();
      showTotal(total);
    }
    game = new bowlingGame
  });
})