
$('.header .secondButton').click(
    function () {
        $('.header .image').toggle();
        // console.log('.header .image - toggle');
        setTimeout(hideButton, 1000)        
    }
);

function hideButton() {
    $('.header .secondButton').insertBefore($('.firstButton'))
}

$(function(){
    $('.header .navigation .nav ul li a').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
        e.preventDefault();
      });
});

$(function(){
    $('#up-button').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#home').offset().top }, 1000);
        e.preventDefault();
      });
});

$(function () {
    $(".portfolio .button").on("click", function(){
      $(".popup").fadeIn(300);
    });
    
    $(".popup-overlay, .popup-box i").on("click", function(){
      $(".popup").fadeOut(300);
    });
  });

$(document).ready(function() {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});