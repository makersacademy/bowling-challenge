// 'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('starts with a score of 0', function() {
    expect(scorecard.totalScore()).toEqual(0);
    });

  it('a gutter game ends with a score of 0', function() {
    for (i = 0; i < 20; i++) {
      scorecard.roll(0)
    }
    expect(scorecard.totalScore()).toEqual(0);
  });

  it('a perfect game ends with a score of 300', function() {
    for (i = 0; i < 12; i++) {
      scorecard.roll(strike)
    }
    expect (scorecard.totalScore()).toEqual(300);
  });


  });

//   it('increases in temperature with up()', function() {
//     thermostat.up();
//     expect(thermostat.getCurrentTemperature()).toEqual(21);
//   });
//
//   it('decreases in temperature with down()', function() {
//     thermostat.down();
//     expect(thermostat.getCurrentTemperature()).toEqual(19);
//   });
//
//   it('has a minimum of 10 degrees', function() {
//     for (var i = 0; i < 11; i++) {
//       thermostat.down();
//     }
//     expect(thermostat.getCurrentTemperature()).toEqual(10);
// });
//
//   it('has power saving mode on by default', function() {
//     expect(thermostat.isPowerSavingModeOn()).toBe(true);
//   });
//
//   it('can switch PSM off', function() {
//     thermostat.switchPowerSavingModeOff();
//     expect(thermostat.isPowerSavingModeOn()).toBe(false);
//   });
//
//   it('can switch PSM back on', function() {
//     thermostat.switchPowerSavingModeOff();
//     expect(thermostat.isPowerSavingModeOn()).toBe(false);
//     thermostat.switchPowerSavingModeOn();
//     expect(thermostat.isPowerSavingModeOn()).toBe(true);
//   });
//
//   it('has a maximum temperature of 25 degrees', function() {
//   for (var i = 0; i < 6; i++) {
//     thermostat.up();
//   }
//   expect(thermostat.getCurrentTemperature()).toEqual(25);
// });
//
// describe('when power saving mode is off', function() {
//   it('has a maximum temperature of 32 degrees', function() {
//     thermostat.switchPowerSavingModeOff();
//     for (var i = 0; i < 13; i++) {
//       thermostat.up();
//     }
//     expect(thermostat.getCurrentTemperature()).toEqual(32);
//   });
// });
//
//
// });
