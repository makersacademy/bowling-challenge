describe("Thermostat", function() {
  const Thermostat = require('../src/Thermostat.js');
  var testThermostat;
  var minTemp = 10;

  beforeEach(function(){
    testThermostat = new Thermostat();
  });

  describe("#currentSetting", function() {
    it("starts at 20 degrees", function(){
      expect(testThermostat.currentSetting()).toEqual(20);
    });
  });

  describe("#upTemp", function() {
    it("You can increase the temperature with an up function", function() {
      expect(testThermostat.upTemp()).toEqual(21);
    });

    it("cannot increase the temperature above 32 degrees", function() {
      testThermostat.adjustPowerSave()
      expect(testThermostat.upTemp(13)).toEqual("Temperature cannot exceed 32 degrees, it has not been increased.");
    });

    it("If power saving mode is on, the maximum temperature is 25 degrees", function() {
      expect(testThermostat.upTemp(13)).toEqual("Temperature cannot exceed 25 degrees, it has not been increased.");
    });
  });

  describe("#adjustPowerSave", function() {
    it("switches power save mode on and off", function() {
      expect(testThermostat.adjustPowerSave()).toBeFalse();
    });
  });

  describe("#downTemp", function() {
    it("You can decrease the temperature with a down function", function() {
      expect(testThermostat.downTemp()).toEqual(19);
    });

    it("has a minimum temperature of 10 degrees", function() {
      expect(testThermostat.downTemp(11)).toEqual(`Temperature cannot go below ${minTemp} degrees, it has been adjusted to 10 degrees!`)
      expect(testThermostat.currentSetting()).toEqual(10);
    });
  });

  describe("#resetTemp", function() {
    it("adjusts the temp to 20 degrees", function() {
      expect(testThermostat.resetTemp()).toEqual(20);
    });
  });

  describe("#currentUsage", function() {
    it("tells you if you are at low usage, when below 18 degrees", function() {
      testThermostat.downTemp(5)
      expect(testThermostat.currentUsage()).toEqual("low-usage");
    });

    it("tells you if you are at medium usage, when at or below 25 degrees, and 18 or above", function() {
      expect(testThermostat.currentUsage()).toEqual("medium-usage");
    });

    it("tells you if you are at high usage, when above 25", function() {
      testThermostat.adjustPowerSave()
      testThermostat.upTemp(6)
      expect(testThermostat.currentUsage()).toEqual("high-usage");
    });
  });

});
