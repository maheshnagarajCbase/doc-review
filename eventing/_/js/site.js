!function(){"use strict";function e(i){var o=i.type;window.removeEventListener("scroll",t),s.element.style.height="",(s.preferredHeight=s.element.getBoundingClientRect().height)>0?("visible"===window.getComputedStyle(l).visibility&&(s.encroachingElement||(s.encroachingElement=document.querySelector("footer.footer")),n(s.preferredHeight,s.viewHeight=window.innerHeight,s.encroachingElement),window.addEventListener("scroll",t)),"resize"!==o&&(d&&function(e,t){var n=e.offsetTop+e.offsetHeight+5-t.offsetHeight/2;n>0&&(t.scrollTop=n)}(d.querySelector(".nav-link"),s.element),o&&window.removeEventListener(o,e))):"load"===o&&window.removeEventListener(o,e)}function t(){n(s.preferredHeight,s.viewHeight,s.encroachingElement)}function n(e,t,n){var i=t-n.getBoundingClientRect().top;s.element.style.height=i>0?Math.max(0,e-i)+"px":""}function i(e){this.classList.toggle("is-active"),c(e)}function o(e){3!==e.which&&2!==e.button&&(document.documentElement.classList.remove("is-clipped--nav"),l.classList.remove("is-active"),l.removeEventListener("click",c),window.removeEventListener("click",o),c(e))}function r(e,t,n){if((t=t.parentNode)!==n)return t.classList.contains(e)?t:r(e,t,n)}function c(e){e.stopPropagation()}var l=document.querySelector("nav.nav"),s={};if(s.element=l&&l.querySelector(".nav-menu")){var a,d=s.element.querySelector(".is-current-page");s.element.addEventListener("mousedown",function(e){e.detail>1&&e.preventDefault()}),function(e,t){return[].slice.call((t||document).querySelectorAll(e))}(".nav-toggle",s.element).forEach(function(e){var t=r("nav-item",e,s.element);e.addEventListener("click",i.bind(t));var n=function(e,t){if(t=e.nextElementSibling)return t;for(t=e;(t=t.nextSibling)&&1!==t.nodeType;);return t}(e);n.classList.contains("nav-text")&&(n.style.cursor="pointer",n.addEventListener("click",i.bind(t)))}),e({}),window.addEventListener("load",e),window.addEventListener("resize",e),(a=document.querySelector("main .nav-control"))&&a.addEventListener("click",function(e){if(l.classList.contains("is-active"))return o(e);document.documentElement.classList.add("is-clipped--nav"),l.classList.add("is-active"),l.addEventListener("click",c),window.addEventListener("click",o),c(e)})}}();
!function(){"use strict";function e(){var e;if(c.some(function(t){if(!(Math.floor(t.getBoundingClientRect().top)<=0))return!0;e="#"+t.id}),e){if(e!==r){r&&d[r].classList.remove("is-active");var t=d[e];t.classList.add("is-active"),o.scrollHeight>o.offsetHeight&&(o.scrollTop=Math.max(0,t.offsetTop+t.offsetHeight-o.offsetHeight)),r=e}}else r&&(d[r].classList.remove("is-active"),r=void 0)}function t(e){return[].slice.call(e)}var n=document.querySelector("article.doc");if(n){var o,i=document.querySelector("aside.toc.sidebar"),c=function(e,n){return t((n||document).querySelectorAll(e))}("h1.sect0, .sect1 > h2[id]",n);if(c.length){var r,d={},a=c.reduce(function(e,n){var o=t(n.childNodes).reduce(function(e,t){return"A"!==t.nodeName&&e.appendChild(t.cloneNode(!0)),e},document.createElement("a"));d[o.href="#"+n.id]=o;var i=document.createElement("li");return i.appendChild(o),e.appendChild(i),e},document.createElement("ul"));(o=i&&i.querySelector(".toc-menu"))||((o=document.createElement("div")).className="toc-menu");var l=document.createElement("h3");l.textContent="On This Page",o.appendChild(l),o.appendChild(a),i&&window.addEventListener("load",function t(){e(),window.addEventListener("scroll",e),window.removeEventListener("load",t)});var s=n.querySelector("h1.page + *");if(s){var u=document.createElement("aside");u.className="toc embedded",u.appendChild(o.cloneNode(!0)),n.insertBefore(u,s)}}else i&&i.parentNode.removeChild(i)}}();
!function(){"use strict";"MozAppearance"in document.body.style&&Array.prototype.slice.call(document.querySelectorAll("main [id]")).forEach(function(e){if(e.firstChild&&~window.getComputedStyle(e).display.indexOf("inline")){var t=document.createElement("a");t.id=e.id,e.removeAttribute("id"),e.parentNode.insertBefore(t,e)}})}();
document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})});
!function(){"use strict";var e=document.querySelector("button.search");e&&e.addEventListener("click",function(e){var t=document.querySelector(".navbar-start");t.classList.toggle("reveal-search-input");var r=t.querySelector(".query");r.value="",r.focus(),e.preventDefault()})}();
!function(){function a(a,t){return Array.prototype.slice.call((t||document).querySelectorAll(a))}var t=window.location.hash;a(".doc .tabset").forEach(function(i){var e,s=i.querySelector(".tabs");if(s){var c;a("li",s).forEach(function(s,n){var r=(s.querySelector("a[id]")||s).id;if(r){var l=function(t,i){return a(".tab-pane",i).find(function(a){return a.getAttribute("aria-labelledby")===t})}(r,i);n||(c={tab:s,pane:l}),!e&&t==="#"+r&&(e=!0)?(s.classList.add("is-active"),l&&l.classList.add("is-active")):n||(s.classList.remove("is-active"),l&&l.classList.remove("is-active")),s.addEventListener("click",function(t){var i=this.tab,e=this.pane;a(".tabs li, .tab-pane",this.tabset).forEach(function(a){a===i||a===e?a.classList.add("is-active"):a.classList.remove("is-active")}),t.preventDefault()}.bind({tabset:i,tab:s,pane:l}))}}),!e&&c&&(c.tab.classList.add("is-active"),c.pane&&c.pane.classList.add("is-active"))}i.classList.remove("is-loading")})}();