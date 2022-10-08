//получаю все видео и устанавливаю на паузу
let videoElList = document.querySelectorAll('.background-video');
videoElList.forEach(
    element => {
        element.pause();
    }
)

//массив с h1
let headerArr = ['Стильная архитектура и виды из окон будущей квартиры не оставят равнодушных',
    'Большие парковые территории и безопасные дворы созданы для счастливой жизни'];
//получаю основной заголовок
let mainHeader = document.querySelector('.choice-buy__header');

//записываю начальное значение активного видео
let startVideo = 0;

//функция, запускающая видео с активным классом
function activeVideo() {
    //получаю видео с активным классом
    let videoActive = document.querySelector('.background-video-active');
//включаю видео
    videoActive.play();
//замедляю видео
    videoActive.playbackRate = 0.4;
}

activeVideo();

//функция, увеличивающая значение (правая стрелка)
function videoBackgroundNext() {
    //делаю слайдер непрерывным
    if (startVideo === videoElList.length-1){
        startVideo = 0;
    }
    else {
        startVideo +=1;
    }
    //удаляю у всех плееров активный класс и класс, запрещающий анимацию
    videoElList.forEach(
        element => {
            element.classList.remove('background-video-active');
            element.classList.remove('transition_disabled');
        }
    )
    //добавляю следующему плееру активный класс
    videoElList[startVideo].classList.add('background-video-active');
    //Добавляю заголовку анимацию и изменяю его текст
    mainHeader.style.animation = 'headerOpacity 2s';
    setTimeout(
        () => {
            mainHeader.innerHTML = headerArr[startVideo];
        }, 1000
    )
    activeVideo()
}

//функция, уменьшающая значение (левая стрелка)

function videoBackgroundPrevious() {
    if (startVideo === 0){
        startVideo = videoElList.length-1;
    }
    else {
        startVideo -=1;
    }
    console.log(startVideo);
    //удаляю у всех плееров активный класс и класс, запрещающий анимацию
    videoElList.forEach(
        element => {
            element.classList.remove('background-video-active');
            element.classList.remove('transition_disabled');
        }
    )
    //добавляю предыдущему плееру активный класс
    videoElList[startVideo].classList.add('background-video-active');
    //Добавляю заголовку анимацию и изменяю его текст
    mainHeader.style.animation = 'headerOpacity 3s';
    setTimeout(
        () => {
            mainHeader.innerHTML = headerArr[startVideo];
        }, 1000
    )
    activeVideo()
}

// function func(){
//     videoEl.pause();
//     sourceVideoEl.src = videoArr[1];
//     videoEl.load();
//     videoEl.play();
//     videoEl.playbackRate = 0.4;
// }
// let videoArr = ['video/Dog%20-%2078200.mp4', 'video/Flowers%20-%2064035.mp4'];


//навешиваю функцию для изменения фона
document.querySelector('.switch-arrow__right').addEventListener(
    'click',
    videoBackgroundNext
)

document.querySelector('.switch-arrow__left').addEventListener(
    'click',
    videoBackgroundPrevious
)


//функция для смены активного класса у burger-menu
let burgerMenuEl = document.querySelector('.burger-menu');
burgerMenuEl.addEventListener(
    'click',
    () => {
        burgerMenuEl.classList.toggle('burger-menu-active');
    }
)

//получаю список элементов с количеством комнат в фильтре и назначаю класс при клике
let roomsList = document.querySelectorAll('.rooms-element');

roomsList.forEach(
    element => {
        element.addEventListener(
            'click',
            () => {
               element.classList.toggle('rooms-element-active');
            }
        )
    }
)

//для раскрытия списка с жилыми комплексами в разделе фильтров
let openSub = document.querySelector('.open-sub-list');
let buildingsListSub = document.querySelector('.buildings-list-sub');

openSub.addEventListener(
    'click',
    () => {
        openSub.classList.toggle('active');
        buildingsListSub.classList.toggle('active');
    }
)

//элемент, куда будет выводиться название ЖК, выбранное при клике по списку
let buildingsMainEl = document.querySelector('.buildings-name');

//выбираю элемент списка и устанавливаю его первым
buildingsListSub.addEventListener(
    'click',
    (event) => {
        if (event.target.classList.contains('buildings-element-sub')){
            let firstEl = buildingsMainEl.textContent;
            let changedEl =  event.target.textContent;
            buildingsMainEl.textContent = changedEl;
            event.target.textContent = firstEl;
            openSub.classList.remove('active');
            buildingsListSub.classList.remove('active');
        }
}
)