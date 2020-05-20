feature 'registration' do 
  scenario 'a user can sign up' do
    visit 'users/new'
    fill_in('email', with:'foo@foo.com')
    fill_in('password', with:'12345')
    click_button('Submit')
    expect(page).to have_content 'Welcome, foo@foo.com'
  end
end

