$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Dot Net Developer", "Full Stack Developer", "Starter"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Dot Net Developer", "Full Stack Developer", "Starter"],
        typeSpeed: 100,
        backSpeed: 200,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    const container = document.querySelector('.container');
    const contactLink = document.querySelector('.contact-link');
    const windowHeight = window.innerHeight;

    function checkPosition() {
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop - windowHeight <= 0) {
            container.classList.add('show-icons');
            $(window).off('scroll', checkPosition); // Using jQuery's off() to remove event listener
        }
    }

    $(window).on('scroll', checkPosition); // Using jQuery's on() to add event listener
    
    // Trigger the animation when clicking the "Contact" link
    $(contactLink).on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        container.classList.add('show-icons');
    });
});