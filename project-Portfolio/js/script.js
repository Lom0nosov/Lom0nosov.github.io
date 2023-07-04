$(document).ready(function(){
  // Меню
  $('div.hamburger').on('click', function() {
      $(this)
        $('div.menu').addClass('active')
    });

  $('div.menu__close').on('click', function() {
      $(this)
        $('div.menu').removeClass('active')

    });

  // Скрипт на закрытие меню при клике на любую часть 
  $('div.menu__overlay').on('click', function() {
    $(this)
      $('div.menu').removeClass('active')
  });

  // Скрытие кнопки скролла
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.up').fadeIn();
    } else {
      $('.up').fadeOut();
    }
  });

  // Плавный скролл по сайту
  $("a[href^='#']").click(function(){ 
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  // Пересчет процентов
  const percent = document.querySelectorAll('.progress__percent'),
        lines = document.querySelectorAll('.progress__rows-black .progress__rows-orange');
  percent.forEach ( (item, i) => {
      lines[i].style.width = item.innerHTML;
  });

  // Отправка формы
  $('form').submit(function(e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      form.find("input").val("");
      form.trigger('reset');
        $('.overlay').fadeIn();
        $('.overlay__text').fadeIn();
    });
    
    return false;
  });

  // Скрытие оверлэя 
  $('.overlay').on('click', function(e) {
    var modal = $('.overlay__text');
    if (!modal.is(e.target)) {
      modal.fadeOut();
      $('.overlay').fadeOut();
    }
  });

  // Анимация появления блоков 
  AOS.init();
});


