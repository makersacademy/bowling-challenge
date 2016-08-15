'use strict';

feature 'Bowling' do
  scenario 'index page shows' do
    visit '/'
    expect(page).to have_content('Are you ready to bowl?')
  end
  scenario 'player can bowl a ball' do
    visit '/'
    click_button('confirm')
    click_button('bowl')
    expect(page).to have_content('You knocked down')
  end
end
