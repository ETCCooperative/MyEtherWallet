(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fdccb2c"],{"007c":function(t,e,n){"use strict";var s=n("9542"),a=n.n(s);a.a},"90e9":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"already-owned-container"},[n("h3",[t._v(t._s(t.$t("ens.already-owned",{domain:t.fullDomainName})))]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.label-hash"))+"("+t._s(t.hostName)+"):")]),n("p",{staticClass:"content"},[t._v(t._s(t.labelHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.name-hash"))+"("+t._s(t.fullDomainName)+"):")]),n("p",{staticClass:"content"},[t._v(t._s(t.nameHash))])]),n("div",{staticClass:"content-container"},[n("p",{staticClass:"label"},[t._v(t._s(t.$t("ens.owner"))+":")]),n("p",{staticClass:"content"},[t._v(t._s(t.owner))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"}],staticClass:"content-container"},[n("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),t._l(t.supportedCoinsWithValue,(function(e,s){return n("div",{key:s.id},[n("span",{staticClass:"currency"},[t._v(t._s(e.symbol)+" "+t._s(t.$t("common.lowercase-addr"))+": ")]),n("span",{staticClass:"content"},[t._v(t._s(e.value))])])}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasAnyTxt,expression:"hasAnyTxt"}],staticClass:"content-container"},[n("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),t._l(t.txtRecordsWithValue,(function(e,s){return n("div",{key:s},[n("span",{staticClass:"currency"},[t._v(t._s(s)+": ")]),n("span",{staticClass:"content"},[t._v(t._s(e))])])}))],2),n("div",{staticClass:"owner-options"},[t.owner.toLowerCase()===t.account.address.toLowerCase()?n("button",{staticClass:"manage-button",on:{click:t.manageEns}},[t._v(" "+t._s(t.$t("ens.manage"))+" ")]):t._e()]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},a=[],o=(n("a4d3"),n("99af"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("fc11")),r=n("539d"),i=n("2f62");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={components:{"interface-bottom-text":r["a"]},props:{labelHash:{type:String,default:""},nameHash:{type:String,default:""},owner:{type:String,default:""},hostName:{type:String,default:""},tld:{type:String,default:""},supportedCoins:{type:Object,default:function(){}},resolverMultiCoinSupport:{type:Boolean,default:!1},txtRecords:{type:Object,default:function(){}}},computed:l({},Object(i["b"])(["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},supportedCoinsWithValue:function(){var t={};for(var e in this.supportedCoins)this.supportedCoins[e].value&&(t[e]=this.supportedCoins[e]);return t},txtRecordsWithValue:function(){var t={};for(var e in this.txtRecords)this.txtRecords[e]&&(t[e]=this.txtRecords[e]);return t},hasAnyTxt:function(){for(var t in this.txtRecords)if(""!==this.txtRecords[t])return!0;return!1}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")},methods:{manageEns:function(){this.$router.push("manage")}}},p=u,d=(n("007c"),n("2877")),h=Object(d["a"])(p,s,a,!1,null,"320b8a85",null),f=h.exports;n.d(e,"default",(function(){return f}))},9542:function(t,e,n){}}]);