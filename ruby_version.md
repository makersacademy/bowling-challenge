```ruby
class Application

  attr_accessor :frames

  def initialize(io)
    @io = io
    @frames = [[],[],[],[],[],[],[],[],[],[]] 
  end

  def run
    play_first_nine_frames
    play_final_frame
    @io.puts "Your final score is: #{@frames.flatten.sum}"
  end

  def play_first_nine_frames
    @frames[0..8].each_with_index do |frame, i|
      @io.puts "Frame #{i+1}:"

      frame = add_user_scores(frame)

      if i >= 1
        previous_frame = @frames[i-1]
        frame << bonus_points?(previous_frame, frame)
      end
    end
  end

  def play_final_frame
    @io.puts "Frame 10:"
    @frames[9] == add_user_scores(@frames[9])

    if @frames[9][0] == 10
      @io.puts "Roll 2:"
      @frames[9] << get_user_input
      if @frames[9][1] == 10
        third_roll
      end
    elsif @frames[9].sum == 10
      third_roll
    end
  end

  def bonus_points?(previous_frame, frame)
    if previous_frame[0] == 10
      frame.sum
    elsif previous_frame[0..1].sum == 10
      frame[0]
    else 
      0
    end
  end

  def add_user_scores(frame)
    @io.puts "Roll 1:"
    frame << get_user_input

    if frame[0] < 10
      @io.puts "Roll 2:"
      frame << get_user_input
    end

    frame
  end

  def get_user_input
    user_score = @io.gets.chomp.to_i
  end

  private
  
  def third_roll
    @io.puts "Roll 3:"
    @frames[9] << get_user_input
  end

  if __FILE__ == $0
    app = Application.new(Kernel)
    app.run
  end
end
```