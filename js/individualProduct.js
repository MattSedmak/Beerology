$(function () {
  renderProduct();
});
function renderProduct() {
  let productItem = JSON.parse(sessionStorage.getItem("productItem"));

  $("title").html(productItem.name);

  let product = $("#product");
  $("<img>").attr("src", productItem.image).appendTo(product);

  $("<p>").html(productItem.name).appendTo(product);

  $("<p>").html(productItem.type).appendTo(product);

  $("<p>")
    .html("$" + productItem.price)
    .appendTo(product);

  addProductToCart(productItem);
  createTable(productItem);
  descriptionPart(productItem);
}

function addProductToCart(productItem) {
  let addToCartDiv = $("#addToCartDiv");
  $("<label>")
    .attr("for", "amountOfBeer")
    .html("Quantity: ")
    .appendTo(addToCartDiv);

  let amount = $("<div>");
  $("<button>")
    .attr("type", "button")
    .html("-")
    .addClass("increaseAndDecrease")
    .on("click", function () {
      decreaseProducts(productItem);
    })
    .appendTo(amount);

  $("<input>")
    .attr("type", "text")
    .attr("value", "1")
    .attr("id", "amountOfBeer")
    .attr("name", "amountOfBeer")
    .appendTo(amount);

  $("<button>")
    .attr("type", "button")
    .addClass("increaseAndDecrease")
    .html("+")
    .on("click", function () {
      increaseProducts(productItem);
    })
    .appendTo(amount);
  amount.appendTo(addToCartDiv);

  $("<button>")
    .addClass("addToCartButton")
    .attr("type", "button")
    .html("Add to cart")
    .on("click", { b: productItem }, function (e) {
      addToCart(e.data.b);
    })
    .appendTo(addToCartDiv);
}

function createTable(productItem) {
  let infoDiv = $("#info");

  let table = $("<table>");
  let tableRow1 = $("<tr>");
  $("<th>").html("SIZE").appendTo(tableRow1);
  $("<th>").html("ABV").appendTo(tableRow1);
  $("<th>").html("RATING").appendTo(tableRow1);

  let tableRow2 = $("<tr>");
  $("<td>").html(productItem.size).appendTo(tableRow2);
  $("<td>").html(productItem.alc).appendTo(tableRow2);
  $("<td>").html(productItem.rating).appendTo(tableRow2);

  tableRow1.appendTo(table);
  tableRow2.appendTo(table);
  table.appendTo(infoDiv);
}

function descriptionPart(productItem) {
  let about = $("#about");
  $("<h1>").html(productItem.name).appendTo(about);
  $("<p>").html(productItem.description).appendTo(about);
}
