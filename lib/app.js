const GameScore = require('./GameScore');
const Frame = require('./frame');

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// var readlineSync = require('readline-sync');
const prompt = require('prompt-sync')();


class Application {
  runGame() {
    this.runFirstTenRolls();
  }

  runFirstTenRolls() {
    var roll1Frame1 = number(prompt(
      'Introduce the first roll of frame 1: '
    ));
    console.log('first roll', roll1Frame1);
  }

  while (
    typeof roll1Frame1 != 'number' ||
    roll1Frame1 < 0 ||
    roll1Frame1 > 10
  ) {
    console.log('Please, enter a valid number.');
    var roll1Frame1 = input.question(
        'Introduce the first roll of frame 1: '
      );
}

// var roll2Frame1 = prompt('Introduce the second roll of frame 1:');
// while (
//   typeof roll2Frame1 != number ||
//   roll2Frame1 < 0 ||
//   roll2Frame1 > 10
// ) {
//   console.log('Please, enter a valid number.');
//   var roll1Frame1 = prompt('Introduce the second roll of frame 1:');
// }

// var roll1Frame1 = prompt('Introduce the first roll of frame 2:');
// while (
//   typeof roll1Frame2 != number ||
//   roll1Frame2 < 0 ||
//   roll1Frame2 > 10
// ) {
//   console.log('Please, enter a valid number.');
//   var roll1Frame1 = prompt('Introduce the first roll of frame 2:');
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

//         var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

// var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// while (typeof roll1Frame1 != number || roll1Frame1 < 0 || roll1Frame1 > 10) {
//  console.log("Please, enter a valid number.")
//  var roll1Frame1 = prompt("Introduce the first roll of frame 1:")
// }

module.exports = Application;

const application = new Application();
application.runGame();
