

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
                    <div class="col-sm-6 wow animated fadeInLeft">
                        <figure>
                            <img class="z-hover img-responsive" src="images/pc1.jpg" alt="Macbook">
                        </figure>
                        <h4>1. Titolo 1</h4>
                        <p class="function-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. </p>
                    </div>
                    <div class="col-sm-6 wow animated fadeInRight">
                        <figure>
                            <img class="z-hover img-responsive" src="images/pc2.jpg" alt="Macbook">
                        </figure>
                        <h4>2. Titolo 2</h4>
                        <p class="function-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. </p>
                    </div>
                </div>
            </div>
        </div><!-- our-info -->

<HorizontalLine  />

    <div class="section members">
        <div class="container">
            <h2>Senato</h2>
            <hr>
            <p class="lead-creative-banner">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
             <div id="includedContentSenato"></div>
        </div>
    </div><!-- members -->

<HorizontalLine  />

	   <div class="section members" style="background-color:white">
        <div class="container">
            <h2>CDA</h2>
            <hr>
            <p class="lead-creative-banner">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            <div id="includedContentCda"></div>
        </div>
    </div><!-- members -->

<HorizontalLine  />

  <div class="section members" style="background-color:white">
     <div class="container">
         <h2>Scuole</h2>
         <hr>
         <p class="lead-creative-banner">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
         <ul>
         <li class="liScuola"><span class="titleScuole">AUIC:</span><br class="spacerScuole" /><div id="includedContentScuoleAUIC"></div></li>
         <li class="liScuola"><span class="titleScuole">3I:</span><br  class="spacerScuole"  /><div id="includedContentScuole3I"></div></li>
         <li class="liScuola"><span class="titleScuole">CAT:</span><br  class="spacerScuole"  /><div id="includedContentScuoleCAT"></div></li>
         <li class="liScuola"><span class="titleScuole">DESIGN:</span><br  class="spacerScuole"  /><div id="includedContentScuoleDESIGN"></div></li>
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
</style>