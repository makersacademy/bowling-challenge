describe('User Stories:', function () {
  describe('So I know how many pins Ive knocked down in total', function (){
    it('I want a record of pins knocked down by each roll for each frame', function () {
      var bowling = new Bowling();
      expect(bowling.score([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).toEqual([2,2,2,2,2,2,2,2,2,2])
    })
  })
})
