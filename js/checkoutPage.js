$(function () {
  checkoutRender();
  customerForm();
});

function checkoutRender() {
  $("<h2>").html("Checkout").appendTo($(".checkoutPage"));

  let cartContainer = $(".cartContainer");
  cartContainer.html("");
  let productContainer = $("<div>").addClass("productContainer");

  for (let i = 0; i < cart.length; i++) {
    let productCard = $("<div>").addClass("productCard");
    $("<img>")
      .attr("src", cart[i].image)
      .addClass("productCardImg")
      .appendTo(productCard);

    $("<p>").html(cart[i].name).appendTo(productCard);

    $("<button>")
      .attr("type", "button")
      .html("-")
      .on("click", function () {
        decreaseProducts(cart[i]);
      })
      .appendTo(productCard);

    $("<input>")
      .attr("type", "text")
      .attr("value", cart[i].inCart)
      .appendTo(productCard);

    $("<button>")
      .attr("type", "button")
      .html("+")
      .on("click", function () {
        increaseProducts(cart[i]);
      })
      .appendTo(productCard);

    $("<p>").html(cart[i].price).appendTo(productCard);
    $("<span>")
      .html("<i class='fas fa-trash'></i>")
      .on("click", function (e) {
        remove(cart[i]);
        $(e.target).parent().parent().remove();
      })
      .appendTo(productCard);

    productCard.appendTo(productContainer);
    productContainer.appendTo(cartContainer);
  }
  $("<hr>").appendTo(productContainer);

  checkoutTotal();
  saveToLS();
}

function checkoutTotal() {
  let cartTotal = $("<div>").addClass("cartTotal");

  $("<p>").html("Total:").appendTo(cartTotal);
  $("<p>").html(calcProducts()).appendTo(cartTotal);
  $("<p>")
    .html("$" + calcTotal())
    .appendTo(cartTotal);
  cartTotal.appendTo($(".cartContainer"));
  saveToLS();
}

function customerForm() {
  let formContainer = $(".formContainer");
  let form = $("<form>");
  form.on("submit", function (e) {
    e.preventDefault();
    customerToSS($("#fName").val());
    window.location.assign("../HTML/thankYouPage.html");
  });

  $("<label>").attr("for", "fName").html("First Name:").appendTo(form);
  $("<input>")
    .attr("type", "text")
    .attr("id", "fName")
    .prop("required", true)
    .appendTo(form);

  $("<label>").attr("for", "lName").html("Last Name:").appendTo(form);
  $("<input>")
    .attr("type", "text")
    .attr("id", "lName")
    .prop("required", true)
    .appendTo(form);

  $("<label>").attr("for", "formMail").html("E-mail:").appendTo(form);
  $("<input>")
    .attr("type", "email")
    .attr("id", "formMail")
    .prop("required", true)
    .appendTo(form);

  $("<button>").attr("type", "submit").html("Purchase").appendTo(form);
  form.appendTo(formContainer);
}

function customerToSS(firstName) {
  localStorage.clear();
  sessionStorage.setItem("customerInfo", JSON.stringify(firstName));
}
