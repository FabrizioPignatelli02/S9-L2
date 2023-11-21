var Cliente = /** @class */ (function () {
    function Cliente(_name, _surname, _age) {
        this.balanceInit = 0;
        this.name = _name;
        this.surname = _surname;
        this.age = _age;
    }
    Cliente.prototype.getBalance = function (money) {
        return "Saldo disponibile: ".concat(money, " \u20AC");
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
window.addEventListener("load", function () {
    console.log("Pagina caricata");
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    console.log("Id:", id);
    if (id === "mom") {
        var momAccount = new Cliente("Alessia", "Sante", "32");
        completeBanking(momAccount);
    }
    else if (id === "son") {
        console.log("Ciao Piccolo");
        var sonAccount = new Cliente("Giorgio", "Canto", "16");
        completeBanking(sonAccount);
    }
});
function completeBanking(person) {
    var title = document.createElement("h1");
    title.innerText = "Benvenuta " + person.name + " " + person.surname;
    title === null || title === void 0 ? void 0 : title.classList.add("mt-5");
    document.body.classList.add("text-center");
    document.body.appendChild(title);
    var balanceSubtitle = document.createElement("h3");
    balanceSubtitle.innerText = "Saldo disponibile: " + person.balanceInit + "€";
    document.body.appendChild(balanceSubtitle);
    var inputDeposit = document.createElement("input");
    inputDeposit.type = "text";
    inputDeposit.placeholder = "Inserisci l'importo da depositare";
    var buttonDeposit = document.createElement("button");
    buttonDeposit.innerText = "Deposita";
    buttonDeposit === null || buttonDeposit === void 0 ? void 0 : buttonDeposit.classList.add("me-5");
    buttonDeposit === null || buttonDeposit === void 0 ? void 0 : buttonDeposit.addEventListener("click", deposit);
    function deposit() {
        var importo = parseInt(inputDeposit === null || inputDeposit === void 0 ? void 0 : inputDeposit.value);
        var ritorno = person.oneDeposit(importo);
        balanceSubtitle.innerText = "Saldo disponibile: " + ritorno + "€";
        inputDeposit.value = "";
    }
    var inputPrel = document.createElement("input");
    inputPrel.type = "text";
    inputPrel.placeholder = "Inserisci l'importo da prelevare";
    var buttonPrel = document.createElement("button");
    buttonPrel.innerText = "Preleva";
    buttonPrel === null || buttonPrel === void 0 ? void 0 : buttonPrel.addEventListener("click", prel);
    function prel() {
        var importo = parseInt(inputPrel === null || inputPrel === void 0 ? void 0 : inputPrel.value);
        var ritorno = person.oneWithDray(importo);
        balanceSubtitle.innerText = "Saldo disponibile: " + ritorno + "€";
        inputPrel.value = "";
    }
    document.body.appendChild(inputDeposit);
    document.body.appendChild(buttonDeposit);
    document.body.appendChild(inputPrel);
    document.body.appendChild(buttonPrel);
}
