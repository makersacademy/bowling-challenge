describe("Count",function(){
  describe("Every count object has an array of frames.",function(){
    it("When a Counter object is made, it has an ampty array",function(){
      var count = new Count();
      expect(count.array).toEqual([]);
    });
    it("When a frame is added, it will be in count's array",function(){
      var frame ;
      var count = new Count();
      count.add(frame);
      expect(count.array).toContain(frame);
    });
  });
  describe("Every count has three methods for a score of a frame",function(){
    var count ;
    beforeEach(function(){
      count = new Count ;
    });
    it("The nomrmal score frame is the sum of first and second role",function(){
      var frame , first_role , second_role ;
      frame = {
        showFirst: function() {
        return(first_role);
        },
        showSecond: function(){
        return(second_role);
        }
      }
      expect(count.normal_score(frame)).toEqual(first_role +second_role);
    });
    it("If all the frames are normal, the score will be the sum.",function(){
      frame = new Frame(1,2);
      frame2 = new Frame(5,4);
      count.add(frame);
      count.add(frame2);
      expect(count.scoreCounting()).toEqual(12);
    });
    it("If there is a spare frame, the score counting will be ok.",function(){
      frame = new Frame(3,7);
      frame2 = new Frame(5,4);
      count.add(frame);
      count.add(frame2);
      expect(count.scoreCounting()).toEqual(24);
    });
    it("If there is a strike , the score counting will be ok.",function(){
      frame = new Frame(10,0);
      frame2 = new Frame(5,4);
      count.add(frame);
      count.add(frame2);
      expect(count.scoreCounting()).toEqual(28);
    });

    it("If there is two strike after each other, counting is ok",function(){
      frame = new Frame(10,0);
      frame2= new Frame(10,0);
      frame3 = new Frame(5,4);
      count.add(frame);
      count.add(frame2);
      count.add(frame3);
      expect(count.scoreCounting()).toEqual(53);
    });

    it("if there are three strikes after each other",function(){
      var frame = new Frame(10,0);
      var frame2 = new Frame(2,3);
      var i ;
      for(i=0; i<3;i++){ count.add(frame)}
      count.add(frame2);
      expect(count.scoreCounting()).toEqual(72);
    });
    it("if there is a strike after a spare",function(){
      var frame1 = new Frame(3,7);
      var frame2 = new Frame(10,0);
      var frame3 = new Frame(3,4);
      count.add(frame1);
      count.add(frame2);
      count.add(frame3);
      expect(count.scoreCounting()).toEqual(44);
    });
    it("if there is a spare after strike",function(){
      var frame1 = new Frame(10,0);
      var frame2 = new Frame(3,7);
      var frame3 = new Frame(4,3);
      count.add(frame1);
      count.add(frame2);
      count.add(frame3);
      expect(count.scoreCounting()).toEqual(41);
    });
  });
  describe("We will use the doubles to check the methods",function(){
    var count ;
    beforeEach(function(){
      count = new Count ;
    });
    it("a normal score of a frame can be calculated correctly",function(){
      var frame;
      frame={
        showFirst: function(){},
        showSecond: function(){}
      }
      spyOn(frame, 'showFirst').and.returnValue(3);
      spyOn(frame, 'showSecond').and.returnValue(5);
      count.add(frame);
      expect(count.normal_score(count.array[0])).toEqual(8);
    });
    it("if a frame is a spare, the first role of next round added",function(){
      frame1={
        showFirst: function(){},
        showSecond: function(){},
        _isSpare: function(){},
        _isStrike: function(){}
      }
      spyOn(frame1, 'showFirst').and.returnValue(2);
      spyOn(frame1, 'showSecond').and.returnValue(5);
      spyOn(frame1, '_isSpare').and.returnValue(true);
      spyOn(frame1, '_isStrike').and.returnValue(false);
      frame2={
        showFirst: function(){},
        showSecond: function(){},
        _isSpare: function(){},
        _isStrike: function(){},
      }
      spyOn(frame2, 'showFirst').and.returnValue(2);
      spyOn(frame2, 'showSecond').and.returnValue(5);
      spyOn(frame2, '_isSpare').and.returnValue(false);
      spyOn(frame2, '_isStrike').and.returnValue(false);
      count.add(frame1);
      count.add(frame2);
      expect(count.scoreCounting()).toEqual(16);
    });
    it("If a frame is a strike, the two next roles are added",function(){
      frame1={
        showFirst: function(){},
        showSecond: function(){},
        _isSpare: function(){},
        _isStrike: function(){}
      }
      spyOn(frame1, 'showFirst').and.returnValue(2);
      spyOn(frame1, 'showSecond').and.returnValue(5);
      spyOn(frame1, '_isSpare').and.returnValue(false);
      spyOn(frame1, '_isStrike').and.returnValue(true);
      frame2={
        showFirst: function(){},
        showSecond: function(){},
        _isSpare: function(){},
        _isStrike: function(){},
      }
      spyOn(frame2, 'showFirst').and.returnValue(2);
      spyOn(frame2, 'showSecond').and.returnValue(5);
      spyOn(frame2, '_isSpare').and.returnValue(false);
      spyOn(frame2, '_isStrike').and.returnValue(false);
      count.add(frame1);
      count.add(frame2);
      expect(count.scoreCounting()).toEqual(21);
    });


  });
});
