require(['require'], function(require){
	var isMobile = {
			Android : function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry : function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS : function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera : function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows : function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			iOS_app : function() {
				// i2-iOS
				return navigator.userAgent.match(/i2-iOS/i);
			},
			Android_app : function() {
				return navigator.userAgent.match(/i2-Android/i);
			},
			anyApp : function() {
				return (isMobile.iOS_app() || isMobile.Android_app());
			},
			any : function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS()
						|| isMobile.Opera() || isMobile.Windows());
			}
		};
	var targetPath = '../../web';
	if(isMobile.any() || isMobile.anyApp()){
		targetPath = '../../mobile';
	}
	
	requirejs.config({
	    baseUrl: 'common/js',
	    urlArgs: "bust=" + (new Date()).getTime(),
	    paths: {
	        jquery				: 'libs/jquery-1.11.0.min',
	        targetPath			: targetPath,
	        TMPL				: targetPath + '/templates',
	        CSS					: targetPath + '/css',
	        IMG					: targetPath + '/img'
	    },
	    shim: {
	    	jquery : {
	    		exports : '$'
	    	},
	    	jsrender	: ['jquery']
	    },
	    map: {
	    	  '*': {
	    	    'css': 'libs/css',
	    	    'text' : 'libs/text'
	    	  }
	    	}
	});


	require(['jquery', 'helper/Util', 'Router','css!CSS/default.css'], function($, $Util, $Router){
			$Router.startRouting();
	});
	
   
});