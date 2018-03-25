$(document).ready(function() {
  let round = new Round();


  let game = new Game();
  let frame = new Frame();

  let roundCounter = 1;
  let frameCounter = 1;

  $('.btn-group').on('click','button', function(event) {

    if (roundCounter <= 21) {
      // capture pin count from user input
      round = new Round(event.currentTarget.id);
      // add score of round to frame
      frame.addRound(round);

      //if round is full insert round into game
      if (frame.roundsPlayed() === 2) {
        $(`#f${frameCounter}`).html(frame.score());

        game.addFrame(frame);
        frameCounter++
      }

      $(`#r${roundCounter}`).html(event.currentTarget.id);
      roundCounter++
      console.log(game);
    }
  });
});
