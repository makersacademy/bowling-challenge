const Frame = require('./Frame');
const BowlingScoreManager = require('./BowlingScoreManager');

describe( 'BowlingScoreManager', () => {
  it( 'Successfully scores a minimal game as zero', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0] )).toBe(0);
  });
  it('Successfully scores a minimal non-zero game', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [0,0, 1,1, 2,2, 3,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0])).toBe(0+0 + 1+1 + 2+2 + 3+3 + 4+4 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 );
  });
  it('Successfully scores a game including a spare', () => {
    const bsm = new BowlingScoreManager();    
    expect(bsm.score_game( [5,5, 3,1, 2,2, 3,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).toBe(5+5 + 3+1 + 2+2 + 3+3 + 4+4 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 + 3);
  });
  it( 'Successfully scores a game including two spares', () => {
    const bsm = new BowlingScoreManager();    
    expect(bsm.score_game( [5,5, 3,1, 2,2, 3,3, 6,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).toBe(5+5 + 3+1 + 2+2 + 3+3 + 6+4 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 + 3 + 4);
  });
  it( 'Successfully scores a game including multiple successive spares', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [5,2, 3,7, 2,8, 5,5, 6,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).toBe(5+2 + 3+7 + 2+8 + 5+5 + 6+4 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 + 2 + 5 + 6 + 4);
  });
  it( 'Successfully scores a game including a strike', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [0,0, 1,1, 10, 3,5, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).toBe(0+0 + 1+1 + 10 + 3+5 + 4+4 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 + 3 + 5);
  });
  it( 'Successfully scores a game including a strike followed immediately by a spare', () => {
    const bsm = new BowlingScoreManager();  
    expect(bsm.score_game( [0,0, 1,1, 10, 7,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).toBe(0+0 + 1+1 + 10 + 7+3 + 4+4 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 + 7 + 3 + 4);
  });
  it( 'Successfully scores a game including a spare followed immediately by a strike', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [0,0, 1,1, 4,6, 10, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).toBe(0+0 + 1+1 + 4+6 + 10 + 4+4 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 + 10 + 8);
  });
  it( 'Successfully scores a game including a strike followed immediately by another strike', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [0,0, 1,1, 5,3, 10, 10, 4,5, 4,3, 3,2, 2,1, 0,0] )).toBe(0+0 + 1+1 + 5+3 + 10 + 10 + 4+5 + 4+3 + 3+2 + 2+1 + 0+0 + 10 + 4 + 4 + 5);
  });
  it( 'Successfully scores a game including a strike followed immediately by another two strikes', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [0,0, 1,1, 5,3, 10, 10, 10, 4,3, 3,2, 2,1, 0,0] )).toBe(0+0 + 1+1 + 5+3 + 10 + 10 + 10 + 4+3 + 3+2 + 2+1 + 0+0 + 10 + 10 + 10 + 4 + 4 + 3);
  });
  it( 'Successfully scores final frame in case of maximum possible score', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10,10] )).toBe(300);
  });
  it( 'Successfully scores final frame in case of spare in final frame', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 3,7,2] )).toBe(1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 3+7+2); 
  });
  it( 'Successfully scores final frame when no third roll needed', () => {
    const bsm = new BowlingScoreManager();
    expect(bsm.score_game( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,2] )).toBe( 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+1 + 1+2); 
  });

});

/*
    it "Successfully scores final frame when no third roll needed" do
      expect(BowlingScoreManager.score_game( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,2] )).to eq ( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,2].sum) 
    end
  end
  it "Successfully scores final frame when no third roll needed but preceded by a spare" do
    expect(BowlingScoreManager.score_game( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 5,5, 1,2] )).to eq ( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 5,5, 1,2].sum + 1) 
  end
  it "Successfully scores final frame when no third roll needed but preceded by a strike" do
    expect(BowlingScoreManager.score_game( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 10, 1,2] )).to eq ( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 10, 1,2].sum + 1 + 2) 
  end
end

*/
