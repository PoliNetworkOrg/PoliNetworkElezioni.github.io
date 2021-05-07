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
            desc: ["Siamo La Terna Sinistrorsa, una lista di rappresentanza studentesca del Politecnico di Milano. Da 25 anni lottiamo per un’università basata sul diritto allo studio e senza disuguaglianze. Inclusione, parità ed equità sono i notri valori fondanti: scopri il nostro programma e i nostri candidati!"],
            imageUrl:"/img/terna.png",
            programmaSottotitolo:"Siamo più di un numero",
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
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/ada_bacigalupo.png", name: "Bacigalupo Ada", detto: ""}
                ]
            },
            CdA:{
                desc: "La nostra idea di CdA ecc...",
                candidati:[
                  {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/davide_luzzini.png", name: "Luzzini Davide", detto: ""}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/chiara_nardelli.png", name: "Nardelli Chiara", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/letizia_guido.png", name: "Guido Letizia", detto: ""}
                    
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/clarissa_pasculli.png", name: "Pasculli Clarissa", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/pedro_bossi.png", name: "Bossi Pedro", detto: ""}
                
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
                      {id: 4 , imgUrl: "/img/candidati/ternasinistrorsa/luca_lo_bosco.png", name: "Lo Bosco Luca", detto: ""},
                      {id: 5 , imgUrl: "/img/candidati/ternasinistrorsa/andrea_collini.png", name: "Collini Andrea", detto: ""}
                   
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
                      {id: 1 , imgUrl: "/img/candidati/ternasinistrorsa/mercedes_vitali.png", name: "Vitali Mercedes", detto: ""},
                      {id: 2 , imgUrl: "/img/candidati/ternasinistrorsa/giovanni_smoquina.png", name: "Smoquina Giovanni", detto: ""}
                    ]
                }
            }
        }
    }
  }
}
</script>
