"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[7919],{7919:(t,o,s)=>{s.d(o,{DestroyUpdater:()=>p});var e=s(4709);class i{load(t){t&&(void 0!==t.bottom&&(this.bottom=(0,e.Cs)(t.bottom)),void 0!==t.left&&(this.left=(0,e.Cs)(t.left)),void 0!==t.right&&(this.right=(0,e.Cs)(t.right)),void 0!==t.top&&(this.top=(0,e.Cs)(t.top)))}}class l extends e.SW{constructor(){super(),this.value=3}}class r extends e.SW{constructor(){super(),this.value={min:4,max:9}}}class n{constructor(){this.count=1,this.factor=new l,this.rate=new r,this.sizeOffset=!0}load(t){var o;t&&(void 0!==t.color&&(this.color=e.Oz.create(this.color,t.color)),void 0!==t.count&&(this.count=t.count),this.factor.load(t.factor),this.rate.load(t.rate),this.particles=(0,e.KH)(t.particles,(t=>(0,e.ZB)({},t))),void 0!==t.sizeOffset&&(this.sizeOffset=t.sizeOffset),t.colorOffset&&(this.colorOffset=null!==(o=this.colorOffset)&&void 0!==o?o:{},void 0!==t.colorOffset.h&&(this.colorOffset.h=t.colorOffset.h),void 0!==t.colorOffset.s&&(this.colorOffset.s=t.colorOffset.s),void 0!==t.colorOffset.l&&(this.colorOffset.l=t.colorOffset.l)))}}class c{constructor(){this.bounds=new i,this.mode="none",this.split=new n}load(t){t&&(t.mode&&(this.mode=t.mode),t.bounds&&this.bounds.load(t.bounds),this.split.load(t.split))}}const d=0,u=.5,a=0,f=1,h=500;function v(t,o,s,i){const l=s.options.destroy;if(!l)return;const r=l.split,n=(0,e.hT)(t,o,s.options),c=(0,e.Gu)(r.factor.value),v=s.getFillColor();if(r.color)n.color.load(r.color);else if(r.colorOffset&&v){var p,y,O;n.color.load({value:{hsl:{h:v.h+(0,e.Gu)(null!==(p=r.colorOffset.h)&&void 0!==p?p:d),s:v.s+(0,e.Gu)(null!==(y=r.colorOffset.s)&&void 0!==y?y:d),l:v.l+(0,e.Gu)(null!==(O=r.colorOffset.l)&&void 0!==O?O:d)}}})}else n.color.load({value:{hsl:s.getFillColor()}});n.move.load({center:{x:s.position.x,y:s.position.y,mode:"precise"}}),(0,e.hj)(n.size.value)?n.size.value/=c:(n.size.value.min/=c,n.size.value.max/=c),n.load(i);const b=r.sizeOffset?(0,e.Cs)(-s.size.value,s.size.value):d,g={x:s.position.x+(0,e.vd)(b),y:s.position.y+(0,e.vd)(b)};return o.particles.addParticle(g,n,s.group,(t=>{var o;return!(t.size.value<u)&&(t.velocity.length=(0,e.vd)((0,e.Cs)(s.velocity.length,t.velocity.length)),t.splitCount=(null!==(o=s.splitCount)&&void 0!==o?o:a)+f,t.unbreakable=!0,setTimeout((()=>{t.unbreakable=!1}),h),!0)}))}class p{constructor(t,o){this.container=o,this.engine=t}init(t){const o=this.container,s=t.options.destroy;if(!s)return;t.splitCount=0;const i=s.bounds;t.destroyBounds||(t.destroyBounds={});const{bottom:l,left:r,right:n,top:c}=i,{destroyBounds:d}=t,u=o.canvas.size;l&&(d.bottom=(0,e.Gu)(l)*u.height/e.tZ),r&&(d.left=(0,e.Gu)(r)*u.width/e.tZ),n&&(d.right=(0,e.Gu)(n)*u.width/e.tZ),c&&(d.top=(0,e.Gu)(c)*u.height/e.tZ)}isEnabled(t){return!t.destroyed}loadOptions(t){t.destroy||(t.destroy=new c);for(var o=arguments.length,s=new Array(o>1?o-1:0),e=1;e<o;e++)s[e-1]=arguments[e];for(const i of s)t.destroy.load(null===i||void 0===i?void 0:i.destroy)}particleDestroyed(t,o){if(o)return;const s=t.options.destroy;s&&"split"===s.mode&&function(t,o,s){const i=s.options.destroy;if(!i)return;const l=i.split;if(l.count>=0&&(void 0===s.splitCount||s.splitCount++>l.count))return;const r=(0,e.Gu)(l.rate.value),n=(0,e.wA)(l.particles);for(let e=0;e<r;e++)v(t,o,s,n)}(this.engine,this.container,t)}update(t){if(!this.isEnabled(t))return;const o=t.getPosition(),s=t.destroyBounds;s&&(void 0!==s.bottom&&o.y>=s.bottom||void 0!==s.left&&o.x<=s.left||void 0!==s.right&&o.x>=s.right||void 0!==s.top&&o.y<=s.top)&&t.destroy()}}}}]);
//# sourceMappingURL=7919.38ebb2f2.chunk.js.map