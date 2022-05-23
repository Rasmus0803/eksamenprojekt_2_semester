
console.log("Dropdown activated");


function dropDown() {
    document.getElementById("vælgEmne").classList.toggle("show");
}

let opretArray = new Array("Subject", "Subscriptions", "Log In", "", "Andet");

    let dropdown = document.getElementById("vælgEmne");

    for (let i = 0; i < opretArray.length; ++i) {
        dropdown[dropdown.length] = new Option(opretArray[i], opretArray[i]);
    }

    function myFunction(e) {
      let txt;
      if (confirm("Send besked")) {
        txt = "Din besked er nu sendt!";
      } else {
        txt = "Besked annulleret";
      }
      document.getElementById("demo").innerHTML = txt;
      e.preventDefault(e)
      console.log(e)
    }
