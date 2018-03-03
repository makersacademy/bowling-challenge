$(document).ready(function() {
  var bowling = new Bowling();
  var completedFrames = 0;
  var scoresArray = [];
  var score;

  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    console.log(gameArr);
    // console.log(bowling.score(gameArr));
    $('#full-game').val('');
    $('#final-score').text('Total score for that game: ' + bowling.score(gameArr));
  });

  $('.insert-score').click(function(){
    // for each frame that exists
    for (var i = 1; i <= scoresArray.length; i ++) {
      // flatten that frame and the ones before it
      var totalArr = scoresArray.slice(0, i).reduce(
          function(a, b) {
            return a.concat(b);
          }, [] );
        // sum all the scores
      var sumTotal = bowling.sum(totalArr);
      // display the score in the relevant box
      $(`#f${i} > span`).text(sumTotal);
    }
    // get the integer of the button pressed
    score = parseInt(this.id);
    if (completedFrames < 10) {
      // for frames 1 - 9
      if (completedFrames < 9) {
        // check if the frame already has an array (first roll)
        if (!scoresArray[completedFrames]) {
          // if NOT add the score to it
          scoresArray[completedFrames] = [score];
          // and display the score in the inner box
          $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
          // Otherwise check that the button clicked is  possible (less than ten) (second roll)
        } else if (scoresArray[completedFrames][0] + score <= 10) {
          // and add the second roll to the array
          scoresArray[completedFrames].push(score);
          // and display both rolls in the inner box
          $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
        }
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
        if (!scoresArray[completedFrames]) {
          // if not create first roll
          scoresArray[completedFrames] = [score];
          // and show it in the inner box
          $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
          // Otherwise push the second OR THIRD roll and display it
        } else {
            scoresArray[completedFrames].push(score);
            $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
        }
        // check if any frame 10 rolls need to be added to previous frames
        scoresArray = bowling.frameChecker(scoresArray);
        console.log(scoresArray);
        // Display third roll if there is one in frame 10 box
        $(`#f${completedFrames + 1} > .inner`).text(scoresArray[completedFrames]);
        // On the final roll of frame 10
        if (scoresArray[completedFrames].length === 3 || scoresArray[completedFrames][0] + scoresArray[completedFrames][1] < 10) {
         // End frame 10
          completedFrames ++;
          var totalArr = scoresArray.reduce(
                        function(a, b) {
                          return a.concat(b);
                        }, []);
            // calculate the final total and display it
          var sumTotal = bowling.sum(totalArr);
          $(`#f${completedFrames} > span`).text(sumTotal);
          console.log(completedFrames);
        }
      }
    }
  });
});
