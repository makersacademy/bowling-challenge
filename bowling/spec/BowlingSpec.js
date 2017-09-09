describe('Bowling', function() {
  var bowling = new Bowling()

  it('begins a game with an empty score card', function() {
    expect(bowling.score).toEqual(0);
  })

  it('begins a game with a frame counter of 0', function() {
    expect(bowling.frameCounter).toEqual(0);
  })

  // describe('#startGame', function() {
  //   it('creates a new frame at the start of a new game', function() {
  //     bowling
  //   })
  // })

  describe('#setBonus', function() {
    it('sets the bonus to 2 if a strike was rolled', function() {
      expect(bowling.setBonus([10])).toEqual(2);
    })

    it('sets the bonus to 1 if a spare was rolled', function() {
      expect(bowling.setBonus([2, 8])).toEqual(1);
    })

    it('else itsets the bonus to 0', function() {
      expect(bowling.setBonus([2, 9])).toEqual(0);
    })
  })
})
