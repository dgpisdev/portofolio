//contact form validation start
// reset function for imputs bellow
function reset() {
  document.getElementById("name-input").value = "";
  document.getElementById("email-input").value = "";
  document.getElementById("text-area").value = "";
}

// refresh page

function refresh() {
  window.location.reload();
}

// function that verifies the correctness of the data

function submitForm() {
  const yourName = document.getElementById("name-input").value;
  const emailAdress = document.getElementById("email-input").value;
  const yourMessage = document.getElementById("text-area").value;
  const redMessage = "You must introduce all the required information!";
  const greenMessage = "Your message has been sent successfully!";
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ((yourName == "") | (emailAdress == "") | (yourMessage == "")) {
    document.getElementById("message-output-red").innerHTML = redMessage;
  } else if (emailAdress.match(mailformat)) {
    document.getElementById("message-output-green").innerHTML = greenMessage;
    document.getElementById("message-output-red").style.display = "none";
    refresh();
    reset();
  } else {
    document.getElementById("message-output-red").innerHTML =
      "You have entered an invalid email address!";
  }
}
