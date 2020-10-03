require 'bowling'
describe Bowling do
  before (:each) do
    @game = Bowling.new
  end
  it "Gutter game scores 0" do
    
  20.times do
    @game.score(0)
  end
    expect(@game.total_score).to eq 0
  end
  it "adds up 1 round" do
    scores = [2,3,4,5]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 14
  end


  it "a strike scores 10" do
    @game.score(10)
    expect(@game.total_score).to eq 10
  end

  it "calculates a spare score from 2 rounds" do
    scores = [5,5,4,5]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 23
  end

end