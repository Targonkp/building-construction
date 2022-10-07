"use strict";

//замедляю видео
var videoEl = document.querySelector('.background-video');
videoEl.playbackRate = 0.4; //получаю список элементов с количеством комнат в фильтре и назначаю класс при клике

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
});