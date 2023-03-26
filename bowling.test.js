const Bowling = require('./bowling');

beforeEach(() => {
  bowling = new Bowling()
}) 

describe(Bowling,() => {
  it('should return 0 when Gutter Game', () => {
    for(let i = 0; i<=20 ; i++){
      bowling.roll(0)
    }
    expect(bowling.getScore()).toBe(0);
  })
  it('should return 20 when users knocks down 1 pins every roll', () => {
    for(let i = 0; i <20 ; i++){
      bowling.roll(1)
    }
    expect(bowling.getScore()).toBe(20);
  })

  it('should return correct scores with one spares',() => {
  bowling.roll(6);
  bowling.roll(4);
  bowling.roll(1);
  bowling.roll(1);
  for(let i = 0; i <16 ; i++){
    bowling.roll(0)
  }
  expect(bowling.getScore()).toBe(13);
});

  it('should return correct scores with one strikes', () => {
  bowling.roll(10);
  bowling.roll(1);
  bowling.roll(1);
  bowling.roll(1);
  bowling.roll(1);
  for(let i = 0; i <15 ; i++){
    bowling.roll(0)
  }
  expect(bowling.getScore()).toBe(16);
  })

  it('should return perfect game when the player rolls 12 strikes', () => {
    for(let i = 0; i<=20 ; i++){
      bowling.roll(10)
    }
    expect(bowling.getScore()).toBe(300);
    })
});
