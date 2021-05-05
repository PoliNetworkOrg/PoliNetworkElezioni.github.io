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
            name: "TernaSinistrorsa",
            mainWebsiteUrl: "https://www.ternasinistrorsa.it/",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/La_Terna_Sinistrorsa.pdf",
            desc: "metti-descrizione",
            imageUrl:"/img/ternasinistrorsa.png",
            programma:
                [
                    {
                        id : 1,
                        title: 'Titolo1',
                        url: '/img/ternasinistrorsa.png',
                        desc: "Descrizione 1"
                    },
                    {
                        id: 2,
                        title: 'Titolo2',
                        url: '/img/ternasinistrorsa.png',
                        desc: "Descrizione 2"
                    },
                ],
            senato:
            {
                desc: "La nostra idea di senato ecc...",
                candidati:[
                  {
                    id: 1, imgUrl: "/img/candidati/ternasinistrorsa/bacigalupo_ada.jpg", name: "Bacigalupo Ada", detto: "",
                    id: 2, imgUrl: "/img/candidati/ternasinistrorsa/boveri_matteo.jpg", name: "Boveri Matteo", detto: "Johnny Shock",
                    id: 3, imgUrl: "/img/candidati/ternasinistrorsa/catalano_delia.jpg", name: "Catalano Delia", detto: "",
                    id: 4, imgUrl: "/img/candidati/ternasinistrorsa/bossi_nunez_pedro.jpg", name: "Bossi Núñez Pedro", detto: "",
                    id: 5, imgUrl: "/img/candidati/ternasinistrorsa/bancale_alice.jpg", name: "Bancale Alice", detto: "",
                    id: 6, imgUrl: "/img/candidati/ternasinistrorsa/lleshi_bruna.jpg", name: "Ileshi Bruna", detto: "",
                    id: 7, imgUrl: "/img/candidati/ternasinistrorsa/bindoni_diego.jpg", name: "Bindoni Diego", detto: "",
                    id: 8, imgUrl: "/img/candidati/ternasinistrorsa/simionato_alice.jpg", name: "Simionato Alice", detto: ""
                  },
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                  {
                    id: 1, imgUrl: "/img/candidati/ternasinistrorsa/luzzini_davide.jpg", name: "Luzzini Davide", detto: "",
                    id: 2, imgUrl: "/img/candidati/ternasinistrorsa/pasculli_clarissa.jpg", name: "Pasculli Clarissa", detto: "",
                    id: 3, imgUrl: "/img/candidati/ternasinistrorsa/drole_luca.jpg", name: "Drole Luca", detto: "",
                    id: 4, imgUrl: "/img/candidati/ternasinistrorsa/martinoia_giada.jpg", name: "Martinoia Giada ", detto: ""
                  },
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/ternasinistrorsa/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/ternasinistrorsa/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/ternasinistrorsa/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/ternasinistrorsa/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                    ]
                }
            }
        }
    }
  }
}
</script>
