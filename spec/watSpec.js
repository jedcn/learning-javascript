describe('wat', function() {

  it('[] + [] is the empty string', function() {
    var arrayPlusArray = [] + [];
    expect(arrayPlusArray).toBe('');
    expect(typeof arrayPlusArray).toBe('string');
  });

  it ('[] + {} is this string "[object Object]"', function() {
    var arrayPlusObject = [] + {};
    expect(arrayPlusObject).toBe('[object Object]');
    expect(typeof arrayPlusObject).toBe('string');
  });

});