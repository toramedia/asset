var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var iceShare   =    {

     init :    function() {
          var platforms  =    ['facebook', 'twitter', 'linkedin', 'google_plusone_share', 'stumbleupon'];

          for(var i=0;i<platforms.length;i++) {
               var eL = document.querySelectorAll('.is-btn.'+platforms[i]);
               for(var e = 0;e<eL.length;e++) {
                    eL[e].addEventListener('click', function(ev) {
                         var p = ev.target.parentNode.getAttribute('class').split(' ')[1];
                         iceShare.share(p);
                    });
               }
          }
          this.counts();
     },

     titleText :    encodeURIComponent(document.title),

     counts    :    function() {
          this.fetch("https://web.archive.org/web/20151001172555/http://www.iceviral.com/misc/share/fetch.php?u="+window.location, function(data){
               var maps  =    [
                                        ['facebook', function(e, d) {e.innerHTML=d.Facebook.total_count;}],
                                        ['twitter', function(e, d) {e.innerHTML=d.Twitter;}],
                                        ['google_plusone_share', function(e, d) {e.innerHTML=d.GooglePlusOne;}],
                                        ['linkedin', function(e, d) {e.innerHTML=d.LinkedIn;}],
                                        ['stumbleupon', function(e, d) {e.innerHTML=d.StumbleUpon;}]
                                   ];

               for(var i=0;i<maps.length;i++){
                    var eL = document.querySelectorAll('.is-btn.'+maps[i][0]+' .count');
                    for(var e=0;e<eL.length;e++) {
                         maps[i][1](eL[e], data);
                    }
               }

          });
     },

     share     :    function(p) {
          var v ='';
          if(p=='twitter'){
               v=' via @ICEViral';
          }
          var url = 'https://web.archive.org/web/20151001172555/http://www.addthis.com/bookmark.php?v=300';
               url+='&winname=addthis';
               url+='&lng=en-GB';
               url+='&s='+p;
               url+='&url='+window.location;
               url+='&frommenu=1';
               url+='&ct=0';
               url+='&pre='+document.referrer;
               url+='&title='+this.titleText+v;
               url+='&tt=0';
               url+='&captcha_provider=nucaptcha';
               window.open(url, "", "toolbar=0, status=0, width=650, height=360");
     },

     fetch     :    function(url, c, p) {
          var xmlhttp;

          if(window.XMLHttpRequest) {
               xmlhttp=new XMLHttpRequest();
          }else{
               xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
          
          xmlhttp.onreadystatechange    =    function() {
               if(xmlhttp.readyState==4 && xmlhttp.status==200) {
                    obj  =    eval("("+xmlhttp.responseText+")");
                    c(obj);
               }
          }

          xmlhttp.open("GET",url,true);
          xmlhttp.send();
     }
}

}
/*
     FILE ARCHIVED ON 17:25:55 Oct 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:34:13 Dec 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.457
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.014
  esindex: 0.008
  cdx.remote: 36.002
  LoadShardBlock: 121.216 (3)
  PetaboxLoader3.datanode: 236.082 (5)
  PetaboxLoader3.resolve: 156.378 (3)
  load_resource: 304.474 (2)
*/