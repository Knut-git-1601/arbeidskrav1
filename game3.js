//Funksjonskrav 3
// En helt er død. Dersom en helt sin currentHP blir 0 eller mindre, skal helten(e) forsvinne
// fra nettleseren og "alive" propertyen skall bli false. Denne helten er nå død, og dragen
// vil ikke vurdere å angripe denne helten. Dersom alle heltene er døde, skal spillet være over.

  document.addEventListener("DOMContentLoaded", (event) => {  //Legger til en event listener som venter på at hele dokumentet (HTML) 
                                                              //skal være ferdig lastet før scriptet kjøres
  
  const dragonHealthTxt = document.querySelector(".dragon-health-txt");
                                            // Henter referansen til elementet som viser dragens nåværende helse, slik at teksten kan 
                                            // oppdateres senere når dragen tar skade
    
  const updateHeroHealthTxt = (hero) => {   //Definerer en arrow funksjon "updateHeroHealthTxt" som tar en "hero" som argument.
                                            //Denne funksjonen vil være ansvarlig for å oppdatere heltenes helsevisning i brukergrensesnittet.
  document.querySelector(`${hero.id}-health-txt`).textContent = `${hero.currentHP} / ${hero.maxHP} HP`;
    };                                      // Setter innholdet av det valgte elementet (som viser heltenes 
                                            //helse) til å vise heltenes nåværende helse sammenlignet med maks helse

  const removeDeadHero = (hero) => {        //Definerer en ny funksjon "removeDeadHero", som også tar en "hero" som argument. 
                                            //Denne funksjonen vil fjerne den visuelle representasjonen av helten fra nettleseren når helten er død.
  const heroElement = document.getElementById(hero.id); // Henter HTML elementet som representer helten, basert på heltenes unike id.
    if (heroElement) {                      // Sjekker om elementet faktisk finnes før det fjernes fra DOM (Document Object Model)
      heroElement.remove();                 // Dette hindrer feil hvis elementet allerede er fjernet eller ikke finnes                        
    }                                       // Avslutter if setningen
  };                                        //Lukker definisjonen av "removeDeadHero" funksjonen.

  function dragonAttack() {               // Starter definisjonen av "dragonAttack-funksjonen som håndterer logikken for dragens angrep"
  const dragonDamage = 20;                // Setter "dragonDamage" til 20. Dette er den skaden som dragen vil gjøre på helten
  
    herosArray.forEach(hero => {            // Looper igjennom helgene. Går igjennom hver helt i arrayet "herosArray". For hver "hero" i arrayet, utføres koden innenfor "{}"
    if (hero.alive) {                     // Sjekker om helten lever. Utfører angrepet bare hvis "hero.alive" er "true" (det vil si at helten fortsatt er i live)
      
      hero.currentHP -= dragonDamage;     // Beregner skade på helten: Trekker skaden ("dragonDamage") fra heltenes nåværende helse ("hero.currentHP")
      if ((hero.currentHP) <= 0) {        // Sjekker om helten er død. Hvis helten er død, vil "hero.currentHP" være 0 eller mindre
        hero.currentHP = 0;               // Markerer helten som død. Setter heltenes "currentHP" til 0 for å unngå negative verdier.
        hero.alive = false;               // "Alive" til false for å indikere at helten er død.
        handleHeroDeath(hero);            // Kaller "handlerHeroDeath" funksjonen for å håndtere heltenes død
};                                        // Avslutter if setningen

  function attackHero(hero) {             // Starter definisjonen av "attackHero-funksjonen som håndterer logikken når en helt angriper dragen"                                    
    if (hero.currentHP <= 0) {            // Etter heltenes angrep, sjekker vi om heltenes nåværende helse er 0 eller mindre. Dette
                                          // indikerer at helten kan være død.
      hero.alive = false;                 // Marker helten som død
      removeDeadHero(hero);               // Fjern den døde helten fra nettleseren
    }                                     // Avslutter if setningen       

                                          // Utfør dragens motangrep hvis dragen fortsatt er i live
    if (dragonObject.alive) {             // Sjekker om dragen fortsatt er i live. Hvis dragen er død, skal den ikke utføre motangrep.
      dragonAttack();                     // Utfører dragens motangrep ved å kalle "dragonAttack" funksjonen.
    }                                     // Avslutter if setningen     
  }                                       // Avslutter "attackHero" funksjonen   

      heroesArray.forEach((hero) => {                                       // Går gjennom hver helt i "heroesArray" med "forEach" metoden.
        const heroElement = document.getElementById(hero.id);               // Henter DOM elementet for hver helt ved hjelp av heltenes unike id.
        heroElement.addEventListener("click", () => attackHero(hero));      // Legger til en event listener for "click" hendelsen til hver helt.
                                                                            // Når helten klikkes på, vil "attackHero" funksjonen 
                                                                            // bli kalt med den aktuelle helten som argument.
      });                                                                   // Avslutter "Foreach" løkken for heltene
