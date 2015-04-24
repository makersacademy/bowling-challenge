class Frame
  attr_reader :pins
  attr_accessor :strike, :spare, :id, :score
  @@id = 0
  def initialize
    # puts "new frame"
    @@id += 1
    @id = @@id
    @pins = 10
  end

  def knock_down_pins_with roll
    @pins -= roll
  end
end

class Game
  def initialize array_of_rolls
    @rolls = array_of_rolls
    @frames_played = []
    roll = @rolls.shift
    take_a_roll roll, Frame.new
    p @frames_played
  end

  def take_a_roll roll, frame
    #new roll
    if @rolls.size == 0
      puts 'here'
      return 0
    end
    frame.knock_down_pins_with roll
    if frame.pins == 0
      #we have a strike
      frame.score = 10 + take_a_roll(@rolls[0], Frame.new) + take_a_roll(@rolls[1], Frame.new)
    else
      #we roll a new reall ball
      frame.knock_down_pins_with @rolls.shift
      if frame.pins == 0
      #we have a spare
        frame.score = 10 + take_a_roll(@rolls[0], Frame.new)
      else
        frame.score = 10 - frame.pins
      end
    end
    # move onto the next frame
    @frames_played << frame
    
    take_a_roll @rolls.shift, Frame.new
  end

end
