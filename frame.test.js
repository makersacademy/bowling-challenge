

const { expect } = require('@jest/globals')
const Frame = require('./frame')


describe('frame', () => {
  beforeEach(() => {
    frame = new Frame;
  });
  it('has a roll counter set to 1', () => {

    expect(frame.getRollCounter()).toBe(1)
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

    frame.addPins(7)
    expect(frame.getRolls()).toStrictEqual([7])
  })
  it('is a strike if first roll is 10', () => {

    frame.addPins(10)
    expect(frame.isStrike()).toBeTruthy;
  })
  it('is a spare when first and second role add to ten and wasnt strike', () => {

    frame.addPins(8)
    frame.addPins(2)
    expect(frame.isSpare()).toBeTruthy;
  })
  it('adds up the total of the frame', () => {

    frame.addPins(8)
    frame.addPins(1)
    expect(frame.getTotal()).toBe(9)
  })
  it('doesnt add the pins if pin count over 10', () => {
    expect(function(){ frame.addPins(11); } ).toThrow('You wish!');
  })
  it('doesnt add the pins if pin count is negative number', () => {
    expect(function(){ frame.addPins(-1); } ).toThrow('Pas possible');
  })

})