(window.webpackJsonp=window.webpackJsonp||[]).push([[35,4,5,9,10,11],{207:function(t,e,n){"use strict";n.r(e);var o={props:{language:{type:String,required:!0}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("Copyright © "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v("\n                                Contatti\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nContacts\n                          ")]):t._e()]),t._v("\n            - \n                    "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v("\n                                           Curiosità\n                          ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\nCuriosity\n                          ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,n){"use strict";n.r(e);var o={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,n){var content=n(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("894dc536",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("ad7dac6e",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(209)},212:function(t,e,n){var o=n(36)(!1);o.push([t.i,"figure{margin-left:auto;margin-right:auto}.nameCandidatoFull{font-size:small}.nameDetto{font-size:calc(1px + .5rem + .3vw);color:#009ad7;font-style:italic}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem)}",""]),t.exports=o},213:function(t,e,n){"use strict";n.r(e);var o={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},r=(n(211),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft animated",staticStyle:{visibility:"visible","animation-name":"fadeInLeft",width:"100%","margin-bottom":"calc(0.2rem)","margin-top":"calc(0.3rem)"}},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameDetto"},[t._v("\n                            "+t._s(t.cand.detto)+"\n                        ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,n){"use strict";n(210)},215:function(t,e,n){var o=n(36)(!1);o.push([t.i,".descrizioneFrameSenatoCdA{margin:auto;width:100%;max-width:calc(70px + 15rem + 40vw);padding-left:calc(1vw + 1px + .07rem);padding-right:calc(1vw + 1px + .07rem);padding-bottom:calc(.3rem + 6px)}",""]),t.exports=o},216:function(t,e,n){"use strict";n.r(e);var o={props:{item:{type:Object,default:null}}},r=(n(214),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"100%"}},[n("h2",[t._v(t._s(t.item.name))])]),t._v(" "),n("div",{staticClass:"descrizioneFrameSenatoCdA"},[n("span",{staticStyle:{"font-size":"calc(1px + 1rem)",color:"black",padding:"calc(1px + 1vw)"}},[t._v("\n            "+t._s(t.item.desc)+"\n        ")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.item.candidati,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-6","style-param":"margin:auto;"}},[n("div",[n("ListeCandidato",{attrs:{cand:e,"url-lista":t.item.linkLista}})],1)])})),1),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[t._v("\n         \n    ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeCandidato:n(213).default,LayoutFrame:n(208).default})},217:function(t,e,n){"use strict";n.r(e);var o={props:{liste:{type:Array,default:null},organiConfronto:{type:Array,default:null},language:{type:String,default:"it",required:!0}},mounted:function(){var t=this;this.$nextTick((function(){t.test2()}))},methods:{test2:function(){for(var t=0;t<5;t++){var ul=document.getElementById("listeContainer2");if(null!=ul){for(var i=ul.children.length;i>=0;i--)ul.appendChild(ul.children[Math.random()*i|0]);ul.style.opacity="1"}}}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container2",staticStyle:{width:"100%","max-width":"100%",margin:"0px"}},[n("div",{staticClass:"container7"},[n("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[n("div",{staticStyle:{margin:"auto"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",["it"==t.language?n("span",[t._v("Elezioni rappresentanti degli studenti")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Election of student representatives")]):t._e()]),t._v(" "),n("br"),t._v(" "),t._l(t.organiConfronto,(function(e){return n("LayoutFrame",{key:e.id},[n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"lead"}),n("blockquote",[t._v("\n                                            "+t._s(e.desc)+"\n                                        ")]),t._v(" "),n("p")])])}))],2)])])]),t._v(" "),n("div",{staticClass:"row text-center",staticStyle:{display:"flex","flex-wrap":"wrap",opacity:"0.5"},attrs:{id:"listeContainer2"},on:{load:t.test2}},t._l(t.liste,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-3","style-param":"max-width: 100%;flex: 1 4 25%;min-width:calc(150px + 9rem + 3vw)"}},[n("a",{attrs:{href:"/"+t.language+e.linkLista}},[n("div",{staticClass:"card"},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"cap-left",staticStyle:{width:"100%",display:"block",padding:"0px"}},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"imageList",staticStyle:{width:"100%","max-width":"100%"},attrs:{src:e.imageUrlHorizontal}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"candidateTable",staticStyle:{"list-style":"none","padding-left":"0px"}},t._l(e.organi,(function(t){return n("LayoutFrame",{key:t.name},[n("ListeFrameSenatoCdA",{attrs:{item:t}})],1)})),1)])])])])])])})),1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(154).default,LayoutFrame:n(208).default,ListeFrameSenatoCdA:n(216).default,LayoutFooter:n(207).default})},273:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{organiConfronto:[{id:1,name:"3I",desc:"The school coordinates the teaching activities for most of the degrees and master's degrees in Engineering of the Politecnico di Milano. The School of Industrial and Information Engineering is by far the largest of the four present at the Politecnico, with about 60 percent of students enrolled in their Bachelor's and Master's Degree courses. The Joint Commission has the task of monitoring the educational offer, the quality of teaching and the services provided to students and expressing opinions on the establishment and cancellation of studio. is made up of 5 students and 5 professors. "}],liste:[{id:1,name:"Svoltastudenti",imageUrlHorizontal:"/img/logo-svolta_hor.png",linkLista:"/lista/svoltastudenti/",organi:[{name:"3I",desc:"Create a network of Ambassadors with the aim of bringing girls closer to the engineering world. Increase laboratory activity in elective courses in the master's degree: these courses are already interdepartmental and the contamination would be easily implemented. Insert the obligation to upload a correct version of the exam topic and guarantee the possibility of accessing the exam topics of previous years and simulations, through a centralized archive. Introduce a new exam session: introduce a total session in conjunction with the second partial test. ",candidati:[{id:1,imgUrl:"/img/candidati/svoltastudenti/marsona_panci.jpg",name:"Panci Marsona",detto:"MARS"},{id:2,imgUrl:"/img/candidati/svoltastudenti/raif_muhammad.jpg",name:"Muhammad Raif",detto:"RAIF"},{id:3,imgUrl:"/img/candidati/svoltastudenti/mercedes_alazraki.jpg",name:"Alazraki Mercedes",detto:"MERCY AMG"},{id:4,imgUrl:"/img/candidati/svoltastudenti/eric_diluca.jpg",name:"Di Luca Eric Alexandro",detto:"CARLO CRACCO"},{id:5,imgUrl:"/img/candidati/svoltastudenti/yousef_elgohary.jpg",name:"Elgohary Yousef",detto:"YOUS"},{id:6,imgUrl:"/img/candidati/svoltastudenti/lorenzo_lione.jpg",name:"Lione Lorenzo",detto:"LYON"},{id:7,imgUrl:"/img/candidati/svoltastudenti/filiberto_canino.jpg",name:"Canino Filiberto",detto:"FIL"},{id:8,imgUrl:"/img/candidati/svoltastudenti/martina_legnani.jpg",name:"Legnani Martina",detto:"LEGNA"},{id:9,imgUrl:"/img/candidati/svoltastudenti/simone_rapella.jpg",name:"Rapella Simone",detto:"MOMO"},{id:10,imgUrl:"/img/candidati/svoltastudenti/mattia_marinoni.jpg",name:"Marinoni Mattia",detto:"TIA"},{id:11,imgUrl:"/img/candidati/svoltastudenti/anuar_mancini.jpg",name:"Mancini Anuar",detto:"DOPPIO MALTO"},{id:12,imgUrl:"/img/candidati/svoltastudenti/alessandro_baserga.jpg",name:"Baserga Alessandro",detto:"BASE"},{id:13,imgUrl:"/img/candidati/svoltastudenti/alessio_rocca.jpg",name:"Rocca Alessio",detto:"IL PRESIDENTE"}]}]},{id:2,name:"Lista aperta",imageUrlHorizontal:"/img/logo-listaaperta_hor.png",linkLista:"/lista/listaaperta/",organi:[{name:"3I",desc:"Our work in the 3I school will mainly focus on 3 aspects: enhancing the three-year degree, increasing the quality of the teaching experience and building a teaching that takes into account the digital experience of the Covid emergency. even more difficult to enter the master's without policies to enhance the course of the three-year degree, which is increasingly losing quality in teaching. To increase the quality of teaching, we believe that it is essential to increase the possibility of personalizing one's own course of study, to starting from graduate degrees in discontinuity. Finally, we want to grasp the positive aspects of digital, such as recordings, to improve innovative teaching. ",candidati:[{id:1,imgUrl:"/img/candidati/listaaperta/alessandro_alladio.jpg",name:"Alladio Alessandro",detto:"LALO"},{id:2,imgUrl:"/img/candidati/listaaperta/emanuela_dotti.jpg",name:"Dotti Emanuela",detto:"MANU"},{id:3,imgUrl:"/img/candidati/listaaperta/giovanni_cavassi.jpg",name:"Cavassi Giovanni",detto:"CAVA"},{id:4,imgUrl:"/img/candidati/listaaperta/letizia_maria_perri.jpg",name:"Perri Letizia Maria",detto:"LETI"},{id:5,imgUrl:"/img/candidati/listaaperta/john_powell.jpg",name:"Powell John Edgar",detto:"JOHN.JE"},{id:6,imgUrl:"/img/candidati/listaaperta/lorenzo_petullicchio.jpg",name:"Petullicchio Lorenzo",detto:"PETU"},{id:7,imgUrl:"/img/candidati/listaaperta/francesca_castellotti.jpg",name:"Castellotti Francesca",detto:"FRANCI"},{id:8,imgUrl:"/img/candidati/listaaperta/matteo_crivellari.jpg",name:"Crivellari Matteo",detto:"CRIVE"},{id:9,imgUrl:"/img/candidati/listaaperta/gloria_lopiano.jpg",name:"Lopiano Gloria",detto:""},{id:10,imgUrl:"/img/candidati/listaaperta/luca_mandelli.jpg",name:"Mandelli Luca",detto:"MANDO"},{id:11,imgUrl:"/img/candidati/listaaperta/stefano_garavaglia.jpg",name:"Garavaglia Stefano",detto:"IZ"},{id:12,imgUrl:"/img/candidati/listaaperta/giuliano_gemmani.jpg",name:"Gemmnani Giuliano",detto:"GEMMA"},{id:13,imgUrl:"/img/candidati/listaaperta/marco_gandolla.jpg",name:"Gandolla Marco",detto:"QUAGLIA"},{id:14,imgUrl:"/img/candidati/listaaperta/francesco_boldrini.jpg",name:"Boldrini Francesco",detto:"BOLD"},{id:15,imgUrl:"/img/candidati/listaaperta/marco_guerini.jpg",name:"Guerini Marco",detto:"GUERO"}]}]},{id:3,name:"Terna sinistrorsa",imageUrlHorizontal:"/img/logo-terna_hor.png",linkLista:"/lista/ternasinistrorsa/",organi:[{name:"3I",desc:"Exam calendars often make us turn up our noses: dates too close or far from each other, overlaps ... Is there something that protects us? For now only 'guidelines', so we want a regulation that guarantees us our rights! We want to improve teaching by enhancing laboratories, creating new spaces to allow students to carry out their projects and add the possibility of expressing an opinion even after an exam. ",candidati:[{id:1,imgUrl:"/img/candidati/ternasinistrorsa/clarissa_pasculli.png",name:"Pasculli Clarissa",detto:""},{id:2,imgUrl:"/img/candidati/ternasinistrorsa/pedro_bossi.png",name:"Bossi Pedro",detto:""}]}]},{id:4,name:"Studenti indipendenti",imageUrlHorizontal:"/img/logo-sip_hor.png",linkLista:"/lista/studentiindipendenti/",organi:[{name:"3I",desc:"Customizable study plan: we believe that everyone should decide their own study path with as few constraints as possible so that new and multidisciplinary professional figures are created. We believe that the abolition of access to the master's is a further incentive to continue their studies and fight dropping out of studies, a characteristic and serious problem of our university. The differences between brackets must be abolished by promoting virtuous examples. Always with a view to increasing the choice between courses, we want to increase the number of laboratories to choice.",candidati:[{id:1,imgUrl:"/img/candidati/studentiindipendenti/edoardo_marcucci.PNG",name:"Marcucci Edoardo",detto:""},{id:2,imgUrl:"/img/candidati/studentiindipendenti/alice_portentoso.PNG",name:"Portentoso Alice",detto:""},{id:3,imgUrl:"/img/candidati/studentiindipendenti/elena_fiorani.PNG",name:"Fiorani Elena",detto:""},{id:4,imgUrl:"/img/candidati/studentiindipendenti/marco_zamboni.PNG",name:"Zamboni Marco",detto:"ZAMBO"},{id:5,imgUrl:"/img/candidati/studentiindipendenti/jonathan_wolff.PNG",name:"Wolff Jonathan",detto:"JONNY"},{id:6,imgUrl:"/img/candidati/studentiindipendenti/francesca_benatti.PNG",name:"Benatti Francesca",detto:""},{id:7,imgUrl:"/img/candidati/studentiindipendenti/mario_spiniello.PNG",name:"Spiniello Mario",detto:""},{id:8,imgUrl:"/img/candidati/studentiindipendenti/gaia_carbone.PNG",name:"Carbone Gaia",detto:""},{id:9,imgUrl:"/img/candidati/studentiindipendenti/davide_stramare.PNG",name:"Stramare Davide",detto:"DADO"},{id:10,imgUrl:"/img/sip.PNG",name:"Truvolo Federica",detto:""},{id:11,imgUrl:"/img/candidati/studentiindipendenti/sara_ehetagegnehu_finardi.PNG",name:"Finardi Sara Ehetagegnehu",detto:"FES"},{id:12,imgUrl:"/img/candidati/studentiindipendenti/francesco_puddu.PNG",name:"Puddu Francesco",detto:""},{id:13,imgUrl:"/img/candidati/studentiindipendenti/pietro_contardi.PNG",name:"Contardi Pietro",detto:""},{id:14,imgUrl:"/img/candidati/studentiindipendenti/roberto_serino.PNG",name:"Serino Roberto",detto:""},{id:15,imgUrl:"/img/candidati/studentiindipendenti/alice_oppizzii.PNG",name:"Oppizzii Alice",detto:""}]}]}]}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ListeConfrontoListe",{attrs:{liste:t.liste,"organi-confronto":t.organiConfronto,language:"en"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeConfrontoListe:n(217).default})}}]);