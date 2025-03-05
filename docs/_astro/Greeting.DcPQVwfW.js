import{r as v}from"./index.Dy6lLLXr.js";var x={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function c(){if(l)return n;l=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function i(s,r,t){var u=null;if(t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),"key"in r){t={};for(var a in r)a!=="key"&&(t[a]=r[a])}else t=r;return r=t.ref,{$$typeof:e,type:s,key:u,ref:r!==void 0?r:null,props:t}}return n.Fragment=o,n.jsx=i,n.jsxs=i,n}var R;function p(){return R||(R=1,x.exports=c()),x.exports}var d=p();const E=({messages:e})=>{const o=()=>e[Math.floor(Math.random()*e.length)],[i,s]=v.useState(e[0]);return d.jsxs("div",{children:[d.jsxs("h3",{children:[i,"! Thank you for visiting!"]}),d.jsx("button",{onClick:()=>s(o()),children:"New Greeting"})]})};export{E as default};
