var mC2 = document.getElementById('mainClickingTwo');
var bmC = document.getElementById('BrokenClicking');

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
        doSpecialStuffBecauseOfLongDown(); // put your secret sauce here
    }, 3000);
}, false);
mC2.addEventListener("mouseup",function() {
    clearTimeout(mouseTimeout);
    mC.style.display = 'initial';
    mC2.style.display = 'none';
    mouseStatus='up';
}, false);

bmC.addEventListener("mouseup", function() {
    clearTimeout(mouseTimeout);
    mC.style.display = 'initial';
    mC2.style.display = 'none';
    bmC.style.display = 'none';
    mouseStatus='up';
}, false);

function doSpecialStuffBecauseOfLongDown() {
    mC2.style.display = 'none';
    bmC.style.display = 'initial';
}
