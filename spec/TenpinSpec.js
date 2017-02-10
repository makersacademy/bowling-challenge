describe('TenPin', function(){
 var tenpin;
 tenpin = new TenPin();

  it ("should keep track of all the throws in an array", function(){
    expect(tenpin.scoreHistory).toBeDefined();
    tenpin.throw(0);
    tenpin.throw(8);
    expect(tenpin.scoreHistory.length).toBe(1)
  });
  it ("should be able to receive a throw",function(){
    expect(tenpin.throw).toBeDefined();
  });

  it ("a throw of 10 should move the game to the next round", function(){
    tenpin.reset();
    tenpin.throw(10);
    expect(tenpin.scoreHistory.length).toBe(1);
  });

  it ("should have a score that keeps track of the score", function(){
    tenpin.reset();
    tenpin.throw(6);
    tenpin.throw(3);
    tenpin.throw(2);
    tenpin.throw(5);
    tenpin.count();
    expect(tenpin.score).toBe(16);
  });
  it ("should have a reset function", function(){
    tenpin.reset();
    expect(tenpin.score).toBe(0);
    expect(tenpin.bonus).toBe(0);
    expect(tenpin.scoreHistory.length).toBe(0);
    expect(tenpin.frameArray.length).toBe(0);
  });

  it ("should count the correct score without bonus", function(){
    tenpin.reset();
    tenpin.scoreHistory = [[0,5],[6,3],[4,4],[8,1],[3,6],[2,1],[4,3],[2,2],[1,1],[8,0]];
    tenpin.count();
    expect(tenpin.score).toBe(64);
  });
  it ("should count the correct score with Spares", function(){
    tenpin.reset();
    tenpin.scoreHistory = [[5,5],[6,3],[4,4],[8,1],[3,6],[2,1],[4,3],[2,2],[1,1],[8,1]];
    tenpin.count();
    expect(tenpin.score).toBe(76);
  });
  it ("should count the correct score with a 0 10 Spare", function(){
    tenpin.reset();
    tenpin.scoreHistory = [[0,10],[6,3],[4,4],[8,1],[3,6],[2,1],[4,3],[2,2],[1,1],[8,1]];
    tenpin.count();
    expect(tenpin.score).toBe(76);
    expect(tenpin.bonus).toBe(6);
  });
  it ("should count the correct score with a Strike", function(){
    tenpin.reset();
    tenpin.scoreHistory = [[0,10],[10,0],[4,4],[4,1],[3,6],[2,1],[4,3],[2,2],[1,1],[8,0]];
    tenpin.count();
    expect(tenpin.score).toBe(84);
  });

  it ("should count the correct score with many Strikes", function(){
    tenpin.reset();
    tenpin.scoreHistory = [[0,10],[10,0],[10,0],[4,4],[1,3],[6,2],[1,4],[10,0],[10,0],[8,1]];
    tenpin.count();
    expect(tenpin.score).toBe(143);
  });
  it ("should count the correct score with many Spares and Strikes", function(){
    tenpin.reset();
    tenpin.scoreHistory = [[0,10],[5,5],[10,0],[4,6],[1,3],[6,2],[1,4],[10,0],[10,0],[8,1]];
    tenpin.count();
    expect(tenpin.score).toBe(139);
  });
  it ("should count the correct score with many Spares and Strikes", function(){
    tenpin.reset();
    tenpin.scoreHistory = [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8],[6,0]];
    tenpin.count();
    expect(tenpin.score).toBe(133);
  });

});
