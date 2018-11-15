
document.querySelector('.carousel__item-slide1').classList.add('active')
let index = 2;

const fading = function timeStart() {
    if (index >= 2) {
        document.querySelector('.carousel__item-slide' + (index - 1)).classList.remove('active')
    }
    if (index === 5) {
        index = 1;
    }
    document.querySelector('.carousel__item-slide' + index).classList.add('active')
    index++
}

const stopIv = setInterval(fading, 5000);
document.querySelector('.carousel').addEventListener("mouseover", function () {
    clearInterval(stopIv)
})

document.querySelector('.carousel').addEventListener("mouseout", function () {
    stopIv = setInterval(fading, 5000);
})

document.querySelector('.carousel__slider-button-next').addEventListener('mouseover', () => document.querySelector('.carousel__slider-button-next').style.backgroundColor = 'rgba(0, 0, 0, 0.6)')
document.querySelector('.carousel__slider-button-next').addEventListener('mouseout', () => document.querySelector('.carousel__slider-button-next').style.backgroundColor = 'rgba(0, 0, 0, 0.1)')
document.querySelector('.carousel__slider-button-next').addEventListener('click', function () {
    if (index >= 2) {
        document.querySelector('.carousel__item-slide' + (index - 1)).classList.remove('active')
    }
    if (index === 5) {
        index = 1;
    }
    document.querySelector('.carousel__item-slide' + index).classList.add('active')
    document.querySelector('.carousel__slider-button-next').style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    index++
})

document.querySelector('.carousel__slider-button-prev').addEventListener('mouseover', () => document.querySelector('.carousel__slider-button-prev').style.backgroundColor = 'rgba(0, 0, 0, 0.6)')
document.querySelector('.carousel__slider-button-prev').addEventListener('mouseout', () => document.querySelector('.carousel__slider-button-prev').style.backgroundColor = 'rgba(0, 0, 0, 0.1)')
document.querySelector('.carousel__slider-button-prev').addEventListener('click', function () {

    if (index >= 2) {
        document.querySelector('.carousel__item-slide' + (index - 1)).classList.remove('active')
    }
    if (index === 2) {
        index = 6;
    }
    document.querySelector('.carousel__item-slide' + (index - 2)).classList.add('active');
    document.querySelector('.carousel__slider-button-prev').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    index--
})
