$(document).ready(()=>{
    $('.menu-btn').click(()=>{
        $('nav').slideToggle(0);
        let menuclass = document.getElementById('menu-ico');
        if(menuclass.className == "fa-solid fa-bars"){
            menuclass.className = "fa-solid fa-xmark"
        }else{menuclass.className = "fa-solid fa-bars"}
    });
    $('.dropdown-nav-li').on('click',function(e){
        this.querySelector('ul').classList.toggle("active");
    })
})