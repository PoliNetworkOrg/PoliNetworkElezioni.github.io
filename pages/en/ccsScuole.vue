<template>
    <div>

<LayoutNavigationBar  language="en" />

<!-- Page Content -->
<div class="container2">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4 testoCentrale" style="border:none;">
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

    <SubpagesScuoleComponent  :scuole-link="scuole"/>

</div>
<!-- /.container -->


<LayoutFooter language="en"  />

    </div>
</template>

<script>
export default {
    data () {
    return {
      scuole: {
          auic:"../ccs/auic/",
          trei:"../ccs/trei/",
          icat:"../ccs/icat/",
          design:"../ccs/design/"
      }
    }
  }
}
</script>
