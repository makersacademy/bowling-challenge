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

  it "calculates a spare score from 3 rounds" do
    scores = [5,2,4,6,2,2]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 23
  end

  it "calculates a strike and next round" do
    scores = [10,4,4]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 26
  end

  it "calculates strike, new round, strike, next round" do
    scores = [10,4,4,10,2,2]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 44
  end

  it "calculates spare, next round" do
    scores = [4,6,2,2]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 16
  end

  it "calculates strike, spare, next round" do
    scores = [10,4,6,2,2]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 36
  end

  it "calculates 2 strikes and a next round" do
    scores = [10,10,6,2]
    scores.each do |score|
      @game.score(score)
    end
    expect(@game.total_score).to eq 52
  end


  # it "a perfect game scores 300" do
  #   12.times do
  #     @game.score(10)
  #   end
  #     expect(@game.total_score).to eq 300
  # end
end
