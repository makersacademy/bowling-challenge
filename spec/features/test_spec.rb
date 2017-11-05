describe "Bowling score calculator" do
  it "works" do
    driver = Selenium::WebDriver.for :firefox
    driver.get "file:///Users/lowthe01/projects/makers_academy/weekend_challenges/bowling-challenge/index.html"
    roll_value_input = driver.find_element(:id, "rollValue")
    [10, 10,	10, 10,	10, 10, 10,	10, 10, 10,10,10].each do |rollValue|
      roll_value_input.send_keys rollValue
      driver.find_element(:id, "enterRollValue").click
    end
    total_displayed = driver.find_elements(:class, "runningTotal")[-1].text
    expect(total_displayed).to eq "300"
    driver.close
  end
end
