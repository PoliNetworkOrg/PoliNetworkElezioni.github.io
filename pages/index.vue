<template>
  <div >
    <NavigationBar />


  <!-- Page Content -->
  <div class="container3">

    <!-- Jumbotron Header -->
    <header class="my-4 testoCentrale" style="max-width: 100%;border:none;margin-top:10px;margin-bottom:10px;padding-bottom:calc(10px + 1rem);padding-top:calc(2px + 5rem);">
		<div style="text-align:center;">
      <h2 style="font-size:calc(4px + 1.27rem + 0.77vw);">Elezioni rappresentanti degli studenti</h2>
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
		<Calendario />
		
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

    <!-- Page Features -->
    <div class="row text-center" id="listeContainer" v-on:load="test" style="display:flex;opacity:0.5;">

			<Frame
			v-for="item in items"
			:key = "item.name"
			class-param="col-lg-3 col-md-6 mb-4"
			>

	

				<div >

					<a :href="item.link">
						<figure class="cap-left" style="width: 100%;">
							<Frame class-param="card h-100" :style-param="item.style">
								<div class="listTile" style="width: 100%;">
									<div class="containerImgList">
										<XImage :image-url="(item.image)" class-param="imageList"  />
									</div>
								</div>
							</Frame>
							<figcaption class="h-100">
								<br />
								<h2 class="titleListaFigcaption">{{item.name}}</h2>
							</figcaption>
						</figure>
					</a>
				</div>
		
			
			</Frame>




	
    </div>
    <!-- /.row -->

 


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
	<Dibattito />
	<br />
	<div style="width:100%;text-align:center;">
		<a href="/dibattito/">
			<Button>Maggiori info</Button>
		</a>
	</div>
	</div>



<Footer />


  </div>
</template>





<script>
export default {
  data () {
    return {
      items: [
		  {id:1, name: "Svoltastudenti", image: "/img/svolta.png", link :"/lista/svoltastudenti/", style:"background-color: #ff6600de;"},
		  {id:2, name: "Lista aperta", image: "/img/listaaperta.png", link :"/lista/listaaperta/", style:"background-color: #f5dd00;"},
		  {id:3, name: "La Terna Sinistrorsa", image: "/img/terna.png", link :"/lista/ternasinistrorsa/", style:"background-color: #bf2027;"},
		  {id:4, name: "Studenti Indipendenti", image: "/img/sip.png", link :"/lista/studentiindipendenti/", style:"background-color: #00bbff40;"}
	  ]
    }
  },

    mounted() {
      this.$nextTick(() => {
        this.test();
      });
    },
    methods: {
        test(){
			
            for (var j=0; j < 1; j++)
           {
                var ul =  document.getElementById("listeContainer");
                if (ul != null)
                {
                    for (var i = ul.children.length; i >= 0; i--) {
						var j = Math.random() * i | 0;
						var ul2 = ul.children[j];
						if (ul2 !=null)
						{
                           ul.appendChild(ul2);
						   console.log(ul2);
						}
                    }
					ul.style.opacity = '1';
                }
            }
			
        }
    }
}


</script>

