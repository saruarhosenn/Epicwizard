(function ($) {
  "use strict";
  /* ======= STICKY MENU ======= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 250) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /* ====== SHOW, HIDE MENU ====== */
  $(".menu-show-btn").click(function () {
    $(".main-menu").addClass("navBar show-menu");
  });
  $(".menu-hide-btn").click(function () {
    $(".main-menu").removeClass("navBar show-menu");
  });

  /* ====== HERO SLIDER ====== */
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    margin: 16,
    nav: false,
    dots: false,
    mouseDrag: true,
    stagePadding: 50,
    items: 1,
    responsive: {
      768: {
        items: 2,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  });
})(jQuery);
