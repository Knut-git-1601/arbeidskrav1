  // Funksjonskrav 1 
    //Når brukeren trykker på en av heltene, skal helten angripe dragen
    //Det skal komme en alert hvor det står:
    //“(Heltens name) har gjort (heltens damage) skade på (Dragens
    //name)!”
    //- Dragens liv (currentHP) skal bli trukket med heltens damage, 
    //- avhengig av hvilken helt den ble angrepet av.
    //- Dragens currentHP blir oppdatert i arrayet

    //Når brukeren trykker på en av heltene, skal helten agripe 
    // dragen
  document.addEventListener(`DOMContentLoaded`, (event) => {
  //Legger til en event listener som venter på at alle dokumentet(HTML) skal 
  // være ferdig lastet.Dette sikrer at all HTML er lastet inn før scriptet 
  //kjøres
    
  //Referanse til helseindikatorene i HTML
  const dragonHealthTxT = document.querySelector(`.dragon-health-txt`);
  //Her hentes referansen til elementet som viser dragens nåværende helse, 
  //slik at teksten kan oppdateres senere når dragen tar skade
        
  function attackHero(hero) {
    //Denne funksjonen tar ´hero´som parameter. Funksjonen håndterer logikken for når en helt angriper dragen
    if (!dragonObject.alive || !hero.alive) { //Sjekker om dragen eller helten er død. Hvis død, helten ikke angripe
      alert(`${hero.name} kan ikke angripe fordi ${hero.alive ? `dragen` : `helten`} er død!`);
      //informerer om at helten ikke kan angripe fordi enten dragen eller helten er død.
      return; //Viser en melding om at helten ikke kan angripe fordi enten dragen eller helten er død, og avsluter
      // funksjonen tidlig ved å bruke `return`    
    

      dragonObject.currentHP -= hero.damage;   // Beregn skaden og oppdater dragens helse, ved å trekke heltenes skade fra 
      //  fra dragens nåværende helse
      if (dragonObject.currentHP <= 0) { //Sjekker om dragens helse er er 0 eller mindre etter angrepet, noe som betyr at dragen er død
        dragonObject.currentHP = 0; // Setter dragens helse til 0 Ifor å unngå negative verdier) og markerer dragen som død
        dragonObject.alive = false;
        alert(`${hero.name} har drept ${dragonObject.name}!`)
      } else {
        alert(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);
      } //lukker else-en
      // Oppdater helseindikatoren for dragen i HTML
      dragonHealthTxt.textContent =  `${ dragonObject.currentHP } / ${dragonObject.maxHP̋} HP ` ;
      // Oppdaterer teksten som viser dragens helse for å reflektere endringene etter angrepet
    
      //Sjekk om spillet er over
      if (!dragonObject.alive) { // Sjekker om dragen er død etter angrepet
        alert(`Gratulerer! Dere har vunnet!`);
      } // Lukker if-en
    } // Lukker ` attackHero ` funksjonen


    heroesArray.forEach(hero => { // Legg til event listeners for hver helt. Går igjennom hvert `hero`-objekt i 
      // med `forEach`metoden` 
      const heroElement = document.getElementById(hero.name.toLowerCase().replace(` `, `-`));
      // Henter DOM elementet for hverr helt basert på heltenes navn. Forutsetter at ID-en for hver helt
      // er heltenes navn i lowercase, med mellomrom erstattet av bindestreker.
      heroElement.addEventListener(`click`, () => attackHero(hero));
      //Leggerr en `click`-event listener til hver helt. Når en helt blir klikket på vil àttackHero`- funksjonen
      // bli kalt med den relevante helten som arguement
    }); //Lukker `forEach`løkken
  }); //Lukker `DOMContentLoaded - event listeneren
  
// Funksjonskrav 2
// Funksjonskrav 3
// Funksjonskrav 4
// Funksjonskrav 5