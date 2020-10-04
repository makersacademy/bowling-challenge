
class ScoreCard
attr_accessor :current_frame, :scores, :frames, :bonus
def initialize 
@frames = [[10], [10], [10], [10], [5,3], [10], [10], [10], [10]] 
@scores = Array.new(10, 0)
@total = 0
@current_frame = []
end

def shot_sorter

    if frame_ended? && !(strike_bonus_round? || spare_bonus_round?)
    frames << @current_frame
    @current_frame = []
    @bonus = false

    end
end

def score_this_shot(shot_score)
 # @current_frame << shot_score
  if shot_in_frame == 1 || 2
    @current_frame << shot_score
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

def strike_bonus_round?
   (frame_number == 10 && @current_frame.last == 10 && @current_frame.length < 3)
end

def spare_bonus_round?
  (frame_number == 10 && @current_frame.length == 2  && @current_frame[0] + @current_frame[1] == 10 )
end

def frame_ended?
  if @bonus
    shot_in_frame > 2
  else
    (@current_frame.length >= 2 || @current_frame.sum ==10)
  end
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
  
    print "Frame: #{frame_number}. Shot 1: #{@current_frame[0]}"
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
    game.score_statement
    game.shot_sorter
    puts "instance length #{game.current_frame.length}"
    puts "shot in frame + #{game.shot_in_frame}"
    puts "bonus: #{game.bonus}"
    puts "strike #{game.strike_bonus_round?}"
    puts "spare #{game.spare_bonus_round?}"
    puts "frame_ended #{game.frame_ended?}"
    
  end
end

end

=begin

game = ScoreCard.new
until game.frame_number == 11 
  
  puts "Enter score for Frame: #{game.frame_number} Shot: #{game.shot_in_frame}"
  last_shot = gets.chomp.to_i
  game.score_this_shot(last_shot)
  game.shot_sorter
  game.score_statement
end
=end