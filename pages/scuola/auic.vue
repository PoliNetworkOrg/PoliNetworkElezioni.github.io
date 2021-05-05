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
           	            candidati:
                        [
                            {id:1, imgUrl: "/img/candidati/listaaperta/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                            {id:2, imgUrl: "/img/candidati/listaaperta/maria_zini.jpg", name: "Zini Maria", detto: "MERI"},
                            {id:3, imgUrl: "/img/candidati/listaaperta/sara_galli.jpg", name: "Galli Sara", detto: "SARA"},
                            {id:4, imgUrl: "/img/candidati/listaaperta/issa_tallawi.jpg", name: "Tallawi Issa", detto: "ISSA"},
                            {id:5, imgUrl: "/img/candidati/listaaperta/veronica_cantale.jpg", name: "Cantale Maria Veronica", detto: ""},
                            {id:6, imgUrl: "/img/candidati/listaaperta/elisabetta_alberton.jpg", name: "Alberton Elisabetta", detto: "BETTA"},
                            {id:7, imgUrl: "/img/candidati/listaaperta/elisabetta_taffa.jpg", name: "Taffa Elisabetta", detto: "ELI"},
                            {id:8, imgUrl: "/img/candidati/listaaperta/marco_galbiati.jpg", name: "Galbiati Marco", detto: "CALI"},
                            {id:9, imgUrl: "/img/candidati/listaaperta/marta_defre.jpg", name: "De fre Marta", detto: "MARTA"},
                            {id:10, imgUrl: "/img/candidati/listaaperta/pietro_rabaioli.jpg", name: "Rabaioli Pietro", detto: "RABA"},
                            {id:11, imgUrl: "/img/candidati/listaaperta/isaac_young.jpg", name: "Young Isaac Jason", detto: "ISAAC"},
                            {id:12, imgUrl: "/img/candidati/listaaperta/marco_stringhetti.jpg", name: "Stringhetti Marco", detto: "STRINGO"},
                            {id:13, imgUrl: "/img/candidati/listaaperta/sara_baldelli.jpg", name: "Baldelli Sara Micol", detto: ""}
                        ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>