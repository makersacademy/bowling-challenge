function Game () {
  this.frame = 1
  this.frame_input = {1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]}
  this.pins_standing = 10
  this.turn = 1
};


Game.prototype.roll = function(pins_hit){
  if(this.strike(pins_hit)) {
    // this.bonus()
  }
  else if (pins_hit < 10 && this.turn <=2) {
    this.frame_input[this.frame].push(pins_hit);
    this.pins_standing-=pins_hit;
    this.turn++
      if (this.frame_complete()) {this.frame++; this.turn = 1; this.pins_standing = 10}
  }

}

Game.prototype.score_sum =function(){
  return this.frame_input[this.frame].reduce((a,b) => a+b,0)
}

Game.prototype.frame_complete = function(){
  if(this.frame_input[this.frame].length === 2){return true}
  else{return false}
}

Game.prototype.strike = function(pins_hit){
 if(pins_hit === 10 && this.turn === 1){return true}
}

// Game.prototype.bonus = function(){
// }
// Game.strike_calc = function(){
// }
// Game.spare_calc = function(){
// }
// Game.valid_input = function(){
// }
