feature "Bowling score calculator" do
  scenario "Gutter game bowled", js: true do
    visit "/"
    20.times { click_button "score0" }
    expect(page).to have_content "final score: 0"
  end

  scenario "Perfect game bowled", js: true do
    visit "/"
    12.times { click_button "score10" }
    expect(page).to have_content "final score: 300"
  end

  scenario "So-so game bowled", js: true do
    visit "/"
    10.times do
      click_button "score3"
      click_button "score5"
    end
    expect(page).to have_content "final score: 80"
  end
end
