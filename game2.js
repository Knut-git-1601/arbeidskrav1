//Funksjonskrav 2

// Dragen skal gjøre et motangrep umiddelbart når den blir angrepet av en helt.
// - Dragen skal angripe en tilfeldig helt. Det er altså 1⁄3 sjanse for hver helt å bli angrepet.
// Dragen kan kun angripe helter som er i live, “alive”-propertyen for helten må være true.
// Det skal komme en ny alert hvor det står:
//“(Dragens name) har angrepet (Heltens name)!”
//- Helten som ble angrepet sitt liv (currentHP) skal bli trukket med dragens damage.
//- Heltens currentHP blir oppdatert i arrayet
// Påkrevde teknikker: alert, function, onclick/eventListener, manipulering av array-objekter 2

document.addEventListener("DOMContentLoaded", (event) => {              // Legger til en event listener som venter på at hele dokumentet (HTML) skal være ferdig lastet
  const dragonHealthTxt = document.querySelector(".dragon-health-txt"); // Henter referansen til elementet som viser dragens nåværende helse, slik at teksten kan oppdateres senere når dragen tar skade
  const updateHeroHealthTxt = (hero) => {                               // Definerer en arrow function "updateHeroHealthTxt" som tar en "hero" object som argument. Denne funksjonen
    document.querySelector(                                             // Setter innholdet av det valgte elementet (som viser heltenes helse) til å vise heltenes nåværende helse sammenlignet med maks helse
      `#${hero.id}-health-txt`).textContent = `${hero.currentHP} / ${hero.maxHP} HP`;   // Setter innholdet av det valgte elementet (som viser heltenes helse) til å vise heltenes nåværende helse sammenlignet med maks helse
  };                                                                                    // Lukker definisjonen av "updateHeroHealthTxt" funksjonen

  function dragonAttack() {                                             // Definerer en funksjon "dragonAttack" som håndterer logikken for dragens angrep
    const aliveHeroes = heroesArray.filter((hero) => hero.alive);       // Lager en ny array "aliveHeroes" som inneholder alle helter som er i live
    if (aliveHeroes.length > 0) {                                                         // Sjekker om det finnes helter som fortsatt er i live før dragens angrep utføres
      const targetHero = aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];     // Velger en tilfeldig helt fra de levende heltene. Bruker "Math.random" for å generere et tilfeldig tall mellom 0 og 1, og multipliserer dette med lengden på "aliveHeroes" gir en indeks for en tilfeldig hel
      targetHero.currentHP -= dragonObject.damage;                                        // Trekk skade fra helten dragen gjør ("dragonObject.damage") fra den valgte heltens nåværende helse ("targetHero.currentHP")
      if (targetHero.currentHP <= 0) {                                                    // Sjekker om helten er død. Hvis helten er død, vil "targetHero.currentHP" være 0 eller mindre
        targetHero.currentHP = 0;                                                         // Setter heltenes nåværende helse til 0 for å forhindre negative helseverdier.
        targetHero.alive = false;                                                         // Markerer helten som død ved å sette "alive" propertyen til "false"
        alert(`${dragonObject.name} har angrepet og drept ${targetHero.name}!`);          // Viser en "alert"-melding om at dragen har angrepet og drept helten
      } else {                                                                            // Hvis helten ikke er død, vis en melding om at dragen har angrepet helten (helsen er over 0)
        alert(`${dragonObject.name} har angrepet ${targetHero.name}!`);                   // Viser en "alert"-melding om at dragen har angrepet helten
      }                                                                                   // Lukker if-else - blokken
      updateHeroHealthTxt(targetHero);                                                    // Kaller "updateHeroHealthTxt" funksjonen for å oppdatere brukergrensesnittet med den angrepne heltens oppdaterte helsetall
      if (aliveHeroes.length === 1 && !targetHero.alive) {                                // Sjekker om dette var den siste levende helten. Hvis "aliveHeroes" kun inneholdt en helt og den helten er nå død, er spillet over.
        alert("Game over! Alle helter er døde.");                                         // Viser en "alert" melding om at alle helter er døde og spillet er over
      }                                                                                   // Avslutter if-blokken
    }                                                                                     // Avslutter "dragonAttack" funksjonen
  }                                                                                       // Avslutter "dragonAttack" funksjonen

  function attackHero(hero) {                                                             // Definerer en funksjon "attackHero" som håndterer logikken når en helt angriper dragen
    if (dragonObject.alive) {                                                             // Sjekker om dragen fortsatt er i live. Hvis dragen er død, skal den ikke utføre motangrep.
      dragonAttack();                                                                     // Kaller "dragonAttack" funksjonen for å utføre et motangrep umiddelbart etter heltenes angrep
    }                                                                                     // Avslutter if-blokken
  }                                                                                       // Avslutter "Attack "attackHero funksjonen
  heroesArray.forEach((hero) => {                                                         // Går gjennom hvert "hero" objekt i "heroesArray2 med "foreEach" metoden
    const heroElement = document.getElementById(hero.id);                                 // Henter DOM elementet for hver helt basert på heltens id "hero.id"
    heroElement.addEventListener("click", () => attackHero(hero));                        // Når klikk på "heroElement" vil funksjonen "attackhero" bli kalt
                                                                                          // med den relevante helten(representert) av "hero-objektet" vil angripe.  });
  });                                                                                     // Avslutter "forEach" løkken for heltene
});                                                                                       // Avslutter "DOMContentLoaded" event listeneren
