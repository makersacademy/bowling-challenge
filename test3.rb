class Game
  def initialize rolls
    @rolls = rolls
    @frames_played = []
    @id = 0
    p @rolls
    bowl_a_round
  end

  def bowl_a_round
    frame = Frame.new
    @id += 1
    frame.id = @id
    @frames_played << frame
    roll = @rolls.shift
    puts "new roll"

    # bowl 1st shot
    frame.knock_down_pins_with roll
    # check for strike
    if frame.pins == 0
      # if there is a strike just bowl 2 fake rounds with the next 2 balls!
      # the minus bug will get fixed when we object orient this better
      # need to pull roll.shift out
      frame.score = 10 + (frame.knock_down_pins_with @rolls[0]) + (frame.knock_down_pins_with @rolls[1])
      #new round
      bowl_a_round
    else
      # bowl second shot
      roll = @rolls.shift
      frame.knock_down_pins_with roll
      if frame.pins == 0
       frame.spare = true
       frame.score = 10 + (frame.knock_down_pins_with @rolls[0])
      end
     # new round whether or not theresa split
     # so long as we have more bowls
     if @rolls.size > 0
      bowl_a_round
     end
   end

  end
end

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