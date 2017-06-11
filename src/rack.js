function Rack(){

  this.Pins = []

  this.init = function(){
    for(i = 0; i < 10; i++){
      pin = new Pin;
      this.Pins.push(pin);
    };
  };

  this.init();

  Rack.prototype.getStandingPinsAmount = function(){
    return this.Pins.length;
  };



};
