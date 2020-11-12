//------------------------------------------ Google Analytics

var author_tracking = 'Marcelo Duhalde',
date_tracking = '3 September 2020',
topic_tracking = 'China, news',
title_tracking = 'How Shenzhen became China’s Silicon Valley',
id_tracking = null;


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-6891676-1', 'auto');
ga('set', 'dimension1', 'anonymous');
ga('set', 'dimension2', date_tracking);
ga('set', 'dimension3', author_tracking);
ga('set', 'dimension4', topic_tracking);
ga('set', 'dimension5', title_tracking);
ga('send', 'pageview');

//------------------------------------------ END Google Analytics
//------------------------------------------ Chartbeat

var _sf_async_config={};
    /** CONFIGURATION START **/
    _sf_async_config.uid = 34625;
    _sf_async_config.domain = 'scmp.com';
    _sf_async_config.useCanonical = true;
    _sf_async_config.sections = 'multimedia, '+topic_tracking; 
    _sf_async_config.authors = author_tracking;
    /** CONFIGURATION END **/
    (function(){
      function loadChartbeat() {
        window._sf_endpt=(new Date()).getTime();
        var e = document.createElement('script');
        e.setAttribute('language', 'javascript');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
        document.body.appendChild(e);
      }
      var oldonload = window.onload;
      window.onload = (typeof window.onload != 'function') ?
         loadChartbeat : function() { oldonload(); loadChartbeat(); };
    })();














