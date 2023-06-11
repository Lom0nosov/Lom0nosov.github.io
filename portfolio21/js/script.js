$('div.promo__buttons').on('click', 'a:not(.btn)', function() {
    $(this)
      .addClass('btn').siblings().removeClass('btn')
      .closest('div.promo__buttons').find('a.promo__link').removeClass('btn').eq($(this).index()).addClass('btn');
  });

$('div.hamburger').on('click', function() {
    $(this)
      $('div.menu').addClass('active')
  });

$('div.menu__close').on('click', function() {
    $(this)
      $('div.menu').removeClass('active')

  });

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $('.up').fadeIn();
  } else {
    $('.up').fadeOut();
  }
});
  
$("a[href^='#']").click(function(){ 
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});

const percent = document.querySelectorAll('.progress__percent'),
      lines = document.querySelectorAll('.progress__rows-black .progress__rows-orange');
percent.forEach ( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    // $('#consultation, #order').fadeOut();
    // $('.overlay, #thank').fadeIn();

    $('form').trigger('reset');
  });
  return false;
});

// Вариант написания на чистом JS
// const hamburger = document.querySelector('.hamburger'),
//       menu = document.querySelector('.menu'),
//       close = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// close.addEventListener('click', () => {
//   menu.classList.remove('active');
// });
