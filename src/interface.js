$( document ).ready(function() {

  var bowling = new Bowling();
  var firstThrow = bowling.firstThrow;

  $('.btn-primary').on('click', function() {
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
      };
    };
    firstThrow = bowling.firstThrow;
    frameScore();
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


  gameover = function(){
    if(bowling.scorecard.length >= 10){
      $("#gameover").show();
    };
  };

});
