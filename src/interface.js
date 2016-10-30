$(document).ready(function(){
  var game = new Game();
  var roll = new Roll();

  $("[type=button]").click(function(){
    rollBall(this['name']);
  });

  function rollBall(pinsDown){
    if(roll.rollComplete === true){
      roll = new Roll();
    }
    roll.addRoll(parseInt(pinsDown));
    if((roll.rollComplete === false)&&(roll.roll.length === 1)){
      var num = game.currentRollNumber();
      var num1 = num+1;
      $('#edit-frame'+num1+'-1').val(roll.roll[0]);
    }
    if (roll.rollComplete){
      game.totalScore = 0;
      game.addFrame(roll);
      updateScoreCard();
      updateTotal();
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
      // alert("hey!");
      for(var i=1;i<=10;i++){
        $('#edit-frame'+i+'-1').val("");
        $('#edit-frame'+i+'-2').val("");
        $('#edit-frame'+i+'-res').val("");
        $('#edit-game-result').val("");
      }
    });


  console.log(game.showAllFrames());




  //#######################################################

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // roll = new Roll();
  // roll.addRoll(8);
  // console.log(roll.showRoll(1));
  // // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // game = new Game();
  // game.addFrame("testgame1");
  // console.log(game.showFrame(1));
  // game.addFrame("testgame2");
  // console.log(game.showFrame(2));



})
