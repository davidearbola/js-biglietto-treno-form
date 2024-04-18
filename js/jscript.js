let userName = document.getElementById("user").value;
let kmToGo = document.getElementById("km").value;
let userAge = document.getElementById("age").value;
let kmCost = 0.21;
const discount20 = 0.80;
const discount40 = 0.60;

const buttonGenerates = document.getElementById("generates");

buttonGenerates.addEventListener("click", function() {
    userName = document.getElementById("user").value;
    kmToGo = document.getElementById("km").value;
    userAge = document.getElementById("age").value;
    let basePrice = (kmCost*kmToGo);
    if (userAge == "Minorenne"){
        let discountPrice20 = (basePrice*discount20).toFixed(2);
        document.getElementById("ticket-discount").innerHTML = "Biglietto Ridotto 20%";
        document.getElementById("ticket-price").innerHTML = `${discountPrice20}€`;
    } else if (userAge == "Over 65"){
        let discountPrice40 = (basePrice*discount40).toFixed(2);
        document.getElementById("ticket-discount").innerHTML = "Biglietto Ridotto 40%";
        document.getElementById("ticket-price").innerHTML = `${discountPrice40}€`;
    } else if (userAge == "Maggiorenne"){
        document.getElementById("ticket-discount").innerHTML = "Biglietto Standard";
        document.getElementById("ticket-price").innerHTML = `${basePrice}€`;
    }
    document.getElementById("user-name").innerHTML = userName
    document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("ticket-number").innerHTML = Math.floor(Math.random() * 10000);
    const visibleTicket = document.getElementById("ticket");
    visibleTicket.classList.remove("d-none");
});

const buttonCancel = document.getElementById("cancel")

buttonCancel.addEventListener("click", function(){
    document.getElementById("user").value = null;
    document.getElementById("km").value = null;
    const visibleTicket = document.getElementById("ticket");
    visibleTicket.classList.add("d-none");
})

