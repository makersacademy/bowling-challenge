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
  it('Will add up the scores when asked to', () => {
    bowling = new Bowling()
    bowling.myRoll(6)
    bowling.myRoll(3)
    bowling.myRoll(3)
    expect(bowling.calculateBasic()).toEqual(12);
  })

  it('Will add up strikes and spares correctly', () => {
    bowling = new Bowling()
    bowling.myRoll(10)
    bowling.myRoll(3)
    expect(bowling.calculateStrikes()).toEqual(3)
    bowling2 = new Bowling()
    bowling2.myRoll(7)
    bowling2.myRoll(3)
    bowling2.myRoll(4)
    expect(bowling2.calculateStrikes()).toEqual(4)
  })

  // it('Can correctly add up a game')
})