const Bonus = require('../../public/js/bonus');

describe('Bonus', () => {
  const testBonus = new Bonus();
  const testBonus2 = new Bonus();

  it('keeps track of any bonus points in a frame', () => {
    testBonus.add(2);
    testBonus.add(4);
    testBonus2.add(6);
    testBonus2.add(9);

    expect(testBonus.getPoints()).toBe(6);
    expect(testBonus2.getPoints()).toBe(15);
  });
});
