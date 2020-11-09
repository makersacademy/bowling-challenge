def score_spare
    fill_in :'bowl-input', with: 5
    click_button("bowl")
    fill_in :'bowl-input', with: 5
    click_button("bowl")
end

def score_strike
    fill_in :'bowl-input', with: 10
    click_button("bowl")
end

def roll_double_2
  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")
end

def roll_full_game
  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")

  fill_in :'bowl-input', with: 2
  click_button("bowl")
  fill_in :'bowl-input', with: 2
  click_button("bowl")
end