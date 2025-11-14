class SoftBank {
  balance: number = 0;
  constructor(amount: number) {
    this.balance += amount;
  }

  get checkBalance() {
    return this.balance;
  }
  set deposit(amount: number) {
    this.balance += amount;
  }
}

const usaSoftBank = new SoftBank(1000);
usaSoftBank.deposit = 2000;
