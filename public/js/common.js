jQuery(document).ready(function ($) {
  // document start
  //trusted accordion
  $('.accordion-list > .accordion-list-wrap > .answer').hide();

  $('.accordion-list > .accordion-list-wrap').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > .accordion-list-wrap.active .answer").slideUp();
      $(".accordion-list > .accordion-list-wrap.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

  //offshoring slider
  $('.offshoring_slider_roll').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  //banner slider
  // $('.banner_cont_wrap_roll').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   arrows: false,
  //   autoplay: true,
  //   fade: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 3500,
  // });
  //faq accordion
  $('.faq_main > .faq_main_wrap > .faq_answer').hide();

  $('.faq_main > .faq_main_wrap').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".faq_answer").slideUp();
    } else {
      $(".faq_main > .faq_main_wrap.active .faq_answer").slideUp();
      $(".faq_main > .faq_main_wrap.active").removeClass("active");
      $(this).addClass("active").find(".faq_answer").slideDown();
    }
    return false;
  });

  setTimeout(function () { AOS.init(); }, 100);

  setInterval(function() {
    $('.rotatingText-adjective').each(function(i, el){
      el.style.animation = 'none';
      el.offsetHeight; /* trigger reflow */
      el.style.animation = null;
    });
  }, 21250);
  

  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);

  // document end
})




