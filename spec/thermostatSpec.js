'use strict';

describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
     thermostat = new Thermostat();
  });

  describe("defaults", function(){
    it("temperature = 20", function(){
      expect(thermostat.temperature).toEqual(20);
    });
    it("power saving mode enabled", function(){
      expect(thermostat.power_save).toEqual(true);
    });
  });

  describe("basic functionality", function(){
    it("up button increases temperature by 1", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it("down button decreases temperature by 1", function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("has minimum temperature of 10", function(){
      for (var i= 1; i<=12; i++){
      thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10);
    });

    it("reset sets temperature to 20", function(){
      for (var i= 1; i<=7; i++){
      thermostat.down();
      }
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });

    it("PSM off sets power_save to false", function(){
      thermostat.psmOff();
      expect(thermostat.power_save).toEqual(false);
    });

    it("PSM on sets power_save to true", function(){
      thermostat.psmOff();
      thermostat.psmOn();
      expect(thermostat.power_save).toEqual(true);
    });

    it("PSM on sets temperature to eco max if previously higher than eco max", function(){
      for (var i= 1; i<=12; i++){
      thermostat.up();
      }
      thermostat.psmOn();
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('power save mode', function(){
    it("has maximum temperature of 25", function(){
      for (var i= 1; i<=6; i++){
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('normal mode', function(){
    beforeEach(function(){
      thermostat.power_save = false;
    });

    it("has maximum temperature of 32", function(){
      for (var i= 1; i<=13; i++){
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });
  });

  it('low energy usage if temperature < 18', function(){
    thermostat.temperature = 17;
    expect(thermostat.energyUsage()).toEqual('low');
  });

  it('medium energy usage if 18 <= temperature < 25', function(){
    thermostat.temperature = 18;
    expect(thermostat.energyUsage()).toEqual('medium');
  });

  it('high energy usage if temperature >= 25', function(){
    thermostat.temperature = 25;
    expect(thermostat.energyUsage()).toEqual('high');
  });
});
