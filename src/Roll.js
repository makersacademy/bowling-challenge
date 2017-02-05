function Roll() {
  this._result = "You haven't bowled yet dummy!"
}

Roll.prototype = {

  go: function(pins = 10){
    this._result = Math.floor(Math.random() * (pins+1));
  },

  result: function(){
    return this._result
  }
}
