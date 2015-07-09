function Bank() {
	this.balance = 100;
}

Bank.prototype = {
    credit: function credit(input) {
        this.balance += input;
    },

    debit: function debit(input) {
        this.balance -= input;
    }
};

var newNum = new Bank(100);

for( var i = 0; i < 3; i++) {
    var creditAmount = parseInt(prompt("Deposit amount?"));
  newNum.credit(creditAmount);

}

for(var i = 0; i < 2; i++) {
  var debitAmount = parseInt(prompt("Debit amount?"));
  newNum.debit(debitAmount);
}

console.log(newNum.balance);
