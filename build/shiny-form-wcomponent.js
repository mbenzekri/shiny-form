/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$3=Symbol(),n$5=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$1&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$3),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$3)},i$2=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$2=window.trustedTypes,r$1=e$2?e$2.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$4};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$2.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i$1=globalThis.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e$1,n$3=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$3:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$1+y):s+e$1+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$1),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$1,t+1));)c.push({type:7,index:r}),t+=e$1.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$1?i$1.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.6");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

const bootstrapCss = r$2 `
@charset "UTF-8";
/*!
 * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus {
  outline: dotted 1px;
  outline: -webkit-focus-ring-color auto 5px;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: #6c757d;
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) / -2);
  margin-left: calc(var(--bs-gutter-x) / -2);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.3333333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.6666666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.3333333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.6666666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.3333333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.6666666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.3333333333%;
}

.offset-2 {
  margin-left: 16.6666666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.3333333333%;
}

.offset-5 {
  margin-left: 41.6666666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.3333333333%;
}

.offset-8 {
  margin-left: 66.6666666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.3333333333%;
}

.offset-11 {
  margin-left: 91.6666666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.3333333333%;
  }

  .offset-sm-2 {
    margin-left: 16.6666666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.3333333333%;
  }

  .offset-sm-5 {
    margin-left: 41.6666666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.3333333333%;
  }

  .offset-sm-8 {
    margin-left: 66.6666666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.3333333333%;
  }

  .offset-sm-11 {
    margin-left: 91.6666666667%;
  }

  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0;
  }

  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0;
  }

  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem;
  }

  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem;
  }

  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem;
  }

  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.3333333333%;
  }

  .offset-md-2 {
    margin-left: 16.6666666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.3333333333%;
  }

  .offset-md-5 {
    margin-left: 41.6666666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.3333333333%;
  }

  .offset-md-8 {
    margin-left: 66.6666666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.3333333333%;
  }

  .offset-md-11 {
    margin-left: 91.6666666667%;
  }

  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0;
  }

  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0;
  }

  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem;
  }

  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem;
  }

  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem;
  }

  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.3333333333%;
  }

  .offset-lg-2 {
    margin-left: 16.6666666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.3333333333%;
  }

  .offset-lg-5 {
    margin-left: 41.6666666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.3333333333%;
  }

  .offset-lg-8 {
    margin-left: 66.6666666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.3333333333%;
  }

  .offset-lg-11 {
    margin-left: 91.6666666667%;
  }

  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0;
  }

  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0;
  }

  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem;
  }

  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem;
  }

  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }

  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }

  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }

  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }

  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }

  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }

  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }

  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.3333333333%;
  }

  .offset-xl-2 {
    margin-left: 16.6666666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.3333333333%;
  }

  .offset-xl-5 {
    margin-left: 41.6666666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.3333333333%;
  }

  .offset-xl-8 {
    margin-left: 66.6666666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.3333333333%;
  }

  .offset-xl-11 {
    margin-left: 91.6666666667%;
  }

  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0;
  }

  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0;
  }

  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }

  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.3333333333%;
  }

  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }

  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.3333333333%;
  }

  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.6666666667%;
  }

  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.3333333333%;
  }

  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.6666666667%;
  }

  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xxl-0 {
    margin-left: 0;
  }

  .offset-xxl-1 {
    margin-left: 8.3333333333%;
  }

  .offset-xxl-2 {
    margin-left: 16.6666666667%;
  }

  .offset-xxl-3 {
    margin-left: 25%;
  }

  .offset-xxl-4 {
    margin-left: 33.3333333333%;
  }

  .offset-xxl-5 {
    margin-left: 41.6666666667%;
  }

  .offset-xxl-6 {
    margin-left: 50%;
  }

  .offset-xxl-7 {
    margin-left: 58.3333333333%;
  }

  .offset-xxl-8 {
    margin-left: 66.6666666667%;
  }

  .offset-xxl-9 {
    margin-left: 75%;
  }

  .offset-xxl-10 {
    margin-left: 83.3333333333%;
  }

  .offset-xxl-11 {
    margin-left: 91.6666666667%;
  }

  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0;
  }

  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0;
  }

  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg));
  border-bottom-width: 1px;
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: currentColor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}

.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}

.table-hover > tbody > tr:hover {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}

.table-primary {
  --bs-table-bg: #cfe2ff;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bacbe6;
}

.table-secondary {
  --bs-table-bg: #e2e3e5;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #cbccce;
}

.table-success {
  --bs-table-bg: #d1e7dd;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}

.table-info {
  --bs-table-bg: #cff4fc;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}

.table-warning {
  --bs-table-bg: #fff3cd;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}

.table-danger {
  --bs-table-bg: #f8d7da;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}

.table-light {
  --bs-table-bg: #f8f9fa;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfe0e1;
}

.table-dark {
  --bs-table-bg: #212529;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373b3e;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + 0.75rem + 2px);
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
}

.form-control-color {
  max-width: 3rem;
  height: auto;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}
.form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  vertical-align: middle;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  transition: background-color 0.15s ease-in-out, background-position 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-check-input {
    transition: none;
  }
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-range:focus {
  outline: none;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  padding: 1rem 0.75rem;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control::-webkit-input-placeholder {
  color: transparent;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 1.75rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: #198754;
  padding-right: calc(0.75em + 2.3125rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 1.75rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: #dc3545;
  padding-right: calc(0.75em + 2.3125rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 1.75rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
}
.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0a58ca;
  border-color: #0a53be;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
}
.btn-check:focus + .btn-secondary, .btn-secondary:focus {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #565e64;
  border-color: #51585e;
}
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-secondary:disabled, .btn-secondary.disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.btn-check:focus + .btn-success, .btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-success:disabled, .btn-success.disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.btn-check:focus + .btn-info, .btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-info:disabled, .btn-info.disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-warning, .btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-warning:disabled, .btn-warning.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-danger, .btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger:disabled, .btn-danger.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-light:hover {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:focus + .btn-light, .btn-light:focus {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-light:disabled, .btn-light.disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-dark:hover {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
}
.btn-check:focus + .btn-dark, .btn-dark:focus {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1a1e21;
  border-color: #191c1f;
}
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-dark:disabled, .btn-dark.disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #0d6efd;
  background-color: transparent;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success:disabled, .btn-outline-success.disabled {
  color: #198754;
  background-color: transparent;
}

.btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info:disabled, .btn-outline-info.disabled {
  color: #0dcaf0;
  background-color: transparent;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning:disabled, .btn-outline-warning.disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger:disabled, .btn-outline-danger.disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light:disabled, .btn-outline-light.disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-dark:disabled, .btn-outline-dark.disabled {
  color: #212529;
  background-color: transparent;
}

.btn-link {
  font-weight: 400;
  color: #0d6efd;
  text-decoration: underline;
}
.btn-link:hover {
  color: #0a58ca;
}
.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.dropdown-menu[style] {
  right: auto !important;
}

.dropdown-menu-start {
  --bs-position: start;
  right: auto /* rtl:ignore */;
  left: 0 /* rtl:ignore */;
}

.dropdown-menu-end {
  --bs-position: end;
  right: 0 /* rtl:ignore */;
  left: auto /* rtl:ignore */;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
    right: auto /* rtl:ignore */;
    left: 0 /* rtl:ignore */;
  }

  .dropdown-menu-sm-end {
    --bs-position: end;
    right: 0 /* rtl:ignore */;
    left: auto /* rtl:ignore */;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
    right: auto /* rtl:ignore */;
    left: 0 /* rtl:ignore */;
  }

  .dropdown-menu-md-end {
    --bs-position: end;
    right: 0 /* rtl:ignore */;
    left: auto /* rtl:ignore */;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
    right: auto /* rtl:ignore */;
    left: 0 /* rtl:ignore */;
  }

  .dropdown-menu-lg-end {
    --bs-position: end;
    right: 0 /* rtl:ignore */;
    left: auto /* rtl:ignore */;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
    right: auto /* rtl:ignore */;
    left: 0 /* rtl:ignore */;
  }

  .dropdown-menu-xl-end {
    --bs-position: end;
    right: 0 /* rtl:ignore */;
    left: auto /* rtl:ignore */;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
    right: auto /* rtl:ignore */;
    left: 0 /* rtl:ignore */;
  }

  .dropdown-menu-xxl-end {
    --bs-position: end;
    right: 0 /* rtl:ignore */;
    left: auto /* rtl:ignore */;
  }
}
.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #1e2125;
  background-color: #f8f9fa;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #0d6efd;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212529;
}

.dropdown-menu-dark {
  color: #dee2e6;
  background-color: #343a40;
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #0d6efd;
}
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: #adb5bd;
}
.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item-text {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-header {
  color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #0d6efd;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  align-items: center;
  width: 100%;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
}
.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1rem /* rtl:ignore */;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button.collapsed {
  border-bottom-width: 0;
}
.accordion-button:not(.collapsed) {
  color: #0c63e4;
  background-color: #e7f1ff;
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-width: 1px;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-width: 1px;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.accordion-collapse {
  border: solid rgba(0, 0, 0, 0.125);
  border-width: 0 1px;
}

.accordion-body {
  padding: 1rem 1.25rem;
}

.accordion-flush .accordion-button {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item:first-of-type .accordion-button {
  border-top-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.accordion-flush .accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-width: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: #0d6efd;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link:focus {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-link {
  padding: 0.375rem 0.75rem;
}

.page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.alert-primary .alert-link {
  color: #06357a;
}

.alert-secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.alert-secondary .alert-link {
  color: #34383c;
}

.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.alert-success .alert-link {
  color: #0c4128;
}

.alert-info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.alert-info .alert-link {
  color: #04414d;
}

.alert-warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.alert-warning .alert-link {
  color: #523e02;
}

.alert-danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.alert-danger .alert-link {
  color: #6a1a21;
}

.alert-light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-light .alert-link {
  color: #4f5050;
}

.alert-dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
.alert-dark .alert-link {
  color: #101214;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #0d6efd;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.toast:not(.showing):not(.show) {
  opacity: 0;
}
.toast.hide {
  display: none;
}

.toast-container {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.toast-header .btn-close {
  margin-right: -0.375rem;
  margin-left: 0.75rem;
}

.toast-body {
  padding: 0.75rem;
}

.modal-open {
  overflow: hidden;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}
.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top, .bs-popover-auto[data-popper-placement^=top] {
  margin-bottom: 0.5rem !important;
}
.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-end, .bs-popover-auto[data-popper-placement^=right] {
  margin-left: 0.5rem !important;
}
.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom, .bs-popover-auto[data-popper-placement^=bottom] {
  margin-top: 0.5rem !important;
}
.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}

.bs-popover-start, .bs-popover-auto[data-popper-placement^=left] {
  margin-right: 0.5rem !important;
}
.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #d8d8d8;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 1rem 1rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators li {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: 0.75s linear infinite spinner-grow;
  animation: 0.75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
.spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.link-primary {
  color: #0d6efd;
}
.link-primary:hover, .link-primary:focus {
  color: #0a58ca;
}

.link-secondary {
  color: #6c757d;
}
.link-secondary:hover, .link-secondary:focus {
  color: #565e64;
}

.link-success {
  color: #198754;
}
.link-success:hover, .link-success:focus {
  color: #146c43;
}

.link-info {
  color: #0dcaf0;
}
.link-info:hover, .link-info:focus {
  color: #3dd5f3;
}

.link-warning {
  color: #ffc107;
}
.link-warning:hover, .link-warning:focus {
  color: #ffcd39;
}

.link-danger {
  color: #dc3545;
}
.link-danger:hover, .link-danger:focus {
  color: #b02a37;
}

.link-light {
  color: #f8f9fa;
}
.link-light:hover, .link-light:focus {
  color: #f9fafb;
}

.link-dark {
  color: #212529;
}
.link-dark:hover, .link-dark:focus {
  color: #1a1e21;
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --aspect-ratio: 100%;
}

.ratio-4x3 {
  --aspect-ratio: calc(3 / 4 * 100%);
}

.ratio-16x9 {
  --aspect-ratio: calc(9 / 16 * 100%);
}

.ratio-21x9 {
  --aspect-ratio: calc(9 / 21 * 100%);
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.visually-hidden,
.visually-hidden-focusable:not(:focus) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: 1px solid #dee2e6 !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: 1px solid #dee2e6 !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #0d6efd !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #198754 !important;
}

.border-info {
  border-color: #0dcaf0 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #212529 !important;
}

.border-white {
  border-color: #fff !important;
}

.border-0 {
  border-width: 0 !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-primary {
  color: #0d6efd !important;
}

.text-secondary {
  color: #6c757d !important;
}

.text-success {
  color: #198754 !important;
}

.text-info {
  color: #0dcaf0 !important;
}

.text-warning {
  color: #ffc107 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.text-light {
  color: #f8f9fa !important;
}

.text-dark {
  color: #212529 !important;
}

.text-white {
  color: #fff !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
  color: inherit !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.bg-primary {
  background-color: #0d6efd !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

.bg-success {
  background-color: #198754 !important;
}

.bg-info {
  background-color: #0dcaf0 !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-dark {
  background-color: #212529 !important;
}

.bg-body {
  background-color: #fff !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: 0.2rem !important;
}

.rounded-2 {
  border-radius: 0.25rem !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-end {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-start {
  border-bottom-left-radius: 0.25rem !important;
  border-top-left-radius: 0.25rem !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }

  .float-sm-end {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-grid {
    display: grid !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .d-sm-none {
    display: none !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-sm-0 {
    gap: 0 !important;
  }

  .gap-sm-1 {
    gap: 0.25rem !important;
  }

  .gap-sm-2 {
    gap: 0.5rem !important;
  }

  .gap-sm-3 {
    gap: 1rem !important;
  }

  .gap-sm-4 {
    gap: 1.5rem !important;
  }

  .gap-sm-5 {
    gap: 3rem !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }

  .order-sm-first {
    order: -1 !important;
  }

  .order-sm-0 {
    order: 0 !important;
  }

  .order-sm-1 {
    order: 1 !important;
  }

  .order-sm-2 {
    order: 2 !important;
  }

  .order-sm-3 {
    order: 3 !important;
  }

  .order-sm-4 {
    order: 4 !important;
  }

  .order-sm-5 {
    order: 5 !important;
  }

  .order-sm-last {
    order: 6 !important;
  }

  .m-sm-0 {
    margin: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-sm-0 {
    margin-top: 0 !important;
  }

  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mt-sm-3 {
    margin-top: 1rem !important;
  }

  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mt-sm-5 {
    margin-top: 3rem !important;
  }

  .mt-sm-auto {
    margin-top: auto !important;
  }

  .me-sm-0 {
    margin-right: 0 !important;
  }

  .me-sm-1 {
    margin-right: 0.25rem !important;
  }

  .me-sm-2 {
    margin-right: 0.5rem !important;
  }

  .me-sm-3 {
    margin-right: 1rem !important;
  }

  .me-sm-4 {
    margin-right: 1.5rem !important;
  }

  .me-sm-5 {
    margin-right: 3rem !important;
  }

  .me-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-0 {
    margin-bottom: 0 !important;
  }

  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }

  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }

  .mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ms-sm-0 {
    margin-left: 0 !important;
  }

  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }

  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }

  .ms-sm-3 {
    margin-left: 1rem !important;
  }

  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }

  .ms-sm-5 {
    margin-left: 3rem !important;
  }

  .ms-sm-auto {
    margin-left: auto !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-sm-0 {
    padding-top: 0 !important;
  }

  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pt-sm-3 {
    padding-top: 1rem !important;
  }

  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pt-sm-5 {
    padding-top: 3rem !important;
  }

  .pe-sm-0 {
    padding-right: 0 !important;
  }

  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pe-sm-3 {
    padding-right: 1rem !important;
  }

  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pe-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-0 {
    padding-bottom: 0 !important;
  }

  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .ps-sm-0 {
    padding-left: 0 !important;
  }

  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ps-sm-5 {
    padding-left: 3rem !important;
  }

  .text-sm-start {
    text-align: left !important;
  }

  .text-sm-end {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }

  .float-md-end {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-grid {
    display: grid !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .d-md-none {
    display: none !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-md-0 {
    gap: 0 !important;
  }

  .gap-md-1 {
    gap: 0.25rem !important;
  }

  .gap-md-2 {
    gap: 0.5rem !important;
  }

  .gap-md-3 {
    gap: 1rem !important;
  }

  .gap-md-4 {
    gap: 1.5rem !important;
  }

  .gap-md-5 {
    gap: 3rem !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }

  .order-md-first {
    order: -1 !important;
  }

  .order-md-0 {
    order: 0 !important;
  }

  .order-md-1 {
    order: 1 !important;
  }

  .order-md-2 {
    order: 2 !important;
  }

  .order-md-3 {
    order: 3 !important;
  }

  .order-md-4 {
    order: 4 !important;
  }

  .order-md-5 {
    order: 5 !important;
  }

  .order-md-last {
    order: 6 !important;
  }

  .m-md-0 {
    margin: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-md-0 {
    margin-top: 0 !important;
  }

  .mt-md-1 {
    margin-top: 0.25rem !important;
  }

  .mt-md-2 {
    margin-top: 0.5rem !important;
  }

  .mt-md-3 {
    margin-top: 1rem !important;
  }

  .mt-md-4 {
    margin-top: 1.5rem !important;
  }

  .mt-md-5 {
    margin-top: 3rem !important;
  }

  .mt-md-auto {
    margin-top: auto !important;
  }

  .me-md-0 {
    margin-right: 0 !important;
  }

  .me-md-1 {
    margin-right: 0.25rem !important;
  }

  .me-md-2 {
    margin-right: 0.5rem !important;
  }

  .me-md-3 {
    margin-right: 1rem !important;
  }

  .me-md-4 {
    margin-right: 1.5rem !important;
  }

  .me-md-5 {
    margin-right: 3rem !important;
  }

  .me-md-auto {
    margin-right: auto !important;
  }

  .mb-md-0 {
    margin-bottom: 0 !important;
  }

  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-md-3 {
    margin-bottom: 1rem !important;
  }

  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-md-5 {
    margin-bottom: 3rem !important;
  }

  .mb-md-auto {
    margin-bottom: auto !important;
  }

  .ms-md-0 {
    margin-left: 0 !important;
  }

  .ms-md-1 {
    margin-left: 0.25rem !important;
  }

  .ms-md-2 {
    margin-left: 0.5rem !important;
  }

  .ms-md-3 {
    margin-left: 1rem !important;
  }

  .ms-md-4 {
    margin-left: 1.5rem !important;
  }

  .ms-md-5 {
    margin-left: 3rem !important;
  }

  .ms-md-auto {
    margin-left: auto !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-md-0 {
    padding-top: 0 !important;
  }

  .pt-md-1 {
    padding-top: 0.25rem !important;
  }

  .pt-md-2 {
    padding-top: 0.5rem !important;
  }

  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .pt-md-5 {
    padding-top: 3rem !important;
  }

  .pe-md-0 {
    padding-right: 0 !important;
  }

  .pe-md-1 {
    padding-right: 0.25rem !important;
  }

  .pe-md-2 {
    padding-right: 0.5rem !important;
  }

  .pe-md-3 {
    padding-right: 1rem !important;
  }

  .pe-md-4 {
    padding-right: 1.5rem !important;
  }

  .pe-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-0 {
    padding-bottom: 0 !important;
  }

  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-md-3 {
    padding-bottom: 1rem !important;
  }

  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-md-5 {
    padding-bottom: 3rem !important;
  }

  .ps-md-0 {
    padding-left: 0 !important;
  }

  .ps-md-1 {
    padding-left: 0.25rem !important;
  }

  .ps-md-2 {
    padding-left: 0.5rem !important;
  }

  .ps-md-3 {
    padding-left: 1rem !important;
  }

  .ps-md-4 {
    padding-left: 1.5rem !important;
  }

  .ps-md-5 {
    padding-left: 3rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }

  .float-lg-end {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-grid {
    display: grid !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .d-lg-none {
    display: none !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-lg-0 {
    gap: 0 !important;
  }

  .gap-lg-1 {
    gap: 0.25rem !important;
  }

  .gap-lg-2 {
    gap: 0.5rem !important;
  }

  .gap-lg-3 {
    gap: 1rem !important;
  }

  .gap-lg-4 {
    gap: 1.5rem !important;
  }

  .gap-lg-5 {
    gap: 3rem !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }

  .order-lg-3 {
    order: 3 !important;
  }

  .order-lg-4 {
    order: 4 !important;
  }

  .order-lg-5 {
    order: 5 !important;
  }

  .order-lg-last {
    order: 6 !important;
  }

  .m-lg-0 {
    margin: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-lg-0 {
    margin-top: 0 !important;
  }

  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mt-lg-3 {
    margin-top: 1rem !important;
  }

  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mt-lg-5 {
    margin-top: 3rem !important;
  }

  .mt-lg-auto {
    margin-top: auto !important;
  }

  .me-lg-0 {
    margin-right: 0 !important;
  }

  .me-lg-1 {
    margin-right: 0.25rem !important;
  }

  .me-lg-2 {
    margin-right: 0.5rem !important;
  }

  .me-lg-3 {
    margin-right: 1rem !important;
  }

  .me-lg-4 {
    margin-right: 1.5rem !important;
  }

  .me-lg-5 {
    margin-right: 3rem !important;
  }

  .me-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-0 {
    margin-bottom: 0 !important;
  }

  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }

  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }

  .mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ms-lg-0 {
    margin-left: 0 !important;
  }

  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }

  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }

  .ms-lg-3 {
    margin-left: 1rem !important;
  }

  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }

  .ms-lg-5 {
    margin-left: 3rem !important;
  }

  .ms-lg-auto {
    margin-left: auto !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }

  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pt-lg-3 {
    padding-top: 1rem !important;
  }

  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pt-lg-5 {
    padding-top: 3rem !important;
  }

  .pe-lg-0 {
    padding-right: 0 !important;
  }

  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pe-lg-3 {
    padding-right: 1rem !important;
  }

  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pe-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-0 {
    padding-bottom: 0 !important;
  }

  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .ps-lg-0 {
    padding-left: 0 !important;
  }

  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }

  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }

  .ps-lg-3 {
    padding-left: 1rem !important;
  }

  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }

  .ps-lg-5 {
    padding-left: 3rem !important;
  }

  .text-lg-start {
    text-align: left !important;
  }

  .text-lg-end {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }

  .float-xl-end {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-grid {
    display: grid !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .d-xl-none {
    display: none !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xl-0 {
    gap: 0 !important;
  }

  .gap-xl-1 {
    gap: 0.25rem !important;
  }

  .gap-xl-2 {
    gap: 0.5rem !important;
  }

  .gap-xl-3 {
    gap: 1rem !important;
  }

  .gap-xl-4 {
    gap: 1.5rem !important;
  }

  .gap-xl-5 {
    gap: 3rem !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }

  .order-xl-first {
    order: -1 !important;
  }

  .order-xl-0 {
    order: 0 !important;
  }

  .order-xl-1 {
    order: 1 !important;
  }

  .order-xl-2 {
    order: 2 !important;
  }

  .order-xl-3 {
    order: 3 !important;
  }

  .order-xl-4 {
    order: 4 !important;
  }

  .order-xl-5 {
    order: 5 !important;
  }

  .order-xl-last {
    order: 6 !important;
  }

  .m-xl-0 {
    margin: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xl-0 {
    margin-top: 0 !important;
  }

  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xl-3 {
    margin-top: 1rem !important;
  }

  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xl-5 {
    margin-top: 3rem !important;
  }

  .mt-xl-auto {
    margin-top: auto !important;
  }

  .me-xl-0 {
    margin-right: 0 !important;
  }

  .me-xl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xl-3 {
    margin-right: 1rem !important;
  }

  .me-xl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xl-5 {
    margin-right: 3rem !important;
  }

  .me-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ms-xl-0 {
    margin-left: 0 !important;
  }

  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xl-3 {
    margin-left: 1rem !important;
  }

  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xl-5 {
    margin-left: 3rem !important;
  }

  .ms-xl-auto {
    margin-left: auto !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xl-0 {
    padding-top: 0 !important;
  }

  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xl-3 {
    padding-top: 1rem !important;
  }

  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xl-5 {
    padding-top: 3rem !important;
  }

  .pe-xl-0 {
    padding-right: 0 !important;
  }

  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xl-3 {
    padding-right: 1rem !important;
  }

  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xl-0 {
    padding-left: 0 !important;
  }

  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xl-3 {
    padding-left: 1rem !important;
  }

  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xl-5 {
    padding-left: 3rem !important;
  }

  .text-xl-start {
    text-align: left !important;
  }

  .text-xl-end {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }

  .float-xxl-end {
    float: right !important;
  }

  .float-xxl-none {
    float: none !important;
  }

  .d-xxl-inline {
    display: inline !important;
  }

  .d-xxl-inline-block {
    display: inline-block !important;
  }

  .d-xxl-block {
    display: block !important;
  }

  .d-xxl-grid {
    display: grid !important;
  }

  .d-xxl-table {
    display: table !important;
  }

  .d-xxl-table-row {
    display: table-row !important;
  }

  .d-xxl-table-cell {
    display: table-cell !important;
  }

  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .d-xxl-none {
    display: none !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xxl-0 {
    gap: 0 !important;
  }

  .gap-xxl-1 {
    gap: 0.25rem !important;
  }

  .gap-xxl-2 {
    gap: 0.5rem !important;
  }

  .gap-xxl-3 {
    gap: 1rem !important;
  }

  .gap-xxl-4 {
    gap: 1.5rem !important;
  }

  .gap-xxl-5 {
    gap: 3rem !important;
  }

  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xxl-center {
    justify-content: center !important;
  }

  .justify-content-xxl-between {
    justify-content: space-between !important;
  }

  .justify-content-xxl-around {
    justify-content: space-around !important;
  }

  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xxl-start {
    align-items: flex-start !important;
  }

  .align-items-xxl-end {
    align-items: flex-end !important;
  }

  .align-items-xxl-center {
    align-items: center !important;
  }

  .align-items-xxl-baseline {
    align-items: baseline !important;
  }

  .align-items-xxl-stretch {
    align-items: stretch !important;
  }

  .align-content-xxl-start {
    align-content: flex-start !important;
  }

  .align-content-xxl-end {
    align-content: flex-end !important;
  }

  .align-content-xxl-center {
    align-content: center !important;
  }

  .align-content-xxl-between {
    align-content: space-between !important;
  }

  .align-content-xxl-around {
    align-content: space-around !important;
  }

  .align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .align-self-xxl-auto {
    align-self: auto !important;
  }

  .align-self-xxl-start {
    align-self: flex-start !important;
  }

  .align-self-xxl-end {
    align-self: flex-end !important;
  }

  .align-self-xxl-center {
    align-self: center !important;
  }

  .align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .order-xxl-first {
    order: -1 !important;
  }

  .order-xxl-0 {
    order: 0 !important;
  }

  .order-xxl-1 {
    order: 1 !important;
  }

  .order-xxl-2 {
    order: 2 !important;
  }

  .order-xxl-3 {
    order: 3 !important;
  }

  .order-xxl-4 {
    order: 4 !important;
  }

  .order-xxl-5 {
    order: 5 !important;
  }

  .order-xxl-last {
    order: 6 !important;
  }

  .m-xxl-0 {
    margin: 0 !important;
  }

  .m-xxl-1 {
    margin: 0.25rem !important;
  }

  .m-xxl-2 {
    margin: 0.5rem !important;
  }

  .m-xxl-3 {
    margin: 1rem !important;
  }

  .m-xxl-4 {
    margin: 1.5rem !important;
  }

  .m-xxl-5 {
    margin: 3rem !important;
  }

  .m-xxl-auto {
    margin: auto !important;
  }

  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xxl-0 {
    margin-top: 0 !important;
  }

  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xxl-3 {
    margin-top: 1rem !important;
  }

  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xxl-5 {
    margin-top: 3rem !important;
  }

  .mt-xxl-auto {
    margin-top: auto !important;
  }

  .me-xxl-0 {
    margin-right: 0 !important;
  }

  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xxl-3 {
    margin-right: 1rem !important;
  }

  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xxl-5 {
    margin-right: 3rem !important;
  }

  .me-xxl-auto {
    margin-right: auto !important;
  }

  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ms-xxl-0 {
    margin-left: 0 !important;
  }

  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xxl-3 {
    margin-left: 1rem !important;
  }

  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xxl-5 {
    margin-left: 3rem !important;
  }

  .ms-xxl-auto {
    margin-left: auto !important;
  }

  .p-xxl-0 {
    padding: 0 !important;
  }

  .p-xxl-1 {
    padding: 0.25rem !important;
  }

  .p-xxl-2 {
    padding: 0.5rem !important;
  }

  .p-xxl-3 {
    padding: 1rem !important;
  }

  .p-xxl-4 {
    padding: 1.5rem !important;
  }

  .p-xxl-5 {
    padding: 3rem !important;
  }

  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xxl-0 {
    padding-top: 0 !important;
  }

  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xxl-3 {
    padding-top: 1rem !important;
  }

  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xxl-5 {
    padding-top: 3rem !important;
  }

  .pe-xxl-0 {
    padding-right: 0 !important;
  }

  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xxl-3 {
    padding-right: 1rem !important;
  }

  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xxl-5 {
    padding-right: 3rem !important;
  }

  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xxl-0 {
    padding-left: 0 !important;
  }

  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xxl-3 {
    padding-left: 1rem !important;
  }

  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xxl-5 {
    padding-left: 3rem !important;
  }

  .text-xxl-start {
    text-align: left !important;
  }

  .text-xxl-end {
    text-align: right !important;
  }

  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }

  .fs-2 {
    font-size: 2rem !important;
  }

  .fs-3 {
    font-size: 1.75rem !important;
  }

  .fs-4 {
    font-size: 1.5rem !important;
  }

  .fs-sm-1 {
    font-size: 2.5rem !important;
  }

  .fs-sm-2 {
    font-size: 2rem !important;
  }

  .fs-sm-3 {
    font-size: 1.75rem !important;
  }

  .fs-sm-4 {
    font-size: 1.5rem !important;
  }

  .fs-md-1 {
    font-size: 2.5rem !important;
  }

  .fs-md-2 {
    font-size: 2rem !important;
  }

  .fs-md-3 {
    font-size: 1.75rem !important;
  }

  .fs-md-4 {
    font-size: 1.5rem !important;
  }

  .fs-lg-1 {
    font-size: 2.5rem !important;
  }

  .fs-lg-2 {
    font-size: 2rem !important;
  }

  .fs-lg-3 {
    font-size: 1.75rem !important;
  }

  .fs-lg-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-grid {
    display: grid !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }

  .d-print-none {
    display: none !important;
  }
}
`;

