
  
  frame = []
  frames = []
  total = 0
  previous_frame_index = -2

  until frames.length == 10 do
    2.times do
      puts "Please enter pins"
      pins = gets.chomp.to_i
      frame << pins
      if pins == 10
        break
      end
    end
    frames << frame
    previous_frame_index += 1
    p previous_frame_index
    score = frame.sum
    p frames
    p score
    total += score
    p total
    
    if frames[previous_frame_index].sum == 10 && frames[previous_frame_index].length == 1
      total += score
      puts total
    elsif frames[previous_frame_index].sum == 10
      total += frame[0]
      puts total
    end

    frame = []

  end

  if frames[9].sum == 10
    puts "Please enter pins"
    pins = gets.chomp.to_i
    total += pins
    if pins == 10
      puts "Please enter pins"
      pins = gets.chomp.to_i
      total += pins
      puts total
    end
    puts total
  else
  puts total
  end


