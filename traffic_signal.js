let r = document.getElementById("red");
let y = document.getElementById("yellow");
let g = document.getElementById("green");

// r.style.opacity = 1;
// y.style.opacity = 0.3;
// g.style.opacity = 0.3;

setTimeout(function red(){
    r.style.opacity = 1;
    y.style.opacity = 0.3;
    g.style.opacity = 0.3;
}, 5000);
setTimeout(function yellow(){
    r.style.opacity = 0.3;
    y.style.opacity = 1;
    g.style.opacity = 0.3;
}, 10000);
setTimeout(function green(){
    r.style.opacity = 0.3;
    y.style.opacity = 0.3;
    g.style.opacity = 1;
}, 15000);
setInterval(()=>{
    setTimeout(() => {
        r.style.opacity = 1;
        y.style.opacity = 0.3;
        g.style.opacity = 0.3;
    }, 5000);
    setTimeout(() => {
        r.style.opacity = 0.3;
        y.style.opacity = 1;
        g.style.opacity = 0.3;
    }, 10000);
    setTimeout(() => {
        r.style.opacity = 0.3;
        y.style.opacity = 0.3;
        g.style.opacity = 1;
    }, 15000);
},15000)