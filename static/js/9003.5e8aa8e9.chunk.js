"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[9003],{9003:(e,n,o)=>{o.d(n,{WobbleUpdater:()=>d});var s=o(4709);class a{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,s.Cs)(e.angle)),void 0!==e.move&&(this.move=(0,s.Cs)(e.move)))}}class l{constructor(){this.distance=5,this.enable=!1,this.speed=new a}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,s.Cs)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,s.hj)(e.speed))this.speed.load({angle:e.speed});else{const n=e.speed;void 0!==n.min?this.speed.load({angle:n}):this.speed.load(e.speed)}}}const t=2*Math.PI;const i=2*Math.PI;class d{constructor(e){this.container=e}init(e){var n;const o=e.options.wobble;null!==o&&void 0!==o&&o.enable?e.wobble={angle:(0,s.sZ)()*i,angleSpeed:(0,s.Gu)(o.speed.angle)/360,moveSpeed:(0,s.Gu)(o.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,s.Gu)(null!==(n=null===o||void 0===o?void 0:o.distance)&&void 0!==n?n:0)*this.container.retina.pixelRatio}isEnabled(e){var n;return!e.destroyed&&!e.spawning&&!(null===(n=e.options.wobble)||void 0===n||!n.enable)}loadOptions(e){e.wobble||(e.wobble=new l);for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];for(const a of o)e.wobble.load(null===a||void 0===a?void 0:a.wobble)}update(e,n){this.isEnabled(e)&&function(e,n){var o;const{wobble:a}=e.options,{wobble:l}=e;if(null===a||void 0===a||!a.enable||!l)return;const i=l.angleSpeed*n.factor,d=l.moveSpeed*n.factor*((null!==(o=e.retina.wobbleDistance)&&void 0!==o?o:0)*n.factor)/(s.X5/60),b=t,{position:c}=e;l.angle+=i,l.angle>b&&(l.angle-=b),c.x+=d*Math.cos(l.angle),c.y+=d*Math.abs(Math.sin(l.angle))}(e,n)}}}}]);
//# sourceMappingURL=9003.5e8aa8e9.chunk.js.map