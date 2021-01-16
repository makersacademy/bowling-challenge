describe('User Stories:', function () {
  var bowling;

  beforeEach( function() {
    bowling = new Bowling();
  })

  describe('So I know how many pins Ive knocked down in total', function (){
    it('I want a record of cumulative score by frame', function () {
      var bowling = new Bowling();
      expect(bowling.score([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).toEqual([2,4,6,8,10,12,14,16,18,20])
    })
  })

  // describe('So I can receive a bonus for rolling a spare', function (){
  //   it('I want the total of the next roll to be added to my frame score', function () {
  //
  //   })
  // })
})
