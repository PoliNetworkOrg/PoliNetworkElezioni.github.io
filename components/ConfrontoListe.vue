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
                                        <div style="padding:10px;">
                                            &nbsp;
                                        </div>
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
    props: {
        items:{
            type:Object,
            default : null
        }
    }
}
</script>