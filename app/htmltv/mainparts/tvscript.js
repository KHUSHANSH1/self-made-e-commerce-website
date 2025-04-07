function tv() {
  alert('Your order for TV is being processed \n\nClick "Ok" to proceed');
  address = window.prompt("Please enter your address:- ");
  order = window.prompt(
    'Your Order for "TV" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed  '
  );
  if (order.toLowerCase() === "yes") {
    alert(
      "Congratulations! Your order has been placed for delivery to " + address
    );
    alert(
      'Thank-you for your order "You will be now redirected to interface-page"'
    );
    window.location.href = "../index.html";
  } else if (order.toLowerCase !== "yes") {
    alert(
      "Sorry for any inconvenience \n You will be redirected to our interface page"
    );
    window.location.href = "../index.html";
  }
}
