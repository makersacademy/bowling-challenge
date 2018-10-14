describe ("Frame", function(){
  var frame
  
  beforeEach(function(){
    frame = new Frame();
  })

   describe ('calculate', function(){

     it("adds only the user's roll score to the total score of that frame, if bonus counter is equal to 0 equal to false", function(){
       frame.calculate(5)
       expect(frame.frameScore).toEqual(5)
     })

     it("calls descreaseRoll to descrease the amount of rolls left", function(){
       frame.calculate(5)
       expect(frame._rollsLeft).toEqual(1)
     })

    it("changes isStrike to true if userinput equals 10", function(){
      frame.calculate(10)
      expect(frame.isStrike).toEqual(true)
    })

    it("doubles the current score if bonusCounter is not 0", function(){
      spyOn(frame, "_bonusCounter").and.returnValue(2);
      frame.calculate(2)
      expect(frame.frameScore).toEqual(4)
    })

    it("changes isSpare to true if no rolls left and frameTotal is 10", function(){
      frame.calculate(2);
      frame.calculate(8);
      expect(frame.isSpare).toEqual(true)
    })

   })

   describe ("decreaseRoll", function(){
     it("decreases the rolls left by one", function(){
       frame._decreaseRoll()
       expect(frame._rollsLeft).toEqual(1)
     })
   })

});
