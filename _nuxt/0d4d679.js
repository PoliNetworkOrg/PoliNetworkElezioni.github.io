(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,7,10,15,16,17],{207:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=n(19),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("Copyright © "),n("a",{attrs:{href:"https://polinetwork.github.io/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},["it"==t.language?n("span",[t._v("\n                        Contatti\n                    ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                        Contacts\n                    ")]):t._e()]),t._v("\n                 - \n                "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},["it"==t.language?n("span",[t._v("\n                        Curiosità\n                    ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                        Curiosity\n                    ")]):t._e()])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},["it"==t.language?n("span",[t._v("Questo sito non è affiliato al Politecnico di Milano")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("This site is not affiliated with the Politecnico di Milano")]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,n){"use strict";n.r(e);var l={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=n(19),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("8c72df9c",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";n.r(e);var l={props:{imageUrl:{type:String,default:""},classParam:{type:String,default:""}}},r=n(19),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{class:t.classParam,attrs:{src:t.imageUrl}})])}),[],!1,null,null,null);e.default=component.exports},224:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,default:"it",required:!0}},data:function(){return{items:[{id:1,name:"Svoltastudenti",image:"/img/svolta.png",link:"/lista/svoltastudenti/",style:"background-color: #ff6600de;"},{id:2,name:"Lista Aperta",image:"/img/listaaperta.png",link:"/lista/listaaperta/",style:"background-color: #f5dd00;"},{id:3,name:"La Terna Sinistrorsa",image:"/img/terna.png",link:"/lista/ternasinistrorsa/",style:"background-color: #bf2027;"},{id:4,name:"Studenti Indipendenti",image:"/img/sip.png",link:"/lista/studentiindipendenti/",style:"background-color: #0084bc;"}]}},mounted:function(){var t=this;this.$nextTick((function(){t.test()}))},methods:{test:function(){for(var t=0;t<1;t++){var ul=document.getElementById("listeContainer");if(null!=ul){for(var i=ul.children.length;i>=0;i--){t=Math.random()*i|0;var e=ul.children[t];null!=e&&(ul.appendChild(e),console.log(e))}ul.style.opacity="1"}}}}},r=n(19),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row text-center",staticStyle:{display:"flex",opacity:"0.5"},attrs:{id:"listeContainer"},on:{load:t.test}},t._l(t.items,(function(e){return n("LayoutFrame",{key:e.name,attrs:{"class-param":"col-lg-3 col-md-6 mb-4"}},[n("div",[n("a",{attrs:{href:"/"+t.language+e.link}},[n("figure",{staticClass:"cap-left",staticStyle:{width:"100%"}},[n("LayoutFrame",{attrs:{"class-param":"card h-100","style-param":e.style}},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"containerImgList"},[n("LayoutXImage",{attrs:{"image-url":e.image,"class-param":"imageList"}})],1)])]),t._v(" "),n("figcaption",{staticClass:"h-100"},[n("br"),t._v(" "),n("h2",{staticClass:"titleListaFigcaption"},[t._v(t._s(e.name))])])],1)])])])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutXImage:n(221).default,LayoutFrame:n(208).default})},227:function(t,e,n){"use strict";n(219)},228:function(t,e,n){var l=n(36)(!1);l.push([t.i,".dibattito{font-size:calc(12px + .4rem + .7vw)}.tdDibattito{padding:calc(3px + .25vw);border:1px solid rgba(0,0,0,.153)}.tdDibattito2{border:1px solid rgba(0,0,0,.143)}.giornoDibattito,.tdDibattito2{padding:calc(4px + .25vw);font-size:calc(1px + .6rem + .55vw)}.tabDibattito{width:100%;margin:auto}.tabDibattito,.tabDibattito4{border-collapse:collapse;border-style:hidden}.tabDibattito2{width:100%;margin:auto;border:1px solid rgba(0,0,0,.178);border-radius:calc(1rem + 1vw + 10px);padding:calc(2px + .1vw) calc(3px + .25vw) calc(5px + .1vw)}.tabDibattito3{width:100%;margin:auto;max-width:calc(28rem + 7.45vw + 95px);padding-top:1rem}.orarioDibattito{padding:calc(5px + .25vw) calc(10px + .25vw)}.descrizioneDibattito{padding:calc(2px + .4vw)}",""]),t.exports=l},231:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=(n(227),n(19)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container2",staticStyle:{width:"100%","text-align":"center",display:"block"}},[n("div",{staticClass:"container8"},[n("span",{staticClass:"lead"},[n("div",{staticClass:"tabDibattito3"},[n("div",{staticClass:"tabDibattito2"},[n("table",{staticClass:"tabDibattito"},[n("tr",{staticClass:"trDibattito"},[n("td",{staticClass:"tdDibattito"},[n("div",{staticClass:"giornoDibattito"},["it"==t.language?n("span",[t._v("13 Maggio")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("13 May")]):t._e()])]),t._v(" "),n("td",{staticClass:"tdDibattito"},[n("table",{staticClass:"tabDibattito4",staticStyle:{width:"100%"}},[n("tr",[n("td",{staticClass:"tdDibattito2"},[t._v("\n                                                10:00-11:30\n                                            ")]),t._v(" "),n("td",{staticClass:"tdDibattito2"},[n("div",{staticClass:"descrizioneDibattito"},["it"==t.language?n("span",[t._v("Sostenibilità e spazi")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Sustainability and spaces")]):t._e()])])]),t._v(" "),n("tr",[n("td",{staticClass:"tdDibattito2"},[t._v("\n                                                16:00-17:30\n                                            ")]),t._v(" "),n("td",{staticClass:"tdDibattito2"},[n("div",{staticClass:"descrizioneDibattito"},["it"==t.language?n("span",[t._v("Didattica e Università")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Didactics and universities")]):t._e()])])])])])]),t._v(" "),n("tr",{staticClass:"trDibattito"},[n("td",{staticClass:"tdDibattito"},[n("div",{staticClass:"giornoDibattito"},["it"==t.language?n("span",[t._v("14 Maggio")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("14 May")]):t._e()])]),t._v(" "),n("td",{staticClass:"tdDibattito"},[n("table",{staticClass:"tabDibattito4",staticStyle:{width:"100%"}},[n("tr",[n("td",{staticClass:"tdDibattito2 orarioDibattito"},[t._v("\n                                                10:00-11:30\n                                            ")]),t._v(" "),n("td",{staticClass:"tdDibattito2"},[n("div",{staticClass:"descrizioneDibattito"},["it"==t.language?n("span",[t._v("Tasse, accessibilità, DSU")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Taxes, accessibility, DSU")]):t._e()])])]),t._v(" "),n("tr",[n("td",{staticClass:"tdDibattito2 orarioDibattito"},[t._v("\n                                                16:00-17:30\n                                            ")]),t._v(" "),n("td",{staticClass:"tdDibattito2"},[n("div",{staticClass:"descrizioneDibattito"},["it"==t.language?n("span",[t._v("Tematiche sociali, internazionalizzazione, welfare & varie")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Social issues, internationalization, welfare & various")]):t._e()])])])])])]),t._v(" "),n("tr",{staticClass:"trDibattito"},[n("td",{staticClass:"tdDibattito"},[n("div",{staticClass:"giornoDibattito"},["it"==t.language?n("span",[t._v("15 Maggio")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("15 May")]):t._e()])]),t._v(" "),n("td",{staticClass:"tdDibattito"},[n("table",{staticClass:"tabDibattito4",staticStyle:{width:"100%"}},[n("tr",[n("td",{staticClass:"tdDibattito2 orarioDibattito"},[t._v("\n                                                16:00-17:30\n                                            ")]),t._v(" "),n("td",{staticClass:"tdDibattito2"},[n("div",{staticClass:"descrizioneDibattito"},["it"==t.language?n("span",[t._v("Dibattito finale")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Final debate")]):t._e()])])])])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},233:function(t,e,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("73841fe2",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";n(233)},236:function(t,e,n){var l=n(36)(!1);l.push([t.i,".calendarioTD{font-size:calc(1.1rem + .12vw)}",""]),t.exports=l},244:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=n(19),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container3"},[n("header",{staticClass:"my-4 testoCentrale",staticStyle:{"max-width":"100%",border:"none","margin-top":"10px","margin-bottom":"10px","padding-bottom":"calc(10px + 1rem)","padding-top":"calc(2px + 5rem)"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",{staticStyle:{"font-size":"calc(4px + 1.27rem + 0.77vw)"}},["it"==t.language?n("span",[t._v("Elezioni rappresentanti degli studenti")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Election of student representatives")]):t._e()]),t._v(" "),n("h4",{staticStyle:{"font-size":"calc(2px + 1.15rem + 0.65vw)"}},["it"==t.language?n("a",{attrs:{href:"https://www.polimi.it/il-politecnico/organizzazione/organi-di-ateneo/rappresentanti-studenti/votazioni-studentesche-di-ateneo/"}},[t._v("\n                        Politecnico di Milano\n                    ")]):t._e(),t._v(" "),"en"==t.language?n("a",{attrs:{href:"https://www.polimi.it/en/the-politecnico/organization/university-bodies/student-representatives/university-student-elections/"}},[t._v("\n                        Politecnico di Milano\n                    ")]):t._e()]),t._v(" "),n("div"),t._v(" "),n("h5",{staticStyle:{"text-align":"left","padding-left":"calc(4vw + 1rem)","padding-right":"calc(4vw + 1rem)"}},[n("div",{staticStyle:{"padding-left":"0px !important","font-size":"calc(1px + 0.9rem + 0.3vw)","list-style":"none"}},[n("div",{staticClass:"lead",staticStyle:{padding:"5px","font-size":"calc(2px + 0.82rem + 0.29vw)","text-align":"center"}},["it"==t.language?n("span",[t._v("\n                                📌 Piattaforma online "),n("a",{attrs:{href:"/it/istruzioni/"}},[t._v("votazioni Eligo & istruzioni di voto")])]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                                📌 Online voting "),n("a",{attrs:{href:"/en/istruzioni/"}},[t._v(" platform Eligo & voting instructions")])]):t._e()])]),t._v(" "),n("div",{staticStyle:{padding:"15px"}}),t._v(" "),n("SubpagesCalendario",{attrs:{language:t.language}})],1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"container8"},[n("div",{staticClass:"container6"},[n("p",{staticClass:"lead",staticStyle:{"padding-left":"calc(5px + 0.5rem + 0.6vw)","padding-right":"calc(5px + 0.5rem + 0.6vw)","text-align":"center"}},["it"==t.language?n("span",[t._v("\n                                In questa pagina potrai consultare i candidati delle liste di rappresentanza studentesca (e i relativi programmi) alle elezioni di Maggio 2021 🗳\n                            ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("\n                                On this page you can consult the candidates of the student representation lists (and the relative programs) in the elections of May 2021 🗳\n                            ")]):t._e()])])])])]),t._v(" "),n("SubpagesQuadratiListe",{attrs:{language:t.language}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"container5"},[n("div",{staticClass:"container3 lead",staticStyle:{"text-align":"center","padding-top":"calc(10px + 1rem)","padding-bottom":"calc(0.5rem)"}},[n("h3",{staticClass:"dibattito"},["it"==t.language?n("span",[t._v("🗣 Dibattito fra liste")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("🗣 Debate between lists")]):t._e()]),t._v(" "),n("span",{staticClass:"container5",staticStyle:{"padding-top":"3px"}},["it"==t.language?n("span",[t._v("Le liste di rappresentanza si affronteranno in una serie di dibattiti tematici")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("The representative lists will face each other in a series of thematic debates")]):t._e()])]),t._v(" "),n("SubpagesDibattito",{attrs:{language:t.language}}),t._v(" "),n("br"),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center"}},[n("a",{attrs:{href:"/"+t.language+"/dibattito/"}},[n("LayoutButton",["it"==t.language?n("span",[t._v(" Maggiori info ")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v(" More info ")]):t._e()])],1)])],1),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(154).default,SubpagesCalendario:n(245).default,SubpagesQuadratiListe:n(224).default,SubpagesDibattito:n(231).default,LayoutButton:n(155).default,LayoutFooter:n(207).default})},245:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},r=(n(235),n(19)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"lead",staticStyle:{padding:"calc(5px + 0.1rem)",border:"1px solid #0000002b","border-radius":"calc(10px + 0.2rem)","max-width":"calc(9rem + 9vw + 150px)","text-align":"center",margin:"auto"}},[n("div",{staticStyle:{"padding-left":"5px","padding-right":"5px"}},[n("table",{staticStyle:{width:"100%",margin:"auto","padding-left":"0px","padding-right":"0px"}},[n("tr",[n("td",{staticStyle:{"padding-right":"0.1rem","text-align":"center"}},[t._v("\n                        🗓\n                    ")]),t._v(" "),n("td",[n("table",{staticStyle:{"text-align":"center",width:"100%"}},[n("tr",[n("td",{staticClass:"calendarioTD",staticStyle:{"padding-left":"calc(6px + 0.1rem)","padding-right":"calc(6px + 0.1rem)"}},["it"==t.language?n("span",[t._v("Lunedì 24/05/2021")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Monday 24/05/2021")]):t._e()])]),t._v(" "),n("tr",[n("td",{staticClass:"calendarioTD",staticStyle:{"padding-left":"calc(6px + 0.1rem)","padding-right":"calc(6px + 0.1rem)"}},["it"==t.language?n("span",[t._v("ore 09.00")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("at 09.00")]):t._e()])])])]),t._v(" "),n("td",[t._v("\n                        -\n                    ")]),t._v(" "),n("td",[n("table",{staticStyle:{"text-align":"center",width:"100%"}},[n("tr",[n("td",{staticClass:"calendarioTD",staticStyle:{"padding-left":"calc(6px + 0.1rem)","padding-right":"calc(6px + 0.1rem)"}},["it"==t.language?n("span",[t._v("Giovedì 27/05/2021")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("Thursday 27/05/2021")]):t._e()])]),t._v(" "),n("tr",[n("td",{staticClass:"calendarioTD",staticStyle:{"padding-left":"calc(6px + 0.1rem)","padding-right":"calc(6px + 0.1rem)"}},["it"==t.language?n("span",[t._v("ore 23.59")]):t._e(),t._v(" "),"en"==t.language?n("span",[t._v("at 23.59")]):t._e()])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);