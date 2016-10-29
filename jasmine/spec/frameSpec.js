describe("Frame", function(){

  describe('Score options', function(){

    it("calculates a total for normal frame", function(){
      var frame = new Frame([1,1]);
      expect(frame.total()).toEqual(2);
    })

  })

});
