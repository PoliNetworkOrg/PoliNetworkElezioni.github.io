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
            name:"Senato",
            desc:"IL SENATO INDIRIZZA E PROGRAMMA LO SVILUPPO DELL’ATENEO, CON PARTICOLARE RIGUARDO ALLA DIDATTICA E ALLA RICERCA, E VIGILA SUL FUNZIONAMENTO COMPLESSIVO DELL'ISTITUZIONE."
        },
        {
            id:2,
            name:"Consiglio di Amministrazione",
            desc:"IL CONSIGLIO DI AMMINISTRAZIONE DEFINISCE LA PROGRAMMAZIONE ECONOMICA DI LUNGO PERIODO SULLA BASE DELLE PROPOSTE E DEI PARERI DEL SENATO ACCADEMICO."
        }
    ],

      liste: [
            {      
                id: 1, 
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                organi:[                
                    {
                        name: "Senato",
                        desc: "La nostra idea di senato ecc...",
                        candidati:[
                            {id: 1, imgUrl: "/img/candidati/svoltastudenti/marco_cesaro.jpg", name: "Cesaro Marco", detto: "SOMMELIER"},
                            { id: 2, imgUrl: "/img/candidati/svoltastudenti/lorenzo_ghettini.jpg", name: "Ghettini Lorenzo", detto: "LO SPEAKER"},
                            { id: 3, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                            { id: 4, imgUrl: "/img/candidati/svoltastudenti/matteo_reda.jpg", name: "Reda Matteo", detto: ""},
                            { id: 5, imgUrl: "/img/candidati/svoltastudenti/alessia_bove.jpg", name: "Bove Alessia", detto: "ALESSIA"},
                            { id: 6, imgUrl: "/img/candidati/svoltastudenti/lorenzo_macovei.jpg", name: "Macovei Lorenzo", detto: "MACOSSS"},
                            { id: 7, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti.jpg", name: "Zannotti Elena", detto: "ELLE"},
                            { id: 8, imgUrl: "/img/candidati/svoltastudenti/klaudio_luku.jpg", name: "Luku Klaudio", detto: "KLAUDIO CON LA K"}
                        ]
                    },
                    {
                        name: "CdA",
                        desc: "La nostra idea di CdA ecc...",
                        candidati:[
                            { id: 1, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                            { id: 2, imgUrl: "/img/candidati/svoltastudenti/eva_parenti.jpg", name: "Parenti Eva", detto: "EVA"},
                            { id: 3, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                            { id: 4, imgUrl: "/img/candidati/svoltastudenti/lorenzo_dionigi.jpg", name: "Dionigi Lorenzo", detto: ""}
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
                        name: "Senato",
                        desc: "In Senato lavoreremo per garantire una didattica di qualità aperta a forme innovative per valorizzare le attitudini di ogni studente. Inoltre, è per noi un tema fondamentale incentivare l’internazionalizzazione sia al Politecnico sia con esperienze all’estero.",
                        candidati:[
                            {id: 1, imgUrl: "/img/candidati/listaaperta/marta_ghidoli.jpg", name: "Ghidoli Marta", detto: "MARTA"},
                            {id: 2, imgUrl: "/img/candidati/listaaperta/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                            {id: 3, imgUrl: "/img/candidati/listaaperta/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
                            {id: 4, imgUrl: "/img/candidati/listaaperta/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                            {id: 5, imgUrl: "/img/candidati/listaaperta/francesco_bugo.jpg", name: "Bugo Francesco Maria", detto: "BUGO"},
                            {id: 6, imgUrl: "/img/candidati/listaaperta/maria_zini.jpg", name: "Zini Maria", detto: "MERI"},
                            {id: 7, imgUrl: "/img/candidati/listaaperta/alessandro_maestri.jpg", name: "Maestri Alessandro", detto: "BOBBI"},
                            {id: 8, imgUrl: "/img/candidati/listaaperta/elisabetta_alberton.jpg", name: "Alberton Elisabetta", detto: "BETTA"}
                        ]
                    },
                    {
                        name: "CdA",
                        desc: "In CdA ci batteremo per il Diritto allo Studio: una battaglia decisiva per permettere a tutti gli studenti di poter vivere a pieno l’università! Inoltre, ci impegneremo sempre per garantire i giusti finanziamenti per sviluppare i nostri campus sempre di più come luoghi di aggregazione e di qualità.",
                        candidati:[
                            {id:1, imgUrl: "/img/candidati/listaaperta/daniele_redaelli.jpg", name: "Radaelli Daniele", detto: "REDA"},
                            {id:2, imgUrl: "/img/candidati/listaaperta/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"}
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
                        name: "Senato",
                        desc: "La nostra idea di senato ecc...",
                        candidati:[
                            {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/ada_bacigalupo.png", name: "Bacigalupo Ada", detto: ""}
                        ]
                    },
                    {
                        name: "CdA",
                        desc: "La nostra idea di CdA ecc...",
                        candidati:[
                            {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/davide_luzzini.png", name: "Luzzini Davide", detto: ""}
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
                        name: "Senato",
                        desc: "Per noi in senato è importante discutere di decisioni politiche aprendo davvero alla possibilità di portare i temi dellз studentз senza il filtro del compromesso in modo da dialogare con gli altri componenti ateneo avendo ben chiara l'opinione di tuttз",
                        candidati:[
                            {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/jonathan_wolff.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                            {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/andrea_iodice.jpg", name: "Iodice Andrea", detto: ""},
                            {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/maria_nicole_deluca.jpg", name: "Deluca Maria Nicole", detto: ""},
                            {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/milagros_magaz.jpg", name: "Magaz Milagros", detto: "MILI"},
                            {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/marco_zamboni.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                            {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/edoardo_marcucci.jpg", name: "Marcucci Edoardo", detto: ""},
                            {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/mario_spiniello.jpg", name: "Spiniello Mario", detto: ""},
                            {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/davide_stramare.jpg", name: "Stramare Davide", detto: "DADO"}
                        ]
                    },
                    {
                        name: "CdA",
                        desc: "Vogliamo aumentare la gestione dei fondi volgendola a rendere il politecnico un'università d'avanguardia in termini di vivibilità negli spazi, al sostegno e tutela dei percorsi di studio e al garantire a tutti a prescindere dalla carriera accademica la possibilità di fare un percorso dignitoso e valido.",
                        candidati:[
                            {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/gloria_maria_crisogianni.jpg", name: "Crisogianni Gloria Maria", detto: ""},
                            {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/anita_clara_notarianni.jpg", name: "Notarianni Anita Clara", detto: ""},
                            {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/chiara_arrigoni.jpg", name: "Arrigoni Chiara", detto: ""},
                            {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/gaia_carbone.jpg", name: "Carbone Gaia", detto: ""}
                        ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>
