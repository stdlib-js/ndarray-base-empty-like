"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=l(function(A,q){
var d=require('@stdlib/ndarray-base-shape2strides/dist'),f=require('@stdlib/ndarray-base-strides2offset/dist'),p=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),c=require('@stdlib/ndarray-base-numel/dist'),m=require('@stdlib/ndarray-base-dtype/dist'),y=require('@stdlib/ndarray-base-shape/dist'),g=require('@stdlib/ndarray-base-order/dist'),h=require('@stdlib/array-empty/dist'),b=require('@stdlib/buffer-alloc-unsafe/dist');function S(e){var r,t,s,v,u,a,i,n;return n=m(e),u=p(n),a=y(e,!0),v=g(e),r=a.length,r>0?(t=c(a),i=d(a,v)):(t=1,i=[0]),u==="binary"?s=b(t):s=h(t,u),new e.constructor(n,s,a,i,f(a,i),v)}q.exports=S
});var k=o();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
