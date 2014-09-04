define(['controllers/baseController', 'models/UserInfo'], function(baseController, $UserInfo){
	function renderController(id) {
		this.id = id;
    };
    renderController.prototype = {
			render : function(settings){
				render(settings);
			},
			asyncRender : function(settings){
				asyncRender(settings);
			},
			requestAndRedner : function(settings){
				settings.object[settings.api](settings.opt, function(jsonData) {
					settings.data = jsonData;
					render(settings);
				});
			},
			asyncRequestAndRender : function(settings){
				settings.object[settings.api](settings.opt, function(jsonData) {
					settings.data = jsonData;
					asyncRender(settings);
				});
			}
    };
    function render(settings){
    	var base = new baseController(this.id);
    	if(settings.data.statusInfo){
	    	if($UserInfo.userData.usr_id == settings.data.statusInfo.usr_id){
				settings.data.statusInfo.isMine = true;
				
			}else{
				settings.data.statusInfo.isMine = false;
			}
    	}
		base.setData(settings.data);
		base.setTemplate(settings.tmpl);
		base.render(settings.selector, function(x){
			if(settings.callback){
				settings.callback(settings);
			}
		});
		
		base = null;
    }
    function asyncRender(settings){
    	var base = new baseController(this.id);
    	
    	if(settings.data.statusInfo){
	    	if($UserInfo.userData.usr_id == settings.data.statusInfo.usr_id){
				settings.data.statusInfo.isMine = true;
				
			}else{
				settings.data.statusInfo.isMine = false;
			}
    	}
		base.setData(settings.data);
		console.debug('asyncRender', settings.data);
		base.setTemplate(settings.tmpl);
		base.asyncRender(settings.selector, function(x){
			if(settings.callback){
				settings.callback(settings);
			}
		});
		
		base = null;
    }
    return renderController;
});