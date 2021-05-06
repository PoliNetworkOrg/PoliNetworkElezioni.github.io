

<template>
<div>
    <NavigationBar />

    <br />
    <br />

  	<div class="intro white" style="text-align: center;">
          <div style="width:100%;">
		<img :src="dataLista.imageUrl" style="width:calc(15px + 4vw + 5rem); padding:10px;text-align:center;">
          </div>
  		<div class="container wow animated fadeInUp">
	  		<h2 style="color:black; font-size:calc(10px + 3vw + 0.5rem); ">{{this.dataLista.name}}</h2>

		<a :href=this.dataLista.mainWebsiteUrl><Button>Sito ufficiale 🌐</Button></a>
	
		<a :href="this.dataLista.mainProgrammaUrl">
            <Button>Programma elettorale - PDF Completo 🗳</Button>
        </a>
		
	  		<p id="office-place" class="office-place descrizioneLista">{{this.dataLista.desc}}</p>
  		</div><!-- /.container -->
  	</div><!-- /.intro -->



        <div class="section" id="our-info">
            <div class="container" style="max-width: 100%;margin:auto; width:100%;">
                <h2 style=" font-size:calc(9px + 2.5vw + 0.3rem);padding-top:2rem;padding-left:calc(0.3vw + 0.3rem);">Programma elettorale</h2> 
                <hr />
                <h3 style="text-align:center;font-size:calc(8px + 1.5vw + 0.2rem);font-variant: petite-caps;-webkit-text-stroke: 1px #0c013587;-webkit-text-fill-color: black;">{{dataLista.programmaSottotitolo}}</h3>
                <div style="padding:5px;"></div>
                <div class="row" style="margin:calc(1px + 0.01rem + 0.1vw);">
                    <Frame 
                    class-param="col-sm-3 wow animated fadeInLeft"
                    v-for="item in dataLista.programma"
                    :key="item.id"
                    style-param="margin:auto;min-width:calc(150px + 6rem + 2vw);display:flex;flex: 1 1 25%;padding:5px;max-width: 100%;"
                     >
                     <div style="border:1px solid #0000003c;padding: calc(3px + 0.5rem);margin: 0px; border-radius:calc(10px + 1rem);width: 100%;">
                        <figure>
                            <img class="z-hover img-responsive" :src="item.url" style="max-width: calc(100px + 2rem + 2vw + 2vh);width: 100%;padding:2px;">
                        </figure>
                        <h4 style="padding-top:3px;text-align:center;">{{item.title}}</h4>
                        <p class="function-text" style="text-align:left;padding:calc(0.5vw); margin-bottom:0.2rem;">
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
             <div id="includedContentSenato" style="display:flex;flex-wrap: wrap;">

                 <Frame 
                 class-param="col-md-3 col-md-2"
                 v-for="candsenato in dataLista.senato.candidati"
                 :key="candsenato.id"
                 style-param="display:flex;margin: auto;"
                 >
                     <Candidato :cand="candsenato" url-lista="" />
                 </Frame>

             </div>
        </div>
    </div><!-- members -->

<HorizontalLine  />
    <div class="section members">
        <div class="container">
            <h2>CDA</h2>
            <hr>
            <p class="lead-creative-banner">
                {{dataLista.cda.desc}}
            </p>
             <div id="includedContentSenato" style="display:flex;flex-wrap: wrap;">

                 <Frame 
                 class-param="col-md-3 col-md-2"
                 v-for="candcda in dataLista.cda.candidati"
                 :key="candcda.id"
                 style-param="display:flex;margin: auto;"
                 >
                     <Candidato :cand="candcda" url-lista="" />
                 </Frame>

             </div>
        </div>
    </div><!-- members -->

<HorizontalLine  />

  <div class="section members" style="background-color:white">
     <div class="container">
         <h2>Scuole</h2>
         <hr>
         <p class="lead-creative-banner">{{dataLista.scuole.desc}}</p>
         <ul style="list-style:none;">
            <li class="liScuola">
                <span class="titleScuole">AUIC</span>
                <div  class="spacerScuole"  ></div>
                <div class="descrizioneScuola">
                     {{dataLista.scuole.auic.desc}}
                </div>
                <div id="includedContentScuoleAUIC"  style="display:flex;flex-wrap: wrap;">
                    <Frame 
                    class-param="col-md-3 col-md-2"
                    v-for="candcda in dataLista.scuole.auic.candidati"
                    :key="candcda.id"
                    style-param="display:flex;margin: auto;"
                    >
                        <Candidato :cand="candcda" url-lista="" />
                    </Frame>
                </div>
                </li>
            <li class="liScuola">
                <span class="titleScuole">3I</span>
                <div  class="spacerScuole"  ></div>
                <div class="descrizioneScuola">
                {{dataLista.scuole.trei.desc}}
                      </div>
                <div id="includedContentScuole3I"  style="display:flex;flex-wrap: wrap;">
                    <Frame 
                    class-param="col-md-3 col-md-2"
                    v-for="candcda in dataLista.scuole.trei.candidati"
                    :key="candcda.id"
                    style-param="display:flex;margin: auto;"
                    >
                        <Candidato :cand="candcda" url-lista="" />
                    </Frame>
                </div>
            </li>
            <li class="liScuola">
                <span class="titleScuole">ICAT</span>
                <div  class="spacerScuole"  ></div>
                        <div class="descrizioneScuola">
                {{dataLista.scuole.icat.desc}}
                     </div>
                <div id="includedContentScuoleICAT"  style="display:flex;flex-wrap: wrap;">
                    <Frame 
                    class-param="col-md-3 col-md-2"
                    v-for="candcda in dataLista.scuole.icat.candidati"
                    :key="candcda.id"
                    style-param="display:flex;margin: auto;"
                    >
                        <Candidato :cand="candcda" url-lista="" />
                    </Frame>
                </div>
            </li>
            <li class="liScuola">
                <span class="titleScuole">DESIGN</span>
                <div  class="spacerScuole"  ></div>
                             <div class="descrizioneScuola">
                {{dataLista.scuole.design.desc}}
                         </div>
                <div id="includedContentScuoleDESIGN"  style="display:flex;flex-wrap: wrap;">
                    <Frame 
                    class-param="col-md-3 col-md-2"
                    v-for="candcda in dataLista.scuole.design.candidati"
                    :key="candcda.id"
                    style-param="display:flex;margin: auto;"
                    >
                        <Candidato :cand="candcda" url-lista="" />
                    </Frame>
                </div>
            </li>
         </ul>
     </div>
 </div><!-- members -->

</div>
</template>

<script>
export default {
    props: {
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
    margin-left:auto;
        margin-right:auto;
        margin-bottom: 0px;
}

.imgcaption{
    margin-bottom: calc(1.3rem + 3px);
}

figure{
       margin-left:auto;
        margin-right:auto;
        margin-bottom: calc(0.2rem);
}
</style>
