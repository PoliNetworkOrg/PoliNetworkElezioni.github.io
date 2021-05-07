<template>
    <div>


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
