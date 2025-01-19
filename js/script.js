document.addEventListener('DOMContentLoaded', function(){
    const toggle = document.querySelector('.navbar .mobile-menu-toggle');

    const menuActive = document.querySelector('.navbar .mobile-menu-items');

    toggle.addEventListener('click', function(){
        menuActive.classList.toggle('active');
    })
});

window.addEventListener('scroll', function(){

    const nav = document.querySelector('.navbar');

    if(window.scrollY > 0){
        nav.classList.add('navbar-scroll');
    }
    else{
        nav.classList.remove('navbar-scroll');
    }
});
