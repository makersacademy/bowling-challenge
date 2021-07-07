# MVP: As a bowler
#      In order to count my scores
#      I want to have 10 frames that consist of 2 rounds
#
# MVP: As a bowler
#      In order to count my scores
#      I want my 10 pins to reset after each frame

total_score = 0
round_1 = gets.chomp
# round_2 = gets.chomp

def roll
  frames = []
  bonus_tally = []
  frame_count = 0
  current_frame_score = 0
  total_score = 0
  strike_bonus = nil
  spare_bonus = nil
  previous_frame_score = 0


  while frame_count < 10
    if strike(r1) == true
      strike_bonus = true
    else
      strike_bonus = false
    end

    if spare(r1, r2) == true
      spare_bonus = true
    else
      spare_bonus = false
    end

    r1 == gets.chomp

    if strike(r1) == true # - check for spare and strike is true ++
      r2 = 0
    else
      r2 == gets.chomp
      if spare(r1, r2) == true
      end
    end
  current_frame_score = r1 + r2
    if strike_bonus == true
      bonus = current_frame_score
    if spare_bonus == true
      bonus = current_frame_score
    end

    frames << current_frame_score
    bonus_tally << bonus
    frame_count =+ 1
  end
end

    previous_frame_score =+ spare_bonus
    previous_frame_score =+ strike_bonus
    current_frame_score = r1 + r2
    frames << current_frame_score
    previous_frame_score = current_frame_score
    frame_count =+ 1






    spare(r1, r2)  # - check for spare and strike is true ++



    round_1 = gets.chomp
  if round_1 <= 10
    round_2 = gets.chomp
    if round_2 + round_1 <= 10
       total_score =+ round_1 + round_2
       frames =+1
    else
      total_score =+ round_2 + round_1
      spare = true

def strike(r1)
  if r1 = 10
    return true #strike bonus active
  else
    return false
  end
end

def spare(r1, r2)
  if r1 + r2 = 10
    return true #spare bonus active
  else
    return false
  end
end



frame = []
game = [[]]

if round_1 <= 10
  total_score + round_1
  round_2 = gets.chomp

  if round_2 + round_1 <= 10
    total_score =+ round_2
  else
    total_score = round_2 + round_1
    round_1 = gets.chomp

else
  frame << round_1
  frame << 0
  game << frame
end


# if round_1 <= 10
#   frame << round_1
#   round_2 = gets.chomp
#
#   if round_2 + round_1 <= 10
#     frame << round_2
#     game << frame
#   else
#     round_2 + round_1
#     round_1 = gets.chomp
#
# else
#   frame << round_1
#   frame << 0
#   game << frame
# end
