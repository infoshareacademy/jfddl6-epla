
document.querySelector('.carousel__item-slide1').classList.add('active')
let index = 2;


let fading = function timeStart() {
    if (index >= 2) {
        document.querySelector('.carousel__item-slide' + (index - 1)).classList.remove('active')
    }
    if (index === 5) {
        index = 1;
    }
    document.querySelector('.carousel__item-slide' + index).classList.add('active')
    index++;

}
let stopIv = setInterval(fading, 5000);


document.querySelector('.carousel').addEventListener("mouseover", function () {
    clearInterval(stopIv)
}
);

document.querySelector('.carousel').addEventListener("mouseout", function () {
    stopIv = setInterval(fading, 5000);
}
);

// let stopIv = setInterval(fading, 1000)

// stopIv();

/*


    let stopIv = setInterval(fadingOut, 2000)
    document.querySelector('.pause_slider_left').addEventListener('mouseover', function () {
        clearInterval(stopIv)
    })
    document.querySelector('.pause_slider_right').addEventListener('mouseover', function () {
        clearInterval(stopIv)
    })
    document.querySelector('.pause_slider_left').addEventListener('mouseout', function () {
        stopIv = setInterval(fadingOut, 2000)
    })
*/

















// const carousel = function (){
//     const slider = document.querySelector('.section-features__header');
// }



// window.setInterval(carousel, 2000);

// //Opacity 0 -> 1;
// //Kilka zdjęć ma  byc nalożonych na siebie;
// //wraz z Intervalem wybrać wszystkie;
// //wszystkim prócz jednego nadawać opacity 0, a jednemu opacity 1;
// //nadać transition i śmiga

// // (function() {
// //     let container = document.querySelector(".carousel");
// //     let carousel = container.querySelectorAll(".carousel__item");
// //     document.querySelector(".section__hero").addEventListener("mouseenter", mouseEnter);
// //     document.querySelector(".section__hero").addEventListener("mouseleave", mouseLeave);
// //     // document.querySelector(".section-hero__button-left").addEventListener("click", changeLeft);
// //     // document.querySelector(".section-hero__button-right").addEventListener("click", changeRight);
// //     function change() {
// //       let active = container.querySelector(`.carousel__item.active`);
// //       let next = container.querySelector(`.carousel__item.active + .carousel__item`) || carousel[0];
// //       if (active) {
// //         active.classList.remove("active");
// //       }
// //       if (next) {
// //         next.classList.add("active");
// //       }
// //     }
//     // function changeLeft() {
//     //   let active = container.querySelector(`.carousel__item.active`);
//     //   let next = container.querySelector(`.carousel__item.active`).previousElementSibling || carouselle[2];
//     //   if (active) {
//     //     active.classList.remove("active");
//     //   }
//     //   if (next) {
//     //     next.classList.add("active");
//     //   }
//     // }
//     // function changeRight() {
//     //   let active = container.querySelector(`.carousel__item.active`);
//     //   let next = container.querySelector(`.carousel__item.active`).nextElementSibling || carouselle[0];
//     //   if (active) {
//     //     active.classList.remove("active");
//     //   }
//     //   if (next) {
//     //     next.classList.add("active");
//     //   }
//     // }
//     // change();
//     // function mouseLeave() {
//     //   this.time = setInterval(change, 5000);
//     //   console.log(`start`);
//     // }
//     // function mouseEnter() {
//     //   clearInterval(this.time);
//     //   console.log(`stop`);
//     // }
//   })();
