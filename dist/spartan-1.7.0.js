/*
* table filter
* https://codepen.io/chriscoyier/pen/tIuBL
*/
(function(a){var b=(function(d){var e;
function c(h){e=h.target;var g=a.getElementsByClassName(e.getAttribute("data-bind-table"));
d.forEach.call(g,function(i){d.forEach.call(i.tBodies,function(j){d.forEach.call(j.rows,f)
})})}function f(i){var h=i.textContent.toLowerCase(),g=e.value.toLowerCase();i.style.display=h.indexOf(g)===-1?"none":"table-row"
}return{init:function(){var g=a.querySelectorAll("[data-bind-table]");d.forEach.call(g,function(h){h.oninput=c
})}}})(Array.prototype);a.addEventListener("readystatechange",function(){if(a.readyState==="complete"){b.init()
}})})(document);
/*
* tsorter 2.0.0 - Copyright 2015 Terrill Dent, http://terrill.ca
* JavaScript HTML Table Sorter
* Released under MIT license, http://terrill.ca/sorting/tsorter/LICENSE
*/
(function(a){var c=(function(){var e,f,g,d=!!a.addEventListener;
if(!Object.create){Object.create=function(h){var i=function(){return undefined};i.prototype=h;
return new i()}}f=function(i,h,j){if(d){i.addEventListener(h,j,false)}else{i.attachEvent("on"+h,j)
}};g=function(i,h,j){if(d){i.removeEventListener(h,j,false)}else{i.detachEvent("on"+h,j)
}};e={getCell:function(i){var h=this;return h.trs[i].cells[h.column]},sort:function(l){var k=this,i=l.target;
k.column=i.cellIndex;k.get=k.getAccessor(i.getAttribute("data-tsorter"));if(i.classList.contains("ascend")){i.classList.remove("ascend");
i.classList.add("descend");k.reverseTable()}else{if(i.classList.contains("descend")){i.classList.remove("descend");
i.classList.add("ascend");k.reverseTable()}else{for(var h=0;h<k.ths.length;h++){k.ths[h].classList.remove("ascend");
k.ths[h].classList.remove("descend")}i.classList.add("ascend");k.quicksort(0,k.trs.length)
}}},getAccessor:function(j){var i=this,h=i.accessors;if(h&&h[j]){return h[j]}switch(j){case"link":return function(k){return i.getCell(k).firstChild.firstChild.nodeValue
};case"input":return function(k){return i.getCell(k).firstChild.value};case"numeric":return function(k){return parseFloat(i.getCell(k).firstChild.nodeValue,10)
};default:return function(k){return i.getCell(k).firstChild.nodeValue}}},exchange:function(m,l){var o=this,k=o.tbody,h=o.trs,n;
if(m===l+1){k.insertBefore(h[m],h[l])}else{if(l===m+1){k.insertBefore(h[l],h[m])}else{n=k.replaceChild(h[m],h[l]);
if(!h[m]){k.appendChild(n)}else{k.insertBefore(n,h[m])}}}},reverseTable:function(){var j=this,h;
for(h=1;h<j.trs.length;h++){j.tbody.insertBefore(j.trs[h],j.trs[0])}},quicksort:function(n,l){var m,k,h,o=this;
if(l<=n+1){return}if((l-n)===2){if(o.get(l-1)>o.get(n)){o.exchange(l-1,n)}return}m=n+1;
k=l-1;if(o.get(n)>o.get(m)){o.exchange(m,n)}if(o.get(k)>o.get(n)){o.exchange(n,k)
}if(o.get(n)>o.get(m)){o.exchange(m,n)}h=o.get(n);while(true){k--;while(h>o.get(k)){k--
}m++;while(o.get(m)>h){m++}if(k<=m){break}o.exchange(m,k)}o.exchange(n,k);if((k-n)<(l-k)){o.quicksort(n,k);
o.quicksort(k+1,l)}else{o.quicksort(k+1,l);o.quicksort(n,k)}},init:function(m,l,h){var k=this,j;
if(typeof m==="string"){m=a.getElementById(m)}k.table=m;k.ths=m.getElementsByTagName("th");
k.tbody=m.tBodies[0];k.trs=k.tbody.getElementsByTagName("tr");k.prevCol=(l&&l>0)?l:-1;
k.accessors=h;k.boundSort=k.sort.bind(k);for(j=0;j<k.ths.length;j++){f(k.ths[j],"click",k.boundSort)
}},destroy:function(){var j=this,h;if(j.ths){for(h=0;h<j.ths.length;h++){g(j.ths[h],"click",j.boundSort)
}}}};return{create:function(j,i,h){var k=Object.create(e);k.init(j,i,h);return k}}
}());var b=a.querySelectorAll(".sortable");b.forEach(function(d){c.create(d)})})(document);