import Slider from "./slider";
import elements from './elements';
import Preloader from '../preloader/preloader';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let slider = new Slider({
    elements,
    animationFunc: function (element) {
        textContent.classList.add("hide");
        sliderImage.classList.add("hide");

        setTimeout(function () {
            sliderSubtitle.innerHTML = element.subtitle;
            sliderTitle.innerHTML = element.title;
            sliderText.innerHTML = element.text;
            sliderImage.src = element.image;

            textContent.classList.remove("hide");
            sliderImage.classList.remove("hide");
        }, 600);
    },
    speed: 10000,
});

slider.play();

leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);

const imagesPaths = elements.map(el => el.image);

Preloader.preloadImages({
    images: imagesPaths,
    completed: function(){
        document.querySelector('.controls').style.display = 'block';
    }
});