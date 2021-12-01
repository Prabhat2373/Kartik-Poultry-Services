console.log("Kartik Agro & Poultry Services Pvt.Ltd.");

// Code For Eggs Order

let OrderBtns = document.getElementsByClassName("orderButton");
for(btn of OrderBtns){
    // console.log(btn)
    btn.addEventListener("click",()=>{
        location.href = "orderPage.html";
    })
    
}

function EvalTotal(rate,qty){
    return rate * qty;
}

const eggTotal = document.getElementById("eggTotal");
const eggqty = document.getElementById("eggqty")
const orderAndPay = document.getElementsByClassName("orderAndPay")
const eggrate = document.getElementById("eggrate")
let eggrateVal = eggrate.value
// console.log(eggrateVal)
// console.log(eggTotal.value)

eggqty.addEventListener("blur",()=>{
    let eggVal = eggqty.value;
    // let totalVal = eggTotal.value
    let eggrateVal = eggrate.value
    let total = EvalTotal(eggrateVal,eggVal)
    // console.log(total)
    eggTotal.value = total

});

// Code For Feed Order
const feedRate = document.getElementById("feedRate");
const feedQty = document.getElementById("feedQty");
const feedTotal = document.getElementById("feedTotal")
const feedRateVal = feedRate.value;
feedQty.addEventListener("blur",()=>{
    let feedQtyVal = feedQty.value;
    let total = EvalTotal(feedRateVal,feedQtyVal);
    feedTotal.value = total
})


// Code For Chicken Order

const chickenRate = document.getElementById("chickenRate").value;
const chickenQty = document.getElementById("chickenQty");
const chickenTotal = document.getElementById("chickenTotal");

chickenQty.addEventListener("blur",()=>{
    let qtyVal = chickenQty.value;
    let total = EvalTotal(chickenRate,qtyVal);
    // console.log(total)
    chickenTotal.value = total;
})

// console.log(orderAndPay)
for(els of orderAndPay){
    els.addEventListener("click",()=>{
        // console.log('Processing Your Order');
        location.href = "checkout.html"
    })
}