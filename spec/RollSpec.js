'use strict';

describe('Roll', function(){
  var roll;

  beforeEach(function(){
    roll = new Roll();
  });

  it('targets 10 pins by default', function(){
    expect(roll.pinNumber()).toEqual(10);
  });

  describe('roll number', function(){

    it('roll number set at 1 by default', function(){
      expect(roll.rollNumber()).toEqual(1);
    });

    it('roll number set at 2 after first roll if some pins remain', function(){
      spyOn(Math,'random').and.returnValue(0.004);
      roll.knockedDownPins();
      expect(roll.rollNumber()).toEqual(2);
    });

    it('roll number remains at 1 if no pin remains', function(){
      spyOn(Math,'random').and.returnValue(0.70);
      roll.knockedDownPins();
      expect(roll.rollNumber()).toEqual(1);
    });

    it('roll number reset at 1 after second roll', function(){
      spyOn(Math,'random').and.returnValue(0.50);
      roll.knockedDownPins();
      spyOn(roll, 'secondRollRandomizer').and.returnValue(2)
      roll.knockedDownPins();
      expect(roll.rollNumber()).toEqual(1);
    });

  });

  describe('when a professional is playing first roll', function(){

    it('can have 1 pin knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.004);
      expect(roll.knockedDownPins()).toEqual(1);
    });

    it('can have 2 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.006);
      expect(roll.knockedDownPins()).toEqual(2);
    });

    it('can have 3 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.015);
      expect(roll.knockedDownPins()).toEqual(3);
    });

    it('can have 4 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.025);
      expect(roll.knockedDownPins()).toEqual(4);
    });

    it('can have 5 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.04);
      expect(roll.knockedDownPins()).toEqual(5);
    });

    it('can have 6 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.07);
      expect(roll.knockedDownPins()).toEqual(6);
    });

    it('can have 7 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.12);
      expect(roll.knockedDownPins()).toEqual(7);
    });

    it('can have 8 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.3);
      expect(roll.knockedDownPins()).toEqual(8);
    });

    it('can have 9 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.5);
      expect(roll.knockedDownPins()).toEqual(9);
    });

    it('can have 10 pins knocked down', function(){
      spyOn(Math,'random').and.returnValue(0.75);
      expect(roll.knockedDownPins()).toEqual(10);
    });
  });

  describe('after knocking down 7 pins in first roll', function(){

    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0.13)
      roll.knockedDownPins();
    });

    it('can knock down 2 additional pins in second roll', function(){
      spyOn(roll, 'secondRollRandomizer').and.returnValue(2)
      expect(roll.knockedDownPins()).toEqual(2);
    });

    it('can knock down 3 additional pins in second roll', function(){
      spyOn(roll, 'secondRollRandomizer').and.returnValue(3)
      expect(roll.knockedDownPins()).toEqual(3);
    });

  });
});
