(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6,10,12],{70:function(t,e,n){"use strict";n.r(e);var l={props:{language:{type:String,required:!0}}},o=n(8),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("hr"),t._v(" "),n("footer",{staticClass:"py-5 bg-dark",staticStyle:{"padding-top":"1rem !important","padding-bottom":"2rem !important"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.55rem + 0.35vw)"}},[t._v("\n        Copyright ©\n        "),n("a",{attrs:{href:"https://polinetwork.org/"+t.language}},[t._v("PoliNetwork")])]),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center","font-size":"calc(2px + 0.5rem + 0.3vw)","padding-top":"3px"}},[n("a",{attrs:{href:"/"+t.language+"/contatti/"}},[n("span",[t._v(t._s(t.$t("Contatti")))])]),t._v("\n         - \n        "),n("a",{attrs:{href:"/"+t.language+"/curiosita/"}},[n("span",[t._v(t._s(t.$t("Curiosità")))])])]),t._v(" "),n("p",{staticClass:"m-0 text-center",staticStyle:{"font-size":"calc(3px + 0.3rem + 0.2vw)",color:"#000000d9","padding-top":"10px"}},[n("span",[t._v(t._s(t.$t("Questo sito non è affiliato al Politecnico di Milano")))])])])])])}),[],!1,null,null,null);e.default=component.exports},71:function(t,e,n){"use strict";n.r(e);var l={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},o=n(8),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},72:function(t,e,n){var content=n(76);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("894dc536",content,!0,{sourceMap:!1})},73:function(t,e,n){var content=n(79);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("ad7dac6e",content,!0,{sourceMap:!1})},74:function(t,e,n){var content=n(82);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5bdc9249",content,!0,{sourceMap:!1})},75:function(t,e,n){"use strict";n(72)},76:function(t,e,n){var l=n(12)(!1);l.push([t.i,"figure{margin-left:auto;margin-right:auto}.animated{visibility:visible;-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft;width:100%;margin-bottom:.2rem;margin-top:.3rem}.nameCandidatoFull{font-size:medium}.nameDetto{font-size:small;color:#009ad7;font-style:italic}.text{font-size:8pt;color:#000}.candidatoCard{border:1px solid rgba(0,0,0,.1);border-radius:calc(1px + 1rem);padding:calc(1px + .3rem);margin-bottom:10px;height:30vh}",""]),t.exports=l},77:function(t,e,n){"use strict";n.r(e);var l={props:{cand:{type:Object,default:null},urlLista:{type:String,default:null}}},o=(n(75),n(8)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidatoCard"},[n("a",{attrs:{href:t.urlLista}},[n("div",{staticClass:"candidatoSV",staticStyle:{"text-align":"center"}},[n("figure",{staticClass:"wow animated fadeInLeft"},[n("img",{staticClass:"border-img img-responsive center-block immagineCandidato",staticStyle:{width:"100%"},attrs:{src:null==t.cand.imgUrl?"https://ui-avatars.com/api/?name="+t.cand.name.split(" ").join("+")+"&size=512":t.cand.imgUrl}})]),t._v(" "),n("div",{staticClass:"imgcaption",staticStyle:{"text-align":"center"}},[n("strong",{staticClass:"nameCandidato"},[n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"nameCandidatoFull"},[t._v(t._s(t.cand.name))])]),t._v(" "),n("div",{staticStyle:{width:"100%"}},[n("span",{staticClass:"text"},[t._v("\n              "+t._s(null==t.cand.detto?"":t.$t("Alternative valide sulla scheda:"))+"\n            ")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"nameDetto"},[t._v("\n              "+t._s(t.cand.detto)+"\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports},78:function(t,e,n){"use strict";n(73)},79:function(t,e,n){var l=n(12)(!1);l.push([t.i,".titoloFrameSenatoCdA{width:100%;height:12vh}.descrizioneFrameSenatoCdA{font-size:calc(1px + 1rem);color:#000;margin:auto;width:100%;max-width:calc(70px + 15rem + 40vw);padding:calc(1px + 1vw) calc(1vw + 1px + .07rem) calc(.3rem + 6px);height:20vh}.fromPolimi{color:green}.notFromPolimi{color:red}",""]),t.exports=l},80:function(t,e,n){"use strict";n.r(e);var l={props:{item:{type:Object,default:null},fromPolimi:{type:Boolean,default:!0},showIfFromPolimiOrNot:{type:Boolean,default:!1}}},o=(n(78),n(8)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"titoloFrameSenatoCdA"},[n("h2",[t._v(t._s(t.item.name))]),t._v(" "),t.showIfFromPolimiOrNot?n("div",[t.fromPolimi?n("h3",{staticClass:"fromPolimi"},[t._v("✅ From PoliMi")]):t._e(),t._v(" "),t.fromPolimi?t._e():n("h3",{staticClass:"notFromPolimi"},[t._v("❌ Not from PoliMi")])]):t._e()]),t._v(" "),n("div",{staticClass:"descrizioneFrameSenatoCdA"},[n("span",[t._v("\n      "+t._s(t.item.desc)+"\n    ")])]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.item.candidati,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-6","style-param":"margin: auto;"}},[n("div",[n("ListeCandidato",{attrs:{cand:e,"url-lista":t.item.linkLista}})],1)])})),1),t._v(" "),n("div",{staticStyle:{padding:"10px"}},[t._v(" ")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListeCandidato:n(77).default,LayoutFrame:n(71).default})},81:function(t,e,n){"use strict";n(74)},82:function(t,e,n){var l=n(12)(!1);l.push([t.i,".container2{width:100%;max-width:100%;margin:auto}.row{display:flex;flex-wrap:wrap;opacity:.5;justify-content:center}.card{margin-bottom:10px}.imageList{width:512px;height:512px;margin-top:10px}.cap-left{width:100%;display:block;padding:0}.candidateTable{list-style:none;padding-left:0}",""]),t.exports=l},83:function(t,e,n){"use strict";n.r(e);var l={props:{liste:{type:Array,default:null},organiConfronto:{type:Array,default:null},language:{type:String,default:"it",required:!0},showIfFromPolimiOrNot:{type:Boolean,default:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.test2()}))},methods:{test2:function(){for(var t=0;t<5;t++){var ul=document.getElementById("listeContainer2");if(null!=ul){for(var i=ul.children.length;i>=0;i--)ul.appendChild(ul.children[Math.random()*i|0]);ul.style.opacity="1"}}}}},o=(n(81),n(8)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LayoutNavigationBar",{attrs:{language:t.language}}),t._v(" "),n("div",{staticClass:"container2"},[n("div",{staticClass:"container7"},[n("header",{staticClass:"jumbotron my-4 testoCentrale",staticStyle:{border:"none"}},[n("div",{staticStyle:{margin:"auto"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h2",[n("span",[t._v(t._s(t.$t("Elezioni rappresentanti degli studenti")))])]),t._v(" "),n("br"),t._v(" "),t._l(t.organiConfronto,(function(e){return n("LayoutFrame",{key:e.id},[n("div",[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("blockquote",[t._v("\n                  "+t._s(e.desc[t.$i18n.locale])+"\n                ")])])])}))],2)])])]),t._v(" "),n("div",{staticClass:"row text-center",attrs:{id:"listeContainer2"},on:{load:t.test2}},t._l(t.liste,(function(e){return n("LayoutFrame",{key:e.id,attrs:{"class-param":"col-md-3","style-param":"max-width: 15%;flex: 1 4 25%;min-width: 512px;"}},[n("a",{attrs:{href:e.linkLista.startsWith("https://")?e.linkLista:"/"+t.language+e.linkLista}},[n("div",{staticClass:"card"},[n("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[n("div",{staticClass:"cap-left"},[n("div",{staticStyle:{width:"100%"}},[n("img",{staticClass:"imageList",attrs:{src:e.imageUrlHorizontal}})]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"candidateTable"},t._l(e.organi,(function(l){return n("LayoutFrame",{key:l.id},[n("ListeFrameSenatoCdA",{attrs:{item:l,fromPolimi:e.fromPolimi,showIfFromPolimiOrNot:t.showIfFromPolimiOrNot}})],1)})),1)])])])])])])})),1)]),t._v(" "),n("LayoutFooter",{attrs:{language:t.language}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutNavigationBar:n(42).default,LayoutFrame:n(71).default,ListeFrameSenatoCdA:n(80).default,LayoutFooter:n(70).default})}}]);