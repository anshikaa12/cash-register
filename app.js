var nxtbtn = document.querySelector(".nxtbtn");
var inputamt = document.querySelector(".inputbox");
var nextdiv = document.querySelector(".next-div");
var emsg = document.querySelector(".emsg");
var outputamt = document.querySelector(".outputbox");
var check = document.querySelector(".check")
var cashmsg = document.querySelector(".cashm");
var tt = document.querySelector(".ttable");

hide(nextdiv);
hide(cashmsg);
hide(tt);
nxtbtn.addEventListener("click", function checkBill() {
    if (Number(inputamt.value) > 0) {
        hide(emsg);
        for (var i = 0; i < 7; i++) {
            var req = document.querySelector(".row" + i);
            req.innerText = "";
        }
        show(nextdiv, "flex");
    } else {
        errormessage(emsg, "Please enter correct Bill amount");
        show(emsg, "block");
        hide(nextdiv);
    }
})

check.addEventListener("click", function checkit() {
    if (Number(outputamt.value) < Number(inputamt.value)) {
        errormessage(cashmsg, "Do you want to wash plates?");
        show(cashmsg, "block");
        hide(tt);

    } else if (Number(outputamt.value) === Number(inputamt.value)) {
        errormessage(cashmsg, "Great! you paid the exact amount");
        show(cashmsg, "block");
        hide(tt);

    } else {

        var amount = Number(outputamt.value) - Number(inputamt.value);
        returnAmount(amount);

    }
})


const bills = [2000, 500, 100, 20, 10, 5, 1];
function returnAmount(amount) {


    for (var i = 0; i < bills.length; i++) {
        var c = Math.trunc(amount / bills[i]);

        if (c > 0) {
            var req = document.querySelector(".row" + i);

            req.innerText = c;
        }
        amount = amount % bills[i];
    }
    show(tt, "block");
    hide(cashmsg);


}




function show(inpt, typ) {
    inpt.style.display = typ;
}
function hide(inpt) {
    inpt.style.display = "none";
}
function errormessage(typ, msg) {
    typ.innerText = msg;

}