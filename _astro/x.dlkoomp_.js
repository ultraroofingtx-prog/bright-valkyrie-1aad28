import{a as y,r as d}from"./index.CaZlGE7t.js";var _={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R;function h(){if(R)return i;R=1;var t=y(),f=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(o,e,m){var r,n={},s=null,x=null;m!==void 0&&(s=""+m),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(x=e.ref);for(r in e)l.call(e,r)&&!p.hasOwnProperty(r)&&(n[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:f,type:o,key:s,ref:x,props:n,_owner:u.current}}return i.Fragment=a,i.jsx=c,i.jsxs=c,i}var v;function k(){return v||(v=1,_.exports=h()),_.exports}var O=k();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),E=(t,f)=>{const a=d.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:p=2,absoluteStrokeWidth:c,className:o="",children:e,...m},r)=>d.createElement("svg",{ref:r,...w,width:u,height:u,stroke:l,strokeWidth:c?Number(p)*24/Number(u):p,className:["lucide",`lucide-${b(t)}`,o].join(" "),...m},[...f.map(([n,s])=>d.createElement(n,s)),...Array.isArray(e)?e:[e]]));return a.displayName=`${t}`,a};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{g as X,E as c,O as j};
