  // Funksjonskrav 1 
                                                                // Når brukeren trykker på en av heltene, skal helten angripe dragen
                                                                // Det skal komme en alert hvor det står:
                                                                // (Heltens name) har gjort (heltens damage) skade på (Dragens
                                                                // name)!”
                                                                // Dragens liv (currentHP) skal bli trukket med heltens damage, 
                                                                // avhengig av hvilken helt den ble angrepet av.
                                                                // Dragens currentHP blir oppdatert i arrayet

                                                                // Når brukeren trykker på en av heltene, skal helten agripe 
                                                                // dragen
  document.addEventListener(`DOMContentLoaded`, (event) => {    // Legger til en event listener som venter på at alle dokumentet(HTML) skal
                                                                // være ferdig lastet.Dette sikrer at all HTML er lastet inn før scriptet 
                                                                // kjøres
    
                                                                        //Referanse til helseindikatorene i HTML
  const dragonHealthTxT = document.querySelector(`.dragon-health-txt`); // Henter referansen til elementet som viser dragens nåværende helse,
                                                                        // slik at teksten kan oppdateres senere når dragen tar skade
        
  function attackHero(hero) {                                   // Definerer en funksjon "attackHero" som håndterer logikken når en helt angriper dragen
    
    if (!dragonObject.alive || !hero.alive) {                   // Sjekker om dragen eller helten er død. Hvis død, helten ikke angripe
      alert(`${hero.name} kan ikke angripe fordi ${hero.alive ? `dragen` : `helten`} er død!`); // Viser en melding om at helten ikke kan angripe fordi 
                                                                                                // enten dragen eller helten er død.
      return;                                                                                   // Avslutter funksjonen tidlig ved å bruke `return`
       
      dragonObject.currentHP -= hero.damage;                    // Beregner skade på dragen: Trekker skaden ("hero.damage") fra dragens nåværende helse ("dragonObject.currentHP")
      if (dragonObject.currentHP <= 0) {                        // Sjekker om dragen er død. Hvis dragen er død, vil "dragonObject.currentHP" være 0 eller mindre
        dragonObject.currentHP = 0;                             // Setter dragens helse til 0 Ifor å unngå negative verdier) og markerer dragen som død
        dragonObject.alive = false;                             // Markerer dragen som død
        alert(`${hero.name} har drept ${dragonObject.name}!`)   // Viser en melding om at helten har drept dragen
      } else {                                                  // Hvis dragen ikke er død, vis en melding om at helten har angrepet dragen (helsen er over 0)
        alert(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);  // Viser en melding om at helten har angrepet dragen
      }                                                                                 // lukker else-en
      dragonHealthTxt.textContent =  `${ dragonObject.currentHP } / ${dragonObject.maxHP̋} HP ` ; // Oppdaterer teksten som viser dragens helse for å reflektere endringene etter angrepet
    }                                                                                            // Lukker ` attackHero ` funksjonen
  }                                                             // Lukker ` attackHero ` funksjonen
      if (!dragonObject.alive) {                                // Sjekker om dragen er død etter angrepet
        alert(`Gratulerer! Dere har vunnet!`);                  // Viser en melding om at helten har drept dragen
      }                                                         // Lukker if-en
    }                                                           // Lukker ` attackHero ` funksjonen


    heroesArray.forEach(hero => {                               // Legg til event listeners for hver helt. Går igjennom hvert `hero`-objekt i med `forEach`metoden` 
      const heroElement = document.getElementById(hero.name.toLowerCase().replace(` `, `-`)); // Henter DOM elementet for hver helt basert på heltenes navn. Forutsetter at ID-en for hver helt
                                                                                              // er heltenes navn i lowercase, med mellomrom erstattet av bindestreker.
      heroElement.addEventListener(`click`, () => attackHero(hero));                          // Legg til en `click`-event listener til hver helt. Når en helt blir klikket på vil `attackHero`- funksjonen
                                                                                              // bli kalt med den relevante helten som argument
    });                                                                                       // Lukker `forEach`løkken
  });                                                                                         // Lukker `DOMContentLoaded - event listeneren