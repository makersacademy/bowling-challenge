'use strict'

describe('LastFrame', function () {
  let lastFrame

  beforeEach(function () {
    lastFrame = new LastFrame()
  })

  describe('isCompleted', function () {
    it('is completed after 2 shots if no spare or strike are done', function () {
      lastFrame.addShot(2)
      lastFrame.addShot(7)
      expect(lastFrame.isCompleted()).toEqual(true)
    })

    it('is not completed after 2 shots if a spare is done', function () {
      lastFrame.addShot(2)
      lastFrame.addShot(8)
      expect(lastFrame.isCompleted()).toEqual(false)
    })

    it('is not completed after 2 shot if the first one is a strike', function () {
      lastFrame.addShot(10)
      lastFrame.addShot(2)
      expect(lastFrame.isCompleted()).toEqual(false)
    })

    it('is completed after after 3 shot if a spare is done', function () {
      lastFrame.addShot(2)
      lastFrame.addShot(8)
      lastFrame.addShot(10)
      expect(lastFrame.isCompleted()).toEqual(true)
    })
  })

  describe('addShot', function () {
    it('throw an error if trying to add a third shot', function () {
      lastFrame.addShot(2)
      lastFrame.addShot(4)
      expect( function () { lastFrame.addShot(4) }).toThrowError(Error, 'This frame is already complete!')
    })

    it('let you add a third shot if a strike is done on the first shot', function () {
      lastFrame.addShot(10)
      lastFrame.addShot(5)
      lastFrame.addShot(6)
      expect(lastFrame.total()).toEqual(21)
    })

    it('throw an error if trying to add a fourth shot after a initial strike', function () {
      lastFrame.addShot(10)
      lastFrame.addShot(5)
      lastFrame.addShot(7)
      expect( function () { lastFrame.addShot(8) }).toThrowError(Error, 'This frame is already complete!')
    })

    it('let you add a third shot if a spare is done within the first two shots', function () {
      lastFrame.addShot(5)
      lastFrame.addShot(5)
      lastFrame.addShot(7)
      expect(lastFrame.total()).toEqual(17)
    })

    it('throw an error if trying to add a fourth shot after a spare within the first two shots', function () {
      lastFrame.addShot(5)
      lastFrame.addShot(5)
      lastFrame.addShot(7)
      expect( function () { lastFrame.addShot(6) }).toThrowError(Error, 'This frame is already complete!')
    })

    it('throw an error if trying to add a fourth shot after three strikes', function () {
      lastFrame.addShot(10)
      lastFrame.addShot(10)
      lastFrame.addShot(10)
      expect(lastFrame.total()).toEqual(30)
      expect( function () { lastFrame.addShot(10) }).toThrowError(Error, 'This frame is already complete!')
    })

    describe('errors', function () {
      it('throw an error if trying to add more than 10 pins to a shot', function () {
        expect( function () { lastFrame.addShot(11) }).toThrowError(Error, "You can't hit more than 10 pins!")
      })

      it('throw an error if trying to add more than 10 pins between the first two normal shots', function () {
        lastFrame.addShot(6)
        expect( function () { lastFrame.addShot(6) }).toThrowError(Error, "You can't hit more than 10 pins!")
      })

      it('throw an error if trying to add more than 10 pins on your second shot after a strike', function () {
        lastFrame.addShot(10)
        expect( function () { lastFrame.addShot(11) }).toThrowError(Error, "You can't hit more than 10 pins!")
      })

      it('throw an error if trying to add more than 10 pins on your third shot after a strike', function () {
        lastFrame.addShot(10)
        lastFrame.addShot(3)
        expect( function () { lastFrame.addShot(11) }).toThrowError(Error, "You can't hit more than 10 pins!")
      })
    })
  })
})
