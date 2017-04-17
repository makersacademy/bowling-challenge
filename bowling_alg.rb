arr = [[6,2],[4,3],[6,1],[7,1],[7,2],[9,1],[6,0],[10,0],[5,2],[1,1]]
score = 0

arr.each.with_index do |frame, index|
  if frame[0] == 10
    frame[0] = 10 + arr[index + 1][0] + arr[index + 1][1]
  end

  if frame[0] + frame[1] == 10 && frame[0] != 10
    frame[1] = 0
    frame[0] = 10 + arr[index + 1][0]
  end

  score += frame[0] + frame[1]
end
