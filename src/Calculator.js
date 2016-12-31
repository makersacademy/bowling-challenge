function Calculator(){
  'use strict';
  this.total = 0;
}

Calculator.prototype.sum = function(array){
  if( this._isSimpleArray(array) ){
    this.total = this._sumSimpleArray(array);
  } else {
    this.total = this._sumComplexArray(array);
  }
  return this.total
}

Calculator.prototype._sumSimpleArray = function(array){
  var i;
  var sum = 0;
  for (i=0; i<array.length; i++){ sum = sum + array[i] }
  return sum
}

Calculator.prototype._sumComplexArray = function(array){
  var i;
  var j;
  var sum = 0;
  for (i=0; i<array.length; i++){
    for (j=0; j<array[i].length; j++){
       sum += array[i][j]
    }
  }
  return sum
}

Calculator.prototype._isSimpleArray = function(array){
  if( typeof(array[0]) === "number" ){
    return true
  } else { return false }
}
