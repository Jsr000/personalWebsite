"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[8751],{8751:(t,e,a)=>{a.d(e,{RotateUpdater:()=>r});var o=a(4709);class s{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(t){t&&(void 0!==t.enable&&(this.enable=t.enable),void 0!==t.speed&&(this.speed=(0,o.Cs)(t.speed)),void 0!==t.decay&&(this.decay=(0,o.Cs)(t.decay)),void 0!==t.sync&&(this.sync=t.sync))}}class i extends o.SW{constructor(){super(),this.animation=new s,this.direction="clockwise",this.path=!1,this.value=0}load(t){t&&(super.load(t),void 0!==t.direction&&(this.direction=t.direction),this.animation.load(t.animation),void 0!==t.path&&(this.path=t.path))}}const n=2*Math.PI;class r{constructor(t){this.container=t}init(t){const e=t.options.rotate;if(!e)return;t.rotate={enable:e.animation.enable,value:(0,o.Id)((0,o.Gu)(e.value)),min:0,max:n},t.pathRotation=e.path;let a=e.direction;if("random"===a){a=Math.floor(2*(0,o.sZ)())>0?"counter-clockwise":"clockwise"}switch(a){case"counter-clockwise":case"counterClockwise":t.rotate.status="decreasing";break;case"clockwise":t.rotate.status="increasing"}const s=e.animation;s.enable&&(t.rotate.decay=1-(0,o.Gu)(s.decay),t.rotate.velocity=(0,o.Gu)(s.speed)/360*this.container.retina.reduceFactor,s.sync||(t.rotate.velocity*=(0,o.sZ)())),t.rotation=t.rotate.value}isEnabled(t){const e=t.options.rotate;return!!e&&(!t.destroyed&&!t.spawning&&e.animation.enable&&!e.path)}loadOptions(t){t.rotate||(t.rotate=new i);for(var e=arguments.length,a=new Array(e>1?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];for(const s of a)t.rotate.load(null===s||void 0===s?void 0:s.rotate)}update(t,e){this.isEnabled(t)&&t.rotate&&((0,o.Cr)(t,t.rotate,!1,"none",e),t.rotation=t.rotate.value)}}}}]);
//# sourceMappingURL=8751.70d33af3.chunk.js.map