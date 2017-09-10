var Thermostat = function(temperature = 20, mintemp = 10, maxtemp = 25){

  this.temperature = temperature;
  this.minTemp = mintemp;
  this.maxTemp = maxtemp;
  this.powerDefaultMode = 'Power saving mode on';

  this.up = function (number){
    this.temperature += number;
  };

  this.down = function (number){
    if (this.temperature - number < 10) {
      throw 'cannot decrease temperature lower than min';
    } else {
      this.temperature -= number;
    };
  };

  this.powerSaveOff = function() {
    this.maxTemp = 32;
  };

  this.powerSaveOn = function() {
    this.maxTemp = 25;
  };

  this.resetTemp = function() {
    this.temperature = 20;
  };

  this.energyUsage = function() {
    if (this.temperature < 18) {
      return 'low';
    }else if (this.temperature < 25 ){
      return 'medium';
    }else{
      return 'high';
    };
  };

};

// $( "p" ).slideUp( 800 );

// Thermostat.prototype.up = function(degrees) {
//   this.temperature += number;
// };
