// Provate a riprodurre uno slider di immagini simile a quello visto a lezione,
// con grafica totalmente a piacere!
// BONUS: cambiare immagine cliccando sui pallini (mostrando quindi l'immagine con
// indice corrispondente)
// Nome repo: js-jq-carousel
// -----------------------------------------------------------------------------

$(document).ready(function() {


    // intercetto click su freccia avanti
    $('#forward').click(function() {
        console.log("click su forward");

        // l'immagine corrente è quella che ha la classe active associata
        // in ogni istante deve essercene sempre e solo una
        var currentImg = $('img.active');
        console.log("currentImg:", currentImg);

        // nascondo l'immagine corrente rimuovendo la classe
        currentImg.removeClass("active");

        // verifico qual è l'immagine successiva da visualizzare
        // nel caso sono sull'ultima allora la successiva sarà la prima in elenco(first)
        // altrimenti prendo la successiva a quella corrente
        if (!currentImg.hasClass("last")) {
            // non sto visualizzando l'ultima immagine
            var nextImg = currentImg.next();
            console.log("nextImg:", nextImg);

        } else {
            // l'immagine corrente è l'ultima del mio carousel, seleziono la prima immagine,
            // tramite la classe first che ho associato solo alla prima immagine
            var nextImg = $('img.first');
            console.log("nextImg:", nextImg);
        }

        // visualizzo l'immagine successiva aggiungendogli la classe active
        nextImg.addClass("active");

    });

    // intercetto click su freccia indietro
    $('#back').click(function() {
        console.log("click su back");

        // l'immagine corrente è quella che ha la classe active associata
        // in ogni istante deve essercene sempre e solo una
        var currentImg = $('img.active');
        console.log("currentImg:", currentImg);

        // nascondo l'immagine corrente rimuovendo la classe
        currentImg.removeClass("active");

        // verifico qual è l'immagine precedente da visualizzare
        // nel caso sono sulla prima allora la successiva sarà l'ultima in elenco (last)
        // altrimenti prendo la precedente a quella corrente
        if (!currentImg.hasClass("first")) {
            // non sto visualizzando la prima immagine quindi seleziono semplicemente l'immagine precedente
            var prevImg = currentImg.prev();
            console.log("prevImg:", prevImg);

        } else {
            // l'immagine corrente è la prima del mio carousel, seleziono l'ultima immagine,
            // tramite la classe last che ho associato solo all'ultima immagine
            var prevImg = $('img.last');
            console.log("nextImg:", prevImg);
        }

        // visualizzo l'immagine successiva aggiungendogli la classe active
        prevImg.addClass("active");









    });




}); // end document ready