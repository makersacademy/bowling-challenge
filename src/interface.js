(function(){'use strict';}());

$(document).ready(function(){
  var game = new Game();
  var roll = new Roll();
  disableSpareButton();

  $("[type=button]").click(function(){
    rollBall(this.name);
  });

  function rollBall(pinsDown){
    if(roll.rollComplete === true){
      roll = new Roll();
      disableSpareButton();
    }
    roll.addRoll(parseInt(pinsDown));

    if((roll.rollComplete === false)&&(roll.roll.length === 1)){
      var num = game.currentRollNumber();
      var num1 = num+1;
      $('#edit-frame'+num1+'-1').val(roll.roll[0]);
      disableButtons(roll.roll[0]);
      enableSpareButton(roll.roll[0]);
    }
    if (roll.rollComplete){
      game.totalScore = 0;
      game.addFrame(roll);
      updateScoreCard();
      updateTotal();
      setTimeout(function() {
        if (isGameOver()){
          gameOver();
        } else {
          enableButtons();
          disableSpareButton();
        }
      }, 1000);
    }
  }

    function updateScoreCard(){
      for(var i=1;i<=game.frames.length;i++){
          if(game.frames[i-1].roll.length === 1){
            $('#edit-frame'+i+'-1').val(game.frames[i-1].roll[0]);
          } else if(game.frames[i-1].roll.length === 2){
            $('#edit-frame'+i+'-1').val(game.frames[i-1].roll[0]);
            $('#edit-frame'+i+'-2').val(game.frames[i-1].roll[1]);
          }
          $('#edit-frame'+i+'-res').val(game.frames[i-1].score);
          game.totalScore += game.frames[i-1].score
        }
      }

      function updateTotal(){
        $('#edit-game-result').val(game.totalScore);
      }


    // Need to call gameOver();  function at the end of the game.

    $("[name=b-new]").click(function(){
      game.newGame();
      roll.roll=[];
      enableButtons();
      disableSpareButton();
      for(var i=1;i<=10;i++){
        $('#edit-frame'+i+'-1').val("");
        $('#edit-frame'+i+'-2').val("");
        $('#edit-frame'+i+'-res').val("");
        $('#edit-game-result').val("");
      }
    });

    function disableSpareButton(){
      $("[id=var1-9]").prop('disabled',true);
      $("[id=var1-9]").animate({opacity:0.2});
    }

    function enableSpareButton(value){
      $("[id=var1-9]").prop('disabled',false);
      $("[id=var1-9]").animate({opacity:1});
      var nameVal = (10 - parseInt(value))
      $("[id=var1-9]").attr('name',nameVal);
    }

    function disableButtons(value){

      for(var i=(10-value);i<=10;i++){
        var string = "[name="+i+"]";
        $(string).prop('disabled',true);
        $(string).animate({opacity:0.2});
      }
    }

    function enableButtons(){
      for(var i=0;i<=10;i++){
        var string = "[name="+i+"]";
        $(string).prop('disabled',false);
        $(string).animate({opacity:1});
      }
    }

// ################################################### Need to call this!
    function isGameOver(){
      // alert(game.frames.length);
      return (game.frames.length === 10);
    }

    function gameOver(){
      disableButtons(10);
      disableSpareButton();
      if(game.totalScore === 0){
        alert("COMMISERATIONS!!! You just completed a gutter game.")
      } else if(game.totalScore === 300){
        alert("CONGRATULATIONS!!! You just completed a perfect game.")
      } else {
        alert("Thank you for playing");
      }
    }

  console.log(game.showAllFrames());

})
