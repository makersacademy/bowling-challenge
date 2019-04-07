var Bowling_score = function() {

  var total = 0

  this.input_frame = function(frame){
    total += frame.total();
  } 

  this.score = function(){
    return total
  }
};