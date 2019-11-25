feature 'calculates the score' do
  scenario 'returns 0 for a gutter game' do
    visit('/')

    10.times do
      select(0, :from => 'roll_1')
      select(0, :from => 'roll_2')
      click_button('Submit')
    end

    expect(page).to have_content('You scored 0!')
  end
end
