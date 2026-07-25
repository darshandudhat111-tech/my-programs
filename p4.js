class BankAccount {
    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Updated Balance: ${this.balance}`);
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrewn: ${amount}`);
            console.log(`Updated Balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
            console.log(`Updated Balance: ${this.balance}`);
        }
    }
}

const accounts = new BankAccount("John Doe", 10000);
console.log("Account Holder: "+ accounts.accountHolder);
console.log("Initial Balance:"+accounts.balance);

accounts.deposit(5000);

accounts.withdraw(3000);

accounts.withdraw(100000);

// accounts.deposit(1000000);
