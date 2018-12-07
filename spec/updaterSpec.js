var Updater = require('../src/updater.js');
var Frame = require('../src/frame.js');
var TenthFrame = require('../src/tenthFrame.js');

describe("Updater", function() {

    beforeEach(function() {
      updater = new Updater();
      frames = [];
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(){
          frames.push(new Frame());
      });
          frames.push(new TenthFrame());
    });

    it("is an instance of Game", function() {
      expect(updater).toEqual(jasmine.any(Updater));
    });

    it("can calculate regular rolls", function() {
        setFrameScore(2, 4, 0);
        setFrameScore(3, 6, 1);
        setFrameScore(3, 4, 2);
        setFrameScore(3, 2, 3);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(6);
        expect(frames[1].getFinalFrameScore()).toBe(9);
        expect(frames[2].getFinalFrameScore()).toBe(7);
        expect(frames[3].getFinalFrameScore()).toBe(5);
    });


    it("can calculate a strike followed by a roll", function() {
        setFrameScore(10, 0, 0);
        setFrameScore(3, 6, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(19);
    });

    it("can calculate a spare followed by a regular roll", function() {
        setFrameScore(3, 7, 0);
        setFrameScore(4, 6, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(14);
    });

    it("can calculate a spare followed by a strike", function() {
        setFrameScore(3, 7, 0);
        setFrameScore(10,0, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(20);
    });

    it("calculate a strike followed by a strike", function(){
        setFrameScore(10, 0, 0);
        setFrameScore(10, 0, 1);
        setFrameScore(2, 3, 2);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(22);
    });

    it("Can calcalculate a stike in the tenth round", function(){
        setFirstNineRounds();
        setTenthRound(10, 7, 3);
        updater.update(frames);
        expect(frames[9].getFinalFrameScore()).toBe(20);
    });

    it("Can calcalculate a spare in the tenth round", function(){
        setFirstNineRounds();
        setTenthRound(5, 5, 4);
        updater.update(frames);
        expect(frames[9].getFinalFrameScore()).toBe(14);
    });


    it("Can calcalculate a spare in the tenth round", function(){
        setFirstNineRounds();
        setTenthRound(5, 5, 4);
        updater.update(frames);
        expect(frames[9].getFinalFrameScore()).toBe(14);
    });

    it("Can calculate the final score in ninth frame spare", function(){
        setFirstNineRounds();
        setFrameScore(2, 8, 8);
        setTenthRound( 5, 3, 2);
        updater.update(frames);
        expect(frames[8].getFinalFrameScore()).toBe(15);
    });

    it("Can calculate the final score in ninth frame strike", function(){
        setFirstNineRounds();
        setFrameScore(10, 0, 8);
        setTenthRound( 5, 3, 0);
        updater.update(frames);
        expect(frames[8].getFinalFrameScore()).toBe(18);
    });

    function setFirstNineRounds() {
        setFrameScore(10, 0, 0);
        setFrameScore(10, 0, 1);
        setFrameScore(2, 3, 2);
        setFrameScore(10, 0, 3);
        setFrameScore(10, 0, 4);
        setFrameScore(2, 3, 5);
        setFrameScore(10, 0, 6);
        setFrameScore(10, 0, 7);
        setFrameScore(2, 3, 8);
    }

    function setTenthRound(first, second, bonus) {
        frames[9].setFirstScore(first);
        frames[9].setSecondScore(second);
        frames[9].setBonusScore(bonus);
    }


    function setFrameScore(first, second = false, index){
        if (first < 10) {
            frames[index].setFirstScore(first);
            frames[index].setSecondScore(second);
        } else {
            frames[index].setFirstScore(first);
        }
    }
});

