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
            name: "StudentiIndipendenti",
            mainWebsiteUrl: "https://studentiindipendenti.it/",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Studenti_Indipendenti.pdf",
            desc: "metti-descrizione",
            imageUrl:"/img/ternasinistrorsa.png",
            programma:
                [
                    {
                        id : 1,
                        title: 'Titolo1',
                        url: '/img/studentiindipendenti.png',
                        desc: "Descrizione 1"
                    },
                    {
                        id: 2,
                        title: 'Titolo2',
                        url: '/img/studentiindipendenti.png',
                        desc: "Descrizione 2"
                    },
                ],
            senato:
            {
                desc: "La nostra idea di senato ecc...",
                candidati:[
                  {
                    id: 1, imgUrl: "/img/candidati/studentiindipendenti/marta_ghidoli.jpg", name: "Ghidoli Marta", detto: "MARTA"
                  },
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                  { id: 1, imgUrl: "/img/candidati/studentiindipendenti/daniele_radaelli.jpg", name: "Radaelli Daniele", detto: "REDA"},
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
                        { id: 1, imgUrl: "/img/candidati/studentiindipendenti/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
                        { id: 1, imgUrl: "/img/candidati/studentiindipendenti/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
                        { id: 1, imgUrl: "/img/candidati/studentiindipendenti/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
                        { id: 1, imgUrl: "/img/candidati/studentiindipendenti/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                    ]
                }
            }
        }
    }
  }
}
</script>
