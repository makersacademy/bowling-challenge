'use strict';

describe("Interface", function() {

  describe('playing a game', function() {
    it('shows first frame choice', function() {
      $('#5').click();
      expect($('#frame0-1').text()).toEqual('5');
    });

    it('shows second frame choice', function() {
      $('#3').click();
      expect($('#frame0-2').text()).toEqual('3');
    });

    it('shows frame total when frame is over', function() {
      expect($('#score0').text()).toEqual('8');
    });

    it('shows spares as slashes', function() {
      $('#3').click();
      $('#7').click();
      expect($('#frame1-2').text()).toEqual('/');
    });

    it('shows no score before it is calculated', function() {
      expect($('#score1').text()).toEqual('');
    });

    it('shows spare score when it can be calculated', function() {
      $('#4').click();
      expect($('#score1').text()).toEqual('22');
      $('#3').click();
      expect($('#score2').text()).toEqual('29');
    });

    it('displays a strike as an X', function() {
      $('#10').click();
      expect($('#frame3-2').text()).toEqual('X');
    });

    it('displays no score for uncalculated strikes', function() {
      expect($('#score3').text()).toEqual('');
      $('#10').click();
      expect($('#score3').text()).toEqual('');
    });

    it('updates display for calculated strikes', function() {
      $('#10').click();
      expect($('#score3').text()).toEqual('59');
    });

    it('adds no bonus if presented with gutter frame', function() {
      $('#0').click();
      $('#0').click();
      expect($('#score3').text()).toEqual('59');
      expect($('#score4').text()).toEqual($('#score4').text());
    });

    it('calculates strikes with tenth frame', function() {
      $('#10').click();
      $('#10').click();
      $('#6').click();
      expect($('#score7').text()).toEqual('115');
    });

    it('continues on for potential third bowl in tenth frame', function() {
      $('#4').click();
      expect($('#frame9-2').text()).toEqual('/');
      expect($('#score8').text()).toEqual('135');
      expect($('#score9').text()).toEqual('');
      $('#5').click();
      expect($('#score9').text()).toEqual('150');
    });
  });
});
