/*
 *	■Welcart用、郵便番号→ 住所自動入力機能の処理モジュール( welcarts.js Ver1.01 )
 *	  http://www.welcart.com/
 *	  http://zipaddr.com/
 */
//ライブラリ取得先の定義
	var Welclib= new Array();
	Welclib[0]= "";
	Welclib[1]= "https://zipaddr.googlecode.com/svn/trunk/zipaddr7.js";  // lib1
	Welclib[2]= "https://zipaddr.googlecode.com/svn/trunk/zipaddr70.js"; // lib2
	Welclib[3]= "http://zipaddr.com/js/zipaddr7.js";                     // lib3
	Welclib[4]= ""; // lib4
	Welclib[5]= ""; // lib5

//現時点で最適なシステムを選択する。
	var Welcno= 1;                                // 現状の利用ライブラリNo
//
	var Welcurl= Welclib[Welcno];                 // ライブラリのurl
	Welcurl= '<script type="text/javascript" src="'+ Welcurl +'" charset="UTF-8"></script>';
	document.write(Welcurl);                      // Load
