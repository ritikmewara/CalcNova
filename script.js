
// Price to Quantity
document.getElementById("calculateQuantity").addEventListener("click", function() {
    let price = Number(document.getElementById("unitPrice").value);
    let amount = Number(document.getElementById("totalAmount").value);

    if (price <= 0 || amount <= 0) {
        alert("Please enter valid values");
        return;
    }

    let quantity = amount / price;

    document.getElementById("quantityResult").innerText =
        "Quantity: " + quantity.toFixed(2);
});


// Quantity to Price

document.getElementById("calculatePrice").addEventListener("click", function() {

    let price = Number(document.getElementById("unitPrice2").value);
    let quantity = Number(document.getElementById("quantity").value);
    let unit = document.getElementById("quantityUnit").value;

    if (price <= 0 || quantity <= 0) {
        alert("Please enter valid values");
        return;
    }

    let total;

    if (unit === "kg" || unit === "l" || unit === "piece") {
        total = price * quantity;
    }
    else if (unit === "g" || unit === "ml") {
        total = (price * quantity) / 1000;
    }

    document.getElementById("priceResult").innerText =
        "Total Price: ₹" + total.toFixed(2);
});

document.getElementById("calculatePrice").addEventListener("click", function() {

    let price = Number(document.getElementById("unitPrice2").value);
    let quantity = Number(document.getElementById("quantity").value);
    let unit = document.getElementById("quantityUnit").value;

    if (price <= 0 || quantity <= 0) {
        alert("Please enter valid values");
        return;
    }

    let total;

    if (unit === "kg" || unit === "l" || unit === "piece") {
        total = price * quantity;
    }
    else if (unit === "g" || unit === "ml") {
        total = (price * quantity) / 1000;
    }

    document.getElementById("priceResult").innerText =
        "Total Price: ₹" + total.toFixed(2);
});


// Shopping Bill
let grandTotal = 0;

document.getElementById("addProduct").addEventListener("click", function() {
    let name = document.getElementById("productName").value;
    let price = Number(document.getElementById("productPrice").value);
    let quantity = Number(document.getElementById("productQuantity").value);

    if (name.trim() === "" || price <= 0 || quantity <= 0) {
        alert("Please enter valid product details");
        return;
    }

    let total = price * quantity;
    grandTotal += total;

    let item = document.createElement("p");
    item.textContent = name + " - ₹" + total.toFixed(2);

    document.getElementById("billList").appendChild(item);

    document.getElementById("grandTotal").innerText =
        "Grand Total: ₹" + grandTotal.toFixed(2);

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";
});
