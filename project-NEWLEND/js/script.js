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

//Модальное окно 1 

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


//Модальное окно 2

$('[data-modal=consultation2]').on('click', function() {
    $('.overlay, #consultation2').fadeIn();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation2, #order, #thanks').fadeOut();
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
    name1: {
        required: true,
        minlength: 2
    },
    phone1: "required",
    email1: {
        required: true,
        email: true
    }
    },
    messages: {
    messenger1: {
        required: "Выберете нужный мессенджер",
    },
    name1: {
        required: "Пожалуйста, укажите ваше ФИО",
        minlength: jQuery.validator.format("Введите {0} символа!")
    },      
    phone1: "Пожалуйста, укажите свой телефон",
    email1: {
        required: "Пожалуйста, укажите свой email",
        email: "Неправильно введен email"
    }
    }
})
}
validateForms('#consultation-form');
validateForms('#order form');
validateForms('#consultation1 form');

$('input[name=phone1]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
e.preventDefault();
$.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
}).done(function() {
    $(this).find("input").val("");
    $('#consultation1, #order').fadeOut();
    $('.overlay, #thanks').fadeOut();

    $('form').trigger('reset');
});
return false;
});

// Валидация форм, маска номера и отправка писем 2

function validateForms(form){
  $(form).validate({
      rules: {
      name2: {
          required: true,
          minlength: 2
      },
      phone2: "required",
      email2: {
          required: true,
          email: true
      }
      },
      messages: {
      messenger2: {
          required: "Выберете нужный мессенджер",
      },
      name2: {
          required: "Пожалуйста, укажите ваше ФИО",
          minlength: jQuery.validator.format("Введите {0} символа!")
      },      
      phone2: "Пожалуйста, укажите свой телефон",
      email2: {
          required: "Пожалуйста, укажите свой email",
          email: "Неправильно введен email"
      }
      }
  })
  }
  validateForms('#consultation-form');
  validateForms('#order form');
  validateForms('#consultation2 form');
  
  $('input[name=phone2]').mask("+7 (999) 999-99-99");
  
  $('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation2, #order').fadeOut();
      $('.overlay, #thanks').fadeOut();
  
      $('form').trigger('reset');
  });
  return false;
  });