$(document).ready(function() {
  var bowling = new Bowling();
  var frameCount = 0;
  var scoresArray = [];
  var scoreText;
  var score;

  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    console.log(gameArr);
    // console.log(bowling.score(gameArr));
    $('#full-game').val('');
    $('#final-score').text('Total score for that game: ' + bowling.score(gameArr));
  });

  // TODO: Try using temp arrays to calculate strikes for running total
  // TODO: Try having separate parts for inner for running total
  // TODO: Start from the easiest -- like gutterGame and noTensGame
  // TODO: Think / diagram a better solution for frame 10

  $('.insert-score').click(function(){
    scoreText = `#f${frameCount + 1} > .inner`
    score = parseInt(this.id);
    if (frameCount < 9) {
      if(this.id === '10') {
        $(scoreText).text('X');
        scoresArray.push(score);
        frameCount ++;
      } else {
        if ($(scoreText).text() === '') {
          $(scoreText).text(score);
          scoresArray.push(score);
        } else if ($(scoreText).text() !== 'X'
            && parseInt($(scoreText).text()) + score <= 10) {
          $(scoreText).text($(scoreText).text() + ' ' + score);
          scoresArray.push(score);
          frameCount ++;
        }
      }
      console.log(scoresArray);
    } else if (frameCount < 10) {
      if(this.id === '10') {
        if ($(scoreText).text() === '') {
          $(scoreText).text('X');
          scoresArray.push(score);
        } else if ($(scoreText).text() === 'X') {
          $(scoreText).text($(scoreText).text() + 'X');
          scoresArray.push(score);
        } else if ($(scoreText).text() === 'XX') {
          $(scoreText).text($(scoreText).text() + 'X');
          scoresArray.push(score);
          frameCount ++;
        } else if (scoresArray[scoresArray.length -1]
                  + scoresArray[scoresArray.length -2] === 10) {
          $(scoreText).text($(scoreText).text() + 'X');
          scoresArray.push(score);
          frameCount ++;
        }
      } else if ($(scoreText).text() === '') {
        $(scoreText).text(score);
        scoresArray.push(score);
      } else if ($(scoreText).text() !== 'XXX'
          && $(scoreText).text().split('').length !== 2
          && parseInt($(scoreText).text()) + score <= 10) {
        $(scoreText).text($(scoreText).text() + score);
        scoresArray.push(score);
        frameCount ++;
      } else if ($(scoreText).text().split('').length === 2
                && scoresArray[scoresArray.length -1]
                + scoresArray[scoresArray.length -2] === 10) {
        $(scoreText).text($(scoreText).text() + score);
        scoresArray.push(score);
        frameCount ++;
      }
    }
  });
});
