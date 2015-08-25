function Pgm(){
this.ver= "1.01";
this.gzoom= 17;          // zoom size
this.gaddr= "gaddrs";    // 住所
this.gbuken="gbukken";   // 物件名
this.gcanvs="gm_canvas"; // 表示id
this.xsize= 250;
this.ysize= 50;
}
var PG= new Pgm;

Pgm.entry=function(){
	if( typeof pgmap_own==="function" ) pgmap_own(); // own-code
    var addr= document.getElementById(PG.gaddr).value; // 住所を得る
    if( addr == "" ) return;
	if( document.getElementById(PG.gbuken) ) {
		var bukken= document.getElementById(PG.gbuken).value; // 物件名
		var content= "[ "+ bukken +" ]<br />"+ addr; // コメント
	}
	else  var content= addr;                      // コメントなしは住所
	var geocoder= new google.maps.Geocoder();
	geocoder.geocode( { 'address': addr}, function(results, sts) {
		if( sts == google.maps.GeocoderStatus.OK ) {
			var myOptions = {
				zoom     :PG.gzoom,
				center   :results[0].geometry.location,
				mapTypeId:google.maps.MapTypeId.ROADMAP
			}
			var map= new google.maps.Map(document.getElementById(PG.gcanvs), myOptions);
			map.setCenter(results[0].geometry.location);
			var marker= new google.maps.Marker({
				map     :map,
				position:results[0].geometry.location
			});
			var infowindow= new google.maps.InfoWindow({
				content:content,
				size   :new google.maps.Size(PG.xsize, PG.ysize) // 意味がない？
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}
		else  alert("Geocode was not successful for the following reason: " + sts);
    });
};
if(window.addEventListener){window.addEventListener('load',Pgm.entry,true);} // ｷIE
else if(window.attachEvent){window.attachEvent('onload',Pgm.entry,true);} // IE