var bootstrapWoff = "data:font/woff;base64,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";

var bootstrapWoff2 = "data:font/woff2;base64,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";

// le CSS suivant n'est pas pris en compte dans les styles de components static get styles()
// on fait en contournement le chargement a l'aide de l'api FontFace
// @font-face {
//     font-family: "bootstrap-icons";
//     src: url("${ unsafeCSS(bootstrapWoff2)}") format("woff2"),url("${ unsafeCSS(bootstrapWoff)}") format("woff");
// }
const fonts = [
    new FontFace("bootstrap-icons", `url("${bootstrapWoff2}")`),
    new FontFace("bootstrap-icons", `url("${bootstrapWoff}")`)
];
Promise.all(fonts.map(font => font.load())).then((fonts) => {
    fonts.forEach(font => {
        document.fonts.add(font);
    });
    console.log("FONTS LOADED");
});
const bootstrapIconsCss = r$2 `
  [class^="bi-"]::before,
  [class*=" bi-"]::before {
    display: inline-block;
    font-family: bootstrap-icons !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -.125em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .bi-alarm-fill::before { content: "\\f101"; }
  .bi-alarm::before { content: "\\f102"; }
  .bi-align-bottom::before { content: "\\f103"; }
  .bi-align-center::before { content: "\\f104"; }
  .bi-align-end::before { content: "\\f105"; }
  .bi-align-middle::before { content: "\\f106"; }
  .bi-align-start::before { content: "\\f107"; }
  .bi-align-top::before { content: "\\f108"; }
  .bi-alt::before { content: "\\f109"; }
  .bi-app-indicator::before { content: "\\f10a"; }
  .bi-app::before { content: "\\f10b"; }
  .bi-archive-fill::before { content: "\\f10c"; }
  .bi-archive::before { content: "\\f10d"; }
  .bi-arrow-90deg-down::before { content: "\\f10e"; }
  .bi-arrow-90deg-left::before { content: "\\f10f"; }
  .bi-arrow-90deg-right::before { content: "\\f110"; }
  .bi-arrow-90deg-up::before { content: "\\f111"; }
  .bi-arrow-bar-down::before { content: "\\f112"; }
  .bi-arrow-bar-left::before { content: "\\f113"; }
  .bi-arrow-bar-right::before { content: "\\f114"; }
  .bi-arrow-bar-up::before { content: "\\f115"; }
  .bi-arrow-clockwise::before { content: "\\f116"; }
  .bi-arrow-counterclockwise::before { content: "\\f117"; }
  .bi-arrow-down-circle-fill::before { content: "\\f118"; }
  .bi-arrow-down-circle::before { content: "\\f119"; }
  .bi-arrow-down-left-circle-fill::before { content: "\\f11a"; }
  .bi-arrow-down-left-circle::before { content: "\\f11b"; }
  .bi-arrow-down-left-square-fill::before { content: "\\f11c"; }
  .bi-arrow-down-left-square::before { content: "\\f11d"; }
  .bi-arrow-down-left::before { content: "\\f11e"; }
  .bi-arrow-down-right-circle-fill::before { content: "\\f11f"; }
  .bi-arrow-down-right-circle::before { content: "\\f120"; }
  .bi-arrow-down-right-square-fill::before { content: "\\f121"; }
  .bi-arrow-down-right-square::before { content: "\\f122"; }
  .bi-arrow-down-right::before { content: "\\f123"; }
  .bi-arrow-down-short::before { content: "\\f124"; }
  .bi-arrow-down-square-fill::before { content: "\\f125"; }
  .bi-arrow-down-square::before { content: "\\f126"; }
  .bi-arrow-down-up::before { content: "\\f127"; }
  .bi-arrow-down::before { content: "\\f128"; }
  .bi-arrow-left-circle-fill::before { content: "\\f129"; }
  .bi-arrow-left-circle::before { content: "\\f12a"; }
  .bi-arrow-left-right::before { content: "\\f12b"; }
  .bi-arrow-left-short::before { content: "\\f12c"; }
  .bi-arrow-left-square-fill::before { content: "\\f12d"; }
  .bi-arrow-left-square::before { content: "\\f12e"; }
  .bi-arrow-left::before { content: "\\f12f"; }
  .bi-arrow-repeat::before { content: "\\f130"; }
  .bi-arrow-return-left::before { content: "\\f131"; }
  .bi-arrow-return-right::before { content: "\\f132"; }
  .bi-arrow-right-circle-fill::before { content: "\\f133"; }
  .bi-arrow-right-circle::before { content: "\\f134"; }
  .bi-arrow-right-short::before { content: "\\f135"; }
  .bi-arrow-right-square-fill::before { content: "\\f136"; }
  .bi-arrow-right-square::before { content: "\\f137"; }
  .bi-arrow-right::before { content: "\\f138"; }
  .bi-arrow-up-circle-fill::before { content: "\\f139"; }
  .bi-arrow-up-circle::before { content: "\\f13a"; }
  .bi-arrow-up-left-circle-fill::before { content: "\\f13b"; }
  .bi-arrow-up-left-circle::before { content: "\\f13c"; }
  .bi-arrow-up-left-square-fill::before { content: "\\f13d"; }
  .bi-arrow-up-left-square::before { content: "\\f13e"; }
  .bi-arrow-up-left::before { content: "\\f13f"; }
  .bi-arrow-up-right-circle-fill::before { content: "\\f140"; }
  .bi-arrow-up-right-circle::before { content: "\\f141"; }
  .bi-arrow-up-right-square-fill::before { content: "\\f142"; }
  .bi-arrow-up-right-square::before { content: "\\f143"; }
  .bi-arrow-up-right::before { content: "\\f144"; }
  .bi-arrow-up-short::before { content: "\\f145"; }
  .bi-arrow-up-square-fill::before { content: "\\f146"; }
  .bi-arrow-up-square::before { content: "\\f147"; }
  .bi-arrow-up::before { content: "\\f148"; }
  .bi-arrows-angle-contract::before { content: "\\f149"; }
  .bi-arrows-angle-expand::before { content: "\\f14a"; }
  .bi-arrows-collapse::before { content: "\\f14b"; }
  .bi-arrows-expand::before { content: "\\f14c"; }
  .bi-arrows-fullscreen::before { content: "\\f14d"; }
  .bi-arrows-move::before { content: "\\f14e"; }
  .bi-aspect-ratio-fill::before { content: "\\f14f"; }
  .bi-aspect-ratio::before { content: "\\f150"; }
  .bi-asterisk::before { content: "\\f151"; }
  .bi-at::before { content: "\\f152"; }
  .bi-award-fill::before { content: "\\f153"; }
  .bi-award::before { content: "\\f154"; }
  .bi-back::before { content: "\\f155"; }
  .bi-backspace-fill::before { content: "\\f156"; }
  .bi-backspace-reverse-fill::before { content: "\\f157"; }
  .bi-backspace-reverse::before { content: "\\f158"; }
  .bi-backspace::before { content: "\\f159"; }
  .bi-badge-3d-fill::before { content: "\\f15a"; }
  .bi-badge-3d::before { content: "\\f15b"; }
  .bi-badge-4k-fill::before { content: "\\f15c"; }
  .bi-badge-4k::before { content: "\\f15d"; }
  .bi-badge-8k-fill::before { content: "\\f15e"; }
  .bi-badge-8k::before { content: "\\f15f"; }
  .bi-badge-ad-fill::before { content: "\\f160"; }
  .bi-badge-ad::before { content: "\\f161"; }
  .bi-badge-ar-fill::before { content: "\\f162"; }
  .bi-badge-ar::before { content: "\\f163"; }
  .bi-badge-cc-fill::before { content: "\\f164"; }
  .bi-badge-cc::before { content: "\\f165"; }
  .bi-badge-hd-fill::before { content: "\\f166"; }
  .bi-badge-hd::before { content: "\\f167"; }
  .bi-badge-tm-fill::before { content: "\\f168"; }
  .bi-badge-tm::before { content: "\\f169"; }
  .bi-badge-vo-fill::before { content: "\\f16a"; }
  .bi-badge-vo::before { content: "\\f16b"; }
  .bi-badge-vr-fill::before { content: "\\f16c"; }
  .bi-badge-vr::before { content: "\\f16d"; }
  .bi-badge-wc-fill::before { content: "\\f16e"; }
  .bi-badge-wc::before { content: "\\f16f"; }
  .bi-bag-check-fill::before { content: "\\f170"; }
  .bi-bag-check::before { content: "\\f171"; }
  .bi-bag-dash-fill::before { content: "\\f172"; }
  .bi-bag-dash::before { content: "\\f173"; }
  .bi-bag-fill::before { content: "\\f174"; }
  .bi-bag-plus-fill::before { content: "\\f175"; }
  .bi-bag-plus::before { content: "\\f176"; }
  .bi-bag-x-fill::before { content: "\\f177"; }
  .bi-bag-x::before { content: "\\f178"; }
  .bi-bag::before { content: "\\f179"; }
  .bi-bar-chart-fill::before { content: "\\f17a"; }
  .bi-bar-chart-line-fill::before { content: "\\f17b"; }
  .bi-bar-chart-line::before { content: "\\f17c"; }
  .bi-bar-chart-steps::before { content: "\\f17d"; }
  .bi-bar-chart::before { content: "\\f17e"; }
  .bi-basket-fill::before { content: "\\f17f"; }
  .bi-basket::before { content: "\\f180"; }
  .bi-basket2-fill::before { content: "\\f181"; }
  .bi-basket2::before { content: "\\f182"; }
  .bi-basket3-fill::before { content: "\\f183"; }
  .bi-basket3::before { content: "\\f184"; }
  .bi-battery-charging::before { content: "\\f185"; }
  .bi-battery-full::before { content: "\\f186"; }
  .bi-battery-half::before { content: "\\f187"; }
  .bi-battery::before { content: "\\f188"; }
  .bi-bell-fill::before { content: "\\f189"; }
  .bi-bell::before { content: "\\f18a"; }
  .bi-bezier::before { content: "\\f18b"; }
  .bi-bezier2::before { content: "\\f18c"; }
  .bi-bicycle::before { content: "\\f18d"; }
  .bi-binoculars-fill::before { content: "\\f18e"; }
  .bi-binoculars::before { content: "\\f18f"; }
  .bi-blockquote-left::before { content: "\\f190"; }
  .bi-blockquote-right::before { content: "\\f191"; }
  .bi-book-fill::before { content: "\\f192"; }
  .bi-book-half::before { content: "\\f193"; }
  .bi-book::before { content: "\\f194"; }
  .bi-bookmark-check-fill::before { content: "\\f195"; }
  .bi-bookmark-check::before { content: "\\f196"; }
  .bi-bookmark-dash-fill::before { content: "\\f197"; }
  .bi-bookmark-dash::before { content: "\\f198"; }
  .bi-bookmark-fill::before { content: "\\f199"; }
  .bi-bookmark-heart-fill::before { content: "\\f19a"; }
  .bi-bookmark-heart::before { content: "\\f19b"; }
  .bi-bookmark-plus-fill::before { content: "\\f19c"; }
  .bi-bookmark-plus::before { content: "\\f19d"; }
  .bi-bookmark-star-fill::before { content: "\\f19e"; }
  .bi-bookmark-star::before { content: "\\f19f"; }
  .bi-bookmark-x-fill::before { content: "\\f1a0"; }
  .bi-bookmark-x::before { content: "\\f1a1"; }
  .bi-bookmark::before { content: "\\f1a2"; }
  .bi-bookmarks-fill::before { content: "\\f1a3"; }
  .bi-bookmarks::before { content: "\\f1a4"; }
  .bi-bookshelf::before { content: "\\f1a5"; }
  .bi-bootstrap-fill::before { content: "\\f1a6"; }
  .bi-bootstrap-reboot::before { content: "\\f1a7"; }
  .bi-bootstrap::before { content: "\\f1a8"; }
  .bi-border-all::before { content: "\\f1a9"; }
  .bi-border-bottom::before { content: "\\f1aa"; }
  .bi-border-center::before { content: "\\f1ab"; }
  .bi-border-inner::before { content: "\\f1ac"; }
  .bi-border-left::before { content: "\\f1ad"; }
  .bi-border-middle::before { content: "\\f1ae"; }
  .bi-border-outer::before { content: "\\f1af"; }
  .bi-border-right::before { content: "\\f1b0"; }
  .bi-border-style::before { content: "\\f1b1"; }
  .bi-border-top::before { content: "\\f1b2"; }
  .bi-border-width::before { content: "\\f1b3"; }
  .bi-border::before { content: "\\f1b4"; }
  .bi-bounding-box-circles::before { content: "\\f1b5"; }
  .bi-bounding-box::before { content: "\\f1b6"; }
  .bi-box-arrow-down-left::before { content: "\\f1b7"; }
  .bi-box-arrow-down-right::before { content: "\\f1b8"; }
  .bi-box-arrow-down::before { content: "\\f1b9"; }
  .bi-box-arrow-in-down-left::before { content: "\\f1ba"; }
  .bi-box-arrow-in-down-right::before { content: "\\f1bb"; }
  .bi-box-arrow-in-down::before { content: "\\f1bc"; }
  .bi-box-arrow-in-left::before { content: "\\f1bd"; }
  .bi-box-arrow-in-right::before { content: "\\f1be"; }
  .bi-box-arrow-in-up-left::before { content: "\\f1bf"; }
  .bi-box-arrow-in-up-right::before { content: "\\f1c0"; }
  .bi-box-arrow-in-up::before { content: "\\f1c1"; }
  .bi-box-arrow-left::before { content: "\\f1c2"; }
  .bi-box-arrow-right::before { content: "\\f1c3"; }
  .bi-box-arrow-up-left::before { content: "\\f1c4"; }
  .bi-box-arrow-up-right::before { content: "\\f1c5"; }
  .bi-box-arrow-up::before { content: "\\f1c6"; }
  .bi-box-seam::before { content: "\\f1c7"; }
  .bi-box::before { content: "\\f1c8"; }
  .bi-braces::before { content: "\\f1c9"; }
  .bi-bricks::before { content: "\\f1ca"; }
  .bi-briefcase-fill::before { content: "\\f1cb"; }
  .bi-briefcase::before { content: "\\f1cc"; }
  .bi-brightness-alt-high-fill::before { content: "\\f1cd"; }
  .bi-brightness-alt-high::before { content: "\\f1ce"; }
  .bi-brightness-alt-low-fill::before { content: "\\f1cf"; }
  .bi-brightness-alt-low::before { content: "\\f1d0"; }
  .bi-brightness-high-fill::before { content: "\\f1d1"; }
  .bi-brightness-high::before { content: "\\f1d2"; }
  .bi-brightness-low-fill::before { content: "\\f1d3"; }
  .bi-brightness-low::before { content: "\\f1d4"; }
  .bi-broadcast-pin::before { content: "\\f1d5"; }
  .bi-broadcast::before { content: "\\f1d6"; }
  .bi-brush-fill::before { content: "\\f1d7"; }
  .bi-brush::before { content: "\\f1d8"; }
  .bi-bucket-fill::before { content: "\\f1d9"; }
  .bi-bucket::before { content: "\\f1da"; }
  .bi-bug-fill::before { content: "\\f1db"; }
  .bi-bug::before { content: "\\f1dc"; }
  .bi-building::before { content: "\\f1dd"; }
  .bi-bullseye::before { content: "\\f1de"; }
  .bi-calculator-fill::before { content: "\\f1df"; }
  .bi-calculator::before { content: "\\f1e0"; }
  .bi-calendar-check-fill::before { content: "\\f1e1"; }
  .bi-calendar-check::before { content: "\\f1e2"; }
  .bi-calendar-date-fill::before { content: "\\f1e3"; }
  .bi-calendar-date::before { content: "\\f1e4"; }
  .bi-calendar-day-fill::before { content: "\\f1e5"; }
  .bi-calendar-day::before { content: "\\f1e6"; }
  .bi-calendar-event-fill::before { content: "\\f1e7"; }
  .bi-calendar-event::before { content: "\\f1e8"; }
  .bi-calendar-fill::before { content: "\\f1e9"; }
  .bi-calendar-minus-fill::before { content: "\\f1ea"; }
  .bi-calendar-minus::before { content: "\\f1eb"; }
  .bi-calendar-month-fill::before { content: "\\f1ec"; }
  .bi-calendar-month::before { content: "\\f1ed"; }
  .bi-calendar-plus-fill::before { content: "\\f1ee"; }
  .bi-calendar-plus::before { content: "\\f1ef"; }
  .bi-calendar-range-fill::before { content: "\\f1f0"; }
  .bi-calendar-range::before { content: "\\f1f1"; }
  .bi-calendar-week-fill::before { content: "\\f1f2"; }
  .bi-calendar-week::before { content: "\\f1f3"; }
  .bi-calendar-x-fill::before { content: "\\f1f4"; }
  .bi-calendar-x::before { content: "\\f1f5"; }
  .bi-calendar::before { content: "\\f1f6"; }
  .bi-calendar2-check-fill::before { content: "\\f1f7"; }
  .bi-calendar2-check::before { content: "\\f1f8"; }
  .bi-calendar2-date-fill::before { content: "\\f1f9"; }
  .bi-calendar2-date::before { content: "\\f1fa"; }
  .bi-calendar2-day-fill::before { content: "\\f1fb"; }
  .bi-calendar2-day::before { content: "\\f1fc"; }
  .bi-calendar2-event-fill::before { content: "\\f1fd"; }
  .bi-calendar2-event::before { content: "\\f1fe"; }
  .bi-calendar2-fill::before { content: "\\f1ff"; }
  .bi-calendar2-minus-fill::before { content: "\\f200"; }
  .bi-calendar2-minus::before { content: "\\f201"; }
  .bi-calendar2-month-fill::before { content: "\\f202"; }
  .bi-calendar2-month::before { content: "\\f203"; }
  .bi-calendar2-plus-fill::before { content: "\\f204"; }
  .bi-calendar2-plus::before { content: "\\f205"; }
  .bi-calendar2-range-fill::before { content: "\\f206"; }
  .bi-calendar2-range::before { content: "\\f207"; }
  .bi-calendar2-week-fill::before { content: "\\f208"; }
  .bi-calendar2-week::before { content: "\\f209"; }
  .bi-calendar2-x-fill::before { content: "\\f20a"; }
  .bi-calendar2-x::before { content: "\\f20b"; }
  .bi-calendar2::before { content: "\\f20c"; }
  .bi-calendar3-event-fill::before { content: "\\f20d"; }
  .bi-calendar3-event::before { content: "\\f20e"; }
  .bi-calendar3-fill::before { content: "\\f20f"; }
  .bi-calendar3-range-fill::before { content: "\\f210"; }
  .bi-calendar3-range::before { content: "\\f211"; }
  .bi-calendar3-week-fill::before { content: "\\f212"; }
  .bi-calendar3-week::before { content: "\\f213"; }
  .bi-calendar3::before { content: "\\f214"; }
  .bi-calendar4-event::before { content: "\\f215"; }
  .bi-calendar4-range::before { content: "\\f216"; }
  .bi-calendar4-week::before { content: "\\f217"; }
  .bi-calendar4::before { content: "\\f218"; }
  .bi-camera-fill::before { content: "\\f219"; }
  .bi-camera-reels-fill::before { content: "\\f21a"; }
  .bi-camera-reels::before { content: "\\f21b"; }
  .bi-camera-video-fill::before { content: "\\f21c"; }
  .bi-camera-video-off-fill::before { content: "\\f21d"; }
  .bi-camera-video-off::before { content: "\\f21e"; }
  .bi-camera-video::before { content: "\\f21f"; }
  .bi-camera::before { content: "\\f220"; }
  .bi-camera2::before { content: "\\f221"; }
  .bi-capslock-fill::before { content: "\\f222"; }
  .bi-capslock::before { content: "\\f223"; }
  .bi-card-checklist::before { content: "\\f224"; }
  .bi-card-heading::before { content: "\\f225"; }
  .bi-card-image::before { content: "\\f226"; }
  .bi-card-list::before { content: "\\f227"; }
  .bi-card-text::before { content: "\\f228"; }
  .bi-caret-down-fill::before { content: "\\f229"; }
  .bi-caret-down-square-fill::before { content: "\\f22a"; }
  .bi-caret-down-square::before { content: "\\f22b"; }
  .bi-caret-down::before { content: "\\f22c"; }
  .bi-caret-left-fill::before { content: "\\f22d"; }
  .bi-caret-left-square-fill::before { content: "\\f22e"; }
  .bi-caret-left-square::before { content: "\\f22f"; }
  .bi-caret-left::before { content: "\\f230"; }
  .bi-caret-right-fill::before { content: "\\f231"; }
  .bi-caret-right-square-fill::before { content: "\\f232"; }
  .bi-caret-right-square::before { content: "\\f233"; }
  .bi-caret-right::before { content: "\\f234"; }
  .bi-caret-up-fill::before { content: "\\f235"; }
  .bi-caret-up-square-fill::before { content: "\\f236"; }
  .bi-caret-up-square::before { content: "\\f237"; }
  .bi-caret-up::before { content: "\\f238"; }
  .bi-cart-check-fill::before { content: "\\f239"; }
  .bi-cart-check::before { content: "\\f23a"; }
  .bi-cart-dash-fill::before { content: "\\f23b"; }
  .bi-cart-dash::before { content: "\\f23c"; }
  .bi-cart-fill::before { content: "\\f23d"; }
  .bi-cart-plus-fill::before { content: "\\f23e"; }
  .bi-cart-plus::before { content: "\\f23f"; }
  .bi-cart-x-fill::before { content: "\\f240"; }
  .bi-cart-x::before { content: "\\f241"; }
  .bi-cart::before { content: "\\f242"; }
  .bi-cart2::before { content: "\\f243"; }
  .bi-cart3::before { content: "\\f244"; }
  .bi-cart4::before { content: "\\f245"; }
  .bi-cash-stack::before { content: "\\f246"; }
  .bi-cash::before { content: "\\f247"; }
  .bi-cast::before { content: "\\f248"; }
  .bi-chat-dots-fill::before { content: "\\f249"; }
  .bi-chat-dots::before { content: "\\f24a"; }
  .bi-chat-fill::before { content: "\\f24b"; }
  .bi-chat-left-dots-fill::before { content: "\\f24c"; }
  .bi-chat-left-dots::before { content: "\\f24d"; }
  .bi-chat-left-fill::before { content: "\\f24e"; }
  .bi-chat-left-quote-fill::before { content: "\\f24f"; }
  .bi-chat-left-quote::before { content: "\\f250"; }
  .bi-chat-left-text-fill::before { content: "\\f251"; }
  .bi-chat-left-text::before { content: "\\f252"; }
  .bi-chat-left::before { content: "\\f253"; }
  .bi-chat-quote-fill::before { content: "\\f254"; }
  .bi-chat-quote::before { content: "\\f255"; }
  .bi-chat-right-dots-fill::before { content: "\\f256"; }
  .bi-chat-right-dots::before { content: "\\f257"; }
  .bi-chat-right-fill::before { content: "\\f258"; }
  .bi-chat-right-quote-fill::before { content: "\\f259"; }
  .bi-chat-right-quote::before { content: "\\f25a"; }
  .bi-chat-right-text-fill::before { content: "\\f25b"; }
  .bi-chat-right-text::before { content: "\\f25c"; }
  .bi-chat-right::before { content: "\\f25d"; }
  .bi-chat-square-dots-fill::before { content: "\\f25e"; }
  .bi-chat-square-dots::before { content: "\\f25f"; }
  .bi-chat-square-fill::before { content: "\\f260"; }
  .bi-chat-square-quote-fill::before { content: "\\f261"; }
  .bi-chat-square-quote::before { content: "\\f262"; }
  .bi-chat-square-text-fill::before { content: "\\f263"; }
  .bi-chat-square-text::before { content: "\\f264"; }
  .bi-chat-square::before { content: "\\f265"; }
  .bi-chat-text-fill::before { content: "\\f266"; }
  .bi-chat-text::before { content: "\\f267"; }
  .bi-chat::before { content: "\\f268"; }
  .bi-check-all::before { content: "\\f269"; }
  .bi-check-circle-fill::before { content: "\\f26a"; }
  .bi-check-circle::before { content: "\\f26b"; }
  .bi-check-square-fill::before { content: "\\f26c"; }
  .bi-check-square::before { content: "\\f26d"; }
  .bi-check::before { content: "\\f26e"; }
  .bi-check2-all::before { content: "\\f26f"; }
  .bi-check2-circle::before { content: "\\f270"; }
  .bi-check2-square::before { content: "\\f271"; }
  .bi-check2::before { content: "\\f272"; }
  .bi-chevron-bar-contract::before { content: "\\f273"; }
  .bi-chevron-bar-down::before { content: "\\f274"; }
  .bi-chevron-bar-expand::before { content: "\\f275"; }
  .bi-chevron-bar-left::before { content: "\\f276"; }
  .bi-chevron-bar-right::before { content: "\\f277"; }
  .bi-chevron-bar-up::before { content: "\\f278"; }
  .bi-chevron-compact-down::before { content: "\\f279"; }
  .bi-chevron-compact-left::before { content: "\\f27a"; }
  .bi-chevron-compact-right::before { content: "\\f27b"; }
  .bi-chevron-compact-up::before { content: "\\f27c"; }
  .bi-chevron-contract::before { content: "\\f27d"; }
  .bi-chevron-double-down::before { content: "\\f27e"; }
  .bi-chevron-double-left::before { content: "\\f27f"; }
  .bi-chevron-double-right::before { content: "\\f280"; }
  .bi-chevron-double-up::before { content: "\\f281"; }
  .bi-chevron-down::before { content: "\\f282"; }
  .bi-chevron-expand::before { content: "\\f283"; }
  .bi-chevron-left::before { content: "\\f284"; }
  .bi-chevron-right::before { content: "\\f285"; }
  .bi-chevron-up::before { content: "\\f286"; }
  .bi-circle-fill::before { content: "\\f287"; }
  .bi-circle-half::before { content: "\\f288"; }
  .bi-circle-square::before { content: "\\f289"; }
  .bi-circle::before { content: "\\f28a"; }
  .bi-clipboard-check::before { content: "\\f28b"; }
  .bi-clipboard-data::before { content: "\\f28c"; }
  .bi-clipboard-minus::before { content: "\\f28d"; }
  .bi-clipboard-plus::before { content: "\\f28e"; }
  .bi-clipboard-x::before { content: "\\f28f"; }
  .bi-clipboard::before { content: "\\f290"; }
  .bi-clock-fill::before { content: "\\f291"; }
  .bi-clock-history::before { content: "\\f292"; }
  .bi-clock::before { content: "\\f293"; }
  .bi-cloud-arrow-down-fill::before { content: "\\f294"; }
  .bi-cloud-arrow-down::before { content: "\\f295"; }
  .bi-cloud-arrow-up-fill::before { content: "\\f296"; }
  .bi-cloud-arrow-up::before { content: "\\f297"; }
  .bi-cloud-check-fill::before { content: "\\f298"; }
  .bi-cloud-check::before { content: "\\f299"; }
  .bi-cloud-download-fill::before { content: "\\f29a"; }
  .bi-cloud-download::before { content: "\\f29b"; }
  .bi-cloud-drizzle-fill::before { content: "\\f29c"; }
  .bi-cloud-drizzle::before { content: "\\f29d"; }
  .bi-cloud-fill::before { content: "\\f29e"; }
  .bi-cloud-fog-fill::before { content: "\\f29f"; }
  .bi-cloud-fog::before { content: "\\f2a0"; }
  .bi-cloud-fog2-fill::before { content: "\\f2a1"; }
  .bi-cloud-fog2::before { content: "\\f2a2"; }
  .bi-cloud-hail-fill::before { content: "\\f2a3"; }
  .bi-cloud-hail::before { content: "\\f2a4"; }
  .bi-cloud-haze-1::before { content: "\\f2a5"; }
  .bi-cloud-haze-fill::before { content: "\\f2a6"; }
  .bi-cloud-haze::before { content: "\\f2a7"; }
  .bi-cloud-haze2-fill::before { content: "\\f2a8"; }
  .bi-cloud-lightning-fill::before { content: "\\f2a9"; }
  .bi-cloud-lightning-rain-fill::before { content: "\\f2aa"; }
  .bi-cloud-lightning-rain::before { content: "\\f2ab"; }
  .bi-cloud-lightning::before { content: "\\f2ac"; }
  .bi-cloud-minus-fill::before { content: "\\f2ad"; }
  .bi-cloud-minus::before { content: "\\f2ae"; }
  .bi-cloud-moon-fill::before { content: "\\f2af"; }
  .bi-cloud-moon::before { content: "\\f2b0"; }
  .bi-cloud-plus-fill::before { content: "\\f2b1"; }
  .bi-cloud-plus::before { content: "\\f2b2"; }
  .bi-cloud-rain-fill::before { content: "\\f2b3"; }
  .bi-cloud-rain-heavy-fill::before { content: "\\f2b4"; }
  .bi-cloud-rain-heavy::before { content: "\\f2b5"; }
  .bi-cloud-rain::before { content: "\\f2b6"; }
  .bi-cloud-slash-fill::before { content: "\\f2b7"; }
  .bi-cloud-slash::before { content: "\\f2b8"; }
  .bi-cloud-sleet-fill::before { content: "\\f2b9"; }
  .bi-cloud-sleet::before { content: "\\f2ba"; }
  .bi-cloud-snow-fill::before { content: "\\f2bb"; }
  .bi-cloud-snow::before { content: "\\f2bc"; }
  .bi-cloud-sun-fill::before { content: "\\f2bd"; }
  .bi-cloud-sun::before { content: "\\f2be"; }
  .bi-cloud-upload-fill::before { content: "\\f2bf"; }
  .bi-cloud-upload::before { content: "\\f2c0"; }
  .bi-cloud::before { content: "\\f2c1"; }
  .bi-clouds-fill::before { content: "\\f2c2"; }
  .bi-clouds::before { content: "\\f2c3"; }
  .bi-cloudy-fill::before { content: "\\f2c4"; }
  .bi-cloudy::before { content: "\\f2c5"; }
  .bi-code-slash::before { content: "\\f2c6"; }
  .bi-code-square::before { content: "\\f2c7"; }
  .bi-code::before { content: "\\f2c8"; }
  .bi-collection-fill::before { content: "\\f2c9"; }
  .bi-collection-play-fill::before { content: "\\f2ca"; }
  .bi-collection-play::before { content: "\\f2cb"; }
  .bi-collection::before { content: "\\f2cc"; }
  .bi-columns-gap::before { content: "\\f2cd"; }
  .bi-columns::before { content: "\\f2ce"; }
  .bi-command::before { content: "\\f2cf"; }
  .bi-compass-fill::before { content: "\\f2d0"; }
  .bi-compass::before { content: "\\f2d1"; }
  .bi-cone-striped::before { content: "\\f2d2"; }
  .bi-cone::before { content: "\\f2d3"; }
  .bi-controller::before { content: "\\f2d4"; }
  .bi-cpu-fill::before { content: "\\f2d5"; }
  .bi-cpu::before { content: "\\f2d6"; }
  .bi-credit-card-2-back-fill::before { content: "\\f2d7"; }
  .bi-credit-card-2-back::before { content: "\\f2d8"; }
  .bi-credit-card-2-front-fill::before { content: "\\f2d9"; }
  .bi-credit-card-2-front::before { content: "\\f2da"; }
  .bi-credit-card-fill::before { content: "\\f2db"; }
  .bi-credit-card::before { content: "\\f2dc"; }
  .bi-crop::before { content: "\\f2dd"; }
  .bi-cup-fill::before { content: "\\f2de"; }
  .bi-cup-straw::before { content: "\\f2df"; }
  .bi-cup::before { content: "\\f2e0"; }
  .bi-cursor-fill::before { content: "\\f2e1"; }
  .bi-cursor-text::before { content: "\\f2e2"; }
  .bi-cursor::before { content: "\\f2e3"; }
  .bi-dash-circle-dotted::before { content: "\\f2e4"; }
  .bi-dash-circle-fill::before { content: "\\f2e5"; }
  .bi-dash-circle::before { content: "\\f2e6"; }
  .bi-dash-square-dotted::before { content: "\\f2e7"; }
  .bi-dash-square-fill::before { content: "\\f2e8"; }
  .bi-dash-square::before { content: "\\f2e9"; }
  .bi-dash::before { content: "\\f2ea"; }
  .bi-diagram-2-fill::before { content: "\\f2eb"; }
  .bi-diagram-2::before { content: "\\f2ec"; }
  .bi-diagram-3-fill::before { content: "\\f2ed"; }
  .bi-diagram-3::before { content: "\\f2ee"; }
  .bi-diamond-fill::before { content: "\\f2ef"; }
  .bi-diamond-half::before { content: "\\f2f0"; }
  .bi-diamond::before { content: "\\f2f1"; }
  .bi-dice-1-fill::before { content: "\\f2f2"; }
  .bi-dice-1::before { content: "\\f2f3"; }
  .bi-dice-2-fill::before { content: "\\f2f4"; }
  .bi-dice-2::before { content: "\\f2f5"; }
  .bi-dice-3-fill::before { content: "\\f2f6"; }
  .bi-dice-3::before { content: "\\f2f7"; }
  .bi-dice-4-fill::before { content: "\\f2f8"; }
  .bi-dice-4::before { content: "\\f2f9"; }
  .bi-dice-5-fill::before { content: "\\f2fa"; }
  .bi-dice-5::before { content: "\\f2fb"; }
  .bi-dice-6-fill::before { content: "\\f2fc"; }
  .bi-dice-6::before { content: "\\f2fd"; }
  .bi-disc-fill::before { content: "\\f2fe"; }
  .bi-disc::before { content: "\\f2ff"; }
  .bi-discord::before { content: "\\f300"; }
  .bi-display-fill::before { content: "\\f301"; }
  .bi-display::before { content: "\\f302"; }
  .bi-distribute-horizontal::before { content: "\\f303"; }
  .bi-distribute-vertical::before { content: "\\f304"; }
  .bi-door-closed-fill::before { content: "\\f305"; }
  .bi-door-closed::before { content: "\\f306"; }
  .bi-door-open-fill::before { content: "\\f307"; }
  .bi-door-open::before { content: "\\f308"; }
  .bi-dot::before { content: "\\f309"; }
  .bi-download::before { content: "\\f30a"; }
  .bi-droplet-fill::before { content: "\\f30b"; }
  .bi-droplet-half::before { content: "\\f30c"; }
  .bi-droplet::before { content: "\\f30d"; }
  .bi-earbuds::before { content: "\\f30e"; }
  .bi-easel-fill::before { content: "\\f30f"; }
  .bi-easel::before { content: "\\f310"; }
  .bi-egg-fill::before { content: "\\f311"; }
  .bi-egg-fried::before { content: "\\f312"; }
  .bi-egg::before { content: "\\f313"; }
  .bi-eject-fill::before { content: "\\f314"; }
  .bi-eject::before { content: "\\f315"; }
  .bi-emoji-angry-fill::before { content: "\\f316"; }
  .bi-emoji-angry::before { content: "\\f317"; }
  .bi-emoji-dizzy-fill::before { content: "\\f318"; }
  .bi-emoji-dizzy::before { content: "\\f319"; }
  .bi-emoji-expressionless-fill::before { content: "\\f31a"; }
  .bi-emoji-expressionless::before { content: "\\f31b"; }
  .bi-emoji-frown-fill::before { content: "\\f31c"; }
  .bi-emoji-frown::before { content: "\\f31d"; }
  .bi-emoji-heart-eyes-fill::before { content: "\\f31e"; }
  .bi-emoji-heart-eyes::before { content: "\\f31f"; }
  .bi-emoji-laughing-fill::before { content: "\\f320"; }
  .bi-emoji-laughing::before { content: "\\f321"; }
  .bi-emoji-neutral-fill::before { content: "\\f322"; }
  .bi-emoji-neutral::before { content: "\\f323"; }
  .bi-emoji-smile-fill::before { content: "\\f324"; }
  .bi-emoji-smile-upside-down-fill::before { content: "\\f325"; }
  .bi-emoji-smile-upside-down::before { content: "\\f326"; }
  .bi-emoji-smile::before { content: "\\f327"; }
  .bi-emoji-sunglasses-fill::before { content: "\\f328"; }
  .bi-emoji-sunglasses::before { content: "\\f329"; }
  .bi-emoji-wink-fill::before { content: "\\f32a"; }
  .bi-emoji-wink::before { content: "\\f32b"; }
  .bi-envelope-fill::before { content: "\\f32c"; }
  .bi-envelope-open-fill::before { content: "\\f32d"; }
  .bi-envelope-open::before { content: "\\f32e"; }
  .bi-envelope::before { content: "\\f32f"; }
  .bi-eraser-fill::before { content: "\\f330"; }
  .bi-eraser::before { content: "\\f331"; }
  .bi-exclamation-circle-fill::before { content: "\\f332"; }
  .bi-exclamation-circle::before { content: "\\f333"; }
  .bi-exclamation-diamond-fill::before { content: "\\f334"; }
  .bi-exclamation-diamond::before { content: "\\f335"; }
  .bi-exclamation-octagon-fill::before { content: "\\f336"; }
  .bi-exclamation-octagon::before { content: "\\f337"; }
  .bi-exclamation-square-fill::before { content: "\\f338"; }
  .bi-exclamation-square::before { content: "\\f339"; }
  .bi-exclamation-triangle-fill::before { content: "\\f33a"; }
  .bi-exclamation-triangle::before { content: "\\f33b"; }
  .bi-exclamation::before { content: "\\f33c"; }
  .bi-exclude::before { content: "\\f33d"; }
  .bi-eye-fill::before { content: "\\f33e"; }
  .bi-eye-slash-fill::before { content: "\\f33f"; }
  .bi-eye-slash::before { content: "\\f340"; }
  .bi-eye::before { content: "\\f341"; }
  .bi-eyedropper::before { content: "\\f342"; }
  .bi-eyeglasses::before { content: "\\f343"; }
  .bi-facebook::before { content: "\\f344"; }
  .bi-file-arrow-down-fill::before { content: "\\f345"; }
  .bi-file-arrow-down::before { content: "\\f346"; }
  .bi-file-arrow-up-fill::before { content: "\\f347"; }
  .bi-file-arrow-up::before { content: "\\f348"; }
  .bi-file-bar-graph-fill::before { content: "\\f349"; }
  .bi-file-bar-graph::before { content: "\\f34a"; }
  .bi-file-binary-fill::before { content: "\\f34b"; }
  .bi-file-binary::before { content: "\\f34c"; }
  .bi-file-break-fill::before { content: "\\f34d"; }
  .bi-file-break::before { content: "\\f34e"; }
  .bi-file-check-fill::before { content: "\\f34f"; }
  .bi-file-check::before { content: "\\f350"; }
  .bi-file-code-fill::before { content: "\\f351"; }
  .bi-file-code::before { content: "\\f352"; }
  .bi-file-diff-fill::before { content: "\\f353"; }
  .bi-file-diff::before { content: "\\f354"; }
  .bi-file-earmark-arrow-down-fill::before { content: "\\f355"; }
  .bi-file-earmark-arrow-down::before { content: "\\f356"; }
  .bi-file-earmark-arrow-up-fill::before { content: "\\f357"; }
  .bi-file-earmark-arrow-up::before { content: "\\f358"; }
  .bi-file-earmark-bar-graph-fill::before { content: "\\f359"; }
  .bi-file-earmark-bar-graph::before { content: "\\f35a"; }
  .bi-file-earmark-binary-fill::before { content: "\\f35b"; }
  .bi-file-earmark-binary::before { content: "\\f35c"; }
  .bi-file-earmark-break-fill::before { content: "\\f35d"; }
  .bi-file-earmark-break::before { content: "\\f35e"; }
  .bi-file-earmark-check-fill::before { content: "\\f35f"; }
  .bi-file-earmark-check::before { content: "\\f360"; }
  .bi-file-earmark-code-fill::before { content: "\\f361"; }
  .bi-file-earmark-code::before { content: "\\f362"; }
  .bi-file-earmark-diff-fill::before { content: "\\f363"; }
  .bi-file-earmark-diff::before { content: "\\f364"; }
  .bi-file-earmark-easel-fill::before { content: "\\f365"; }
  .bi-file-earmark-easel::before { content: "\\f366"; }
  .bi-file-earmark-excel-fill::before { content: "\\f367"; }
  .bi-file-earmark-excel::before { content: "\\f368"; }
  .bi-file-earmark-fill::before { content: "\\f369"; }
  .bi-file-earmark-font-fill::before { content: "\\f36a"; }
  .bi-file-earmark-font::before { content: "\\f36b"; }
  .bi-file-earmark-image-fill::before { content: "\\f36c"; }
  .bi-file-earmark-image::before { content: "\\f36d"; }
  .bi-file-earmark-lock-fill::before { content: "\\f36e"; }
  .bi-file-earmark-lock::before { content: "\\f36f"; }
  .bi-file-earmark-lock2-fill::before { content: "\\f370"; }
  .bi-file-earmark-lock2::before { content: "\\f371"; }
  .bi-file-earmark-medical-fill::before { content: "\\f372"; }
  .bi-file-earmark-medical::before { content: "\\f373"; }
  .bi-file-earmark-minus-fill::before { content: "\\f374"; }
  .bi-file-earmark-minus::before { content: "\\f375"; }
  .bi-file-earmark-music-fill::before { content: "\\f376"; }
  .bi-file-earmark-music::before { content: "\\f377"; }
  .bi-file-earmark-person-fill::before { content: "\\f378"; }
  .bi-file-earmark-person::before { content: "\\f379"; }
  .bi-file-earmark-play-fill::before { content: "\\f37a"; }
  .bi-file-earmark-play::before { content: "\\f37b"; }
  .bi-file-earmark-plus-fill::before { content: "\\f37c"; }
  .bi-file-earmark-plus::before { content: "\\f37d"; }
  .bi-file-earmark-post-fill::before { content: "\\f37e"; }
  .bi-file-earmark-post::before { content: "\\f37f"; }
  .bi-file-earmark-ppt-fill::before { content: "\\f380"; }
  .bi-file-earmark-ppt::before { content: "\\f381"; }
  .bi-file-earmark-richtext-fill::before { content: "\\f382"; }
  .bi-file-earmark-richtext::before { content: "\\f383"; }
  .bi-file-earmark-ruled-fill::before { content: "\\f384"; }
  .bi-file-earmark-ruled::before { content: "\\f385"; }
  .bi-file-earmark-slides-fill::before { content: "\\f386"; }
  .bi-file-earmark-slides::before { content: "\\f387"; }
  .bi-file-earmark-spreadsheet-fill::before { content: "\\f388"; }
  .bi-file-earmark-spreadsheet::before { content: "\\f389"; }
  .bi-file-earmark-text-fill::before { content: "\\f38a"; }
  .bi-file-earmark-text::before { content: "\\f38b"; }
  .bi-file-earmark-word-fill::before { content: "\\f38c"; }
  .bi-file-earmark-word::before { content: "\\f38d"; }
  .bi-file-earmark-x-fill::before { content: "\\f38e"; }
  .bi-file-earmark-x::before { content: "\\f38f"; }
  .bi-file-earmark-zip-fill::before { content: "\\f390"; }
  .bi-file-earmark-zip::before { content: "\\f391"; }
  .bi-file-earmark::before { content: "\\f392"; }
  .bi-file-easel-fill::before { content: "\\f393"; }
  .bi-file-easel::before { content: "\\f394"; }
  .bi-file-excel-fill::before { content: "\\f395"; }
  .bi-file-excel::before { content: "\\f396"; }
  .bi-file-fill::before { content: "\\f397"; }
  .bi-file-font-fill::before { content: "\\f398"; }
  .bi-file-font::before { content: "\\f399"; }
  .bi-file-image-fill::before { content: "\\f39a"; }
  .bi-file-image::before { content: "\\f39b"; }
  .bi-file-lock-fill::before { content: "\\f39c"; }
  .bi-file-lock::before { content: "\\f39d"; }
  .bi-file-lock2-fill::before { content: "\\f39e"; }
  .bi-file-lock2::before { content: "\\f39f"; }
  .bi-file-medical-fill::before { content: "\\f3a0"; }
  .bi-file-medical::before { content: "\\f3a1"; }
  .bi-file-minus-fill::before { content: "\\f3a2"; }
  .bi-file-minus::before { content: "\\f3a3"; }
  .bi-file-music-fill::before { content: "\\f3a4"; }
  .bi-file-music::before { content: "\\f3a5"; }
  .bi-file-person-fill::before { content: "\\f3a6"; }
  .bi-file-person::before { content: "\\f3a7"; }
  .bi-file-play-fill::before { content: "\\f3a8"; }
  .bi-file-play::before { content: "\\f3a9"; }
  .bi-file-plus-fill::before { content: "\\f3aa"; }
  .bi-file-plus::before { content: "\\f3ab"; }
  .bi-file-post-fill::before { content: "\\f3ac"; }
  .bi-file-post::before { content: "\\f3ad"; }
  .bi-file-ppt-fill::before { content: "\\f3ae"; }
  .bi-file-ppt::before { content: "\\f3af"; }
  .bi-file-richtext-fill::before { content: "\\f3b0"; }
  .bi-file-richtext::before { content: "\\f3b1"; }
  .bi-file-ruled-fill::before { content: "\\f3b2"; }
  .bi-file-ruled::before { content: "\\f3b3"; }
  .bi-file-slides-fill::before { content: "\\f3b4"; }
  .bi-file-slides::before { content: "\\f3b5"; }
  .bi-file-spreadsheet-fill::before { content: "\\f3b6"; }
  .bi-file-spreadsheet::before { content: "\\f3b7"; }
  .bi-file-text-fill::before { content: "\\f3b8"; }
  .bi-file-text::before { content: "\\f3b9"; }
  .bi-file-word-fill::before { content: "\\f3ba"; }
  .bi-file-word::before { content: "\\f3bb"; }
  .bi-file-x-fill::before { content: "\\f3bc"; }
  .bi-file-x::before { content: "\\f3bd"; }
  .bi-file-zip-fill::before { content: "\\f3be"; }
  .bi-file-zip::before { content: "\\f3bf"; }
  .bi-file::before { content: "\\f3c0"; }
  .bi-files-alt::before { content: "\\f3c1"; }
  .bi-files::before { content: "\\f3c2"; }
  .bi-film::before { content: "\\f3c3"; }
  .bi-filter-circle-fill::before { content: "\\f3c4"; }
  .bi-filter-circle::before { content: "\\f3c5"; }
  .bi-filter-left::before { content: "\\f3c6"; }
  .bi-filter-right::before { content: "\\f3c7"; }
  .bi-filter-square-fill::before { content: "\\f3c8"; }
  .bi-filter-square::before { content: "\\f3c9"; }
  .bi-filter::before { content: "\\f3ca"; }
  .bi-flag-fill::before { content: "\\f3cb"; }
  .bi-flag::before { content: "\\f3cc"; }
  .bi-flower1::before { content: "\\f3cd"; }
  .bi-flower2::before { content: "\\f3ce"; }
  .bi-flower3::before { content: "\\f3cf"; }
  .bi-folder-check::before { content: "\\f3d0"; }
  .bi-folder-fill::before { content: "\\f3d1"; }
  .bi-folder-minus::before { content: "\\f3d2"; }
  .bi-folder-plus::before { content: "\\f3d3"; }
  .bi-folder-symlink-fill::before { content: "\\f3d4"; }
  .bi-folder-symlink::before { content: "\\f3d5"; }
  .bi-folder-x::before { content: "\\f3d6"; }
  .bi-folder::before { content: "\\f3d7"; }
  .bi-folder2-open::before { content: "\\f3d8"; }
  .bi-folder2::before { content: "\\f3d9"; }
  .bi-fonts::before { content: "\\f3da"; }
  .bi-forward-fill::before { content: "\\f3db"; }
  .bi-forward::before { content: "\\f3dc"; }
  .bi-front::before { content: "\\f3dd"; }
  .bi-fullscreen-exit::before { content: "\\f3de"; }
  .bi-fullscreen::before { content: "\\f3df"; }
  .bi-funnel-fill::before { content: "\\f3e0"; }
  .bi-funnel::before { content: "\\f3e1"; }
  .bi-gear-fill::before { content: "\\f3e2"; }
  .bi-gear-wide-connected::before { content: "\\f3e3"; }
  .bi-gear-wide::before { content: "\\f3e4"; }
  .bi-gear::before { content: "\\f3e5"; }
  .bi-gem::before { content: "\\f3e6"; }
  .bi-geo-alt-fill::before { content: "\\f3e7"; }
  .bi-geo-alt::before { content: "\\f3e8"; }
  .bi-geo-fill::before { content: "\\f3e9"; }
  .bi-geo::before { content: "\\f3ea"; }
  .bi-gift-fill::before { content: "\\f3eb"; }
  .bi-gift::before { content: "\\f3ec"; }
  .bi-github::before { content: "\\f3ed"; }
  .bi-globe::before { content: "\\f3ee"; }
  .bi-globe2::before { content: "\\f3ef"; }
  .bi-google::before { content: "\\f3f0"; }
  .bi-graph-down::before { content: "\\f3f1"; }
  .bi-graph-up::before { content: "\\f3f2"; }
  .bi-grid-1x2-fill::before { content: "\\f3f3"; }
  .bi-grid-1x2::before { content: "\\f3f4"; }
  .bi-grid-3x2-gap-fill::before { content: "\\f3f5"; }
  .bi-grid-3x2-gap::before { content: "\\f3f6"; }
  .bi-grid-3x2::before { content: "\\f3f7"; }
  .bi-grid-3x3-gap-fill::before { content: "\\f3f8"; }
  .bi-grid-3x3-gap::before { content: "\\f3f9"; }
  .bi-grid-3x3::before { content: "\\f3fa"; }
  .bi-grid-fill::before { content: "\\f3fb"; }
  .bi-grid::before { content: "\\f3fc"; }
  .bi-grip-horizontal::before { content: "\\f3fd"; }
  .bi-grip-vertical::before { content: "\\f3fe"; }
  .bi-hammer::before { content: "\\f3ff"; }
  .bi-hand-index-fill::before { content: "\\f400"; }
  .bi-hand-index-thumb-fill::before { content: "\\f401"; }
  .bi-hand-index-thumb::before { content: "\\f402"; }
  .bi-hand-index::before { content: "\\f403"; }
  .bi-hand-thumbs-down-fill::before { content: "\\f404"; }
  .bi-hand-thumbs-down::before { content: "\\f405"; }
  .bi-hand-thumbs-up-fill::before { content: "\\f406"; }
  .bi-hand-thumbs-up::before { content: "\\f407"; }
  .bi-handbag-fill::before { content: "\\f408"; }
  .bi-handbag::before { content: "\\f409"; }
  .bi-hash::before { content: "\\f40a"; }
  .bi-hdd-fill::before { content: "\\f40b"; }
  .bi-hdd-network-fill::before { content: "\\f40c"; }
  .bi-hdd-network::before { content: "\\f40d"; }
  .bi-hdd-rack-fill::before { content: "\\f40e"; }
  .bi-hdd-rack::before { content: "\\f40f"; }
  .bi-hdd-stack-fill::before { content: "\\f410"; }
  .bi-hdd-stack::before { content: "\\f411"; }
  .bi-hdd::before { content: "\\f412"; }
  .bi-headphones::before { content: "\\f413"; }
  .bi-headset::before { content: "\\f414"; }
  .bi-heart-fill::before { content: "\\f415"; }
  .bi-heart-half::before { content: "\\f416"; }
  .bi-heart::before { content: "\\f417"; }
  .bi-heptagon-fill::before { content: "\\f418"; }
  .bi-heptagon-half::before { content: "\\f419"; }
  .bi-heptagon::before { content: "\\f41a"; }
  .bi-hexagon-fill::before { content: "\\f41b"; }
  .bi-hexagon-half::before { content: "\\f41c"; }
  .bi-hexagon::before { content: "\\f41d"; }
  .bi-hourglass-bottom::before { content: "\\f41e"; }
  .bi-hourglass-split::before { content: "\\f41f"; }
  .bi-hourglass-top::before { content: "\\f420"; }
  .bi-hourglass::before { content: "\\f421"; }
  .bi-house-door-fill::before { content: "\\f422"; }
  .bi-house-door::before { content: "\\f423"; }
  .bi-house-fill::before { content: "\\f424"; }
  .bi-house::before { content: "\\f425"; }
  .bi-hr::before { content: "\\f426"; }
  .bi-hurricane::before { content: "\\f427"; }
  .bi-image-alt::before { content: "\\f428"; }
  .bi-image-fill::before { content: "\\f429"; }
  .bi-image::before { content: "\\f42a"; }
  .bi-images::before { content: "\\f42b"; }
  .bi-inbox-fill::before { content: "\\f42c"; }
  .bi-inbox::before { content: "\\f42d"; }
  .bi-inboxes-fill::before { content: "\\f42e"; }
  .bi-inboxes::before { content: "\\f42f"; }
  .bi-info-circle-fill::before { content: "\\f430"; }
  .bi-info-circle::before { content: "\\f431"; }
  .bi-info-square-fill::before { content: "\\f432"; }
  .bi-info-square::before { content: "\\f433"; }
  .bi-info::before { content: "\\f434"; }
  .bi-input-cursor-text::before { content: "\\f435"; }
  .bi-input-cursor::before { content: "\\f436"; }
  .bi-instagram::before { content: "\\f437"; }
  .bi-intersect::before { content: "\\f438"; }
  .bi-journal-album::before { content: "\\f439"; }
  .bi-journal-arrow-down::before { content: "\\f43a"; }
  .bi-journal-arrow-up::before { content: "\\f43b"; }
  .bi-journal-bookmark-fill::before { content: "\\f43c"; }
  .bi-journal-bookmark::before { content: "\\f43d"; }
  .bi-journal-check::before { content: "\\f43e"; }
  .bi-journal-code::before { content: "\\f43f"; }
  .bi-journal-medical::before { content: "\\f440"; }
  .bi-journal-minus::before { content: "\\f441"; }
  .bi-journal-plus::before { content: "\\f442"; }
  .bi-journal-richtext::before { content: "\\f443"; }
  .bi-journal-text::before { content: "\\f444"; }
  .bi-journal-x::before { content: "\\f445"; }
  .bi-journal::before { content: "\\f446"; }
  .bi-journals::before { content: "\\f447"; }
  .bi-joystick::before { content: "\\f448"; }
  .bi-justify-left::before { content: "\\f449"; }
  .bi-justify-right::before { content: "\\f44a"; }
  .bi-justify::before { content: "\\f44b"; }
  .bi-kanban-fill::before { content: "\\f44c"; }
  .bi-kanban::before { content: "\\f44d"; }
  .bi-key-fill::before { content: "\\f44e"; }
  .bi-key::before { content: "\\f44f"; }
  .bi-keyboard-fill::before { content: "\\f450"; }
  .bi-keyboard::before { content: "\\f451"; }
  .bi-ladder::before { content: "\\f452"; }
  .bi-lamp-fill::before { content: "\\f453"; }
  .bi-lamp::before { content: "\\f454"; }
  .bi-laptop-fill::before { content: "\\f455"; }
  .bi-laptop::before { content: "\\f456"; }
  .bi-layer-backward::before { content: "\\f457"; }
  .bi-layer-forward::before { content: "\\f458"; }
  .bi-layers-fill::before { content: "\\f459"; }
  .bi-layers-half::before { content: "\\f45a"; }
  .bi-layers::before { content: "\\f45b"; }
  .bi-layout-sidebar-inset-reverse::before { content: "\\f45c"; }
  .bi-layout-sidebar-inset::before { content: "\\f45d"; }
  .bi-layout-sidebar-reverse::before { content: "\\f45e"; }
  .bi-layout-sidebar::before { content: "\\f45f"; }
  .bi-layout-split::before { content: "\\f460"; }
  .bi-layout-text-sidebar-reverse::before { content: "\\f461"; }
  .bi-layout-text-sidebar::before { content: "\\f462"; }
  .bi-layout-text-window-reverse::before { content: "\\f463"; }
  .bi-layout-text-window::before { content: "\\f464"; }
  .bi-layout-three-columns::before { content: "\\f465"; }
  .bi-layout-wtf::before { content: "\\f466"; }
  .bi-life-preserver::before { content: "\\f467"; }
  .bi-lightbulb-fill::before { content: "\\f468"; }
  .bi-lightbulb-off-fill::before { content: "\\f469"; }
  .bi-lightbulb-off::before { content: "\\f46a"; }
  .bi-lightbulb::before { content: "\\f46b"; }
  .bi-lightning-charge-fill::before { content: "\\f46c"; }
  .bi-lightning-charge::before { content: "\\f46d"; }
  .bi-lightning-fill::before { content: "\\f46e"; }
  .bi-lightning::before { content: "\\f46f"; }
  .bi-link-45deg::before { content: "\\f470"; }
  .bi-link::before { content: "\\f471"; }
  .bi-linkedin::before { content: "\\f472"; }
  .bi-list-check::before { content: "\\f473"; }
  .bi-list-nested::before { content: "\\f474"; }
  .bi-list-ol::before { content: "\\f475"; }
  .bi-list-stars::before { content: "\\f476"; }
  .bi-list-task::before { content: "\\f477"; }
  .bi-list-ul::before { content: "\\f478"; }
  .bi-list::before { content: "\\f479"; }
  .bi-lock-fill::before { content: "\\f47a"; }
  .bi-lock::before { content: "\\f47b"; }
  .bi-mailbox::before { content: "\\f47c"; }
  .bi-mailbox2::before { content: "\\f47d"; }
  .bi-map-fill::before { content: "\\f47e"; }
  .bi-map::before { content: "\\f47f"; }
  .bi-markdown-fill::before { content: "\\f480"; }
  .bi-markdown::before { content: "\\f481"; }
  .bi-mask::before { content: "\\f482"; }
  .bi-megaphone-fill::before { content: "\\f483"; }
  .bi-megaphone::before { content: "\\f484"; }
  .bi-menu-app-fill::before { content: "\\f485"; }
  .bi-menu-app::before { content: "\\f486"; }
  .bi-menu-button-fill::before { content: "\\f487"; }
  .bi-menu-button-wide-fill::before { content: "\\f488"; }
  .bi-menu-button-wide::before { content: "\\f489"; }
  .bi-menu-button::before { content: "\\f48a"; }
  .bi-menu-down::before { content: "\\f48b"; }
  .bi-menu-up::before { content: "\\f48c"; }
  .bi-mic-fill::before { content: "\\f48d"; }
  .bi-mic-mute-fill::before { content: "\\f48e"; }
  .bi-mic-mute::before { content: "\\f48f"; }
  .bi-mic::before { content: "\\f490"; }
  .bi-minecart-loaded::before { content: "\\f491"; }
  .bi-minecart::before { content: "\\f492"; }
  .bi-moisture::before { content: "\\f493"; }
  .bi-moon-fill::before { content: "\\f494"; }
  .bi-moon-stars-fill::before { content: "\\f495"; }
  .bi-moon-stars::before { content: "\\f496"; }
  .bi-moon::before { content: "\\f497"; }
  .bi-mouse-fill::before { content: "\\f498"; }
  .bi-mouse::before { content: "\\f499"; }
  .bi-mouse2-fill::before { content: "\\f49a"; }
  .bi-mouse2::before { content: "\\f49b"; }
  .bi-mouse3-fill::before { content: "\\f49c"; }
  .bi-mouse3::before { content: "\\f49d"; }
  .bi-music-note-beamed::before { content: "\\f49e"; }
  .bi-music-note-list::before { content: "\\f49f"; }
  .bi-music-note::before { content: "\\f4a0"; }
  .bi-music-player-fill::before { content: "\\f4a1"; }
  .bi-music-player::before { content: "\\f4a2"; }
  .bi-newspaper::before { content: "\\f4a3"; }
  .bi-node-minus-fill::before { content: "\\f4a4"; }
  .bi-node-minus::before { content: "\\f4a5"; }
  .bi-node-plus-fill::before { content: "\\f4a6"; }
  .bi-node-plus::before { content: "\\f4a7"; }
  .bi-nut-fill::before { content: "\\f4a8"; }
  .bi-nut::before { content: "\\f4a9"; }
  .bi-octagon-fill::before { content: "\\f4aa"; }
  .bi-octagon-half::before { content: "\\f4ab"; }
  .bi-octagon::before { content: "\\f4ac"; }
  .bi-option::before { content: "\\f4ad"; }
  .bi-outlet::before { content: "\\f4ae"; }
  .bi-paint-bucket::before { content: "\\f4af"; }
  .bi-palette-fill::before { content: "\\f4b0"; }
  .bi-palette::before { content: "\\f4b1"; }
  .bi-palette2::before { content: "\\f4b2"; }
  .bi-paperclip::before { content: "\\f4b3"; }
  .bi-paragraph::before { content: "\\f4b4"; }
  .bi-patch-check-fill::before { content: "\\f4b5"; }
  .bi-patch-check::before { content: "\\f4b6"; }
  .bi-patch-exclamation-fill::before { content: "\\f4b7"; }
  .bi-patch-exclamation::before { content: "\\f4b8"; }
  .bi-patch-minus-fill::before { content: "\\f4b9"; }
  .bi-patch-minus::before { content: "\\f4ba"; }
  .bi-patch-plus-fill::before { content: "\\f4bb"; }
  .bi-patch-plus::before { content: "\\f4bc"; }
  .bi-patch-question-fill::before { content: "\\f4bd"; }
  .bi-patch-question::before { content: "\\f4be"; }
  .bi-pause-btn-fill::before { content: "\\f4bf"; }
  .bi-pause-btn::before { content: "\\f4c0"; }
  .bi-pause-circle-fill::before { content: "\\f4c1"; }
  .bi-pause-circle::before { content: "\\f4c2"; }
  .bi-pause-fill::before { content: "\\f4c3"; }
  .bi-pause::before { content: "\\f4c4"; }
  .bi-peace-fill::before { content: "\\f4c5"; }
  .bi-peace::before { content: "\\f4c6"; }
  .bi-pen-fill::before { content: "\\f4c7"; }
  .bi-pen::before { content: "\\f4c8"; }
  .bi-pencil-fill::before { content: "\\f4c9"; }
  .bi-pencil-square::before { content: "\\f4ca"; }
  .bi-pencil::before { content: "\\f4cb"; }
  .bi-pentagon-fill::before { content: "\\f4cc"; }
  .bi-pentagon-half::before { content: "\\f4cd"; }
  .bi-pentagon::before { content: "\\f4ce"; }
  .bi-people-fill::before { content: "\\f4cf"; }
  .bi-people::before { content: "\\f4d0"; }
  .bi-percent::before { content: "\\f4d1"; }
  .bi-person-badge-fill::before { content: "\\f4d2"; }
  .bi-person-badge::before { content: "\\f4d3"; }
  .bi-person-bounding-box::before { content: "\\f4d4"; }
  .bi-person-check-fill::before { content: "\\f4d5"; }
  .bi-person-check::before { content: "\\f4d6"; }
  .bi-person-circle::before { content: "\\f4d7"; }
  .bi-person-dash-fill::before { content: "\\f4d8"; }
  .bi-person-dash::before { content: "\\f4d9"; }
  .bi-person-fill::before { content: "\\f4da"; }
  .bi-person-lines-fill::before { content: "\\f4db"; }
  .bi-person-plus-fill::before { content: "\\f4dc"; }
  .bi-person-plus::before { content: "\\f4dd"; }
  .bi-person-square::before { content: "\\f4de"; }
  .bi-person-x-fill::before { content: "\\f4df"; }
  .bi-person-x::before { content: "\\f4e0"; }
  .bi-person::before { content: "\\f4e1"; }
  .bi-phone-fill::before { content: "\\f4e2"; }
  .bi-phone-landscape-fill::before { content: "\\f4e3"; }
  .bi-phone-landscape::before { content: "\\f4e4"; }
  .bi-phone-vibrate-fill::before { content: "\\f4e5"; }
  .bi-phone-vibrate::before { content: "\\f4e6"; }
  .bi-phone::before { content: "\\f4e7"; }
  .bi-pie-chart-fill::before { content: "\\f4e8"; }
  .bi-pie-chart::before { content: "\\f4e9"; }
  .bi-pin-angle-fill::before { content: "\\f4ea"; }
  .bi-pin-angle::before { content: "\\f4eb"; }
  .bi-pin-fill::before { content: "\\f4ec"; }
  .bi-pin::before { content: "\\f4ed"; }
  .bi-pip-fill::before { content: "\\f4ee"; }
  .bi-pip::before { content: "\\f4ef"; }
  .bi-play-btn-fill::before { content: "\\f4f0"; }
  .bi-play-btn::before { content: "\\f4f1"; }
  .bi-play-circle-fill::before { content: "\\f4f2"; }
  .bi-play-circle::before { content: "\\f4f3"; }
  .bi-play-fill::before { content: "\\f4f4"; }
  .bi-play::before { content: "\\f4f5"; }
  .bi-plug-fill::before { content: "\\f4f6"; }
  .bi-plug::before { content: "\\f4f7"; }
  .bi-plus-circle-dotted::before { content: "\\f4f8"; }
  .bi-plus-circle-fill::before { content: "\\f4f9"; }
  .bi-plus-circle::before { content: "\\f4fa"; }
  .bi-plus-square-dotted::before { content: "\\f4fb"; }
  .bi-plus-square-fill::before { content: "\\f4fc"; }
  .bi-plus-square::before { content: "\\f4fd"; }
  .bi-plus::before { content: "\\f4fe"; }
  .bi-power::before { content: "\\f4ff"; }
  .bi-printer-fill::before { content: "\\f500"; }
  .bi-printer::before { content: "\\f501"; }
  .bi-puzzle-fill::before { content: "\\f502"; }
  .bi-puzzle::before { content: "\\f503"; }
  .bi-question-circle-fill::before { content: "\\f504"; }
  .bi-question-circle::before { content: "\\f505"; }
  .bi-question-diamond-fill::before { content: "\\f506"; }
  .bi-question-diamond::before { content: "\\f507"; }
  .bi-question-octagon-fill::before { content: "\\f508"; }
  .bi-question-octagon::before { content: "\\f509"; }
  .bi-question-square-fill::before { content: "\\f50a"; }
  .bi-question-square::before { content: "\\f50b"; }
  .bi-question::before { content: "\\f50c"; }
  .bi-rainbow::before { content: "\\f50d"; }
  .bi-receipt-cutoff::before { content: "\\f50e"; }
  .bi-receipt::before { content: "\\f50f"; }
  .bi-reception-0::before { content: "\\f510"; }
  .bi-reception-1::before { content: "\\f511"; }
  .bi-reception-2::before { content: "\\f512"; }
  .bi-reception-3::before { content: "\\f513"; }
  .bi-reception-4::before { content: "\\f514"; }
  .bi-record-btn-fill::before { content: "\\f515"; }
  .bi-record-btn::before { content: "\\f516"; }
  .bi-record-circle-fill::before { content: "\\f517"; }
  .bi-record-circle::before { content: "\\f518"; }
  .bi-record-fill::before { content: "\\f519"; }
  .bi-record::before { content: "\\f51a"; }
  .bi-record2-fill::before { content: "\\f51b"; }
  .bi-record2::before { content: "\\f51c"; }
  .bi-reply-all-fill::before { content: "\\f51d"; }
  .bi-reply-all::before { content: "\\f51e"; }
  .bi-reply-fill::before { content: "\\f51f"; }
  .bi-reply::before { content: "\\f520"; }
  .bi-rss-fill::before { content: "\\f521"; }
  .bi-rss::before { content: "\\f522"; }
  .bi-rulers::before { content: "\\f523"; }
  .bi-save-fill::before { content: "\\f524"; }
  .bi-save::before { content: "\\f525"; }
  .bi-save2-fill::before { content: "\\f526"; }
  .bi-save2::before { content: "\\f527"; }
  .bi-scissors::before { content: "\\f528"; }
  .bi-screwdriver::before { content: "\\f529"; }
  .bi-search::before { content: "\\f52a"; }
  .bi-segmented-nav::before { content: "\\f52b"; }
  .bi-server::before { content: "\\f52c"; }
  .bi-share-fill::before { content: "\\f52d"; }
  .bi-share::before { content: "\\f52e"; }
  .bi-shield-check::before { content: "\\f52f"; }
  .bi-shield-exclamation::before { content: "\\f530"; }
  .bi-shield-fill-check::before { content: "\\f531"; }
  .bi-shield-fill-exclamation::before { content: "\\f532"; }
  .bi-shield-fill-minus::before { content: "\\f533"; }
  .bi-shield-fill-plus::before { content: "\\f534"; }
  .bi-shield-fill-x::before { content: "\\f535"; }
  .bi-shield-fill::before { content: "\\f536"; }
  .bi-shield-lock-fill::before { content: "\\f537"; }
  .bi-shield-lock::before { content: "\\f538"; }
  .bi-shield-minus::before { content: "\\f539"; }
  .bi-shield-plus::before { content: "\\f53a"; }
  .bi-shield-shaded::before { content: "\\f53b"; }
  .bi-shield-slash-fill::before { content: "\\f53c"; }
  .bi-shield-slash::before { content: "\\f53d"; }
  .bi-shield-x::before { content: "\\f53e"; }
  .bi-shield::before { content: "\\f53f"; }
  .bi-shift-fill::before { content: "\\f540"; }
  .bi-shift::before { content: "\\f541"; }
  .bi-shop-window::before { content: "\\f542"; }
  .bi-shop::before { content: "\\f543"; }
  .bi-shuffle::before { content: "\\f544"; }
  .bi-signpost-2-fill::before { content: "\\f545"; }
  .bi-signpost-2::before { content: "\\f546"; }
  .bi-signpost-fill::before { content: "\\f547"; }
  .bi-signpost-split-fill::before { content: "\\f548"; }
  .bi-signpost-split::before { content: "\\f549"; }
  .bi-signpost::before { content: "\\f54a"; }
  .bi-sim-fill::before { content: "\\f54b"; }
  .bi-sim::before { content: "\\f54c"; }
  .bi-skip-backward-btn-fill::before { content: "\\f54d"; }
  .bi-skip-backward-btn::before { content: "\\f54e"; }
  .bi-skip-backward-circle-fill::before { content: "\\f54f"; }
  .bi-skip-backward-circle::before { content: "\\f550"; }
  .bi-skip-backward-fill::before { content: "\\f551"; }
  .bi-skip-backward::before { content: "\\f552"; }
  .bi-skip-end-btn-fill::before { content: "\\f553"; }
  .bi-skip-end-btn::before { content: "\\f554"; }
  .bi-skip-end-circle-fill::before { content: "\\f555"; }
  .bi-skip-end-circle::before { content: "\\f556"; }
  .bi-skip-end-fill::before { content: "\\f557"; }
  .bi-skip-end::before { content: "\\f558"; }
  .bi-skip-forward-btn-fill::before { content: "\\f559"; }
  .bi-skip-forward-btn::before { content: "\\f55a"; }
  .bi-skip-forward-circle-fill::before { content: "\\f55b"; }
  .bi-skip-forward-circle::before { content: "\\f55c"; }
  .bi-skip-forward-fill::before { content: "\\f55d"; }
  .bi-skip-forward::before { content: "\\f55e"; }
  .bi-skip-start-btn-fill::before { content: "\\f55f"; }
  .bi-skip-start-btn::before { content: "\\f560"; }
  .bi-skip-start-circle-fill::before { content: "\\f561"; }
  .bi-skip-start-circle::before { content: "\\f562"; }
  .bi-skip-start-fill::before { content: "\\f563"; }
  .bi-skip-start::before { content: "\\f564"; }
  .bi-slack::before { content: "\\f565"; }
  .bi-slash-circle-fill::before { content: "\\f566"; }
  .bi-slash-circle::before { content: "\\f567"; }
  .bi-slash-square-fill::before { content: "\\f568"; }
  .bi-slash-square::before { content: "\\f569"; }
  .bi-slash::before { content: "\\f56a"; }
  .bi-sliders::before { content: "\\f56b"; }
  .bi-smartwatch::before { content: "\\f56c"; }
  .bi-snow::before { content: "\\f56d"; }
  .bi-snow2::before { content: "\\f56e"; }
  .bi-snow3::before { content: "\\f56f"; }
  .bi-sort-alpha-down-alt::before { content: "\\f570"; }
  .bi-sort-alpha-down::before { content: "\\f571"; }
  .bi-sort-alpha-up-alt::before { content: "\\f572"; }
  .bi-sort-alpha-up::before { content: "\\f573"; }
  .bi-sort-down-alt::before { content: "\\f574"; }
  .bi-sort-down::before { content: "\\f575"; }
  .bi-sort-numeric-down-alt::before { content: "\\f576"; }
  .bi-sort-numeric-down::before { content: "\\f577"; }
  .bi-sort-numeric-up-alt::before { content: "\\f578"; }
  .bi-sort-numeric-up::before { content: "\\f579"; }
  .bi-sort-up-alt::before { content: "\\f57a"; }
  .bi-sort-up::before { content: "\\f57b"; }
  .bi-soundwave::before { content: "\\f57c"; }
  .bi-speaker-fill::before { content: "\\f57d"; }
  .bi-speaker::before { content: "\\f57e"; }
  .bi-speedometer::before { content: "\\f57f"; }
  .bi-speedometer2::before { content: "\\f580"; }
  .bi-spellcheck::before { content: "\\f581"; }
  .bi-square-fill::before { content: "\\f582"; }
  .bi-square-half::before { content: "\\f583"; }
  .bi-square::before { content: "\\f584"; }
  .bi-stack::before { content: "\\f585"; }
  .bi-star-fill::before { content: "\\f586"; }
  .bi-star-half::before { content: "\\f587"; }
  .bi-star::before { content: "\\f588"; }
  .bi-stars::before { content: "\\f589"; }
  .bi-stickies-fill::before { content: "\\f58a"; }
  .bi-stickies::before { content: "\\f58b"; }
  .bi-sticky-fill::before { content: "\\f58c"; }
  .bi-sticky::before { content: "\\f58d"; }
  .bi-stop-btn-fill::before { content: "\\f58e"; }
  .bi-stop-btn::before { content: "\\f58f"; }
  .bi-stop-circle-fill::before { content: "\\f590"; }
  .bi-stop-circle::before { content: "\\f591"; }
  .bi-stop-fill::before { content: "\\f592"; }
  .bi-stop::before { content: "\\f593"; }
  .bi-stoplights-fill::before { content: "\\f594"; }
  .bi-stoplights::before { content: "\\f595"; }
  .bi-stopwatch-fill::before { content: "\\f596"; }
  .bi-stopwatch::before { content: "\\f597"; }
  .bi-subtract::before { content: "\\f598"; }
  .bi-suit-club-fill::before { content: "\\f599"; }
  .bi-suit-club::before { content: "\\f59a"; }
  .bi-suit-diamond-fill::before { content: "\\f59b"; }
  .bi-suit-diamond::before { content: "\\f59c"; }
  .bi-suit-heart-fill::before { content: "\\f59d"; }
  .bi-suit-heart::before { content: "\\f59e"; }
  .bi-suit-spade-fill::before { content: "\\f59f"; }
  .bi-suit-spade::before { content: "\\f5a0"; }
  .bi-sun-fill::before { content: "\\f5a1"; }
  .bi-sun::before { content: "\\f5a2"; }
  .bi-sunglasses::before { content: "\\f5a3"; }
  .bi-sunrise-fill::before { content: "\\f5a4"; }
  .bi-sunrise::before { content: "\\f5a5"; }
  .bi-sunset-fill::before { content: "\\f5a6"; }
  .bi-sunset::before { content: "\\f5a7"; }
  .bi-symmetry-horizontal::before { content: "\\f5a8"; }
  .bi-symmetry-vertical::before { content: "\\f5a9"; }
  .bi-table::before { content: "\\f5aa"; }
  .bi-tablet-fill::before { content: "\\f5ab"; }
  .bi-tablet-landscape-fill::before { content: "\\f5ac"; }
  .bi-tablet-landscape::before { content: "\\f5ad"; }
  .bi-tablet::before { content: "\\f5ae"; }
  .bi-tag-fill::before { content: "\\f5af"; }
  .bi-tag::before { content: "\\f5b0"; }
  .bi-tags-fill::before { content: "\\f5b1"; }
  .bi-tags::before { content: "\\f5b2"; }
  .bi-telegram::before { content: "\\f5b3"; }
  .bi-telephone-fill::before { content: "\\f5b4"; }
  .bi-telephone-forward-fill::before { content: "\\f5b5"; }
  .bi-telephone-forward::before { content: "\\f5b6"; }
  .bi-telephone-inbound-fill::before { content: "\\f5b7"; }
  .bi-telephone-inbound::before { content: "\\f5b8"; }
  .bi-telephone-minus-fill::before { content: "\\f5b9"; }
  .bi-telephone-minus::before { content: "\\f5ba"; }
  .bi-telephone-outbound-fill::before { content: "\\f5bb"; }
  .bi-telephone-outbound::before { content: "\\f5bc"; }
  .bi-telephone-plus-fill::before { content: "\\f5bd"; }
  .bi-telephone-plus::before { content: "\\f5be"; }
  .bi-telephone-x-fill::before { content: "\\f5bf"; }
  .bi-telephone-x::before { content: "\\f5c0"; }
  .bi-telephone::before { content: "\\f5c1"; }
  .bi-terminal-fill::before { content: "\\f5c2"; }
  .bi-terminal::before { content: "\\f5c3"; }
  .bi-text-center::before { content: "\\f5c4"; }
  .bi-text-indent-left::before { content: "\\f5c5"; }
  .bi-text-indent-right::before { content: "\\f5c6"; }
  .bi-text-left::before { content: "\\f5c7"; }
  .bi-text-paragraph::before { content: "\\f5c8"; }
  .bi-text-right::before { content: "\\f5c9"; }
  .bi-textarea-resize::before { content: "\\f5ca"; }
  .bi-textarea-t::before { content: "\\f5cb"; }
  .bi-textarea::before { content: "\\f5cc"; }
  .bi-thermometer-half::before { content: "\\f5cd"; }
  .bi-thermometer-high::before { content: "\\f5ce"; }
  .bi-thermometer-low::before { content: "\\f5cf"; }
  .bi-thermometer-snow::before { content: "\\f5d0"; }
  .bi-thermometer-sun::before { content: "\\f5d1"; }
  .bi-thermometer::before { content: "\\f5d2"; }
  .bi-three-dots-vertical::before { content: "\\f5d3"; }
  .bi-three-dots::before { content: "\\f5d4"; }
  .bi-toggle-off::before { content: "\\f5d5"; }
  .bi-toggle-on::before { content: "\\f5d6"; }
  .bi-toggle2-off::before { content: "\\f5d7"; }
  .bi-toggle2-on::before { content: "\\f5d8"; }
  .bi-toggles::before { content: "\\f5d9"; }
  .bi-toggles2::before { content: "\\f5da"; }
  .bi-tools::before { content: "\\f5db"; }
  .bi-tornado::before { content: "\\f5dc"; }
  .bi-trash-fill::before { content: "\\f5dd"; }
  .bi-trash::before { content: "\\f5de"; }
  .bi-trash2-fill::before { content: "\\f5df"; }
  .bi-trash2::before { content: "\\f5e0"; }
  .bi-tree-fill::before { content: "\\f5e1"; }
  .bi-tree::before { content: "\\f5e2"; }
  .bi-triangle-fill::before { content: "\\f5e3"; }
  .bi-triangle-half::before { content: "\\f5e4"; }
  .bi-triangle::before { content: "\\f5e5"; }
  .bi-trophy-fill::before { content: "\\f5e6"; }
  .bi-trophy::before { content: "\\f5e7"; }
  .bi-tropical-storm::before { content: "\\f5e8"; }
  .bi-truck-flatbed::before { content: "\\f5e9"; }
  .bi-truck::before { content: "\\f5ea"; }
  .bi-tsunami::before { content: "\\f5eb"; }
  .bi-tv-fill::before { content: "\\f5ec"; }
  .bi-tv::before { content: "\\f5ed"; }
  .bi-twitch::before { content: "\\f5ee"; }
  .bi-twitter::before { content: "\\f5ef"; }
  .bi-type-bold::before { content: "\\f5f0"; }
  .bi-type-h1::before { content: "\\f5f1"; }
  .bi-type-h2::before { content: "\\f5f2"; }
  .bi-type-h3::before { content: "\\f5f3"; }
  .bi-type-italic::before { content: "\\f5f4"; }
  .bi-type-strikethrough::before { content: "\\f5f5"; }
  .bi-type-underline::before { content: "\\f5f6"; }
  .bi-type::before { content: "\\f5f7"; }
  .bi-ui-checks-grid::before { content: "\\f5f8"; }
  .bi-ui-checks::before { content: "\\f5f9"; }
  .bi-ui-radios-grid::before { content: "\\f5fa"; }
  .bi-ui-radios::before { content: "\\f5fb"; }
  .bi-umbrella-fill::before { content: "\\f5fc"; }
  .bi-umbrella::before { content: "\\f5fd"; }
  .bi-union::before { content: "\\f5fe"; }
  .bi-unlock-fill::before { content: "\\f5ff"; }
  .bi-unlock::before { content: "\\f600"; }
  .bi-upc-scan::before { content: "\\f601"; }
  .bi-upc::before { content: "\\f602"; }
  .bi-upload::before { content: "\\f603"; }
  .bi-vector-pen::before { content: "\\f604"; }
  .bi-view-list::before { content: "\\f605"; }
  .bi-view-stacked::before { content: "\\f606"; }
  .bi-vinyl-fill::before { content: "\\f607"; }
  .bi-vinyl::before { content: "\\f608"; }
  .bi-voicemail::before { content: "\\f609"; }
  .bi-volume-down-fill::before { content: "\\f60a"; }
  .bi-volume-down::before { content: "\\f60b"; }
  .bi-volume-mute-fill::before { content: "\\f60c"; }
  .bi-volume-mute::before { content: "\\f60d"; }
  .bi-volume-off-fill::before { content: "\\f60e"; }
  .bi-volume-off::before { content: "\\f60f"; }
  .bi-volume-up-fill::before { content: "\\f610"; }
  .bi-volume-up::before { content: "\\f611"; }
  .bi-vr::before { content: "\\f612"; }
  .bi-wallet-fill::before { content: "\\f613"; }
  .bi-wallet::before { content: "\\f614"; }
  .bi-wallet2::before { content: "\\f615"; }
  .bi-watch::before { content: "\\f616"; }
  .bi-water::before { content: "\\f617"; }
  .bi-whatsapp::before { content: "\\f618"; }
  .bi-wifi-1::before { content: "\\f619"; }
  .bi-wifi-2::before { content: "\\f61a"; }
  .bi-wifi-off::before { content: "\\f61b"; }
  .bi-wifi::before { content: "\\f61c"; }
  .bi-wind::before { content: "\\f61d"; }
  .bi-window-dock::before { content: "\\f61e"; }
  .bi-window-sidebar::before { content: "\\f61f"; }
  .bi-window::before { content: "\\f620"; }
  .bi-wrench::before { content: "\\f621"; }
  .bi-x-circle-fill::before { content: "\\f622"; }
  .bi-x-circle::before { content: "\\f623"; }
  .bi-x-diamond-fill::before { content: "\\f624"; }
  .bi-x-diamond::before { content: "\\f625"; }
  .bi-x-octagon-fill::before { content: "\\f626"; }
  .bi-x-octagon::before { content: "\\f627"; }
  .bi-x-square-fill::before { content: "\\f628"; }
  .bi-x-square::before { content: "\\f629"; }
  .bi-x::before { content: "\\f62a"; }
  .bi-youtube::before { content: "\\f62b"; }
  .bi-zoom-in::before { content: "\\f62c"; }
  .bi-zoom-out::before { content: "\\f62d"; }
  .bi-bank::before { content: "\\f62e"; }
  .bi-bank2::before { content: "\\f62f"; }
  .bi-bell-slash-fill::before { content: "\\f630"; }
  .bi-bell-slash::before { content: "\\f631"; }
  .bi-cash-coin::before { content: "\\f632"; }
  .bi-check-lg::before { content: "\\f633"; }
  .bi-coin::before { content: "\\f634"; }
  .bi-currency-bitcoin::before { content: "\\f635"; }
  .bi-currency-dollar::before { content: "\\f636"; }
  .bi-currency-euro::before { content: "\\f637"; }
  .bi-currency-exchange::before { content: "\\f638"; }
  .bi-currency-pound::before { content: "\\f639"; }
  .bi-currency-yen::before { content: "\\f63a"; }
  .bi-dash-lg::before { content: "\\f63b"; }
  .bi-exclamation-lg::before { content: "\\f63c"; }
  .bi-file-earmark-pdf-fill::before { content: "\\f63d"; }
  .bi-file-earmark-pdf::before { content: "\\f63e"; }
  .bi-file-pdf-fill::before { content: "\\f63f"; }
  .bi-file-pdf::before { content: "\\f640"; }
  .bi-gender-ambiguous::before { content: "\\f641"; }
  .bi-gender-female::before { content: "\\f642"; }
  .bi-gender-male::before { content: "\\f643"; }
  .bi-gender-trans::before { content: "\\f644"; }
  .bi-headset-vr::before { content: "\\f645"; }
  .bi-info-lg::before { content: "\\f646"; }
  .bi-mastodon::before { content: "\\f647"; }
  .bi-messenger::before { content: "\\f648"; }
  .bi-piggy-bank-fill::before { content: "\\f649"; }
  .bi-piggy-bank::before { content: "\\f64a"; }
  .bi-pin-map-fill::before { content: "\\f64b"; }
  .bi-pin-map::before { content: "\\f64c"; }
  .bi-plus-lg::before { content: "\\f64d"; }
  .bi-question-lg::before { content: "\\f64e"; }
  .bi-recycle::before { content: "\\f64f"; }
  .bi-reddit::before { content: "\\f650"; }
  .bi-safe-fill::before { content: "\\f651"; }
  .bi-safe2-fill::before { content: "\\f652"; }
  .bi-safe2::before { content: "\\f653"; }
  .bi-sd-card-fill::before { content: "\\f654"; }
  .bi-sd-card::before { content: "\\f655"; }
  .bi-skype::before { content: "\\f656"; }
  .bi-slash-lg::before { content: "\\f657"; }
  .bi-translate::before { content: "\\f658"; }
  .bi-x-lg::before { content: "\\f659"; }
  .bi-safe::before { content: "\\f65a"; }
`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @prop schema
 * @prop data
 */
let ShinyForm = class ShinyForm extends s {
    constructor() {
        super(...arguments);
        this._data = {};
    }
    get data() { return this._data; }
    set data(value) { this._data = value; }
    static get styles() {
        return [
            bootstrapCss,
            bootstrapIconsCss
        ];
    }
    render() {
        return $ `Hello world !`;
    }
    connectedCallback() {
        super.connectedCallback();
    }
};
__decorate([
    e({ type: Object })
], ShinyForm.prototype, "data", null);
ShinyForm = __decorate([
    n$1("shiny-form")
], ShinyForm);

export { ShinyForm };
