
class ScoreCard
attr_accessor :current_frame, :scores, :frames, :bonus, :frame_scores, :last_2_shots
def initialize 
@frames = [] 
@scores = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0, 0]] #Array.new(9, [0,0]) << [0,0,0]#[[1, 0], [2, 0], [3, 0], [4, 0], [6, 0], [6, 0], [6, 0], [6, 0], [6, 0], [0, 0, 0]] #
@frame_scores = []
@current_frame = []
@last_2_shots = []
end

def total_score
  
end
=begin
def last_three(last_shot)
  if @last_3_shots.length < 3
    @last_3_shots << last_shot
  else
    @last_3_shots.shift
    @last_3_shots << last_shot
  end
end
=end


def fuckmyass(last_shot)
  if @last_2_shots.length < 2
    @last_2_shots << last_shot
  else
    @last_2_shots.shift
    @last_2_shots << last_shot
  end
end

def shot_sorter
    if frame_ended? && !(strike_bonus_round? || spare_bonus_round?)
      @frame_scores << @current_frame.sum
      frames << @current_frame
      @current_frame = []
      @bonus = false
    end
end

def score_this_shot(shot_score)
  if shot_in_frame == 1 || 2
    @current_frame << shot_score

    @scores[frame_number-1][(shot_in_frame) - 2] += @current_frame.last 

    add_spare_bonus if (last_frame_spare?) && ((shot_in_frame == 3) || @current_frame.first == 10)

    add_strike_bonus if ((last_shot_strike?) && (frame_number >=3) && (shot_in_frame == 3 || shot_score == 10))
  elsif strike_bonus_round?
    @current_frame << shot_score
    @bonus = true
  elsif spare_bonus_round?
    @current_frame << shot_score
    @bonus = true
  else
    shot_sorter
  end
end

def score_bonus_round

end

def add_strike_bonus
  @frame_scores[frame_number - 3] += @last_2_shots.sum unless @frames.length >= 9
  @frame_scores[frame_number - 3] += (@current_frame[0] + @current_frame[1]) if @frames.length == 10
  puts "now #{@frames.length} -3 #{@frame_scores[frame_number - 3]} -4 #{@frame_scores[frame_number - 4]} -2 #{@frame_scores[frame_number - 4]}" if @frames.length == 9 && @last_2_shots == [@current_frame[0], @current_frame[1]]

  @frame_scores[frame_number - 3] += @last_2_shots.sum if (@frames.length == 9 && @last_2_shots == [@current_frame[1], @current_frame[2]] )
  @frame_scores[frame_number - 2] += @last_2_shots.sum if (@frames.length == 9 && @last_2_shots == [@current_frame[0], @current_frame[1]] && @current_frame[2] == 10 ) 
 #strike_bonus = @scores[frame_number -2] + @scores[frame_number -1]
 #strike_bonus.delete(0)

  #strike_bonus
  #@frame_scores[frame_number - 3] += @last_2_shots.sum unless @current_frame.length > 2

end

def add_spare_bonus
  @frame_scores[frame_number - 2] += @current_frame.first 
end

def last_shot_strike?
  @scores[frame_number-2][0] == 10 if frame_number >=2
end

def last_frame_spare?
 ( (@frame_scores[frame_number - 2] == 10) && (@scores[frame_number-2].sum == 10) && @scores[frame_number-2][0] != 10 )  if frame_number >=2 
end #(@current_frame[0]

def strike_bonus_round?
   (frame_number == 10 && @current_frame.last == 10 && @current_frame.length < 3)
end

def spare_bonus_round?
  (frame_number == 10 && @current_frame.length == 2  && @current_frame[0] + @current_frame[1] == 10 )
end

def strike?
  @current_frame.length == 1 && @current_frame.sum == 10
end

def spare?
  @current_frame.length == 2 && @current_frame.sum == 10
end

def score_bonus
  if @current_frame[0] = 10 && @current_frame[1] == 10
    @current_frame.sum
  elsif @current_frame[0] + @current_frame[1] < 10
  end
end
    


def frame_ended?
  (@current_frame.length >= 2 || @current_frame.sum ==10)
end

def frame_pins_remaining
  10 - @current_frame.first
end

def frame_name(frame)
  if frame[0] == 10
    "Strike!"
  elsif (frame.sum == 10 && frame.length == 2)
    "Spare!"
  elsif (frame.sum == 0 && frame.length == 2)
    "Gutter Frame! You suck!"
  else
    ''
  end
end

def frame_number
  @frames.length + 1
end

def shot_in_frame
  @current_frame.length + 1
end

def score_statement
  
    print "Frame: #{frame_number}. Shot 1: #{@current_frame[0]}. "
    puts "Shot 2: #{@current_frame[1]}" if @current_frame.length >= 2
    puts "Bonus shot: #{@current_frame[2]}" if @bonus
    puts "#{frame_name(@current_frame)}"
end

def run
    game = ScoreCard.new
  until game.frame_number == 11 
    puts "Enter score for Frame: #{game.frame_number} Shot: #{game.shot_in_frame}"
    last_shot = gets.chomp.to_i
    puts @current_frame
    
    game.score_this_shot(last_shot)
    game.fuckmyass(last_shot)
    game.score_statement
    game.shot_sorter
    puts "instance length #{game.current_frame.length}"
    puts "shot in frame + #{game.shot_in_frame}"
    puts "bonus: #{game.bonus}"
    puts "strike #{game.strike_bonus_round?}"
    puts "spare #{game.spare_bonus_round?}"
    puts "frame_ended #{game.frame_ended?}"
    puts "--------------------------------"
    puts "#{game.scores}"
    puts "#{game.frame_scores}"
    puts "frames.length:#{game.frames.length}"
    puts "frames: #{game.frames}"
    puts "last 2: #{game.last_2_shots}"
  end
  puts "Final Score #{game.frame_scores.sum}"
end

end

