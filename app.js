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

    if (returnAmount > 0) {
        divReturn.style.display = "block";
        returnText.innerText = returnAmount;

        for (i = 0; i < noteValues.length; i++) {
            var noOfNotes = Math.trunc(returnAmount/noteValues[i]);
            returnAmount %= noteValues[i];

            notes[i].innerText = noOfNotes;
        }
    } else {
        divReturn.style.display = "none";
        showMessage("No change needs to be returned")
    }
}

function showMessage (text) {
    message.style.display = "block";
    message.innerText = text;
}

function hideMessage () {
    message.style.display = "none";
}


//click handlers
nextButton.addEventListener ("click", () => {
    hideMessage();

    if (billAmount.value) {
        if (Number(billAmount.value) > 0) {
            divCashReceived.style.display = "block";
            nextButton.style.display = "none";
        } else {
            showMessage("Bill amount cannot be 0 or negative.")
        }
    } else {
        showMessage("Enter bill amount to continue");
    }
});

checkButton.addEventListener ("click", () => {
    hideMessage();

    var billAmt = Number(billAmount.value);
    var cashRcv = Number(cashReceived.value);

    if (billAmount.value && cashReceived.value) {
        if (billAmt > 0 && cashRcv > 0) {
            if (billAmt <= cashRcv) {
                calculateChange(billAmt, cashRcv);
            } else {
                divReturn.style.display = "none";
                showMessage("Cash received cannot be less that bill amount.");
            }
        } else {
            divReturn.style.display = "none";
            showMessage("Bill Amount or cash received cannot be 0 or negative")
        }
    } else {
        divReturn.style.display = "none";
        showMessage("Enter values in both fields to continue.")
    }
});