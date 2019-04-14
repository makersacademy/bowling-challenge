var Bowling_score = function() {

  var total = 0;
  var strike = 0;
  var STRIKE_SCORE = 10;
  var spare = 0;
  var SPARE_SCORE = 10;

  this.input_frame = function(frame){

    if ( frame.isStrike()) {
      strike = 1;
    } else if ( frame.isSpare()) {
      spare = 1;
    } else if ( strike == 1) {
      total += STRIKE_SCORE + frame.total() + frame.total(); // 10 from Strike + the bonus (score of next frame) + the score from next frame 
      strike = 0; // we set strike to 0 to know that we have already applied the bonus of the strike
    } else if ( spare == 1) {
      total += SPARE_SCORE + frame.get_first_roll() + frame.total();// 10 from Spare + the bonus (score of the first roll of next frame) + score from next frame
      spare = 0;
    } else {
      total += frame.total();
    }

  } 

  this.score = function(){
    return total
  }

};