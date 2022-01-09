const Bowling = require('../lib/bowling.js');

describe('Bowling class', () => {
  it('can bowl a ball', () => {
    bowling = new Bowling()
    expect(bowling.myRoll(5)).toEqual({'1' : [5]});
  });
  it('Will not bowl if it has a value of over 10', () => {
    bowling = new Bowling()
    expect(bowling.myRoll(15)).toEqual('Invalid roll');
  });
  it('Will not bowl if this bowl plus the previous will be over 10', () => {
    bowling = new Bowling()
    bowling.myRoll(6)
    expect(bowling.myRoll(5)).toEqual('Invalid roll');
  });
  it('Will bowl and move to the next turn after doing so', () => {
    bowling = new Bowling()
    bowling.myRoll(6)
    bowling.myRoll(3)
    expect(bowling.myRoll(5)).toEqual({'1' : [6, 3], '2' : [5]});
  });
  it('Will do the bowls correctly if an incorrect bowl is given inbetween valid rolls', () => {
    bowling = new Bowling()
    bowling.myRoll(6)
    bowling.myRoll(6)
    bowling.myRoll(3)
    expect(bowling.myRoll(5)).toEqual({'1' : [6, 3], '2' : [5]});
  })
})