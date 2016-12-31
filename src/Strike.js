function Strike(){
  'use strict';
  this.bonus1 = [];
  this.bonus2 = [];
  this.count = 2;
}

Strike.prototype.addBonus = function(user_input){
  var pins = Number(user_input);
  if( this.bonus1.length === 2 ){
    this.bonus1 = this.bonus2
    this.bonus2 = []
  }
  if( this.count > 2 ){
    this.bonus2.push( pins )
    this.decreaseCount()
  }
  this.bonus1.push(pins);
  return this._sumBonus();
};

Strike.prototype._sumBonus = function(){
  var i;
  var sum = 0;
  for (i=0; i<this.bonus1.length; i++){ sum = sum + this.bonus1[i] }
  return sum
};

Strike.prototype.increaseCount = function(){
  this.count += 2
};

Strike.prototype.decreaseCount = function(){
  this.count--
};
