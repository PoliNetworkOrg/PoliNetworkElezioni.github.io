<template>
    <div>

<LayoutNavigationBar language="en" />

<!-- Page Content -->
<div class="container2">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4 testoCentrale" style="border:none;">
        <div style="text-align:center;">
            <h2>Elezioni rappresentanti degli studenti</h2>
            <br />
            <h4>Scuole</h4>
            <br/>

            <p class="lead">
                <blockquote>
                    COORDINA I CORSI DI STUDIO
                E FORNISCE UN INDIRIZZO GENERALE
                ALLA SCUOLA.
                </blockquote>
            </p>
        </div>


    </header>

    <SubpagesScuoleComponent  :scuole-link="scuole"/>

</div>
<!-- /.container -->


<LayoutFooter  language="en" />

    </div>
</template>

<script>
export default {
    data () {
    return {
      scuole: {
          auic:"../scuola/auic/",
          trei:"../scuola/trei/",
          icat:"../scuola/icat/",
          design:"../scuola/design/"
      }
            
           
    }
  }
}
</script>
