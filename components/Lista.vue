

<template>
<div>
    <NavigationBar />

    <br />
    <br />

  	<div class="intro white" style="text-align: center;">
          <div style="width:100%;">
		<img :src="imageUrl" style="width:calc(15px + 4vw + 5rem); padding:10px;text-align:center;">
          </div>
  		<div class="container wow animated fadeInUp">
	  		<h2 style="color:black; font-size:calc(10px + 3vw + 0.5rem); ">{{this.nameP}}</h2>

		<a :href=this.urlOfficial><Button>Sito ufficiale 🌐</Button></a>
	
		<a :href="urlProgramma">
            <Button>Programma elettorale - PDF Completo 🗳</Button>
        </a>
		
	  		<p id="office-place" class="office-place descrizioneLista">{{this.descrizioneListaParam}}</p>
  		</div><!-- /.container -->
  	</div><!-- /.intro -->



        <div class="section" id="our-info">
            <div class="container">
                <h2 style=" font-size:calc(9px + 2.5vw + 0.3rem);padding-top:2rem;">Programma elettorale</h2>
                <hr />
                <div class="row">
                    <Frame 
                    class-param="col-sm-6 wow animated fadeInLeft"
                    v-for="item in dataLista.programma"
                    :key="item.id"
                     >
                     <div>
                        <figure>
                            <img class="z-hover img-responsive" :src="item.url">
                        </figure>
                        <h4>{{item.title}}</h4>
                        <p class="function-text">
                            {{item.desc}}
                             </p>
                    </div>
                    </Frame>
                </div>
            </div>
        </div><!-- our-info -->

<HorizontalLine  />

    <div class="section members">
        <div class="container">
            <h2>Senato</h2>
            <hr>
            <p class="lead-creative-banner">
                {{dataLista.senato.desc}}
            </p>
             <div id="includedContentSenato" style="display:flex;">

                 <Frame 
                 class-param="col-md-3"
                 v-for="candsenato in dataLista.senato.candidati"
                 :key="candsenato.id"
                 style-param="display:flex;"
                 >
                     <a href="#">
                        <div class="candidatoSV" style="text-align:center;">
                            <figure 
                                class="wow animated fadeInLeft animated"
                                style="visibility: visible; animation-name: fadeInLeft;width:100%;"
                            >
                                <img 
                                    class="border-img img-responsive center-block immagineCandidato" 
                                    :src="candsenato.imgUrl"
                                    style="width:100%;"
                                 />
                            </figure>
                            <div class="imgcaption" style="text-align:center;">
                                <strong class="nameCandidato">CESARO MARCO <span class="name">"SOMMELIER"</span></strong>
                            </div>
                        </div>
                    </a>
                 </Frame>

             </div>
        </div>
    </div><!-- members -->

<HorizontalLine  />

	   <div class="section members" style="background-color:white">
        <div class="container">
            <h2>CDA</h2>
            <hr>
            <p class="lead-creative-banner">
                {{dataLista.cda.desc}}
            </p>
            <div id="includedContentCda"></div>
        </div>
    </div><!-- members -->

<HorizontalLine  />

  <div class="section members" style="background-color:white">
     <div class="container">
         <h2>Scuole</h2>
         <hr>
         <p class="lead-creative-banner">{{dataLista.scuole.desc}}</p>
         <ul>
            <li class="liScuola">
                <span class="titleScuole">AUIC:</span>
                <br class="spacerScuole" />
                {{dataLista.scuole.auic.desc}}
                <div id="includedContentScuoleAUIC"></div>
                </li>
            <li class="liScuola">
                <span class="titleScuole">3I:</span>
                <br  class="spacerScuole"  />
                {{dataLista.scuole.trei.desc}}
                <div id="includedContentScuole3I"></div>
            </li>
            <li class="liScuola">
                <span class="titleScuole">CAT:</span>
                <br  class="spacerScuole"  />
                {{dataLista.scuole.icat.desc}}
                <div id="includedContentScuoleCAT"></div>
            </li>
            <li class="liScuola">
                <span class="titleScuole">DESIGN:</span>
                <br  class="spacerScuole"  />
                {{dataLista.scuole.design.desc}}
                <div id="includedContentScuoleDESIGN"></div>
            </li>
         </ul>
     </div>
 </div><!-- members -->

</div>
</template>

<script>
export default {
    props: {
        nameP: {
        type: String,
        default: ""
        },
        urlOfficial:{
            type:String,
            default: ""
        },
        descrizioneListaParam:{
            type:String,
            default: ""
        },
        imageUrl:{
            type:String,
            default:""
        },
        urlProgramma:{
            type:String,
            default:""
        },
        dataLista:{
            type:Object,
            default : null
        }
    }
}
</script>

<style scoped>
img[src$=".gif"], img[src$=".png"] {
	image-rendering: -moz-crisp-edges;
	image-rendering: -o-crisp-edges;
	image-rendering: -webkit-optimize-contrast;
	-ms-interpolation-mode: nearest-neighbor;
}
img {
	border: 0;
}
img {
	vertical-align: middle;
}

.office-place {
	color: #4b4228;
	font: 16px/1.5 "Novecento Sans Wide Medium", Helvetica, Arial, sans-serif;
	letter-spacing: .2em;
	margin: 25px auto 0 auto;

}

.descrizioneLista {
	font-size: calc(15px + 0.17vw + 0.08rem);
}

.img-responsive, .thumbnail > img, .thumbnail a > img, .carousel-inner > .item > img, .carousel-inner > .item > a > img {
	display: block;
	width: 100% \9;
	max-width: 90%;
	height: auto;
    margin:auto;
}
</style>