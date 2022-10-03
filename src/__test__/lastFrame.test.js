const Frame = require('../frame');
const LastFrame = require('../lastFrame');

describe('LastFrame', () => {
  beforeEach(() => {
    lastFrame = new LastFrame();
  })

  it('inherits isStrike()', () => {
    lastFrame.setFirstRoll(10);
    expect(lastFrame.isStrike()).toEqual(true);
  });

  it('stores third roll', () => {
    lastFrame.setThirdRoll(4);
    expect(lastFrame.getThirdRoll()).toEqual(4);
  });

  describe('isStrike()', () => {
    it('returns true on second roll strike', () => {
      lastFrame.setFirstRoll(10);
      lastFrame.setSecondRoll(10);
      expect(lastFrame.isSecondStrike()).toEqual(true);
    });

    it('returns false on second roll spare with 0 on first roll', () => {
      lastFrame.setFirstRoll(0);
      lastFrame.setSecondRoll(10);
      expect(lastFrame.isSecondStrike()).toEqual(false);
    });

    it('returns false on second roll that is not strike', () => {
      lastFrame.setSecondRoll(5);
      expect(lastFrame.isSecondStrike()).toEqual(false);
    });
  });
});
