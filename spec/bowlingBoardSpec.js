describe("BowlingBoard", ()=>{

  describe("#whichFrameAndRoll", ()=>{
    var doubleFrame, subject, txt;

    it("display correct title for final frame roll #1", ()=>{
      doubleFrame = {
        score: [],
        result: "normal"
      }

      subject = new BowlingBoard();
      for(var i = 0; i < 20; i++){
        subject.frameList.push(doubleFrame);
      }
      subject.currentFrame = subject.frameList[19];
      txt = subject.whichFrameAndRoll();
      expect(txt).toBe("Frame #20 Roll #1");
    });

    it("display correct title for final frame with strike", ()=>{
      doubleFrame = {
        score: [10],
        result: "strike"
      }

      subject = new BowlingBoard();
      for(var i = 0; i < 20; i++){
        subject.frameList.push(doubleFrame);
      }
      subject.currentFrame = subject.frameList[19];
      txt = subject.whichFrameAndRoll();
      expect(txt).toBe("Frame #20 Bonus roll #1");
    });

    it("display correct title for final frame with spare", ()=>{
      doubleFrame = {
        score: [5,5],
        result: "spare"
      }

      subject = new BowlingBoard();
      for(var i = 0; i < 20; i++){
        subject.frameList.push(doubleFrame);
      }
      subject.currentFrame = subject.frameList[19];
      txt = subject.whichFrameAndRoll();
      expect(txt).toBe("Frame #20 Bonus roll #1");
    });
  });

  describe("#updateBonus", ()=>{
    var doubleFrame, subject;

    it("scenario #1 no bonus", ()=>{
      doubleFrame = {
        score: [2,3],
        result: "normal",
        setBonus: ()=>{}
      }

      spyOn(doubleFrame, "setBonus");

      subject = new BowlingBoard();
      subject.frameList.push(doubleFrame);
      subject.frameList.push(doubleFrame);
      subject.updateBonus();
      expect(subject.frameList[0].setBonus).not.toHaveBeenCalled();
    });

    it("scenario #2 strike", ()=>{
      doubleFrame = {
        score: [10],
        result: "strike",
        setBonus: ()=>{}
      }

      doubleFrame_2 = {
        score: [2,3],
        result: "normal"
      }

      spyOn(doubleFrame, "setBonus");

      subject = new BowlingBoard();
      subject.frameList.push(doubleFrame);
      subject.frameList.push(doubleFrame_2);
      subject.updateBonus();
      expect(subject.frameList[0].setBonus).toHaveBeenCalledWith(2);
      expect(subject.frameList[0].setBonus).toHaveBeenCalledWith(3);
      expect(subject.frameList[0].setBonus.calls.count()).toEqual(2);
    });

    it("scenario #3 spare", ()=>{
      doubleFrame = {
        score: [2,8],
        result: "spare",
        setBonus: ()=>{}
      }

      doubleFrame_2 = {
        score: [2,3],
        result: "normal"
      }

      spyOn(doubleFrame, "setBonus");

      subject = new BowlingBoard();
      subject.frameList.push(doubleFrame);
      subject.frameList.push(doubleFrame_2);
      subject.updateBonus();
      expect(subject.frameList[0].setBonus).toHaveBeenCalledWith(2);
      expect(subject.frameList[0].setBonus.calls.count()).toEqual(1);
    });

    it("scenario #4 consecutive strike", ()=>{
      doubleFrame = {
        score: [10],
        result: "strike",
        setBonus: ()=>{}
      }

      doubleFrame_1 = {
        score: [10],
        result: "strike",
        setBonus: ()=>{}
      }

      doubleFrame_2 = {
        score: [2,3],
        result: "normal"
      }

      doubleFrame_3 = {
        score: [2,3],
        result: "normal"
      }

      spyOn(doubleFrame, "setBonus");

      subject = new BowlingBoard();
      subject.frameList.push(doubleFrame);
      subject.frameList.push(doubleFrame_1);
      subject.frameList.push(doubleFrame_2);
      subject.frameList.push(doubleFrame_3);
      subject.updateBonus();
      expect(subject.frameList[0].setBonus).toHaveBeenCalledWith(10);
      expect(subject.frameList[0].setBonus).toHaveBeenCalledWith(2);
      expect(subject.frameList[0].setBonus.calls.count()).toEqual(2);
    });
  });

});
