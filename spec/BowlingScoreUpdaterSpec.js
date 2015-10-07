describe("BowlingScoreUpdater", function() {

  describe("new", function(){
    it("has some starting attributes",function(){
      newUpdater = new BowlingScoreUpdater();
      expect(newUpdater.frameRoundsLeft).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(0);
      expect(newUpdater.currentFrameNumber).toEqual(1);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(0);
      expect(newUpdater.prevFrameNumber).toEqual(0);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevPrevFrameTotal).toEqual(0);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });
  });

  describe("shiftFrames", function(){
    it("shifts frame information back one frame",function(){
      newUpdater = new BowlingScoreUpdater();
      newUpdater.currentFrameNumber = 3
      newUpdater.currentFrameTotal = 10
      newUpdater.currentFrameBonusRounds = 2
      newUpdater.prevFrameNumber = 2
      newUpdater.prevFrameTotal = 7
      newUpdater.prevFrameBonusRounds = 0
      newUpdater.shiftFrames();
      expect(newUpdater.frameRoundsLeft).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(0);
      expect(newUpdater.currentFrameNumber).toEqual(4);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevFrameNumber).toEqual(3);
      expect(newUpdater.prevFrameTotal).toEqual(10);
      expect(newUpdater.prevFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevPrevFrameTotal).toEqual(7);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });
  });

  describe("updateBonus", function(){
    it("adds bonus score to previous two frames",function(){
      newUpdater = new BowlingScoreUpdater();
      newUpdater.currentFrameNumber = 3
      newUpdater.currentFrameTotal = 10
      newUpdater.currentFrameBonusRounds = 2
      newUpdater.prevFrameNumber = 2
      newUpdater.prevFrameTotal = 7
      newUpdater.prevFrameBonusRounds = 2
      newUpdater.prevPrevFrameTotal = 15
      newUpdater.prevPrevFrameBonusRounds = 1
      newUpdater.updateBonus(9);
      expect(newUpdater.prevFrameTotal).toEqual(16);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(24);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });
  });

  describe("newRound", function(){
    it("correctly calculates scores after 1 round",function(){
      newUpdater = new BowlingScoreUpdater();
      newUpdater.newRound(9);
      expect(newUpdater.currentFrameNumber).toEqual(1);
      expect(newUpdater.currentFrameTotal).toEqual(9);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.frameRoundsLeft).toEqual(1);
      // expect(newUpdater.GameTotal).toEqual(9);
    });

    it("correctly calculates scores after 2 rounds",function(){
      newUpdater.newRound(1);
      expect(newUpdater.currentFrameNumber).toEqual(1);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(1);
      expect(newUpdater.frameRoundsLeft).toEqual(0);
      expect(newUpdater.prevFrameNumber).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(0);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(10);
    });

    it("correctly calculates scores after 3 rounds",function(){
      newUpdater.newRound(7);
      expect(newUpdater.currentFrameNumber).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(7);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.frameRoundsLeft).toEqual(1);
      expect(newUpdater.prevFrameNumber).toEqual(1);
      expect(newUpdater.prevFrameTotal).toEqual(17);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(24);
    });

    it("correctly calculates scores after 4 rounds",function(){
      newUpdater.newRound(2);
      expect(newUpdater.currentFrameNumber).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(9);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.frameRoundsLeft).toEqual(0);
      expect(newUpdater.prevFrameNumber).toEqual(1);
      expect(newUpdater.prevFrameTotal).toEqual(17);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(26);
    });

    it("correctly calculates scores after 5 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(3);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameNumber).toEqual(2);
      expect(newUpdater.prevFrameTotal).toEqual(9);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(36);
    });

    it("correctly calculates scores after 6 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(4);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameNumber).toEqual(3);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      // expect(newUpdater.GameTotal).toEqual(56);
    });

    it("correctly calculates scores after 7 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(5);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameNumber).toEqual(4);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(30);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(86);
    });

    it("correctly calculates scores after 8 rounds",function(){
      newUpdater.newRound(8);
      expect(newUpdater.currentFrameNumber).toEqual(6);
      expect(newUpdater.currentFrameTotal).toEqual(8);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevFrameNumber).toEqual(5);
      expect(newUpdater.prevFrameTotal).toEqual(18);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(28);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(110);
    });

    it("correctly calculates scores after 9 rounds",function(){
      newUpdater.newRound(2);
      expect(newUpdater.currentFrameNumber).toEqual(6);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevFrameNumber).toEqual(5);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevPrevFrameTotal).toEqual(28);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(114);
    });

    it("correctly calculates scores after 10 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(7);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameNumber).toEqual(6);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevPrevFrameTotal).toEqual(20);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(134);
    });

    it("correctly calculates scores after 11 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(8);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameNumber).toEqual(7);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(20);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(154);
    });

    it("correctly calculates scores after 12 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(9);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameNumber).toEqual(8);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(30);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(184);
    });

    it("correctly calculates scores after 13 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(10);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.frameRoundsLeft).toEqual(0);////////
      expect(newUpdater.prevFrameNumber).toEqual(9);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(30);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
      // expect(newUpdater.GameTotal).toEqual(214);
    });

  });

});




