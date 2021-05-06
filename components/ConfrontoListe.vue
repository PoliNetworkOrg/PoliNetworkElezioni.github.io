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
                        <Frame v-for="item in organiConfronto"
                        :key="item.id">
                            <div>
                                <h4>{{item.name}}</h4>
                                <p class="lead">
                                    <blockquote>
                                        {{item.desc}}
                                    </blockquote>
                                </p>
                            </div>
                        </Frame>
                    </div>
                </div>


            </header>

            <!-- Page Features -->
            <div class="row text-center" id="listeContainer2" style="display:flex;flex-wrap:wrap;">

                <Frame class-param="col-md-3"
                    v-for="item in liste"
                    :key="item.id"
                    style-param="width:100%;"
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
                                        <Frame
                                        v-for="item2 in item.organi"
                                        :key="item2.name"
                                        >
                                            <FrameSenatoCda :item="item2"/>
                                        </Frame>
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
        liste:{
            type:Array,
            default : null
        },
        organiConfronto:{
            type:Array,
            default : null
        }
    }
}
</script>