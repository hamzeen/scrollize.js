/**!
 * Scrollize
 * a Responsive jQuery Parallax Plugin
 *
 * a minimalist plugin that doesn't compromise this awesome
 * effect on mobile browsers & importantly, it doesn't alter or
 * introduce any new attributes to your markup expect for the
 * background position of the element(s) that you chose to do parallax.
 *
 * (c) 2016 Hamzeen Hameem
 * @website http://hamzeen.github.io
 * @version 1.0.4
 * licensed under MIT
*/
(function($) {
    $.fn.extend({

   		scrollize: function(options) {

  			var defaults = {
          initY:0,
          deltaY:0
  			};

  			var options = $.extend(defaults, options);
        var $this = $(this);

        function update(el,initY,deltaY) {
          debug($.fn);
          //special bonus for those using jQuery
          if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
          }

          var rect = el.getBoundingClientRect();
          var elHeight = rect.bottom-rect.top;

          var step = options.deltaY*1.0/elHeight;//120
          if(rect.bottom<=elHeight && rect.bottom >=0) {
            var displace = -rect.top * step;
            $this.css("background-position", "50% " + (options.initY - displace) + "px");//-108
          }
        }

        return this.each(function() {
          $(window).on("resize",function(){
            update($this,options.initY,options.deltaY);
          });
          $(window).on("scroll",function(){
            update($this,options.initY,options.deltaY);
          });
        });

        //return $this;
      } // parallax function
	});

  // private function for debugging
  function debug($obj) {
      console.log('[debug] ' + $obj);
  };

// end of closure
})(jQuery,window, document);
