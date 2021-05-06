<template>
    <div>

<!-- Page Features -->
    <div class="row text-center">

        <div class="col-lg-3 col-md-6 mb-4">
            <a :href="scuoleLink.auic">
                <div class="card h-100">
                    <div class="listTile" style="width: 100%;">
                      <div class="divScuole">
                        <div>
                          <div>
                        <h1 class="scuole">Scuola AUIC</h1>
                      </div>
                      </div>
                      <div>
                        <div>
                        <h5>ARCHITETTURA URBANISTICA INGEGNERIA DELLE COSTRUZIONI</h5>
                      </div>
                      </div>
                      </div>
                    </div>
                </div>
            </a>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
            <a :href="scuoleLink.trei">
                <div class="card h-100">
                    <div class="listTile" style="width: 100%;">


                        <div class="divScuole">
                          <div>
                            <div>
                          <h1 class="scuole">Scuola 3I</h1>
                        </div>
                        </div>
                        <div>
                          <div>
                          <h5>INGEGNERIA INDUSTRIALE E DELL' INFORMAZIONE</h5>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
            <a :href="scuoleLink.icat">
                <div class="card h-100">
                    <div class="listTile" style="width: 100%;">

                      <div class="divScuole">
                        <div>
                          <div>
                        <h1 class="scuole">Scuola ICAT</h1>
                      </div>
                      </div>
                      <div>
                        <div>
                        <h5>INGEGNERIA CIVILE, AMBIENTALE E TERRITORIALE</h5>
                      </div>
                      </div>
                      </div>

                    </div>
                </div>
            </a>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
            <a :href="scuoleLink.design">
                <div class="card h-100">
                    <div class="listTile" style="width: 100%;">

                      <div class="divScuole">
                        <div>
                          <div>
                        <h1 class="scuole">Scuola Design</h1>
                      </div>
                      </div>
                      <div>
                        <div>
                        <h5>DESIGN</h5>
                      </div>
                      </div>
                      </div>

                    </div>
                </div>
            </a>
        </div>
    </div>
    <!-- /.row -->

    </div>
</template>

<script>
export default {
    props: {
        scuoleLink:{
            type:Object,
            default : null
        }
    }
}
</script>

