const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#button-next");

const divCashReceived = document.querySelector(".div-cash-received");
const cashReceived = document.querySelector("#cash-received");
const checkButton = document.querySelector("#button-check");

const message = document.querySelector("#message");

const divReturn = document.querySelector(".return");
const returnText = document.querySelector("#amount");
const notes = document.querySelectorAll(".notes");

// note values array
const noteValues = [2000, 500, 100, 20, 10, 5, 1];

// functions
function calculateChange (bill, cash) {
    var returnAmount = cash - bill;

    if (returnAmount === 0) {

    } else {
        showMessage("No amount needs to be returned");
    }
    
    if (returnAmount == 0) {
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

nextButton.addEventListener ("click", () => {
    hideMessage();

    // var billAmt = Number(billAmount.value);

    if (billAmount.value) {
        if (billAmount.value > 0) {
            divCashReceived.style.display = "block";
            nextButton.style.display = "none";
        } else {
            divReturnAmount.style.display = "none";
            showMessage("Bill amount cannot be 0 or negative.")
        }
    } else {
        divReturnAmount.style.display = "none";
        showMessage('Enter value in the field to continue');
    }
});

checkButton.addEventListener ("click", () => {
    hideMessage();

    var billAmt = Number(billAmount.value);
    var cashRcvd = Number(cashReceived.value);

    if (billAmt && cashRcvd) {
        if (billAmt > 0 && cashRcvd > 0) {
            if (billAmt <= cashRcvd) {
                calculateChange(billAmt, cashRcvd);
            } else {
                divReturnAmount.style.display = "none";
                showMessage("Cash received is less that bill amount.");
            }
        } else {
            showMessage("Bill amount or cash received cannot have 0 or negative value.")
        }
    } else {
        divReturnAmount.style.display = "none";
        showMessage('Enter value in bothe the fields to continue');
    }
});


