// Funksjonskrav 5
    // Spillet er vunnet!
    // - Dersom dragens currentHP blir 0 eller mindre, har helten(e) vunnet spillet!
    // - Dragen skal forsvinne fra nettleseren
    // - En alert skal dukke opp:
    // “Gratulerer, du har vunnet spillet!”

function checkIfGameIsWon() {                                   // Sjekker om spillet er vunnet. Sjekker om dragens helsepoeng er 0 eller mindre
  if (dragonObject.currentHP <= 0) {                               // Sjekker om dragens helsepoeng er 0 eller mindre
    const dragonElement = document.getElementById("dragon");    // Anta at dragen har en ID 'dragon'. Henter DOM elementet for dragen ved hjelp av dragenes unike id.
    if (dragonElement) {                                        // Sjekker om elementet faktisk finnes før det fjernes fra DOM (Document Object Model)
      dragonElement.remove();                                   // Dette hindrer feil hvis elementet allerede er fjernet eller ikke finnes
    }                                                           // Avslutter if setningen
    alert("Gratulerer, du har vunnet spillet!");                // Viser en alert-melding om at spillet er vunnet
  }                                                             // Avslutter "if" setningen
}                                                               // Avslutter "checkIfGameIsWon" funksjonen
