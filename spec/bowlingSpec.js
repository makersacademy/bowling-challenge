
'use strict';
// var Shot = require('../app/public/src/bowling');

describe('Shot', function(){
  var shot;

  beforeEach(function(){
   shot = new Shot();
  });

  // As a player
  // so I can be able to play
  // I want to roll a ball and hit a 0 to 10 pins

  describe('Roll a bowling ball', function() {
    it('can roll a ball', function(){
      shot.hit(4);
      expect(shot.knockedDownPins()).toEqual(4);
    });
  });

  // describe('Score points', function() {
  //   it('can roll a ball', function(){
  //     shot.rollBall();
  //     expect(game.knockedDownPins()).toEqual(4);
  //   });
  // });

  // You can increase the temperature with the up button
  //
  // it('increases temperature with up button', function(){
  //   thermostat.upButton();
  //   expect(thermostat.getCurrentTemperature()).toEqual(21);
  // });
  //
  // // You can decrease the temperature with the down button
  //
  // it('decreases temperature with down button', function(){
  //   thermostat.downButton();
  //   expect(thermostat.getCurrentTemperature()).toEqual(19);
  // });
  //
  // // The minimum temperature is 10 degrees
  //
  // it('has a minimum temperature of 10 degrees', function(){
  //   thermostat.temperature = 10;
  //   expect( function(){ thermostat.downButton(); } ).toThrow(new Error("Thermostat at minimum"));
  // });
  //
  //
  // // Power saving mode is on by default
  //
  // it('has power saving mode', function() {
  //   expect( thermostat.powerSavingMode).toBe(true);
  // });
  //
  // // If power saving mode is on, the maximum temperature is 25 degrees
  //
  // it('has a maximum temperature of 25 degrees if power saving mode is on', function() {
  //   thermostat.temperature = 25;
  //   expect( thermostat.powerSavingMode).toBe(true);
  //   expect( function(){ thermostat.upButton(); } ).toThrow(new Error("Thermostat at maximum"));
  // });
  //
  // // Can turn power saving mode off
  //
  // it('has power saving mode', function() {
  //   thermostat.togglePowerSavingMode();
  //   expect( thermostat.powerSavingMode).toBe(false);
  // });
  //
  // // If power saving mode is off, the maximum temperature is 32 degrees
  // it('if power saving mode is off max temperature is 32 degress', function() {
  //   thermostat.togglePowerSavingMode();
  //   expect(thermostat.powerSavingMode).toBe(false);
  //   expect(thermostat.maximumTemperature).toEqual(32);
  // });
  //
  // // You can reset the temperature to 20 by hitting the reset button
  // it('lets you reset the temperature to 20 with reset', function(){
  //   thermostat.temperature = 25;
  //   thermostat.reset();
  //   expect(thermostat.temperature).toEqual(20);
  // });
  //
  // // The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
  //
  // describe('displaying usage levels', function() {
  //   describe('when the temperature is below 18 degrees', function() {
  //     it('it is considered low-usage', function() {
  //       for (var i = 0; i < 3; i++) {
  //         thermostat.downButton();
  //       }
  //       expect(thermostat.energyUsage()).toEqual('low-usage');
  //     });
  //   });
  //
  //   describe('when the temperature is between 18 and 25 degrees', function() {
  //     it('it is considered medium-usage', function() {
  //       expect(thermostat.energyUsage()).toEqual('medium-usage');
  //     });
  //   });
  //
  //   describe('when the temperature is anything else', function() {
  //     it('it is considered high-usage', function() {
  //       thermostat.togglePowerSavingMode();
  //       for (var i = 0; i < 6; i++) {
  //         thermostat.upButton();
  //       }
  //       expect(thermostat.energyUsage()).toEqual('high-usage');
  //     });
  //   });
  // });
});
