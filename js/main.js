$(function () {
  // Hambuger toggle
  $(".menu-btn").on("click", function () {
    $(".menu-btn").toggleClass("active");
    $(".menu-panel").toggle("fade").toggleClass("expand");
  });

  // Shopping cart toggle
  $(".fa-shopping-cart").on("click", function () {
    $("#cart").toggle("drop right");
  });
  $(".headerText").hide().fadeIn(2000);
  // Loopar genom cart on load
  $.each(cart, (i, carItm) => {
    renderCart();
  });
});

let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function addToCart(product) {
  let x = 0;

  for (let i = 0; i < cart.length; i++) {
    if (product.id === cart[i].id) {
      cart[i].inCart++;
      x++;
    }
  }

  if (x == 0) {
    product.inCart++;
    cart.push(product);
    console.log("addtocart", product);
  }

  saveToLS();
  renderCart();
}
function renderCart() {
  document.getElementById("cart").innerHTML = " ";
  console.log(cart);

  $("<h3>").html("My Shopping Cart:").appendTo($("#cart"));

  for (let i = 0; i < cart.length; i++) {
    let currentProduct = cart[i];
    $cartCard = $("<div>");
    $cartCard.addClass("cartCard");

    if (window.location.href.indexOf("index.html") > -1) {
      $("<img>").attr("src", currentProduct.imageForStart).appendTo($cartCard);
    } else {
      $("<img>").attr("src", currentProduct.image).appendTo($cartCard);
    }

    $("<span>")
      .attr("id", "cartProductName")
      .html(currentProduct.name + " ")
      .appendTo($cartCard);

    $("<button>")
      .attr("type", "button")
      .html("-")
      .on("click", function () {
        decreaseProducts(currentProduct);
      })
      .appendTo($cartCard);

    $("<input>")
      .attr("type", "text")
      .attr("value", currentProduct.inCart)
      .on("keypress", function (e) {
        if (e.keyCode === 13 || e.key === 13) {
          changeInCartValue($(this).val(), currentProduct);
        }
      })
      .appendTo($cartCard);

    $("<button>")
      .attr("type", "button")
      .html("+")
      .on("click", function () {
        increaseProducts(currentProduct);
      })
      .appendTo($cartCard);

    $("<span>")
      .html("$" + currentProduct.price)
      .appendTo($cartCard);

    $("<span>")
      .html("<i class='fas fa-trash'></i>")
      .on("click", function (e) {
        remove(currentProduct);
        $(e.target).parent().remove();
      })
      .appendTo($cartCard);
    $cartCard.appendTo($("#cart"));
  }
  // skapar total price diven - own function later.
  $totalPrice = $("<div>");
  $totalPrice.addClass("totalprice");

  $("<p>").html("Total: ").appendTo($totalPrice);
  $totalPrice.appendTo("#cart");

  $("<span>")
    .html("$" + calcTotal())
    .appendTo($totalPrice);
  $totalPrice.appendTo("#cart");

  $("<button>")
    .attr("type", "button")
    .attr("id", "checkoutBtn")
    .html("Checkout")
    .on("click", function () {
      //fix from homepage
      window.location.assign("../HTML/checkoutPage.html");
    })
    .appendTo("#cart");

  calcProducts();
}
function calcTotal() {
  let totalCost = 0;

  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].price * cart[i].inCart;
  }
  return totalCost;
}
function calcProducts() {
  let totalProducts = 0;

  for (let i = 0; i < cart.length; i++) {
    totalProducts += cart[i].inCart;
  }
  $("#cartCounter").html(totalProducts);
  return totalProducts;
}
function remove(product) {
  for (let i = 0; i < cart.length; i++) {
    if (product.id === cart[i].id) {
      cart.splice(i, 1);
    }
  }
  calcTotal();
  calcProducts();
  renderCart();
  checkoutRender();
  saveToLS();
}
function saveToLS() {
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function decreaseProducts(currentProduct) {
  currentProduct.inCart--;
  saveToLS();
  renderCart();
  checkoutRender();
  if (currentProduct.inCart === 0) {
    remove(currentProduct);
    renderCart();
    checkoutRender();
  }
}

function increaseProducts(currentProduct) {
  currentProduct.inCart++;
  saveToLS();
  renderCart();
  checkoutRender();
  console.log("Tryck plus");
}

function changeInCartValue(inputValue, currentProduct) {
  currentProduct.inCart = inputValue;
  saveToLS();
  renderCart();
  console.log("Kom in");
  checkoutRender();
}
