function Frame(roll = new Roll()){

  this.roll = roll
  this.firstRollScore = null
  this.secondRollScore  = null

}

Frame.prototype.bowl = function(){
  this.roll.go()
  this.firstRollScore = this.roll.result()
}
