describe('Calculator', function(){

  beforeEach(function(){
    calculator = new Calculator
  });

  describe('calculator functionality', function(){
    it('has a score of zero to start with', function(){
      expect(calculator.score).toEqual(0)
    });
  });

});
