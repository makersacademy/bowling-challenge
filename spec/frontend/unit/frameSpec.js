describe('Frame', () => {
  let frame
  let i

  beforeEach(() => {
    frame = new Frame()
  })

  describe('#store', () => {
    it('stores the value of a roll', () => {
      frame.store(2)

      expect(frame.total()).toEqual(2)
    })

    it('records two rolls, and errors if called a third time', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2)
      }
      expect(()=> {
        frame.store(2)
      }).toThrowError('Two rolls already recorded')

      expect(frame.total()).toEqual(4)
    })

    describe('validating eligible rolls', ()=> {
      it('errors if the rolls total is greater than 10', ()=> {
        expect(()=> {
          frame.store(11)
        }).toThrowError('Total score for rolled balls cannot exceed 10')
        
        frame.store(6)
        expect(()=> {
          frame.store(6)
        }).toThrowError('Total score for rolled balls cannot exceed 10')
      })
    })
  })

  describe('#total', () => {
    it('returns the total of all rolls recorded in the frame', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2)
      }

      expect(frame.total()).toEqual(4)
    })
  })

  fdescribe('#isComplete', () => {
    it('returns true when two rolls have been recorded and no bonus is due', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2)
      }
      expect(frame.isComplete()).toEqual(true)
    })

    it('returns false when fewer than two rolls have been recorded', () => {
      expect(frame.isComplete()).toEqual(false)
      frame.store(2)
      expect(frame.isComplete()).toEqual(false)
    })

    it('returns false when two rolls have been recorded and a spare bonus is due', () => {
      for (i = 0; i < 2; i++) {
        frame.store(5)
      }
      expect(frame.isComplete()).toEqual(false)
    })

    it('returns true when two rolls and a spare bonus have been recorded', () => {
      for (i = 0; i < 3; i++) {
        frame.store(5)
      }
      expect(frame.isComplete()).toEqual(true)
    })


  })

  describe('#isFull', () => {
    it('returns true when two rolls have been recorded', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2)
      }
      expect(frame.isComplete()).toEqual(true)
    })

    it('returns false when fewer than two rolls have been recorded', () => {
      expect(frame.isComplete()).toEqual(false)
      frame.store(2)
      expect(frame.isComplete()).toEqual(false)
    })
  })
})