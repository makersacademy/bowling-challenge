'use strict';

describe('A full game of bowling', function () {

  var bowling

  beforeEach(function() {
    bowling = new Bowling("Suzanne");
  });

  it("starts with a total score of 0", function() {
    expect(bowling.totalScore).toEqual(0);
  });

  describe('1st roll, 1st frame', function(){
    it("hits 1 pin", function() {
      bowling.knockedDown(1);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(1);
      expect(bowling.totalScore).toEqual(1);
    });
  });

  describe('2nd roll, 1st frame', function(){
    it("hits 4 pins", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(4);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(5);
      expect(bowling.totalScore).toEqual(5);
    });
  });

  describe('1st roll, 2nd frame', function(){
    it("hits 4 pins", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(4);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.totalScore).toEqual(9);
    });
  });

  describe('2nd roll, 2nd frame', function(){
    it("hits 5 pins", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(5);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(14);
      expect(bowling.totalScore).toEqual(14);
    });
  });

  describe('1st roll, 3rd frame', function(){
    it("hits 6 pins", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(6);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.totalScore).toEqual(20);
    });
  });

  describe('2nd roll, 3rd frame', function(){
    it("hits 4 pins and gets a spare", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(4);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["notes"]).toEqual("Spare");
      expect(bowling.totalScore).toEqual(24);
    });
  });

  describe('1st roll, 4th frame', function(){
    it("hits 5 pins and calculates bonus from previous spare", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(5);
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["score"]).toEqual(29);
      var note = `Spare: 10 pins plus bonus of 5 from next roll (roll 1 frame 4)`;
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["notes"]).toEqual(note);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.totalScore).toEqual(34);
    });
  });

  describe('2nd roll, 4th frame', function(){
    it("hits 5 pins and gets another spare", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(5);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["notes"]).toEqual("Spare");
      expect(bowling.totalScore).toEqual(39);
    });
  });

  describe('1st roll, 5th frame', function(){
    it("hits 10 pins, gets a strike, calculates bonus from previous spare, and skips 2nd roll", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      expect(bowling.scoreSheet[bowling._currentIndex]["frame"]).toEqual(6);
      expect(bowling.scoreSheet[bowling._currentIndex]["roll"]).toEqual(1);
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["pins"]).toEqual(10);
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["notes"]).toEqual("Strike");
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["score"]).toEqual(49);
      var note = `Spare: 10 pins plus bonus of 10 from next roll (roll 1 frame 5)`;
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["notes"]).toEqual(note);
      expect(bowling.totalScore).toEqual(59);
    });
  });

  describe('2nd roll, 5th frame', function(){
    it("has been skipped due to previous strike", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(59);
    });
  });

  describe('1st roll, 6th frame', function(){
    it("hits 0 pins", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(0);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["notes"]).toEqual("Bad luck");
    });
  });

  describe('2nd roll, 6th frame', function(){
    it("hits 1 pin and calculates bonus from previous strike", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["score"]).toEqual(60);
      var note = "Strike: 10 pins plus bonus of 1 from next frame (rolls 1 and 2 from frame 6)"
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["notes"]).toEqual(note);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(1);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(61);
      expect(bowling.totalScore).toEqual(61);
    });
  });

  describe('1st roll, 7th frame', function(){
    it("hits 10 pins, gets a strike and skips to next frame", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["notes"]).toEqual("Strike");
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["pins"]).toEqual(10);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(71);
      expect(bowling.totalScore).toEqual(71);
    });
  });

  describe('2nd roll, 7th frame', function(){
    it("has been skipped due to previous strike", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(71);
    });
  });

  describe('1st roll, 8th frame', function(){
    it("hits 10 pins, gets another strike and calculates bonus to previous strike", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      bowling.knockedDown(10);
      var note = "Strike: 10 pins plus bonus of 10 from next frame (rolls 1 and 2 from frame 8)"
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["notes"]).toEqual(note)
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["pins"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["score"]).toEqual(81);
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["pins"]).toEqual(10);
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["notes"]).toEqual("Strike");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(91);
      expect(bowling._currentScore()).toEqual("");
      expect(bowling.totalScore).toEqual(91);
    });
  });

  describe('2nd roll, 8th frame', function(){
    it("has been skipped due to previous strike", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      bowling.knockedDown(10);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual(91);
    });
  });

  describe('1st roll, 9th frame', function(){
    it("hits 8 pins", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      bowling.knockedDown(10);
      bowling.knockedDown(8);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(8);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["notes"]).toEqual("");
      expect(bowling.totalScore).toEqual(99);
    });
  });

  describe('2nd roll, 9th frame', function(){
    it("hits 2 pins, gets a spare, and calculates bonus for previous strike", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      bowling.knockedDown(10);
      bowling.knockedDown(8);
      bowling.knockedDown(2);
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["score"]).toEqual(101);
      var note = "Strike: 10 pins plus bonus of 10 from next frame (rolls 1 and 2 from frame 9)"
      expect(bowling.scoreSheet[bowling._currentIndex - 3]["notes"]).toEqual(note);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(2);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["notes"]).toEqual("Spare");
      expect(bowling.totalScore).toEqual(111);
    });
  });

  describe('1st roll, 10th frame', function(){
    it("hits 3 pins and calculates bonus for previous spare", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      bowling.knockedDown(10);
      bowling.knockedDown(8);
      bowling.knockedDown(2);
      bowling.knockedDown(3);
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["score"]).toEqual(114);
      var note = "Spare: 10 pins plus bonus of 3 from next roll (roll 1 frame 10)"
      expect(bowling.scoreSheet[bowling._currentIndex - 2]["notes"]).toEqual(note);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["pins"]).toEqual(3);
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["score"]).toEqual("");
      expect(bowling.scoreSheet[bowling._currentIndex - 1]["notes"]).toEqual("");
      expect(bowling.totalScore).toEqual(117);
    });
  });

  describe('2nd roll, 10th frame', function(){
    it("hits 4 pins and the game ends with a 121 total score", function() {
      bowling.knockedDown(1);
      bowling.knockedDown(4);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(6);
      bowling.knockedDown(4);
      bowling.knockedDown(5);
      bowling.knockedDown(5);
      bowling.knockedDown(10);
      bowling.knockedDown(0);
      bowling.knockedDown(1);
      bowling.knockedDown(10);
      bowling.knockedDown(10);
      bowling.knockedDown(8);
      bowling.knockedDown(2);
      bowling.knockedDown(3);
      bowling.knockedDown(4);
      expect(bowling.scoreSheet[bowling._currentIndex]["pins"]).toEqual(4);
      expect(bowling.scoreSheet[bowling._currentIndex]["score"]).toEqual(121);
      expect(bowling.scoreSheet[bowling._currentIndex]["notes"]).toEqual("");
      expect(bowling.totalScore).toEqual(121);
      expect(bowling.scoreSheet.length).toEqual(20);
    });
  });
});
