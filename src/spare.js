function Spare(){
  this.total = 10
  this.complete = false
};
Spare.prototype.add = function(amount){
  if (!this.complete){
  this.total += amount
  this.complete = true
}
}
