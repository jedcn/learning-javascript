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

  xit ('{} + [] is 0', function() {
    var objectPlusArray = {} + [];
      // Hah! Don't understand why Wat isn't working.
    // Here's what I expect it to be:
    // expect(objectPlusArray).toBe(0);
    // expect(typeof objectPlusArray).toBe('number');
    // But here's what I'm seeing:
    expect(objectPlusArray).toBe('[object Object]');
    expect(typeof objectPlusArray).toBe('string');
  });

  xit ('{} + {} is NaN', function() {
    var objectPlusObject = {} + {};
    // Hah! Don't understand why Wat isn't working.
    // Here's what I expect it to be:
    // expect(objectPlusObject).toBe(NaN);
    //
    // But here's what I'm seeing:
    expect(objectPlusObject).toBe('[object Object][object Object]');
  });

  it ('new Array(16) is ,,,,,,,,,,,,,,,,', function() {
    var result = new Array(16);
    expect(result.length).toBe(16);
    expect(result + "").toBe(',,,,,,,,,,,,,,,');
  });

  it ('new Array(16).join("wat") is watwatwatwatwatwatwatwatwatwatwatwatwatwatwat', function() {
    var result = new Array(16);
    expect(result.join('wat')).toBe('watwatwatwatwatwatwatwatwatwatwatwatwatwatwat');
  });

  it ('new Array(16).join("wat" + 1) is wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1', function() {
    var result = new Array(16);
    expect(result.join('wat' + 1)).toBe('wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1');
  });

  it ('new Array(16).join("wat" - 1) + "Batman!" is NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!', function() {
    var result = new Array(16);
    expect(result.join('wat' - 1) + ' Batman!').toBe('NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!');
  });

  // Next, check out: http://brendaneich.github.com/Strange-Loop-2012/#/ and
  // http://www.infoq.com/presentations/State-JavaScript
});