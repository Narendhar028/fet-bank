class BankAccount {
    balance: number;

    constructor() {
        this.balance = 0;
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    withdraw(amount: number) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

const account = new BankAccount();

function updateBalance() {
    const balanceElement = document.getElementById('balance');
    if (balanceElement) {
        balanceElement.textContent = `Balance: $${account.balance}`;
    }
}

function deposit() {
    const amountInput = <HTMLInputElement>document.getElementById('amount');
    if (amountInput) {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount)) {
            if (account.deposit(amount)) {
                updateBalance();
                amountInput.value = '';
            } else {
                alert('Invalid amount for deposit');
            }
        } else {
            alert('Please enter a valid number');
        }
    }
}

function withdraw() {
    const amountInput = <HTMLInputElement>document.getElementById('amount');
    if (amountInput) {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount)) {
            if (account.withdraw(amount)) {
                updateBalance();
                amountInput.value = '';
            } else {
                alert('Insufficient funds or invalid amount for withdrawal');
            }
        } else {
            alert('Please enter a valid number');
        }
    }
}

updateBalance();