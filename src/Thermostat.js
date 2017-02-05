// 'use strict';

var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.PSM_ON_MAX_TEMP = 25
  this.PSM_OFF_MAX_TEMP = 32
  this.maxTemp = this.PSM_ON_MAX_TEMP
  this.minTemp = 10
}

Thermostat.prototype.up = function(){
  this.powerSavingMode ? (this.maxTemp = this.PSM_ON_MAX_TEMP) : (this.maxTemp = this.PSM_OFF_MAX_TEMP);
  this.temperature == this.maxTemp ? this.temperature : this.temperature++;
};

Thermostat.prototype.down = function () {
  this.temperature > this.minTemp ? this.temperature-- : this.temperature;
};

Thermostat.prototype.powerSavingModeSwitcher = function () {
  this.powerSavingMode == true ? (this.powerSavingMode = false, console.log("Power Saving Mode OFF")): (this.powerSavingMode = true, console.log("Power Saving Mode ON"));
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.getPSM = function () {
  return this.powerSavingMode ? "Power Saving Mode ON" : "Power Saving Mode OFF";
};

Thermostat.prototype.getCurrentUsage = function () {
  if (this.temperature < 18 ) {
    return 'low'
  } else if (this.temperature < 25 ) {
    return 'medium'
  } else { return 'high'}
};

var thermostat = new Thermostat();
