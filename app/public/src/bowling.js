'use strict';

function Shot() {
  var knockedDownPins;
};


Thermostat.prototype.knockedDownPins = function() {
  return this.knockedDownPins;
};

Thermostat.prototype.hit(result) = function() {
  this.knockedDownPins = result;
};

Thermostat.prototype.upButton = function () {
  if (this._isMaximumTemperature()){
    throw new Error("Thermostat at maximum")
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.downButton = function () {
  if (this._isMinimumTemperature()){
    throw new Error("Thermostat at minimum")
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype._isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype._isMaximumTemperature = function () {
  return this.temperature === this.maximumTemperature;
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if(this.powerSavingMode === false) {
    this.maximumTemperature = this.MAXIMUM_TEMPERATURE_NO_POWER_SAVE;
  } else {
    this.maximumTemperature = this.MAXIMUM_TEMPERATURE_POWER_SAVE;
  };
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};


module.exports = Thermostat;
