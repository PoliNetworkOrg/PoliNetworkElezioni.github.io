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
            name:"Design",
            desc:"Nella scuola design...."
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
                        name: "Design",
                        desc : "Creare spazi per lo scambio di materiali avanzati dai progetti. Implementare l’omologazione dei software usati nei corsi, aggiornandoli a ciò che ora viene richiesto dal mondo del lavoro e creazione di una libreria di Mooc/video tutorial sull’utilizzo dei vari software. Introdurre più workshop e passion in action in collaborazione tra i diversi indirizzi. Inserire la possibilità di poter scegliere lo scaglione nei corsi di laboratorio che presentano differenze nei progetti.",
           	            candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/marco_tintori.jpg", name: "Tintori Marco", detto: "TINTO"},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/giulia_daleo.jpg", name: "D'Aleo Giulia", detto: "GIUS"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/vittorio_perobelli.jpg", name: "Perobelli Vittorio", detto: "PERO"},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/eva_parenti_design.jpg", name: "Parenti Eva", detto: "EVA"}
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
                        name: "Design",
                        desc: "La nostra idea di scuola design ecc...",
           	            candidati:
                        [
                            {id:1, imgUrl: "/img/candidati/listaaperta/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                            {id:2, imgUrl: "/img/candidati/listaaperta/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/maddalena_milanesi.jpg", name: "Milanesi Maddalena", detto: "MADDA"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/lorenzo_bressan.jpg", name: "Bressan Lorenzo", detto: "BRACE"},
                            {id:5, imgUrl: "/img/candidati/listaaperta/maria_sammarini.jpg", name: "Sammarini Maria", detto: "MERY"},
                            {id:6, imgUrl: "/img/candidati/listaaperta/michele_dondi.jpg", name: "Dondi Michele", detto: "MIKE"},
                            {id:7, imgUrl: "/img/candidati/listaaperta/luca_tassetto.jpg", name: "Tassetto Luca", detto: "TAX"},
                            {id:8, imgUrl: "/img/candidati/listaaperta/giacomo_tomesani.jpg", name: "Tomesani Giacomo Maria", detto: "JACK"},
                            {id:9, imgUrl: "/img/candidati/listaaperta/caterina_grillo.jpg", name: "Grillo Caterina Maria", detto: "CATE"},
                            {id:10, imgUrl: "/img/candidati/listaaperta/giovanni_clericetti.jpg", name: "Clericetti Giovanni", detto: "GIOCLE"},
                            {id:11, imgUrl: "/img/candidati/listaaperta/michele_bruno.jpg", name: "Bruno Michele", detto: "MICHI"},
                            {id:12, imgUrl: "/img/candidati/listaaperta/chiara_mazzeo.jpg", name: "Mazzeo Chiara", detto: ""},
                            {id:13, imgUrl: "/img/candidati/listaaperta/giovanni_provesi.jpg", name: "Provesi Giovanni", detto: "GIO"},
                            {id:14, imgUrl: "/img/candidati/listaaperta/chiara_anceschi.jpg", name: "Anceschi Chiara", detto: "CHIANCHI"}
                        ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>