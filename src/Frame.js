function Frame(){
  this.bonus = 0
  this.rolls = {
    1: 0,
    2: 0,
    bonus: 0
  }
}

// GETTERS

Frame.prototype.getRollOne = function(){
  return this.rolls[1]
}

Frame.prototype.getRollTwo = function(){
  return this.rolls[2]
}

Frame.prototype.getBonus = function(){
  return this.rolls['bonus']
}

// SETTERS

Frame.prototype.setRollOne = function(num){
  this.rolls[1] = num
}

Frame.prototype.setRollTwo = function(num){
  this.rolls[2] = num
}

Frame.prototype.setBonus = function(num){
  this.rolls['bonus'] = num
}

// METHODS

Frame.prototype.sumAllRolls = function(){
  return this.getRollOne()
   + this.getRollTwo()
    + this.getBonus()
}
