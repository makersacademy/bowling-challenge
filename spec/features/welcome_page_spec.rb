feature 'Welcome page' do
  scenario 'show welcome text for quest' do
    visit('/')
    expect(page).to have_content('Welcome, guest. Please log-in!')
  end
  scenario 'has a link to log-in' do
    visit('/')
    expect(page).to have_button('log-in')
    click_button('log-in')
    expect(page).to have_current_path('/users/log-in', url:false)
  end
end
    