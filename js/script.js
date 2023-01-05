$(document).ready(()=>{
    $('.menu-btn').click(()=>{
        $('nav').slideToggle(0);
        let menuclass = document.getElementById('menu-ico');
        if(menuclass.className == "fa-solid fa-bars"){
            menuclass.className = "fa-solid fa-xmark"
        }else{menuclass.className = "fa-solid fa-bars"}
    });
    if(window.innerWidth < 1237){
    $('.dropdown-nav-li').on('click',function(e){
            this.querySelector('ul').classList.toggle("active");
        })
    }
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    $('.prev-image').on('click',()=>{
        plusSlides(-1);
    })
    $('.next-image').on('click',()=>{
        plusSlides(1);
    })

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    }
    
})