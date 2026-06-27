"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var l=o(function(w,q){"use strict";var p=require("@stdlib/ndarray-base-shape2strides"),c=require("@stdlib/ndarray-base-dtype-resolve-str"),d=require("@stdlib/ndarray-base-numel"),f=require("@stdlib/ndarray-base-dtype"),m=require("@stdlib/ndarray-base-shape"),y=require("@stdlib/ndarray-base-order"),g=require("@stdlib/array-empty"),h=require("@stdlib/buffer-alloc-unsafe");function b(e){var r,a,i,s,v,t,u,n;return n=f(e),v=c(n),t=m(e,!0),s=y(e),r=t.length,r>0?(a=d(t),u=p(t,s)):(a=1,u=[0]),v==="binary"?i=h(a):i=g(a,v),new e.constructor(n,i,t,u,0,s)}q.exports=b});var S=l();module.exports=S;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
