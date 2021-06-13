
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


    //about algorithm
//ساختار کد ملی 10 رقمی می باشد
//
// به طور مثل 4582133511
// اولین رقم از سمت راست رقم کنترل می باشد در این مثال عدد 1
//
// نحوه اجرای  عملیات
//
// برای محاسبه رقم کنترل از روی سایر ارقام ، هر رقم را در موقعیت آن ضرب کرده و حاصل را با هم جمع می کنیم -
// مجموع بدست آمده از مرحله یک را بر ۱۱ تقسیم می کنیم -
// اگر باقیمانده کمتر از ۲ باشد ، رقم کنترل باید برابر باقیمانده باشد در غیر اینصورت رقم کنترل باید برابر یازده منهای باقیمانده باشد-
