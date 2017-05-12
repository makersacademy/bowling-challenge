//each frame initializes with empty array

function Frame(){
  this.outcome = []
}

Frame.prototype.start = function(){
  bowl = new Bowl()
  this.outcome.push(bowl.roll())
}

Frame.prototype.second = function(){
  this.outcome.push(bowl.roll2(this.outcome[0]))
}
