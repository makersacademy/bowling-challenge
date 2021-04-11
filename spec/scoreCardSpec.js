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

describe('total', function() {
  let scoreCard = new ScoreCard;
  let newScore = new ScoreCard;
  let doublesStrike = new ScoreCard;

  it('should be able to calculate the total score', function() {
    scoreCard.roll(3)
    scoreCard.roll(6)
    scoreCard.roll(1)
    scoreCard.roll(7)

    expect(scoreCard.total()).toEqual(17)
  })
  it( 'should calculate a bonus for a strike as well', function() {
    scoreCard.roll(10)
    scoreCard.roll(1)
    scoreCard.roll(7)

    expect(scoreCard.total()).toEqual(43)
  })
  it('can calculate the score with a spare', function() {
    newScore.roll(4)
    newScore.roll(6)
    newScore.roll(8)
    newScore.roll(1)

    expect(newScore.total()).toEqual(27)
  })
  it ('knows what to do with a double strike', function() {
    doublesStrike.roll(10)
    doublesStrike.roll(10)
    doublesStrike.roll(4)
    doublesStrike.roll(2)
    doublesStrike.roll(2)
    doublesStrike.roll(1)


    expect(doublesStrike.total()).toEqual(49)
  })
})

describe('tenthRound', function() {
  let scoreCard = new ScoreCard;
  it('allows for only 10 frames', function() {
    for(let i = 0; i < 18; i++) {
      scoreCard.roll(4)
    }
    scoreCard.play(10)
    scoreCard.play(3)
    scoreCard.play(2)

    expect(scoreCard.frames.length).toEqual(10)
  })
})

describe('tenthRound', function() {
  let scoreCard = new ScoreCard;
  it('returns the final score when the game ends', function() {
    for(let i = 0; i < 20; i++) {
      scoreCard.play(4)
    }

    expect(scoreCard.play(3)).toEqual('Game ended! Your score was 80')
  })
})
describe('tenthRoundStrike', function() {
  let scoreCard = new ScoreCard;
  it('calculates the right bonus for a strike in the tenth round', function() {
    for(let i = 0; i < 18; i++) {
      scoreCard.play(4)
    }
    scoreCard.play(10)
    scoreCard.play(3)

    expect(scoreCard.play(2)).toEqual('Game ended! Your score was 87')
  })
})

describe('Tenth round without a third roll', function() {
  let scoreCard = new ScoreCard;
  it('wont allow a third roll in a tenth round without spare or strike', function() {
    for(let i = 0; i < 18; i++) {
      scoreCard.play(4)
    }
    scoreCard.play(4)
    scoreCard.play(4)
    expect(scoreCard.play(4)).toEqual('Game ended! Your score was 80')
  })
})
describe('third roll', function() {
  let scoreCard = new ScoreCard;
  it('should allow a third roll if the first roll is a strike', function() {
    for(let i = 0; i < 18; i++) {
      scoreCard.play(4)
    }
    scoreCard.play(10)
    scoreCard.play(4)

    expect(scoreCard.play(4)).toEqual('Game ended! Your score was 90')
  })
})

describe('third roll for a spare', function() {
  let scoreCard= new ScoreCard;
  it('should allow a third roll if the first two rolls were a spare', function() {
    for(let i = 0; i < 18; i++) {
      scoreCard.play(4)
    }
    scoreCard.play(6)
    scoreCard.play(4)

    expect(scoreCard.play(4)).toEqual('Game ended! Your score was 86')
  })
})

describe('perfect game', function() {
  let scoreCard = new ScoreCard;
  it('should return 300 on a prefect game', function() {
    for(let i = 0; i < 12; i++) {
      scoreCard.play(10)
    }

    expect(scoreCard.play(10)).toEqual('Game ended! Your score was 300')
  })
})

