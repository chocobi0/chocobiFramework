define([], function(){
	function init(){
		console.log('home init');
	}
	function start(){
		console.log('home start');
	}
	function end(){
		console.log('home end');
	}
	return {
		init 	: init,
		start 	: start,
		end 	: end
	};
});