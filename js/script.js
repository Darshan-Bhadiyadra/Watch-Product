$(document).ready(function(){

    $('#watch-slide').owlCarousel({
        loop:true,
        // autoplay:true,   
        dots:true,
        autoplayTimeout:3000,
        autoplaySpeed:1000,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('#test-slide').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })

});

$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });