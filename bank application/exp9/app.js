var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        else {
            return false;
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
function makeDeposit() {
    var amountInput = document.getElementById("amount");
    var amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        account.deposit(amount);
        updateBalance();
        showMessage("Successfully deposited $".concat(amount));
    }
    else {
        showMessage("Please enter a valid amount for deposit.");
    }
    amountInput.value = "";
}
function makeWithdrawal() {
    var amountInput = document.getElementById("amount");
    var amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        var success = account.withdraw(amount);
        if (success) {
            updateBalance();
            showMessage("Successfully withdrew $".concat(amount));
        }
        else {
            showMessage("Insufficient funds for withdrawal.");
        }
    }
    else {
        showMessage("Please enter a valid amount for withdrawal.");
    }
    amountInput.value = "";
}
function updateBalance() {
    var balanceElement = document.getElementById("balance");
    if (balanceElement) {
        balanceElement.textContent = account.getBalance().toFixed(2);
    }
}
function showMessage(message) {
    var messageElement = document.getElementById("transaction-message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
