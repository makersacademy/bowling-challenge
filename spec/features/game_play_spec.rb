feature 'Playing 10 pin bowling' do
  scenario "Viewing the game page" do
    visit '/'
    expect(page).to have_content('Ten Pin Bowling Score Sheet')
  end

  scenario 'Playing a game' do

      visit '/'
      click_button('New game')
      expect(page).to have_content('Ten Pin Bowling Score Sheet');
      click_button(5)
      click_button(5)
      # expect('edit-game-result').to eq(10)
      # expect(find_field('edit-game-result').value).to eq '10'
      # page.find_by_id('red')
      # expect(page).to have_field('edit-game-result', with: '10')

# $('#edit-game-result').val(game.totalScore);

# expect(page).to have_field('edit-game-result', with: '10')
# expect(page).to have_css 'input#edit-game-result', visible: false, text: 10

  expect(page).to have_field('edit-game-result', with: '10')

      # page.find_by_id('edit-game-result')
      # page.find_by_id("edit-game-result", exact: "elephant")
      # expect(find("#edit-game-result")).to have_content(10)

      # expect(page.find('#edit-game-result')[:value]).to eq 10

      # expect(find_field('#edit-game-result').value).to eq 10

      # Finds the element but still need to check value.


      # expect('#edit-game-result').value.to eq 10;
      # expect(('input#edit-game-result').val).to eq 10
      # expect(find_field('edit-game-result').value).to eq 10
      # expect(find_field('edit-game-result').value) == 'bitchbastard'
      # expect(page.find('#edit-game-result')['data-value']).to eq 5
  end

end

# http://stackoverflow.com/questions/13070190/is-the-html-is-view-source-different-from-the-html-in-inspect-element

# http://ahmednadar.github.io/12/09/2013/overwrite-how-Capybara-ignores-hidden-elements/
