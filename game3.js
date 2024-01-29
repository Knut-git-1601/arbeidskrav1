//Funksjonskrav 3
// En helt er død. Dersom en helt sin currentHP blir 0 eller mindre, skal helten(e) forsvinne
// fra nettleseren og "alive" propertyen skall bli false. Denne helten er nå død, og dragen
// vil ikke vurdere å angripe denne helten. Dersom alle heltene er døde, skal spillet være over.

document.addEventListener("DOMContentLoaded", (event) => {  //Legger til en event listener som venter på at hele dokumentet (HTML) 
                                                            //skal være ferdig lastet før scriptet kjøres
  
    const dragonHealthTxt = document.querySelector(".dragon-health-txt");
    // Henter referansen til elementet som viser dragens nåværende helse, slik at teksten kan oppdateres senere når dragen tar skad
    
    const updateHeroHealthTxt = (hero) => { //Definerer en arrow funksjon "updateHeroHealthTxt" som tar en "hero" som argument. Denne
        //Denne funksjonen vil være ansvarlig for å oppdatere heltenes helsevisning i brukergrensesnittet.
    document.querySelector(`#${hero.id}-health-txt`).textContent = `${hero.currentHP} / ${hero.maxHP} HP`;
  }; // Setter innholdet av det valgte elementet (som viser heltenes helse) til å vise heltenes nåværende helse sammenlignet med maks helse

  const removeDeadHero = (hero) => {//Definerer en ny funksjon "removeDeadHero", som også tar en "hero" som argument. 
                                    //Denne funksjonen vil fjerne den visuelle representasjonen av helten fra nettleseren når helten er død.
    const heroElement = document.getElementById(hero.id);// Henter HTML elementet som representer helten, basert på heltenes unike ID.
    if (heroElement) { //Sjekker om elementet faktisk finnes før det fjernes fra DOM (Document Object Model)
        heroElement.remove(); // Sjekker om elementet faktisk finnes før det fjernes fra DOM. jerner helten fra nettleseren
                              // Dette hindrer feil hvis elementet allerede er fjernet eller ikke finnes
    }
  }; //Lukker definisjonen av "removeDeadHero" funksjonen.

  function dragonAttack() { // Starter definisjonen av "dragonAttack-funksjonen som håndterer logikken for dragens angrep"
    } 
    herosArray.forEach(hero => {
        if hero.alive) { //
    })

  function attackHero(hero) { // Starter definisjonen av "attackHero-funksjonen som håndterer logikken når en helt angriper dragen"

    // Sjekk etter heltenes død
    if (hero.currentHP <= 0) { //Etter heltenes angrep, sjekker vi om heltenes nåværende helse er 0 eller mindre. Dette
                               // indikerer at helten kan være død.
      hero.alive = false; //  Marker helten som død
      removeDeadHero(hero); // Fjern den døde helten fra nettleseren
    }

    // Utfør dragens motangrep hvis dragen fortsatt er i live
    if (dragonObject.alive) { //Sjekker om dragen fortsatt er i live. Hvis dragen er død, skal den ikke utføre motangrep.
      dragonAttack(); //Utfører dragens motangrep ved å kalle "dragonAttack" funksjonen.
    }
  }

  heroesArray.forEach((hero) => { //Går gjennom hver helt i "heroesArray" med "forEach" metoden.
    const heroElement = document.getElementById(hero.id); //Henter DOM elementet for hver helt ved hjelp av heltenes unike ID.
      heroElement.addEventListener("click", () => attackHero(hero));//Legger til en event listener for "click" hendelsen til hver helt.
      // Når helten klikkes på, vil "attackHero" funksjonen bli kalt med den aktuelle heelten som argument.
  }); //Avslutter "Foreach" løkken
}); //Avslutter event listener for "DOMContentLoaded" hendelsen
