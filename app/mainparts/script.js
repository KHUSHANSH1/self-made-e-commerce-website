let order;
let input;
let address;

function tv() {
  alert('Your order for TV is being processed \n\nclick "Ok" to proceed');
  const address = window.prompt("Please enter your address:- ");
  const order = window.prompt(
    'Your Order for "TV" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed'
  );

  if (order.toLowerCase() === "yes") {
    // Process order in background
    const xhr = new XMLHttpRequest();
    const orderData = {
      item: "TV",
      address: address,
      email: "khushanshyadav3@gmail.com",
    };

    // In a real application, this would send to your server
    // For now, we'll just show a success message
    alert(
      "Thank you for your order! Your TV will be delivered to " +
        address +
        " within 3-5 business days."
    );
    alert("Our team will contact you shortly to confirm the delivery details.");
  } else {
    alert("Order cancelled. You will be redirected to our main page.");
    window.location.href = "index.html";
  }
}

function bag() {
  alert('Your order for bag is being processed \n\nclick "Ok" to proceed');
  const address = window.prompt("Please enter your address:- ");
  const order = window.prompt(
    'Your Order for "Bag" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed'
  );

  if (order.toLowerCase() === "yes") {
    // Process order in background
    const xhr = new XMLHttpRequest();
    const orderData = {
      item: "Bag",
      address: address,
      email: "khushanshyadav3@gmail.com",
    };

    // In a real application, this would send to your server
    // For now, we'll just show a success message
    alert(
      "Thank you for your order! Your bag will be delivered to " +
        address +
        " within 3-5 business days."
    );
    alert("Our team will contact you shortly to confirm the delivery details.");
  } else {
    alert("Order cancelled. You will be redirected to our main page.");
    window.location.href = "index.html";
  }
}

function chair() {
  alert('Your order for chair is being processed \n\nclick "Ok" to proceed');
  const address = window.prompt("Please enter your address:- ");
  const order = window.prompt(
    'Your Order for "Chair" will be delivered to ' +
      address +
      "\n" +
      'Type "Yes" and hit enter to proceed'
  );

  if (order.toLowerCase() === "yes") {
    // Process order in background
    const xhr = new XMLHttpRequest();
    const orderData = {
      item: "Chair",
      address: address,
      email: "khushanshyadav3@gmail.com",
    };

    // In a real application, this would send to your server
    // For now, we'll just show a success message
    alert(
      "Thank you for your order! Your chair will be delivered to " +
        address +
        " within 3-5 business days."
    );
    alert("Our team will contact you shortly to confirm the delivery details.");
  } else {
    alert("Order cancelled. You will be redirected to our main page.");
    window.location.href = "index.html";
  }
}

function tvredirect() {
  window.location.href = "htmltv/tv.html";
}

function bagredirect() {
  window.location.href = "htmlbag/bag.html";
}

function chairredirect() {
  window.location.href = "htmlchair/chair.html";
}
