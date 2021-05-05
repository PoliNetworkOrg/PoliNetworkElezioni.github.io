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
            name: "ListaAperta",
            mainWebsiteUrl: "https://www.readytobe-listaperta.com",
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
                    {id: 1, imgUrl: "/img/candidati/listaaperta/marta_ghidoli.jpg", name: "Ghidoli Marta", detto: "MARTA"},
                    {id: 2, imgUrl: "/img/candidati/listaaperta/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                    {id: 3, imgUrl: "/img/candidati/listaaperta/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
                    {id: 4, imgUrl: "/img/candidati/listaaperta/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                    {id: 5, imgUrl: "/img/candidati/listaaperta/francesco_bugo.jpg", name: "Bugo Francesco Maria", detto: "BUGO"},
                    {id: 6, imgUrl: "/img/candidati/listaaperta/maria_zini.jpg", name: "Zini Maria", detto: "MERI"},
                    {id: 7, imgUrl: "/img/candidati/listaaperta/alessandro_maestri.jpg", name: "Maestri Alessandro", detto: "BOBBI"},
                    {id: 8, imgUrl: "/img/candidati/listaaperta/elisabetta_alberton.jpg", name: "Alberton Elisabetta", detto: "BETTA"}
                ]
            },
            cda:{
                desc: "La nostra idea di cda ecc...",
                candidati:[
                    {id:1, imgUrl: "/img/candidati/listaaperta/daniele_radaelli.jpg", name: "Radaelli Daniele", detto: "REDA"},
                    {id:2, imgUrl: "/img/candidati/listaaperta/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
                    {id:3, imgUrl: "/img/candidati/listaaperta/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                    {id:4, imgUrl: "/img/candidati/listaaperta/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"}
                ]
            },
            scuole:{
                desc: "La nostra idea di scuola ecc...",
                auic:{
                    desc: "La scuola auic...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/tommaso_sanese.jpg", name: "Sanese Tommaso", detto: "TOMMI"},
                        {id:2, imgUrl: "/img/candidati/listaaperta/maria_zini.jpg", name: "Zini Maria", detto: "MERI"},
						{id:3, imgUrl: "/img/candidati/listaaperta/sara_galli.jpg", name: "Galli Sara", detto: "SARA"},
						{id:4, imgUrl: "/img/candidati/listaaperta/issa_tallawi.jpg", name: "Tallawi Issa", detto: "ISSA"},
						{id:5, imgUrl: "/img/candidati/listaaperta/veronica_cantale.jpg", name: "Cantale Maria Veronica", detto: ""},
						{id:6, imgUrl: "/img/candidati/listaaperta/elisabetta_alberton.jpg", name: "Alberton Elisabetta", detto: "BETTA"},
                        {id:7, imgUrl: "/img/candidati/listaaperta/elisabetta_taffa.jpg", name: "Taffa Elisabetta", detto: "ELI"},
                        {id:8, imgUrl: "/img/candidati/listaaperta/marco_galbiati.jpg", name: "Galbiati Marco", detto: "CALI"},
						{id:9, imgUrl: "/img/candidati/listaaperta/marta_defre.jpg", name: "De fre Marta", detto: "MARTA"},
						{id:10, imgUrl: "/img/candidati/listaaperta/pietro_rabaioli.jpg", name: "Rabaioli Pietro", detto: "RABA"},
						{id:11, imgUrl: "/img/candidati/listaaperta/isaac_young.jpg", name: "Young Isaac Jason", detto: "ISAAC"},
						{id:12, imgUrl: "/img/candidati/listaaperta/marco_stringhetti.jpg", name: "Stringhetti Marco", detto: "STRINGO"},
						{id:13, imgUrl: "/img/candidati/listaaperta/sara_baldelli.jpg", name: "Baldelli Sara Micol", detto: ""}
                    ]
                },
                trei:{
                    desc :"La scuola 3i...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/alessandro_alladio.jpg", name: "Alladio Alessandro", detto: "LALO"},
                        {id:2, imgUrl: "/img/candidati/listaaperta/emanuela_dotti.jpg", name: "Dotti Emanuela", detto: "MANU"},
						{id:3, imgUrl: "/img/candidati/listaaperta/giovanni_cavassi.jpg", name: "Cavassi Giovanni", detto: "CAVA"},
						{id:4, imgUrl: "/img/candidati/listaaperta/letizia_perri.jpg", name: "Perri Letizia Maria", detto: "LETI"},
						{id:5, imgUrl: "/img/candidati/listaaperta/john_powell.jpg", name: "Powell John Edgar", detto: "JOHN.JE"},
						{id:6, imgUrl: "/img/candidati/listaaperta/lorenzo_petulicchio.jpg", name: "Petulicchio Lorenzo", detto: "PETU"},
                        {id:7, imgUrl: "/img/candidati/listaaperta/francesca_castellotti.jpg", name: "Castellotti Francesca", detto: "FRANCI"},
                        {id:8, imgUrl: "/img/candidati/listaaperta/matteo_crivellari.jpg", name: "Crivellari Matteo", detto: "CRIVE"},
						{id:9, imgUrl: "/img/candidati/listaaperta/gloria_lopiano.jpg", name: "Lopiano Gloria", detto: ""},
						{id:10, imgUrl: "/img/candidati/listaaperta/luca_mandelli.jpg", name: "Mandelli Luca", detto: "MANDO"},
						{id:11, imgUrl: "/img/candidati/listaaperta/stefano_garavaglia.jpg", name: "Garavaglia Stefano", detto: "IZ"},
						{id:12, imgUrl: "/img/candidati/listaaperta/giuliano_gemmani.jpg", name: "Gemmnani Giuliano", detto: "GEMMA"},
						{id:13, imgUrl: "/img/candidati/listaaperta/marco_gandolla.jpg", name: "Gandolla Marco", detto: "QUAGLIA"},
						{id:14, imgUrl: "/img/candidati/listaaperta/francesco_boldrini.jpg", name: "Boldrini Francesco", detto: "BOLD"},
						{id:15, imgUrl: "/img/candidati/listaaperta/marco_guerini.jpg", name: "Guerini Marco", detto: "GUERO"}
                    ]
                },
                icat:{
                    desc: "La scuola icat...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/andrea_mandelli.jpg", name: "Mandelli Andrea", detto: "ZAC"},
						{id:2, imgUrl: "/img/candidati/listaaperta/francesco_bugo.jpg", name: "Bugo Francesco Maria", detto: "BUGO"},
						{id:3, imgUrl: "/img/candidati/listaaperta/pietro_perego.jpg", name: "Perego Pietro", detto: "PIE"},
						{id:4, imgUrl: "/img/candidati/listaaperta/camilla_macchini.jpg", name: "Macchini Camilla", detto: "CAMI"},
						{id:5, imgUrl: "/img/candidati/listaaperta/franscesco_cannerozzi.jpg", name: "Cannerozzi Francesco", detto: "CANNE"},
						{id:6, imgUrl: "/img/candidati/listaaperta/davide_zini.jpg", name: "Zini Davide", detto: "ZINZAN"},
						{id:7, imgUrl: "/img/candidati/listaaperta/giovanni_abbenda.jpg", name: "Abbenda Giovanni", detto: "GIO"}
                    ]
                },
                design:{
                    desc : "La scuola design...",
                    candidati:
                    [
						{id:1, imgUrl: "/img/candidati/listaaperta/chiara_giardiello.jpg", name: "Giardiello Chiara Edda Maria", detto: "CHIARA"},
                        {id:2, imgUrl: "/img/candidati/listaaperta/sofia_boni.jpg", name: "Boni Sofia", detto: "SOFI"},
						{id:3, imgUrl: "/img/candidati/listaaperta/maddalena_milanesi.jpg", name: "Milanesi Maddalena", detto: "MADDA"},
						{id:4, imgUrl: "/img/candidati/listaaperta/lorenzo_bressan.jpg", name: "Bressan Lorenzo", detto: "BRACE"},
						{id:5, imgUrl: "/img/candidati/listaaperta/maria_sammarini.jpg", name: "Sammarini Maria", detto: "MERY"},
						{id:6, imgUrl: "/img/candidati/listaaperta/michele_dondi.jpg", name: "Dondi Michele", detto: "MIKE"},
                        {id:7, imgUrl: "/img/candidati/listaaperta/luca_tassetto.jpg", name: "Tassetto Luca", detto: "TAX"},
                        {id:8, imgUrl: "/img/candidati/listaaperta/giacomo_tomesani.jpg", name: "Tomesani Giacomo Maria", detto: "JACK"},
						{id:9, imgUrl: "/img/candidati/listaaperta/caterina_grillo.jpg", name: "Grillo Caterina Maria", detto: "CATE"},
						{id:10, imgUrl: "/img/candidati/listaaperta/giovanni_clericetti.jpg", name: "Clericetti Giovanni", detto: "GIOCLE"},
						{id:11, imgUrl: "/img/candidati/listaaperta/michele_bruno.jpg", name: "Bruno Michele", detto: "MICHI"},
						{id:12, imgUrl: "/img/candidati/listaaperta/chiara_mazzeo.jpg", name: "Mazzeo Chiara", detto: ""},
						{id:13, imgUrl: "/img/candidati/listaaperta/giovanni_provesi.jpg", name: "Provesi Giovanni", detto: "GIO"},
						{id:14, imgUrl: "/img/candidati/listaaperta/chiara_anceschi.jpg", name: "Anceschi Chiara", detto: "CHIANCHI"}
                    ]
                }
            }
        }         
    }
  }
}
</script>
