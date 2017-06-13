"use strict"
define(["mathlive/core/fontMetrics"],function(t){var e=t.sigmas,s=[{},{},{}],r=void 0
for(var i in e)if(e.hasOwnProperty(i))for(r=0;r<3;r++)s[r][i]=e[i][r]
for(r=0;r<3;r++)s[r].emPerEx=e.xHeight[r]/e.quad[r]
function p(t,e,r,i){this.id=t,this.size=e,this.cramped=i,this.sizeMultiplier=r,this.metrics=s[e>0?e-1:0]}p.prototype.sup=function(){return o[h[this.id]]},p.prototype.sub=function(){return o[f[this.id]]},p.prototype.fracNum=function(){return o[x[this.id]]},p.prototype.fracDen=function(){return o[m[this.id]]},p.prototype.cramp=function(){return o[w[this.id]]},p.prototype.cls=function(){return a[this.size]+(this.cramped?" cramped":" uncramped")},p.prototype.adjustTo=function(t){var e=d[this.size][t.size]
return e.length>0&&(e=" "+e),this.cramped!==t.cramped&&(e+=this.cramped?" cramped":" uncramped"),e},p.prototype.isTight=function(){return this.size>=2}
var c=0,y=2,n=4,l=6,o=[new p(c,0,1,!1),new p(1,0,1,!0),new p(y,1,1,!1),new p(3,1,1,!0),new p(n,2,.7,!1),new p(5,2,.7,!0),new p(l,3,.5,!1),new p(7,3,.5,!0)]
function u(t){return t?t instanceof p?t:{displaystyle:o[c],textstyle:o[y],scriptstyle:o[n],scriptscriptstyle:o[l]}[t]:t}var a=["displaystyle textstyle","textstyle","scriptstyle","scriptscriptstyle"],d=[["","reset-textstyle textstyle","reset-textstyle scriptstyle","reset-textstyle scriptscriptstyle"],["reset-textstyle displaystyle textstyle","","reset-textstyle scriptstyle","reset-textstyle scriptscriptstyle"],["reset-scriptstyle textstyle displaystyle","reset-scriptstyle textstyle","","reset-scriptstyle scriptscriptstyle"],["reset-scriptscriptstyle textstyle displaystyle","reset-scriptscriptstyle textstyle","reset-scriptscriptstyle scriptstyle",""]],h=[n,5,n,5,l,7,l,7],f=[5,5,5,5,7,7,7,7],x=[y,3,n,5,l,7,l,7],m=[3,3,5,5,7,7,7,7],w=[1,1,3,3,5,5,7,7]
return{DISPLAY:o[c],TEXT:o[y],SCRIPT:o[n],SCRIPTSCRIPT:o[l],toMathstyle:u}})
