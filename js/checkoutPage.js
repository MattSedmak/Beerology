$(function () {
    checkoutRender();
});

function checkoutRender() {
    let cartContainer = $(".cartContainer");
    let productContainer = $("<div>").addClass("productContainer");
    let productCard = $("<div>").addClass("productCard");
    let cartTotal = $("<div>").addClass("cartTotal");

    let formContainer = $(".formContainer");
    let form = $("<form>");
    
    $("<h2>").html("Checkout").appendTo(cartContainer);

    //Section 1 with products and total:
    productContainer.appendTo(cartContainer);
    productCard.appendTo(productContainer);
    $("<div>").addClass("productCardImg").appendTo(productCard);
    $("<p>").html("Name").appendTo(productCard);
    $("<p>").html("Price").appendTo(productCard);
    $("span")
        .html($("<i>").addClass("fas fa-trash"))
        .appendTo(productCard);

    $("<hr>").appendTo(productContainer);

    cartTotal.appendTo(cartContainer);
    $("<p>").html("Total:").appendTo(cartTotal);
    $("<p>").html("AMOUNT").appendTo(cartTotal);
    $("<p>").html("SUM").appendTo(cartTotal);

    //Section 2 with pay-input and buy button:
    form.appendTo(formContainer);
    $("<label>").attr("for", "fName").html("Firstname:").appendTo(form);
    $("<input>").attr("type", "text").attr("id", "fName").appendTo(form);
    $("<button>").attr("type", "button").html("Purchase").appendTo(formContainer);

}