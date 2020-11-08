describe('Frame', () => {

  var strike
  var spare
  var normal


  beforeEach(() => {
    strike = new Frame(10);
    spare = new Frame(7, 3);
    normal = new Frame(5, 2);
  });

  describe('applyBonus', () => {
    it('adds a strike bonus to the frame if the frame was a strike', () => {
      strike.applyBonus()
      expect(strike.frame['Bonus']).toEqual('strike')
    }); 

    it('adds a spare bonus to the frame if the frame was a spare', () => {
      spare.applyBonus()
      expect(spare.frame['Bonus']).toEqual('spare')
    });

    it('does not add any bonus if the frame was not a strike or a spare', () => {
      normal.applyBonus()
      expect(normal.frame['Bonus']).toBeUndefined()
    });
    
  });

})