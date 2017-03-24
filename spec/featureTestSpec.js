describe('Notifies', function(){
  it('that the next frame is ready', function(){
    click('roll');
    expect(page).toHaveContent("ROLL 1 OF 2 READY")
  });
});
