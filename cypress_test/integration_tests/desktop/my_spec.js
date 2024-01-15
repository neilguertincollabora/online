/* global describe it cy beforeEach afterEach require */

var helper = require('../common/helper');

describe.skip(['tagdesktop'],'My Test', function() {
	beforeEach(function() {
		cy.log('>>>> before each - start');
		cy.wait(1000);
		cy.log('<<<< before each - end');
	});

	afterEach(function() {
		cy.log('>>>> after each - start');
		cy.wait(1000);
		cy.log('<<<< after each - end');
	});

	it('Passing test', function() {
		cy.log('>>>> test 1 - start');
		cy.wait(1000);
		cy.wrap(1).should('eq',1);
		cy.log('<<<< test 1 - end');
	});

	it('Failing test', function() {
		cy.log('>>>> test 1 - start');
		cy.wait(1000);
		cy.wrap(1).should('eq',2);
		cy.log('<<<< test 1 - end');
	});
});

describe(['tagdesktop'],'My Test With Document', function() {
	var testFileName;

	beforeEach(function() {
		cy.log('>>>> before each - start');
		testFileName = helper.beforeAll('hello.odt');
		cy.log('<<<< before each - end');
	});

	afterEach(function() {
		cy.log('>>>> after each - start');
		helper.afterAll(testFileName);
		cy.log('<<<< after each - end');
	});

	it('Passing test', function() {
		cy.log('>>>> test 1 - start');
		cy.wait(1000);
		cy.wrap(1).should('eq',1);
		cy.log('<<<< test 1 - end');
	});

	it('Failing test', function() {
		cy.log('>>>> test 1 - start');
		cy.wait(1000);
		cy.wrap(1).should('eq',2);
		cy.log('<<<< test 1 - end');
	});
});

