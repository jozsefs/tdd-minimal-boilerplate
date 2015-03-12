/**
 * TestClass.
 *
 * @constructor
 */
var TestClass = function() {
	this.a = 0;
};

/**
 * Check is this a 1000ms timeout.
 *
 */
TestClass.prototype.test = function() {
	setTimeout(function() {
		this.a = 1;
	}.bind(this), 1000);
};

module.exports = TestClass;
