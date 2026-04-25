const searchicon1 = document.querySelector('#searchicon1');
const searchicon2 = document.querySelector('#searchicon2'); 
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function() {
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

const searchicon3 = document.querySelector('#searchicon3');
const searchicon4 = document.querySelector('#searchicon4'); 
const search3 = document.querySelector('#searchinput3');

searchicon3.addEventListener('click', function() {
    search3.style.display = 'flex';
    searchicon3.style.display = 'none';
});

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function() {
    setTimeout(()=>{
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', function() {
        cross.style.display = 'none';
        headerbar.style.right = '-100%';
});

