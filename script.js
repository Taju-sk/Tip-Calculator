let billamount = document.getElementById("billAmount");
let percentageTip = document.getElementById("tipPercent");
let tipamount = document.getElementById("tipAmount");
let total = document.getElementById("total");
let error = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input." ;

function calculate(){
    let billamountValue = billamount.value;
    let tipPercentValue = percentageTip.value;
    
    if (billamountValue === ""){
        error.innerHTML = errorMessage;
    }
    else if (tipPercentValue === ""){
        error.innerHTML = errorMessage;
    }
    else{
        error.innerHTML = "";
        let billamount = parseInt(billamountValue);
        let percentageTip = parseInt(tipPercentValue);
        let calculatetip = (percentageTip/100) * billamount
        tipamount.value = calculatetip
        total.value = calculatetip + billamount
    }
}