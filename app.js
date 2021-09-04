const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#button-next");

const divCashReceived = document.querySelector(".div-cash-received");
const cashReceived = document.querySelector("#cash-received");
const checkButton = document.querySelector("#button-check");

const message = document.querySelector("#message");

const divReturnAmount = document.querySelector(".div-return-amount");
const returnAmountValue = document.querySelector("#amount");
const notes = document.querySelectorAll(".notes");

// note values array
const noteValues = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener ("click", () => {
    hideMessage();

    if (billAmount.value <= 0) {
        showMessage("Invalid value entered.");
        divReturnAmount.style.display = "none";
    } else {
        divCashReceived.style.display = "block";
        nextButton.style.display = "none";
    }
});

checkButton.addEventListener ("click", () => {
    hideMessage();

    if (billAmount.value <= 0 || cashReceived.value <= 0) {
        showMessage("Invalid value entered");
        divReturnAmount.style.display = "none";
    } else if (cashReceived.value < billAmount.value) {
        divReturnAmount.style.display = "none";
        showMessage("Cash received is less that bill amount.");
    } else {
        calculateChange(billAmount.value, cashReceived.value);
    }
});

function calculateChange (bill, cash) {
    var returnAmount = cash - bill;
    
    if (returnAmount === 0) {
        divReturnAmount.style.display = "none";
        showMessage("No amount needs to be returned");
    } else {
        divReturnAmount.style.display = "block";

        returnAmountValue.innerText = returnAmount;

        for (i = 0; i < noteValues.length; i++) {
            var numberOfNotes = Math.trunc(returnAmount / noteValues[i]);
            returnAmount %= noteValues[i];

            notes[i].innerText = numberOfNotes;

        }
    }
}

function showMessage (text) {
    message.style.display = "block";
    message.innerText = text;
}

function hideMessage () {
    message.style.display = "none";
}

