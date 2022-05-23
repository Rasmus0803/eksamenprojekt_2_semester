
console.log("Dropdown activated");


function dropDown() {
    document.getElementById("vælgEmne").classList.toggle("show");
}

let opretArray = new Array("Subject", "Subscriptions", "Log In", "Support", "Other");

    let dropdown = document.getElementById("vælgEmne");

    for (let i = 0; i < opretArray.length; ++i) {
        dropdown[dropdown.length] = new Option(opretArray[i], opretArray[i]);
    }
