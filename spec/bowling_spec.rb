require 'bowling'
describe Bowling do
  game = Bowling.new
  20.times do
    game.score(0)
  end
  it "Gutter game scores 0" do
    expect(game.total_score).to eq 0
  end
end