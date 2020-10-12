# require 'frame'

# describe Frame do
  
#   subject(:frame) { Frame.new } 


    

#   describe '#add_roll(roll)' do
#     it 'adds the roll to all the score(array)' do
#       frame.add_roll(1) # 1 pin down
#       frame.add_roll(5) # 5 pins down
#       expect(frame.rolls_score).to eq [1, 5]
#     end
#   end

  
    
#   # input 20.times 0 / output 0
#   #describe '#gutter_game' do
#   #  it 'user pins down zero in every frame' do
#   #    20.times { frame.add_roll(0) }
#   #    expect(frame.total_score).to eq 0
#   #  end
#   #end




#     context 'frame 1-9' do
      
#       describe 'spare?' do
#         it 'puts down 10 pins in 2 rolls' do
#           frame.add_roll(1)
#           frame.add_roll(9)
#           expect(frame.rolls_score).to eq [1, 9]
#         end 
#       end

#       describe 'spare_bonus' do  
#         it 'gets the points of the first roll(roll_count +2) of the next frame' do
#           frame.add_roll(1)
#           frame.add_roll(9)
#           frame.add_roll(1)
#           expect(frame.rolls_score).to eq [1, 9, 1]
#         end
#       end 

#       describe 'strike?' do
#         it 'puts 10 pins down in one roll' do
#           frame.add_roll(10)
#           expect(frame.rolls_score).to eq [10]
#         end
#       end
      
#       describe 'strike_bonus' do  
#         it 'bonus sums the pins of two next rolls' do
#           frame.add_roll(10)
#           frame.add_roll(1)
#           frame.add_roll(1)
#           frame.add_roll(5)
#           frame.add_roll(5)
#           expect(frame.rolls_score).to eq [10, 1, 1, 5, 5]
#         end 
#       end
#     end

#     context 'frame 10' do
      
#       describe 'spare_frame10' do
      
      
#       end

#       describe 'strike_frame10' do
      
      
#       end


#     end
# end


