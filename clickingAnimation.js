var mC2 = document.getElementById('mainClickingTwo');

var mouseStatus = 'up';
var mouseTimeout;
var mC = document.getElementById('mainClicking');
mC.addEventListener("mousedown",function() {
    clearTimeout(mouseTimeout);
    mC.style.display = 'none';
    mC2.style.display = 'initial';
    mouseStatus='down';
    moneyAmount++
    mouseTimeout = setTimeout(function(){
        mouseStatus='longDown';
        //doSpecialStuffBecauseOfLongDown(); // put your secret sauce here
    }, 1500);
}, false);
mC2.addEventListener("mouseup",function() {
    clearTimeout(mouseTimeout);
    mC.style.display = 'initial';
    mC2.style.display = 'none';
    mouseStatus='up';
}, false);