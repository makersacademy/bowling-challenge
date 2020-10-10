require "scorecard"

describe "Enter scores for a game" do
  it "User plays entire bowling game while entering scores on scorecard" do
    game = ScoreCard.new

    #Frame 1: Roll 1
    game.add_roll(1)
    expect(game.total_score).to eq 0
    #Frame 1: Roll 2
    game.add_roll(4)
    expect(game.total_score).to eq 5
    #Frame 2: Roll 1
    game.add_roll(4)
    expect(game.total_score).to eq 5
    #Frame 2: Roll 2
    game.add_roll(5)
    expect(game.total_score).to eq 14
    #Frame 3: Roll 1
    game.add_roll(6)
    expect(game.total_score).to eq 14
    #Frame 3: Roll 2
    game.add_roll(4)
    expect(game.total_score).to eq 14
    #Frame 4: Roll 1
    game.add_roll(5)
    expect(game.total_score).to eq 29
    #Frame 4: Roll 2
    game.add_roll(5)
    expect(game.total_score).to eq 29
    #Frame 5: Roll 1
    game.add_roll(10)
    expect(game.total_score).to eq 49
    #Frame 6: Roll 1
    game.add_roll(0)
    expect(game.total_score).to eq 49
    #Frame 6: Roll 2
    game.add_roll(1)
    expect(game.total_score).to eq 61
    #Frame 7: Roll 1
    game.add_roll(7)
    expect(game.total_score).to eq 61
    #Frame 7: Roll 2
    game.add_roll(3)
    expect(game.total_score).to eq 61
    #Frame 8: Roll 1
    game.add_roll(6)
    expect(game.total_score).to eq 77
    #Frame 8: Roll 2
    game.add_roll(4)
    expect(game.total_score).to eq 77
    #Frame 9: Roll 1
    game.add_roll(10)
    expect(game.total_score).to eq 97
    #Frame 10: Roll 1
    game.add_roll(2)
    expect(game.total_score).to eq 97
    #Frame 10: Roll 2
    game.add_roll(7)
    expect(game.total_score).to eq 125
  end
end
