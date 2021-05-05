<template>
    <div>
        <Lista :data-lista="items" />
    </div>
</template>

<script>
export default {
    data () {
    return {
      items: {
            name: "ListaAperta",
            mainWebsiteUrl: "https://www.poli-listaperta.it/",
            mainProgrammaUrl: "https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Lista_Aperta.pdf",
            desc: "metti-descrizione",
            imageUrl:"/img/listaaperta.png",
            programma:
                [
                    {
                        id : 1,
                        title: 'Titolo1',
                        url : '/img/listaaperta.png',
                        desc: "Descrizione 1"
                    },
                    {
                        id: 2,
                        title: 'Titolo2',
                        url : '/img/listaaperta.png',
                        desc: "Descrizione 2"
                    },
                ],
            senato:
            {
                desc: "La nostra idea di senato ecc...",
                candidati:[
                    {id: 1, imgUrl: "/img/candidati/marta_ghidoli.jpg", name: "Ghidoli Marta", detto: "MARTA"},
                    {id: 2, imgUrl: "/img/candidati/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                           {id: 3, imgUrl: "/img/candidati/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
                           {id: 4, imgUrl: "/img/candidati/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                           {id: 5, imgUrl: "/img/candidati/francesco_bugo.jpg", name: "Bugo Francesco Maria", detto: "BUGO"},
                           {id: 6, imgUrl: "/img/candidati/maria_zini.jpg", name: "Zini Maria", detto: "MERI"},
                           {id: 7, imgUrl: "/img/candidati/alessandro_maestri.jpg", name: "Maestri Alessandro", detto: "BOBBI"},
                           {id: 8, imgUrl: "/img/candidati/elisabetta_alberton.jpg", name: "Alberton Elisabetta", detto: "BETTA"}
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                    {id:1, imgUrl: "/img/candidati/daniele_radaelli.jpg", name: "Radaelli Daniele", detto: "REDA"},
                    {id:2, imgUrl: "/img/candidati/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
                    {id:3, imgUrl: "/img/candidati/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                    {id:4, imgUrl: "/img/candidati/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic..."
                },
                trei:{
                    desc :"La scuola 3i..."
                },
                icat:{
                    desc: "La scuola icat..."
                },
                design:{
                    desc : "La scuola design..."
                }
            }
        }         
    }
  }
}
</script>
