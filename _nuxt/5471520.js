(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,3,7,9,10,12],{250:function(t,e,n){"use strict";n.r(e);n(253);var d=n(57),component=Object(d.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-container"},[n("button",{staticClass:"btn"},[t._t("default")],2)])}),[],!1,null,"7c0ace45",null);e.default=component.exports;installComponents(component,{Button:n(250).default})},251:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("efca395e",content,!0,{sourceMap:!1})},253:function(t,e,n){"use strict";n(251)},254:function(t,e,n){var d=n(49)(!1);d.push([t.i,".btn-container[data-v-7c0ace45]{padding:.5rem}.btn[data-v-7c0ace45]{color:#fff;font-size:1.1em;padding:1rem;letter-spacing:.08em;background-color:rgba(3,7,30,.78824);color:#fcfbf9;transition:all .3s;display:inline-block;font-weight:400;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;line-height:1.5;border-radius:.55rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}button[data-v-7c0ace45]{border:none;outline:none}button[data-v-7c0ace45],html input[type=button][data-v-7c0ace45],input[type=reset][data-v-7c0ace45],input[type=submit][data-v-7c0ace45]{-webkit-appearance:button;cursor:pointer}button[data-v-7c0ace45]{overflow:visible}",""]),t.exports=d},255:function(t,e,n){"use strict";n.r(e);var d=n(57),component=Object(d.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("img",{staticStyle:{width:"calc(20px + 0.1rem)"},attrs:{src:"/img/icon.png"}}),n("span",[t._v(" PoliNetwork")])]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v("Home\n\t\t\t\t\t\t"),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/senatocda/"}},[t._v("Senato & CdA")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/scuole/"}},[t._v("Scuole")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/ccsScuole/"}},[t._v("CCS")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/contatti/"}},[t._v("Contatti")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(250).default})},256:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("749dcd68",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n.r(e);var d={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(57),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n(256)},259:function(t,e,n){var d=n(49)(!1);d.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=d},260:function(t,e,n){"use strict";n.r(e);var d={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(n(258),n(57)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("3426da24",content,!0,{sourceMap:!1})},262:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("72470872",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n(261)},265:function(t,e,n){var d=n(49)(!1);d.push([t.i,"div.div-hr2[data-v-17c550bb]{width:100%}div.div-hr2[data-v-17c550bb],hr.hr2[data-v-17c550bb]{text-align:center;max-width:100%}hr.hr2[data-v-17c550bb]{padding:0;border-top:1px solid #545454;margin:calc(10px + 1rem + 1vh) auto;width:calc(1px + 85vw);color:#000}",""]),t.exports=d},267:function(t,e,n){"use strict";n.r(e);n(264);var d=n(57),component=Object(d.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"div-hr2"},[e("hr",{staticClass:"hr2"})])}],!1,null,"17c550bb",null);e.default=component.exports},268:function(t,e,n){"use strict";n(262)},269:function(t,e,n){var d=n(49)(!1);d.push([t.i,'img[src$=".gif"][data-v-313aa6c8],img[src$=".png"][data-v-313aa6c8]{image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor}img[data-v-313aa6c8]{border:0;vertical-align:middle}.office-place[data-v-313aa6c8]{color:#4b4228;font:16px/1.5 "Novecento Sans Wide Medium",Helvetica,Arial,sans-serif;letter-spacing:.2em;margin:25px auto 0}.descrizioneLista[data-v-313aa6c8]{font-size:calc(15px + .17vw + .08rem)}.carousel-inner>.item>a>img[data-v-313aa6c8],.carousel-inner>.item>img[data-v-313aa6c8],.img-responsive[data-v-313aa6c8],.thumbnail>img[data-v-313aa6c8],.thumbnail a>img[data-v-313aa6c8]{display:block;width:100%\\9;max-width:90%;height:auto;margin-left:auto;margin-right:auto;margin-bottom:0}.imgcaption[data-v-313aa6c8]{margin-bottom:calc(1.3rem + 3px)}figure[data-v-313aa6c8]{margin-left:auto;margin-right:auto;margin-bottom:.2rem}',""]),t.exports=d},270:function(t,e,n){"use strict";n.r(e);var d={props:{dataLista:{type:Object,default:null}}},r=(n(268),n(57)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavigationBar"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"intro white",staticStyle:{"text-align":"center"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticStyle:{width:"calc(15px + 4vw + 5rem)",padding:"10px","text-align":"center"},attrs:{src:t.dataLista.imageUrl}})]),t._v(" "),n("div",{staticClass:"container wow animated fadeInUp"},[n("h2",{staticStyle:{color:"black","font-size":"calc(10px + 3vw + 0.5rem)"}},[t._v(t._s(this.dataLista.name))]),t._v(" "),n("a",{attrs:{href:this.dataLista.mainWebsiteUrl}},[n("Button",[t._v("Sito ufficiale 🌐")])],1),t._v(" "),n("a",{attrs:{href:this.dataLista.mainProgrammaUrl}},[n("Button",[t._v("Programma elettorale - PDF Completo 🗳")])],1),t._v(" "),n("p",{staticClass:"office-place descrizioneLista",attrs:{id:"office-place"}},[t._v(t._s(this.dataLista.desc))])])]),t._v(" "),n("div",{staticClass:"section",attrs:{id:"our-info"}},[n("div",{staticClass:"container"},[n("h2",{staticStyle:{"font-size":"calc(9px + 2.5vw + 0.3rem)","padding-top":"2rem"}},[t._v("Programma elettorale")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},t._l(t.dataLista.programma,(function(e){return n("Frame",{key:e.id,attrs:{"class-param":"col-sm-3 wow animated fadeInLeft","style-param":"margin:auto;"}},[n("div",[n("figure",[n("img",{staticClass:"z-hover img-responsive",attrs:{src:e.url}})]),t._v(" "),n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"function-text"},[t._v("\n                            "+t._s(e.desc)+"\n                             ")])])])})),1)])]),t._v(" "),n("HorizontalLine"),t._v(" "),n("div",{staticClass:"section members"},[n("div",{staticClass:"container"},[n("h2",[t._v("Senato")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.senato.desc)+"\n            ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.senato.candidati,(function(t){return n("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),n("HorizontalLine"),t._v(" "),n("div",{staticClass:"section members"},[n("div",{staticClass:"container"},[n("h2",[t._v("CDA")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v("\n                "+t._s(t.dataLista.cda.desc)+"\n            ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentSenato"}},t._l(t.dataLista.cda.candidati,(function(t){return n("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])]),t._v(" "),n("HorizontalLine"),t._v(" "),n("div",{staticClass:"section members",staticStyle:{"background-color":"white"}},[n("div",{staticClass:"container"},[n("h2",[t._v("Scuole")]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"lead-creative-banner"},[t._v(t._s(t.dataLista.scuole.desc))]),t._v(" "),n("ul",{staticStyle:{"list-style":"none"}},[n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("AUIC")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                     "+t._s(t.dataLista.scuole.auic.desc)+"\n                ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleAUIC"}},t._l(t.dataLista.scuole.auic.candidati,(function(t){return n("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("3I")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                "+t._s(t.dataLista.scuole.trei.desc)+"\n                      ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuole3I"}},t._l(t.dataLista.scuole.trei.candidati,(function(t){return n("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("ICAT")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                "+t._s(t.dataLista.scuole.icat.desc)+"\n                     ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleICAT"}},t._l(t.dataLista.scuole.icat.candidati,(function(t){return n("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)]),t._v(" "),n("li",{staticClass:"liScuola"},[n("span",{staticClass:"titleScuole"},[t._v("DESIGN")]),t._v(" "),n("div",{staticClass:"spacerScuole"}),t._v(" "),n("div",{staticClass:"descrizioneScuola"},[t._v("\n                "+t._s(t.dataLista.scuole.design.desc)+"\n                         ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{id:"includedContentScuoleDESIGN"}},t._l(t.dataLista.scuole.design.candidati,(function(t){return n("Frame",{key:t.id,attrs:{"class-param":"col-md-3 col-md-2","style-param":"display:flex;margin: auto;"}},[n("Candidato",{attrs:{cand:t,"url-lista":""}})],1)})),1)])])])])],1)}),[],!1,null,"313aa6c8",null);e.default=component.exports;installComponents(component,{NavigationBar:n(255).default,Button:n(250).default,Frame:n(257).default,HorizontalLine:n(267).default,Candidato:n(260).default})},286:function(t,e,n){"use strict";n.r(e);var d={data:function(){return{items:{name:"Studenti Indipendenti",mainWebsiteUrl:"https://studentiindipendenti.it/",mainProgrammaUrl:"https://www.polimi.it/fileadmin/user_upload/il_Politecnico/votazioni-studenti/Votazioni_2021/programmi-elettorali/Studenti_Indipendenti.pdf",desc:"metti-descrizione",imageUrl:"/img/sip.png",programma:[{id:1,title:"Titolo1",url:"/img/sip.png",desc:"Descrizione 1"},{id:2,title:"Titolo2",url:"/img/sip.png",desc:"Descrizione 2"}],senato:{desc:"La nostra idea di senato ecc...",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/wolff_jonathan.jpg",name:"Wolff Jonathan",detto:"JONNY"},{id:2,imgUrl:"/img/candidati/studentiindipendenti/iodice_andrea.jpg",name:"Iodice Andrea",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/deluca_maria_nicole.jpg",name:"Deluca Maria Nicole",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/magaz_milagros.jpg",name:"Magaz Milagros",detto:"MILI"},{id:5,imgUrl:"/img/candidati/studentiindipendenti/zamboni_marco.jpg",name:"Zamboni Marco",detto:"ZAMBO"},{id:6,imgUrl:"/img/candidati/studentiindipendenti/marcucci_edoardo.jpg",name:"Marcucci Edoardo",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/spiniello_mario.jpg",name:"Spiniello Mario",detto:""},{id:8,imgUrl:"/img/candidati/studentiindipendenti/stramare_davide.jpg",name:"Stramare Davide",detto:"DADO"}]},cda:{desc:"La nostra idea di cda ecc...",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/crisogianni_gloria_maria.jpg",name:"Crisogianni Gloria Maria",detto:""},{id:2,imgUrl:"/img/candidati/studentiindipendenti/notarianni_anita_clara.jpg",name:"Notarianni Anita Clara",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/arrigoni_chiara.jpg",name:"Arrigoni Chiara",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/carbone_gaia.jpg",name:"Carbone Gaia",detto:""}]},scuole:{desc:"La nostra idea di scuola ecc...",auic:{desc:"La scuola auic...",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/bertolini_tommasopaolo.jpg",name:"Bertolini Tommasopaolo",detto:"TOMMI"},{id:2,imgUrl:"/img/candidati/studentiindipendenti/maurelli_debora.jpg",name:"Maurelli Debora",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/cantatore_giulia.jpg",name:"Cantatore Giulia",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/lawrence_emily.jpg",name:"Lawrence Emily",detto:""},{id:5,imgUrl:"/img/candidati/studentiindipendenti/crisogianni_gloria_maria.jpg",name:"Crisogianni Gloria Maria",detto:""},{id:6,imgUrl:"/img/candidati/studentiindipendenti/deluca_maria_nicole.jpg",name:"Deluca Maria Nicole",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/francioli_luca.jpg",name:"Francioli Luca",detto:""},{id:8,imgUrl:"/img/candidati/studentiindipendenti/gonzàlez_miranda_valeria_margarita.jpg",name:"Gonzàlez Miranda Valeria Margarita",detto:""},{id:9,imgUrl:"/img/candidati/studentiindipendenti/haardt_gabriele.jpg",name:"Haardt Gabriele",detto:""},{id:10,imgUrl:"/img/candidati/studentiindipendenti/masciarelli_ilaria.jpg",name:"Masciarelli Ilaria",detto:""},{id:11,imgUrl:"/img/candidati/studentiindipendenti/berti_chiara.jpg",name:"Berti Chiara",detto:""},{id:12,imgUrl:"/img/candidati/studentiindipendenti/buongiorno_pietro.jpg",name:"Buongiorno Pietro",detto:""}]},trei:{desc:"La scuola 3i...",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/marcucci_edoardo.jpg",name:"Marcucci Edoardo",detto:""},{id:2,imgUrl:"/img/candidati/studentiindipendenti/portentoso_alice.jpg",name:"Portentoso Alice",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/fiorani_elena.jpg",name:"Fiorani Elena",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/zamboni_marco.jpg",name:"Zamboni Marco",detto:"ZAMBO"},{id:5,imgUrl:"/img/candidati/studentiindipendenti/wolff_jonathan.jpg",name:"Wolff Jonathan",detto:"JONNY"},{id:6,imgUrl:"/img/candidati/studentiindipendenti/benatti_francesca.jpg",name:"Benatti Francesca",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/spiniello_mario.jpg",name:"Spiniello Mario",detto:""},{id:8,imgUrl:"/img/candidati/studentiindipendenti/carbone_gaia.jpg",name:"Carbone Gaia",detto:""},{id:9,imgUrl:"/img/candidati/studentiindipendenti/stramare_davide.jpg",name:"Stramare Davide",detto:"DADO"},{id:10,imgUrl:"/img/candidati/studentiindipendenti/truvolo_federica.jpg",name:"Truvolo Federica",detto:""},{id:11,imgUrl:"/img/candidati/studentiindipendenti/finardi_sara_ehetagegnehu.jpg",name:"Finardi Sara Ehetagegnehu",detto:"FES"},{id:12,imgUrl:"/img/candidati/studentiindipendenti/puddu_francesco.jpg",name:"Puddu Francesco",detto:""},{id:13,imgUrl:"/img/candidati/studentiindipendenti/contardi_pietro.jpg",name:"Contardi Pietro",detto:""},{id:14,imgUrl:"/img/candidati/studentiindipendenti/serino_roberto.jpg",name:"Serino Roberto",detto:""},{id:15,imgUrl:"/img/candidati/studentiindipendenti/oppizzii_alice.jpg",name:"Oppizzii Alice",detto:""}]},icat:{desc:"La scuola icat...",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/chiavegato_matteo.jpg",name:"Chiavegato Matteo",detto:""},{id:2,imgUrl:"/img/candidati/studentiindipendenti/varotto_davide.jpg",name:"Varotto Davide",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/labanca_francesco.jpg",name:"Labanca Francesco",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/stucchi_davide.jpg",name:"Stucchi Davide",detto:""},{id:5,imgUrl:"/img/candidati/studentiindipendenti/ippolito_alessia.jpg",name:"Ippolito Alessia",detto:""}]},design:{desc:"La scuola design...",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/ippolito_ilenia.jpg",name:"Ippolito Ilenia",detto:""},{id:2,imgUrl:"/img/candidati/studentiindipendenti/giordano_laura.jpg",name:"Giordano Laura",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/la_ferla_irene.jpg",name:"La Ferla Irene",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/arrigoni_chiara.jpg",name:"Arrigoni Chiara",detto:""},{id:5,imgUrl:"/img/candidati/studentiindipendenti/pompa_federica.jpg",name:"Pompa Federica",detto:""},{id:6,imgUrl:"/img/candidati/studentiindipendenti/creanza_caterina.jpg",name:"Creanza Caterina",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/ciortan_andreea.jpg",name:"Ciortan Andreea",detto:""},{id:8,imgUrl:"/img/candidati/studentiindipendenti/patti_lavinia.jpg",name:"Patti Lavinia",detto:""}]}}}}}},r=n(57),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListaDettaglio",{attrs:{"data-lista":t.items}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListaDettaglio:n(270).default})}}]);