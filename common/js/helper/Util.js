define(function(){
	var compareListPos = function(index){
		var _top, _left;
		switch(index){
		case 1:
			_top = 2;
			_left = 2;
			break;
		case 2:
			_top = 2;
			_left = 52;
			break;
			
		case 3:
			_top = 52;
			_left = 2;
			break;
		case 4:
			_top = 52;
			_left = 52;
			break;
		default:
			_top = 0;
			_left = 0;
			break;
		}
		_top = _top + "%";
		_left = _left + "%";
		return {top : _top, left : _left};
		
	};
	function scrollBoxH(a, b, c){
		var scrollTitH = $(a).height();
		var scrollDivH = $(b).height();
		var scrollBoxH = parseInt(scrollDivH - scrollTitH)-20;
		$(c).height(scrollBoxH);
	}
	function test(){
		alert('test');
	}
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

	function commonDatePicker() {
		var setDatePicker = {
			dateFormat: 'yy-mm-dd',
			prevText: '◀',
			nextText: '▶',
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNames: ['일','월','화','수','목','금','토'],
			dayNamesShort: ['일','월','화','수','목','금','토'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			showMonthAfterYear: true,
			yearSuffix: '년',
			showOn: "button", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
			buttonImage: "../../resources/images/i_cal.png", // 버튼 이미지
			buttonImageOnly: true // 버튼에 있는 이미지만 표시한다.
		};

		return setDatePicker;
	}

	function replaceURLWithHTMLLinks(text) {
		var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		return text.replace(exp,"<a href='$1' class='external' target='_new' >$1</a>");
	}
	String.prototype.startsWith = function(suffix) {
		return this.indexOf(suffix) === 0;
	};
	String.prototype.endsWith = function(suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "");
	};
	String.prototype.ltrim = function() {
		return this.replace(/^\s+/, "");
	};
	String.prototype.rtrim = function() {
		return this.replace(/\s+$/, "");
	};
	String.prototype.lpad = function(padString, length) {
		var str = this;
		while (str.length < length) {
			str = padString + str;
		}
		return str;
	};
	String.prototype.rpad = function(padString, length) {
		var str = this;
		while (str.length < length) {
			str = str + padString;
		}
		return str;
	};
	String.prototype.replaceNewLine = function() {
		var a = this.replace(/</ig, "&lt;");
		a = a.replace(/>/ig, "&gt;");
		a = a.replace(/\r\n/ig, "<br>");
		a = a.replace(/\n/ig, "<br />");
//		a = a.replace(//ig, "<br />");
		return a;
	};

	String.prototype.replaceUsrId = function(orgString, replaceString) {
		console.debug(orgString + " / " + replaceString);
		var a = orgString;
		return a;
	};

	String.prototype.replaceBaseURL = function(baseURL){
		console.log(this);
		var a = this.replace(/..\/..\/..\//igm, baseURL);
		return a;
	};

	// UTF-8 인 경우 한글은 3byte 처리하여 문자열 길이 계산
	String.prototype.stringByteLength = function() {
		var text = this;
		var length = text.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length;
		return length;
	};

	// 단순 @ 문자와 이메일이 있는 경우는 @ 살아져서 안보인다..ㅠㅠ
	String.prototype.makePostContent = function(listUsers) {
	//console.log("@@ ===> " + content);
	//console.log(listUsers);
		var content = this.valueOf();
		content = content.replaceNewLine();
		
		for(var j=0;j<listUsers.length;j++) {
			var uid = listUsers[j].usr_id;
			var unm = listUsers[j].usr_nm;
			var idx = listUsers[j].usr_map_idx;
			var utp = listUsers[j].usr_tp;
			if(utp != null && utp != "CRTR" && idx != null) {
				var newHtml = "<a class='color3' href='../sns/userHome_p.html?tar_usr_id="+uid+"' title='"+unm+"'>"+unm+"</a>";
				content = content.replace('@['+unm+']', newHtml);
			}
		}
	//console.log("@@ ===> " + content);
		return content;
	};

	Date.prototype.toDatetimeInputValue = (function() {
		//toDatetimeInputValue
		//2013-10-09T15:38:00
	    var local = new Date(this);
	    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	    console.log(local.toJSON());
	    return local.toJSON().slice(0,19);
	});


	function replaceString(org, chk, chg) {
		if(replaceString != null || replaceString != "") {
			return org.replace(/\r\n/ig, "<br />");
		}
		return org;
	}

	//the date format prototype
	Date.prototype.format = function(f) {
		if (!this.valueOf())
			return ' ';

		var d = this;

		if(typeof(f) == 'undefined') {
			f = 'yyyymmdd';
		}

		return f.replace(/(yyyy|mmmm|mmm|mm|dddd|ddd|dd|hh|nn|ss|a\/p)/gi,
			function($1) {
				switch ($1.toLowerCase()) {
					case 'yyyy': return d.getFullYear();
					case 'mmmm': return gsMonthNames[d.getMonth()];
					case 'mmm':  return gsMonthNames[d.getMonth()].substr(0, 3);
					case 'mm':   return (d.getMonth() + 1).zf(2);
					case 'dddd': return gsDayNames[d.getDay()];
					case 'ddd':  return gsDayNames[d.getDay()].substr(0, 3);
					case 'dd':   return d.getDate().zf(2);
					case 'hh':   return ((h = d.getHours() % 12) ? h : 12).zf(2);
					case 'nn':   return d.getMinutes().zf(2);
					case 'ss':   return d.getSeconds().zf(2);
					case 'a/p':  return d.getHours() < 12 ? 'a' : 'p';
				}
			}
		);
	};
	Date.prototype.addDays = function(d) {
		return this.setDate(this.getDate() + d);
	};
	Date.prototype.addMonths = function(d) {
		return this.setMonth(this.getMonth() + d);
	};
	Date.prototype.addYears = function(d) {
		return this.setFullYear(this.getFullYear() + d);
	};

	String.prototype.formatTime = function() { // hh24:mi
		if (this.length == 6) { // date + time
			var hh = this.substring(8, 10);
			var mi = this.substring(10, 12);
			return hh + ":" + mi;
		} else { // only date
			var hhmi = this.lpad('0', 4); // 숫자로 900 올떄가 있음
			var hh = hhmi.substring(0, 2);
			var mi = hhmi.substring(2, 4);
			return hh + ":" + mi;
		}
	};

	String.prototype.formatDate = function() { // yyyy-mm-dd
		if (this.length == 14) {
			return this.substring(0, 8).formatDatetime();
		} else {
			return this.formatDatetime();
		}
	};

	String.prototype.formatDatetime = function() { // yyyy-mm-dd hh24:mi:ss
		if (this.length == 14) { // date + time
			var yyyy = this.substring(0, 4);
			var mm = this.substring(4, 6);
			var dd = this.substring(6, 8);
			var hh = this.substring(8, 10);
			var mi = this.substring(10, 12);
			var ss = this.substring(12, 14);
			return yyyy + "-" + mm + "-" + dd + " " + hh + ":" + mi + ":" + ss;
		} else if (this.length == 8) { // only date
			var yyyy = this.substring(0, 4);
			var mm = this.substring(4, 6);
			var dd = this.substring(6, 8);
			return yyyy + "-" + mm + "-" + dd;
		} else {// date format이 아님.
			return "";
		}
	};

	String.prototype.formatTimeDateDay = function() { // yyyy-mm-dd hh24:mi:ss
		if (this.length == 14) { // date + time
			var yyyy = this.substring(0, 4);
			var mm = this.substring(4, 6);
			var dd = this.substring(6, 8);
			var hh = this.substring(8, 10);
			var mi = this.substring(10, 12);
			var ss = this.substring(12, 14);

			var tempDate = new Date(yyyy,mm-1,dd,hh,mi,ss);
			var dy = tempDate.getDay();
//			console.log(dy);
			var dytxt = ["일","월","화","수","목","금","토"];
			dytxt[dy];

			var tpTxt = "오전";
			var nhh = hh-0;
			if(nhh > 12) {
				tpTxt = "오후";
				nhh = nhh-12;
			}
			return tpTxt + " " + nhh + ":" + mi + ", " + yyyy + "년 " + (tempDate.getMonth() +1) + "월 " + dd + "("+dytxt[dy]+")";
		} else {// date format이 아님.
			return this;
		}
	};

	String.prototype.formatPhone = function() { // yyyy-mm-dd hh24:mi:ss
		if (this.indexOf("-") > -1) { // 포맷된 체 저장된 경우.
			return this;
		}
//		String a = "010 1111 2222"; // 11 digit
//		String b = "02 365 2091"; // 9 digit
//		String c = "011 321 4193";// 10 digit

		var str = this.trim();
		if (str.length == 11) {
			var a = str.substring(0, 3);
			var b = str.substring(3, 7);
			var c = str.substring(7, 11);
			return a + "-" + b + "-" + c;
		} else if (str.length == 9) {
			var a = str.substring(0, 2);
			var b = str.substring(2, 5);
			var c = str.substring(5, 9);
			return a + "-" + b + "-" + c;
		} else if (str.length == 10) {
			var a = str.substring(0, 3);
			var b = str.substring(3, 6);
			var c = str.substring(6, 10);
			return a + "-" + b + "-" + c;
		}
	};

	String.prototype.contains = function(str) {
		return !(this.indexOf(str) == -1);
	};

	//function replaceNewLine(str) {
//		return str.replace(/\n/g, "<br />");
	//}
	/*** string String::cut(int len)
	 ** 한글도 고려하여 길이 리턴  */
	String.prototype.cut = function(len) {
		var str = this;
		var s = 0;
		for (var i=0; i<str.length; i++) {
			s += (str.charCodeAt(i) > 128) ? 2 : 1;
			if (s > len) return str.substring(0,i) + "...";
		}
		return str;
	};


	function cutByte(str, limit) {
		if(str == null || str == 'undefined' || str == '') return;
		var s = 0;
		for (var i=0; i<str.length; i++) {
			var c = escape(str.charAt(i));
			if( c.length==1 ) s ++;
			else if( c.indexOf("%u")!=-1 ) s += 2;
			else if( c.indexOf("%")!=-1 ) s += c.length/3;
		if (s > limit) return str.substring(0,i) + "...";
		}
		return str;
	}

	// Date util
	function prevMonth() {
		var thisMonth = this.getMonth();
		this.putMonth(thisMonth-1);
		if(this.getMonth() != thisMonth-1 && (this.getMonth() != 11 || (thisMonth == 11 && this.getDate() == 1)))
		this.putDate(0);
	}

	function nextMonth() {
		var thisMonth = this.getMonth();
		this.putMonth(thisMonth+1);
		if(this.getMonth() != thisMonth+1 && this.getMonth() != 0)
		this.putDate(0);
	}

	Date.prototype.nextMonth = nextMonth;
	Date.prototype.prevMonth = prevMonth;

	function LPad(Content,PadLength,PadChar) {
		var PaddedString=Content.toString();
		for(var i=Content.length+1;i<=PadLength;i++)
		{
			PaddedString=PadChar+PaddedString;
		}
		return PaddedString;
	}

	//보색을 구해서 문자열로 색상코드 리턴.. RGB #FFFFFF
	function getColorHexCode(hexStr) {
		if(hexStr == null || hexStr == "" || hexStr == undefined || hexStr.length < 6 || hexStr.length > 7)
			return "";

		var max = 16777215;
		if(hexStr.length == 7)
			hexStr = hexStr.replace("#","");

		hexStr = "0x"+ hexStr;
		var rtnValue = (max - Number(hexStr)).toString(16);
		if(rtnValue == 0)
			return "#000000";
		return "#"+LPad(rtnValue,6,"0");
	}

	// 0을 붙여서 리턴
	function addZero(num) {
		if(num == null || num == "" || num == undefined)
			return "00";
		if(num == 0 || num == "0" || num == "00")
			return "00";
		if(num < 10 && num > 0)
			return "0" + num;
		return num.toString();
	}

	//날짜 비교
	function compareDate(beforeDate, afterDate, type) {
		var tNum = 1000;
		if(type == "day")
			tNum = 86400000;
		beforeDate = beforeDate.getTime(); //1970년 1월 1일 00 시 00 분 00 초를 기준으로 한 시간으로 바꾸어줌
		afterDate = afterDate.getTime(); //1970년 1월 1일 00 시 00 분 00 초를 기준으로 한 시간으로 바꾸어줌

		var count = beforeDate - afterDate;
		count = Math.floor(count/tNum);            // 초단위 비교. 하루 비교시 (24*3600*1000)

		if(type == "day") {
			if(beforeDate != "" && afterDate != "" && count >=-1 ) { //현재일자 는 포함안할경우 -1
				return false;
			}
		}
		else
		{
			if(beforeDate != "" && afterDate != "" && count >=0 ) {
				return false;
			}
		}
		return true;
	}

	function getTimeStamp() {
		var d = new Date();

		var yyyy = d.getFullYear();
		var mm = d.getMonth() + 1;
		var dd = d.getDate();
		var hh = d.getHours();
		var mi = d.getMinutes();
		var ss = d.getSeconds();

		var ret = yyyy + "" + mm.toString().lpad('0', 2) + "" + dd.toString().lpad('0', 2) + "" + hh.toString().lpad('0', 2) + "" + mi.toString().lpad('0', 2) + "" + ss.toString().lpad('0', 2);
		return ret;
	}

	function getToDayDate() {
		var d = new Date();

		var yyyy = d.getFullYear();
		var mm = d.getMonth() + 1;
		var dd = d.getDate();

		var ret = yyyy + "-" + mm.toString().lpad('0', 2) + "-" + dd.toString().lpad('0', 2);
		return ret;
	}

	function nvl(obj, replaceStr) {
		if (obj == undefined || obj == null) {
			return replaceStr;
		} else {
			return obj;
		}
	}


	var HashMap = function() {
		this.map = {};
		this.put = function(key, value) {
			this.map[key] = value;
		};
		this.get = function(key) {
			return this.map[key] == undefined ? "" : this.map[key];
		};
		this.remove = function(key) {
			this.map[key] = null;
		};
		this.containsKey = function(key) {
			return this.map[key] != null;
		};
		this.containsValue = function(value) {
			for ( var key in this.map) {
				if (this.map[key] != null) {
					return true;
				}
			}
			return false;
		};
		this.size = function() {
			var count = 0;
			for (key in this.map) {
				count++;
			}
			return count;
		};
		this.keys = function() {
			var keyArray = [];
			for ( var key in this.map) {
				keyArray.push(key);
			}
			return keyArray;
		};
	};

	var iconMap = new HashMap();
	iconMap.put("ai", "icon_ai.png");
	iconMap.put("avi", "icon_avi.png");
	iconMap.put("bmp", "icon_bmp.png");
	iconMap.put("css", "icon_css.png");
	iconMap.put("etc", "icon_etc.png");
	iconMap.put("fla", "icon_fla.png");
	iconMap.put("htm", "icon_html.png");
	iconMap.put("html", "icon_html.png");
	iconMap.put("jpg", "icon_jpg.png");
	iconMap.put("jpeg", "icon_jpg.png");
	iconMap.put("mp3", "icon_mp3.png");
	iconMap.put("pdf", "icon_pdf.png");
	iconMap.put("php", "icon_php.png");
	iconMap.put("png", "icon_png.png");
	iconMap.put("psd", "icon_psd.png");
	iconMap.put("txt", "icon_txt.png");
	iconMap.put("wmv", "icon_wmv.png");
	iconMap.put("doc", "icon_doc.png");
	iconMap.put("xls", "icon_xls.png");
	iconMap.put("ppt", "icon_ppt.png");
	iconMap.put("docx", "icon_doc.png");
	iconMap.put("xlsx", "icon_xls.png");
	iconMap.put("pptx", "icon_ppt.png");
	iconMap.put("zip", "icon_zip.png");


	function getIcon(ext) {
		var icon = "icon_etc.png";
		if (iconMap.containsKey(ext.toLowerCase())) {
			icon = iconMap.get(ext.toLowerCase());
		}
		return icon;
	}

	//소속그룹 즐겨찾기 버튼 이미지 및 함수변경.
	function toggleFavorite(flag, obj, grp_id) {
		
		$Group.toggleFavorite({data: {grp_id: grp_id}}, function (jsonData) {
			if(flag == "FAVO") { //현재상태가 즐겨 찾기 상태일때
				$("#" + obj).children().prop("src", "../../../resources/images/btn_fav_add.png");
				$("#" + obj).children().prop("alt", "즐겨찾기 추가");
				$("#" + obj).children().prop("title", "즐겨찾기 추가");
				$("#" + obj).attr("onclick", "toggleFavorite('GRP',\"" + obj + "\",\"" + grp_id +"\")");
			} else if(flag = "GRP") {
				$("#" + obj).children().prop("src", "../../../resources/images/btn_fav_del.gif");
				$("#" + obj).children().prop("alt", "즐겨찾기 삭제");
				$("#" + obj).children().prop("title", "즐겨찾기 삭제");
				$("#" + obj).attr("onclick", "toggleFavorite('FAVO',\"" + obj + "\",\"" + grp_id +"\")");
			}
		});
	}

	String.prototype.times = function(n) {var s = '';for (var i = 0; i < n; i++) s += this; return s;};
	String.prototype.zf = function(len){return "0".times(len - this.length) + this;};
	Number.prototype.zf = function(len){return this.toString().zf(len);};

	var Map = function(){
		 this.map = new Object();
		};   
	Map.prototype = {   
	   put : function(key, value){   
	       this.map[key] = value;
	   },   
	   get : function(key){   
	       return this.map[key];
	   },
	   containsKey : function(key){    
	    return key in this.map;
	   },
	   containsValue : function(value){    
	    for(var prop in this.map){
	     if(this.map[prop] == value) return true;
	    }
	    return false;
	   },
	   isEmpty : function(key){    
	    return (this.size() == 0);
	   },
	   clear : function(){   
	    for(var prop in this.map){
	     delete this.map[prop];
	    }
	   },
	   remove : function(key){    
	    delete this.map[key];
	   },
	   keys : function(){   
	       var keys = new Array();   
	       for(var prop in this.map){   
	           keys.push(prop);
	       }   
	       return keys;
	   },
	   values : function(){   
	    var values = new Array();   
	       for(var prop in this.map){   
	        values.push(this.map[prop]);
	       }   
	       return values;
	   },
	   size : function(){
	     var count = 0;
	     for (var prop in this.map) {
	       count++;
	     }
	     return count;
	   }
	};
	
	return {
		compareListPos : compareListPos,
		scrollBoxH : scrollBoxH,
		isMobile : isMobile
		};
});