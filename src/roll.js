var Roll = function(pins){
  this.pins = pins;
  this.outputs = [];
  this.input();
};

// make this private?

Roll.prototype.input = function() {
  if(this.pins == 10){
    this.outputs = [10, 'x']
  }else{
    this.outputs.push(this.pins);
  };

};

Roll.prototype.output = function() {
  return this.outputs;
};