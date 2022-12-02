$(document).ready(()=>{
    $('.menu-btn').click(()=>{
        $('nav').slideToggle();
        let menuclass = document.getElementById('menu-ico');
        if(menuclass.className == "fa-solid fa-bars"){
            menuclass.className = "fa-solid fa-xmark"
        }else{menuclass.className = "fa-solid fa-bars"}
    });
})