var t="constant";var e=function(t,e,n,r,i,o,a,s,l,u){"boolean"!=typeof a&&(l=s,s=a,a=!1);var d,c="function"==typeof n?n.options:n;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),r&&(c._scopeId=r),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):e&&(d=a?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),d)if(c.functional){var f=c.render;c.render=function(t,e){return d.call(e),f(t,e)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,d):[d]}return n}({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:t.imgClass,attrs:{src:t.dataSrc,alt:t.alt,title:t.title},on:{mouseenter:function(e){t.initHandler&&t.$emit("mouseenter")},mouseleave:function(e){t.initHandler&&t.$emit("mouseleave")}}})},staticRenderFns:[]},void 0,{name:"PreYoutube",props:{id:String,interval:{type:Number,default:500},mode:{type:String,default:"hover"},format:{type:String,default:"default"},initHandler:{type:Boolean,default:!0},src:{type:String,default:""},imgClass:{type:String,default:"pre-youtube"},alt:{type:String,default:""},title:{type:String,default:""},fnStart:{type:Function,default:function(e,n){e!==t&&n()}},fnStop:{type:Function,default:function(e,n){e!==t&&n()}}},data:function(){var t=this;return{loop:null,setFramesInterval:function(){t.loop=setInterval(function(){++t.num>3&&(t.num=1),t.dataSrc=t.genUrl(t.id,t.num)},t.interval)},clearFramesInterval:function(){clearInterval(t.loop)},num:0,dataSrc:this.src}},mounted:function(){var e=this;this.dataSrc=this.dataSrc.trim(),this.dataSrc.length||(this.dataSrc=this.genUrl(this.id,this.format)),this.mode===t&&(this.dataSrc=this.genUrl(this.id,this.format)),this.$on("mouseenter",function(){e.fnStart(e.mode,e.setFramesInterval)}),this.$on("mouseleave",function(){e.fnStop(e.mode,e.clearFramesInterval)})},methods:{genUrl:function(t,e){return"https://img.youtube.com/vi/"+t+"/"+e+".jpg"}}},void 0,!1,void 0,void 0,void 0);function n(t){n.installed||(n.installed=!0,t.component("VuePreYoutube",e))}var r={install:n},i=null;"undefined"!=typeof window?i=window.Vue:"undefined"!=typeof global&&(i=global.Vue),i&&i.use(r),e.install=n;export default e;
