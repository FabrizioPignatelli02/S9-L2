
const aMom = document.getElementById("aMom") as HTMLAnchorElement | null
const aSon = document.getElementById("aSon") as HTMLAnchorElement | null

aMom?.addEventListener("click", showBankMom)
aSon?.addEventListener("click", showBankSon)

function showBankMom () {
    aMom!.href = `./bank.html?id=${"mom"}`
}

function showBankSon () {
    aSon!.href = `./bank.html?id=${"son"}`
}