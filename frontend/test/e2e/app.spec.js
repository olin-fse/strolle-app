var assert = require('assert');
const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
const expect = chai.expect;

describe('google', function() {
    it('should have the right title', function () {
        browser.url('http://www.google.com');
        var title = browser.getTitle();
        assert.equal(title, 'Google');
    });
});

describe('strolle app', function() {
    it('has the right title', async function() {
        browser.url('http://localhost:3000/');
        var title = browser.getTitle();
        assert.equal(title, 'Strolle');
    });

    it('navigates to create page', function() {
        browser.url('http://localhost:3000/');
        browser.click('button[id="create_run"]');
        var pageUrl = browser.getUrl();
        assert.equal(pageUrl, 'http://localhost:3000/create');
    });

    if('can submit a new run', function() {
        browser.url('http://localhost:3000/create');
        browser.setValue('input[id="title"]', 'Tester Run');
        browser.setValue('input[id="description"]', "This is a description");
        browser.setValue('')
    });
});
