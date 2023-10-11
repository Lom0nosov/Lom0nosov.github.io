$(document).ready(function(){
    $('.slider').slick(
       {
           swipeToSlide: true,
           infinite: false,
           speed: 1200,
           slidesToShow: 1,
           adaptiveHeight: true,
           swipeToSlide: true,
           infinite: true,
           slidesToShow: 3,
           slidesToScroll: 3, 
           responsive: [
               {
                   breakpoint: 1200,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                   }
               },
               {
                   breakpoint: 991,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
               }
           ]
       }
    );
});

$(document).ready(function(){
    $('.slider1').slick(
       {
           swipeToSlide: true,
           infinite: false,
           speed: 1200,
           slidesToShow: 1,
           adaptiveHeight: true,
           swipeToSlide: true,
           infinite: true,
           slidesToShow: 3,
           slidesToScroll: 3, 
           responsive: [
               {
                   breakpoint: 1200,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                   }
               },
               {
                   breakpoint: 991,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
               }
           ]
       }
    );
});

//Модальные окна

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  if ($(window).width() < 576) {
    $('.overlay').on('click', function(e) {
      var modal = $('.modal');
      if (!modal.is(e.target) && modal.has(e.target).length === 0) {
        modal.fadeOut();
        $('.overlay').fadeOut();
      }
    });
  }

// Валидация форм, маска номера и отправка писем

function validateForms(form){
$(form).validate({
    rules: {
    messenger: {
        required: true,
        minlength: 2
    },
    name: {
        required: true,
        minlength: 2
    },
    phone: "required",
    email: {
        required: true,
        email: true
    }
    },
    messages: {
    messenger: {
        required: "Пожалуйста, укажите нужный мессенджер",
        minlength: jQuery.validator.format("WatsApp, Telegram, Viber, VChat")
    },
    name: {
        required: "Пожалуйста, укажите ваше ФИО",
        minlength: jQuery.validator.format("Введите {0} символа!")
    },      
    phone: "Пожалуйста, укажите свой телефон",
    email: {
        required: "Пожалуйста, укажите свой email",
        email: "Неправильно введен email"
    }
    }
})
}
validateForms('#consultation-form');
validateForms('#order form');
validateForms('#consultation form');

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
e.preventDefault();
$.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
}).done(function() {
    $(this).find("input").val("");
    $('#consultation, #order').fadeOut();
    $('.overlay, #thanks').fadeOut();

    $('form').trigger('reset');
});
return false;
});