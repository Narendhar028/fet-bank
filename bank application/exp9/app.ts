class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        } else {
            return false;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);

function makeDeposit() {
    const amountInput = document.getElementById("amount") as HTMLInputElement;
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        account.deposit(amount);
        updateBalance();
        showMessage(`Successfully deposited $${amount}`);
    } else {
        showMessage("Please enter a valid amount for deposit.");
    }
    amountInput.value = "";
}

function makeWithdrawal() {
    const amountInput = document.getElementById("amount") as HTMLInputElement;
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        const success = account.withdraw(amount);
        if (success) {
            updateBalance();
            showMessage(`Successfully withdrew $${amount}`);
        } else {
            showMessage("Insufficient funds for withdrawal.");
        }
    } else {
        showMessage("Please enter a valid amount for withdrawal.");
    }
    amountInput.value = "";
}

function updateBalance() {
    const balanceElement = document.getElementById("balance");
    if (balanceElement) {
        balanceElement.textContent = account.getBalance().toFixed(2);
    }
}

function showMessage(message: string) {
    const messageElement = document.getElementById("transaction-message");
    if (messageElement) {
        messageElement.textContent = message;
    }
}
