"use strict";

//фиксирую изменение экрана
var videoArr = document.querySelectorAll('.background-video');
var backgroundImageEl = document.querySelector('.background-image');

function changeBackground() {
  if (window.innerWidth <= 768) {
    videoArr.forEach(function (element) {
      element.style.display = 'none';
    });
    backgroundImageEl.style.display = 'block';
  } else {
    videoArr.forEach(function (element) {
      element.style.display = 'block';
    });
    backgroundImageEl.style.display = 'none';
  }
} //запускаю функцию сразу, как только DOM загрузится


document.addEventListener('DOMContentLoaded', changeBackground); //запускаю функцию при каждом изменении размеров экрана

window.addEventListener('resize', changeBackground); //получаю все видео и устанавливаю на паузу

var videoElList = document.querySelectorAll('.background-video');
videoElList.forEach(function (element) {
  element.pause();
}); //массив с h1

var headerArr = ['Стильная архитектура и виды из окон будущей квартиры не оставят равнодушных', 'Большие парковые территории и безопасные дворы созданы для счастливой жизни']; //получаю основной заголовок

var mainHeader = document.querySelector('.choice-buy__header'); //записываю начальное значение активного видео

var startVideo = 0; //функция, запускающая видео с активным классом

function activeVideo() {
  //получаю видео с активным классом
  var videoActive = document.querySelector('.background-video-active'); //включаю видео

  videoActive.play(); //замедляю видео

  videoActive.playbackRate = 0.4;
}

activeVideo(); //функция, увеличивающая значение (правая стрелка)

function videoBackgroundNext() {
  //делаю слайдер непрерывным
  if (startVideo === videoElList.length - 1) {
    startVideo = 0;
  } else {
    startVideo += 1;
  } //удаляю у всех плееров активный класс и класс, запрещающий анимацию


  videoElList.forEach(function (element) {
    element.classList.remove('background-video-active');
    element.classList.remove('transition_disabled');
  }); //добавляю следующему плееру активный класс

  videoElList[startVideo].classList.add('background-video-active'); //Добавляю заголовку анимацию и изменяю его текст

  mainHeader.style.animation = 'headerOpacity 2s';
  setTimeout(function () {
    mainHeader.innerHTML = headerArr[startVideo];
  }, 1000);
  activeVideo();
} //функция, уменьшающая значение (левая стрелка)


function videoBackgroundPrevious() {
  if (startVideo === 0) {
    startVideo = videoElList.length - 1;
  } else {
    startVideo -= 1;
  }

  console.log(startVideo); //удаляю у всех плееров активный класс и класс, запрещающий анимацию

  videoElList.forEach(function (element) {
    element.classList.remove('background-video-active');
    element.classList.remove('transition_disabled');
  }); //добавляю предыдущему плееру активный класс

  videoElList[startVideo].classList.add('background-video-active'); //Добавляю заголовку анимацию и изменяю его текст

  mainHeader.style.animation = 'headerOpacity 3s';
  setTimeout(function () {
    mainHeader.innerHTML = headerArr[startVideo];
  }, 1000);
  activeVideo();
} // function func(){
//     videoEl.pause();
//     sourceVideoEl.src = videoArr[1];
//     videoEl.load();
//     videoEl.play();
//     videoEl.playbackRate = 0.4;
// }
// let videoArr = ['video/Dog%20-%2078200.mp4', 'video/Flowers%20-%2064035.mp4'];
//навешиваю функцию для изменения фона


document.querySelector('.switch-arrow__right').addEventListener('click', videoBackgroundNext);
document.querySelector('.switch-arrow__left').addEventListener('click', videoBackgroundPrevious); //функция для смены активного класса у burger-menu

var burgerMenuEl = document.querySelector('.burger-menu');
var menuEl = document.querySelector('.menu');
burgerMenuEl.addEventListener('click', function () {
  burgerMenuEl.classList.toggle('burger-menu-active');
  menuEl.classList.toggle('menu-active');
}); //получаю список элементов с количеством комнат в фильтре и назначаю класс при клике

var roomsList = document.querySelectorAll('.rooms-element');
roomsList.forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.toggle('rooms-element-active');
  });
}); //для раскрытия списка с жилыми комплексами в разделе фильтров

var openSub = document.querySelector('.open-sub-list');
var buildingsListSub = document.querySelector('.buildings-list-sub');
openSub.addEventListener('click', function () {
  openSub.classList.toggle('active');
  buildingsListSub.classList.toggle('active');
}); //элемент, куда будет выводиться название ЖК, выбранное при клике по списку

var buildingsMainEl = document.querySelector('.buildings-name'); //выбираю элемент списка и устанавливаю его первым

buildingsListSub.addEventListener('click', function (event) {
  if (event.target.classList.contains('buildings-element-sub')) {
    var firstEl = buildingsMainEl.textContent;
    var changedEl = event.target.textContent;
    buildingsMainEl.textContent = changedEl;
    event.target.textContent = firstEl;
    openSub.classList.remove('active');
    buildingsListSub.classList.remove('active');
  }
}); //создаю ползунки с диапазоном для площади

var squareRangeEl = document.querySelector('.range-square');
noUiSlider.create(squareRangeEl, {
  start: [20, 80],
  connect: true,
  step: 1,
  padding: 2,
  range: {
    'min': 0,
    'max': 100
  }
}); //изменяю значения в полях с площадью - использую настройки из плагина

var leftPositionSquare = document.querySelector('.left-position-square');
var RightPositionSquare = document.querySelector('.right-position-square');
squareRangeEl.noUiSlider.on('update', function (values, handle) {
  leftPositionSquare.innerHTML = values[0] * 2;
  RightPositionSquare.innerHTML = values[1] * 2;
}); //создаю ползунки с диапазоном для стоимости

var costRangeEl = document.querySelector('.range-cost');
noUiSlider.create(costRangeEl, {
  start: [20, 80],
  connect: true,
  padding: 2,
  range: {
    'min': 0,
    'max': 100
  }
}); //изменяю значения в полях с площадью - использую настройки из плагина

var leftPositionCost = document.querySelector('.left-position-cost');
var RightPositionCost = document.querySelector('.right-position-cost');
costRangeEl.noUiSlider.on('update', function (values, handle) {
  //использую toFixed, чтобы округлить до первой цифры после запятой
  leftPositionCost.innerHTML = (values[0] / 5).toFixed(1);
  RightPositionCost.innerHTML = (values[1] / 5).toFixed(1);
}); //отключаю клик по ссылкам в списке жилых комплексов

document.querySelectorAll('.houses-list__link').forEach(function (element) {
  return element.addEventListener('click', function (event) {
    event.preventDefault();
  });
});