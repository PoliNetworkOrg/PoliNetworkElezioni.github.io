(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5,8],{74:function(t,e,l){"use strict";l.r(e);var n={props:{classParam:{type:String,default:""},styleParam:{type:String,default:""}}},r=l(8),component=Object(r.a)(n,(function(){var t=this;return(0,t._self._c)("div",{class:t.classParam,style:t.styleParam},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},89:function(t,e,l){"use strict";l.r(e);var n={props:{imageUrl:{type:String,default:""},classParam:{type:String,default:""}}},r=l(8),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("img",{class:t.classParam,attrs:{src:t.imageUrl}})])}),[],!1,null,null,null);e.default=component.exports},90:function(t,e,l){"use strict";l.r(e);var n={props:{language:{type:String,default:"it",required:!0},listaEsclusa:{type:Object,default:null,required:!1}},data:function(){return{items:[{id:1,name:"Svoltastudenti",image:"/img/svolta.png",link:"/2021/lista/svoltastudenti/",style:"background-color: #ff6600de;"},{id:2,name:"Lista Aperta",image:"/img/listaaperta.png",link:"/2021/lista/listaaperta/",style:"background-color: #f5dd00;"},{id:3,name:"La Terna Sinistrorsa",image:"/img/terna.png",link:"/2021/lista/ternasinistrorsa/",style:"background-color: #bf2027;"},{id:4,name:"Studenti Indipendenti",image:"/img/sip.png",link:"/2021/lista/studentiindipendenti/",style:"background-color: #0084bc;"}]}},mounted:function(){var t=this;this.$nextTick((function(){t.test()}))},methods:{test:function(){for(var t=0;t<1;t++){var ul=document.getElementById("listeContainer");if(null!=ul){for(var i=ul.children.length;i>=0;i--){t=Math.random()*i|0;var e=ul.children[t];null!=e&&(ul.appendChild(e),console.log(e))}ul.style.opacity="1"}}}}},r=l(8),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row text-center",staticStyle:{display:"flex",opacity:"0.5"},attrs:{id:"listeContainer"},on:{load:t.test}},t._l(t.items.filter((function(e){return null==t.listaEsclusa||e.name!=t.listaEsclusa.name})),(function(l){return e("LayoutFrame",{key:l.name,attrs:{"class-param":"col-lg-3 col-md-6 mb-4"}},[e("div",[e("a",{attrs:{href:"/"+t.language+l.link}},[e("figure",{staticClass:"cap-left",staticStyle:{width:"100%"}},[e("LayoutFrame",{attrs:{"class-param":"card h-100","style-param":l.style}},[e("div",{staticClass:"listTile",staticStyle:{width:"100%"}},[e("div",{staticClass:"containerImgList"},[e("LayoutXImage",{attrs:{"image-url":l.image,"class-param":"imageList"}})],1)])]),t._v(" "),e("figcaption",{staticClass:"h-100"},[e("br"),t._v(" "),e("h2",{staticClass:"titleListaFigcaption"},[t._v(t._s(l.name))])])],1)])])])})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LayoutXImage:l(89).default,LayoutFrame:l(74).default})}}]);