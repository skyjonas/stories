$(document).ready(function(){
    
    loadHtml();
    function loadHtml(){
        $("#buildings-height").load("html/buildings.html");
    }
    
    var hook = 0.06
    
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: "#map", triggerHook:hook, duration: 4200})
						.setPin("#map")
						.addTo(controller);
    
    
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({triggerElement: "#map", triggerHook: hook, offset: 100})
                        .setClassToggle('.y1980', 'fade-out')
                        .addTo(controller);
	
    var controller = new ScrollMagic.Controller();
    var i  = 1;
    $('.y1981, .y1982, .y1983, .y1984, .y1985, .y1986, .y1987, .y1988, .y1989, .y1990, .y1991, .y1992, .y1993, .y1994, .y1995, .y1996, .y1997, .y1998, .y1999, .y2000, .y2001, .y2002, .y2003, .y2004, .y2005, .y2006, .y2007, .y2008, .y2009, .y2010, .y2011, .y2012, .y2013, .y2014, .y2015, .y2016, .y2017, .y2018, .y2019').each(function () {
        var yhook = i * 100;
        var ourScene = new ScrollMagic.Scene({triggerElement: "#map", triggerHook: hook, offset: yhook, duration: 100})
                        .setClassToggle(this, 'fade-in')
                        .addTo(controller);
                        i = i + 1;
            
    });
    
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({triggerElement: "#map", triggerHook: hook, offset: 4000})
                        .setClassToggle('.y2020', 'fade-in')
                        .addTo(controller);
    
    
    
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({triggerElement: "#ipo", triggerHook:hook, duration: 700})
						.setPin("#ipo")
						.addTo(controller);
    
    var controller = new ScrollMagic.Controller();
    var i  = 1;
    $('.ipo2015, .ipo2016, .ipo2017, .ipo2018, .ipo2019').each(function () {
        var yhook = i * 100;
        var ourScene = new ScrollMagic.Scene({triggerElement: "#ipo", triggerHook: hook, offset: yhook, duration: 100})
                        .setClassToggle(this, 'fade-in')
                        .addTo(controller);
                        i = i + 1;
    });
    
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({triggerElement: "#ipo", triggerHook: hook, offset: 600})
                        .setClassToggle('.ipo-last', 'fade-in')
                        .addTo(controller);
        
    
    
    var winWidth = $(window).width();
    var buildingsWidth;
	buildingsWidth = "-" + ((1200 / winWidth) - 1) * 100 + "%"; 
    
    if (winWidth < 1200) {
            var controller = new ScrollMagic.Controller();
            var tween = new TimelineMax()
		    .to("#buildings-height", 1, {x: buildingsWidth})
            var scene = new ScrollMagic.Scene({triggerElement: "#buildings-container", triggerHook:0.06, duration: 600})
						.setPin("#buildings-container")
                        .setTween(tween)
						.addTo(controller);
        }
    
    $(window).on('resize', function(){

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != winWidth) {

            // Update the window width for next time
            winWidth = $(window).width();

            this.location.href = this.location.href;

        }

        // Otherwise do nothing

    });
    
    
    $(window).on("orientationchange",function(event){location.reload();})
    
    
    
});
                       