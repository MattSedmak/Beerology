$(function () {
    checkoutRender();
    customerForm();
});

let checkoutCart = JSON.parse(localStorage.getItem("cartItems")) || [];

function checkoutRender() {
    
    
    let cartContainer = $(".cartContainer");
    let productContainer = $("<div>").addClass("productContainer");
    let cartTotal = $("<div>").addClass("cartTotal");

    $("<h2>").html("Checkout").appendTo(cartContainer);

    for (let i = 0; i < checkoutCart.length; i++) {
        console.log(checkoutCart[i].inCart);
        let productCard = $("<div>").addClass("productCard");
        $("<img>")
        .attr("src", checkoutCart[i].image)
        .addClass("productCardImg")
        .appendTo(productCard);

        $("<p>").html(checkoutCart[i].name).appendTo(productCard);

        $("<button>")
        .attr("type", "button")
        .html("-")
        .on("click", function () {
            //fungerar ej just nu
            decreaseProducts(checkoutCart[i]);
        })
        .appendTo(productCard);

        $("<input>")
        .attr("type", "text")
        .attr("value", checkoutCart[i].inCart)
        .on("keypress", function (e) {
        if (e.keyCode === 13 || e.key === 13) {
          changeInCartValue($(this).val(), checkoutCart[i]);
        }
        })
        .appendTo(productCard);

        $("<button>")
        .attr("type", "button")
        .html("+")
        .on("click", function() {
            //fungerar ej just nu
            console.log("Du tryckte plus", checkoutCart[i]);
            increaseProducts(checkoutCart[i]);
        })
        .appendTo(productCard);

        $("<p>").html(checkoutCart[i].price).appendTo(productCard);
        $("<span>")
        .html($("<i>").addClass("fas fa-trash"))
        .appendTo(productCard);

        productCard.appendTo(productContainer);
        productContainer.appendTo(cartContainer);
    }

    $("<hr>").appendTo(productContainer);

    cartTotal.appendTo(cartContainer);
    $("<p>").html("Total:").appendTo(cartTotal);
    $("<p>").html(calcProducts()).appendTo(cartTotal);
    $("<p>").html("$" + calcTotal()).appendTo(cartTotal);
    
}

function customerForm() {
    let formContainer = $(".formContainer");
    let form = $("<form>");
    form.appendTo(formContainer);
    $("<label>").attr("for", "fName").html("Firstname:").appendTo(form);
    $("<input>").attr("type", "text").attr("id", "fName").appendTo(form);

    $("<label>").attr("for", "lName").html("Lastname:").appendTo(form);
    $("<input>").attr("type", "text").attr("id", "lName").appendTo(form);

    $("<label>").attr("for", "formMail").html("E-mail:").appendTo(form);
    $("<input>").attr("type", "email").attr("id", "formMail").appendTo(form);

    $("<button>")
    .attr("type", "button")
    .html("Purchase")
    .on("click", function() {
        customerToSS($("#fName").val());
        window.location.assign("../HTML/thankYouPage.html");
    })
    .appendTo(formContainer);
}

function customerToSS(firstName) {
    sessionStorage.setItem("customerInfo", JSON.stringify(firstName));
}

