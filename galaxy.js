var heihei = 0;

window.addEventListener('keydown',caidan);
function caidan (e){
    if(e.keyCode == 71) heihei += 7; else heihei -= 1;
    if(e.keyCode == 65) heihei += 6; else heihei -= 1;
    if(e.keyCode == 76) heihei += 5; else heihei -= 1;
    if(e.keyCode == 88) heihei += 4; else heihei -= 1;
    if(e.keyCode == 89) heihei += 4; else heihei -= 1;
    if(e.keyCode == 90) heihei += 2; else heihei -= 1;
    if(e.keyCode == 189 && e.shiftKey) heihei += 1; else heihei -= 1;
    if(heihei == -20) window.location.href="X.html";
}
