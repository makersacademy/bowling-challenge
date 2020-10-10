require "scorecard"

describe ScoreCard do
  it "returns the total score" do
    scorecard = ScoreCard.new
    scorecard.add_roll(5)
    scorecard.add_roll(4)
    scorecard.add_roll(10)
    scorecard.add_roll(9)
    scorecard.add_roll(1)
    scorecard.add_roll(3)
    scorecard.add_roll(2)
    expect(scorecard.total_score).to eq 47
  end
end
