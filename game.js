// Funksjonskrav 1
document.addEventListener(´DOMContentLoaded´, (event) => { //Legger til en event listener som venter på at alle dokumentet (HTML) skal være ferdig lastet. Dette sikrer at all HTML er lastet inn før scriptet kjøres
    //Referanse til helseindikatorene i HTML
    const dragonHealthTxT = document.querySelector(`.dragon-health-txt`);
    //Funksjon for å håndtere angrep
    function attackHero(hero) {
        if (!dragonObject.alive || !hero.alive) {
            alert(`${hero.name} kan ikke angripe fordi $(hero.alive ? `dragen` : `helten` } er død!);   
        return;
    }
    // Beregn skaden og oppdater dragens helse
    dragonObject.currentHP -= hero.damage;
    if (dragonObject.currentHP <= 0) {
        dragonObject.currentHP = 0;
        dragonObject.alive = false;
        alert(`${ hero.name } har drept ${ dragonObject.name }!`)
    } else {
        alert(`${ hero.name } har gjort ${ hero.damage } skade på ${ dragonObject.name }!`);
    }
    // Oppdater helseindikatoren for dragen i HTML
    dragonHealthTxt.textContent =´${dragonObject.currentHP} / ${dragonObject.maxHP̋} HP`;}
    
//Sjekk om spillet er over
        if (!dragonObject.alive) {
            alert(`Gratulerer! Dere har vunnet!`);)
    }
}

// Legg til event listeners for hver helt
hereoesArray.forEach(hero => {
    const heroElement ?document.getElementById(hero.name).toLowerCase().replace(``, `-`));
heroElement.addEventListnener(`click`, () => attackHero(hero));
});
});
// Funksjonskrav 2
// Funksjonskrav 3
// Funksjonskrav 4
// Funksjonskrav 5