const Frame = require('./frame')


describe('frame', () => {
  beforeEach(() => {
    frame = new Frame;
  });
  it('has a roll counter set to 1', () => {
    expect(frame.getRollCounter()).toBe(1)
  })
  it('has a score counter set to 0', () => {
    expect(frame.getScore()).toBe(0)
  })
  it('is created with the frame being live (ready for play)', () => {
    expect(frame.isLive()).toBeTruthy
  })
  it('add 1 to the roll counter', () => {
    frame.addRoll()
    expect(frame.getRollCounter()).toBe(2)
  })
  it('subtract 1 from the roll counter', () => {
    frame.minusRoll()
    expect(frame.getRollCounter()).toBe(0)
  })
  it('the pin count is stored in an array: rolls', () => {
    expect(frame.getRolls()).toEqual([])
  })
  it('adds the pin count to the rolls array', () => {
    frame.addPinsToRolls(7)
    expect(frame.getRolls()).toStrictEqual([7])
  })
  it('is a strike if first roll is 10', () => {
    frame.addPinsToRolls(10)
    expect(frame.isStrike()).toBeTruthy;
  })
  it('is a spare when first and second role add to ten and wasnt strike', () => {
    frame.addPinsToRolls(8)
    frame.addPinsToRolls(2)
    expect(frame.isSpare()).toBe(true);
  })
  it('adds the pins from roll to the score', () => {
    frame.processOfTheRoll(8)
    expect(frame.getScore()).toBe(8)
    
  })
  it('doesnt add the pins if pin count over 10', () => {
    expect(function(){  frame.processOfTheRoll(11); } ).toThrow('You wish!');
  })
  it('doesnt add the pins if pin count is negative number', () => {
    expect(function(){  frame.processOfTheRoll(-1); } ).toThrow('Pas possible');
  })
  it('changes frame to closed if first roll is a strike', () => {
    frame.addPinsToRolls(10)
    frame.checkEndOfFrame()
    expect(frame.isLive()).toBe(false)
  })
  it('changes frame to closed if its a spare', () => {
    expect(frame.isLive()).toBe(true)
    frame.processOfTheRoll(8)
    frame.processOfTheRoll(2)
    expect(frame.isLive()).toBe(false)
  })
})