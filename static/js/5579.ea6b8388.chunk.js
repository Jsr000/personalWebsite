"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[5579],{5579:(e,l,n)=>{n.d(l,{RollUpdater:()=>i});var o=n(4709);const a=2*Math.PI;class t{constructor(){this.enable=!1,this.value=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.value&&(this.value=(0,o.Cs)(e.value)))}}class r{constructor(){this.darken=new t,this.enable=!1,this.enlighten=new t,this.mode="vertical",this.speed=25}load(e){e&&(void 0!==e.backColor&&(this.backColor=o.Oz.create(this.backColor,e.backColor)),this.darken.load(e.darken),void 0!==e.enable&&(this.enable=e.enable),this.enlighten.load(e.enlighten),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.speed&&(this.speed=(0,o.Cs)(e.speed)))}}class i{getTransformValues(e){var l;const n=(null===(l=e.roll)||void 0===l?void 0:l.enable)&&e.roll,o=n&&n.horizontal,a=n&&n.vertical;return{a:o?Math.cos(n.angle):void 0,d:a?Math.sin(n.angle):void 0}}init(e){!function(e){const l=e.options.roll;if(null!==l&&void 0!==l&&l.enable)if(e.roll={enable:l.enable,horizontal:"horizontal"===l.mode||"both"===l.mode,vertical:"vertical"===l.mode||"both"===l.mode,angle:(0,o.sZ)()*a,speed:(0,o.Gu)(l.speed)/360},l.backColor)e.backColor=(0,o.lN)(l.backColor);else if(l.darken.enable&&l.enlighten.enable){const n=(0,o.sZ)()>=o.vq?"darken":"enlighten";e.roll.alter={type:n,value:(0,o.Gu)("darken"===n?l.darken.value:l.enlighten.value)}}else l.darken.enable?e.roll.alter={type:"darken",value:(0,o.Gu)(l.darken.value)}:l.enlighten.enable&&(e.roll.alter={type:"enlighten",value:(0,o.Gu)(l.enlighten.value)});else e.roll={enable:!1,horizontal:!1,vertical:!1,angle:0,speed:0}}(e)}isEnabled(e){const l=e.options.roll;return!e.destroyed&&!e.spawning&&!(null===l||void 0===l||!l.enable)}loadOptions(e){e.roll||(e.roll=new r);for(var l=arguments.length,n=new Array(l>1?l-1:0),o=1;o<l;o++)n[o-1]=arguments[o];for(const a of n)e.roll.load(null===a||void 0===a?void 0:a.roll)}update(e,l){this.isEnabled(e)&&function(e,l){const n=e.options.roll,o=e.roll;if(!o||null===n||void 0===n||!n.enable)return;const t=o.speed*l.factor,r=a;o.angle+=t,o.angle>r&&(o.angle-=r)}(e,l)}}}}]);
//# sourceMappingURL=5579.ea6b8388.chunk.js.map