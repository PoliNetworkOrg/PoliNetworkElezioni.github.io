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
                        name: "Cda",
                        desc: "La nostra idea di cda ecc...",
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
                        desc: "La nostra idea di senato ecc...",
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
                        name: "Cda",
                        desc: "La nostra idea di cda ecc...",
                        candidati:[
                            {id:1, imgUrl: "/img/candidati/listaaperta/daniele_radaelli.jpg", name: "Radaelli Daniele", detto: "REDA"},
                            {id:2, imgUrl: "/img/candidati/listaaperta/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"}
                        ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>
