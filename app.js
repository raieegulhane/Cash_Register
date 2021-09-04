const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#button-next");

const divCashReceived = document.querySelector(".div-cash-received");
const cashReceived = document.querySelector("#cash-received");
const checkButton = document.querySelector("#button-check");

const errorMessage = document.querySelector("error-message");

const notes = document.querySelectorAll(".notes");

// note values array
const noteValues = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener ("click", () => {
    if (billAmount.value < 0) {
        showErrorMessage("Invalid amount entered.");
    } else {
        divCashReceived.style.display = "block";
    }
});

function showErrorMessage (text) {
    errorMessage.style.display = "block";
    errorMessage.innerValue = text;
}

