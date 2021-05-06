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
            programmaSottotitolo:"Inserisci sottotitolo...",
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
                    {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/wolff_jonathan.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                    {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/iodice_andrea.jpg", name: "Iodice Andrea", detto: ""},
                    {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/deluca_maria_nicole.jpg", name: "Deluca Maria Nicole", detto: ""},
                    {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/magaz_milagros.jpg", name: "Magaz Milagros", detto: "MILI"},
                    {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/zamboni_marco.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                    {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/marcucci_edoardo.jpg", name: "Marcucci Edoardo", detto: ""},
                    {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/spiniello_mario.jpg", name: "Spiniello Mario", detto: ""},
                    {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/stramare_davide.jpg", name: "Stramare Davide", detto: "DADO"}
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                    {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/crisogianni_gloria_maria.jpg", name: "Crisogianni Gloria Maria", detto: ""},
                    {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/notarianni_anita_clara.jpg", name: "Notarianni Anita Clara", detto: ""},
                    {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/arrigoni_chiara.jpg", name: "Arrigoni Chiara", detto: ""},
                    {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/carbone_gaia.jpg", name: "Carbone Gaia", detto: ""}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/bertolini_tommasopaolo.jpg", name: "Bertolini Tommasopaolo", detto: "TOMMI"},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/maurelli_debora.jpg", name: "Maurelli Debora", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/cantatore_giulia.jpg", name: "Cantatore Giulia", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/lawrence_emily.jpg", name: "Lawrence Emily", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/crisogianni_gloria_maria.jpg", name: "Crisogianni Gloria Maria", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/deluca_maria_nicole.jpg", name: "Deluca Maria Nicole", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/francioli_luca.jpg", name: "Francioli Luca", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/gonzàlez_miranda_valeria_margarita.jpg", name: "Gonzàlez Miranda Valeria Margarita", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/haardt_gabriele.jpg", name: "Haardt Gabriele", detto: ""},
                        {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/masciarelli_ilaria.jpg", name: "Masciarelli Ilaria", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/berti_chiara.jpg", name: "Berti Chiara", detto: ""},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/buongiorno_pietro.jpg", name: "Buongiorno Pietro", detto: ""}
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/marcucci_edoardo.jpg", name: "Marcucci Edoardo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/portentoso_alice.jpg", name: "Portentoso Alice", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/fiorani_elena.jpg", name: "Fiorani Elena", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/zamboni_marco.jpg", name: "Zamboni Marco", detto: "ZAMBO"},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/wolff_jonathan.jpg", name: "Wolff Jonathan", detto: "JONNY"},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/benatti_francesca.jpg", name: "Benatti Francesca", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/spiniello_mario.jpg", name: "Spiniello Mario", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/carbone_gaia.jpg", name: "Carbone Gaia", detto: ""},
                        {id: 9 , imgUrl: "/img/candidati/studentiindipendenti/stramare_davide.jpg", name: "Stramare Davide", detto: "DADO"},
                        {id: 10 , imgUrl: "/img/candidati/studentiindipendenti/truvolo_federica.jpg", name: "Truvolo Federica", detto: ""},
                        {id: 11 , imgUrl: "/img/candidati/studentiindipendenti/finardi_sara_ehetagegnehu.jpg", name: "Finardi Sara Ehetagegnehu", detto: "FES"},
                        {id: 12 , imgUrl: "/img/candidati/studentiindipendenti/puddu_francesco.jpg", name: "Puddu Francesco", detto: ""},
                        {id: 13 , imgUrl: "/img/candidati/studentiindipendenti/contardi_pietro.jpg", name: "Contardi Pietro", detto: ""},
                        {id: 14 , imgUrl: "/img/candidati/studentiindipendenti/serino_roberto.jpg", name: "Serino Roberto", detto: ""},
                        {id: 15 , imgUrl: "/img/candidati/studentiindipendenti/oppizzii_alice.jpg", name: "Oppizzii Alice", detto: ""}
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/chiavegato_matteo.jpg", name: "Chiavegato Matteo", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/varotto_davide.jpg", name: "Varotto Davide", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/labanca_francesco.jpg", name: "Labanca Francesco", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/stucchi_davide.jpg", name: "Stucchi Davide", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/ippolito_alessia.jpg", name: "Ippolito Alessia", detto: ""}
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
                        {id: 1 , imgUrl: "/img/candidati/studentiindipendenti/ippolito_ilenia.jpg", name: "Ippolito Ilenia", detto: ""},
                        {id: 2 , imgUrl: "/img/candidati/studentiindipendenti/giordano_laura.jpg", name: "Giordano Laura", detto: ""},
                        {id: 3 , imgUrl: "/img/candidati/studentiindipendenti/la_ferla_irene.jpg", name: "La Ferla Irene", detto: ""},
                        {id: 4 , imgUrl: "/img/candidati/studentiindipendenti/arrigoni_chiara.jpg", name: "Arrigoni Chiara", detto: ""},
                        {id: 5 , imgUrl: "/img/candidati/studentiindipendenti/pompa_federica.jpg", name: "Pompa Federica", detto: ""},
                        {id: 6 , imgUrl: "/img/candidati/studentiindipendenti/creanza_caterina.jpg", name: "Creanza Caterina", detto: ""},
                        {id: 7 , imgUrl: "/img/candidati/studentiindipendenti/ciortan_andreea.jpg", name: "Ciortan Andreea", detto: ""},
                        {id: 8 , imgUrl: "/img/candidati/studentiindipendenti/patti_lavinia.jpg", name: "Patti Lavinia", detto: ""}
                    ]
                }
            }
        }
    }
  }
}
</script>
