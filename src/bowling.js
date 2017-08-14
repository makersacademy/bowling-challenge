'use strict';

function Bowling() {
  this.ROLL_PER_FRAME = 2;
  this.TOTAL_FRAMES   = 10;
  this.knockedPin     = 0;
  this.rollStatus     = false;
  this.availablePin   = 10;
  this.frameCount     = 0;
  this.rollCount      = 0;
  this.bonus          = 0;
  this.score = 0;
};

Bowling.prototype.setNewFrame = function() {
  this._updateFrameCount();
  this._resetRollCoutn();
};

Bowling.prototype.roll = function() {
  this._updateRollStatus();
  this._updateRollCount();
  return;
};

Bowling.prototype.updateAfterRolling = function(knockedPin) {
  this.setKnockedPin(knockedPin);
  this._updateAvailablePin();
  return;
};
Bowling.prototype.isRoll = function() {
  return this.rollStatus;
};
Bowling.prototype._updateFrameCount = function() {
  return this.frameCount += 1;
};
Bowling.prototype.getFrameCount = function() {
  return this.frameCount;
};
Bowling.prototype._resetRollCoutn = function() {
  return this.rollCount = 0;
};
Bowling.prototype.getRollCount = function() {
  return this.rollCount;
};
Bowling.prototype._updateRollCount = function() {
  return this.rollCount += 1;
};
Bowling.prototype._updateRollStatus = function() {
  return this.rollStatus = !this.rollStatus;
};
Bowling.prototype._updateRollStatus = function() {
  return this.rollStatus = !this.rollStatus;
};
Bowling.prototype.setKnockedPin = function(knockedPin) {
  return this.knockedPin = knockedPin;
};
Bowling.prototype._getKnockedPin = function() {
  return this.knockedPin;
};
Bowling.prototype._updateAvailablePin = function() {
  return this.availablePin -= this._getKnockedPin();
};
Bowling.prototype.getAvailablePin = function() {
  return this.availablePin;
};
// Bowling.prototype. = function() {
//   return ;
// };
// Bowling.prototype. = function() {
//   return ;
// };
//
// Thermostat.prototype.resetTemperature = function() {
//   this.temperature = this.DEFAULT_TEMPERATURE;
// };
//
// Thermostat.prototype.up = function() {
//   if (this.isMaximumTemperature()) {
//     return;
//   }
//   this.temperature += 1;
// };
//
// Thermostat.prototype.down = function() {
//   if (this.isMinimumTemperature()) {
//     return;
//   }
//   this.temperature -= 1;
// };
//
// Thermostat.prototype.isMinimumTemperature = function() {
//   return this.temperature === this.MINIMUM_TEMPERATURE;
// };
//
// Thermostat.prototype.isPowerSavingModeOn = function() {
//   return this.powerSavingMode === true;
// };
//
// Thermostat.prototype.switchPowerSavingModeOff = function() {
//   this.powerSavingMode = false;
// };
//
// Thermostat.prototype.switchPowerSavingModeOn = function() {
//   this.powerSavingMode = true;
// };
//
// Thermostat.prototype.togglePowerSavingMode = function() {
//   if (this.powerSavingMode === true) {
//     this.switchPowerSavingModeOff();
//   } else {
//     this.switchPowerSavingModeOn();
//   }
// };
//
//
// Thermostat.prototype.isMaximumTemperature = function() {
//   if (this.isPowerSavingModeOn()) {
//     return this.temperature === this.MAX_LIMIT_PSM_ON;
//   }
//     return this.temperature === this.MAX_LIMIT_PSM_OFF;
// };
//
// Thermostat.prototype.energyUsage = function() {
//   if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
//     return 'low-usage';
//   }
//   if (this.isMediumUsage()) {
//     return 'medium-usage';
//   }
//   return 'high-usage';
// };
//
//
// Thermostat.prototype.isMediumUsage = function () {
//   return(this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON);
// };
