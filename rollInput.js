// This class exists because it can be mocked in jest tests
const rl = require("readline-sync");

class RollInput {
  getRoll(prompt) {
    // TODO: Ensure the user input is 0-10
    let input = parseInt(rl.question(prompt));
    return input;
  };
};

module.exports = RollInput;