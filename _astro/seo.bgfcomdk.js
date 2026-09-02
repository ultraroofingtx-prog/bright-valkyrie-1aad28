import{c as o}from"./x.DLKOoMP_.js";import{r as y}from"./index.CaZlGE7t.js";import{u as O}from"./react-router-dom.CKUMA3Wr.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=o("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=o("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=o("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=o("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=o("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=o("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);function T(s){const[d,g]=y.useState(null);return y.useEffect(()=>{(async()=>{try{const t=await(await fetch(`https://jigcspbwbszfbegbnpus.supabase.co/functions/v1/seo-manager?action=get-page&path=${encodeURIComponent(s)}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZ2NzcGJ3YnN6ZmJlZ2JucHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NzY0ODMsImV4cCI6MjA4NTU1MjQ4M30.0StHeVE0512TnqXEwKB-tpAw5o3c4VVlyDVnKiemhWw"}})).json();t.page&&g({title:t.page.title,description:t.page.description,keywords:t.page.keywords,ogTitle:t.page.og_title,ogDescription:t.page.og_description,ogImage:t.page.og_image})}catch(c){console.error("Error fetching SEO data:",c)}})()},[s]),d}function $({title:s,description:d,keywords:g,ogTitle:f,ogDescription:c,ogImage:k,canonicalUrl:t,noindex:w=!1}){const S=O(),i=T(S.pathname),l=i?.title||s,p=i?.description||d,u=i?.keywords?.join(", ")||g,m=i?.ogTitle||f,h=i?.ogDescription||c,r=i?.ogImage||k;return y.useEffect(()=>{document.title=l;const e=(I,M,E=!1)=>{const C=E?"property":"name",z=`meta[${C}="${I}"]`;let n=document.querySelector(z);n?n.setAttribute("content",M):(n=document.createElement("meta"),n.setAttribute(C,I),n.setAttribute("content",M),document.head.appendChild(n))};e("description",p),u&&e("keywords",u),e("robots",w?"noindex, nofollow":"index, follow"),e("og:title",m||l,!0),e("og:description",h||p,!0),e("og:type","website",!0),e("og:locale","en_US",!0),e("og:site_name","Ultra Roofing",!0),t&&e("og:url",t,!0),r&&e("og:image",r,!0),e("twitter:card","summary_large_image"),e("twitter:title",m||l),e("twitter:description",h||p),r&&e("twitter:image",r);const b=t||`https://ultraroofingtx.net${window.location.pathname}`;let a=document.querySelector('link[rel="canonical"]');a?a.setAttribute("href",b):(a=document.createElement("link"),a.setAttribute("rel","canonical"),a.setAttribute("href",b),document.head.appendChild(a))},[l,p,u,m,h,r,t,w]),null}export{D as C,Z as F,j as M,v as S,_ as T,$ as a,q as b,A as c};
