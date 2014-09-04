define(['jquery' ,'jsrender'], function ($) {
    function controllerBase(id) {
        this.id = id;
    };

    controllerBase.prototype = {
        setData: function (data) {
            this.data = data;
        },
        setTemplate: function(tmpl) {
        	this.tmpl = tmpl;
        	
        },
        render: function (selector, callback) {
        	var content = $.templates(this.tmpl).render(this.data);
        	
            $.when($(selector).html(content)).done(function(x){
            	if(callback){
            		callback(x);
            	}
            });
        },
        asyncRender : function(selector, callback){
        	var _data = this.data;
        	
        	require([this.tmpl], function(tmpl){
        		var content = $.templates(tmpl).render(_data);
                $.when($(selector).html(content)).done(function(x){
                	if(callback){
                		callback(x);
                	}
                });
        	});
        },
        asyncTmpl : function(callback){
        	require([this.tmpl], function(tmpl){
        		console.log(this.data);
        		var content = $.templates(tmpl).render(this.data);
        		return content;
        	});
        	
        }
    };

    return controllerBase;
});