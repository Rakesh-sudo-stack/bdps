let menuElements = document.querySelectorAll('.menu-element');

document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('aside').classList.add('active');
})

document.querySelector('.close-btn').addEventListener('click',()=>{
    document.querySelector('aside').classList.remove('active');
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

const setPage = (pageHTML) => {
    document.querySelector('main').innerHTML = pageHTML;
}

const loadScript = (src) => {
    let script = document.createElement('script');
    script.setAttribute('defer',true);
    script.src = src;
    document.body.appendChild(script);
}

// ---------------Loading pages here --------------
const loadDashboard = async () => {
    let dashboardPage = await fetch('pages/admin-pages/dashboard.html',{
        method:'GET'
    }).then(async (response)=>{
        return await response.text();
    }).then(async (dashboardPage)=>{
        setPage(dashboardPage);
        loadScript('static/js/admin-scripts/dashboard.js');
    })

}

loadDashboard();