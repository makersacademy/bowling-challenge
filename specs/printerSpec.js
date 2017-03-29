'use strict';

describe('Printer', function() {
  var printer;

  beforeEach(function() {
    printer = new Printer();
  });

  describe('.printFrameBalls',function(){

    describe('frames 1 to 9', function(){

      describe('one ball thrown', function(){

        it("returns 'X' when a strike", function(){
          var balls = [10];
          expect(printer.printFrameBalls(balls, 1)).toEqual("X");
        });

        it("returns the score when not a strike", function(){
          var balls = [5];
          expect(printer.printFrameBalls(balls, 1)).toEqual("5");
        });

      });

      describe('two balls thrown', function(){

        it("returns 'X' when a strike", function(){
          var balls = [10];
          expect(printer.printFrameBalls(balls, 1)).toEqual("X");
        });

        it("returns '5|/' when a spare", function(){
          var balls = [5,5];
          expect(printer.printFrameBalls(balls, 1)).toEqual("5|/");
        });

        it("returns scores when not a strike or a spare", function(){
          var balls = [5,4];
          expect(printer.printFrameBalls(balls, 1)).toEqual("5|4");
        });

      });

    });

    describe('frame 10', function(){

      describe('one ball thrown', function(){

        it("returns 'X' when first ball is a strike", function(){
          var balls = [10];
          expect(printer.printFrameBalls(balls, 10)).toEqual("X");
        });

        it("returns the score when first ball is not a strike", function(){
          var balls = [5];
          expect(printer.printFrameBalls(balls, 10)).toEqual("5");
        });

      });
      describe('two balls thrown', function(){

        it("returns 'X|X' when first two balls are both a strike", function(){
          var balls = [10,10];
          expect(printer.printFrameBalls(balls, 10)).toEqual("X|X");
        });

        it("returns '5|/' when first two balls are a spare", function(){
          var balls = [5,5];
          expect(printer.printFrameBalls(balls, 10)).toEqual("5|/");
        });

        it("returns the scores when the first two balls are not a strike and not a spare", function(){
          var balls = [3,2];
          expect(printer.printFrameBalls(balls, 10)).toEqual("3|2");
        });

      });

      describe('three balls thrown', function(){

        it("returns 'X|X|X' when all three balls are a strike", function(){
          var balls = [10,10,10];
          expect(printer.printFrameBalls(balls, 10)).toEqual("X|X|X");
        });

        it("returns 'X|X|5' when first two balls are a strike but not the third", function(){
          var balls = [10,10,5];
          expect(printer.printFrameBalls(balls, 10)).toEqual("X|X|5");
        });

        it("returns '5|/|X' when a spare then a strike", function(){
          var balls = [5,5,10];
          expect(printer.printFrameBalls(balls, 10)).toEqual("5|/|X");
        });

        it("returns '5|/|5' when a spare then not a strike", function(){
          var balls = [5,5,5];
          expect(printer.printFrameBalls(balls, 10)).toEqual("5|/|5");
        });

      });

    });

  });
  
});
