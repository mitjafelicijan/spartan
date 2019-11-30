/*!
* table filter
* https://codepen.io/chriscoyier/pen/tIuBL
*/
!function(t){"use strict";var e=function(e){var s;function i(i){s=i.target;var r=t.getElementsByClassName(s.getAttribute("data-bind-table"));e.forEach.call(r,(function(t){e.forEach.call(t.tBodies,(function(t){e.forEach.call(t.rows,n)}))}))}function n(t){var e=t.textContent.toLowerCase(),i=s.value.toLowerCase();t.style.display=-1===e.indexOf(i)?"none":"table-row"}return{init:function(){var s=t.querySelectorAll("[data-bind-table]");e.forEach.call(s,(function(t){t.oninput=i}))}}}(Array.prototype);t.addEventListener("readystatechange",(function(){"complete"===t.readyState&&e.init()}))}(document),
/*!
* tsorter 2.0.0 - Copyright 2015 Terrill Dent, http://terrill.ca
* JavaScript HTML Table Sorter
* Released under MIT license, http://terrill.ca/sorting/tsorter/LICENSE
*/
function(t){var e=function(){"use strict";var e,s,i,n=!!t.addEventListener;return Object.create||(Object.create=function(t){var e=function(){};return e.prototype=t,new e}),s=function(t,e,s){n?t.addEventListener(e,s,!1):t.attachEvent("on"+e,s)},i=function(t,e,s){n?t.removeEventListener(e,s,!1):t.detachEvent("on"+e,s)},e={getCell:function(t){return this.trs[t].cells[this.column]},sort:function(t){var e=t.target;if(this.column=e.cellIndex,this.get=this.getAccessor(e.getAttribute("data-tsorter")),e.classList.contains("ascend"))e.classList.remove("ascend"),e.classList.add("descend"),this.reverseTable();else if(e.classList.contains("descend"))e.classList.remove("descend"),e.classList.add("ascend"),this.reverseTable();else{for(var s=0;s<this.ths.length;s++)this.ths[s].classList.remove("ascend"),this.ths[s].classList.remove("descend");e.classList.add("ascend"),this.quicksort(0,this.trs.length)}},getAccessor:function(t){var e=this,s=e.accessors;if(s&&s[t])return s[t];switch(t){case"link":return function(t){return e.getCell(t).firstChild.firstChild.nodeValue};case"input":return function(t){return e.getCell(t).firstChild.value};case"numeric":return function(t){return parseFloat(e.getCell(t).firstChild.nodeValue,10)};default:return function(t){return e.getCell(t).firstChild.nodeValue}}},exchange:function(t,e){var s,i=this.tbody,n=this.trs;t===e+1?i.insertBefore(n[t],n[e]):e===t+1?i.insertBefore(n[e],n[t]):(s=i.replaceChild(n[t],n[e]),n[t]?i.insertBefore(s,n[t]):i.appendChild(s))},reverseTable:function(){var t;for(t=1;t<this.trs.length;t++)this.tbody.insertBefore(this.trs[t],this.trs[0])},quicksort:function(t,e){var s,i,n;if(!(e<=t+1))if(e-t!=2){for(s=t+1,i=e-1,this.get(t)>this.get(s)&&this.exchange(s,t),this.get(i)>this.get(t)&&this.exchange(t,i),this.get(t)>this.get(s)&&this.exchange(s,t),n=this.get(t);;){for(i--;n>this.get(i);)i--;for(s++;this.get(s)>n;)s++;if(i<=s)break;this.exchange(s,i)}this.exchange(t,i),i-t<e-i?(this.quicksort(t,i),this.quicksort(i+1,e)):(this.quicksort(i+1,e),this.quicksort(t,i))}else this.get(e-1)>this.get(t)&&this.exchange(e-1,t)},init:function(e,i,n){var r;for("string"==typeof e&&(e=t.getElementById(e)),this.table=e,this.ths=e.getElementsByTagName("th"),this.tbody=e.tBodies[0],this.trs=this.tbody.getElementsByTagName("tr"),this.prevCol=i&&i>0?i:-1,this.accessors=n,this.boundSort=this.sort.bind(this),r=0;r<this.ths.length;r++)s(this.ths[r],"click",this.boundSort)},destroy:function(){var t;if(this.ths)for(t=0;t<this.ths.length;t++)i(this.ths[t],"click",this.boundSort)}},{create:function(t,s,i){var n=Object.create(e);return n.init(t,s,i),n}}}();t.querySelectorAll(".sortable").forEach((function(t){e.create(t)}))}(document);