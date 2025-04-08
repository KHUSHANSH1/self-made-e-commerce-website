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
    const emailSubject = "New TV Order";
    const emailBody = `New order details:\n\nItem: Chair\nDelivery Address: ${address}\n\nPlease process this order. By clicking "send" button`;
    const emailLink = `mailto:khushanshyadav3@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    alert("Congratulations! Your order has been placed on " + address);
    alert("An email has been sent to our owner \"Khushansh\"to confirm your order.");
    window.location.href = emailLink;
  } else {
    alert(
      "Sorry for any inconvenience \n You will be redirected to our interface page"
    );
    alert("Only cash on delivery accepted");
    window.location.href = "../index.html";
  }
}
