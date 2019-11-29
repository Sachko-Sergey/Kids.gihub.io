$('document').ready(function() {
  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-prev  left-arrow"><img src="img/slider-img/arrow_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next  right-arrow"><img src="img/slider-img/arrow_right.png"></button>'
  });

  $('.teachers-slider').slick({
    prevArrow: '<button type="button" class="slick-prev  left-arrow  left-arrow-t"><img src="img/slider-img/arrow_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next  right-arrow  right-arrow-t"><img src="img/slider-img/arrow_right.png"></button>',
    slidesToShow: 4,
  });

  $(".tab_item").not(":first").hide();
  $(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  
   // $('.image-popup').magnificPopup({
   //    type: 'image',
   //    zoom: {
   //       enabled: true,
   //       duration: 300,
   //       gallery: {
   //          enabled: true,
   //          navigateByImgClick: true,
   //          preload: [0, 8]
   //       }
   //    }
   // });


      $('.fancybox').fancybox({
         padding: 0,
         openEffect: 'elastic',
         helpers: {
            overlay: {
               css: {
                  'background': 'rgba(0 ,0 ,0, 0.5)'
               }
            }
         }
      });
   

});