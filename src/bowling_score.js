var Bowling_score = function() {

  var total = 0;
  var strike = 0;
  var STRIKE_SCORE = 10;

  this.input_frame = function(frame){

    if ( frame.isStrike()) {
      strike = 1;

    } else if ( strike == 1) {
      total += STRIKE_SCORE + frame.total() + frame.total(); 
      strike = 0; // we set strike to 0 to know that we have already applied the bonus of the strike

    } else {
      total += frame.total();
    }

    
    




  } 

  this.score = function(){
    return total
  }

};