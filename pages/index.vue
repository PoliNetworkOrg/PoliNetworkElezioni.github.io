<template>
  <div >
    <NavigationBar />


  <!-- Page Content -->
  <div class="container3">

    <!-- Jumbotron Header -->
    <header class="jumbotron my-4 testoCentrale" style="max-width: 100%;border:none;">
		<div style="text-align:center;">
      <h2 style="font-size:calc(2px + 1.15rem + 0.65vw);">Elezioni rappresentanti degli studenti</h2>
	  <h4 style="font-size:calc(2px + 1.05rem + 0.55vw);">
		  <a href="https://polimi.it/elezioni-studenti">Politecnico di Milano</a>
	  </h4>
	  <div></div>
	  <h5 style="text-align:left;padding-left:calc(4vw + 1rem);padding-right: calc(4vw + 1rem);">
	  <div style="    padding-left: 0px !important;font-size:calc(1px + 0.9rem + 0.3vw);list-style:none;">
		  <div class="lead" style="padding:5px;font-size:calc(1px + 0.79rem + 0.27vw);text-align:center;" >
			📌 Piattaforma online <a href="./istruzioni/">votazioni Eligo &amp; istruzioni di voto</a></div>
		</div>
		<div style="padding:15px;"></div>
		<div class="lead"
		 style="padding:calc(5px + 0.1rem);border: 1px solid #0000002b;border-radius: calc(10px + 0.2rem);max-width:calc(9rem + 9vw + 150px);text-align:center;margin:auto;"
		 >
			<table style="width:100%;margin:auto;">
				<tr>
					<td style="padding-right:0.5rem;">
						🗓
						</td>
						<td>
							<table style="text-align:center;width:100%;">
								<tr>
		<td style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">
Lunedì 24/05/2021
										</td>
									<td style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">
											Giovedì 27/05/2021
											</td>
								</tr>
														<tr>
						<td style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">
ore 09.00
										</td>
						<td style="padding-left:calc(6px + 0.1rem);padding-right:calc(6px + 0.1rem);">
									ore 23.59
											</td>
								</tr>
								
								</table>
							</td>
					</tr>
			 
			</table>
		</div>
		
	</h5>

	  <br />

<div class="container6">

      <p class="lead" style="padding-left:calc(5px + 0.5rem + 0.6vw);padding-right:calc(5px + 0.5rem + 0.6vw);">

		  In questa pagina potrai consultare i candidati delle liste di rappresentanza studentesca (e i relativi programmi) alle elezioni di maggio 2021 🗳
		  </p>
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
	<div  style="width:100%;text-align:center;display:block;" class="container2">
	<br />
	<h3>🗣 Dibattito 28 ottobre 2020</h3>

		<span class="lead" >
		In attesa del nuovo dibattito che organizzeremo fra liste (previsto il 13,14,15 maggio) potete guardare quello svoltosi ad ottobre 2020
		</span>
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