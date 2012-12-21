describe('jQuery Promises', function() {

  it('Basic Functional', function() {
      var div = $( "<div />" );

      div.promise().done(function( arg1 ) {
          expect(arg1).toBe(div);
      });
  });

});
