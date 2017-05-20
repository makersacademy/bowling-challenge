describe('AuthenticateRoll', function() {
  var authRoll = new AuthenticateRoll(2, 1)

  it('is given a score when instanciated', function() {
    expect(authRoll.score).toEqual(2);
  })

  it('is give a roll when instanciated', function() {
    expect(authRoll.roll).toEqual(1);
  })

  describe('#checkScore', function() {
    it('returns true if 0 < score <= 10', function() {
      expect(authRoll.checkScore()).toEqual(true);
    })

    it('returns false if score > 10 or < 0', function() {
      var authRoll = new AuthenticateRoll(-3, 1);
      console.log(authRoll.score);
      expect(authRoll.checkScore()).toEqual(false);
    })
  })
})
