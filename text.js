let bg = document.getElementById("bg");
let mountains = document.getElementById("mountains");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px'
    mountains.style.top = -value * 0.10 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 +'px';
})


