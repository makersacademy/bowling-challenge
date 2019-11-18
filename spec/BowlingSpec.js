// describe("Thermostat", function() {
//   var thermo;
//
//   beforeEach(function () {
//     thermo = new Thermostat()
//   })
//
//   it("should have a starting temperature of 20", function() {
//     expect(thermo.temperature).toEqual(20)
//   })
//
//   it("can increase the temperature", function() {
//     thermo.up(5)
//     expect(thermo.temperature).toEqual(25)
//   })
//
//   it("can decrease the temperature", function() {
//     thermo.down(5)
//     expect(thermo.temperature).toEqual(15)
//   })
//
//   it("has a minimum temperature 10", function() {
//     expect(thermo.minTemp).toEqual(10)
//   })
//
//   it("has a maximum temperature of 25", function() {
//     expect(thermo.maxTemp).toEqual(25)
//   })
//
//   it("has a power saving mode", function() {
//     expect(thermo.isPowerSavingOn).toEqual(true)
//   })
//
//   it("has a maximum temperature of 32 when power saving is off", function() {
//     thermo.togglePowerSaving()
//     expect(thermo.maxTemp).toEqual(32)
//   })
//
//   it('can reset the temperature to 20',function(){
//     thermo.reset()
//     expect(thermo.temperature).toEqual(20);
//   });
//
//   it('returns Medium energy usage when temperature <25 >18 degrees aka at default start',function(){
//     expect(thermo.energyUsage()).toEqual("Medium usage");
//   });
//
//   it('returns low energy usage when temperature <18 degrees',function(){
//     thermo.down(3)
//     expect(thermo.energyUsage()).toEqual("Low usage");
//   });
//
//   it("returns 'high' usage when temperature > 25 degrees",function(){
//     thermo.up(6);
//     expect(thermo.energyUsage()).toEqual("High usage");
//   });
// });
