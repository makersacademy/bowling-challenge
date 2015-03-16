var Pin = function (){
  this.standing = true;
};

  Pin.prototype.fall = function() {
    this.standing = false;
  };

  Pin.prototype.state = function() {
    if (this.standing === false) {
      return 'knocked down';
    } else {
      return 'standing';
    }
  };

