$(document).ready(function(){
     $('.carousel__inner').slick(
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
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>', 
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 871,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
     );
});

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (pair[0] === variable) {
            return pair[1];
        }
    }

    return false;
}


// Получение значения параметра gcpc
var a = getQueryVariable('gcpc');

// Обработка всех кнопок с классом "feedback-link"
var feedbackLinks = document.getElementsByClassName('feedback-link');
var baseFeedbackURL = "https://line-s.getcourse.ru/reg_web1"; 

for (var i = 0; i < feedbackLinks.length; i++) {
    var feedbackLink = feedbackLinks[i];
    var feedbackLinkId = feedbackLink.id;

    // Обновление ссылки с параметрами gcpc и source
    var updatedHref = baseFeedbackURL + "?gcpc=" + a + "&source=" + feedbackLinkId;
    feedbackLink.href = updatedHref;

    // Вывод информации в консоль
    console.log("Кнопка:", feedbackLink.textContent);
    console.log("Идентификатор:", feedbackLinkId);
    console.log("Ссылка:", updatedHref); // Выводим обновленную ссылку
    console.log("----------------------");
}

// Получаем все элементы с классом "video-player"
var videoPlayers = document.querySelectorAll('.video__play');

videoPlayers.forEach(function(videoPlayer) {
    var isPlaying = false;

    function toggleVideo() {
        if (isPlaying) {
            videoPlayer.pause();
        } else {
            videoPlayer.play();
        }
        isPlaying = !isPlaying;
    }

    videoPlayer.addEventListener('click', toggleVideo);
    videoPlayer.addEventListener('touchstart', toggleVideo);

    videoPlayer.addEventListener('play', function() {
        videoPlayer.addEventListener('click', toggleVideo);
        videoPlayer.addEventListener('touchstart', toggleVideo);
    });

    videoPlayer.addEventListener('pause', function() {
        videoPlayer.removeEventListener('click', toggleVideo);
        videoPlayer.removeEventListener('touchstart', toggleVideo);
    });
});

// // Добавляем обработчик события "click" к каждому видео
// videoPlayers.forEach(function(videoPlayer) {
//     videoPlayer.addEventListener('click', function() {
//         if (videoPlayer.paused) {
//             videoPlayer.play();
//         } else {
//             videoPlayer.pause();
//         }
//     });

//     // Добавляем обработчик события "click" к видео во время воспроизведения
//     videoPlayer.addEventListener('play', function() {
//         videoPlayer.addEventListener('click', function() {
//             if (videoPlayer.paused) {
//                 videoPlayer.play();
//             } else {
//                 videoPlayer.pause();
//             }
//         });
//     });

//     // Удаляем обработчик события "click" при остановке видео
//     videoPlayer.addEventListener('pause', function() {
//         videoPlayer.removeEventListener('click', null);
//     });
// });



