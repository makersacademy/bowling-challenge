$(document).ready(function(){
  var game = new Game();
  var roll = new Roll();
  disableSpareButton();

  $("[type=button]").click(function(){
    rollBall(this['name']);
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
      enableSpareButton();
    }
    if (roll.rollComplete){
      game.totalScore = 0;
      game.addFrame(roll);
      updateScoreCard();
      updateTotal();
      enableButtons();
      disableSpareButton();
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
        // (game.frames).forEach(function(val){
        //   alert(val.score);
        //   game.totalScore += val.score
        // })
        $('#edit-game-result').val(game.totalScore);
      }
    }

    $("[name=b-new]").click(function(){
      game.newGame();
      roll.roll=[];
      for(var i=1;i<=10;i++){
        $('#edit-frame'+i+'-1').val("");
        $('#edit-frame'+i+'-2').val("");
        $('#edit-frame'+i+'-res').val("");
        $('#edit-game-result').val("");
      }
    });

    function disableSpareButton(){
      $("[name=var1-9]").prop('disabled',true);
    }

    function enableSpareButton(){
      $("[name=var1-9]").prop('disabled',false);
    }

    function disableButtons(value){

      for(var i=(10-value);i<=10;i++){
        var string = "[name="+i+"]";
        $(string).prop('disabled',true);
      }
    }

    function enableButtons(){
      for(var i=0;i<=10;i++){
        var string = "[name="+i+"]";
        $(string).prop('disabled',false);
      }
    }

  console.log(game.showAllFrames());

})
