function t(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let s=0;s<n.length;s++){const o=n[s],g=o.indexOf("$");-1!==g&&-1!==e.indexOf(o.substring(0,g+1))||-1===e.indexOf(o)&&(r[o]=t[o])}return r}function e(t,e){let n=Object.getOwnPropertyNames(t);const r={};for(let s=0;s<n.length;s++){const o=n[s];o.substring(0,e.length)===e&&(r[o.substring(e.length)]=t[o])}return r}export{t as e,e as p};
