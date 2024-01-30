// Funksjonskrav 4
// Lag js kode for game.hmtl filen av denne beskrivelsen:Spillet er tapt!
// Dersom alle heltene er døde og dragen har en currentHP over 0, er spillet tapt. Alle heltene skal nå være borte fra skjermen.
// En alert skal dukke opp hvor det står:
// “Spillet er tapt! (Dragens name) har vunnet!”

function checkGameOver() {                                           

    const allHeroesDead = heroesArray.every((hero) => !hero.alive);     // Sjekker om alle heltene er døde. Hvis alle heltene er døde, vil "hero.alive" være "false" for alle heltene.
                                                                    
                                                                    

                                                    
    const dragonAlive = dragonObject.currentHP > 0;                     // Sjekker om dragen fortsatt er i live. Hvis dragen er død, vil "dragonObject.currentHP" være 0 eller mindre.
                            

  if (allHeroesDead && dragonAlive) {                                   // Fjerner alle helter fra skjermen
    heroesArray.forEach((hero) => {                                     // Går igjennom alle heltene i arrayet "heroesArray" med "forEach" 
      const heroElement = document.getElementById(hero.id);             // Henter DOM elementet for hver helt ved hjelp av heltenes unike id.
      if (heroElement) {                                                // Sjekker om elementet faktisk finnes før det fjernes fra DOM (Document Object Model)
        heroElement.style.display = "none";                             // Dette hindrer feil hvis elementet allerede er fjernet eller ikke finnes
      }                                                                 // Avslutter if setningen
    });                                                                 // Avslutter "forEach" løkken for heltene
                                                                        // Viser en alert-melding om at spillet er tapt
    alert(`Spillet er tapt! ${dragonObject.name} har vunnet!`);         // Viser en alert-melding om at spillet er tapt
  }                                                                     // Avslutter "if" setningen
}                                                                       // Avslutter "checkGameOver" funksjonen
