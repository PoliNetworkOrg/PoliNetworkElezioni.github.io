(window.webpackJsonp=window.webpackJsonp||[]).push([[53,4,5,9,10,11],{207:function(t,e,n){"use strict";n.r(e);var o={props:{language:{type:String,required:!0}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("Copyright © "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v("\n                                Contatti\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nContacts\n                          ")]):t._e()]),t._v("\n            - \n                    "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v("\n                                           Curiosità\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nCuriosity\n                          ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,n){"use strict";n.r(e);var o={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,n){var content=n(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("894dc536",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("ad7dac6e",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(209)},212:function(t,e,n){var o=n(36)(!1);o.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=o},213:function(t,e,n){"use strict";n.r(e);var o={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(n(211),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,n){"use strict";n(210)},215:function(t,e,n){var o=n(36)(!1);o.push([t.i,".descrizioneFrameSenatoCdA{margin:auto;width:100%;max-width:calc(70px + 15rem + 40vw);padding-left:calc(1vw + 1px + .07rem);padding-right:calc(1vw + 1px + .07rem);padding-bottom:calc(.3rem + 6px)}",""]),t.exports=o},216:function(t,e,n){"use strict";n.r(e);var o={props:{item:{type:Object,default:null}}},r=(n(214),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"100%"}},[n("h2",[t._v(t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"descrizioneFrameSenatoCdA"},[n("span",{staticStyle:{"font-size":"calc(1px + 1rem)",color:"black",padding:"calc(1px + 1vw)"}},[t._v("\n            "+t._s(t.item.desc)+"\n        ")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.item.candidati,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-6","style-param":"margin:auto;"}},[n("div",[n("ListeCandidato",{attrs:{cand:e,"url-lista":t.item.linkLista}})],1)])})),1),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[t._v("\n         \n    ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeCandidato:n(213).default,LayoutFrame:n(208).default})},217:function(t,e,n){"use strict";n.r(e);var o={props:{liste:{type:Array,default:null},organiConfronto:{type:Array,default:null},language:{type:String,default:"it",required:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.test2()}))},methods:{test2:function(){for(var t=0;t<5;t++){var ul=document.getElementById("listeContainer2");if(null!=ul){for(var i=ul.children.length;i>=0;i--)ul.appendChild(ul.children[Math.random()*i|0]);ul.style.opacity="1"}}}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container2",staticStyle:{width:"100%","max-width":"100%",margin:"0px"}},[n("div",{staticClass:"container7"},[n("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[n("div",{staticStyle:{margin:"auto"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",["it"==t.language?n("span",[t._v("Elezioni rappresentanti degli studenti")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Election of student representatives")]):t._e()]),t._v(" "),n("br"),t._v(" "),t._l(t.organiConfronto,(function(e){return n("LayoutFrame",{key:e.id},[n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"lead"}),n("blockquote",[t._v("\n                                            "+t._s(e.desc)+"\n                                        ")]),t._v(" "),n("p")])])}))],2)])])]),t._v(" "),n("div",{staticClass:"row text-center",staticStyle:{display:"flex","flex-wrap":"wrap",opacity:"0.5"},attrs:{id:"listeContainer2"},on:{load:t.test2}},t._l(t.liste,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-3","style-param":"max-width: 100%;flex: 1 4 25%;min-width:calc(150px + 9rem + 3vw)"}},[n("a",{attrs:{href:"/"+t.language+e.linkLista}},[n("div",{staticClass:"card"},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"cap-left",staticStyle:{width:"100%",display:"block",padding:"0px"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"imageList",staticStyle:{width:"100%","max-width":"100%"},attrs:{src:e.imageUrlHorizontal}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"candidateTable",staticStyle:{"list-style":"none","padding-left":"0px"}},t._l(e.organi,(function(t){return n("LayoutFrame",{key:t.name},[n("ListeFrameSenatoCdA",{attrs:{item:t}})],1)})),1)])])])])])])})),1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(154).default,LayoutFrame:n(208).default,ListeFrameSenatoCdA:n(216).default,LayoutFooter:n(207).default})},279:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{organiConfronto:[{id:1,name:"Design",desc:"La Scuola del Design del Politecnico di Milano è oggi la più grande università internazionale, sia per numero di studenti sia per numero di docenti, per la formazione dei progettisti di prodotto, di comunicazione, di interni e di moda. È attiva a Milano in un campus di recente costruzione. Alcuni dati che ne descrivono la portata: circa 5000 studenti, oltre 450 docenti e circa 400 tra assistenti, esercitatori e cultori della materia di ausilio alla didattica. I percorsi formativi proposti si articolano in due livelli di laurea, la Laurea di primo livello e la Laurea Magistrale di ulteriori due anni. Secondo il “QS Rankin by Subject” la Scuola del Design è 1ª in Italia, 3ª in Europa e 5ª nel mondo"}],liste:[{id:1,name:"Svoltastudenti",imageUrlHorizontal:"/img/logo-svolta_hor.png",linkLista:"/lista/svoltastudenti/",organi:[{name:"Design",desc:"Creare spazi per lo scambio di materiali avanzati dai progetti. Implementare l’omologazione dei software usati nei corsi, aggiornandoli a ciò che ora viene richiesto dal mondo del lavoro e creazione di una libreria di Mooc/video tutorial sull’utilizzo dei vari software. Introdurre più workshop e passion in action in collaborazione tra i diversi indirizzi. Inserire la possibilità di poter scegliere lo scaglione nei corsi di laboratorio che presentano differenze nei progetti.",candidati:[{id:1,imgUrl:"/img/candidati/svoltastudenti/marco_tintori.jpg",name:"Tintori Marco",detto:"TINTO"},{id:2,imgUrl:"/img/candidati/svoltastudenti/giulia_daleo.jpg",name:"D'Aleo Giulia",detto:"GIUS"},{id:3,imgUrl:"/img/candidati/svoltastudenti/vittorio_perobelli.jpg",name:"Perobelli Vittorio",detto:"PERO"},{id:4,imgUrl:"/img/candidati/svoltastudenti/eva_parenti_design.jpg",name:"Parenti Eva",detto:"EVA"}]}]},{id:2,name:"Lista aperta",imageUrlHorizontal:"/img/logo-listaaperta_hor.png",linkLista:"/lista/listaaperta/",organi:[{name:"Design",desc:"Proponiamo di aumentare i rapporti con le aziende per garantire l’ibridazione dei quattro corsi di studio nei workshop. Vogliamo aumentare le interazioni con il Career Service durante le lezioni chiedendo di poter avere un Career Point all’interno del campus. Desideriamo revisionare gli obiettivi dei laboratori di elementi visivi per tutti i corsi di studio, così da aumentare le capacità di visual del progetto. Infine, proponiamo di aumentare le convenzioni con i musei: entrata gratuita per gli studenti del Politecnico alla Triennale, alla Fondazione Castiglioni e al Kartell museo. Inoltre chiediamo la possibilità di ottenere pass a fiere come il Salone del mobile. Per migliorare il nostro Campus, proponiamo una tensostruttura con tavoli e sedie cablati nei prati tra il B6 e il B8, e il cablaggio dei tavoli del pratone dietro al B1.",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/chiara_giardiello.jpg",name:"Giardiello Chiara Edda Maria",detto:"CHIARA"},{id:2,imgUrl:"/img/candidati/listaaperta/sofia_boni.jpg",name:"Boni Sofia",detto:"SOFI"},{id:3,imgUrl:"/img/candidati/listaaperta/maddalena_milanesi.jpg",name:"Milanesi Maddalena",detto:"MADDA"},{id:4,imgUrl:"/img/candidati/listaaperta/lorenzo_bressan.jpg",name:"Bressan Lorenzo",detto:"BRACE"},{id:5,imgUrl:"/img/candidati/listaaperta/maria_sammarini.jpg",name:"Sammarini Maria",detto:"MERY"},{id:6,imgUrl:"/img/candidati/listaaperta/michele_dondi.jpg",name:"Dondi Michele",detto:"MIKE"},{id:7,imgUrl:"/img/candidati/listaaperta/luca_tassetto.jpg",name:"Tassetto Luca",detto:"TAX"},{id:8,imgUrl:"/img/candidati/listaaperta/giacomo_maria_tomesani.jpg",name:"Tomesani Giacomo Maria",detto:"JACK"},{id:9,imgUrl:"/img/candidati/listaaperta/caterina_maria_grillo.jpg",name:"Grillo Caterina Maria",detto:"CATE"},{id:10,imgUrl:"/img/candidati/listaaperta/giovanni_clericetti.jpg",name:"Clericetti Giovanni",detto:"GIOCLE"},{id:11,imgUrl:"/img/candidati/listaaperta/michele_bruno.jpg",name:"Bruno Michele",detto:"MICHI"},{id:12,imgUrl:"/img/candidati/listaaperta/chiara_mazzeo.jpg",name:"Mazzeo Chiara",detto:""},{id:13,imgUrl:"/img/candidati/listaaperta/giovanni_provesi.jpg",name:"Provesi Giovanni",detto:"GIO"},{id:14,imgUrl:"/img/candidati/listaaperta/chiara_anceschi.jpg",name:"Anceschi Chiara",detto:"CHIANCHI"}]}]},{id:3,name:"Terna sinistrorsa",imageUrlHorizontal:"/img/logo-terna_hor.png",linkLista:"/lista/ternasinistrorsa/",organi:[{name:"Design",desc:"Continuiamo la nostra lotta per il rimborso dei costi dei materiali e per la stipulazione di convenzioni con negozi specialistici. Garantire il rimborso spese vuol dire dare a tuttз la possibilità di sperimentare, indipendentemente dalla fascia di reddito di appartenenza. Vogliamo inoltre garantire la possibilità ad ogni studentə di scegliere, all’interno della calendarizzazione, quando sostenere i propri esami. Chiediamo inoltre che siano chiare le valutazioni d’esame, con criteri omogenei tra diversi scaglioni. Vogliamo promuovere una cultura del progetto multidisciplinare, aperta alla sperimentazione e alla contaminazione. Proponiamo il potenziamento dei laboratori già esistenti e la valutazione di un nuovo Polifactory, sul modello già esistente, di libero accesso allз studentз.",candidati:[{id:1,imgUrl:"/img/candidati/ternasinistrorsa/mercedes_vitali.png",name:"Vitali Mercedes",detto:""},{id:2,imgUrl:"/img/candidati/ternasinistrorsa/giovanni_smoquina.png",name:"Smoquina Giovanni",detto:""}]}]},{id:4,name:"Studenti indipendenti",imageUrlHorizontal:"/img/logo-sip_hor.png",linkLista:"/lista/studentiindipendenti/",organi:[{name:"Design",desc:"Crediamo che sia necessario istituire un fondo per il materiale progetti e prototipi così da evitare di rendere eccessivo il costo per lз studentз di design. Vogliamo potenziare il Poliprint rendendo la qualità delle stampe più più alta e i prezzi più popolari. Vogliamo un deposito sicuro per prototipi in B2 così da non dover far viaggiare pure i modellini e un punto in cui smaltire i materiali che possono essere riutilizzati. Vogliamo regolamentare le revisioni intermedie in modo che si possano effettuare con supporto digitale.",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/ilenia_ippolito.PNG",name:"Ippolito Ilenia",detto:""},{id:2,imgUrl:"/img/candidati/studentiindipendenti/laura_giordano.PNG",name:"Giordano Laura",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/irene_la_ferla.PNG",name:"La Ferla Irene",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/chiara_arrigoni.PNG",name:"Arrigoni Chiara",detto:""},{id:5,imgUrl:"/img/candidati/studentiindipendenti/federica_pompa.PNG",name:"Pompa Federica",detto:""},{id:6,imgUrl:"/img/candidati/studentiindipendenti/caterina_creanza.PNG",name:"Creanza Caterina",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/andreea_ciortan.PNG",name:"Ciortan Andreea",detto:""},{id:8,imgUrl:"/img/sip.PNG",name:"Patti Lavinia",detto:""}]}]}]}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListeConfrontoListe",{attrs:{liste:t.liste,"organi-confronto":t.organiConfronto,language:"it"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeConfrontoListe:n(217).default})}}]);