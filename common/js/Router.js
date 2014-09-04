define(function(){
	var routes = {};
	var currentHash = '';
	
	function startRouting(){
		
		setInterval(hashCheck, 100);
	}
	
	function hashCheck(){
		
		var hash = window.location.hash;
		hash = hash.split('?');
		hash = hash[0];
		if(hash == null || hash == undefined || hash == ""){
			window.location.hash = '#sns/userHome';
		}
		else if (hash != currentHash){
			if( routes[hash] == undefined){
				
				var controller = hash.replace('#','');
				routes[hash] = {
						controller : controller,
						initalize : false
				};
				
			}
			var currentRoute = routes[hash];
			loadController(currentRoute);
			currentHash = hash;
		}
	}
	
	function loadController(currentRoute){
		require(['UI/' + currentRoute.controller], function(controller){
			
			if(!currentRoute.initalize){
				controller.init();
				currentRoute.initalize = true;
			}
			controller.start();
		});
	}
	function endController(){
		
	}
	
	return {
		startRouting:startRouting
	};
});