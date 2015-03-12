var assert = require('chai').assert,
	sinon = require('sinon'),
	TestClass = require('../libs/test');

suite('test project', function() {
	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.clock = this.sandbox.useFakeTimers();
		this.testClass = new TestClass();
	});

	test('test runs', function() {
		this.testClass.test();
		this.clock.tick(1000);
		assert.strictEqual(this.testClass.a, 1);
	});

	teardown(function() {
	});
});
