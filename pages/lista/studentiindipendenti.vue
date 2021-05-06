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
            name: "Studenti Indipendenti",
            mainWebsiteUrl: "https://studentiindipendenti.it/",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Studenti_Indipendenti.pdf",
            desc: "metti-descrizione",
            imageUrl:"/img/sip.png",
            programmaSottotitolo:"Inserisci slogan...",
            programma:
                [
                    {
                        id : 1,
                        title: 'Titolo1',
                        url: '/img/sip.png',
                        desc: "Descrizione 1"
                    },
                    {
                        id: 2,
                        title: 'Titolo2',
                        url: '/img/sip.png',
                        desc: "Descrizione 2"
                    },
                ],
            senato:
            {
                desc: "La nostra idea di senato ecc...",
                candidati:[
                    {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/jonathan_wolff.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                    {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/andrea_iodice.jpg", name: "Iodice Andrea", detto: ""},
                    {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/maria_nicole_deluca.jpg", name: "Deluca Maria Nicole", detto: ""},
                    {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/milagros_magaz.jpg", name: "Magaz Milagros", detto: "MILI"},
                    {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/marco_zamboni.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                    {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/edoardo_marcucci.jpg", name: "Marcucci Edoardo", detto: ""},
                    {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/mario_spiniello.jpg", name: "Spiniello Mario", detto: ""},
                    {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/davide_stramare.jpg", name: "Stramare Davide", detto: "DADO"}
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                    {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/gloria_maria_crisogianni.jpg", name: "Crisogianni Gloria Maria", detto: ""},
                    {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/anita_clara_notarianni.jpg", name: "Notarianni Anita Clara", detto: ""},
                    {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/chiara_arrigoni.jpg", name: "Arrigoni Chiara", detto: ""},
                    {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/gaia_carbone.jpg", name: "Carbone Gaia", detto: ""}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/tommasopaolo_bertolini.jpg", name: "Bertolini Tommasopaolo", detto: "TOMMI"},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/debora_maurelli.jpg", name: "Maurelli Debora", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/giulia_cantatore.jpg", name: "Cantatore Giulia", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/emily_lawrence.jpg", name: "Lawrence Emily", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/gloria_maria_crisogianni.jpg", name: "Crisogianni Gloria Maria", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/maria_nicole_deluca.jpg", name: "Deluca Maria Nicole", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/luca_francioli.jpg", name: "Francioli Luca", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/miranda_valeria_margarita_gonzalez.jpg", name: "Gonzàlez Miranda Valeria Margarita", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/gabriele_haardt.jpg", name: "Haardt Gabriele", detto: ""},
                        {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/ilaria_masciarelli.jpg", name: "Masciarelli Ilaria", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/chiara_berti.jpg", name: "Berti Chiara", detto: ""},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/pietro_buongiorno.jpg", name: "Buongiorno Pietro", detto: ""}
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/edoardo_marcucci.jpg", name: "Marcucci Edoardo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/alice_portentoso.jpg", name: "Portentoso Alice", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/elena_fiorani.jpg", name: "Fiorani Elena", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/marco_zamboni.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/jonathan_wolff.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/francesca_benatti.jpg", name: "Benatti Francesca", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/mario_spiniello.jpg", name: "Spiniello Mario", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/gaia_carbone.jpg", name: "Carbone Gaia", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/davide_stramare.jpg", name: "Stramare Davide", detto: "DADO"},
                        {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/federica_truvolo.jpg", name: "Truvolo Federica", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/sara_ehetagegnehu_finardi.jpg", name: "Finardi Sara Ehetagegnehu", detto: "FES"},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/francesco_puddu.jpg", name: "Puddu Francesco", detto: ""},
                        {id: 13 , imgUrl: "/img/candidati/studentiindipendenti/pietro_contardi.jpg", name: "Contardi Pietro", detto: ""},
                        {id: 14 , imgUrl: "/img/candidati/studentiindipendenti/roberto_serino.jpg", name: "Serino Roberto", detto: ""},
                        {id: 15 , imgUrl: "/img/candidati/studentiindipendenti/alice_oppizzii.jpg", name: "Oppizzii Alice", detto: ""}
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/matteo_chiavegato.jpg", name: "Chiavegato Matteo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/davide_varotto.jpg", name: "Varotto Davide", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/francesco_labanca.jpg", name: "Labanca Francesco", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/davide_stucchi.jpg", name: "Stucchi Davide", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/alessia_ippolito.jpg", name: "Ippolito Alessia", detto: ""}
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/ilenia_ippolito.jpg", name: "Ippolito Ilenia", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/laura_giordano.jpg", name: "Giordano Laura", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/irene_la_ferla.jpg", name: "La Ferla Irene", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/chiara_arrigoni.jpg", name: "Arrigoni Chiara", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/federica_pompa.jpg", name: "Pompa Federica", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/caterina_creanza.jpg", name: "Creanza Caterina", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/andreea_ciortan.jpg", name: "Ciortan Andreea", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/lavinia_patti.jpg", name: "Patti Lavinia", detto: ""}
                    ]
                }
            }
        }
    }
  }
}
</script>
