class Cliente {
    name: string;
    surname: string;
    age: string;
    balanceInit: number = 0;
    constructor(_name: string, _surname: string, _age: string,){
        this.name = _name;
        this.surname = _surname;
        this.age = _age;
    }

    getBalance(money): string {
        return `Saldo disponibile: ${money} €`
    }

    oneDeposit(money): number{
        console.log("Da versare:", money);
        this.balanceInit = this.balanceInit + money;
        return this.balanceInit
    }

    oneWithDray(money): number{
        console.log("Da ritirare:", money)
        this.balanceInit = this.balanceInit - money;
        return this.balanceInit
    }

}

window.addEventListener("load", () =>{
    console.log("Pagina caricata")

    const urlParams:any = new URLSearchParams(window.location.search)
    const id:string = urlParams.get("id")
    console.log("Id:", id)

    if(id === "mom"){
        let momAccount:any = new Cliente("Alessia", "Sante", "32")
        completeBanking(momAccount)
        
        
    }else if(id === "son"){
        console.log("Ciao Piccolo")
        let sonAccount:any = new Cliente("Giorgio", "Canto", "16")
        completeBanking(sonAccount)
    }
})


function completeBanking (person){
    const title = document.createElement("h1") as HTMLHeadElement | null
    title!.innerText = "Benvenuta " + person.name + " " + person.surname
    title?.classList.add("mt-5")
    document.body.classList.add("text-center")
    document.body.appendChild(title)

    const balanceSubtitle = document.createElement("h3") as HTMLHeadElement | null
    balanceSubtitle!.innerText = "Saldo disponibile: " + person.balanceInit + "€"
    document.body.appendChild(balanceSubtitle)

    const inputDeposit = document.createElement("input") as HTMLInputElement | null
    inputDeposit!.type = "text"
    inputDeposit!.placeholder = "Inserisci l'importo da depositare"
    const buttonDeposit = document.createElement("button") as HTMLButtonElement | null
    buttonDeposit!.innerText = "Deposita"
    buttonDeposit?.classList.add("me-5")

    buttonDeposit?.addEventListener("click", deposit)

    function deposit () {
        const importo:number = parseInt(inputDeposit?.value)
        const ritorno = person.oneDeposit(importo)
        const tr = document.createElement("tr") as HTMLTableRowElement | null
        tr!.innerText = "Deposito: " + "+" + importo
        table?.appendChild(tr)
        balanceSubtitle!.innerText = "Saldo disponibile: "+ ritorno + "€"
        inputDeposit!.value = ""
    }

    const inputPrel = document.createElement("input") as HTMLInputElement | null
    inputPrel!.type = "text"
    inputPrel!.placeholder = "Inserisci l'importo da prelevare"
    const buttonPrel = document.createElement("button") as HTMLButtonElement | null
    buttonPrel!.innerText = "Preleva"

    buttonPrel?.addEventListener("click", prel)

    function prel () {
        const importo:number = parseInt(inputPrel?.value)
        const ritorno = person.oneWithDray(importo)
        const tr = document.createElement("tr") as HTMLTableRowElement | null
        tr!.innerText = "Prelievo: " + "-" + importo
        table?.appendChild(tr)
        balanceSubtitle!.innerText = "Saldo disponibile: "+ ritorno + "€"
        inputPrel!.value = ""
    }

    const table = document.createElement("table") as HTMLTableCaptionElement | null





    document.body.appendChild(inputDeposit)
    document.body.appendChild(buttonDeposit)
    document.body.appendChild(inputPrel)
    document.body.appendChild(buttonPrel)
    document.body.appendChild(table)

}


