function FullGame () {
  this.score = 0
  this.frames = []

}


FullGame.prototype = {
  currentScore: function() {
  return this.score
},
bowling: function(){
  var frame = new Frame(number)
  this.frames.push(frame);
},
addingscore: function(score) {
  this.score += score
},
totalBowlingscore: function () {
  return this.frames.reduce(function(score, frame, index, frames){
    return score + frame.scoringtotal(frames[index + 1], frames[index + 2])
  },0)
}



//.reduce Js
///arr.reduce(callback[, initialValue])
//ParametersSection
//callback
//Function to execute on each element in the array, taking four arguments:accumulator
//The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback,
//or initialValue, if supplied (see below).
//accumulator
//currentValue
//currentIndex
//array
