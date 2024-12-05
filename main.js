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


function header_one() {
     $('.animatedCloud1').delay(500).animate({
          marginLeft: '30px'
     }, 1000, 'linear', header_two);
     $('.animatedCloud2').delay(500).animate({
          marginLeft: '-10px',
          marginTop: '10px'
     }, 1000, 'linear');
     $('.animatedPolar').delay(500).animate({
          marginLeft: '55px'
     }, 1000, 'linear');
     $('.animatedPenguin').delay(500).animate({
          marginLeft: '705px'
     }, 1000, 'linear');
     $('.iceFlag').delay(500).animate({
          marginLeft: '555px'
     }, 1000, 'linear');
}

function header_two() {
     $('.animatedCloud1').delay(500).animate({
          marginLeft: '0px'
     }, 1000, 'linear', header_one);
     $('.animatedCloud2').delay(500).animate({
          marginLeft: '0px',
          marginTop: '0px'
     }, 1000, 'linear');
     $('.animatedPolar').delay(500).animate({
          marginLeft: '50px'
     }, 1000, 'linear');
     $('.animatedPenguin').delay(500).animate({
          marginLeft: '700px'
     }, 1000, 'linear');
     $('.iceFlag').delay(500).animate({
          marginLeft: '560px'
     }, 1000, 'linear');
}

function logo() {
     $('.logo').delay(500).animate({marginTop : '5px'}, 1000, 'linear', logoSecond);
}
     
function logoSecond() {
     $('.logo').delay(500).animate({marginTop : '0px'}, 1000, 'linear', logo);
}

function logo_cogs() {
     var angle = 0;
     var angle2 = 0;
     var angle3 = 0;
     var angle4 = 0;
     var angle5 = 0;
     setInterval(function() {
          angle += 1;
          $('.logoCog1').rotate(angle);
          angle2 -= 1;
          $('.logoCog2').rotate(angle2);
          angle3 -= 1;
          $('.logoCog3').rotate(angle3);
          angle4 += 4;
          $('.logoCog4').rotate(angle4);
          angle5 -= 2;
          $('.logoCog5').rotate(angle5);
     }, 70);
}

function do_animation() {
     if($(document).width()>750) {
          header_one();
          logo_cogs();
          logo();
     }
}

function toggleNav(nav) {

     $('nav.nav ul li.active').attr('class', '');

     $('nav.sub').each(function(i, obj){
          if($(obj).attr('id')!='navSub'+nav) {
               $(obj).hide();
          }
     });

     if($(document).width()<750) {
          $('#navSub'+nav).animate({display: 'block', width:'50%'});
     }else{
          $('#nav'+nav).attr('class','active');
          $('#navSub'+nav).slideDown();
     }
     
}

var burger_state    =    'closed';
function toggleBurger() {
     if(burger_state==='closed') {
          $('nav.nav ul').animate({width:'50%'});
          burger_state   =    'open';
     }else{
          $('nav.nav ul').animate({width:'0%'});
          $('nav.sub').animate({width:'0%'});
          burger_state   =    'closed';
     }
}

}
/*
     FILE ARCHIVED ON 21:12:21 Oct 08, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:29:41 Dec 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.519
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.016
  esindex: 0.009
  cdx.remote: 7.136
  LoadShardBlock: 143.215 (3)
  PetaboxLoader3.datanode: 122.542 (5)
  PetaboxLoader3.resolve: 170.303 (3)
  load_resource: 198.674 (2)
*/