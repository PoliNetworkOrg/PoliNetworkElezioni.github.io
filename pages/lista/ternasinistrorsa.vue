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
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/ada_bacigalupo.png", name: "Bacigalupo Ada", detto: ""},
                  {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/alice_simionato.png", name: "Simionato Alice", detto: ""},
                  {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/diego_bindoni.png", name: "Bindoni Diego", detto: ""},
                  {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/bruna_lleshi.png", name: "Lleshi Bruna", detto: ""},
                  {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/alice_bancale.png", name: "Bancale Alice", detto: ""},
                  {id: 6 , imgUrl: "/img/candidati/ternasinistrorsa/nunez_pedro_bossi.png", name: "Bossi Núñez Pedro", detto: ""},
                  {id: 7 , imgUrl: "/img/candidati/ternasinistrorsa/delia_catalano.png", name: "Catalano Delia", detto: ""},
                  {id: 8 , imgUrl: "/img/candidati/ternasinistrorsa/matteo_boveri.png", name: "Boverimatteo", detto: "JOHNNY SHOCK"}
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/davide_luzzini.png", name: "Luzzini Davide", detto: ""},
                  {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/clarissa_pasculli.png", name: "Pasculli Clarissa", detto: ""},
                  {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/luca_drole.png", name: "Drole Luca", detto: ""},
                  {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/giada_martinoia.png", name: "Martinoia Giada", detto: ""}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/chiara_nardelli.png", name: "Nardelli Chiara", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/letizia_guido_maria.png", name: "Guido Maria Letizia", detto: ""},
                      {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/you_qi_wang.png", name: "Wang You Qi", detto: ""},
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/filaravera_luna_totaro.png", name: "Totaro Filaravera Luna", detto: ""},
                      {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/bruna_lleshi.png", name: "Lleshi Bruna", detto: ""},
                      {id: 6 , imgUrl: "/img/candidati/ternasinistrorsa/chiara_rimoldi.png", name: "Rimoldi Chiara", detto: ""},
                      {id: 7 , imgUrl: "/img/candidati/ternasinistrorsa/matteo_ferrarese.png", name: "Ferrarese Matteo", detto: ""},
                      {id: 8 , imgUrl: "/img/candidati/ternasinistrorsa/matteo_gianoli.png", name: "Gianoli Matteo", detto: ""},
                      {id: 9 , imgUrl: "/img/candidati/ternasinistrorsa/jiaqi_wang.png", name: "Wang Jiaqi", detto: ""},
                      {id: 10 , imgUrl: "/img/candidati/ternasinistrorsa/giulia_oldani.png", name: "Oldani Giulia", detto: ""},
                      {id: 11 , imgUrl: "/img/candidati/ternasinistrorsa/alice_simionato.png", name: "Simionato Alice", detto: ""},
                      {id: 12 , imgUrl: "/img/candidati/ternasinistrorsa/alice_bancale.png", name: "Bancale Alice", detto: ""}
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/clarissa_pasculli.png", name: "Pasculli Clarissa", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/nunez_pedro_bossi_.png", name: "Bossi Núñezpedro", detto: ""},
                      {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/luca_drole.png", name: "Drole Luca", detto: ""},
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/alberto_sperandio.png", name: "Sperandio Alberto", detto: ""},
                      {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/davide_luzzini.png", name: "Luzzini Davide", detto: ""},
                      {id: 6 , imgUrl: "/img/candidati/ternasinistrorsa/diego_bindoni.png", name: "Bindoni Diego", detto: ""},
                      {id: 7 , imgUrl: "/img/candidati/ternasinistrorsa/moreno_carlos_alberto_santillan.png", name: "Santillan Moreno Carlos Alberto", detto: ""},
                      {id: 8 , imgUrl: "/img/candidati/ternasinistrorsa/delia_catalano.png", name: "Catalano Delia", detto: ""},
                      {id: 9 , imgUrl: "/img/candidati/ternasinistrorsa/matteo_boveri_.png", name: "Boveri Matteo", detto: "JOHNNY SHOCK"},
                      {id: 10 , imgUrl: "/img/candidati/ternasinistrorsa/fabrizio_vasconi.png", name: "Vasconi Fabrizio", detto: "VASCO"},
                      {id: 11 , imgUrl: "/img/candidati/ternasinistrorsa/giorgio_travaglini.png", name: "Travaglini Giorgio", detto: ""},
                      {id: 12 , imgUrl: "/img/candidati/ternasinistrorsa/alberto_badilini.png", name: "Badilini Alberto", detto: ""},
                      {id: 13 , imgUrl: "/img/candidati/ternasinistrorsa/giada_martinoia.png", name: "Martinoia Giada", detto: ""},
                      {id: 14 , imgUrl: "/img/candidati/ternasinistrorsa/lorenzo_barattin.png", name: "Barattin Lorenzo", detto: ""}
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/luca_lobosco.png", name: "Lobosco Luca", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/andrea_collini.png", name: "Collini Andrea", detto: ""},
                      {id: 3 , imgUrl: "/img/candidati/ternasinistrorsa/mauro_carlino.png", name: "Carlino Mauro", detto: ""},
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/ada_bacigalupo.png", name: "Bacigalupo Ada", detto: ""}
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/mercedes_maria_vitali.png", name: "Vitali Mercedes Maria", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/giovanni_smoquina.png", name: "Smoquina Giovanni", detto: ""}
                    ]
                }
            }
        }
    }
  }
}
</script>
