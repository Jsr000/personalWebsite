"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[9698],{1974:(t,a,e)=>{e.d(a,{TextDrawer:()=>c,h:()=>s});var n=e(4709);const i=2,o=.5;function l(t,a,e,n,l,s){const c={x:-(a.length*e*o),y:e*o},r=e*i;s?t.fillText(a,c.x,c.y+r*l):t.strokeText(a,c.x,c.y+r*l)}const s=["text","character","char","multiline-text"];class c{draw(t){!function(t){var a,e,o;const{context:s,particle:c,radius:r,opacity:d}=t,p=c.shapeData;if(!p)return;const h=p.value;if(void 0===h)return;void 0===c.text&&(c.text=(0,n.wA)(h,c.randomIndexData));const u=c.text,x=null!==(a=p.style)&&void 0!==a?a:"",f=null!==(e=p.weight)&&void 0!==e?e:"400",v=Math.round(r)*i,w=null!==(o=p.font)&&void 0!==o?o:"Verdana",y=c.shapeFill,b=null===u||void 0===u?void 0:u.split("\n");if(b){s.font="".concat(x," ").concat(f," ").concat(v,'px "').concat(w,'"'),s.globalAlpha=d;for(let t=0;t<b.length;t++)l(s,b[t],r,0,t,y);s.globalAlpha=1}}(t)}async init(t){const a=t.actualOptions;if(s.find((t=>(0,n.dB)(t,a.particles.shape.type)))){const t=s.map((t=>a.particles.shape.options[t])).find((t=>!!t)),e=[];(0,n.KH)(t,(t=>{e.push((0,n.mx)(t.font,t.weight))})),await Promise.all(e)}}particleInit(t,a){if(!a.shape||!s.includes(a.shape))return;const e=a.shapeData;if(void 0===e)return;const i=e.value;void 0!==i&&(a.text=(0,n.wA)(i,a.randomIndexData))}}},9698:(t,a,e)=>{e.d(a,{loadTextShape:()=>i});var n=e(1974);async function i(t){let a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{TextDrawer:i}=await Promise.resolve().then(e.bind(e,1974));await t.addShape(n.h,new i,a)}}}]);
//# sourceMappingURL=9698.a1bdd2c8.chunk.js.map