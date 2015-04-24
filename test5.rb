class Frame
  attr_reader :pins
  attr_accessor :strike, :spare, :id, :score

  def initialize
    puts "new frame"
    @pins = 10
  end

  def knock_down_pins_with roll
    puts "pins before this roll #{@pins}"
    puts "roll hits #{roll} pins"
    @pins -= roll
  end
end

class Game
  def initialize array_of_rolls
    @frames = []
    @rolls = array_of_rolls
    roll = @rolls.shift
    play_a_frame roll
    score
  end


  #ALMOST there, getting nil errors likely due to shift
  # think how to do it wth out shift
  def play_a_frame roll
    #put down frame of pins
    frame = Frame.new
    @frames << frame
    # roll a shot
    #see what it hits
    frame.knock_down_pins_with roll
    # if it's a strike
    if frame.pins == 0
      #the score is 10 + next 2 rolls
      frame.score = 10 + play_a_frame(@rolls[0]) + play_a_frame(@rolls[1])
      # and we bowl the next round with a new ball
      play_a_frame @rolls.shift
    else
      #if it's not strike roll again in this frame with a new ball
      roll = @rolls.shift
      # and see what we hit
      frame.knock_down_pins_with roll
      # if we hit a spare
      if frame.pins == 0
      #the score is 10 + next roll
        frame.score = 10 + play_a_frame(@rolls[0])
        # and we bowl the next round with a new ball
        play_a_frame @rolls.shift
      else
        #otherwise out score is just the pins we hit
        frame.score = 10 - frame.pins
        # and we bowl the next round with a new ball
        play_a_frame @rolls.shift
      end
    end
  end

  def score
    @frames.each do |frame|
      p frame.score
    end
  end


end