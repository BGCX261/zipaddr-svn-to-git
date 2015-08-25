/* jzipaddr v1.4  by http://zipaddr.com/ */

var zipa_z= new Array();
var zipa_q= new Array();
var zipa_p= new Array();
var zipa_c= new Array();
var zipa_a= new Array();
for( var zipa_i=1;zipa_i<=6;zipa_i++ ) {
	var zipa_x= (zipa_i==1) ? "" : String(zipa_i);
	zipa_z[zipa_i]= "zip" +zipa_x;
	zipa_q[zipa_i]= "zip" +zipa_x+"1";
	zipa_p[zipa_i]= "pref"+zipa_x;
	zipa_c[zipa_i]= "city"+zipa_x;
	zipa_a[zipa_i]= "addr"+zipa_x;
}
var zipa_foc, zipa_min, zipa_dli;
function zipaddr_ownb(){
	ZP.zp6=zipa_z[6]; ZP.zp61=zipa_q[6]; ZP.pr6=zipa_p[6]; ZP.ci6=zipa_c[6]; ZP.ad6=zipa_a[6];
	ZP.zp5=zipa_z[5]; ZP.zp51=zipa_q[5]; ZP.pr5=zipa_p[5]; ZP.ci5=zipa_c[5]; ZP.ad5=zipa_a[5];
	ZP.zp4=zipa_z[4]; ZP.zp41=zipa_q[4]; ZP.pr4=zipa_p[4]; ZP.ci4=zipa_c[4]; ZP.ad4=zipa_a[4];
	ZP.zp3=zipa_z[3]; ZP.zp31=zipa_q[3]; ZP.pr3=zipa_p[3]; ZP.ci3=zipa_c[3]; ZP.ad3=zipa_a[3];
	ZP.zp2=zipa_z[2]; ZP.zp21=zipa_q[2]; ZP.pr2=zipa_p[2]; ZP.ci2=zipa_c[2]; ZP.ad2=zipa_a[2];
	ZP.zp= zipa_z[1]; ZP.zp1= zipa_q[1]; ZP.pr= zipa_p[1]; ZP.ci= zipa_c[1]; ZP.ad= zipa_a[1];
	ZP.focus=zipa_foc; ZP.min=zipa_min; ZP.dli=zipa_dli;
};
(function($) {
	$.fn.zipaddr6= function( opt ){
		var defaults= {'zip':"zip6",'zip1':"zip61",'pref':"pref6",'city':"city6",'addr':"addr6"};
		var s= $.extend( defaults, opt ); var n=6;
		zipa_z[n]=s.zip; zipa_q[n]=s.zip1; zipa_p[n]=s.pref; zipa_c[n]=s.city; zipa_a[n]=s.addr;
		return( this );
	}
	$.fn.zipaddr5= function( opt ){
		var defaults= {'zip':"zip5",'zip1':"zip51",'pref':"pref5",'city':"city5",'addr':"addr5"};
		var s= $.extend( defaults, opt ); var n=5;
		zipa_z[n]=s.zip; zipa_q[n]=s.zip1; zipa_p[n]=s.pref; zipa_c[n]=s.city; zipa_a[n]=s.addr;
		return( this );
	}
	$.fn.zipaddr4= function( opt ){
		var defaults= {'zip':"zip4",'zip1':"zip41",'pref':"pref4",'city':"city4",'addr':"addr4"};
		var s= $.extend( defaults, opt ); var n=4;
		zipa_z[4]=s.zip; zipa_q[4]=s.zip1; zipa_p[4]=s.pref; zipa_c[4]=s.city; zipa_a[4]=s.addr;
		return( this );
	}
	$.fn.zipaddr3= function( opt ){
		var defaults= {'zip':"zip3",'zip1':"zip31",'pref':"pref3",'city':"city3",'addr':"addr3"};
		var s= $.extend( defaults, opt ); var n=3;
		zipa_z[n]=s.zip; zipa_q[n]=s.zip1; zipa_p[n]=s.pref; zipa_c[n]=s.city; zipa_a[n]=s.addr;
		return( this );
	}
	$.fn.zipaddr2= function( opt ){
		var defaults= {'zip':"zip2",'zip1':"zip21",'pref':"pref2",'city':"city2",'addr':"addr2"};
		var s= $.extend( defaults, opt ); var n=2;
		zipa_z[n]=s.zip; zipa_q[n]=s.zip1; zipa_p[n]=s.pref; zipa_c[n]=s.city; zipa_a[n]=s.addr;
		return( this );
	}
	$.fn.zipaddr = function( opt ){
		var defaults = {
			'zip'  : "zip",  // 郵番(上3桁)のid名
			'zip1' : "zip1", // (下4桁のid名)
			'pref' : "pref", // 都道府県のid名
			'city' : "city", // 市区町村のid名
			'addr' : "addr", // 地域名のid名
			'focus': "",     // フォーカスのid名
			'min'  : "5",    // ガイダンス表示桁数(5-7)
			'dli'  : "\-"    // 郵番の区切り文字
		};
		var s= $.extend( defaults, opt ); var n=1;
		if( "5" > s.min || s.min > "7" ) s.min= "5"; // default
		zipa_z[n]=s.zip; zipa_q[n]=s.zip1; zipa_p[n]=s.pref; zipa_c[n]=s.city; zipa_a[n]=s.addr;
		zipa_foc=s.focus; zipa_min=s.min; zipa_dli=s.dli;
		$.getScript("https://zipaddr.googlecode.com/svn/trunk/zipaddr7.js");
		return( this );
	}
})(jQuery);
