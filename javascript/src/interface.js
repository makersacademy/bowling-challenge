let game = new Game
let frame = new Frame

$( "#add_roll" ).submit(function(event) {
  event.preventDefault();
  let roll = $( "#roll").val();
  frame.addRoll(parseInt(roll), game);
  $( "#rolls" ).before(roll + " ")
  if (game.finalFrame()) {
    if (frame.isStrike() && frame.rolls.length === 1) {
    $( "#message" ).text("You bowled a strike in the last frame! Two bonus rolls!")
    }
    if (frame.isStrike() && frame.rolls.length === 2) {
    $( "#message" ).text("One more roll!");
    }
    if (frame.isStrike() && frame.rolls.length === 3) {
      game.addFrame(frame)
      $( "#add_rolls" ).hide()
      $( "#message" ).text(`Your game is finished! Your total score is ${game.getTotalScore()}`)
    }
    if (frame.isSpare() && frame.rolls.length === 2) {
    $( "#message" ).text("You bowled a spare in the last frame! One bonus roll!")
    }
    if (frame.isSpare() && frame.rolls.length === 3) {
      game.addFrame(frame)
      updateFrames();
      $( "#message" ).text(`Your game is finished! Your total score is ${game.getTotalScore()}`)
      $( "#addRoll").hide()
    } if (frame.rolls.length === 2 && (!frame.isStrike() && !frame.isSpare())) {
      game.addFrame(frame);
      updateFrames();
      $( "#message" ).text(`Your game is finished! Your total score is ${game.getTotalScore()}`)
      $( "#addRoll").hide()
  }} else if (game.finalFrame() === false) {
  if (frame.isStrike()) {
    game.addFrame(frame);
    updateFrames();
    $( "#message" ).text("You bowled a strike! Woohoo!")
    frame = new Frame
  }
  if (frame.isSpare()) {
    game.addFrame(frame);
    updateFrames();
    $( "#message" ).text("You bowled a spare! Nice one!")
    frame = new Frame;
  }
  if (frame.rolls.length === 2 && !game.finalFrame()) {
    game.addFrame(frame);
    updateFrames();
    $( "#message" ).text(`Your score for that frame was ${frame.getScore()}! Now for the next one.`)
    frame = new Frame;
  }}

  });

  let updateFrames = function(){
    $( "#frames").empty()
    for (frame of game.frames) {
    $( "#frames").append(`<li>Frame score: ${frame.score}</li>`)
    };
  };
