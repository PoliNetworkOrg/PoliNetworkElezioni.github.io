<template>
    <div>
        <ListaDettaglio :data-lista="items" />
    </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            name: "Svoltastudenti",
            mainWebsiteUrl: "https://svoltastudenti.it",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Svoltastudenti.pdf",
            desc: "Nata nel 2008 per rendere partecipi tutti gli studenti nei processi formativi e decisionali dell’Ateneo che tutti i giorni viviamo. Opportunità, idee e rappresentanti del tutto svincolati dai partiti: siamo apartitici, laici e multiculturali.",
            imageUrl:"/img/svolta.png",
            programma:
                [
                    {
                        id : 1,
                        title: 'Titolo1',
                        url : '/img/svolta.png',
                        desc: "Descrizione 1"
                    },
                    {
                        id: 2,
                        title: 'Titolo2',
                        url : '/img/svolta.png',
                        desc: "Descrizione 2"
                    },
                ],
            senato:
            {
                desc: "La nostra idea di senato ecc...",
                candidati:[
                    { id: 1, imgUrl: "/img/candidati/svoltastudenti/marco_cesaro.jpg", name: "Cesaro Marco", detto: "SOMMELIER"},
                    { id: 2, imgUrl: "/img/candidati/svoltastudenti/lorenzo_ghettini.jpg", name: "Ghettini Lorenzo", detto: "LO SPEAKER"},
                    { id: 3, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                    { id: 4, imgUrl: "/img/candidati/svoltastudenti/matteo_reda.jpg", name: "Reda Matteo", detto: ""},
                    { id: 5, imgUrl: "/img/candidati/svoltastudenti/alessia_bove.jpg", name: "Bove Alessia", detto: "ALESSIA"},
                    { id: 6, imgUrl: "/img/candidati/svoltastudenti/lorenzo_macovei.jpg", name: "Macovei Lorenzo", detto: "MACOSSS"},
                    { id: 7, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti.jpg", name: "Zannotti Elena", detto: "ELLE"},
                    { id: 8, imgUrl: "/img/candidati/svoltastudenti/klaudio_luku.jpg", name: "Luku Klaudio", detto: "KLAUDIO CON LA K"}
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                    { id: 1, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                    { id: 2, imgUrl: "/img/candidati/svoltastudenti/eva_parenti.jpg", name: "Parenti Eva", detto: "EVA"},
                    { id: 3, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                    { id: 4, imgUrl: "/img/candidati/svoltastudenti/lorenzo_dionigi.jpg", name: "Dionigi Lorenzo", detto: ""}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
					candidati:[
              { id: 1, imgUrl: "/img/candidati/svoltastudenti/elena_picchetti.jpg", name: "Picchetti Elena", detto: ""},
              { id: 2, imgUrl: "/img/candidati/svoltastudenti/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
              { id: 3, imgUrl: "/img/candidati/svoltastudenti/ian_fernandez.jpg", name: "Fernàndez Nava Ian Anthony Alloxis", detto: "IANF"},
              { id: 4, imgUrl: "/img/candidati/svoltastudenti/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
              { id: 5, imgUrl: "/img/candidati/svoltastudenti/dalila_melotti.jpg", name: "Melotti Dalila", detto: "DIDI"}
					]
                },
                trei:{
                    desc :"La scuola 3i...",
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
                },
                icat:{
                    desc: "La scuola icat...",
					candidati:[
						{id:1, imgUrl: "/img/candidati/svoltastudenti/eleonora_pietrobelli.jpg", name: "Pietrobelli Eleonora", detto: ""},
                        {id:2, imgUrl: "/img/candidati/svoltastudenti/antonino_sgroi.jpg", name: "Sgroi Antonino", detto: "LILLO"},
						{id:3, imgUrl: "/img/candidati/svoltastudenti/fabrizio_murillo.jpg", name: "Murillo Fabrizio Roldos Jose", detto: ""},
						{id:4, imgUrl: "/img/candidati/svoltastudenti/henry_andrade.jpg", name: "Andrade Henry", detto: ""},
						{id:5, imgUrl: "/img/candidati/svoltastudenti/elena_zannotti.jpg", name: "Zannotti Elena", detto: "ELLE"}
                    ]
                },
                design:{
                    desc : "La scuola design...",
					candidati:[
						{id:1, imgUrl: "/img/candidati/svoltastudenti/marco_tintori.jpg", name: "Tintori Marco", detto: "TINTO"},
                        {id:2, imgUrl: "/img/candidati/svoltastudenti/giulia_daleo.jpg", name: "D'Aleo Giulia", detto: "GIUS"},
						{id:3, imgUrl: "/img/candidati/svoltastudenti/vittorio_perobelli.jpg", name: "Perobelli Vittorio", detto: "PERO"},
						{id:4, imgUrl: "/img/candidati/svoltastudenti/eva_parenti.jpg", name: "Parenti Eva", detto: "EVA"}
                    ]
                }
            }
        }         
    }
  }
}
</script>
