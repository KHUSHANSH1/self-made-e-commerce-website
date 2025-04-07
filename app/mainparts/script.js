let order;
let input;
let address;

function tv() {
  alert('Your order for tv is being proceded \n\nclick "Ok" to proceed');
  address = window.prompt("Please enter your address:- ");
  order = window.prompt(
    'you Order for "T.V" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed  '
  );
  if (order.toLowerCase() === "yes") {
    alert("Congratulations! Your order has been placed on " + address);
  } else if (order.toLowerCase !== "yes") {
    alert(
      "Sorry for any inconvenience \n You will be redirected to our interface page"
    );
    alert("Only cash on delievery accepted");
    window.location.href = "index.html";
  }
}
function bag() {
  alert('Your order for bag is being proceded \n\nclick "Ok" to proceed');
  address = window.prompt("Please enter your address:- ");
  order = window.prompt(
    'you Order for "Bag" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed  '
  );
  if (order.toLowerCase() === "yes") {
    alert("Congratulations! Your order has been placed on " + address);
  } else if (order.toLowerCase !== "yes") {
    alert(
      "Sorry for any inconvenience \n You will be redirected to our interface page"
    );
    alert("Only cash on delievery accepted");
    window.location.href = "index.html";
  }
}
function chair() {
  alert('Your order for chair is being proceded \n\nclick "Ok" to proceed');
  address = window.prompt("Please enter your address:- ");
  order = window.prompt(
    'you Order for "Chair" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed  '
  );
  if (order.toLowerCase() === "yes") {
    alert("Congratulations! Your order has been placed on " + address);
    alert("Only cash on delievery accepted");
  } else if (order.toLowerCase !== "yes") {
    alert(
      "Sorry for any inconvenience \n You will be redirected to our interface page"
    );
    window.location.href = "index.html";
  }
}

function tvredirect(){
    window.location.href = "htmltv/tv.html";

}
function bagredirect(){
    window.location.href = "htmlbag/bag.html";

}

function chairredirect(){
    window.location.href = "htmlchair/chair.html";

}