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

  // // Графики
  // $(document).ready(function(){
  //   $('#skills__btn').click(function(){
  //       $('#graph').toggle();
  //   });
  // });

});

// Функция для сравнения значений и вывода вероятности образования ливня и грозы
function compareAndBuild() {
  // Получаем значения, введенные пользователем
  var userValues = [];
  for (var i = 1; i <= 5; i++) {
    var userInput = parseFloat(document.getElementById('value' + i).value);
    if (isNaN(userInput)) {
      alert("Пожалуйста, введите числовые значения.");
      return;
    }
    userValues.push(userInput);
  }

  // Переменные для вероятностей
  var probabilityRain = 0;
  var probabilityThunderstorm = 0;

  // Сравниваем значения с заданными условиями для ливня
  if (userValues[0] < -1 && userValues[1] > 170 && userValues[2] > 31 && userValues[3] > 48 && userValues[4] > 200) {
    probabilityRain = 50;
  }

  if (userValues[0] < -2 && userValues[1] > 200 && userValues[2] > 33 && userValues[3] > 49 && userValues[4] > 400) {
    probabilityRain = 70;
  }

  if (userValues[0] < -4 && userValues[1] > 240 && userValues[2] > 36 && userValues[3] > 52 && userValues[4] > 900) {
    probabilityRain = 90;
  }

  // Сравниваем значения с заданными условиями для грозы
  if (userValues[0] < -3 && userValues[1] > 190 && userValues[2] > 32 && userValues[3] > 49 && userValues[4] > 350) {
    probabilityThunderstorm = 50;
  }

  if (userValues[0] < -4 && userValues[1] > 220 && userValues[2] > 35 && userValues[3] > 51 && userValues[4] > 700) {
    probabilityThunderstorm = 70;
  }

  if (userValues[0] < -6 && userValues[1] > 280 && userValues[2] > 37 && userValues[3] > 53 && userValues[4] > 1300) {
    probabilityThunderstorm = 90;
  }

  // Выводим результаты
  var result = "";
  if (probabilityRain > 0 && probabilityThunderstorm > 0) {
    result = "Вероятность образования ливня и грозы " + probabilityRain + "% и " + probabilityThunderstorm + "%";
  } else if (probabilityRain > 0) {
    result = "Вероятность образования ливня " + probabilityRain + "%";
  } else if (probabilityThunderstorm > 0) {
    result = "Вероятность образования грозы " + probabilityThunderstorm + "%";
  } else {
    result = "Введенные значения не подходят для определения вероятности образования ливня и грозы.";
  }

  document.getElementById('result').innerHTML = result;

  // Строим графики
  buildChart(defaultValues1, defaultValues2, defaultValues3, defaultValues4, userValues);
}


// Параметры, заданные заранее
var defaultValues1 = [-1.5, 195, 32, 49, 551];
var defaultValues2 = [-1.7, 207, 33, 49, 620];
var defaultValues3 = [-0.3, 171, 30, 47, 350];
var defaultValues4 = [-1.6, 199, 32, 49, 577];

// Функция для построения графиков
function buildChart(defaultValues1, defaultValues2, defaultValues3, defaultValues4, userValues) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['LIFT', 'SWEAT', 'KIND', 'TOTL', 'CAPE'],
      datasets: [{
        label: 'Отдельные грозы',
        data: defaultValues1,
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 1
      }, {
        label: 'Повсеместные грозы',
        data: defaultValues2,
        backgroundColor: 'rgba(255, 0, 255, 0.2)',
        borderColor: 'rgba(255, 0, 255, 1)',
        borderWidth: 1
      },{
        label: 'Ливень',
        data: defaultValues3,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },{
        label: 'Гроза с ливнем',
        data: defaultValues4,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1
      },{
        label: 'Актуальная погода',
        data: userValues,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
