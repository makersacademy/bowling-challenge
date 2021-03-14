// class Thermostat {
//   constructor() {
//     this.DEFAULT_TEMP = 20;
//     this.temperature = this.DEFAULT_TEMP;
//     this.minimumTemperature = 10;
//     this.powerSavingMode = true;
//     this.MAX_PSM_LIMIT_ON = 25;
//     this.MAX_PSM_LIMIT_OFF = 32;
//   }
//
//   getCurrentTemperature() {
//     return this.temperature;
//   }
// console.log("Hello there");

class Game {
  constructor(frame1 = new Frame(), frame2 = new Frame(),
              frame3 = new Frame(), frame4 = new Frame(),
              frame5 = new Frame(), frame6 = new Frame(),
              frame7 = new Frame(), frame8 = new Frame(),
              frame9 = new Frame(), frame10 = new Frame()) {
  this.scorecard = [ {frame1: frame1}, {frame2: frame2},
                 {frame3: frame3}, {frame4: frame4},
                 {frame5: frame5}, {frame6: frame6},
                 {frame7: frame7}, {frame8: frame8},
                 {frame9: frame9}, {frame10: frame10} ]
              }
}
