describe('AuthenticateRoll', function() {
  var authRoll = new AuthenticateRoll(2)

  it('is given a score when instanciated', function() {
    expect(authRoll.score).toEqual(2);
  })

  describe('#checkScore', function() {
    it('returns true if 0 < score <= 10', function() {
      expect(authRoll.checkScore()).toEqual(true);
    })

    it('returns false if score > 10 or < 0', function() {
      var authRoll = new AuthenticateRoll(-3);
      expect(authRoll.checkScore()).toEqual(false);
    })
  })

  describe('#possibleScore', function() {
    it('returns 10 - the score given', function() {
      expect(authRoll.possibleScore(5)).toEqual(5);
    })
  })

  describe('#roll2Check', function() {
    it('returns true if the roll is less than the possibleScore', function() {
      expect(authRoll.roll2Check(4, 5)).toEqual(true);
    })

    it('returns false if the roll is more than the possibleScore', function() {
      expect(authRoll.roll2Check(6, 5)).toEqual(false);
    })
  })

  describe('#strike', function() {
    it('returns true if the score is 10', function() {
      expect(authRoll.maxScore(10)).toEqual(true);
    })

    it('returns false if the score is < 10', function() {
      expect(authRoll.maxScore(9)).toEqual(false);
    })
  })
})
