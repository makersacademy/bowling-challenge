$(document).ready(function() {
  var bowling = new Bowling();
  var completedFrames = 0;
  var scoresArray = [];
  var score;

  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    $('#full-game').val('');
    $('#final-score').text('Total score for that game: ' + bowling.score(gameArr));
  });

  $('.insert-score').click(function(){
    // for each frame that exists
    for (var i = 1; i <= scoresArray.length; i ++) {
      $(`#f${i} > span`).text(bowling.flattenAndSum(scoresArray.slice(0, i)));
    }
    // get the integer of the button pressed
    score = parseInt(this.id);
    // if (completedFrames < 10) {
      // for frames 1 - 9
      if (completedFrames < 9) {
        // check if the frame already has an array (first roll)
        bowling.addRollToFrame(scoresArray, completedFrames, score);
        $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
        // if the frame is complete (is a strike or has two rolls)
        if (scoresArray[completedFrames][0] === 10 || scoresArray[completedFrames].length === 2) {
          // check if the rolls should be added to previous strikes or spares
          scoresArray = bowling.frameChecker(scoresArray);
          // move to the next frame
          completedFrames ++;
        }
        console.log(scoresArray);
        // for frame 10
      } else {
          // check if the frame already has an array (first roll)
        bowling.addRollToFrameTen(scoresArray, completedFrames, score)
        $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
        // check if any frame 10 rolls need to be added to previous frames
        scoresArray = bowling.frameChecker(scoresArray);
        console.log(scoresArray);
        // Display third roll if there is one in frame 10 box
        // $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
        // On the final roll of frame 10
        if (scoresArray[completedFrames].length === 3 || scoresArray[completedFrames][0] + scoresArray[completedFrames][1] < 10) {
         // End frame 10
          completedFrames ++;
          $(`#f${completedFrames} > span`).text(bowling.flattenAndSum(scoresArray));
        }
      }
    if (completedFrames === 10) {
      $('.insert-score').css('display', 'none');
    }
  });
});
