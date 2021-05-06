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
            name:"ICAT",
            desc:"Nella scuola ICAT...."
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
                        name: "ICAT",
                        desc: "PEER TUTORING: Incentivare e approfondire l’utilizzo del peer tutoring. Nuovi collegamenti con il mondo professionale: organizzare visite in cantiere, visite in azienda e colloqui “face to face” con professionisti del settore. FISICA 1+ FISICA 2A: Spezzare l’esame annuale in due moduli, per permettere agli studenti di sostenere i due esami distaccati tra loro/ in anni accademici diversi. LABS: introduzione di laboratori ed esperienze in aula nei corsi triennali al fine di dare un riscontro pratico alla teoria.",
                            candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/eleonora_pietrobelli.jpg", name: "Pietrobelli Eleonora", detto: ""},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi_icat.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/fabrizio_murillo.jpg", name: "Murillo Fabrizio Roldos Jose", detto: ""},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/henry_andrade.jpg", name: "Andrade Henry", detto: ""},
                            {id:5, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti_icat.jpg", name: "Zannotti Elena", detto: "ELLE"}
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
                        name: "ICAT",
                        desc: "La nostra idea di scuola ICAT ecc...",
           	            candidati:
                        [
                            {id:1, imgUrl: "/img/candidati/listaaperta/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
                            {id:2, imgUrl: "/img/candidati/listaaperta/francesco_bugo.jpg", name: "Bugo Francesco Maria", detto: "BUGO"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/pietro_perego.jpg", name: "Perego Pietro", detto: "PIE"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/camilla_macchini.jpg", name: "Macchini Camilla", detto: "CAMI"},
                            {id:5, imgUrl: "/img/candidati/listaaperta/franscesco_cannerozzi.jpg", name: "Cannerozzi Francesco", detto: "CANNE"},
                            {id:6, imgUrl: "/img/candidati/listaaperta/davide_zini.jpg", name: "Zini Davide", detto: "ZINZAN"},
                            {id:7, imgUrl: "/img/candidati/listaaperta/giovanni_abbenda.jpg", name: "Abbenda Giovanni", detto: "GIO"}
                        ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>