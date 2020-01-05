$( document ).ready(function() {

  var bowling = new Bowling();
  var firstThrow = bowling.firstThrow;
  var gameover = false;

  $('.btn-primary').on('click', function() {
    console.log(gameover);
    if(gameover == false){
      var score = parseInt($(this).attr('data-scoreid'));
      if(score == 10 && firstThrow == true){
        bowling.addScore(score);
        bowling.updateTotal();
        updateScoreBoard();
      } else if(firstThrow == true){
        bowling.addScore(score);
      } else if(firstThrow == false){
        if(typeof(bowling.isRollValid(score)) == "number"){
          bowling.addScore(score);
          bowling.updateTotal();
          $("#comments").hide();
          updateScoreBoard();
        } else{
          $("#comments").text(bowling.addScore(score)).show();
          return;
        };
      };
      frameScore();
      gameoverCheck();
      firstThrow = bowling.firstThrow;
    };
  });

  frameScore = function(){
    for(var i = 0; i < bowling.scorecard.length; i++){
      eval(`frame${i+1}.innerHTML = bowling.scorecard[${i}]`);
    };
  };

  updateScoreBoard = function(){
    for(var i = bowling.scorecard.length-1; i < bowling.scorecard.length; i++){
      eval(`marker${i}.innerHTML = bowling.total`);
    };
  };

  gameoverCheck = function(){
    if(bowling.scorecard.length == 12){
      setGameover();
    } else if(bowling.scorecard.length == 11){
      if(bowling.scorecard[9][1] != 0){
        if (bowling.scorecard[10][0] != 10){
          bowling.updateTotal();
          updateScoreBoard();
        };
        $(".cellframe12").remove();
        setGameover();
      } else{
        if(bowling.scorecard[10][0] != 10){
          $(".cellframe12").remove();
          bowling.updateTotal();
          updateScoreBoard();
          setGameover();
        };
      };
    } else if(bowling.scorecard.length == 10 && firstThrow == false && bowling.scorecard[9][0] + bowling.scorecard[9][1] != 10){
      $(".cellframe12").remove();
      $(".cellframe11").remove();
      setGameover();
    };
  };

  setGameover = function(){
    gameover = true;
    $("#gameover").text(`Gameover! Your score is ${bowling.total}`).show();
  };

});
