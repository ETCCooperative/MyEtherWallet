(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15206570"],{"0a63":function(e,t,n){"use strict";var a=n("8fbb1"),r=n.n(a);r.a},1298:function(e,t,n){"use strict";n("b0c0");var a=n("cb09"),r=n.n(a),s=n("ef00"),c=n.n(s),o=n("6c15"),i=n.n(o),p=n("c222"),d=n.n(p),u=n("e8c4"),l=n.n(u),b=n("5c5e"),f=n.n(b),A=n("2c58"),m=n.n(A),g=n("7b4f"),w=n.n(g),O=n("7e5b"),h=n.n(O),D=n("d840"),v=n.n(D),k=n("8761"),y={manageEns:{route:"/interface/dapps/manage-ens",icon:i.a,iconDisabled:d.a,title:"ens.title",desc:"ens.dapp-desc",supportedNetworks:[k["ETH"].name,k["GOERLI"].name,k["ROP"].name,k["RIN"].name],lastUpdated:"11/06/2019",releaseDate:"10/05/2018"},domainSale:{route:"/interface/dapps/name-wallet",icon:r.a,iconDisabled:c.a,title:"subDomain.title",desc:"subDomain.dapp-desc",supportedNetworks:[k["ETH"].name],lastUpdated:"09/20/2019",releaseDate:"10/08/2018"},scheduleTransaction:{route:"/interface/dapps/schedule-transaction",icon:l.a,iconDisabled:f.a,title:"scheduleTx.title",desc:"scheduleTx.dapp-desc",supportedNetworks:[k["ETH"].name,k["KOV"].name],lastUpdated:"10/28/2019",releaseDate:"02/21/2019"},maker:{route:"/interface/dapps/maker-dai",icon:m.a,iconDisabled:w.a,title:"dappsMaker.maker_title",desc:"dappsMaker.maker_desc",supportedNetworks:[k["ETH"].name,k["KOV"].name],lastUpdated:"08/14/2019",releaseDate:"06/14/2019"},makerOld:{route:"/interface/dapps/maker-sai",icon:m.a,iconDisabled:w.a,title:"dappsMaker.maker_title_old",desc:"dappsMaker.maker_desc_sai",supportedNetworks:[k["ETH"].name,k["KOV"].name],lastUpdated:"08/14/2019",releaseDate:"06/14/2019"},ambrpay:{route:"/interface/dapps/ambrpay",icon:h.a,iconDisabled:v.a,title:"dappsAmbrpay.title",desc:"dappsAmbrpay.ambrpay-popover",supportedNetworks:[k["ETH"].name],lastUpdated:"11/05/2019",releaseDate:"11/05/2019"}};t["a"]=y},"27a2":function(e,t,n){"use strict";var a=n("5c2d"),r=n.n(a);r.a},"2c58":function(e,t,n){e.exports=n.p+"img/makerdai.svg"},"31ce0":function(e,t,n){"use strict";var a=n("d91c"),r=n.n(a);r.a},3409:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["dapps-button",e.supported?"":"disabled"],on:{click:e.navigateTo}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!e.isBeenTwoWeeks,expression:"!isBeenTwoWeeks"}],staticClass:"new-label",attrs:{src:n("bec0"),alt:""}}),a("img",{class:["Ambrpay"===e.title?"ambrpay-icon":"","dapp-logo"],attrs:{src:e.supported?e.icon:e.iconDisabled,alt:""}}),a("div",[a("h4",[e._v(e._s(e.title))]),a("p",[e._v(e._s(e.desc))])])])},r=[],s=(n("a4d3"),n("4de4"),n("caad"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("159b"),n("fc11")),c=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={props:{title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""},iconDisabled:{type:String,default:""},param:{type:String,default:""},releaseDate:{type:String,default:""},supportedNetworks:{type:Array,default:function(){return[]}}},computed:i({},Object(c["b"])(["network","online"]),{supported:function(){return this.online?this.supportedNetworks.includes(this.network.type.name):null},isBeenTwoWeeks:function(){var e=new Date,t=new Date(this.releaseDate),n=e.getTime()-t.getTime(),a=2;return this.milliToWeeks(n)>a}}),methods:{milliToWeeks:function(e){var t=e/1e3,n=t/60,a=n/60,r=a/24,s=r/7;return s},navigateTo:function(){this.$router.push(this.param)}}},d=p,u=(n("31ce0"),n("2877")),l=Object(u["a"])(d,a,r,!1,null,"1c311444",null),b=l.exports;n.d(t,"a",(function(){return b}))},"5c2d":function(e,t,n){},"5c5e":function(e,t,n){e.exports=n.p+"img/eac-hov.svg"},"6c15":function(e,t,n){e.exports=n.p+"img/domain.svg"},"7b4f":function(e,t,n){e.exports=n.p+"img/makerdai-disabled.svg"},"7e5b":function(e,t,n){e.exports=n.p+"img/ambrpay.png"},"8fbb1":function(e,t,n){},bec0:function(e,t){e.exports="data:image/png;base64,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"},c222:function(e,t,n){e.exports=n.p+"img/domain-hov.svg"},cb09:function(e,t,n){e.exports=n.p+"img/domain-sale.svg"},d572:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-footer"})},r=[],s={data:function(){return{}}},c=s,o=(n("27a2"),n("2877")),i=Object(o["a"])(c,a,r,!1,null,"368362f6",null),p=i.exports;n.d(t,"a",(function(){return p}))},d840:function(e,t,n){e.exports=n.p+"img/ambrpay-disabled.png"},d91c:function(e,t,n){},e8c4:function(e,t,n){e.exports=n.p+"img/eac.svg"},ef00:function(e,t,n){e.exports=n.p+"img/domain-sale-hov.svg"},f4d0:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dapps-container"},[n("interface-container-title",{attrs:{title:e.$t("common.dapps")}}),n("div",{staticClass:"buttons-container"},e._l(e.sortedObject,(function(t){return n("dapp-buttons",{key:t.title,attrs:{title:e.$t(t.title),icon:t.icon,"icon-disabled":t.iconDisabled,desc:e.$t(t.desc),param:t.route,"supported-networks":t.supportedNetworks,"release-date":t.releaseDate}})})),1),n("interface-container-footer")],1)},r=[],s=(n("a4d3"),n("4de4"),n("caad"),n("4e82"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("159b"),n("fc11")),c=n("55c1"),o=n("d572"),i=n("3409"),p=n("1298"),d=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={name:"DappsContainer",components:{"interface-container-title":c["a"],"interface-container-footer":o["a"],"dapp-buttons":i["a"]},data:function(){return{dapps:p["a"]}},computed:l({},Object(d["b"])(["network"]),{sortedObject:function(){var e=this,t=[];return Object.keys(this.dapps).forEach((function(n){t.push(e.dapps[n])})),t.sort((function(e,t){return new Date(t.releaseDate)-new Date(e.releaseDate)})).sort((function(t,n){return t.supportedNetworks.includes(e.network.type.name)||n.supportedNetworks.includes(e.network.type.name)?1:0}))}}),mounted:function(){}},f=b,A=(n("0a63"),n("2877")),m=Object(A["a"])(f,a,r,!1,null,"e1a8d3cc",null),g=m.exports;n.d(t,"default",(function(){return g}))}}]);