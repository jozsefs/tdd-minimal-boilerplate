module.exports = {
	a: 0,
	test: function() {
		var self = this;
		setTimeout(function() {
			self.a = 1;
		}, 1000);
	}
};