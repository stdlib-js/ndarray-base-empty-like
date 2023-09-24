"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=d(function(b,n){
var f=require('@stdlib/ndarray-base-shape2strides/dist'),l=require('@stdlib/ndarray-base-strides2offset/dist'),p=require('@stdlib/ndarray-base-numel/dist'),c=require('@stdlib/array-empty/dist'),q=require('@stdlib/buffer-alloc-unsafe/dist');function m(e){var r,s,u,v,a,t,i;return i=e.dtype,a=e.shape,v=e.order,r=a.length,r>0?(s=p(a),t=f(a,v)):(s=1,t=[0]),i==="binary"?u=q(s):u=c(s,i),new e.constructor(i,u,a,t,l(a,t),v)}n.exports=m
});var y=o();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
