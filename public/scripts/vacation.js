document.getElementById("booking-form").onsubmit = () => {

let isValid = true;

clearErrors();

let traveler = document.getElementById("travelers").value.trim();
if (traveler <= 0 || traveler == "") {
    document.getElementById("traveler-err").style.display = "block";
    isValid = false;
}

let departSelected = document.getElementById("destination").value;
if (departSelected === "none") {
    document.getElementById("depart-err").style.display = "block";
    isValid = false;
}

return isValid;

};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}