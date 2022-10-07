//замедляю видео
let videoEl = document.querySelector('.background-video');
videoEl.playbackRate = 0.4;

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

