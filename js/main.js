
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

$(document).ready(function() {
  $('.popup-link').magnificPopup();
});