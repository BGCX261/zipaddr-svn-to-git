/*
 *	■自動でフリガナ（ふりがな）をセットします。( autoruby.js Ver1.1 )
 *
 *	The use is free of charge. / ご利用は無料です。
 *	@demo    http://validate-js.com/
 *	@link    http://www.pierre-soft.com/
 *	@author  Tatsuro, Terunuma <info@pierre-soft.com>
 */
function Rub(){
this.cF= 1;                                       // 0:ひらがな、1:カタカナ(default)
this.k= "k";                                      // 付加記号
this.id= new Array();                             // nameに入力するとnamekにカナをセットする。
this.id[0]="name";                                // 処理対象のid名
this.id[1]="sei";
this.id[2]="mei";
this.base= new Array();
this.zen= "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォガギグゲゴザジズゼゾダヂッヅデドバパビピブプベペボポャュョヮヰヱヴヵヶー　";
this.ver= "1.1";
}
var RB= new Rub;
Rub.setruby=function(id){
	if( document.getElementById(id) ) {
		var idk= id + RB.k;                       // namek
		var d1=document.getElementById(id).value; // 入力欄
		var d2=document.getElementById(idk).value;// カナ欄
		var baseVal= RB.base[id];                 // 前の入力データ
		if( d1 == "" ) {                          // Clear
			RB.base[id]= "";
			document.getElementById(idk).value= "";
			return;
		}
		if( d1 == baseVal ) return;               // 変化なし？SKIP
		RB.base[id]= d1;                          // Save
		var ans= "";
		for( var i=baseVal.length;i>=0;i-- ) {    // 追加文字の抽出
			if( d1.substr(0,i) == baseVal.substr(0,i) ) {ans= d1.substr(i); break;}
		}
		if( ans == "" ) return;                   // 追加文字なし？SKIP
		ans= Rub.conv_kana(ans);                  // カナ変換
		if( Rub.zkana_check(ans) ) return;        // カナ以外はSKIP
		if( RB.cF == 0 ) {                        // ひらがな変換
			ans= ans.replace(/[ァ-ン]/g, function(s) {
				return String.fromCharCode(s.charCodeAt(0) - 0x60);
			});
		}
		document.getElementById(idk).value= d2 + ans; // セット
	}
};
Rub.conv_kana=function(da){                       // カナ変換
	var c,a=[];
	for( var i=da.length-1;0<=i;i-- ) {
		c= da.charCodeAt(i);
		a[i]= (0x3041 <= c && c <= 0x3096) ?  c + 0x0060 : c;
	}
	return String.fromCharCode.apply(null, a);
};
Rub.zkana_check=function(da){                     // カナ・チェック
	var ans= false;
	for(var i=0;i<da.length;i++ ) {
		var tmp1= da.substr(i,1);
		var wk= "";
		for(var j=0;j<RB.zen.length;j++ ) {
			var tmp2= RB.zen.substr(j,1);
			if( tmp1 == tmp2 )  {wk="1"; break;}
		}
		if( wk != "1" )  {ans=true; break;}
	}
	return ans;
};
Rub.ruby=function(){
	for( var i=0;i<RB.id.length;i++ ) {
		var id= RB.id[i];      Rub.named(id);
		var idk=RB.id[i]+RB.k; Rub.named(idk);
		if( document.getElementById(id) && document.getElementById(idk) ) {
			RB.base[id]= document.getElementById(id).value;
		}
		else RB.id[i]= "";                        // Reset
	}
	Rub.loopTimer();
};
Rub.loopTimer=function(){
	for( var i=0;i<RB.id.length;i++ ) {
		var id= RB.id[i];
		if( id != "" ) Rub.setruby(id);
	}
	timer= setTimeout("Rub.loopTimer()", 30);     // 30ms
};
Rub.named=function(id){                           // id名の追加
	if( id != "" && document.getElementsByName(id) && !document.getElementById(id) ) {
		var e= document.getElementsByName(id);
		if( e.length == 1 ) e[0].id= id;          // id名の付加
	}
};
if(window.addEventListener){window.addEventListener('load',Rub.ruby,true);} // ｷIE
else if(window.attachEvent){window.attachEvent('onload',Rub.ruby,true);} // IE
