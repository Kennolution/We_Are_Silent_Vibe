'use strict';

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 2000); 
});

let navLinks = document.querySelectorAll('.sideNav ul li a');
let sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);
        let offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });

        // Remove 'active' class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });

    // Hover effect for navigation items while scrolling
    link.addEventListener('mouseover', function() {
        this.classList.add('active');
    });

    link.addEventListener('mouseout', function() {
        if (!this.classList.contains('active')) {
            this.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;

    sections.forEach(sec => {
        let offsetTop = sec.offsetTop;
        let offsetBottom = offsetTop + sec.offsetHeight;

        // Adjust the offset by subtracting 150 pixels
        offsetTop -= 150;

        if (scrollY >= offsetTop && scrollY < offsetBottom - windowHeight / 2) {
            let id = sec.getAttribute('id');

            // Remove 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the link corresponding to the section in view
            document.querySelector('.sideNav ul li a[href*="' + id + '"]').classList.add('active');
            console.log('Active section: ' + id);
        }
    });
});


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
