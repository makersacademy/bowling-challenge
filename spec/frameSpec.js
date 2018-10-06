var Frame = require('../src/frame')


describe('#addScore', function () {
  var frame = new Frame()

  beforeEach(function() {
    frame.scores = []
  })

  it('inserts score into scores array', function () {
    frame.addScore(3)
    expect(frame.scores[0]).toEqual(3)
  })

  it('only accepts three scores', function () {
    frame.addScore(7)
    frame.addScore(3)
    frame.addScore(4)
    frame.addScore(1)
    expect(frame.scores.length).toEqual(3)
  })

  it('closes the frame if the scores dont make a spare', function () {
    frame.addScore(3)
    frame.addScore(3)
    expect(frame.scores.length).toEqual(3)
  })
})
