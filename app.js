const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#button-next");

const divCashReceived = document.querySelector(".div-cash-received");
const cashReceived = document.querySelector("#cash-received");
const checkButton = document.querySelector("#button-check");

const errorMessage = document.querySelector("#error-message");

const divReturnAmount = document.querySelector(".div-return-amount");
const returnAmountValue = document.querySelector("#amount");
const returnChange = document.querySelector(".return-change");
const notes = document.querySelectorAll(".notes");

// note values array
const noteValues = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener ("click", () => {
    hideErrorMessage();

    if (billAmount.value <= 0) {
        showErrorMessage("Invalid value entered.");
    } else {
        divCashReceived.style.display = "block";
    }
});

checkButton.addEventListener ("click", () => {
    hideErrorMessage();

    if (cashReceived.value < 0) {
        showErrorMessage("Invalid value entered");
    } else if (cashReceived.value < billAmount.value) {
        returnAmountValue.style.display = "none";
        showErrorMessage("Cash received is less that bill amount.");
    } else if (billAmount.value === cashReceived.value) {

        showErrorMessage("No amount needs to be returned");
    } else {
        calculateChange(billAmount.value, cashReceived.value);
    }
});

function calculateChange (bill, cash) {
    divReturnAmount.style.display = "block";

    var returnAmount = cash - bill;
    returnAmountValue.innerText = returnAmount;

    for (i = 0; i < noteValues.length; i++) {
        var numberOfNotes = Math.trunc(returnAmount / noteValues[i]);
        returnAmount %= noteValues[i];

        notes[i].innerText = numberOfNotes;

    }
}

function showErrorMessage (text) {
    errorMessage.style.display = "block";
    errorMessage.innerText = text;
}

function hideErrorMessage () {
    errorMessage.style.display = "none";
}

