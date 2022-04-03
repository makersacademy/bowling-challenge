const Bonus = require('../lib/bonus');
const Frame = require('../lib/frame');

jest.mock('../lib/frame.js');

describe('Bonus', () => {
  let frameDouble;
  let bonus;

  beforeEach(() => {
    frameDouble = new Frame();
    bonus = new Bonus(frameDouble, 2);
  });
  test('#apply', () => {
    const rollSpy = jest.spyOn(frameDouble, 'addScore').mockReturnValue();
    bonus.apply(4);
    expect(rollSpy).toHaveBeenCalledWith(4);
  });
  test('#isActive is false when 2 bonuses are added', () => {
    bonus.apply(4);
    bonus.apply(5);
    expect(bonus.isActive()).toBe(false);
  });
  test('#isActive is true when initialised', () => {
    expect(bonus.isActive()).toBe(true);
  });
});
