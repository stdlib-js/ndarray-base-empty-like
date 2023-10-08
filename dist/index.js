"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(w,n){
var f=require('@stdlib/ndarray-base-shape2strides/dist'),l=require('@stdlib/ndarray-base-strides2offset/dist'),p=require('@stdlib/ndarray-base-numel/dist'),c=require('@stdlib/ndarray-base-dtype/dist'),d=require('@stdlib/ndarray-base-shape/dist'),m=require('@stdlib/ndarray-base-order/dist'),y=require('@stdlib/array-empty/dist'),g=require('@stdlib/buffer-alloc-unsafe/dist');function h(e){var r,t,u,v,a,i,s;return s=c(e),a=d(e,!0),v=m(e),r=a.length,r>0?(t=p(a),i=f(a,v)):(t=1,i=[0]),s==="binary"?u=g(t):u=y(t,s),new e.constructor(s,u,a,i,l(a,i),v)}n.exports=h
});var b=q();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
