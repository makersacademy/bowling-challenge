feature 'Playing 10 pin bowling' do
  scenario "Viewing the game page" do
    visit '/'
    expect(page).to have_content('Ten Pin Bowling Score Sheet')
  end

  scenario 'Playing a perfect game' do
      visit '/'
      12.times { click_button("X") }
      expect(page).to have_field('edit-game-result', with: '300')
  end

  scenario 'Playing a perfectly bad game' do
      visit '/'
      10.times { click_button("0") }
      expect(page).to have_field('edit-game-result', with: '0')
  end

  scenario 'Playing a game with 10th frame spare, then another roll (not a strike)' do
      visit '/'
      10.times {
        click_button("5")
        click_button("/") }
        click_button("2")
      expect(page).to have_field('edit-game-result', with: '147')
  end

  scenario 'Playing a game with 10th frame spare, then a strike' do
      visit '/'
      18.times { click_button("3") }
        click_button("0")
        click_button("/")
        click_button("X")
      expect(page).to have_field('edit-game-result', with: '74')
  end

# Failing!!!!!!!!!!!!
  scenario 'Playing a game with 10th frame strike, then another 2 strikes' do
      visit '/'
      18.times { click_button("4") }
      click_button("X")
      click_button("X")
      click_button("X")
      expect(page).to have_field('edit-game-result', with: '102')
  end

  scenario 'Playing a game with 10th frame strike, then another strike and then a non-strike' do
      visit '/'
      11.times { click_button("X") }
      click_button("4")

      expect(page).to have_field('edit-game-result', with: '294')
  end

end
