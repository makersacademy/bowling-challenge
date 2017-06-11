function Pin(){

  this.isStanding = true;

  Pin.prototype.getCurrentStatus = function() {
    if(this.isStanding){
      return "standing";
    }else{
      return "down";
    };
  };

};
