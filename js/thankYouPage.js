$(function () {
  orderConfirmation();
});

function orderConfirmation() {
  let firstname = JSON.parse(sessionStorage.getItem("customerInfo")) || [];

  let orderNumb = Math.round(Math.random() * 100000);
  $("<p>").html(firstname).appendTo(".orderPayedText");
  $("<p>")
    .html("Order number: " + orderNumb)
    .appendTo(".orderPayedText");
}
