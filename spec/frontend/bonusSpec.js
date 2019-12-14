const Bonus = require('../../src/bonus');

describe('Bonus', () => {
  const testBonus = new Bonus();
  const testBonus2 = new Bonus();

  it('keeps track of any bonus points in a frame', () => {
    testBonus.addBonusPoints(2);
    testBonus.addBonusPoints(4);
    testBonus2.addBonusPoints(6);
    testBonus2.addBonusPoints(9);

    expect(testBonus.getBonusPoints()).toBe(6);
    expect(testBonus2.getBonusPoints()).toBe(15);
  });
});
