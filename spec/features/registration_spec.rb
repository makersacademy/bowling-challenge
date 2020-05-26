
feature 'registration' do 

  scenario 'a user can sign up' do
    visit 'users/new'
    fill_in('email', with:'test@example.com')
    fill_in('password', with:'12345')
    click_button('Submit')
    expect(page).to have_content 'Email adress exist, please try log-in'
    expect(page).to have_current_path("/users/log-in", url: false)
  end

  scenario 'new user can sign up' do
    visit 'users/new'
    fill_in('email', with:'test2@example.com')
    fill_in('password', with:'12345')
    click_button('Submit')
    expect(page).to have_content 'Registration successful, please log-in'
    expect(page).to have_current_path("/users/log-in", url: false)
  end

  scenario 'a user can log in' do
    visit '/users/log-in'
    fill_in('email', with: 'test@example.com')
    fill_in('password', with: '12345')
    click_button('Log in')
    expect(page).to have_content 'Welcome, test@example.com'
    expect(page).to have_current_path("/", url: false)
  end

  scenario 'a user cant log in with wrong password' do
    visit '/users/log-in'
    fill_in('email', with: 'test@example.com')
    fill_in('password', with: '123456')
    click_button('Log in')
    expect(page).to have_content 'Please try again or sign-up' 
  end
end
