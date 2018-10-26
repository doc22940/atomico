!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.atomico={})}(this,function(t){"use strict";const e="element-collect",s="element-master",n="element-context";function i(t){return t.shadowRoot||t}function o(t,e){i(t).appendChild(e)}function r(t,e,...s){return new l(t,e,function t(e,s=[]){for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)?t(i,s):s.push(c(i)?i:new l("",{},[i||""]))}return s}(s))}class l{constructor(t,e,s){this.tag=t,this.props=e||{},this.children=s||[]}clone(t=this.tag,e=this.props,s=this.children){return new l(t,Object.assign({},e),s)}}function c(t){return"object"==typeof t&&t instanceof l}function h(t,r,c,p={},a,u){let f=r&&r[s]||new l,g=r,y=c;if(c){let s="slot"===c.tag;if(c=d(c,p),f=d(f,p),u=u||"svg"===c.tag,t&&f.tag!==c.tag)if(g=null!==(m=c.tag)&&"object"==typeof m&&11!==m.nodeType?c.tag:c.tag?u?document.createElementNS("http://www.w3.org/2000/svg",c.tag):document.createElement(c.tag):document.createTextNode(""),r)for(!function(t,e,s){i(t).replaceChild(e,s)}(t,g,r);!s&&!c.collect&&r.firstChild;)o(g,r.firstChild);else o(t,g);if(3===g.nodeType)f.children[0]!==c.children[0]&&(g.textContent=c.children[0]);else{g&&g[n]&&(a=g[n](a));let i=t&&g[e]||{},o=function(t,e,s,n,i){let o=Object.keys(e).concat(Object.keys(s)),r=o.length,l={};for(let c=0;c<r;c++){let r=o[c];if((!n||"xmlns"!==r)&&e[r]!==s[r]){if(i&&i.indexOf(r)>-1){l[r]=s[r];continue}let o="function"==typeof s[r],c="function"==typeof e[r];if(o||c)c&&t.removeEventListener(r,e[r]),o&&t.addEventListener(r,s[r]);else if(r in s)if(r in t&&!n||n&&"style"===r)if("style"===r)if("object"==typeof s[r]){let n=e[r]||{},i=s[r];for(let e in i)n[e]!==i[e]&&("-"===e[0]?t.setProperty(e,i[e]):t.style[e]=i[e]);s[r]=Object.assign({},n,i)}else t.style.cssText=s[r];else t[r]=s[r];else n?t.setAttributeNS(null,r,s[r]):t.setAttribute(r,s[r]);else i?s[r]=e[r]:t.removeAttribute(r)}}return l}(g,c.tag===f.tag?f.props:{},c.props,u,i.props);if(i.handler)o.children=c.children.map(t=>t.tag?t:t.children[0]),i.handler(o);else if(!s&&g){let t=Array.from((g.shadowRoot||g).childNodes),e=Math.max(t.length,c.children.length);for(let s=0;s<e;s++)h(g,t[s],c.children[s],p,a,u)}}}else t&&r&&function(t,e){i(t).removeChild(e)}(t,r);var m;return g[s]=y,g}function p(t,s,n){this.observer=t[e]={props:s,handler:n}}function a(t,e,s="context"){t[n]=(n=>t[s]=e(n)||n)}function d(t,e){return"slot"===t.tag?(delete(t=t.clone(e[t.props.name]||"")).props.name,t):t}function u(t){return Promise.resolve().then(t)}function f(t){let e=Array.isArray(t);return{keys:(e?t:Object.keys(t)).concat("children"),types:e?{}:t}}t.Element=class extends HTMLElement{constructor(){super(),this.props={},this.slots={},this.state={},this.preventRender=!0,this.is=this.nodeName.toLocaleLowerCase(),this._props=f(this.constructor.props),new p(this,this._props.keys,t=>this.setProperties(t)),new a(this,t=>this.getContext(t))}get content(){return this.shadowRoot||this}static get props(){return[]}static get observedAttributes(){return f(this.props).keys}setAttribute(t,e){this._props.keys.indexOf(t)>-1?this.setProperties({[t]:e}):super.setAttribute(t,e)}setProperties(t){let e={},s=this.isMounted;for(let s in t){let n,i=this._props.types[s],o=t[s];o=i?i(o):o,n=s.replace(/-+([\w])/g,(t,e)=>e.toUpperCase()),o!==this.props[n]&&(e[n]=o)}Object.keys(e).length&&(s&&(s=!1!==this.onUpdate(e)),this.props=Object.assign({},this.props,e),s&&this.setState({}))}setState(t,e){"object"==typeof t&&(this.state=Object.assign({},this.state,t),this.preventRender||(this.preventRender=!0,u(()=>{let t=this.render();h(!1,this,(t=c(t)&&"host"===t.tag?t:r("host",{},t)).clone(this.is),this.slots,this.context),this.preventRender=!1,e?e():this.onUpdated()})))}connectedCallback(){u(()=>{let t=document.createDocumentFragment();for(;this.firstChild;){let e=this.firstChild,s=e.getAttribute&&e.getAttribute("slot");s&&(this.slots[s]=e),t.appendChild(e)}this.preventRender=!1,this.setState({},()=>{this.isMounted=!0,this.onMounted()})})}disconnectedCallback(){this.onUnmounted()}attributeChangedCallback(t,e,s){e!==s&&this.setProperties({[t]:s})}getContext(){}onMounted(){}onUpdate(){}onUnmounted(){}onUpdated(){}render(){}},t.h=r,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=atomico.umd.js.map
