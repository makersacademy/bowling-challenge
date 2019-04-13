describe('Bad user input', function () {
  if (typeof require !== 'undefined') {
    Scorecard = require('../../src/Scorecard')
  }
  var scorecard

  beforeEach(function () {
    scorecard = new Scorecard()
  })

  describe("It won't accept invalid input", function () {
    it('Raises an error if given a negative number', function () {
      expect(function () {
        scorecard.roll(-1)
      }).toThrow(new Error('Could not record roll. Invalid input.'))
    })

    it('Raises an error if given a number over 10', function () {
      expect(function () {
        scorecard.roll(11)
      }).toThrow(new Error('Could not record roll. Invalid input.'))
    })

    it('Raises an error if given a string', function () {
      expect(function () {
        scorecard.roll('three')
      }).toThrow(new Error('Could not record roll. Invalid input.'))
    })
  })

  describe('Oversized frames', function () {
    it('Raises an error if the frame total will come to more than 10', function () {
      scorecard.roll(9)
      expect(function () {
        scorecard.roll(2)
      }).toThrow(new Error('Could not record roll. Frame total would be more than 10.'))
    })
  })
})
