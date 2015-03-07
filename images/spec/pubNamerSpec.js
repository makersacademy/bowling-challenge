describe('pubNamer', function() {

  describe('Naming pubs', function() {

    describe('names a', function() {

      beforeEach(function() {
        spyOn(Math, 'random').and.returnValue(0.1);
      });

      it('single-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('noun');
        expect(pubNamer.generate()).toEqual('The Bicycle');
      });

      it('single-city pub', function() {
        spyOn(formula, 'random').and.returnValue('city');
        expect(pubNamer.generate()).toEqual('The Cambridge');
      });

      it('single-place pub', function() {
        spyOn(formula, 'random').and.returnValue('place');
        expect(pubNamer.generate()).toEqual('The Canyon');
      });

      it('single-profession pub', function() {
        spyOn(formula, 'random').and.returnValue('profession');
        expect(pubNamer.generate()).toEqual('The Barrister');
      });

      it('dual-profession pub', function() {
        spyOn(formula, 'random').and.returnValue('profession profession');
        expect(pubNamer.generate()).toEqual('The Barrister and Barrister');
      });

      it('dual-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('noun noun');
        expect(pubNamer.generate()).toEqual('The Bicycle and Bicycle');
      });

      it('describer-famous person pub', function() {
        spyOn(formula, 'random').and.returnValue('describer famousPerson');
        expect(pubNamer.generate()).toEqual('The Cockney David');
      });

      it('describer-place pub', function() {
        spyOn(formula, 'random').and.returnValue('describer place');
        expect(pubNamer.generate()).toEqual('The Cockney Canyon');
      });

      it('city-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('city noun');
        expect(pubNamer.generate()).toEqual('The Cambridge Bicycle');
      });

      it('profession-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('profession noun');
        expect(pubNamer.generate()).toEqual('The Barrister and Bicycle');
      });

      it('profession-city pub', function() {
        spyOn(formula, 'random').and.returnValue('profession city');
        expect(pubNamer.generate()).toEqual('The Barrister of Cambridge');
      });

      it('number-noun pub', function() {
        spyOn(formula, 'random').and.returnValue('number noun');
        expect(pubNamer.generate()).toEqual('The Eleven Bicycles');
      });

      it('number-profession pub', function() {
        spyOn(formula, 'random').and.returnValue('number profession');
        expect(pubNamer.generate()).toEqual('The Eleven Barristers');
      });
    });
  });

});
