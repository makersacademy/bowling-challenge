describe("Bowl", function () {

  var bowl;

  beforeEach(function(){
    bowl = new Bowl();
  })

  describe('throw', function(){
    it('should return a value between 1 and 10', function(){
      expect(bowl.throw(11)).toEqual(6);
    });
  });
})
