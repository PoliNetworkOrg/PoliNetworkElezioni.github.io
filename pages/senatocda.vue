<template>
    <div>


<!-- Page Content -->
<div class="container">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4 testoCentrale">
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


    </header>

    <!-- Page Features -->
    <div class="row text-center" id="listeContainer">

        <Frame 
            class-param="col-lg-3 col-md-6 mb-4"
            v-for="item in items"
            :key ="item"
        >
          <a href="./../svoltastudenti/index.html">
            <div class="card h-100">
                <div class="listTile" style="width: 100%;">
                    <figure class="cap-left" style="width: 100%;">
                            <img class="imageList" src="/img/logo-svolta_hor.png" alt="">
                        <ul class="candidateTable">
                            <li>
                                <h2>Senato</h2>
                                <div id="senatoSvoltastudenti"></div>
                            </li>
                            <br />
                            <li>
                                <h2>CdA</h2>
                                <div id="cdaSvoltastudenti"></div>
                            </li>
                        </ul>
                    </figure>
                </div>
            </div>
          </a>
        </Frame>

        <div class="col-lg-3 col-md-6 mb-4">
            <a href="./../listaaperta/index.html">
                <div class="card h-100">
                    <div class="listTile" style="width: 100%;">
                        <figure class="cap-left" style="width: 100%;">
                            <img class="imageList" src="/img/logo-listaaperta_hor.png" alt="">
                            <ul class="candidateTable">
                                <li>
                                    <h2>Senato</h2>
                                    <div id="senatoListaaperta"></div>
                                </li>
                                <br />
                                <li>
                                    <h2>CdA</h2>
                                    <div id="cdaListaaperta"></div>
                                </li>
                            </ul>
                        </figure>
                    </div>
                </div>
            </a>
        </div>

		  <div class="col-lg-3 col-md-6 mb-4">
			<a href="./../ternasinistrorsa/index.html">
				<div class="card h-100">
				  <div class="listTile" style="width: 100%;">
					<figure class="cap-left" style="width: 100%;">
					  <img class="imageList" src="/img/logo-terna_hor.png" alt="">
            <ul class="candidateTable">
                <li>
                    <h2>Senato</h2>
                    <div id="senatoTernasinistrorsa"></div>
                </li>
                <br />
                <li>
                    <h2>CdA</h2>
                    <div id="cdaTernasinistrorsa"></div>
                </li>
            </ul>
					</figure>
				  </div>
				</div>
			</a>
		  </div>

        <div class="col-lg-3 col-md-6 mb-4">
            <a href="./../studentiindipendenti/index.html">
                <div class="card h-100">
                    <div class="listTile" style="width: 100%;">
                        <figure class="cap-left" style="width: 100%;">
                            <img class="imageList" src="/img/logo-sip_hor.png" alt="">
                            <ul class="candidateTable">
                                <li>
                                    <h2>Senato</h2>
                                    <div id="senatoStudentiindipendenti"></div>
                                </li>
                                <br />
                                <li>
                                    <h2>CdA</h2>
                                    <div id="cdaStudentiindipendenti"></div>
                                </li>
                            </ul>
                        </figure>
                    </div>
                </div>
            </a>
        </div>

		

    </div>
    <!-- /.row -->

</div>

    </div>
</template>



<script>
export default {
    
}
</script>
