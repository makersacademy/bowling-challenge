const Cli = require('../lib/cli');

describe('Cli integration', () => {
  const prompt = jest.fn();
  const log = jest.fn();

  let cli;

  beforeEach(() => {
    prompt.mockReset();
    log.mockReset();

    cli = new Cli(prompt, log);
  });

  it('Greets the player and prints a menu', () => {
    prompt.mockReturnValueOnce('3');

    cli.run();
    expect(log).toHaveBeenCalledWith('Welcome to a Bowling game!');

    expect(log).toHaveBeenCalledWith('Select from the following options:');
    expect(log).toHaveBeenCalledWith('[1] Add Roll(s)');
    expect(log).toHaveBeenCalledWith('[2] Print Scorecard');
    expect(log).toHaveBeenCalledWith('[3] Quit game');
  });

  it('Prints the menu again if valid input is not added', () => {
    prompt.mockReturnValueOnce('Hello World')
      .mockReturnValueOnce('5')
      .mockReturnValueOnce(3)
      .mockReturnValueOnce('3');
    
    cli.run();
    expect(prompt).toHaveBeenCalledTimes(4);
    expect(log).toHaveBeenCalledTimes(18);
    expect(log).toHaveBeenCalledWith('Thank you for playing');
  });

  it('Prints an empty scorecard', () => {
    prompt.mockReturnValueOnce('2')
      .mockReturnValueOnce('3');
    
    cli.run();

    expect(prompt).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenCalledWith(
      expect.stringContaining('FRAME | ROLLS | SCORE')
    );
  });
});
