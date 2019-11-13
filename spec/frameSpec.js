describe("Frame", ()=>{

  describe("#setScore", ()=>{
    var subject;

    it("set correct score", ()=>{
      subject = new Frame();
      subject.setScore(5);
      expect(subject.score[0]).toBe(5);
    });
  });

  describe("#updateFrameResult", ()=>{
    var subject;

    it("update latest result of the frame", ()=>{
      subject = new Frame();
      subject.score = [5];
      subject.updateFrameResult();
      expect(subject.result).toBe("normal");
      subject.score = [10];
      subject.currentRollNumber = 1;
      subject.updateFrameResult();
      expect(subject.result).toBe("strike");
      subject.score = [3,7];
      subject.currentRollNumber = 2;
      subject.updateFrameResult();
      expect(subject.result).toBe("spare");
    });
  });

  describe("#calculateTotalScore", ()=>{
    var subject;
    it("product total score without bonus", ()=>{
      subject = new Frame();
      subject.score = [2, 4];

      var result = subject.calculateTotalScore();
      expect(result).toBe(6);
    });
  });



});
