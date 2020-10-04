require "scorecard"

describe ScoreCard do
  describe "#.add_roll" do
    it "allows a player to input a score" do
      score = ScoreCard.new
      score.add_roll(5)
      expect(score.total_score).to eq 5
    end
  end
end
