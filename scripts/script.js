$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    })

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 })
        $('html').css("scrollBehavior", "auto")
    })

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth")
    })

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    let typed = new Typed(".typing", {
        strings: ["Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $('.carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
            1300: {
                items: 4,
                nav: false
            }
        }
    })
})