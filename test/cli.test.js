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

  it('Allows for roll input until empty input is given', () => {
    prompt.mockReturnValueOnce('1') // Add rolls
      .mockReturnValueOnce('10') // Strike
      .mockReturnValueOnce('3') // Roll 3
      .mockReturnValueOnce('7') // Roll 7 (spare)
      .mockReturnValueOnce('5') // Roll 5
      .mockReturnValueOnce('') // Back to menu
      .mockReturnValueOnce('2') // Print scorecard
      .mockReturnValueOnce('3'); // Quit

    cli.run();
    
    expect(prompt).toHaveBeenCalledTimes(8);
    expect(log).toHaveBeenCalledWith('Input your rolls (to stop press enter again)');
    expect(log).toHaveBeenCalledWith(expect.stringContaining('1.  |     X |   20'));
    expect(log).toHaveBeenCalledWith(expect.stringContaining('2.  | 3 , / |   35'));
    expect(log).toHaveBeenCalledWith(expect.stringContaining('3.  | 5     |     '));
  });

  it('Allows for several roll inputs', () => {
    prompt.mockReturnValueOnce('1') // Add rolls
      .mockReturnValueOnce('10') // Strike
      .mockReturnValueOnce('3') // Roll 3
      .mockReturnValueOnce('') // Back to menu
      .mockReturnValueOnce('1') // Add rolls
      .mockReturnValueOnce('7') // Roll 7 (spare)
      .mockReturnValueOnce('5') // Roll 5
      .mockReturnValueOnce('') // Back to menu
      .mockReturnValueOnce('2') // Print scorecard
      .mockReturnValueOnce('3'); // Quit

    cli.run();
    expect(prompt).toHaveBeenCalledTimes(10);
    expect(log).toHaveBeenCalledWith('Input your rolls (to stop press enter again)');
    expect(log).toHaveBeenCalledWith(expect.stringContaining('1.  |     X |   20'));
    expect(log).toHaveBeenCalledWith(expect.stringContaining('2.  | 3 , / |   35'));
    expect(log).toHaveBeenCalledWith(expect.stringContaining('3.  | 5     |     '));
  });

  it('stops after a full game', () => {
    prompt.mockReturnValueOnce('1'); // Add rolls
    for (let i = 0; i < 12; i++) {
      prompt.mockReturnValueOnce('10');
    }
    prompt.mockReturnValueOnce('1')
      .mockReturnValueOnce('2')
      .mockReturnValueOnce('3');

    cli.run();

    expect(prompt).toHaveBeenCalledTimes(16);
    expect(log).toHaveBeenNthCalledWith(7, 'The game is complete!');
    expect(log).toHaveBeenNthCalledWith(13, 'The game is complete!');
  });
});
