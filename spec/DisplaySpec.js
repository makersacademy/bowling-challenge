'use strict'

describe('Display:', function () {
  var display

  beforeEach(function () {
    display = new Display()
  })

  describe('new:', function () {
    it('_display is empty', function () {
      expect(display.currentDisplayElements()).toEqual([])
    })
  })

  describe('.toDisplay:', function () {
    it('calls .recordsATenthFrameStrike:', function () {
      var i
      for (i = 0; i < 10; i++) {
        display.toDisplay(10)
      }
      expect(display.currentDisplayElements()).toEqual(['', 'X', '', 'X', '', 'X', '', 'X', '', 'X', '', 'X', '', 'X', '', 'X', '', 'X', 'X'])
    })

    it('calls .recordsAStrike:', function () {
      display.toDisplay(10)
      expect(display.currentDisplayElements()).toEqual(['', 'X'])
    })

    it('calls .recordsASpare:', function () {
      display.toDisplay(5)
      display.toDisplay(5)
      expect(display.currentDisplayElements()).toEqual([5, '/'])
    })

    it('calls .recordsAMiss:', function () {
      display.toDisplay(0)
      expect(display.currentDisplayElements()).toEqual(['-'])
    })

    it('calls .recordsNumberOf(pinsKnockedDown):', function () {
      display.toDisplay(5)
      expect(display.currentDisplayElements()).toEqual([5])
    })
  })

  describe('.recordsAMiss:', function () {
    it('- is added to _display', function () {
      display.recordsAMiss()
      expect(display.currentDisplayElements()).toEqual(['-'])
    })
  })

  describe('.recordsASpare:', function () {
    it('/ is added to _display', function () {
      display.recordsASpare()
      expect(display.currentDisplayElements()).toEqual(['/'])
    })
  })

  describe('.recordsAStrike:', function () {
    it('blank and X are added to _display', function () {
      display.recordsAStrike()
      expect(display.currentDisplayElements()).toEqual(['', 'X'])
    })
  })

  describe('.recordsATenthFrameStrike:', function () {
    it('X is added to _display', function () {
      display.recordsATenthFrameStrike()
      expect(display.currentDisplayElements()).toEqual(['X'])
    })
  })

  describe('.recordsNumberOf(pinsKnockedDown):', function () {
    it('5 is added to _display', function () {
      display.recordsNumberOf(5)
      expect(display.currentDisplayElements()).toEqual([5])
    })
  })
})
