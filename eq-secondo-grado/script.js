txtA = document.getElementById("a");
txtB = document.getElementById("b");
txtC = document.getElementById("c");
btnCalcola = document.getElementById("btn-calcola");
lblS1 = document.getElementById("soluzione1");
lblS2 = document.getElementById("soluzione2");
canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

function xg(x){
    return  (x+10) * 20
}
function yg(y){
    return  400 - (y+10) * 20 
}

function lerp(a, b, t){
    return
}

function remap(a, b, a2, b2, val) {
    //lerp e remap
}

function drawGraph(a, b, c){
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, 400, 400)
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 200, 400, 1)
    ctx.fillRect(200, 0, 1, 400)

    for(let i = -10; i < 10; i++){
        ctx.fillRect(xg(-.25), yg(i) , 10, 1)
        ctx.fillRect(xg(i), yg(.25) , 1, 10)
    }

    ctx.fillStyle = "rgb(112, 0, 218)";
    for(let i=-10; i < 10; i+=0.01){
        let x = xg(i)
        let y = yg(a*i**2 + i*b + c)
        // let x = remap(-10, 10, 0, 400, i)
        // let y = remap(-10, 10, 0, 400, a*i**2 + i*b + c)

        ctx.fillRect(x-1, y-1 , 2, 2)
    }
}


btnCalcola.addEventListener("click", () => {
    let a = parseFloat(txtA.value);
    let b = parseFloat(txtB.value);
    let c = parseFloat(txtC.value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        lblS1.innerHTML = "Input non validi, correggere pleasee"
        lblS2.innerHTML = ""
    }else if(b**2 - 4*a*c < 0){
        lblS1.innerHTML = "Impossibile"
        lblS2.innerHTML = ""
        drawGraph(a, b, c);
    }else{
        let s1 = (-1*b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
        let s2 = (-1*b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
        lblS1.innerHTML = s1;
        if(s1 != s2){
            lblS2.innerHTML = s2;
        }else{
            lblS2.innerHTML = "";
        }
        drawGraph(a, b, c); 
    }
});