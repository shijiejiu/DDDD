(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-dd"],{"0997":function(t,i,e){"use strict";(function(t){e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("e9c4");var n={data:function(){return{uid:"",sj:[]}},onLoad:function(){var t=uni.getStorageSync("uid");t&&(this.uid=t,this.wl(t))},methods:{wl:function(i){var e=this,n={uid:i};uni.request({url:e.$url("hqdd"),method:"POST",data:JSON.stringify(n),header:{"Content-Type":"application/json"},complete:function(i){t("log",i," at pages/index/dd.vue:63"),e.sj=i.data}})}}};i.default=n}).call(this,e("0de9")["log"])},"252f":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[t.sj[0]?n("v-uni-view",{},t._l(t.sj,(function(i,e){return n("v-uni-view",{staticStyle:{width:"100%",height:"auto","border-bottom":"1px solid #EEE"}},[n("v-uni-view",{staticStyle:{padding:"20rpx"}},[n("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("v-uni-view",{},[n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v("Order"+t._s(i.ddh))]),n("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#AAA"}},[t._v("Recharge points"+t._s(i.ssdb)+"USDT")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#AAA"}},[t._v("Received as：50 Drop")])],1),n("v-uni-view",{staticStyle:{"font-size":"26rpx"}},[t._v(t._s(i.zxdsj))])],1)],1)],1)})),1):n("v-uni-view",{},[n("v-uni-view",{},[n("v-uni-image",{staticStyle:{width:"90%",margin:"0 auto"},attrs:{src:e("eef5"),mode:""}})],1),n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"35rpx",color:"#AAA"}},[t._v("No information available")])],1)],1)},a=[]},4628:function(t,i,e){"use strict";e.r(i);var n=e("0997"),a=e.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(u);i["default"]=a.a},"54a0":function(t,i,e){"use strict";e.r(i);var n=e("252f"),a=e("4628");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(u);var o=e("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"416995ac",null,!1,n["a"],void 0);i["default"]=r.exports},eef5:function(t,i,e){t.exports=e.p+"static/img/my.b578a7f0.gif"}}]);