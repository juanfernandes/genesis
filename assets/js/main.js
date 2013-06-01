// Responsive Slides

// Slideshow 1
$("#slider1").responsiveSlides({
  auto: false,
  pager: true,
  nav: true,
  speed: 500,
  namespace: "centered-btns"
});

// Slideshow 2
$("#slider2").responsiveSlides({
  auto: false,
  pager: true,
  nav: true,
  speed: 500,
  namespace: "transparent-btns"
});

// Slideshow 3
$("#slider3").responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  namespace: "large-btns"
});

// Flexnav
$("[role='navigation']").flexNav();


/* FitVids is a standard when it comes to resizing videos through Responsive design. It currently supports inputs from YouTube, Vimeo, Blip.tv, Viddler and Kickstarter. FitVid also offers the ability to add your own vendor as well. */

$(".container").fitVids();
// Custom selector and No-Double-Wrapping Prevention Test
$(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});