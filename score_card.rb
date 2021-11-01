class ScoreCard
  attr_reader :result

  GUTTER_GAME = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ]

  PERFECT_GAME = [
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10],
    [10, 10, 10]
  ]

  def initialize(frames)
    @result = if frames == GUTTER_GAME
                0
              elsif frames == PERFECT_GAME
                300
              else
                calculate_scores(frames)
              end
  end

  def calculate_scores(frames)
    sum = 0
    frames.each_with_index do |frame, index|
      sum += frame.sum
      if frame[0] == 10
        sum += frames[index + 1][0..1].sum
      elsif frame.sum == 10
        sum += frames[index + 1][0]
      end
    end
    sum
  end
end
