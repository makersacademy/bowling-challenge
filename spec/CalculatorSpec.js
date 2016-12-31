'use strict';

describe ('Calculator', function(){

  var calculator;

  beforeEach(function(){
    calculator = new Calculator;
  });

  describe ('functions for sum', function(){

      it ('should sum an array', function(){
        var array = [1,1]
        expect( calculator.sum(array) ).toEqual( 2 );
      });

      it ('should sum an array', function(){
        var array = [[1,1],[1,1]]
        expect( calculator.sum(array) ).toEqual( 4 );
      });
      
  });

});
