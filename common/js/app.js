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
	        jquery_ui			: 'libs/vendor/jquery-ui',
	        jquery_ui_widget	: 'libs/vendor/jquery.ui.widget',
	        jsrender 			: 'libs/jsrender',
	        Query				: 'libs/jquery.query',
	        Highcharts 			: 'libs/highcharts',
	        Cardex				: 'libs/jquery.cardex',
	        HighchartsExport 	: 'http://export.highcharts.com',
	        Navigation			: 'libs/plugins/navigation',
	        MobileNavigation 	: 'libs/plugins/mobile.navigation',
	        I2TalkCore 			: 'libs/plugins/I2talkCore',
	        AutoSize			: 'libs/plugins/jquery.autosize.min',
	        AutoSize_k			: 'libs/plugins/jquery.autosize_k',
	        FileUpload			: 'libs/plugins/jquery.fileupload',
	        UserInfo			: 'models/UserInfo',
	        HorizontalPaging	: 'libs/jquery.horizontalPaging',
	        targetPath			: targetPath,
	        TMPL				: targetPath + '/templates',
	        CSS					: targetPath + '/css',
	        IMG					: targetPath + '/img'
	    },
	    shim: {
	    	jquery : {
	    		exports : '$'
	    	},
	    	jquery_ui : {
	    		"exports": "jquery_ui",
	            "deps": [ "jquery"] 
	    	},
	    	jquery_ui_widget : {
	    		"exports": "jquery_ui_widget",
	            "deps": [ "jquery_ui"]
	    	},
	    	jsrender	: ['jquery'],
	    	Highcharts  : {
	            "exports": "Highcharts",
	            "deps": [ "jquery"] 
	        },
	        Query		: {
	            exports	: "Query",
	            "deps": [ "jquery"] 
	        },
	        Cardex		: {
	            exports	: "Cardex",
	            "deps": [ "jquery"] 
	        },
	        HighchartsExport : {
	        	HighchartsExport : "HighchartsExport",
	        	'deps' : ['jquery', 'Highcharts']
	        },
	        MobileNavigation : {
	        	exports	: "MobileNavigation",
	            "deps": [ "jquery"]
	        },
	        I2TalkCore : {
	        	exports	: "I2TalkCore",
	            "deps": [ "jquery"]
	        },
	        AutoSize : {
	        	exports : 'AutoSize',
	        	"deps" : ['jquery']
	        },
	        AutoSize_k : {
	        	exports	: "AutoSize_k",
	            "deps": [ "jquery"]
	        },
	        FileUpload : {
	        	exports	: "FileUpload",
	            "deps": [ "jquery"]
	        },
	        HorizontalPaging :{
	        	exports : 'HorizontalPaging',
	        	deps	: ['jquery']
	        	},
	        'libs/jquery.custom-scrollbar' : ['jquery'],
	        'libs/readmore/readmore.min' : ['jquery'],
	        
	    },
	    map: {
	    	  '*': {
	    	    'css': 'libs/css',
	    	    'text' : 'libs/text'
	    	  }
	    	}
	});


	require(['jquery', 'I2TalkCore', 'models/UserInfo', 'helper/Util', 'Router','css!CSS/default.css'], function($, $I2TalkCore, $UserInfo, $Util, $Router){
		$User.viewSnsUser({}, function(jsonData) {
			$UserInfo.setData(jsonData.statusInfo);
			if($Util.isMobile.any() || $Util.isMobile.anyApp()){
	    		require(['MobileNavigation'],function(){
	    			var leftBtns = [{
	            		btnTitle : "",
	            		mode : 'list',
	            		btnTitle : "메뉴보기"
	            		}];
	        		
	            	var opt = {
	            			navigationTitle : document.title,
	            			leftBtns : leftBtns
	            			};
	            	$('body').navigation(opt);
	    		});
	    		
	    	}else{
	    		require(['Navigation'],function(){
	    			console.log('web Navigation');
	    			$('body').navigation();
	    		});
	    	}
			$Router.startRouting();
		});
	});
	
   
});