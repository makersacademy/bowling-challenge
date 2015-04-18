var Roll = function(pins){
  this.pins = pins;
  this.output = [];
  this.input();
};

// make this private?

Roll.prototype.input = function() {
  if(this.pins == 10){
    this.output = [10, 'x']
  }else{
    this.output.push(this.pins);
  };

};