describe('ScoreSheet', function(){
  var scoreSheet;

  beforeEach(function() {
    scoreSheet = new ScoreSheet();
  });

  it('should add an entry to the score sheet', function() {
    scoreSheet.update(1,1,10,10);
    expect(scoreSheet.lastEntry().frame).toEqual(1);
    expect(scoreSheet.lastEntry().roll).toEqual(1);
    expect(scoreSheet.lastEntry().pinsDown).toEqual(10);
    expect(scoreSheet.lastEntry().score).toEqual(10);
  });

  it('should erase the contents of the score sheet', function() {
    scoreSheet.update(1,1,10,10);
    expect(scoreSheet._sheet.length).toEqual(1);
    scoreSheet.erase();
    expect(scoreSheet._sheet.length).toEqual(0);
  });
});