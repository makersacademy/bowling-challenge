// function showMessage() {
//   const message = "testing esLint and jasmine";
//   for ( let i = 0; i < 5; i++ ) {
//     // eslint-disable-next-line no-console
//     console.log(message);
//   }
// }
//
// showMessage();
class Scorecard {
  constructor() {
    this._rolls = [];
  }
  function roll(pins) {
    this._rolls.push(pins)
  }
}
