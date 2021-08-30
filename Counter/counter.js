var cnumber = document.getElementById('count');
var inumber = cnumber.innerHTML;
var bgimg = document.getElementById('bg-image');

// var select = document.getElementsByClassName('container');
// select.style.width='500px';
// select.style.height='500px';
// select.style.background-color:'cyan';

var interval =setInterval(function() {
    // cnumber.innerHTML = inumber-1;
    inumber=inumber>0?inumber-1:0;
    cnumber.innerHTML=inumber;
    cnumber.style.fontSize=(inumber*10+20)+'px';
    bgimg.style.width = (inumber*10)+'%';
    if(inumber<=0)
    clearInterval(interval);
    console.log(interval);
}, 1000);