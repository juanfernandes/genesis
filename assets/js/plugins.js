// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// /*! Tab.js */
// (function ($) {
//   // hash change handler
//   function hashchange () {
//     var hash = window.location.hash
//       , el = $('ul.tabs [href*="' + hash + '"]')
//       , content = $(hash)

//     if (el.length && !el.hasClass('active') && content.length) {
//       el.closest('.tabs').find('.active').removeClass('active');
//       el.addClass('active');
//       content.show().addClass('active').siblings().hide().removeClass('active');
//     }
//   }

//   // listen on event and fire right away
//   $(window).on('hashchange.skeleton', hashchange);
//   hashchange();
//   $(hashchange);
// })(jQuery);

/*! Tab.js */
(function ($) {
  // hash change handler
  function hashchange () {
    // checks to see if tab panels exists, if so, hides all panels except the active one.
    if ($('.tabsContent').length != 0){
      $($('.tabsContent li').not('.active')).css('display','none');
    }
    var hash = window.location.hash
      , el = $('.tabs [href*="' + hash + '"]')
      , content = $(hash)

    if (el.length && !el.hasClass('active') && content.length) {
      el.closest('.tabs').find('.active').removeClass('active');
      el.addClass('active');
      content.show().addClass('active').siblings().hide().removeClass('active');
    }
  }

  // listen on event and fire right away
  $(window).on('hashchange', hashchange);
  hashchange();
  $(hashchange);
})(jQuery);

/*! http://responsiveslides.com v1.32 by @viljamis */
(function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1E3,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var e=d(this),n,p,i,k,l,m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",
o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before();f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A);b.after();m=a})};b.random&&(f.sort(function(){return Math.round(Math.random())-0.5}),e.empty().append(f));f.each(function(a){this.id=z+a});e.addClass(c+" "+g);h&&h.maxwidth&&e.css("max-width",r);f.hide().eq(0).addClass(j).css(A).show();if(1<
f.size()){if(x<q+100)return;if(b.pager){var u=[];f.each(function(a){a=a+1;u=u+("<li><a href='#' class='"+z+a+"'>"+a+"</a></li>")});o.append(u);l=o.find("a");h.controls?d(b.controls).append(o):e.after(o);n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}b.auto&&(p=function(){k=setInterval(function(){f.stop(true,true);var a=m+1<w?m+1:0;b.pager&&n(a);t(a)},x)},p());i=function(){if(b.auto){clearInterval(k);p()}};b.pause&&e.hover(function(){clearInterval(k)},function(){i()});b.pager&&(l.bind("click",
function(a){a.preventDefault();b.pauseControls||i();a=l.index(this);if(!(m===a||d("."+j+":animated").length)){n(a);t(a)}}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()}));if(b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>";h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){a.preventDefault();if(!d("."+j+":animated").length){var c=
f.index(d("."+j)),a=c-1,c=c+1<w?m+1:0;t(d(this)[0]===B[0]?a:c);b.pager&&n(d(this)[0]===B[0]?a:c);b.pauseControls||i()}});b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"===typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%");e.width()>r&&e.css("width",r)};C();d(D).bind("resize",function(){C()})}})}})(jQuery,this,0);

/*!
* FlexNav.js 0.3 * Copyright 2012, Jason Weaver http://jasonweaver.name
*/
(function($){$.fn.flexNav=function(options){var settings=$.extend({'breakpoint':'800','animationSpeed':'fast'},options);var $this=$(this);var resizer=function(){if($(window).width()<settings.breakpoint){$("body").removeClass("lg-screen").addClass("sm-screen")}else{$("body").removeClass("sm-screen").addClass("lg-screen")}if($(window).width()>=settings.breakpoint){$this.show()}};resizer();function is_touch_device(){return!!('ontouchstart'in window)}if(is_touch_device()){$('html').addClass('flexNav-touch')}else{$('html').addClass('flexNav-no-touch')}$('.menu-button').click(function(){$this.slideToggle(settings.animationSpeed)});$this.find('a').click(function(){$this.hide()});$('.item-with-ul').click(function(){$(this).find('.sub-menu').slideToggle(settings.animationSpeed)});$(window).on('resize',resizer)}})(jQuery);


