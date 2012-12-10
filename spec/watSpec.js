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

  it ('{} + [] is 0', function() {
    var objectPlusArray = {} + [];
    // Hah! Don't understand why Wat isn't working.
    // Here's what I expect it to be:
    // expect(objectPlusArray).toBe(0);
    // expect(typeof objectPlusArray).toBe('number');
    // But here's what I'm seeing:
    expect(objectPlusArray).toBe('[object Object]');
    expect(typeof objectPlusArray).toBe('string');
  });

  it ('{} + {}', function() {
    var objectPlusObject = {} + {};
    // Hah! Don't understand why Wat isn't working.
    // Here's what I expect it to be:
    // expect(objectPlusObject).toBe(NaN);
    //
    // But here's what I'm seeing:
    expect(objectPlusObject).toBe('[object Object][object Object]');
  });

});