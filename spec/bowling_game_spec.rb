# require 'bowling_game'

# describe BowlingGame do

#   subject(:game) { BowlingGame.new }
  
#   # smallest problem = the game can roll 20 times
#   describe '#add_roll' do
#     it 'adds rolls' do
#       20.times{ game.add_roll(2) }
#       expect(subject.rolls_score).to eq 40
#     end
#   end 
  
#   # simplest outputs: gutter game - input 20.times 0 / output 0
#   describe '#gutter_game' do
#     it 'user scores down zero in rolls' do
#       20.times { game.add_roll(0) }
#       expect(subject.rolls_score).to eq 0
#     end
#   end
  
#   # simplest outputs: perfect game - input 12.times 10 / output 300
#   describe '#perfect_game' do
#     it 'user scores down 10 strikes plus 2 bonus strikes' do
#       12.times { game.add_roll(10) }
#         expect(subject.rolls_score).to eq 300
#      end
#   end





# end
# # test score summing up with the minimum problem
# # test score summing up with strike and spare
# # test gutter game
# # test perfect game

# # test frame 10 score