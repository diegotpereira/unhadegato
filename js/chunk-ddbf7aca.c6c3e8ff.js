(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddbf7aca"],{2250:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"hero is-primary is-medium"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-two-thirds has text-centered"},[a("h1",{staticClass:"title is-1 has-text-weight-bold"},[t._v(" "+t._s(t.title))]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"content is-medium"},[t._v(t._s(t.subtitle))])])])])])])},i=[],r={name:"HeroSubpagina",props:{title:{type:String},subtitle:{type:String}}},o=r,l=(a("b557"),a("2877")),c=Object(l["a"])(o,e,i,!1,null,"352ee600",null);s["a"]=c.exports},3799:function(t,s,a){},"57e5":function(t,s,a){"use strict";var e=function(t,s){var a=s._c;return a("span",s._g(s._b({staticClass:"material-design-icon arrow-left-icon",class:[s.data.class,s.data.staticClass],attrs:{"aria-hidden":s.props.decorative,"aria-label":s.props.title,role:"img"}},"span",s.data.attrs,!1),s.listeners),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:s.props.fillColor,width:s.props.size,height:s.props.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},[s.props.decorative?s._e():a("title",[s._v(s._s(s.props.title))])])])])},i=[],r=(a("a9e3"),{name:"ArrowLeftIcon",props:{title:{type:String,default:"Arrow Left icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),o=r,l=a("2877"),c=Object(l["a"])(o,e,i,!0,null,null,null);s["a"]=c.exports},b557:function(t,s,a){"use strict";a("3799")},b6c6:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"Breadcrumbs",attrs:{"aria-label":"Breadcrumbs"}},[a("ul",[a("li",{staticClass:"is-size-7"},[a("router-link",{staticClass:"has-text-grey",attrs:{to:t.to}},[t._v(" "+t._s(t.pagina)+" ")])],1),a("li",{staticClass:"is-size-7"},[a("router-link",{staticClass:"has-text-grey",attrs:{to:t.toCategoria}},[t._v(" "+t._s(t.categoria)+" ")])],1),a("li",{staticClass:"is-active is-size-7"},[a("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.titulo))])])])])},i=[],r={name:"Breadcrumbs",props:{to:{type:String,require:!0},pagina:{type:String,require:!0},categoria:{type:String,require:!0},toCategoria:{type:String,require:!0},titulo:{type:String,require:!0}}},o=r,l=a("2877"),c=Object(l["a"])(o,e,i,!1,null,null,null);s["a"]=c.exports},c2f7:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Hero",{attrs:{title:"Notícias, dicas & sugestões",subtitle:""}}),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("Breadcrumbs",{attrs:{to:"/blog",pagina:"Blogg","to-categoria":"/blog",categoria:t.post.categoria,titulo:t.post.titulo}}),a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-full"},[a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:t.postImg}})])]),a("div",{staticClass:"column is-four-fifths"},[a("h2",{staticClass:"title is-1"},[t._v(" "+t._s(t.post.titulo))]),a("p",{staticClass:"subtitle is-6"},[t._v(" Publicados "+t._s(t.postData)+" do "+t._s(t.post.autor)+" ")]),a("p",{staticClass:"content"},[t._v(t._s(t.post.content)+" ")])])]),a("arrow-icon"),a("router-link",{staticClass:"is-size-7 has-text-grey",attrs:{to:"/blog"}},[t._v(" Voltar para todas as postagens ")])],1)])],1)},i=[],r=a("5530"),o=a("2f62"),l=a("2250"),c=a("b6c6"),n=a("57e5"),u=a("c1df"),p=a.n(u),d={name:"BlogView",components:{Hero:l["a"],Breadcrumbs:c["a"],ArrowIcon:n["a"]},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])({post:"getAtualPost"})),{},{postData:function(){return p.a.unix(this.post.postado.segundos).format("DD-MM-YYYY")},postImg:function(){return a("3ed6")("./"+this.post.image)},categoriaUrl:function(){return"/blog?categoria="+this.post.categoria.toLowerCase()}})},g=d,b=a("2877"),f=Object(b["a"])(g,e,i,!1,null,"0f02780c",null);s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-ddbf7aca.c6c3e8ff.js.map