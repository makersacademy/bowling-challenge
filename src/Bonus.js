function Bonus(){
  this.spare = false
  this.strike = false
}

// SETTERS

Bonus.prototype.setSpareTrue = function(){
  this.spare = true
}

Bonus.prototype.setSpareFalse = function(){
  this.spare = false
}

Bonus.prototype.setStrike = function(){
  this.strike = !this.strike
}

  // NEED TO REPLACE THE ABOVE WITH SET TRUE AND SET FALSE
// Bonus.prototype.setStrikeTrue = function(){
//   this.strike = true
// }
//
// Bonus.prototype.setStrikeFalse = function(){
//   this.strike = false
// }

// BOOLEAN

Bonus.prototype.isSpare = function(){
  return this.spare
}

Bonus.prototype.isStrike = function(){
  return this.strike
}
