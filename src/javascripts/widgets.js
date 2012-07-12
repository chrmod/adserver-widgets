/*

  nsContext widgets - ver 0.05

*/ 
(function($) {  
	$.fn.ns_slideout = function(options) {

		var defaults = {
			width: '300px',
			height: '220px',
			placement: 'http://adsearch.adkontekst.pl/_/ads0/?QAPS_AKPL=--6347-106877-#10811--&noChache=uvw04y',
			distanceTop: '900px'
		};
		
		var options = $.extend(defaults, options); 
    
    // Build widget HTML
		$('body').append("<div class='adk-fixed' id='adk-fixed'><div class='adk-top'><div class='close'></div><div class='adk-title'>REKLAMA</div></div><div class='adk-adcode'></div></div>");

    var widget = $('.adk-fixed');
		
		// Set widget size
		widget.height( options['height'] ).width( options['width'] );
			
	  // Hide widget by default
		widget.css( {right: "-"+options['width']  } );

    // Remove widget on Close Button click
		widget.find('.close').click(function(){ $(".adk-fixed").remove(); });

    // Insert Ad Script
		var script = document.createElement("script"); 
		script.setAttribute("type", "text/javascript"); 
		script.setAttribute("src", options["placement"]); 
		document.getElementsByClassName('adk-adcode')[0].appendChild(script);

    // Show widget on certain page height
		$(window).scroll(function(){
      var distanceTop = parseInt( options['distanceTop']) - $(window).height();
      if(distanceTop < 0 ) distanceTop = parseInt( options['distanceTop']);

      if  ($(window).scrollTop() > distanceTop  )
        widget.animate({'right': 0 },300);
      else
        widget.stop(true).animate({'right':'-'+options['width']},100);
    });
		
 		return this;
	};
})(jQuery);
