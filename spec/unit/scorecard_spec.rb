require "scorecard"

describe ScoreCard do
  describe "#.add_roll" do
    it "allows a player to input a score" do
      score = ScoreCard.add_roll(5)
      expect(score).to eq 5
    end
  end
end
