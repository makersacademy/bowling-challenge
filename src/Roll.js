function Roll() {
  this._result = "You haven't bowled yet dummy!"
}

Roll.prototype = {

  go: function(){
    this._result = Math.floor(Math.random() * 11);
  },

  result: function(){
    return this._result
  }

}
