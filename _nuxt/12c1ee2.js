(window.webpackJsonp=window.webpackJsonp||[]).push([[34,4,16],{134:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{scuole:{auic:"../scuola/auic/",trei:"../scuola/trei/",icat:"../scuola/icat/",design:"../scuola/design/"}}}},c=l(8),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("LayoutNavigationBar",{attrs:{language:t.$i18n.locale}}),t._v(" "),e("div",{staticClass:"container2"},[e("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[e("div",{staticStyle:{"text-align":"center"}},[e("h2",[t._v(t._s(t.$t("Elezioni rappresentanti degli studenti")))]),t._v(" "),e("br"),t._v(" "),e("h4",[t._v(t._s(t.$t("Scuole")))]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"lead"}),e("blockquote",[t._v("\n                        "+t._s(t.$t("COORDINA I CORSI DI STUDIO E FORNISCE UN INDIRIZZO GENERALE ALLA SCUOLA."))+"\n                    ")]),t._v(" "),e("p")])]),t._v(" "),e("SubpagesScuoleComponent",{attrs:{"scuole-link":t.scuole,language:t.$i18n.locale}})],1),t._v(" "),e("LayoutFooter",{attrs:{language:t.$i18n.locale}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:l(43).default,SubpagesScuoleComponent:l(98).default,LayoutFooter:l(73).default})},73:function(t,e,l){"use strict";l.r(e);var n={props:{language:{type:String,required:!0}}},c=l(8),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("br"),t._v(" "),e("hr"),t._v(" "),e("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("\n        Copyright ©\n        "),e("a",{attrs:{href:"https://polinetwork.org/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),e("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[e("a",{attrs:{href:"/"+t.language+"/contatti/"}},[e("span",[t._v(t._s(t.$t("Contatti")))])]),t._v("\n         - \n        "),e("a",{attrs:{href:"/"+t.language+"/curiosita/"}},[e("span",[t._v(t._s(t.$t("Curiosità")))])])]),t._v(" "),e("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},[e("span",[t._v(t._s(t.$t("Questo sito non è affiliato al Politecnico di Milano")))])])])])])}),[],!1,null,null,null);e.default=component.exports},87:function(t,e,l){var content=l(94);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("d7a7ba42",content,!0,{sourceMap:!1})},93:function(t,e,l){"use strict";l(87)},94:function(t,e,l){var n=l(11)(!1);n.push([t.i,".scuoleTitolo{font-size:calc(1px + .4rem + .95vw)}.scuole,.scuoleTitolo{width:100%;text-align:center;word-break:break-word}.scuole{font-size:calc(3px + .9rem + 1.1vw)}.scuolaCard{padding:calc(1px + .1rem + 1vw)}.scuoleContainer{margin:auto;max-width:calc(30px + 65vw + 3rem)}",""]),t.exports=n},98:function(t,e,l){"use strict";l.r(e);var n={props:{scuoleLink:{type:Object,default:null},language:{type:String,required:!0}}},c=(l(93),l(8)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"scuoleContainer"},[e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-lg-3 col-md-6 scuolaCard"},[e("a",{attrs:{href:t.scuoleLink.auic}},[e("div",{staticClass:"card h-100"},[e("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[e("div",{staticClass:"divScuole"},[e("div",[e("div",[e("h1",{staticClass:"scuole"},["it"==t.language?e("span",[t._v(" Scuola AUIC ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v(" AUIC School ")]):t._e()])])]),t._v(" "),e("div",[e("div",[e("h5",{staticClass:"scuoleTitolo"},["it"==t.language?e("span",[t._v("\n                      ARCHITETTURA URBANISTICA INGEGNERIA DELLE COSTRUZIONI\n                    ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("\n                      URBAN ARCHITECTURE CONSTRUCTION ENGINEERING\n                    ")]):t._e()])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-6 scuolaCard"},[e("a",{attrs:{href:t.scuoleLink.trei}},[e("div",{staticClass:"card h-100"},[e("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[e("div",{staticClass:"divScuole"},[e("div",[e("div",[e("h1",{staticClass:"scuole"},["it"==t.language?e("span",[t._v(" Scuola 3I ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v(" 3I School ")]):t._e()])])]),t._v(" "),e("div",[e("div",[e("h5",{staticClass:"scuoleTitolo"},["it"==t.language?e("span",[t._v("\n                      INGEGNERIA INDUSTRIALE E DELL' INFORMAZIONE\n                    ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("\n                      INDUSTRIAL AND INFORMATION ENGINEERING\n                    ")]):t._e()])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-6 scuolaCard"},[e("a",{attrs:{href:t.scuoleLink.icat}},[e("div",{staticClass:"card h-100"},[e("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[e("div",{staticClass:"divScuole"},[e("div",[e("div",[e("h1",{staticClass:"scuole"},["it"==t.language?e("span",[t._v(" Scuola ICAT ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v(" ICAT School ")]):t._e()])])]),t._v(" "),e("div",[e("div",[e("h5",{staticClass:"scuoleTitolo"},["it"==t.language?e("span",[t._v("\n                      INGEGNERIA CIVILE, AMBIENTALE E TERRITORIALE\n                    ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("\n                      CIVIL, ENVIRONMENTAL AND TERRITORIAL ENGINEERING\n                    ")]):t._e()])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-6 scuolaCard"},[e("a",{attrs:{href:t.scuoleLink.design}},[e("div",{staticClass:"card h-100"},[e("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[e("div",{staticClass:"divScuole"},[e("div",[e("div",[e("h1",{staticClass:"scuole"},["it"==t.language?e("span",[t._v(" Scuola Design ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v(" Design School ")]):t._e()])])]),t._v(" "),e("div",[e("div",[e("h5",{staticClass:"scuoleTitolo"},["it"==t.language?e("span",[t._v("\n                      MODA, INTERNI, COMUNICAZIONE, PRODOTTO\n                    ")]):t._e(),t._v(" "),"en"==t.language?e("span",[t._v("\n                      FASHION, INTERIORS, COMMUNICATION, PRODUCT\n                    ")]):t._e()])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);