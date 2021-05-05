<template>
    <div>

        <NavigationBar />

        <!-- Page Content -->
        <div class="container" style="width: 100%;max-width: 100%;margin:0px;">

            <!-- Jumbotron Header -->
            <header class="jumbotron my-4 testoCentrale">
                <div style="margin:auto;">
                    <div style="text-align:center;">
                        <h2>Elezioni rappresentanti degli studenti</h2>
                        <br/>
                        <h4>Senato</h4>
                        <p class="lead"><blockquote>
                        IL SENATO INDIRIZZA E PROGRAMMA LO
                        SVILUPPO DELL’ATENEO, CON
                        PARTICOLARE RIGUARDO ALLA
                        DIDATTICA E ALLA RICERCA, E VIGILA
                        SUL FUNZIONAMENTO COMPLESSIVO
                        DELL'ISTITUZIONE.</blockquote></p>

                        <h4 style="padding-top:5px;">Consiglio di Amministrazione</h4>
                        <p class="lead"><blockquote>
                        IL CONSIGLIO DI AMMINISTRAZIONE
                        DEFINISCE LA PROGRAMMAZIONE
                        ECONOMICA DI LUNGO PERIODO
                        SULLA BASE DELLE PROPOSTE
                        E DEI PARERI DEL SENATO ACCADEMICO.</blockquote></p>

                    </div>
                </div>


            </header>

            <!-- Page Features -->
            <div class="row text-center" id="listeContainer">

                <Frame class-param="col-lg-3 col-md-6 mb-4"
                    v-for="item in items"
                    :key="item.id"
                >
                <a :href="item.linkLista">
                    <div class="card">
                        <div class="listTile" style="width: 100%;">
                            <div class="cap-left" style="width: 100%;display:block;">
                                <div style="width:100%;">
                                    <img class="imageList" :src="item.imageUrlHorizontal" style="width:100%;max-width:100%;">
                                </div>
                                <div style="padding-top:10px;">
                                    <div class="candidateTable" style="list-style:none;padding-left:0px;">
                                        <FrameSenatoCda :item="item.senato" name="Senato"/>
                                        <br />
                                        <FrameSenatoCda :item="item.cda" name="CDA"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                </Frame>

                

            
            </div>
            <!-- /.row -->

        </div>
        <!-- /.container -->


        <Footer />

    </div>
</template>



<script>
export default {
    data () {
    return {
      items: [
            {      
                id: 1, 
                name: "Svoltastudenti",
                imageUrlHorizontal: "/img/logo-svolta_hor.png",
                linkLista: "/lista/svoltastudenti/",
                senato:
                {
                    desc: "La nostra idea di senato ecc...",
                    candidati:[
                        {id: 1, imgUrl: "/img/candidati/marco_cesaro.jpg", name: "Cesaro Marco", detto: "SOMMELIER"},
                        {id: 2, imgUrl: "/img/candidati/lorenzo_ghettini.jpg", name: "Ghettini Lorenzo", detto: "LO SPEAKER"},
                        {id: 3, imgUrl: "/img/candidati/davide_diceglie.jpg", name: "Di Ceglie Davide", detto: "REFLASH"},
                        {id: 4, imgUrl: "/img/candidati/matteo_reda.jpg", name: "Reda Matteo", detto: ""},
                        {id: 5, imgUrl: "/img/candidati/alessia_bove.jpg", name: "Bove Alessia", detto: "ALESSIA"},
                        {id: 6, imgUrl: "/img/candidati/lorenzo_macovei.jpg", name: "Macovei Lorenzo", detto: "MACOSSS"},
                        {id: 7, imgUrl: "/img/candidati/elena_zannotti.jpg", name: "Zannotti Elena", detto: "ELLE"},
                        {id: 8, imgUrl: "/img/candidati/klaudio_luku.jpg", name: "Luku Klaudio", detto: "KLAUDIO CON LA K"}
                    ]
                },
                cda:{
                    desc: "La nostra idea di cda ecc...",
                    candidati:[
                        {id:1, imgUrl: "/img/candidati/antonino_sgroi.jpg", name: "Sgroi Antonino", detto: "LILLO"},
                        {id:2, imgUrl: "/img/candidati/eva_parenti.jpg", name: "Parenti Eva", detto: "EVA"},
                        {id:3, imgUrl: "/img/candidati/giacomo_schiavone.jpg", name: "Schiavone Giacomo", detto: "GIACK"},
                        {id:4, imgUrl: "/img/candidati/lorenzo_dionigi.jpg", name: "Dionigi Lorenzo", detto: ""}
                    ]
                }
            }
        ]    
    }
  }
}
</script>