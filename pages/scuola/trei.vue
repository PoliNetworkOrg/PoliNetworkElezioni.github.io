<template>
    <div>

        <ConfrontoListe :liste="liste" :organi-confronto="organiConfronto" />

    </div>
</template>

<script>
export default {
    data () {
    return {

    organiConfronto:[
        {
            id:1, 
            name:"3I",
            desc:"Nella scuola 3i...."
        }
    ],

      liste: [
            { 
                id: 1, 
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                organi: [                
                    {
                        name: "3I",
                        desc: "Creare di rete di Ambassadors con lo scopo di avvicinare le ragazze al mondo ingegneristico. Aumentare l’attività laboratoriale nei corsi a scelta in magistrale: questi corsi sono già interdipartimentali e la contaminazione sarebbe facilmente implementabile. Inserire l’bbligo di caricare una versione corretta del tema d’esame e garantire la possibilità di accedere ai temi d’esami degli anni precedenti e simulazioni, attraverso un archivio centralizzato. Introdurre un nuovo appello d’esame: introdurre un appello totale in concomitanza della seconda prova parziale.",
           	            candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/marsona_panci.jpg", name: "Panci Marsona", detto: "MARS"},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/raif_muhammad.jpg", name: "Muhammad Raif", detto: "RAIF"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/mercedes_alazraki.jpg", name: "Alazraki Mercedes", detto: "MERCY AMG"},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/eric_diluca.jpg", name: "Di Luca Eric Alexandro", detto: "CARLO CRACCO"},
                            {id:5, imgUrl: "/img/candidati/svoltastudenti/yousef_elgohary.jpg", name: "Elgohary Yousef", detto: "YOUS"},
                            {id:6, imgUrl: "/img/candidati/svoltastudenti/lorenzo_lione.jpg", name: "Lione Lorenzo", detto: "LYON"},
                            {id:7, imgUrl: "/img/candidati/svoltastudenti/filiberto_canino.jpg", name: "Canino Filiberto", detto: "FIL"},
                            {id:8, imgUrl: "/img/candidati/svoltastudenti/martina_legnani.jpg", name: "Legnani Martina", detto: "LEGNA"},
                            {id:9, imgUrl: "/img/candidati/svoltastudenti/simone_rapella.jpg", name: "Rapella Simone", detto: "MOMO"},
                            {id:10, imgUrl: "/img/candidati/svoltastudenti/mattia_marinoni.jpg", name: "Marinoni Mattia", detto: "TIA"},
                            {id:11, imgUrl: "/img/candidati/svoltastudenti/anuar_mancini.jpg", name: "Mancini Anuar", detto: "DOPPIO MALTO"},
                            {id:12, imgUrl: "/img/candidati/svoltastudenti/alessandro_baserga.jpg", name: "Baserga Alessandro", detto: "BASE"},
                            {id:13, imgUrl: "/img/candidati/svoltastudenti/alessio_rocca.jpg", name: "Rocca Alessio", detto: "IL PRESIDENTE"},
                        ]
                    }
                ]
            },
            { 
                id: 2, 
                name: "Lista aperta",
                imageUrlHorizontal: "/img/logo-listaaperta_hor.png",
                linkLista: "/lista/listaaperta/",
                organi:[                
                    {
                        name: "3I",
                        desc: "La nostra idea di scuola 3I ecc...",
           	            candidati:[
                            {id:1, imgUrl: "/img/candidati/listaaperta/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                            {id:2, imgUrl: "/img/candidati/listaaperta/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/giovanni_cavassi.jpg", name: "Cavassi Giovanni", detto: "CAVA"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/letizia_perri.jpg", name: "Perri Letizia Maria", detto: "LETI"},
                            {id:5, imgUrl: "/img/candidati/listaaperta/john_powell.jpg", name: "Powell John Edgar", detto: "JOHN.JE"},
                            {id:6, imgUrl: "/img/candidati/listaaperta/lorenzo_petulicchio.jpg", name: "Petulicchio Lorenzo", detto: "PETU"},
                            {id:7, imgUrl: "/img/candidati/listaaperta/francesca_castellotti.jpg", name: "Castellotti Francesca", detto: "FRANCI"},
                            {id:8, imgUrl: "/img/candidati/listaaperta/matteo_crivellari.jpg", name: "Crivellari Matteo", detto: "CRIVE"},
                            {id:9, imgUrl: "/img/candidati/listaaperta/gloria_lopiano.jpg", name: "Lopiano Gloria", detto: ""},
                            {id:10, imgUrl: "/img/candidati/listaaperta/luca_mandelli.jpg", name: "Mandelli Luca", detto: "MANDO"},
                            {id:11, imgUrl: "/img/candidati/listaaperta/stefano_garavaglia.jpg", name: "Garavaglia Stefano", detto: "IZ"},
                            {id:12, imgUrl: "/img/candidati/listaaperta/giuliano_gemmani.jpg", name: "Gemmnani Giuliano", detto: "GEMMA"},
                            {id:13, imgUrl: "/img/candidati/listaaperta/marco_gandolla.jpg", name: "Gandolla Marco", detto: "QUAGLIA"},
                            {id:14, imgUrl: "/img/candidati/listaaperta/francesco_boldrini.jpg", name: "Boldrini Francesco", detto: "BOLD"},
                            {id:15, imgUrl: "/img/candidati/listaaperta/marco_guerini.jpg", name: "Guerini Marco", detto: "GUERO"}
                        ]
                    }
                ]
            },
            { 
                id: 3, 
                name: "Terna sinistrorsa",
                imageUrlHorizontal: "/img/logo-terna_hor.png",
                linkLista: "/lista/ternasinistrorsa/",
                organi:[                
                    {
                        name: "3I",
                        desc: "La nostra idea di scuola 3I ecc...",
           	            candidati:
                        [
                            {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/pasculli_clarissa.jpg", name: "Pasculli Clarissa", detto: ""},
                            {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/bossi_núñezpedro.jpg", name: "Bossi Núñezpedro", detto: ""},
                            {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/drole_luca.jpg", name: "Drole Luca", detto: ""},
                            {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/sperandio_alberto.jpg", name: "Sperandio Alberto", detto: ""},
                            {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/luzzini_davide.jpg", name: "Luzzini Davide", detto: ""},
                            {id: 6 , imgUrl: "/img/candidati/ternasinistrorsa/bindoni_diego.jpg", name: "Bindoni Diego", detto: ""},
                            {id: 7 , imgUrl: "/img/candidati/ternasinistrorsa/santillan_moreno_carlos_alberto.jpg", name: "Santillan Moreno Carlos Alberto", detto: ""},
                            {id: 8 , imgUrl: "/img/candidati/ternasinistrorsa/catalano_delia.jpg", name: "Catalano Delia", detto: ""},
                            {id: 9 , imgUrl: "/img/candidati/ternasinistrorsa/boveri_matteo.jpg", name: "Boveri Matteo", detto: "JOHNNY SHOCK"},
                            {id: 10 , imgUrl: "/img/candidati/ternasinistrorsa/vasconi_fabrizio.jpg", name: "Vasconi Fabrizio", detto: "VASCO"},
                            {id: 11 , imgUrl: "/img/candidati/ternasinistrorsa/travaglini_giorgio.jpg", name: "Travaglini Giorgio", detto: ""},
                            {id: 12 , imgUrl: "/img/candidati/ternasinistrorsa/badilini_alberto.jpg", name: "Badilini Alberto", detto: ""},
                            {id: 13 , imgUrl: "/img/candidati/ternasinistrorsa/martinoia_giada.jpg", name: "Martinoia Giada", detto: ""},
                            {id: 14 , imgUrl: "/img/candidati/ternasinistrorsa/barattin_lorenzo.jpg", name: "Barattin Lorenzo", detto: ""}
                        ]
                    }
                ]
            },
            { 
                id: 4, 
                name: "Studenti indipendenti",
                imageUrlHorizontal: "/img/logo-sip_hor.png",
                linkLista: "/lista/studentiindipendenti/",
                organi:[                
                    {
                        name: "3I",
                        desc: "La nostra idea di scuola 3I ecc...",
           	            candidati:
                        [
                            {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/marcucci_edoardo.jpg", name: "Marcucci Edoardo", detto: ""},
                            {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/portentoso_alice.jpg", name: "Portentoso Alice", detto: ""},
                            {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/fiorani_elena.jpg", name: "Fiorani Elena", detto: ""},
                            {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/zamboni_marco.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                            {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/wolff_jonathan.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                            {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/benatti_francesca.jpg", name: "Benatti Francesca", detto: ""},
                            {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/spiniello_mario.jpg", name: "Spiniello Mario", detto: ""},
                            {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/carbone_gaia.jpg", name: "Carbone Gaia", detto: ""},
                            {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/stramare_davide.jpg", name: "Stramare Davide", detto: "DADO"},
                            {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/truvolo_federica.jpg", name: "Truvolo Federica", detto: ""},
                            {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/finardi_sara_ehetagegnehu.jpg", name: "Finardi Sara Ehetagegnehu", detto: "FES"},
                            {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/puddu_francesco.jpg", name: "Puddu Francesco", detto: ""},
                            {id: 13 , imgUrl: "/img/candidati/studentiindipendenti/contardi_pietro.jpg", name: "Contardi Pietro", detto: ""},
                            {id: 14 , imgUrl: "/img/candidati/studentiindipendenti/serino_roberto.jpg", name: "Serino Roberto", detto: ""},
                            {id: 15 , imgUrl: "/img/candidati/studentiindipendenti/oppizzii_alice.jpg", name: "Oppizzii Alice", detto: ""}
                        ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>