// describe("Thermostat",function() {
//
//   var thermostat;
//
//   beforeEach(function() {
//     thermostat = new Thermostat();
//   });
//
//   describe("when created",function() {
//
//     it("has a starting temperature of 20 degress",function() {
//       expect(thermostat.temperature).toEqual(20);
//     });
//
//     it("powersaving mode is on",function() {
//       expect(thermostat.powerSavingMode).toBe(true);
//     });
//   });
//
//   describe("can turn powersaving on and off",function() {
//
//     it("turning powersaving off",function() {
//       thermostat.switchPowerSaving();
//       expect(thermostat.powerSavingMode).toBe(false);
//     });
//
//     it("turning powersaving back on",function() {
//       thermostat.switchPowerSaving();
//       thermostat.switchPowerSaving();
//       expect(thermostat.powerSavingMode).toBe(true);
//     });
//
//   });
//
//   describe("can change the temperature",function() {
//
//     it("incresae temperature by 1 degree",function() {
//       thermostat.increaseTemperature();
//       expect(thermostat.temperature).toEqual(21);
//     });
//
//     it("decrease temperature by 1 degree",function() {
//       thermostat.decreaseTemperature();
//       expect(thermostat.temperature).toEqual(19);
//     });
//
//     it("has a minimum temperature of 10 degrees",function() {
//       for(i = 1; i < 12; i++){
//         thermostat.decreaseTemperature();
//       };
//       expect(thermostat.temperature).toEqual(10);
//     });
//
//     it("max temperature of 25 degree when power saving mode is on",function() {
//       for(i=1;i<7;i++){
//         thermostat.increaseTemperature();
//       };
//       expect(thermostat.temperature).toEqual(25);
//     });
//
//     it("max temperature of 32 degree when power saving mode is off",function() {
//       thermostat.switchPowerSaving();
//       for(i = 1; i < 14; i++){
//         thermostat.increaseTemperature();
//       };
//       expect(thermostat.temperature).toEqual(32);
//     });
//   });
//
//   describe("can reset temperature",function() {
//     it("to 20 degrees",function() {
//       thermostat.switchPowerSaving();
//       for(i = 1; i < 9; i++){
//         thermostat.increaseTemperature();
//       };
//       thermostat.resetTemperature();
//       // reset everything
//       expect(thermostat.temperature).toEqual(20);
//     });
//   });
//
//   describe("has corresponding color schemes",function() {
//     it("is green when less than 18 degrees",function() {
//       for(i = 1; i < 8; i++){
//         thermostat.decreaseTemperature();
//       };
//       expect(thermostat.colour()).toEqual("green");
//     })
//
//     it("is red when greater than 25 degrees",function() {
//       thermostat.switchPowerSaving();
//       for(i = 1; i < 20; i++){
//         thermostat.increaseTemperature();
//       };
//       expect(thermostat.colour()).toEqual("red");
//     });
//
//     it("is yellow when between 18 and 25 degrees",function() {
//       expect(thermostat.colour()).toEqual("yellow");
//     });
//
//   });
//
// });
