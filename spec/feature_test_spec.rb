# describe "Enter scores for a game" do
#   it "User plays entire bowling game while entering scores on scorecard" do
#     game = ScoreCard.new
#     expect(game.frame).to eq 1
#     expect(game.roll).to eq 1
#     expect(game.pins).to eq 10
#     #Frame 1: Roll 1
#     game.add_roll(1)
#     expect(game.frame).to eq 1
#     expect(game.roll).to eq 2
#     expect(game.pins).to eq 9
#     expect(game.frame_score).to eq 1
#     expect(game.total_score).to eq 0
#     #Frame 1: Roll 2
#     game.add_roll(4)
#     expect(game.frame).to eq 2
#     expect(game.roll).to eq 1
#     expect(game.pins).to eq 10
#     expect(game.frame_score).to eq 0
#     expect(game.total_score).to eq 5
#     #Frame 2: Roll 1
#     game.add_roll(4)
#     expect(game.frame).to eq 2
#     expect(game.roll).to eq 2
#     expect(game.pins).to eq 6
#     expect(game.frame_score).to eq 4
#     expect(game.total_score).to eq 5
#     #Frame 2: Roll 2
#     game.add_roll(5)
#     expect(game.frame).to eq 3
#     expect(game.roll).to eq 1
#     expect(game.pins).to eq 10
#     expect(game.frame_score).to eq 0
#     expect(game.total_score).to eq 14
#     # #Frame 3: Roll 1
#     # game.add_roll(6)
#     # expect(game.frame).to eq 3
#     # expect(game.roll).to eq 2
#     # expect(game.pins).to eq 4
#     # expect(game.frame_score).to eq 6
#     # expect(game.total_score).to eq 14
#     # #Frame 3: Roll 2
#     # game.add_roll(4)
#     # expect(game.frame).to eq 4
#     # expect(game.roll).to eq 1
#     # expect(game.pins).to eq 10
#     # expect(game.frame_score).to eq 0
#     # expect(game.total_score).to eq 14
#     # expect(game.spare).to eq true
#     # #Frame 4: Roll 1
#     # game.add_roll(5)
#     # expect(game.frame).to eq 4
#     # expect(game.roll).to eq 2
#     # expect(game.pins).to eq 5
#     # expect(game.frame_score).to eq 5
#     # expect(game.total_score).to eq 29
#     # #Frame 4: Roll 2
#     # game.add_roll(4)
#     # expect(game.frame).to eq 4
#     # expect(game.roll).to eq 1
#     # expect(game.pins).to eq 10
#     # expect(game.frame_score).to eq 0
#     # expect(game.total_score).to eq 29
#   end
# end
