$(document).ready(function(){
  var game = new Game();
  var roll = new Roll();

  // Function to detect button clicked.
  // $("#value_of_scorebutton_clicked",function(){
    roll.addRoll(8);
    roll.addRoll(2);
    // console.log(roll.showRoll(1));
  // })

  if (roll.rollComplete){
    game.addFrame(roll);
    updateScoreCard();
    updateTotal();
  }

  // alert(game.frames[0].score);

  function updateScoreCard(){
    for(var i=1;i<=game.frames.length;i++){
        if(game.frames[i-1].roll.length === 1){
          $('#edit-frame'+i+'-1').val(game.frames[i-1].roll[0]);
        } else if(game.frames[i-1].roll.length === 2){
            $('#edit-frame'+i+'-1').val(game.frames[i-1].roll[0]);
            $('#edit-frame'+i+'-2').val(game.frames[i-1].roll[1]);
          }
        $('#edit-frame'+i+'-res').val(game.frames[i-1].score);      //game.frames[i].
      }
    }

    function updateTotal(){
      // $('#edit-game-result') = 
    }

  //edit-frame1-res
  //edit-frame1-1, edit-frame1-2, edit-frame2-1


  //console.log(game.showFrame(1));
  roll = new Roll();

  roll.addRoll(10);

  if (roll.rollComplete){
    game.addFrame(roll);
  }
  //console.log(game.showFrame(2));

  console.log(game.showAllFrames());




  //#######################################################

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  roll = new Roll();
  roll.addRoll(8);
  console.log(roll.showRoll(1));
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  game = new Game();
  game.addFrame("testgame1");
  console.log(game.showFrame(1));
  game.addFrame("testgame2");
  console.log(game.showFrame(2));



})
