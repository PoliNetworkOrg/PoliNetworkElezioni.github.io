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
                        desc: "La nostra idea di scuola 3I ecc...",
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
            }
        ]    
    }
  }
}
</script>