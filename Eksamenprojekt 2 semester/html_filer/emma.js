
console.log("Dropdown activated");


function dropDown() {
    document.getElementById("vaelgEmne").classList.toggle("show");
}

let opretArray = new Array("Subject", "Subscriptions", "Log In", "Support", "Other");

    let dropdown = document.getElementById("vaelgEmne");

    for (let i = 0; i < opretArray.length; ++i) {
        dropdown[dropdown.length] = new Option(opretArray[i], opretArray[i]);
    }

    function myFunction(e) {
      let txt;
      if (confirm("Send Messeage")) {
        txt = "Your message has been sent!";
      } else {
        txt = "Messeage cancelled";
      }
      document.getElementById("demo").innerHTML = txt;
      e.preventDefault()
      console.log(e)
    }
