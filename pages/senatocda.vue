<template>
    <div>

        <ConfrontoListe :items="items" />

    </div>
</template>



<script>
export default {
    data () {
    return {
      items: [
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
                            {id: 1, imgUrl: "/img/candidati/marco_cesaro.jpg", name: "Cesaro Marco", detto: "SOMMELIER"},
                            {id: 2, imgUrl: "/img/candidati/lorenzo_ghettini.jpg", name: "Ghettini Lorenzo", detto: "LO SPEAKER"},
                            {id: 3, imgUrl: "/img/candidati/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                            {id: 4, imgUrl: "/img/candidati/matteo_reda.jpg", name: "Reda Matteo", detto: ""},
                            {id: 5, imgUrl: "/img/candidati/alessia_bove.jpg", name: "Bove Alessia", detto: "ALESSIA"},
                            {id: 6, imgUrl: "/img/candidati/lorenzo_macovei.jpg", name: "Macovei Lorenzo", detto: "MACOSSS"},
                            {id: 7, imgUrl: "/img/candidati/elena_zannotti.jpg", name: "Zannotti Elena", detto: "ELLE"},
                            {id: 8, imgUrl: "/img/candidati/klaudio_luku.jpg", name: "Luku Klaudio", detto: "KLAUDIO CON LA K"}
                        ]
                    },
                    {
                        name: "Cda",
                        desc: "La nostra idea di cda ecc...",
                        candidati:[
                            {id:1, imgUrl: "/img/candidati/antonino_sgroi.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                            {id:2, imgUrl: "/img/candidati/eva_parenti.jpg", name: "Parenti Eva", detto: "EVA"},
                            {id:3, imgUrl: "/img/candidati/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                            {id:4, imgUrl: "/img/candidati/lorenzo_dionigi.jpg", name: "Dionigi Lorenzo", detto: ""}
                        ]
                    }
                ]
            }
        ]    
    }
  }
}
</script>