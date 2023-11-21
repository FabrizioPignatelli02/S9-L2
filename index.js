var Cliente = /** @class */ (function () {
    function Cliente(_name, _surname, _age, _balance) {
        this.balanceInit = 0;
        this.name = _name;
        this.surname = _surname;
        this.age = _age;
        this.balanceInit = _balance;
    }
    Cliente.prototype.getCliente = function () {
        return "".concat(this.name, " ").concat(this.surname, " di anni ").concat(this.age, " possiede un conto presso la nostra banca con saldo ").concat(this.balanceInit, " \u20AC");
    };
    Cliente.prototype.oneDeposit = function (money) {
        console.log("Da versare:", money);
        this.balanceInit = this.balanceInit + money;
        return this.balanceInit;
    };
    Cliente.prototype.oneWithDray = function (money) {
        console.log("Da ritirare:", money);
        this.balanceInit = this.balanceInit - money;
        return this.balanceInit;
    };
    return Cliente;
}());
var aMom = document.getElementById("aMom");
var aSon = document.getElementById("aSon");
aMom === null || aMom === void 0 ? void 0 : aMom.addEventListener("click", showBankMom);
aSon === null || aSon === void 0 ? void 0 : aSon.addEventListener("click", showBankSon);
function showBankMom() {
    aMom.href = "./bank.html?id=".concat("mom");
}
function showBankSon() {
    aSon.href = "./bank.html?id=".concat("son");
}
