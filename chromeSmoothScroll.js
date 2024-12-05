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

/**
 * [chromeSmoothScroll Smooth scrolling for Chrome browser]
 * @return {[usage]} [ chromeSmoothScroll.init(); ]
 * @author Habib Hadi
 * @website http://habibhadi.com
 * @email me [at] habibhadi.com
 */

var chromeSmoothScroll = function(){

     var settings = {
          counter            : 0,
          minVal             : 0,
          maxVal             : $(window).height() + 500,
          scrolling          : null,
          speed              : 800,
          offset             : 100,
          scrollHappen       : false,
          animTimeOut        : 50,
          mainTriggerElem    : 'html',
          animateTriggerElem : 'html, body',
          tempPos                : 0,
          animating         : false,
          updatedMaxVal      : false
     },

     init = function(){
          if( !isChrome() ) return false;

          $(settings.mainTriggerElem).bind('mousewheel', function(e){ 
               e.preventDefault();
               if(!settings.updatedMaxVal) updateMaxVal();

               if( settings.scrollHappen == false && $(window).scrollTop() != 0 ) updateCounter();
               settings.scrollHappen = true;

               if( e.originalEvent.wheelDelta  > 0 ) settings.counter--;
               else if( e.originalEvent.wheelDelta  < 0 ) settings.counter++;

               if( settings.counter < settings.minVal ) settings.counter = 0;
               else if( settings.counter * settings.offset > settings.maxVal ) settings.counter = settings.maxVal / settings.offset;

               if( settings.tempPos != settings.counter ) doScroll();

          });

          $(window).scroll(function(event) {
               if( settings.animating == false ) {
                    var updateTimeout = null;
                    clearTimeout(updateTimeout);
                    updateTimeout = setTimeout(updateCounter, 1000);
               }
          });

          keyboard();
          
     },

     updateMaxVal = function(){
          settings.maxVal = $(document).height() < $(window).height() ? $(window).height() : $(document).height();
          settings.updatedMaxVal = true;
     },

     updateCounter = function(){
          settings.counter = $(window).scrollTop() / settings.offset;
     },

     doScroll = function(){
          clearTimeout(settings.scrolling);
          settings.scrolling = setTimeout(function(){
               settings.animating = true;
               $(settings.animateTriggerElem).stop().animate({ 
                    scrollTop: settings.counter * settings.offset 
               }, settings.speed, 
               function(){ 
                    settings.tempPos = settings.counter; 
                    settings.animating = false;
               });
          }, settings.animTimeOut);
     },

     isChrome = function(){
          return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
     },

     keyboard = function(){
          $(settings.mainTriggerElem).keydown(function (e) {
              switch (e.which) {
                  case 38:
                      $(settings.animateTriggerElem).stop().animate({
                          scrollTop: $(window).scrollTop() - settings.offset * 2
                      }, settings.speed);
                      break;

                  case 40:
                      $(settings.animateTriggerElem).stop().animate({
                          scrollTop: $(window).scrollTop() + settings.offset * 2
                      }, settings.speed);
                      break;
              }
              
              if(e.which == 38 || e.which == 40) return false;
          });
     };

     return { init : init };
}();

}
/*
     FILE ARCHIVED ON 17:48:34 Oct 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:42:50 Dec 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.638
  exclusion.robots: 0.045
  exclusion.robots.policy: 0.033
  esindex: 0.012
  cdx.remote: 4.621
  LoadShardBlock: 173.529 (3)
  PetaboxLoader3.datanode: 104.509 (5)
  load_resource: 200.256 (2)
  PetaboxLoader3.resolve: 95.841 (2)
*/