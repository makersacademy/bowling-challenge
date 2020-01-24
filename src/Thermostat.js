'use strict';
function Thermostat() {
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
  this.powerSavingMode = true;
  this.defaultTemperature = 20;
}

Thermostat.prototype.increase = function() {
  if (this.currentTemperature < this.maximumTemperature) {this.currentTemperature +=1};
  return this.currentTemperature;
};

Thermostat.prototype.decrease = function() {
  if (this.currentTemperature > this.minimumTemperature) {this.currentTemperature -=1};
  return this.currentTemperature;
};

Thermostat.prototype.togglePowerSavingMode = function() {
  if (this.powerSavingMode == true) {
    this.maximumTemperature = 32;
    this.powerSavingMode = false;
  } else {
    this.maximumTemperature = 25;
    this.powerSavingMode = true;
    if (this.currentTemperature > this.maximumTemperature) {
      this.currentTemperature = this.maximumTemperature;
    }
  } 
};

Thermostat.prototype.reset = function() {
  this.currentTemperature = this.defaultTemperature;
  return this.currentTemperature;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.currentTemperature < 18) {
    return "low"
  } else if (this.currentTemperature < 25) {
    return "medium"
  } else {
    return "high"
  }
};