describe('frames', function() {
  let frames
  let indivframe
  beforeEach(function() {
    indivframe = jasmine.createSpyObj('indivframe', ['allKnocked', 'add', 'isFull', 'rolls', 'reset'])
    frames = new Frames(indivframe)
  })
  describe('instantiation', function() {
    it('collection set to empty', function() {
      expect(frames.collection).toEqual([])
    })
    it('current frame is set to indivFrame', function() {
      expect(frames.currentFrame).toEqual(indivframe)
    })

    it('index is set to 0', function() {
      expect(frames.index).toEqual(1)
    })
  })

  describe('add', function() {
    it('calls add on currentFrame with arg', function() {
      frames.add(6)
      expect(indivframe.add).toHaveBeenCalledWith(6)
    })
  })

  describe('isEnd', function() {
    it('returns true if index is 11', function() {
      frames.index = 11
      expect(frames.isEnd()).toEqual(true)
    })

    it('returns false if index is 9', function() {
      frames.index = 9
      expect(frames.isEnd()).toEqual(false)
    })
  })

  describe('updates', function() {
    describe('if indivframe is full', function() {
      beforeEach(function() {
        indivframe.isFull.and.returnValue(true)
      })

      it('pushes currentFrame to collection', function() {
        indivframe.rolls = [4,5]
        frames.update()
        expect(frames.collection).toEqual([[4,5]])
      })

      it('calls reset on indivframe', function() {
        frames.update()
        expect(indivframe.reset).toHaveBeenCalled()
      })

      it('increases index to 2', function() {
        frames.update()
        expect(frames.index).toEqual(2)
      })
    })

    describe('endgame bonus', function() {
      it('returns false if rolls less than 3', function() {
        frames.index = 10
        indivframe.allKnocked.and.returnValue(true)
        indivframe.rolls = [10,5]
        expect(frames.update()).toEqual(false)
      })

      it('updates if rolls 3', function() {
        frames.index = 10
        indivframe.allKnocked.and.returnValue(true)
        indivframe.rolls = [10, 10, 10]
        indivframe.isFull.and.returnValue(true)
        frames.update()
        expect(frames.collection[9]).toEqual([10,10,10])
        expect(frames.index).toEqual(11)
      })
    })
  })


  describe('isEndBonus', function() {
    it('returns true if if last frame and spare or strike', function() {
      frames.index = 10
      indivframe.allKnocked.and.returnValue(true)
      expect(frames.isEndBonus()).toEqual(true)
    })
  })
})
