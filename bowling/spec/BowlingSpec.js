describe('Bowling', function() {
  var bowling = new Bowling

  it('begins a game with an empty score card', function() {
    expect(bowling.score).toEqual(0);
  })

  it('begins a game with a frame counter of 0', function() {
    expect(bowling.frameCounter).toEqual(0);
  })

  describe('#takeAGo', function() {
    it('returns STRIKE if the randomiser returns 10', function() {
      expect(bowling.takeAGo(10)).toEqual('STRIKE');
    })

    it('returns GUTTER BALL if the randomiser returns 0', function() {
      expect(bowling.takeAGo(0)).toEqual('GUTTER BALL');
    })

    it('else returns score integer', function() {
      expect(bowling.takeAGo(2)).toEqual(2);
    })
  })
})
