'use strict';

describe('Bowling', function() {

  var roll;

  beforeEach(function() {
    roll = new Roll(1);
  });

  it('Expect a roll of 1 to equal 1', function() {
    roll.rollScore(1)
    expect(roll.rollScore()).toEqual(1);
  });
});

  //
  // var game;
  //
  // beforeEach(function() {
  //   game = new Game();
  // });
  //
  // it('A game consists of 10 frames', function() {
  //   expect(game.frameTotal()).toEqual(10);
  // });


//
//
//   it('increase in temperature with up()', function() {
//     thermostat.up();
//     expect(thermostat.getCurrentTemperature()).toEqual(21);
//   });
//
//   it('reduce temperature with down()', function() {
//     thermostat.down();
//     expect(thermostat.getCurrentTemperature()).toEqual(19);
//   });
//
//   it('has a minimum of 10 degrees', function() {
//     for (var i = 0; i < 11; i++) {
//       thermostat.down();
//     }
//     expect(thermostat.getCurrentTemperature()).toEqual(10);
//   });
//
//   it('has power saving mode on by default', function() {
//     expect(thermostat.isPowerSavingModeOn()).toBe(true);
//   })
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
//   describe('when power saving mode is on', function() {
//     it('has a maximum tem[perature of 25 degrees', function() {
//       for (var i = 0; i < 6; i++) {
//         thermostat.up();
//       }
//       expect(thermostat.getCurrentTemperature()).toEqual(25);
//     });
//   });
//
//   describe('when power saving mode is off', function() {
//     it('has a maximum temperature of 30 degrees', function() {
//       thermostat.switchPowerSavingModeOff();
//       for (var i = 0; i < 13; i++) {
//         thermostat.up();
//       }
//       expect(thermostat.getCurrentTemperature()).toEqual(32);
//     });
//
//     it('can be reset to default temperature', function() {
//       for (var i = 0; i < 6; i++) {
//         thermostat.up();
//       }
//       thermostat.resetTemperature();
//       expect(thermostat.getCurrentTemperature()).toEqual(20);
//     });
//   });
//
//   describe('displaying usage levels', function() {
//
//     describe('when the temperature is below 18 degrees', function() {
//       it('is considered low usage', function() {
//         for (var i = 0; i < 3; i++) {
//           thermostat.down();
//         }
//         expect(thermostat.energyUsage()).toEqual('low-usage');
//       });
//     });
//
//       describe('when the temperature is between 18 and 25 degrees', function() {
//         it('is considered medium usage', function() {
//           expect(thermostat.energyUsage()).toEqual('medium-usage');
//         });
//       });
//
//       describe('when the temperature is above 25 degrees', function() {
//         it('is considered high usage', function() {
//           thermostat.powerSavingMode = false;
//           for (var i = 0; i < 6; i++) {
//             thermostat.up();
//           }
//           expect(thermostat.energyUsage()).toEqual('high-usage');
//         });
//      });
//   });
// });
