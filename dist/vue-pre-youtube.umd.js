!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).VuePreYoutube={})}(this,function(t){"use strict";var e=0;var n=function(t,e,n,o,i,r,s,a,u,d){"boolean"!=typeof s&&(u=a,a=s,s=!1);var l,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),o&&(f._scopeId=o),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=l):e&&(l=s?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(f.functional){var c=f.render;f.render=function(t,e){return l.call(e),c(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return n}({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:t.imgClass,attrs:{src:t.dataSrc,alt:t.alt,title:t.title},on:{mouseenter:function(e){return t.onMouseEnter()},mouseleave:function(e){return t.onMouseLeave()}}})},staticRenderFns:[]},void 0,{name:"PreYoutube",props:{id:String,interval:{type:Number,default:500},mode:{type:Number,default:1},format:{type:String,default:"default"},src:{type:String,default:""},imgClass:{type:String,default:"pre-youtube"},alt:{type:String,default:""},title:{type:String,default:""},fnStart:{type:Function,default:function(){this.mode!==e&&(this.loop=setInterval(this.fnLoop,this.interval))}},fnStop:{type:Function,default:function(){this.mode!==e&&clearInterval(this.loop)}}},data:function(){var t=this;return{loop:null,fnLoop:function(){++t.num>3&&(t.num=1),t.dataSrc=t.genUrl(t.id,t.num)},num:0,dataSrc:this.src}},mounted:function(){this.dataSrc=this.dataSrc.trim(),this.dataSrc.length||(this.dataSrc=this.genUrl(this.id,this.format)),this.mode===e&&(this.dataSrc=this.genUrl(this.id,this.format))},methods:{genUrl:function(t,e){return"https://img.youtube.com/vi/"+t+"/"+e+".jpg"},onMouseEnter:function(){this.fnStart()},onMouseLeave:function(){this.fnStop()}}},void 0,!1,void 0,void 0,void 0);function o(t){o.installed||(o.installed=!0,t.component("VuePreYoutube",n))}var i={install:o},r=null;"undefined"!=typeof window?r=window.Vue:"undefined"!=typeof global&&(r=global.Vue),r&&r.use(i),n.install=o,t.default=n,Object.defineProperty(t,"__esModule",{value:!0})});