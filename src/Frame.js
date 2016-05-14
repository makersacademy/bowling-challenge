function Frame(){
  this._count = 1;
}

  var frame = new Frame();

  Frame.prototype.getCount = function(){
    return this._count;
  };

  Frame.prototype.next = function(){
    this._count ++;
  };
