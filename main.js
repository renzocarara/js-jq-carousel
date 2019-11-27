// Provate a riprodurre uno slider di immagini simile a quello visto a lezione,
// con grafica totalmente a piacere!
// BONUS: cambiare immagine cliccando sui pallini (mostrando quindi l'immagine con
// indice corrispondente)
// Nome repo: js-jq-carousel
// -----------------------------------------------------------------------------

$(document).ready(function() {

    // intercetto click sulle frecce
    $('.arrow').click(function() {

        // recupero l'indice della slide corrente
        // l'immagine corrente è quella che ha la classe active associata
        // in ogni istante deve essercene sempre e solo una
        var imgPosition = $('img.active').index();

        // in base a dove devo andare e a dove sono, decido quale sarà la prossima slide
        if (($(this).hasClass("next"))) { // c'è stato click su freccia in avanti

            if ($('img.active').hasClass("last")) {
                // sono in fondo al carousel, la prossima immagine da visualizzare sarà la prima
                imgPosition = 0; // indice della nuova slide da visualizzare
            } else {
                // non sono ancora all'ultima immagine del carousel, procedo con la successiva
                imgPosition += 1; // indice della nuova slide da visualizzare
            }
        }

        if (($(this).hasClass("prev"))) { // c'è stato click su freccia indietro

            if (($('img.active').hasClass("first"))) {
                // sono all'inizio del carousel, la prossima immagine da visualizzare sarà l'ultima (ciclo all'indietro)
                imgPosition = ($('img.last').index()); // indice della nuova slide da visualizzare
            } else {
                // non sono ancora sulla prima immagine del carousel, procedo con la precedente
                imgPosition -= 1; // indice della nuova slide da visualizzare
            }
        }

        display(imgPosition); // passo alla funzione l'indice della nuova posizione da visualizzare

    }); // end gestione click su frecce



    // intercetto click su bullets
    $('.bullet').click(function() {

        // ricavo l'indice (posizione) dell'elemento cliccato (bullet),
        // rispetto ai suoi fratelli tutti all'interno dell'elemento parent che li contiene
        // tramite la funzione index() applicata sull'elemento $(this) cioè l'elemento sul quale
        // ho intercettato il click, passo questo indice alla funzione che gestisce le visualizzzioni
        var bulletPosition = ($(this).index());

        display(bulletPosition);

    }); // end gestione click su bullett



    function display(newPosition) {

        // Questa funzione riceve un parametro newPosition, che indica qual è la nuova
        // immagine che sarà visualizzata e quale bullett sarà evidenziato

        $('img.active').removeClass("active"); // nascondo l'immagine corrente rimuovendo la classe
        $('span.selected').removeClass("selected"); // disattivo il bullet

        // in base ad newPosition seleziono gli elementi (immagine  e bullet) da visualizzare
        var newSlide = $('#slider img').eq(newPosition);
        var newBul = $('#bullets span').eq(newPosition);

        newSlide.addClass("active"); // visualizzo la nuova immagine corrente aggiungendogli la classe active
        newBul.addClass("selected"); // evidenzio il bullet
    }

}); // end document ready