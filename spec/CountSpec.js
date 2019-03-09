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
      frame2 = new Frame(5,6);
      count.add(frame);
      count.add(frame2);
      expect(count.scoreCounting()).toEqual(14);

    });

  });
});
