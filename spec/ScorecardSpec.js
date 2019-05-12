describe('Scorecard', function() {

  var scorecard;
  beforeEach(function() {
    scorecard = new Scorecard()
  })


describe('gutter game', function(){
  it('gives score 0', function(){
    roll(20,0)
    expect(score.total()).toEqual(0);
    expect(score.isComplete()).toBe(true);
  })
})

describe('one frame', function(){
  it('gives total score so far', function(){
    roll(20,4)
    expect(scorecard.tota.()).toEqual(80)
    expect(scorecard.isComplete()).toBe(true)
  })
})
