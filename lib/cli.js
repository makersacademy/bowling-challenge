const Game = require('./game');
const GameFormatter = require('./gameFormatter');
const prompt = require('prompt-sync')({sigint: true});

class Cli {
  constructor(input = prompt, output = console.log) {
    this.prompt = input;
    this.log = output;
    this.game = new Game();
    this.formatter = new GameFormatter(this.game);
  }

  run() {
    this.log('Welcome to a Bowling game!');

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const input = this.#getMenuInput();
      if (input === 'Quit') {
        this.log('Thank you for playing');
        break;
      } else if (input === 'Print Scorecard') {
        this.log(this.formatter.getScorecard());
      }
    }
  }

  #getMenuInput() {
    let input;
    while(!['1','2','3'].includes(input)) {
      this.#printMenu();
      input = this.prompt();
    }
    return {'1': 'Add Rolls', '2': 'Print Scorecard', '3': 'Quit'}[input];
  }

  #printMenu() {
    this.log('Select from the following options:')
    this.log('[1] Add Roll(s)');
    this.log('[2] Print Scorecard');
    this.log('[3] Quit game');
  }
}

module.exports = Cli;
