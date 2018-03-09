var assert = require('assert');
const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
const expect = chai.expect;

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

    it('can submit a new path', function() {
        browser.url('http://localhost:3000/create');
        browser.setValue('input[id="title"]', 'Tester Run');
        browser.setValue('textarea[id="description"]', "This is a description");
        browser.setValue('input[id="citysearch"]', "Portland, OR, USA");
        browser.click('button[type="submit"]');
        browser.pause(1000);

        assert.equal(browser.getText('h2[class="card-title"]'), "Tester Run");
    });

    it('can navigate to login', function() {
        browser.url('http://localhost:3000/');
        browser.click('button[id="login"]');
        browser.pause(1000);

        assert.equal(browser.getUrl(), 'http://localhost:3000/login');
    });

    it('can navigate to signup', function() {
        browser.url('http://localhost:3000/');
        browser.click('button[id="signup"]');
        browser.pause(1000);

        assert.equal(browser.getUrl(), 'http://localhost:3000/signup');
    });
});
