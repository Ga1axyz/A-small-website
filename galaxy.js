window.addEventListener('keydown',caidan);

function caidan (e){
    const oh = document.querySelector('.oh');
    oh.classList.add(e.keyCode);

    var g = document.getElementsByClassName("71");
    var a = document.getElementsByClassName("65");
    var l = document.getElementsByClassName("76");
    var x = document.getElementsByClassName("88");
    var y = document.getElementsByClassName("89");
    var z = document.getElementsByClassName("90");

    if(g.length == 1){
        if(a.length == 1){
            if(l.length == 1){
                if(x.length == 1){
                    if(y.length == 1){
                        if(z.length == 1){
                            window.location.href="X.html";
                        }
                    }
                }
            }
        }
    }
}