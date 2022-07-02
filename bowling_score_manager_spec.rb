require 'bowling_score_manager'

RSpec.describe BowlingScoreManager do
  context "Simple tests without strike or spare" do
    it "Successfully scores a minimal game as zero" do
      expect(BowlingScoreManager.score_game( [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0] )).to eq 0
    end
    it "Successfully scores a minimal non-zero game" do
      expect(BowlingScoreManager.score_game( [0,0, 1,1, 2,2, 3,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([0,0, 1,1, 2,2, 3,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0].sum)
    end
    it "Successfully scores a game including a spare" do
      expect(BowlingScoreManager.score_game( [5,5, 3,1, 2,2, 3,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([5,5, 3,1, 2,2, 3,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0].sum + 3)
    end
    it "Successfully scores a game including two spares" do
      expect(BowlingScoreManager.score_game( [5,5, 3,1, 2,2, 3,3, 6,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([5,5, 3,1, 2,2, 3,3, 6,4, 4,5, 4,3, 3,2, 2,1, 0,0].sum + 3 + 4)
    end
    it "Successfully scores a game including multiple successive spares" do
      expect(BowlingScoreManager.score_game( [5,2, 3,7, 2,8, 5,5, 6,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([5,2, 3,7, 2,8, 5,5, 6,4, 4,5, 4,3, 3,2, 2,1, 0,0].sum + 2 + 5 + 6 + 4)
    end
    it "Successfully scores a game including a strike" do
      expect(BowlingScoreManager.score_game( [0,0, 1,1, 10, 3,5, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([0,0, 1,1, 10, 3,5, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0].sum + 3 + 5)
    end
    it "Successfully scores a game including a strike followed immediately by a spare" do
      expect(BowlingScoreManager.score_game( [0,0, 1,1, 10, 7,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([0,0, 1,1, 10, 7,3, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0].sum + 7 + 3 + 4)
    end
    it "Successfully scores a game including a spare followed immediately by a strike" do
      expect(BowlingScoreManager.score_game( [0,0, 1,1, 4,6, 10, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([0,0, 1,1, 4,6, 10, 4,4, 4,5, 4,3, 3,2, 2,1, 0,0].sum + 10 + 8)
    end
    it "Successfully scores a game including a strike followed immediately by another strike" do
      expect(BowlingScoreManager.score_game( [0,0, 1,1, 5,3, 10, 10, 4,5, 4,3, 3,2, 2,1, 0,0] )).to eq ([0,0, 1,1, 5,3, 10, 10, 4,5, 4,3, 3,2, 2,1, 0,0].sum + 10 + 4 + 4 + 5)
    end
    it "Successfully scores a game including a strike followed immediately by another two strikes" do
      expect(BowlingScoreManager.score_game( [0,0, 1,1, 5,3, 10, 10, 10, 4,3, 3,2, 2,1, 0,0] )).to eq ([0,0, 1,1, 5,3, 10, 10, 10, 4,3, 3,2, 2,1, 0,0].sum + 10 + 10 + 10 + 4 + 4 + 3)
    end
    it "Successfully scores final frame in case of maximum possible score" do
      expect(BowlingScoreManager.score_game( [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10,10] )).to eq 300
    end
    it "Successfully scores final frame in case of spare in final frame" do
      expect(BowlingScoreManager.score_game( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 3,7,2] )).to eq ( [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 3,7,2].sum) 
    end
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
