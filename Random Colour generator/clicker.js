var btn = document.getElementById('btn');
var backimg = document.querySelector('body')
function btnclick() {
    backimg.style.backgroundColor = ("rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")")
    // var rannum=Math.floor(Math.random()*255)

}

btn.onclick = btnclick;