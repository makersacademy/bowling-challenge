feature 'Playing 10 pin bowling' do
  scenario "Viewing the game page" do
    visit '/'
    expect(page).to have_content('Ten Pin Bowling Score Sheet')
  end

  scenario 'Playing a game' do
      visit '/'
      click_button("X")
      # expect('edit-game-result').to eq(10)
      # expect(find_field('edit-game-result').value).to eq '10'
      # page.find_by_id('red')
      # expect(page).to have_field('edit-game-result', with: '10')
      page.find_by_id('edit-game-result')

      # Finds the element but still need to check value.
  end

end
