describe("ROLL", function() {
  describe("Record roll score", function() {
    let roll5 = new Roll();
    roll5.enterRoll(5);

    let roll10 = new Roll();
    roll10.enterRoll(10);

    let roll0 = new Roll();
    roll0.enterRoll(0);

    it("should record the number of roll as a rollscore", function() {
      expect(roll5.score).toEqual(5);
      expect(roll10.score).toEqual(10);
    });

    it("should return the rollscore", function() {
      expect(roll5.returnScore()).toEqual(5);
      expect(roll10.returnScore()).toEqual(10);
    });

    describe("Special scores", function() {
      it("should record strike as a note", function() {
        expect(roll10.notes).toEqual("Strike");
      });

      it("should 0 score as a note", function() {
        expect(roll0.notes).toEqual("Unlucky");
      });
    });

    describe("Accessing score", function() {
      it("should return", function() {
        expect(roll5.returnScore()).toEqual(roll5.score);
      });
    } )
  });

  // describe("Track roll within frame", function() {
  //   frame = new Frame
  //   spyOn(frame, '').and.returnValue(true)
  //   it('should return roll number', function() {
  //     expect(roll5.number).toEqual(1)
  //   })
  // })
});
