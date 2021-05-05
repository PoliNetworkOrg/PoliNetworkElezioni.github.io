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
            name:"AUIC",
            desc:"Nella scuola AUIC sono eletti 5 rappresentanti degli studenti in Giunta della scuola."
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
                        name: "AUIC",
                        desc: "La nostra idea di scuola auic ecc...",
           	            candidati:[
                            {id:1, imgUrl: "/img/candidati/svoltastudenti/elena_picchetti.jpg", name: "Picchetti Elena", detto: ""},
                            {id:2, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                            {id:3, imgUrl: "/img/candidati/svoltastudenti/ian_fernandez.jpg", name: "Fernàndez Nava Ian Anthony Alloxis", detto: "IANF"},
                            {id:4, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                            {id:5, imgUrl: "/img/candidati/svoltastudenti/dalila_melotti.jpg", name: "Melotti Dalila", detto: "DIDI"}
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
                        name: "AUIC",
                        desc: "La nostra idea di scuola auic ecc...",
           	            candidati:[
                            {id:1, imgUrl: "/img/candidati/listaaperta/elena_picchetti.jpg", name: "Picchetti Elena", detto: ""},
                            {id:2, imgUrl: "/img/candidati/listaaperta/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/ian_fernandez.jpg", name: "Fernàndez Nava Ian Anthony Alloxis", detto: "IANF"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                            {id:5, imgUrl: "/img/candidati/listaaperta/dalila_melotti.jpg", name: "Melotti Dalila", detto: "DIDI"}
					    ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>