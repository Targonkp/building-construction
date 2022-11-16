"use strict";var videoArr=document.querySelectorAll(".background-video"),backgroundImageEl=document.querySelector(".background-image");function changeBackground(){window.innerWidth<=768?(videoArr.forEach((function(e){e.style.display="none"})),backgroundImageEl.style.display="block"):(videoArr.forEach((function(e){e.style.display="block"})),backgroundImageEl.style.display="none")}document.addEventListener("DOMContentLoaded",changeBackground),window.addEventListener("resize",changeBackground);var videoElList=document.querySelectorAll(".background-video");videoElList.forEach((function(e){e.pause()}));var headerArr=["Стильная архитектура и виды из окон будущей квартиры не оставят равнодушных","Большие парковые территории и безопасные дворы созданы для счастливой жизни"],mainHeader=document.querySelector(".choice-buy__header"),startVideo=0;function activeVideo(){var e=document.querySelector(".background-video-active");e.play(),e.playbackRate=.4}function videoBackgroundNext(){startVideo===videoElList.length-1?startVideo=0:startVideo+=1,videoElList.forEach((function(e){e.classList.remove("background-video-active"),e.classList.remove("transition_disabled")})),videoElList[startVideo].classList.add("background-video-active"),mainHeader.style.animation="headerOpacity 2s",setTimeout((function(){mainHeader.innerHTML=headerArr[startVideo]}),1e3),activeVideo()}function videoBackgroundPrevious(){0===startVideo?startVideo=videoElList.length-1:startVideo-=1,console.log(startVideo),videoElList.forEach((function(e){e.classList.remove("background-video-active"),e.classList.remove("transition_disabled")})),videoElList[startVideo].classList.add("background-video-active"),mainHeader.style.animation="headerOpacity 3s",setTimeout((function(){mainHeader.innerHTML=headerArr[startVideo]}),1e3),activeVideo()}activeVideo(),document.querySelector(".switch-arrow__right").addEventListener("click",videoBackgroundNext),document.querySelector(".switch-arrow__left").addEventListener("click",videoBackgroundPrevious);var burgerMenuEl=document.querySelector(".burger-menu"),menuEl=document.querySelector(".menu");burgerMenuEl.addEventListener("click",(function(){burgerMenuEl.classList.toggle("burger-menu-active"),menuEl.classList.toggle("menu-active")}));var roomsList=document.querySelectorAll(".rooms-element");roomsList.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("rooms-element-active")}))}));var openSub=document.querySelector(".open-sub-list"),buildingsListSub=document.querySelector(".buildings-list-sub");openSub.addEventListener("click",(function(){openSub.classList.toggle("active"),buildingsListSub.classList.toggle("active")}));var buildingsMainEl=document.querySelector(".buildings-name");buildingsListSub.addEventListener("click",(function(e){if(e.target.classList.contains("buildings-element-sub")){var t=buildingsMainEl.textContent,i=e.target.textContent;buildingsMainEl.textContent=i,e.target.textContent=t,openSub.classList.remove("active"),buildingsListSub.classList.remove("active")}}));var squareRangeEl=document.querySelector(".range-square");noUiSlider.create(squareRangeEl,{start:[20,80],connect:!0,step:1,padding:2,range:{min:0,max:100}});var leftPositionSquare=document.querySelector(".left-position-square"),RightPositionSquare=document.querySelector(".right-position-square");squareRangeEl.noUiSlider.on("update",(function(e,t){leftPositionSquare.innerHTML=2*e[0],RightPositionSquare.innerHTML=2*e[1]}));var costRangeEl=document.querySelector(".range-cost");noUiSlider.create(costRangeEl,{start:[20,80],connect:!0,padding:2,range:{min:0,max:100}});var leftPositionCost=document.querySelector(".left-position-cost"),RightPositionCost=document.querySelector(".right-position-cost");costRangeEl.noUiSlider.on("update",(function(e,t){leftPositionCost.innerHTML=(e[0]/5).toFixed(1),RightPositionCost.innerHTML=(e[1]/5).toFixed(1)})),document.querySelectorAll(".houses-list__link").forEach((function(e){return e.addEventListener("click",(function(e){e.preventDefault()}))}));