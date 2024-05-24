/*Pre-loader*/ 
'use strict';

/**
 * PRELOAD
 * 
 * loading will end after document is loaded
 */
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  // Delay the hiding of the preloader by 2 seconds
  setTimeout(() => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 2000); // 2000 milliseconds = 2 seconds
});

/**/ 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.sideNav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +  height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.sideNav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    })
};


var PreviouseventsSlider = new Swiper('.previousevents-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


function toggleMenu() {
    var menuIcon = document.getElementById("menuIcon");
    var sideNav = document.querySelector(".sideNav");

    if (sideNav.classList.contains("show")) {
        menuIcon.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    } else {
        menuIcon.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    }

    sideNav.classList.toggle("show");
}
