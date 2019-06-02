
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
  $('.popup-btn').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    items: [
        {
          src: 'http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg'
        },
        {
          src: 'http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg'
        },
        {
          src: 'http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg'
        },
        {
          src: 'http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg'
        },
        {
          src: 'http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg'
        },
        {
          src: 'http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg'
        },
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });
});