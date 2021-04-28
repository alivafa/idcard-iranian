
//introduce variable and funcion
const butt=document.getElementById('butt');
const sheba=document.getElementById('meli');
butt.addEventListener('click' ,add);
function add(e) {
    e.preventDefault();
    let y = sheba.value
    console.log(y[9]);
    let h =0;
    let cod = 10;
    for (let i = 0; i < 9; i++) {
        h += y[i] * cod;
        cod = cod - 1;
    }
    console.log(h);
    h =h%11;
    console.log(h);
    if (y.length != 10) {
        alert("your cod is short");
    } else {
        if (h == y[9] && h < 2 || y[9] == 11 - h) {
            alert(" code is ok");
        } else {
            alert("code is false");
        }
    }
}