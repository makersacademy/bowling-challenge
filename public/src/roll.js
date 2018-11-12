'use strict';

function Roll() {

  Roll.prototype.rollScore(user_input) = function() {
      rollScore = user_input;
      return rollScore;
    };
};









// function Thermostat() {
//   this.DEFAULT_TEMPERATURE = 20;
//   this.MINIMUM_TEMPERATURE = 10;
//   this.MAX_LIMIT_PSM_ON = 25;
//   this.MAX_LIMIT_PSM_OFF = 32;
//   this.temperature = this.DEFAULT_TEMPERATURE;
//   this.powerSavingMode = true;
//   this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
//   this.HIGH_ENERGY_USAGE_LIMIT = 25;
//
//   Thermostat.prototype.switchPowerSavingModeOff = function() {
//     this.powerSavingMode = false;
//   };
//
//   Thermostat.prototype.switchPowerSavingModeOn = function() {
//     this.powerSavingMode = true;
//   };
//
//   Thermostat.prototype.isPowerSavingModeOn = function() {
//     return this.powerSavingMode === true;
//   };
//
//   Thermostat.prototype.getCurrentTemperature = function() {
//     return this.temperature;
//   };
//
//   Thermostat.prototype.up = function() {
//     if (this.isMaximumTemperature()) {
//       return;
//     }
//     this.temperature += 1;
//   };
//
//   Thermostat.prototype.down = function() {
//       if (this.isMinimumTemperature()) {
//         return;
//       }
//       this.temperature -= 1;
//   };
//
//   Thermostat.prototype.isMinimumTemperature = function() {
//       return this.temperature === this.MINIMUM_TEMPERATURE;
//   };
//
//   Thermostat.prototype.isMaximumTemperature = function() {
//       if (this.isPowerSavingModeOn()) {
//         return this.temperature === this.MAX_LIMIT_PSM_ON;
//       }
//       else  {
//         return this.temperature === this.MAX_LIMIT_PSM_OFF;
//       }
//   };
//
//   Thermostat.prototype.resetTemperature = function() {
//     this.temperature = this.DEFAULT_TEMPERATURE;
//   };
//
//   Thermostat.prototype.energyUsage = function() {
//     if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
//       return 'low-usage';
//     }
//     if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
//       return 'medium-usage';
//     }
//     return 'high-usage';
//   };
// };
