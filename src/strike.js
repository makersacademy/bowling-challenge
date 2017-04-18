function Strike(){
  this.total = 10
  this.first = false
  this.complete = false

};
Strike.prototype.add = function(amount){
  if(!this.complete){
  this.total += amount
  if(this.first){
    this.complete = true;}
  else{
    this.first = true;
  }
}
};
