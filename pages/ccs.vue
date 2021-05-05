<template>
    <div>

<NavigationBar />

<!-- Page Content -->
<div class="container">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4 testoCentrale">
        <div style="text-align:center;">
            <h2>Elezioni rappresentanti degli studenti</h2>
            <h4>CCS</h4>
            <br/>

            <p class="lead">
                <blockquote>
             DEFINISCE I PROGRAMMI DELLE MATERIE DEL CORSO DI LAUREA, LE MODALITÀ DI FRUIZIONE DELLA DIDATTICA, L’ANALISI DELL’EFFICACIA DEGLI INSEGNAMENTI SVOLTI, L’ORGANIZZAZIONE DEL PIANO DI STUDIO, LA DISTRIBUZIONE DEI CFU.
                </blockquote>
            </p>
        </div>


    </header>

    <ScuoleComponent  :scuole-link="scuole"/>

</div>
<!-- /.container -->


<Footer />

    </div>
</template>

<script>
export default {
    data () {
    return {
      scuole: [
          "../ccs/auic/",
          "../ccs/trei/",
          "../ccs/icat/",
          "../ccs/design/"
      ]
    }
  }
}
</script>
