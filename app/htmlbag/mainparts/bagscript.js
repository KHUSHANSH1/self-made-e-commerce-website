function bag() {
  alert('Your order for bag is being proceded \n\nClick "Ok" to proceed');
  address = window.prompt("Please enter your address:- ");
  order = window.prompt(
    'you Order for "Bag" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed  '
  );
  if (order.toLowerCase() === "yes") {
    alert("Congratulations! Your order has been placed on " + address);
    alert(
      'Thank-you for you order "You will be now redirected to interface-page"'
    );
    window.location.href = "../index.html";
  } else if (order.toLowerCase !== "yes") {
    alert(
      "Sorry for any inconvenience \n You will be redirected to our interface page"
    );
    window.location.href = "../index.html";
  }
}
