// Provate a riprodurre uno slider di immagini simile a quello visto a lezione,
// con grafica totalmente a piacere!
// BONUS: cambiare immagine cliccando sui pallini (mostrando quindi l'immagine con
// indice corrispondente)
// Nome repo: js-jq-carousel
// -----------------------------------------------------------------------------

$(document).ready(function() {

    // intercetto click su freccia avanti
    $('#forward').click(function() {

        // l'immagine corrente è quella che ha la classe active associata
        // in ogni istante deve essercene sempre e solo una
        var currentImg = $('img.active');
        var currentBul = $('span.selected'); // bullet corrente

        currentImg.removeClass("active"); // nascondo l'immagine corrente rimuovendo la classe
        currentBul.removeClass("selected"); // deseleziono bullet

        // verifico qual è l'immagine successiva da visualizzare
        // nel caso sono sull'ultima allora la successiva sarà la prima in elenco(first)
        // altrimenti prendo la successiva a quella corrente
        if (!currentImg.hasClass("last")) {

            // non sto visualizzando l'ultima immagine, l'immagine corrente diventa quella successiva
            currentImg = currentImg.next();
            currentBul = currentBul.next("span"); // seleziono bullet successivo

        } else {
            // l'immagine corrente è l'ultima del mio carousel, l'immagine corrente diventa la prima immagine,
            // del carousel, seleziono tramite la classe first che ho associato solo alla prima immagine
            currentImg = $('img.first');
            currentBul = $('#bullets span.first'); // seleziono primo bullett

        }

        currentImg.addClass("active"); // visualizzo la nuova immagine corrente aggiungendogli la classe active
        currentBul.addClass("selected"); // attivo il bullet

    }); // end gestione click frccia in avanti



    // intercetto click su freccia indietro
    $('#back').click(function() {

        // l'immagine corrente è quella che ha la classe active associata
        // in ogni istante deve essercene sempre e solo una
        var currentImg = $('img.active');
        var currentBul = $('span.selected'); // bullet corrente

        // nascondo l'immagine corrente rimuovendo la classe
        currentImg.removeClass("active");
        currentBul.removeClass("selected"); // deseleziono bullet


        // verifico qual è l'immagine precedente da visualizzare
        // nel caso sono sulla prima allora la successiva sarà l'ultima in elenco (last)
        // altrimenti prendo la precedente a quella corrente
        if (!currentImg.hasClass("first")) {
            // non sto visualizzando la prima immagine quindi seleziono semplicemente l'immagine precedente
            currentImg = currentImg.prev();
            currentBul = currentBul.prev("span"); // seleziono bullet precedente

        } else {
            // l'immagine corrente è la prima del mio carousel, l'immagine corrente diventa l'ultima immagine,
            // del carousel, seleziono tramite la classe last che ho associato solo all'ultima immagine
            currentImg = $('img.last');
            currentBul = $('#bullets span.last'); // seleziono ultimo bullet
        }

        currentImg.addClass("active"); // visualizzo la nuova immagine corrente aggiungendogli la classe active
        currentBul.addClass("selected"); // attivo il bullet

    }); // end gestione click frccia indietro




}); // end document ready