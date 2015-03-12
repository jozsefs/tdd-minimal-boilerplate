var assert = require('chai').assert,
	sinon = require('sinon'),
	testLib = require('../libs/test');

suite('test project', function() {
	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.clock = this.sandbox.useFakeTimers();
	});

	test('test runs', function() {
		testLib.test();
		this.clock.tick(1000);
		assert.strictEqual(testLib.a, 1);
	});

	teardown(function() {
	});
});
