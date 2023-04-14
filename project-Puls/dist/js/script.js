  // Карусель

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false,
              }
            }  
        ]
      });

      // Переключение табов

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });   

      function toggleSlide(item){
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog__cont').eq(i).toggleClass('catalog__cont_active');
            $('.catalog__list').eq(i).toggleClass('catalog__list_active');
          })
        });
      };

      toggleSlide('.catalog__link');
      toggleSlide('.catalog__back');

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
            name: {
              required: "Пожалуйста, укажите свое имя",
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
          $('.overlay, #thanks').fadeIn();

          $('form').trigger('reset');
        });
        return false;
      });

      // Плавный скролл и возврат к началу страницы

      $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.iconup').fadeIn();
        } else {
          $('.iconup').fadeOut();
        }
      });
  
      $("a[href^=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });      

      new WOW().init();
  });
  