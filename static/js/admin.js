let menuElements = document.querySelectorAll('.menu-element');

document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('aside').classList.toggle('active');
})

document.querySelector('nav').querySelector('.right-side').querySelector('button').addEventListener('click',(e)=>{
    document.querySelector('.left-side').style.display = 'none';
    document.querySelector('.right-side').style.display = 'none';
    document.querySelector('.search-bar').style.display = 'flex';
})

document.querySelector('.search-close-btn').addEventListener('click',()=>{
    document.querySelector('.left-side').style.display = 'flex';
    document.querySelector('.right-side').style.display = 'flex';
    document.querySelector('.search-bar').style.display = 'none';
})

Array.from(menuElements).forEach((menuElement)=>{
    menuElement.addEventListener('click',(e)=>{
        document.querySelector('.anchor-active').classList.remove('anchor-active');
        e.target.classList.toggle('anchor-active');
    })
})