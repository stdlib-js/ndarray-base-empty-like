// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-order@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-empty@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@v0.1.0-esm/index.mjs";function a(a){var j,o,l,p,h,v;return v=r(a),p=d(a,!0),l=n(a),p.length>0?(j=t(p),h=s(p,l)):(j=1,h=[0]),o="binary"===v?m(j):i(j,v),new a.constructor(v,o,p,h,e(p,h),l)}export{a as default};
//# sourceMappingURL=index.mjs.map
