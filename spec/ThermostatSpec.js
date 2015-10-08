describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has an initial value of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('up button', function() {

    it('will increase the temperature by one', function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toBe(21);
    });

  });

  describe('down button', function() {

    it('will decrease the temperature by one', function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toBe(19);
    });

    it('will not decrease temperature below 10 degrees', function() {
      thermostat.temperature = 10;
      expect(thermostat.decreaseTemp).toThrowError('Too chilly in here');
    });
  });

  describe('power saving mode,', function() {
    describe('when switched on', function() {

      it('activates power saving mode', function() {
        thermostat.powerSavingOn();
        expect(thermostat.isPowerSaving).toBe(true);
      });

      it('will not allow the temperature to increase above 25 degrees', function() {
        thermostat.temperature = 25;
        expect(function() { thermostat.increaseTemp(); }).toThrowError('Above 25 degrees not available in power saving mode');
      });

      it('will reset the temperature to 25 degrees, if current temperature is higher', function() {
        thermostat.isPowerSaving = false;
        thermostat.temperature = 32;
        thermostat.powerSavingOn();
        expect(thermostat.temperature).toEqual(25);
      });
    });

    describe('when switched off', function() {

      it('deactivates power saving mode', function() {
        thermostat.powerSavingOff();
        expect(thermostat.isPowerSaving).toBe(false);
      });

      it('will not allow the temperature to increase above 32 degrees', function() {
        thermostat.isPowerSaving = false;
        thermostat.temperature = 32;
        expect(thermostat.increaseTemp).toThrowError('Above 32 degrees not possible');
      });
    });
  });

  describe('reset button', function() {
    it('returns the temperature to 20 degrees', function() {
      thermostat.temperature = 21;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('display color', function() {
    it('is high if temperature is 25', function() {
      thermostat.temperature = 24;
      thermostat.increaseTemp();
      expect(thermostat.colour).toEqual('orangered');
    });

    it('is low if temperature is 17', function() {
      thermostat.temperature = 18;
      thermostat.decreaseTemp();
      expect(thermostat.colour).toEqual('olivedrab');
    });

    it('is medium if temperature is 21', function() {
      thermostat.increaseTemp();
      expect(thermostat.colour).toEqual('gold');
    });
  });
});
