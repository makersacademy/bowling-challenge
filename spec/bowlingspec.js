describe('gameLogic', function(){

  beforeEach(function(){
    bowl = new Bowl()
    frame = new Frame()
  })

  describe('roll', function(){
    it('each roll gives an int between 0 and 10', function(){
      expect((bowl.roll())>=0 && (bowl.roll())<=10).toBeTruthy();
    });
  });

  describe('roll2', function(){
    it('gives an int between the range of remaining pins', function(){
      roll1 = bowl.roll()
      expect(bowl.roll2(roll1)>= 0 && bowl.roll2(roll1)<= (10 - roll1)).toBeTruthy();
    })
  })

  // describe('outcome saving', function(){
  //   it('saves the the rolls to an array', function(){
  //     spyOn(game, 'roll').and.returnValue(8);
  //     expect(frame.outcome).toContain(8);
  //   })
  // })
})
