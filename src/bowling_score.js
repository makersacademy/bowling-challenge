var Bowling_score = function() {

  var total = 0;
  var strike = 0;
  var STRIKE_SCORE = 10;
  var spare = 0;
  var SPARE_SCORE = 10;
  var number_frame = 0;
  var MAX_FRAME = 10;

  this.input_frame = function(frame){
    number_frame += 1;
    if ( number_frame <= MAX_FRAME || 
      (number_frame == (MAX_FRAME + 1) && strike == 1) // There can be a frame number 11 when there has been a Strike in frame 10
      ) {
      if ( frame.isStrike()) {
        strike = 1;
      } else if ( frame.isSpare()) {
        spare = 1;
      } else if ( strike == 1) {
        if (number_frame > MAX_FRAME) {
          total += STRIKE_SCORE + frame.total(); // 10 from Strike + the bonus (which is the score of frame number 11, but we do not add the score of frame 11)
        } else {
          total += STRIKE_SCORE + frame.total() + frame.total(); // 10 from Strike + the bonus (score of next frame) + the score from next frame 
        }
        strike = 0; // we set strike to 0 to know that we have already applied the bonus of the strike
      } else if ( spare == 1) {
        total += SPARE_SCORE + frame.get_first_roll() + frame.total();// 10 from Spare + the bonus (score of the first roll of next frame) + score from next frame
        spare = 0;
      } else {
        total += frame.total();
      }
  
    }
    
  } 

  this.score = function(){
    return total
  }

};