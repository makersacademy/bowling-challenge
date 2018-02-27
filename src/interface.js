$(document).ready(function() {
  var bowling = new Bowling();
  var frameCount = 0;
  var scoresArray = [];
  var scoreText;
  var score;
  var frameScore;
  var currentTotal = 0;


  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    console.log(gameArr);
    // console.log(bowling.score(gameArr));
    $('#full-game').val('');
    $('#final-score').text('Total score for that game: ' + bowling.score(gameArr));
  });


  $('.insert-score').click(function(){
    for (var i = 0; i < scoresArray.length; i ++) {
      // TODO something like span text = scores array.splice.flatten.sum
      $(`#f${i + 1} > span`).text(bowling.sum(scoresArray[i]));
    }
    score = parseInt(this.id);
    if (frameCount < 10) {
      if (frameCount < 9) {
        if (!scoresArray[frameCount]) {
          scoresArray[frameCount] = [score];
          $(`#f${frameCount + 1} > .inner`).text(scoresArray[frameCount]);
        } else if (scoresArray[frameCount][0] + score <= 10){
          scoresArray[frameCount].push(score);
          $(`#f${frameCount + 1} > .inner`).text(scoresArray[frameCount]);
        }
        if (scoresArray[frameCount][0] === 10 || scoresArray[frameCount].length === 2) {

          frameCount ++;
          scoresArray = bowling.frameChecker(scoresArray);
        }
        console.log(scoresArray);
      } else {
        if (!scoresArray[frameCount]) {
          scoresArray[frameCount] = [score];
          $(`#f${frameCount + 1} > .inner`).text(scoresArray[frameCount]);
      } else {
        scoresArray[frameCount].push(score);
        $(`#f${frameCount + 1} > .inner`).text(scoresArray[frameCount]);
      }
     if (scoresArray[frameCount].length === 3 || scoresArray[frameCount][0] + scoresArray[frameCount][1] < 10)
      frameCount ++;
      scoresArray = bowling.frameChecker(scoresArray);
      console.log(scoresArray);
      $(`#f${frameCount + 1} > .inner`).text(scoresArray[frameCount]);
      }
    }
    //else {
    //   // calculate scores
      // var flatScoresArray = scoresArray.reduce(
      //   function(a, b) {
      //     return a.concat(b);
      //   },
      //   []
      // );
    //   // console.log(flatScoresArray);
    //   bowling.createAllFramesArray(flatScoresArray);
    //   var frameTotals = bowling.allFrames;
    //   // console.log(frameTotals);
    //   var runningTotal = 0
    //   for (var i = 0; i < frameTotals.length; i ++) {
    //     $(`#f${i + 1}`).text(frameTotals[i] + runningTotal);
    //     runningTotal += frameTotals[i];
    //   }
    //   var finalScore = bowling.score(flatScoresArray);
    //   // console.log(finalScore);
    //   $('#total').text(finalScore);
    // }
  });
  // $('.insert-score').click(function(){
  //   scoreText = `#f${frameCount + 1} > .inner`
  //   score = parseInt(this.id);
  //   if (frameCount < 9) {
  //     if(this.id === '10') {
  //       $(scoreText).text('X');
  //       scoresArray.push(score);
  //       frameCount ++;
  //     } else {
  //       if ($(scoreText).text() === '') {
  //         $(scoreText).text(score);
  //         scoresArray.push(score);
  //       } else if ($(scoreText).text() !== 'X'
  //           && parseInt($(scoreText).text()) + score <= 10) {
  //         $(scoreText).text($(scoreText).text() + ' ' + score);
  //         scoresArray.push(score);
  //         frameCount ++;
  //       }
  //     }
  //     console.log(scoresArray);
  //   } else if (frameCount < 10) {
  //     if(this.id === '10') {
  //       if ($(scoreText).text() === '') {
  //         $(scoreText).text('X');
  //         scoresArray.push(score);
  //       } else if ($(scoreText).text() === 'X') {
  //         $(scoreText).text($(scoreText).text() + 'X');
  //         scoresArray.push(score);
  //       } else if ($(scoreText).text() === 'XX') {
  //         $(scoreText).text($(scoreText).text() + 'X');
  //         scoresArray.push(score);
  //         frameCount ++;
  //       } else if (scoresArray[scoresArray.length -1]
  //                 + scoresArray[scoresArray.length -2] === 10) {
  //         $(scoreText).text($(scoreText).text() + 'X');
  //         scoresArray.push(score);
  //         frameCount ++;
  //       }
  //     } else if ($(scoreText).text() === '') {
  //       $(scoreText).text(score);
  //       scoresArray.push(score);
  //     } else if ($(scoreText).text() !== 'XXX'
  //         && $(scoreText).text().split('').length !== 2
  //         && parseInt($(scoreText).text()) + score <= 10) {
  //       $(scoreText).text($(scoreText).text() + score);
  //       scoresArray.push(score);
  //       frameCount ++;
  //     } else if ($(scoreText).text().split('').length === 2
  //               && scoresArray[scoresArray.length -1]
  //               + scoresArray[scoresArray.length -2] === 10) {
  //       $(scoreText).text($(scoreText).text() + score);
  //       scoresArray.push(score);
  //       frameCount ++;
  //     }
  //   }
  // });
});
