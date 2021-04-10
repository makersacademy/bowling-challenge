describe('frames', function() {
  let scoreCard = new ScoreCard;

  it ('should be empty by default', function() {
    expect(scoreCard.frames).toEqual([])
  })
})

describe('roll', function() {
  let scoreCard = new ScoreCard;

  it('saves each frame in an array', function() {
    scoreCard.roll(4)
    scoreCard.roll(2)

    expect(scoreCard.frames.length).toEqual(1)
  })
  it('saves each frame separately', function() {
    scoreCard.roll(10)
    scoreCard.roll(6)
    scoreCard.roll(1)

    expect(scoreCard.frames.length).toEqual(3)
  })
})

