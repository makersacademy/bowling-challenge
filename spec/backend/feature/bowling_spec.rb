feature 'Ten pin bowling' do

  scenario 'find a welcome message' do
    visit '/'
    expect(page).to have_content('Welcome to 10-pin Bowling')
  end

  scenario 'display a normal frame score', :js => true do
    visit '/'
    click_button 'btn1'
    click_button 'btn2'
    within('#f1score') do
      expect(page).to have_content('3')
    end
  end

  scenario 'display a strike frame score', :js => true do
    visit '/'
    click_button 'btn10'
    within('#f1score') do
      expect(page).to have_content('10x')
    end
  end

  scenario 'display a spare frame score', :js => true do
    visit '/'
    click_button 'btn6'
    click_button 'btn4'
    within('#f1score') do
      expect(page).to have_content('10/')
    end
  end

end
