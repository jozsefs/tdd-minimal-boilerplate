module.exports = {
	a: 0,
	test: function() {
		setTimeout(function() {
			this.a = 1;
		}.bind(this), 1000);
	}
};