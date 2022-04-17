(function(){
   const header = document.querySelector('.header');
   window.onscroll = () =>{
    if(window.pageYOffset > 50){
        header.classList.add('header_active');
    }else{
        header.classList.remove('header_active');
    }
   }
}());

$('.feedback_slider').slick({
    prevArrow: '.prev_arrow',
    nextArrow: '.next_arrow'
});


(function(){
    const headerNav = document.querySelector('.header_nav');
    const burgerItem = document.querySelector('.burger');
    const closeItem = document.querySelector('.header_nav-close');

    burgerItem.addEventListener('click', () => {
        headerNav.classList.add('header_nav_active');
    })
    closeItem.addEventListener('click', () =>{
        headerNav.classList.remove('header_nav_active');
    })
}());