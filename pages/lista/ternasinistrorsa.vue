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
            name: "Terna Sinistrorsa",
            mainWebsiteUrl: "https://www.ternasinistrorsa.it/",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/La_Terna_Sinistrorsa.pdf",
            desc: "metti-descrizione",
            imageUrl:"/img/terna.png",
            programma:
                [
                    {
                        id : 1,
                        title: 'Titolo1',
                        url: '/img/terna.png',
                        desc: "Descrizione 1"
                    },
                    {
                        id: 2,
                        title: 'Titolo2',
                        url: '/img/terna.png',
                        desc: "Descrizione 2"
                    },
                ],
            senato:
            {
                desc: "La nostra idea di senato ecc...",
                candidati:[
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/bacigalupoada.jpg", name: "Bacigalupoada", detto: ""},
                  {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/simionato_alice.jpg", name: "Simionato Alice", detto: ""},
                  {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/bindoni_diego.jpg", name: "Bindoni Diego", detto: ""},
                  {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/lleshi_bruna.jpg", name: "Lleshi Bruna", detto: ""},
                  {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/bancale_alice.jpg", name: "Bancale Alice", detto: ""},
                  {id: 6 , imgUrl: "/img/candidati/ternasinistrorsa/bossi_núñez_pedro.jpg", name: "Bossi Núñez Pedro", detto: ""},
                  {id: 7 , imgUrl: "/img/candidati/ternasinistrorsa/catalano_delia.jpg", name: "Catalano Delia", detto: ""},
                  {id: 8 , imgUrl: "/img/candidati/ternasinistrorsa/boverimatteo.jpg", name: "Boverimatteo", detto: "JOHNNY SHOCK"}
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/luzzini_davide.jpg", name: "Luzzini Davide", detto: ""},
                  {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/pasculli_clarissa.jpg", name: "Pasculli Clarissa", detto: ""},
                  {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/drole_luca.jpg", name: "Drole Luca", detto: ""},
                  {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/martinoia_giada.jpg", name: "Martinoia Giada", detto: ""}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/nardelli_chiara.jpg", name: "Nardelli Chiara", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/guido_maria_letizia.jpg", name: "Guido Maria Letizia", detto: ""},
                      {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/wang_you_qi.jpg", name: "Wang You Qi", detto: ""},
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/totaro_filaravera_luna.jpg", name: "Totaro Filaravera Luna", detto: ""},
                      {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/lleshi_bruna.jpg", name: "Lleshi Bruna", detto: ""},
                      {id: 6 , imgUrl: "/img/candidati/ternasinistrorsa/rimoldi_chiara.jpg", name: "Rimoldi Chiara", detto: ""},
                      {id: 7 , imgUrl: "/img/candidati/ternasinistrorsa/ferrarese_matteo.jpg", name: "Ferrarese Matteo", detto: ""},
                      {id: 8 , imgUrl: "/img/candidati/ternasinistrorsa/gianoli_matteo.jpg", name: "Gianoli Matteo", detto: ""},
                      {id: 9 , imgUrl: "/img/candidati/ternasinistrorsa/wang_jiaqi.jpg", name: "Wang Jiaqi", detto: ""},
                      {id: 10 , imgUrl: "/img/candidati/ternasinistrorsa/oldani_giulia.jpg", name: "Oldani Giulia", detto: ""},
                      {id: 11 , imgUrl: "/img/candidati/ternasinistrorsa/simionato_alice.jpg", name: "Simionato Alice", detto: ""},
                      {id: 12 , imgUrl: "/img/candidati/ternasinistrorsa/bancale_alice.jpg", name: "Bancale Alice", detto: ""}
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/pasculli_clarissa.jpg", name: "Pasculli Clarissa", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/bossi_núñezpedro.jpg", name: "Bossi Núñezpedro", detto: ""},
                      {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/drole_luca.jpg", name: "Drole Luca", detto: ""},
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/sperandio_alberto.jpg", name: "Sperandio Alberto", detto: ""},
                      {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/luzzini_davide.jpg", name: "Luzzini Davide", detto: ""},
                      {id: 6 , imgUrl: "/img/candidati/ternasinistrorsa/bindoni_diego.jpg", name: "Bindoni Diego", detto: ""},
                      {id: 7 , imgUrl: "/img/candidati/ternasinistrorsa/santillan_moreno_carlos_alberto.jpg", name: "Santillan Moreno Carlos Alberto", detto: ""},
                      {id: 8 , imgUrl: "/img/candidati/ternasinistrorsa/catalano_delia.jpg", name: "Catalano Delia", detto: ""},
                      {id: 9 , imgUrl: "/img/candidati/ternasinistrorsa/boveri_matteo.jpg", name: "Boveri Matteo", detto: "JOHNNY SHOCK"},
                      {id: 10 , imgUrl: "/img/candidati/ternasinistrorsa/vasconi_fabrizio.jpg", name: "Vasconi Fabrizio", detto: "VASCO"},
                      {id: 11 , imgUrl: "/img/candidati/ternasinistrorsa/travaglini_giorgio.jpg", name: "Travaglini Giorgio", detto: ""},
                      {id: 12 , imgUrl: "/img/candidati/ternasinistrorsa/badilini_alberto.jpg", name: "Badilini Alberto", detto: ""},
                      {id: 13 , imgUrl: "/img/candidati/ternasinistrorsa/martinoia_giada.jpg", name: "Martinoia Giada", detto: ""},
                      {id: 14 , imgUrl: "/img/candidati/ternasinistrorsa/barattin_lorenzo.jpg", name: "Barattin Lorenzo", detto: ""}
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/lobosco_luca.jpg", name: "Lobosco Luca", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/collini_andrea.jpg", name: "Collini Andrea", detto: ""},
                      {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/carlino_mauro.jpg", name: "Carlino Mauro", detto: ""},
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/bacigalupo_ada.jpg", name: "Bacigalupo Ada", detto: ""}
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/vitali_mercedes_maria.jpg", name: "Vitali Mercedes Maria", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/smoquina_giovanni.jpg", name: "Smoquina Giovanni", detto: ""}
                    ]
                }
            }
        }
    }
  }
}
</script>
