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

/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Easy element scrolling using jQuery.
 * @author Ariel Flesler
 * @version 1.4.12
 */

;(function(plugin) {
    // AMD Support
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], plugin);
    } else {
        plugin(jQuery);
    }
}(function($) {

     var $scrollTo = $.scrollTo = function( target, duration, settings ) {
          return $(window).scrollTo( target, duration, settings );
     };

     $scrollTo.defaults = {
          axis:'xy',
          duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
          limit:true
     };

     // Returns the element that needs to be animated to scroll the window.
     // Kept for backwards compatibility (specially for localScroll & serialScroll)
     $scrollTo.window = function( scope ) {
          return $(window)._scrollable();
     };

     // Hack, hack, hack :)
     // Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
     $.fn._scrollable = function() {
          return this.map(function() {
               var elem = this,
                    isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

                    if (!isWin)
                         return elem;

               var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;

               return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ?
                    doc.body :
                    doc.documentElement;
          });
     };

     $.fn.scrollTo = function( target, duration, settings ) {
          if (typeof duration == 'object') {
               settings = duration;
               duration = 0;
          }
          if (typeof settings == 'function')
               settings = { onAfter:settings };

          if (target == 'max')
               target = 9e9;

          settings = $.extend( {}, $scrollTo.defaults, settings );
          // Speed is still recognized for backwards compatibility
          duration = duration || settings.duration;
          // Make sure the settings are given right
          settings.queue = settings.queue && settings.axis.length > 1;

          if (settings.queue)
               // Let's keep the overall duration
               duration /= 2;
          settings.offset = both( settings.offset );
          settings.over = both( settings.over );

          return this._scrollable().each(function() {
               // Null target yields nothing, just like jQuery does
               if (target == null) return;

               var elem = this,
                    $elem = $(elem),
                    targ = target, toff, attr = {},
                    win = $elem.is('html,body');

               switch (typeof targ) {
                    // A number will pass the regex
                    case 'number':
                    case 'string':
                         if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                              targ = both( targ );
                              // We are done
                              break;
                         }
                         // Relative/Absolute selector, no break!
                         targ = win ? $(targ) : $(targ, this);
                         if (!targ.length) return;
                    case 'object':
                         // DOMElement / jQuery
                         if (targ.is || targ.style)
                              // Get the real position of the target
                              toff = (targ = $(targ)).offset();
               }
               
               var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;
               
               $.each( settings.axis.split(''), function( i, axis ) {
                    var Pos   = axis == 'x' ? 'Left' : 'Top',
                         pos = Pos.toLowerCase(),
                         key = 'scroll' + Pos,
                         old = elem[key],
                         max = $scrollTo.max(elem, axis);

                    if (toff) {// jQuery / DOMElement
                         attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

                         // If it's a dom element, reduce the margin
                         if (settings.margin) {
                              attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
                              attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
                         }

                         attr[key] += offset[pos] || 0;

                         if(settings.over[pos])
                              // Scroll to a fraction of its width/height
                              attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
                    } else {
                         var val = targ[pos];
                         // Handle percentage values
                         attr[key] = val.slice && val.slice(-1) == '%' ?
                              parseFloat(val) / 100 * max
                              : val;
                    }

                    // Number or 'number'
                    if (settings.limit && /^\d+$/.test(attr[key]))
                         // Check the limits
                         attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

                    // Queueing axes
                    if (!i && settings.queue) {
                         // Don't waste time animating, if there's no need.
                         if (old != attr[key])
                              // Intermediate animation
                              animate( settings.onAfterFirst );
                         // Don't animate this axis again in the next iteration.
                         delete attr[key];
                    }
               });

               animate( settings.onAfter );

               function animate( callback ) {
                    $elem.animate( attr, duration, settings.easing, callback && function() {
                         callback.call(this, targ, settings);
                    });
               };

          }).end();
     };

     // Max scrolling position, works on quirks mode
     // It only fails (not too badly) on IE, quirks mode.
     $scrollTo.max = function( elem, axis ) {
          var Dim = axis == 'x' ? 'Width' : 'Height',
               scroll = 'scroll'+Dim;

          if (!$(elem).is('html,body'))
               return elem[scroll] - $(elem)[Dim.toLowerCase()]();

          var size = 'client' + Dim,
               html = elem.ownerDocument.documentElement,
               body = elem.ownerDocument.body;

          return Math.max( html[scroll], body[scroll] )
                - Math.min( html[size]  , body[size]   );
     };

     function both( val ) {
          return $.isFunction(val) || typeof val == 'object' ? val : { top:val, left:val };
     };

    // AMD requirement
    return $scrollTo;
}));


}
/*
     FILE ARCHIVED ON 17:25:17 Oct 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:42:01 Dec 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.491
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 23.69
  LoadShardBlock: 74.922 (3)
  PetaboxLoader3.datanode: 197.626 (5)
  load_resource: 290.033 (2)
  PetaboxLoader3.resolve: 103.635 (2)
*/