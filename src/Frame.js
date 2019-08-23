function Frame() {

this.pinsDown = [];
this.totalPinsDown = 0
// this.score = [];

}

Frame.prototype.insertRoll1 = function(value) {
  this.pinsDown[0]= value
}

Frame.prototype.insertRoll2 = function(value) {
  this.pinsDown[1]= value
}

Frame.prototype.showTotalPinsDown = function(){
  return this.pinsDown.reduce((a,b) => a + b);
}





// Frame.prototype.score = function(){
//  return this.pinsDown.reduce((a,b) => a + b);
// }
// Frame.prototype.score = function(value){
//  return this.pinsDown.array.reduce((a,b) => a+b)
// }


// function Song() {
// }
//
// Song.prototype.persistFavoriteStatus = function(value) {
//   // something complicated
//   throw new Error("not yet implemented");
// };
