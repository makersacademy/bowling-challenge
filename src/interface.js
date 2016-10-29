$(document).ready(function(){
  var game = new Game();
  var roll = new Roll();

  // Function to detect button clicked.
  // $("#value_of_scorebutton_clicked",function(){
    roll.addRoll(8);
    roll.addRoll(2);
    // console.log(roll.showRoll(1));
  // })

  game.addFrame(roll);
  //console.log(game.showFrame(1));
  roll = new Roll();
  roll.addRoll(7);
  roll.addRoll(1);

  game.addFrame(roll);
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
