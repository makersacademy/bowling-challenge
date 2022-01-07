describe('class Bowling', () => {
  beforeEach(()=> {
    bowling = new Bowling();
  })
  it('starts with a total score of 0', () => {
    expect(bowling.totalScore()).toEqual(0);
  })
})