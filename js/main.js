$(document).ready(function() {
  $("#owl-demo").owlCarousel({
 
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 1000
  });
});


$(document).ready(function() {
  $("#owl-demo2").owlCarousel({
 
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 1000
  });
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 1)
    {  
        $(".header-class").addClass("transformed");
    }
    else
    {
        $(".header-class").removeClass("transformed");
    }
});
