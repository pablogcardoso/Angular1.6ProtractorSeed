// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9000/main#!/two');

    expect(browser.getTitle()).toEqual('angular1.6Seed with Protractor');
  });
});