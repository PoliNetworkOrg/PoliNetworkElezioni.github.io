<template>
  <div >
    <NavigationBar />


  <!-- Page Content -->
  <div class="container3">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4 testoCentrale">
		<div style="text-align:center;">
      <h2>Elezioni rappresentanti degli studenti</h2>
	  <h4><a href="https://polimi.it/elezioni-studenti">Politecnico di Milano</a></h4>
	  <br />
	  <h5 style="text-align:left;padding-left:calc(4vw + 1rem);padding-right: calc(4vw + 1rem);">
	  <ul style="    padding-left: 0px !important;">
		<li>🗓 lunedì 24 maggio 2021 ore 09.00 - giovedì 27 maggio 2021 ore 23.59</li>
		<li>📌 Piattaforma online <a href="./istruzioni/">votazioni Eligo &amp; istruzioni di voto</a></li>
		</ul>
	</h5>

	  <br />

      <p class="lead" style="padding-left:calc(5px + 0.5rem + 0.6vw);padding-right:calc(5px + 0.5rem + 0.6vw);">In questa pagina potrai consultare i candidati delle liste di rappresentanza studentesca (e i relativi programmi) alle elezioni di maggio 2021 🗳</p>
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
	<div  style="width:100%;text-align:center;display:block;" class="container2">
	<br />
	<h3>🗣 Dibattito 28 ottobre 2020</h3>


		In attesa del nuovo dibattito che organizzeremo fra liste (previsto il 13,14,15 maggio) potete guardare quello svoltosi ad ottobre 2020
	</div>
	<br />
	<div style="width:100%;text-align:center;">
	<iframe  style="width:80%;height:40%;min-height: 350px;max-width: 700px;" src="https://www.youtube.com/embed/wr5Ry4eAaZM?start=1377" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            for (var j=0; j < 5; j++)
           {
                var ul =  document.getElementById("listeContainer");
                if (ul != null)
                {
                    for (var i = ul.children.length; i >= 0; i--) {
                        ul.appendChild(ul.children[Math.random() * i | 0]);
                    }
					ul.style.opacity = '1';
                }
            }
        }
    }
}


</script>