/*
* FitVids 1.0
*/
(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null},r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];r.className="fit-vids-style";r.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";i.parentNode.insertBefore(r,i);t&&e.extend(n,t);return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)return;var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(jQuery);

/** 2 - jQuery.ScrollTo
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.5b
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/** 3 - jQuery.LocalScroll
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.2.9b
 */
;(function($){var h=location.href.replace(/#.*/,'');var i=$.localScroll=function(a){$('body').localScroll(a)};i.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window,reset:true};i.hash=function(a){if(location.hash){a=$.extend({},i.defaults,a);a.hash=false;if(a.reset){var d=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=d}scroll(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},i.defaults,b);return b.lazy?this.bind(b.event,function(e){var a=$([e.target,e.target.parentNode]).filter(filter)[0];if(a)scroll(e,a,b)}):this.find('a,area').filter(filter).bind(b.event,function(e){scroll(e,this,b)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==h&&(!b.filter||$(this).is(b.filter))}};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(':animated')||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop)d._scrollable().stop(true);if(b.hash){var f=b.offset;f=f&&f.top||f||0;var g=elem.id==c?'id':'name',$a=$('<a> </a>').attr(g,c).css({position:'absolute',top:$(window).scrollTop()+f,left:$(window).scrollLeft()});elem[g]='';$('body').prepend($a);location=a.hash;$a.remove();elem[g]=c}d.scrollTo(elem,b).trigger('notify.serialScroll',[elem])}})(jQuery);


/*! 4 - responsive-nav.js v1.13 by @viljamis, http://responsive-nav.com, MIT license */
var responsiveNav=function(g,j){var u=!!g.getComputedStyle;g.getComputedStyle||(g.getComputedStyle=function(a){this.el=a;this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;"float"===b&&(b="styleFloat");c.test(b)&&(b=b.replace(c,function(a,b,c){return c.toUpperCase()}));return a.currentStyle[b]?a.currentStyle[b]:null};return this});var d,f,e,v=j.documentElement,w=j.getElementsByTagName("head")[0],n=j.createElement("style"),s=!1,k=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,
c,d)}catch(e){if("object"===typeof c&&c.handleEvent)a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e;}else"attachEvent"in a&&("object"===typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},l=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"===typeof c&&c.handleEvent)a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e;}else"detachEvent"in a&&("object"===
typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},m=function(a,b){for(var c in b)a.setAttribute(c,b[c])},p=function(a,b){a.className+=" "+b;a.className=a.className.replace(/(^\s*)|(\s*$)/g,"")},q=function(a,b){a.className=a.className.replace(RegExp("(\\s|^)"+b+"(\\s|$)")," ").replace(/(^\s*)|(\s*$)/g,"")},h=function(){},t=function(a,b){var c;this.options={animate:!0,transition:400,label:"Menu",insert:"after",customToggle:"",openPos:"relative",
jsClass:"js",debug:!1,init:function(){},open:function(){},close:function(){}};for(c in b)if(c in this.options)this.options[c]=b[c];else throw Error("Responsive Nav doesn't support option: "+c);p(v,this.options.jsClass);this.options.debug&&(h=function(a){try{console.log(a)}catch(b){alert(a)}});this.wrapperEl=a.replace("#","");if(j.getElementById(this.wrapperEl))this.wrapper=j.getElementById(this.wrapperEl);else throw Error("The nav element you are trying to select doesn't exist");c=this.wrapper;for(var e=
this.wrapper.firstChild;null!==e&&1!==e.nodeType;)e=e.nextSibling;c.inner=e;f=this.options;d=this.wrapper;this._init(this)};t.prototype={destroy:function(){this._removeStyles();q(d,"closed");q(d,"opened");d.removeAttribute("style");d.removeAttribute("aria-hidden");r=d=null;l(g,"load",this,!1);l(g,"resize",this,!1);l(e,"mousedown",this,!1);l(e,"touchstart",this,!1);l(e,"touchend",this,!1);l(e,"keyup",this,!1);l(e,"click",this,!1);f.customToggle?e.removeAttribute("aria-hidden"):e.parentNode.removeChild(e);
h("Destroyed!")},toggle:function(){s?(q(d,"opened"),p(d,"closed"),m(d,{"aria-hidden":"true"}),f.animate?setTimeout(function(){d.style.position="absolute"},f.transition+10):d.style.position="absolute",s=!1,f.close(),h("Closed nav")):(q(d,"closed"),p(d,"opened"),d.style.position=f.openPos,m(d,{"aria-hidden":"false"}),s=!0,f.open(),h("Opened nav"))},handleEvent:function(a){a=a||g.event;switch(a.type){case "mousedown":this._onmousedown(a);break;case "touchstart":this._ontouchstart(a);break;case "touchend":this._ontouchend(a);
break;case "keyup":this._onkeyup(a);break;case "click":this._onclick(a);break;case "load":this._transitions(a);this._resize(a);break;case "resize":this._resize(a)}},_init:function(){h("Inited Responsive Nav");p(d,"closed");this._createToggle();k(g,"load",this,!1);k(g,"resize",this,!1);k(e,"mousedown",this,!1);k(e,"touchstart",this,!1);k(e,"touchend",this,!1);k(e,"keyup",this,!1);k(e,"click",this,!1)},_createStyles:function(){n.parentNode||(w.appendChild(n),h("Created 'styleElement' to <head>"))},
_removeStyles:function(){n.parentNode&&(n.parentNode.removeChild(n),h("Removed 'styleElement' from <head>"))},_createToggle:function(){if(f.customToggle){var a=f.customToggle.replace("#","");if(j.getElementById(a))e=j.getElementById(a),h("Custom nav toggle created");else throw Error("The custom nav toggle you are trying to select doesn't exist");}else a=j.createElement("a"),a.innerHTML=f.label,m(a,{href:"#",id:"nav-toggle"}),"after"===f.insert?d.parentNode.insertBefore(a,d.nextSibling):d.parentNode.insertBefore(a,
d),e=j.getElementById("nav-toggle"),h("Default nav toggle created")},_preventDefault:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):a.returnValue=!1},_onmousedown:function(a){var b=a||g.event;3===b.which||2===b.button||(this._preventDefault(a),this.toggle(a))},_ontouchstart:function(a){e.onmousedown=null;this._preventDefault(a);this.toggle(a)},_ontouchend:function(){var a=this;d.addEventListener("click",a._preventDefault,!0);setTimeout(function(){d.removeEventListener("click",
a._preventDefault,!0)},f.transition)},_onkeyup:function(a){13===(a||g.event).keyCode&&this.toggle(a)},_onclick:function(a){this._preventDefault(a)},_transitions:function(){if(f.animate){var a=d.style,b="max-height "+f.transition+"ms";a.WebkitTransition=b;a.MozTransition=b;a.OTransition=b;a.transition=b}},_calcHeight:function(){var a=d.inner.offsetHeight,b="#"+this.wrapperEl+".opened{max-height:"+a+"px}";u&&(n.innerHTML=b);h("Calculated max-height of "+a+"px and updated 'styleElement'")},_resize:function(){"none"!==
g.getComputedStyle(e,null).getPropertyValue("display")?(m(e,{"aria-hidden":"false"}),d.className.match(/(^|\s)closed(\s|$)/)&&(m(d,{"aria-hidden":"true"}),d.style.position="absolute"),this._createStyles(),this._calcHeight()):(m(e,{"aria-hidden":"true"}),m(d,{"aria-hidden":"false"}),d.style.position=f.openPos,this._removeStyles());f.init()}};var r;return function(a,b){r||(r=new t(a,b));return r}}(window,document);
