<template>
  <div >
    <LayoutNavigationBar :language="language" />


  <!-- Page Content -->
  <div class="container3">

    <!-- Jumbotron Header -->
    <header class="my-4 testoCentrale" style="max-width: 100%;border:none;margin-top:10px;margin-bottom:10px;padding-bottom:calc(10px + 1rem);padding-top:calc(2px + 5rem);">
		<div style="text-align:center;">
      <h2 style="font-size:calc(4px + 1.27rem + 0.77vw);">
		<span  v-if="language == 'it' ">Elezioni rappresentanti degli studenti</span>
		<span  v-if="language == 'en' ">Students representatives' elections</span>
	  </h2>
	  <h4 style="font-size:calc(2px + 1.15rem + 0.65vw);">
		  <a href="https://polimi.it/elezioni-studenti">Politecnico di Milano</a>
	  </h4>
	  <div></div>
	  <h5 style="text-align:left;padding-left:calc(4vw + 1rem);padding-right: calc(4vw + 1rem);">
	  <div style="    padding-left: 0px !important;font-size:calc(1px + 0.9rem + 0.3vw);list-style:none;">
		  <div class="lead" style="padding:5px;font-size:calc(2px + 0.82rem + 0.29vw);text-align:center;" >
			📌 Piattaforma online <a href="./istruzioni/">votazioni Eligo &amp; istruzioni di voto</a></div>
		</div>
		<div style="padding:15px;"></div>
		<SubpagesCalendario />
		
	</h5>

	  <br />

	<div class="container8">
	<div class="container6">

      <p class="lead" style="padding-left:calc(5px + 0.5rem + 0.6vw);padding-right:calc(5px + 0.5rem + 0.6vw);text-align:center;">

		  In questa pagina potrai consultare i candidati delle liste di rappresentanza studentesca (e i relativi programmi) alle elezioni di maggio 2021 🗳
		  </p>
		  </div>
	</div>
	    </div>


    </header>

	<SubpagesQuadratiListe :language="language" />

 


  </div>
  <!-- /.container -->

<hr />

 <div class="container5">
	 <div class="container3 lead" style="text-align:center;padding-top:calc(10px + 1rem);padding-bottom:calc(0.5rem);">
		<h3 class="dibattito">🗣 Dibattito fra liste</h3>
		<span class="container5" style="padding-top:3px;">
						Le liste di rappresentanza si affronteranno in una serie di dibattiti tematici
					</span>
	</div>
	<SubpagesDibattito />
	<br />
	<div style="width:100%;text-align:center;">
		<a :href="'/'+language+'/dibattito/'">
			<LayoutButton>Maggiori info</LayoutButton>
		</a>
	</div>
	</div>



<LayoutFooter />


  </div>
</template>







<script>
export default {
    props: {
        language:{
            type:String,
            default : 'it',
			required:true
        }
    }
}
</script>