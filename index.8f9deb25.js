function t(t,e,i,o){Object.defineProperty(t,e,{get:i,set:o,enumerable:!0,configurable:!0})}var e,i,o,r=globalThis,n={},s={},a=r.parcelRequire8861;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},r.parcelRequire8861=a);var l=a.register;l("f1VGz",function(e,i){t(e.exports,"a",()=>er),t(e.exports,"b",()=>en),t(e.exports,"c",()=>es),t(e.exports,"d",()=>el),t(e.exports,"e",()=>e$),t(e.exports,"f",()=>eP),t(e.exports,"g",()=>eM),t(e.exports,"h",()=>eT),t(e.exports,"i",()=>eB),t(e.exports,"j",()=>eU);var o,r,n,s,l,h,u=a("6ZWSX").Buffer,d={},p=function(t,e,i,o,r){var n=new Worker(d[e]||(d[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return n.onmessage=function(t){var e=t.data,i=e.$e$;if(i){var o=Error(i[0]);o.code=i[1],o.stack=i[2],r(o,null)}else r(null,e)},n.postMessage(i,o),n},c=Uint8Array,f=Uint16Array,m=Int32Array,g=new c([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),y=new c([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),v=new c([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_=function(t,e){for(var i=new f(31),o=0;o<31;++o)i[o]=e+=1<<t[o-1];for(var r=new m(i[30]),o=1;o<30;++o)for(var n=i[o];n<i[o+1];++n)r[n]=n-i[o]<<5|o;return{b:i,r:r}},b=_(g,2),w=b.b,C=b.r;w[28]=258,C[258]=28;var A=_(y,0).b,L=new f(32768);for(k=0;k<32768;++k)S=(61680&(S=(52428&(S=(43690&k)>>1|(21845&k)<<1))>>2|(13107&S)<<2))>>4|(3855&S)<<4,L[k]=((65280&S)>>8|(255&S)<<8)>>1;var S,k,x=function(t,e,i){for(var o,r=t.length,n=0,s=new f(e);n<r;++n)t[n]&&++s[t[n]-1];var a=new f(e);for(n=1;n<e;++n)a[n]=a[n-1]+s[n-1]<<1;if(i){o=new f(1<<e);var l=15-e;for(n=0;n<r;++n)if(t[n])for(var h=n<<4|t[n],u=e-t[n],d=a[t[n]-1]++<<u,p=d|(1<<u)-1;d<=p;++d)o[L[d]>>l]=h}else for(o=new f(r),n=0;n<r;++n)t[n]&&(o[n]=L[a[t[n]-1]++]>>15-t[n]);return o},E=new c(288);for(k=0;k<144;++k)E[k]=8;for(k=144;k<256;++k)E[k]=9;for(k=256;k<280;++k)E[k]=7;for(k=280;k<288;++k)E[k]=8;var k,I=new c(32);for(k=0;k<32;++k)I[k]=5;var k,O=x(E,9,1),$=x(I,5,1),P=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},M=function(t,e,i){var o=e/8|0;return(t[o]|t[o+1]<<8)>>(7&e)&i},T=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(7&e)},B=function(t){return(t+7)/8|0},U=function(t,e,i){(null==e||e<0)&&(e=0),(null==i||i>t.length)&&(i=t.length);var o=new c(i-e);return o.set(t.subarray(e,i)),o},N=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(t,e,i){var o=Error(e||N[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,R),!i)throw o;return o},j=function(t,e,i,o){var r=t.length,n=o?o.length:0;if(!r||e.f&&!e.l)return i||new c(0);var s=!i||2!=e.i,a=e.i;i||(i=new c(3*r));var l=function(t){var e=i.length;if(t>e){var o=new c(Math.max(2*e,t));o.set(i),i=o}},h=e.f||0,u=e.p||0,d=e.b||0,p=e.l,f=e.d,m=e.m,_=e.n,b=8*r;do{if(!p){h=M(t,u,1);var C=M(t,u+1,3);if(u+=3,C){if(1==C)p=O,f=$,m=9,_=5;else if(2==C){var L=M(t,u,31)+257,S=M(t,u+10,15)+4,k=L+M(t,u+5,31)+1;u+=14;for(var E=new c(k),I=new c(19),N=0;N<S;++N)I[v[N]]=M(t,u+3*N,7);u+=3*S;for(var j=P(I),z=(1<<j)-1,D=x(I,j,1),N=0;N<k;){var F=D[M(t,u,z)];u+=15&F;var V=F>>4;if(V<16)E[N++]=V;else{var q=0,H=0;for(16==V?(H=3+M(t,u,3),u+=2,q=E[N-1]):17==V?(H=3+M(t,u,7),u+=3):18==V&&(H=11+M(t,u,127),u+=7);H--;)E[N++]=q}}var Z=E.subarray(0,L),G=E.subarray(L);m=P(Z),_=P(G),p=x(Z,m,1),f=x(G,_,1)}else R(1)}else{var V=B(u)+4,J=t[V-4]|t[V-3]<<8,W=V+J;if(W>r){a&&R(0);break}s&&l(d+J),i.set(t.subarray(V,W),d),e.b=d+=J,e.p=u=8*W,e.f=h;continue}if(u>b){a&&R(0);break}}s&&l(d+131072);for(var X=(1<<m)-1,Y=(1<<_)-1,K=u;;K=u){var q=p[T(t,u)&X],Q=q>>4;if((u+=15&q)>b){a&&R(0);break}if(q||R(2),Q<256)i[d++]=Q;else if(256==Q){K=u,p=null;break}else{var tt=Q-254;if(Q>264){var N=Q-257,te=g[N];tt=M(t,u,(1<<te)-1)+w[N],u+=te}var ti=f[T(t,u)&Y],to=ti>>4;ti||R(3),u+=15&ti;var G=A[to];if(to>3){var te=y[to];G+=T(t,u)&(1<<te)-1,u+=te}if(u>b){a&&R(0);break}s&&l(d+131072);var tr=d+tt;if(d<G){var tn=n-G,ts=Math.min(G,tr);for(tn+d<0&&R(3);d<ts;++d)i[d]=o[tn+d]}for(;d<tr;d+=4)i[d]=i[d-G],i[d+1]=i[d+1-G],i[d+2]=i[d+2-G],i[d+3]=i[d+3-G];d=tr}}e.l=p,e.p=K,e.b=d,e.f=h,p&&(h=1,e.m=m,e.d=f,e.n=_)}while(!h)return d==i.length?i:U(i,0,d)},z=new c(0),D=function(t,e){var i={};for(var o in t)i[o]=t[o];for(var o in e)i[o]=e[o];return i},F=function(t,e,i){for(var o=t(),r=t.toString(),n=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<o.length;++s){var a=o[s],l=n[s];if("function"==typeof a){e+=";"+l+"=";var h=a.toString();if(a.prototype){if(-1!=h.indexOf("[native code]")){var u=h.indexOf(" ",8)+1;e+=h.slice(u,h.indexOf("(",u))}else for(var d in e+=h,a.prototype)e+=";"+l+".prototype."+d+"="+a.prototype[d].toString()}else e+=h}else i[l]=a}return e},V=[],q=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},H=function(t,e,i,o){if(!V[i]){for(var r="",n={},s=t.length-1,a=0;a<s;++a)r=F(t[a],r,n);V[i]={c:F(t[s],r,n),e:n}}var l=D({},V[i].e);return p(V[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,l,q(l),o)},Z=function(){return[c,f,m,g,y,v,w,A,O,$,L,N,x,P,M,T,B,U,R,j,Q,G,J]},G=function(t){return postMessage(t,[t.buffer])},J=function(t){return t&&{out:t.size&&new c(t.size),dictionary:t.dictionary}},W=function(t,e,i,o,r,n){var s=H(i,o,r,function(t,e){s.terminate(),n(t,e)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}},X=function(t,e){return t[e]|t[e+1]<<8},Y=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},K=function(t,e){return Y(t,e)+4294967296*Y(t,e+4)};function Q(t,e){return j(t,{i:2},e&&e.out,e&&e.dictionary)}var tt="u">typeof TextDecoder&&new TextDecoder;try{tt.decode(z,{stream:!0})}catch{}var te=function(t){for(var e="",i=0;;){var o=t[i++],r=(o>127)+(o>223)+(o>239);if(i+r>t.length)return{s:e,r:U(t,i-1)};r?3==r?e+=String.fromCharCode(55296|(o=((15&o)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536)>>10,56320|1023&o):1&r?e+=String.fromCharCode((31&o)<<6|63&t[i++]):e+=String.fromCharCode((15&o)<<12|(63&t[i++])<<6|63&t[i++]):e+=String.fromCharCode(o)}};function ti(t,e){if(e){for(var i="",o=0;o<t.length;o+=16384)i+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return i}if(tt)return tt.decode(t);var r=te(t),n=r.s,i=r.r;return i.length&&R(8),n}var to=function(t,e,i){var o=X(t,e+28),r=ti(t.subarray(e+46,e+46+o),!(2048&X(t,e+8))),n=e+46+o,s=Y(t,e+20),a=i&&4294967295==s?tr(t,n):[s,Y(t,e+24),Y(t,e+42)],l=a[0],h=a[1],u=a[2];return[X(t,e+10),l,h,r,n+X(t,e+30)+X(t,e+32),u]},tr=function(t,e){for(;1!=X(t,e);e+=4+X(t,e+2));return[K(t,e+12),K(t,e+4),K(t,e+20)]},tn="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(t){t()},ts=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function ta(t,e,i,o){if(!e||!e.length)return{output:t};let r,n,s=t;for(let t of e){let e=t(s);if(e.issue){var a,l;let t=(a=r=r||{reason:o,origin:i?.origin,abortEarly:i?.abortEarly,abortPipeEarly:i?.abortPipeEarly},l=e.issue,{reason:a?.reason,validation:l.validation,origin:a?.origin||"value",message:l.message,input:l.input,abortEarly:a?.abortEarly,abortPipeEarly:a?.abortPipeEarly});if(n?n.push(t):n=[t],r.abortEarly||r.abortPipeEarly)break}else s=e.output}return n?{issues:n}:{output:s}}function tl(t,e){return t&&"string"!=typeof t?[void 0,t]:[t,e]}function th(t,e,i,o,r,n){return{issues:[{reason:e,validation:i,origin:t?.origin||"value",message:o,input:r,issues:n,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly}]}}function tu(t,e,i){let[o,r]=tl(e,i);return{schema:"array",array:{item:t},async:!1,_parse(e,i){if(!Array.isArray(e))return th(i,"type","array",o||"Invalid type",e);let n,s=[];for(let o=0;o<e.length;o++){let r=e[o],a=t._parse(r,i);if(a.issues){let t={schema:"array",input:e,key:o,value:r};for(let e of a.issues)e.path?e.path.unshift(t):e.path=[t],n?.push(e);if(n||(n=a.issues),i?.abortEarly)break}else s.push(a.output)}return n?{issues:n}:ta(s,r,i,"array")}}}function td(t,e){let[i,o]=tl(t,e);return{schema:"boolean",async:!1,_parse:(t,e)=>"boolean"!=typeof t?th(e,"type","boolean",i||"Invalid type",t):ta(t,o,e,"boolean")}}function tp(t,e){return{schema:"literal",literal:t,async:!1,_parse:(i,o)=>i!==t?th(o,"type","literal",e||"Invalid type",i):{output:i}}}function tc(t,e){let[i,o]=tl(t,e);return{schema:"number",async:!1,_parse:(t,e)=>"number"!=typeof t?th(e,"type","number",i||"Invalid type",t):ta(t,o,e,"number")}}function tf(t,e,i){let[o,r]=tl(e,i),n;return{schema:"object",object:t,async:!1,_parse(e,i){if(!e||"object"!=typeof e)return th(i,"type","object",o||"Invalid type",e);n=n||Object.entries(t);let s,a={};for(let[t,o]of n){let r=e[t],n=o._parse(r,i);if(n.issues){let o={schema:"object",input:e,key:t,value:r};for(let t of n.issues)t.path?t.path.unshift(o):t.path=[o],s?.push(t);if(s||(s=n.issues),i?.abortEarly)break}else a[t]=n.output}return s?{issues:s}:ta(a,r,i,"object")}}}function tm(t){return{schema:"optional",wrapped:t,async:!1,_parse:(e,i)=>void 0===e?{output:e}:t._parse(e,i)}}function tg(t,e){let[i,o]=tl(t,e);return{schema:"string",async:!1,_parse:(t,e)=>"string"!=typeof t?th(e,"type","string",i||"Invalid type",t):ta(t,o,e,"string")}}var ty=["__proto__","prototype","constructor"];function tv(t,e,i,o){let[r,n,s]=function(t,e,i){if("object"==typeof t&&!Array.isArray(t)){let[o,r]=tl(e,i);return[t,o,r]}let[o,r]=tl(t,e);return[void 0,o,r]}(e,i,o);return{schema:"tuple",tuple:{items:t,rest:r},async:!1,_parse(e,i){if(!Array.isArray(e)||!r&&t.length!==e.length||r&&t.length>e.length)return th(i,"type","tuple",n||"Invalid type",e);let o,a=[];for(let r=0;r<t.length;r++){let n=e[r],s=t[r]._parse(n,i);if(s.issues){let t={schema:"tuple",input:e,key:r,value:n};for(let e of s.issues)e.path?e.path.unshift(t):e.path=[t],o?.push(e);if(o||(o=s.issues),i?.abortEarly)break}else a[r]=s.output}if(r)for(let n=t.length;n<e.length;n++){let t=e[n],s=r._parse(t,i);if(s.issues){let r={schema:"tuple",input:e,key:n,value:t};for(let t of s.issues)t.path?t.path.unshift(r):t.path=[r],o?.push(t);if(o||(o=s.issues),i?.abortEarly)break}else a[n]=s.output}return o?{issues:o}:ta(a,s,i,"tuple")}}}function t_(t,e){return{schema:"union",union:t,async:!1,_parse(i,o){let r,n;for(let e of t){let t=e._parse(i,o);if(t.issues){if(r)for(let e of t.issues)r.push(e);else r=t.issues}else{n=[t.output];break}}return n?{output:n[0]}:th(o,"type","union",e||"Invalid type",i,r)}}}function tb(t,e,i){let[o,r]=tl(e,i);return tf(t.reduce((t,e)=>({...t,...e.object}),{}),o,r)}function tw(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function tC(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var tA=Object.create,tL=Object.defineProperty,tS=Object.getOwnPropertyDescriptor,tk=Object.getOwnPropertyNames,tx=Object.getPrototypeOf,tE=Object.prototype.hasOwnProperty,tI=(t,e,i)=>e in t?tL(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,tO=(t,e)=>function(){return e||(0,t[tk(t)[0]])((e={exports:{}}).exports,e),e.exports},t$=(t,e,i)=>(tI(t,"symbol"!=typeof e?e+"":e,i),i),tP=tO({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0,t.copy=(t,e,i=0,o=0,r=t.width-i,n=t.height-o,s=0,a=0)=>{if(i|=0,o|=0,n|=0,s|=0,a|=0,(r|=0)<=0||n<=0)return;let l=new Uint32Array(t.data.buffer),h=new Uint32Array(e.data.buffer);for(let u=0;u<n;u++){let n=o+u;if(n<0||n>=t.height)continue;let d=a+u;if(!(d<0||d>=e.height))for(let o=0;o<r;o++){let r=i+o;if(r<0||r>=t.width)continue;let a=s+o;if(a<0||a>=e.width)continue;let u=n*t.width+r;h[d*e.width+a]=l[u]}}}}}),tM=tO({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(t=[0,0,0,0],e=4)=>{if(isNaN(e=Math.floor(e))||e<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in t)||t.length<e)throw TypeError(`fill should be iterable with at least ${e} members`);let i=(t=new Uint8ClampedArray(t).slice(0,e)).every(t=>0===t);return(o,r,n)=>{if(void 0===o||void 0===r)throw TypeError("Not enough arguments");if(o=Math.floor(o),r=Math.floor(r),isNaN(o)||o<1||isNaN(r)||r<1)throw TypeError("Index or size is negative or greater than the allowed amount");let s=o*r*e;if(void 0===n&&(n=new Uint8ClampedArray(s)),n instanceof Uint8ClampedArray){if(n.length!==s)throw TypeError("Index or size is negative or greater than the allowed amount");if(!i)for(let i=0;i<r;i++)for(let r=0;r<o;r++){let s=(i*o+r)*e;for(let i=0;i<e;i++)n[s+i]=t[i]}return{get width(){return o},get height(){return r},get data(){return n}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),tT=tO({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=(t,e)=>{if(t<=-e||t>=e||0==t)return 0;let i=t*Math.PI;return Math.sin(i)/i*Math.sin(i/e)/(i/e)},i=t=>Math.round(16383*t);t.filters=(t,o,r,n,s)=>{let a=s?2:3,l=1/r,h=Math.min(1,r),u=a/h,d=new Int16Array((Math.floor((u+1)*2)+2)*o),p=0;for(let r=0;r<o;r++){let s=(r+.5)*l+n,c=Math.max(0,Math.floor(s-u)),f=Math.min(t-1,Math.ceil(s+u)),m=f-c+1,g=new Float32Array(m),y=new Int16Array(m),v=0,_=0;for(let t=c;t<=f;t++){let i=e((t+.5-s)*h,a);v+=i,g[_]=i,_++}let b=0;for(let t=0;t<g.length;t++){let e=g[t]/v;b+=e,y[t]=i(e)}y[o>>1]+=i(1-b);let w=0;for(;w<y.length&&0===y[w];)w++;let C=y.length-1;for(;C>0&&0===y[C];)C--;let A=c+w,L=C-w+1;d[p++]=A,d[p++]=L,d.set(y.subarray(w,C+1),p),p+=L}return d}}}),tB=tO({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0,t.convolve=(t,e,i,o,r,n)=>{let s=0,a=0;for(let l=0;l<o;l++){let h=0;for(let i=0;i<r;i++){let i=s+4*n[h++]|0,r=0,l=0,u=0,d=0;for(let e=n[h++];e>0;e--){let e=n[h++];r=r+e*t[i]|0,l=l+e*t[i+1]|0,u=u+e*t[i+2]|0,d=d+e*t[i+3]|0,i=i+4|0}e[a]=r+8192>>14,e[a+1]=l+8192>>14,e[a+2]=u+8192>>14,e[a+3]=d+8192>>14,a=a+4*o|0}a=(l+1)*4|0,s=(l+1)*i*4|0}}}}),tU=tO({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=tP(),i=tM(),o=tT(),r=tB(),n=(t,e,i=!1)=>{let n=e.width/t.width,s=e.height/t.height,a=o.filters(t.width,e.width,n,0,i),l=o.filters(t.height,e.height,s,0,i),h=new Uint8ClampedArray(e.width*t.height*4);r.convolve(t.data,h,t.width,t.height,e.width,a),r.convolve(h,e.data,t.height,e.width,e.height,l)};t.lanczos=(t,o,r=0,s=0,a=t.width-r,l=t.height-s,h=0,u=0,d=o.width-h,p=o.height-u)=>{if(r|=0,s|=0,l|=0,h|=0,u|=0,d|=0,p|=0,(a|=0)<=0||l<=0||d<=0||p<=0)return;if(0===r&&0===s&&a===t.width&&l===t.height&&0===h&&0===u&&d===o.width&&p===o.height){n(t,o);return}let c=i.createImage(a,l),f=i.createImage(d,p);e.copy(t,c,r,s),n(c,f),e.copy(f,o,0,0,f.width,f.height,h,u)},t.lanczos2=(t,o,r=0,s=0,a=t.width-r,l=t.height-s,h=0,u=0,d=o.width-h,p=o.height-u)=>{if(r|=0,s|=0,l|=0,h|=0,u|=0,d|=0,p|=0,(a|=0)<=0||l<=0||d<=0||p<=0)return;if(0===r&&0===s&&a===t.width&&l===t.height&&0===h&&0===u&&d===o.width&&p===o.height){n(t,o,!0);return}let c=i.createImage(a,l),f=i.createImage(d,p);e.copy(t,c,r,s),n(c,f,!0),e.copy(f,o,0,0,f.width,f.height,h,u)}}}),tN=((o=tN||{}).Bounce="bounce",o.Normal="normal",o),tR=tf({autoplay:tm(td()),defaultTheme:tm(tg()),direction:tm(t_([tp(1),tp(-1)])),hover:tm(td()),id:tg(),intermission:tm(tc()),loop:tm(t_([td(),tc()])),playMode:tm({schema:"native_enum",nativeEnum:tN,async:!1,_parse:(t,e)=>Object.values(tN).includes(t)?{output:t}:th(e,"type","native_enum","Invalid type",t)}),speed:tm(tc()),themeColor:tm(tg())}),tj=tf({animations:tu(tg()),id:tg()}),tz=tf({activeAnimationId:tm(tg()),animations:tu(tR),author:tm(tg()),custom:tm(function(t,e,i,o){let[r,n,s,a]=function(t,e,i,o){if("object"==typeof e&&!Array.isArray(e)){let[r,n]=tl(i,o);return[t,e,r,n]}let[r,n]=tl(e,i);return[tg(),t,r,n]}(t,e,void 0,void 0);return{schema:"record",record:{key:r,value:n},async:!1,_parse(t,e){if(!t||"object"!=typeof t)return th(e,"type","record",s||"Invalid type",t);let i,o={};for(let[s,a]of Object.entries(t))if(!ty.includes(s)){let l,h=r._parse(s,{origin:"key",abortEarly:e?.abortEarly,abortPipeEarly:e?.abortPipeEarly});if(h.issues){for(let e of(l={schema:"record",input:t,key:s,value:a},h.issues))e.path=[l],i?.push(e);if(i||(i=h.issues),e?.abortEarly)break}let u=n._parse(a,e);if(u.issues){for(let e of(l=l||{schema:"record",input:t,key:s,value:a},u.issues))e.path?e.path.unshift(l):e.path=[l],i?.push(e);if(i||(i=u.issues),e?.abortEarly)break}h.issues||u.issues||(o[h.output]=u.output)}return i?{issues:i}:ta(o,a,e,"record")}}}(tg(),function(t=[]){return{schema:"any",async:!1,_parse:(e,i)=>ta(e,t,i,"any")}}())),description:tm(tg()),generator:tm(tg()),keywords:tm(tg()),revision:tm(tc()),themes:tm(tu(tj)),states:tm(tu(tg())),version:tm(tg())}),tD=function(t,e,i,o){let[r,n]=tl(void 0,void 0);return tf(Object.entries(t.object).reduce((t,[i,o])=>e.includes(i)?t:{...t,[i]:o},{}),r,n)}(tR,["id"]),tF=tf({state:tg()}),tV=tb([tF,tf({ms:tc()})]),tq=tb([tF,tf({count:tc()})]),tH=tb([tF,tf({threshold:tm(tu(tc([tC(0),tw(1)])))})]),tZ=tf({onAfter:tm(tV),onClick:tm(tF),onComplete:tm(tF),onEnter:tm(tq),onMouseEnter:tm(tF),onMouseLeave:tm(tF),onShow:tm(tH)}),tG=tb([tD,tf({playOnScroll:tm(tv([tc([tC(0),tw(1)]),tc([tC(0),tw(1)])])),segments:tm(t_([tv([tc(),tc()]),tg()]))})]);tb([tZ,tf({animationId:tm(tg()),playbackSettings:tG})]);var tJ={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},tW={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},tX=t=>{let e=null,i=[];if(!t)return null;let o=t.substring(t.indexOf(",")+1);e=typeof window>"u"?u.from(o,"base64").toString("binary"):atob(o);let r=new Uint8Array(e.length);for(let t=0;t<e.length;t+=1)r[t]=e.charCodeAt(t);for(let t in i=Array.from(r.subarray(0,8)),tW){let e=tW[t];if(e&&i.every((t,i)=>t===e[i]))return tJ[t]}return null},tY=class extends Error{constructor(t,e){super(t),t$(this,"code"),this.name="[dotlottie-js]",this.code=e}};function tK(t){let e;if(typeof window>"u")e=u.from(t).toString("base64");else{let i=Array.prototype.map.call(t,t=>String.fromCharCode(t)).join("");e=window.btoa(i)}return`data:${tX(e)};base64,${e}`}function tQ(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function t1(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function t0(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new tY("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{!function(t,e,i){i||(i=e,e={}),"function"!=typeof i&&R(7);var o=[],r=function(){for(var t=0;t<o.length;++t)o[t]()},n={},s=function(t,e){tn(function(){i(t,e)})};tn(function(){s=i});for(var a=t.length-22;101010256!=Y(t,a);--a)if(!a||t.length-a>65558)return s(R(13,0,1),null),r;var l=X(t,a+8);if(l){var h=l,u=Y(t,a+16),d=4294967295==u||65535==h;if(d){var p=Y(t,a-12);(d=101075792==Y(t,p))&&(h=l=Y(t,p+32),u=Y(t,p+48))}for(var f=e&&e.filter,m=0;m<h;++m)!function(e){var i=to(t,u,d),a=i[0],h=i[1],p=i[2],m=i[3],g=i[4],y=i[5],v=y+30+X(t,y+26)+X(t,y+28);u=g;var _=function(t,e){t?(r(),s(t,null)):(e&&(n[m]=e),--l||s(null,n))};if(!f||f({name:m,size:h,originalSize:p,compression:a})){if(a){if(8==a){var b,w,C=t.subarray(v,v+h);if(h<32e4)try{_(null,Q(C,{out:new c(p)}))}catch(t){_(t,null)}else o.push((b={size:p},(w=_)||(w=b,b={}),"function"!=typeof w&&R(7),W(C,b,[Z],function(t){return G(Q(t.data[0],J(t.data[1])))},1,w)))}else _(R(14,"unknown compression type "+a,1),null)}else _(null,U(t,v,v+h))}else _(null,null)}(0)}else s(null,{})}(t,{filter:e},(t,e)=>{t&&o(t),i(e)})})}async function t2(t,e,i){if(!(t instanceof Uint8Array))throw new tY("DotLottie not found","INVALID_DOTLOTTIE");return(await t0(t,t=>t.name===e&&(!i||i(t))))[e]}async function t3(t){let e="manifest.json",i=(await t0(t,t=>t.name===e))[e];if(!(typeof i>"u"))return JSON.parse(ti(i,!1))}async function t6(t){var e;let i;if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let o=await t3(t);if(typeof o>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let r=(i=tz._parse(o,void 0)).issues?{success:!1,error:new ts(i.issues),issues:i.issues}:{success:!0,data:i.output,output:i.output};return r.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify((Array.isArray(e=r.error)?e:e.issues).reduce((t,e)=>{if(e.path){let i=e.path.map(({key:t})=>t).join(".");t.nested[i]=[...t.nested[i]||[],e.message]}else t.root=[...t.root||[],e.message];return t},{nested:{}}).nested,null,2)}`}}async function t7(t){let e=new Uint8Array(t),i=await t6(e);if(i.error)throw new tY(i.error,"INVALID_DOTLOTTIE");return e}async function t8(t,e){let i=await t0(t,t=>{let i=t.name.replace("audio/","");return t.name.startsWith("audio/")&&(!e||e({...t,name:i}))}),o={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(o[t.replace("audio/","")]=tK(e))}return o}async function t4(t,e){let i=new Map;for(let[t,o]of Object.entries(e))for(let e of o.assets||[])if(t1(e)){let o=e.p;i.has(o)||i.set(o,new Set),i.get(o)?.add(t)}let o=await t8(t,t=>i.has(t.name));for(let[t,r]of i){let i=o[t];if(i)for(let o of r){let r=e[o];for(let e of r?.assets||[])t1(e)&&e.p===t&&(e.p=i,e.u="",e.e=1)}}}async function t5(t,e){let i=await t0(t,t=>{let i=t.name.replace("images/","");return t.name.startsWith("images/")&&(!e||e({...t,name:i}))}),o={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(o[t.replace("images/","")]=tK(e))}return o}async function t9(t,e){let i=new Map;for(let[t,o]of Object.entries(e))for(let e of o.assets||[])if(tQ(e)){let o=e.p;i.has(o)||i.set(o,new Set),i.get(o)?.add(t)}let o=await t5(t,t=>i.has(t.name));for(let[t,r]of i){let i=o[t];if(i)for(let o of r){let r=e[o];for(let e of r?.assets||[])tQ(e)&&e.p===t&&(e.p=i,e.u="",e.e=1)}}}async function et(t,e,{inlineAssets:i}={},o){let r=`animations/${e}.json`,n=await t2(t,r,o);if(typeof n>"u")return;let s=JSON.parse(ti(n,!1));if(!i)return s;let a={[e]:s};return await t9(t,a),await t4(t,a),s}async function ee(t,e,i){let o=`themes/${e}.lss`,r=await t2(t,o,i);if(!(typeof r>"u"))return ti(r,!1)}async function ei(t,e){let i={},o=await t0(t,t=>{let i=t.name.replace("states/","").replace(".json","");return t.name.startsWith("states/")&&(!e||e({...t,name:i}))});for(let t in o){let e=o[t];e instanceof Uint8Array&&(i[t.replace("states/","").replace(".json","")]=ti(e,!1))}return i}async function eo(t,e,i){let o=`states/${e}.json`,r=await t2(t,o,i);return typeof r>"u"?void 0:JSON.parse(ti(r,!1))}function er(t,e="dotLottie-common"){return Error(`[${e}]: ${t}`)}function en(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function es(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function ea(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function el(t,e){let i=Object.keys(t).find(i=>t[i]===e);if(void 0===i)throw Error("Value not found in the object.");return i}n=null!=(r=tU())?tA(tx(r)):{},((t,e,i,o)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let i of tk(e))tE.call(t,i)||void 0===i||tL(t,i,{get:()=>e[i],enumerable:!(o=tS(e,i))||o.enumerable})})(r&&r.__esModule?n:tL(n,"default",{value:r,enumerable:!0}),r);var eh=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw Error(`Failed to load dotLottie from ${t} with status ${e.status}`);if(e.headers.get("content-type")?.includes("application/json")){let i=await e.json();if(!ea(i))throw Error(`Invalid lottie JSON at ${t}`);let o=function(t=""){let e=t.trim(),i=e.lastIndexOf("/"),o=e.substring(i+1),r=o.indexOf(".");return -1!==r?o.substring(0,r):o}(t);this._animationsMap.set(o,i),this._manifest={activeAnimationId:o,animations:[{id:o}]}}else{this._dotLottie=await t7(await e.arrayBuffer());let t=await t3(this._dotLottie);if(!t)throw Error("Manifest not found");this._manifest=t}}loadFromLottieJSON(t){if(!ea(t))throw Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t),this._manifest={activeAnimationId:e,animations:[{id:e}]}}async loadFromArrayBuffer(t){this._dotLottie=await t7(t);let e=await t3(this._dotLottie);if(!e)throw Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await et(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await ee(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await ei(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let t=JSON.parse(i);if(t){let e=t.descriptor.id;this._stateMachinesMap.get(e)||this._stateMachinesMap.set(e,t)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await eo(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};async function eu(t,e){let[{relottie:i},{default:o}]=await Promise.all([a("3ucSz"),a("9tw3I")]);return JSON.parse((await i().use(o,{lss:e}).process(JSON.stringify(t))).value)}function ed(){throw Error("Cycle detected")}function ep(){if(em>1)em--;else{for(var t,e=!1;void 0!==ef;){var i=ef;for(ef=void 0,eg++;void 0!==i;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&eb(i))try{i.c()}catch(i){e||(t=i,e=!0)}i=o}}if(eg=0,em--,e)throw t}}var ec=void 0,ef=void 0,em=0,eg=0,ey=0;function ev(t){if(void 0!==ec){var e=t.n;if(void 0===e||e.t!==ec)return e={i:0,S:t,p:ec.s,n:void 0,t:ec,e:void 0,x:void 0,r:e},void 0!==ec.s&&(ec.s.n=e),ec.s=e,t.n=e,32&ec.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=ec.s,e.n=void 0,ec.s.n=e,ec.s=e),e}}function e_(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function eb(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ew(t){for(var e=t.s;void 0!==e;e=e.n){var i=e.S.n;if(void 0!==i&&(e.r=i),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function eC(t){for(var e=t.s,i=void 0;void 0!==e;){var o=e.p;-1===e.i?(e.S.U(e),void 0!==o&&(o.n=e.n),void 0!==e.n&&(e.n.p=o)):i=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=o}t.s=i}function eA(t){e_.call(this,void 0),this.x=t,this.s=void 0,this.g=ey-1,this.f=4}function eL(t){var e=t.u;if(t.u=void 0,"function"==typeof e){em++;var i=ec;ec=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,eS(t),e}finally{ec=i,ep()}}}function eS(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,eL(t)}function ek(t){if(ec!==this)throw Error("Out-of-order effect");eC(this),ec=t,this.f&=-2,8&this.f&&eS(this),ep()}function ex(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}e_.prototype.h=function(){return!0},e_.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},e_.prototype.U=function(t){if(void 0!==this.t){var e=t.e,i=t.x;void 0!==e&&(e.x=i,t.e=void 0),void 0!==i&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}},e_.prototype.subscribe=function(t){var e=this;return function(t){var e=new ex(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}(function(){var i=e.value,o=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=o}})},e_.prototype.valueOf=function(){return this.value},e_.prototype.toString=function(){return this.value+""},e_.prototype.toJSON=function(){return this.value},e_.prototype.peek=function(){return this.v},Object.defineProperty(e_.prototype,"value",{get:function(){var t=ev(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(ec instanceof eA&&function(){throw Error("Computed cannot have side-effects")}(),t!==this.v){eg>100&&ed(),this.v=t,this.i++,ey++,em++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{ep()}}}}),(eA.prototype=new e_).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ey))return!0;if(this.g=ey,this.f|=1,this.i>0&&!eb(this))return this.f&=-2,!0;var t=ec;try{ew(this),ec=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return ec=t,eC(this),this.f&=-2,!0},eA.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}e_.prototype.S.call(this,t)},eA.prototype.U=function(t){if(void 0!==this.t&&(e_.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},eA.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},eA.prototype.peek=function(){if(this.h()||ed(),16&this.f)throw this.v;return this.v},Object.defineProperty(eA.prototype,"value",{get:function(){1&this.f&&ed();var t=ev(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),ex.prototype.c=function(){var t=this.S();try{if(8&this.f||void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},ex.prototype.S=function(){1&this.f&&ed(),this.f|=1,this.f&=-9,eL(this),ew(this),em++;var t=ec;return ec=this,ek.bind(this,t)},ex.prototype.N=function(){2&this.f||(this.f|=2,this.o=ef,ef=this)},ex.prototype.d=function(){this.f|=8,1&this.f||eS(this)};var eE=class{_state;_prevState;constructor(t){this._prevState=t,this._state=new e_(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function eI(t,e){let[{DotLottieStateMachineManager:i}]=await Promise.all([a("8T7Ab")]);if(!t.length)throw er("No state machines available inside this .lottie!");return new i(t,e)}var eO={dependencies:{"@dotlottie/dotlottie-js":"0.6.0","@lottiefiles/relottie":"1.0.0","@lottiefiles/relottie-style":"0.4.1","@preact/signals-core":"^1.2.3",howler:"^2.2.3","lottie-web":"^5.12.2",xstate:"^4.38.1"}},e$=((s=e$||{}).Complete="complete",s.DataFail="data_fail",s.DataReady="data_ready",s.Error="error",s.Frame="frame",s.Freeze="freeze",s.LoopComplete="loopComplete",s.Pause="pause",s.Play="play",s.Ready="ready",s.Stop="stop",s.VisibilityChange="visibilityChange",s),eP=((l=eP||{}).Completed="completed",l.Error="error",l.Fetching="fetching",l.Frozen="frozen",l.Initial="initial",l.Loading="loading",l.Paused="paused",l.Playing="playing",l.Ready="ready",l.Stopped="stopped",l),eM=((h=eM||{}).Bounce="bounce",h.Normal="normal",h),eT={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},eB={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},eU=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new eE(eB);_light=!1;_worker=!1;_dotLottieLoader=new eh;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){this._src=structuredClone(t),i?.testId&&(this._testId=i.testId),this._defaultTheme=i?.defaultTheme||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),"string"==typeof i?.activeAnimationId&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,"string"==typeof i?.background&&this.setBackground(i.background),"u">typeof i?.activeStateId&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...r}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...r},i?.light&&(this._light=i.light),i?.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){let t=()=>{this._hover&&"playing"!==this.currentState&&this.play()},e=()=>{this._hover&&"playing"===this.currentState&&this.stop()};this._container?.removeEventListener("mouseenter",t),this._container?.removeEventListener("mouseleave",e),this._container?.addEventListener("mouseleave",e),this._container?.addEventListener("mouseenter",t)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&"playing"===this.currentState?this.freeze():"frozen"===this.currentState&&this.unfreeze())}_listenToVisibilityChange(){"u">typeof document&&"u">typeof document.hidden&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){if("u">typeof this._userPlaybackOptions[t])return this._userPlaybackOptions[t];let e=this._dotLottieLoader.manifest?.animations.find(t=>t.id===this._currentAnimationId);return e&&"u">typeof e[t]?e[t]:eT[t]}_getPlaybackOptions(){let t={};for(let e in eT)"u">typeof eT[e]&&(t[e]=this._getOption(e));return t}_setPlayerState(t){let e=t(this._getPlaybackOptions());try{tD._parse(e)}catch{es(`Invalid PlaybackOptions, ${JSON.stringify(e,null,2)}`);return}"u">typeof e.defaultTheme&&(this._defaultTheme=e.defaultTheme),"u">typeof e.playMode&&(this._mode=e.playMode),"u">typeof e.intermission&&(this._intermission=e.intermission),"u">typeof e.hover&&(this._hover=e.hover),"u">typeof e.loop&&(this.clearCountTimer(),this._loop=e.loop,this._counter=0,this._lottie?.setLoop("number"==typeof e.loop||e.loop)),"u">typeof e.speed&&this._lottie?.setSpeed(e.speed),"u">typeof e.autoplay&&this._lottie&&(this._lottie.autoplay=e.autoplay),"u">typeof e.direction&&this._lottie?.setDirection(e.direction)}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...eT,...i}}_updateTestData(){this._testId&&this._lottie&&(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){return t.split(".").pop()?.toLowerCase()==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&(this._src=structuredClone(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){"boolean"==typeof t&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){"string"==typeof t&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){es("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){es("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){es("seek() Can't use whilst loading.");return}let e=t;"number"==typeof e&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let o="%"===i[2]?this.totalFrames*Number(i[1])/100:i[1];void 0!==o&&(this._lottie.goToAndPlay(o,!0),"playing"===this.currentState?this.play():"frozen"===this.currentState?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[o,r]=t??[0,this.totalFrames-1],[n,s]=e??[0,1];if(!this._areNumbersInRange(n,s)){en("threshold values must be between 0 and 1");return}if(this.container){let{height:t,top:e}=this.container.getBoundingClientRect(),a=(window.innerHeight-e)/(window.innerHeight+t),l=o+Math.round((a-n)/(s-n)*(r-o));i&&i(a),this.goToAndStop(l,!0),(l>=r||a>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(t?.segments,t?.threshold,t?.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw er("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:t?.threshold?t.threshold:[0,1]};this._onShowIntersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{this._visibilityPercentage=100*e.intersectionRatio,e.isIntersecting?(t?.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),this._container?.dispatchEvent(new Event("visibilityChange"))):t?.callbackOnIntersect&&(t.callbackOnIntersect(0),this._container?.dispatchEvent(new Event("visibilityChange")))})},e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){if(this.stop(),!this.container)throw er("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:t?.threshold??[],callbackOnIntersect:t=>{0===t?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,o]of Object.entries(t))switch(i){case"autoplay":"boolean"==typeof o&&(e.autoplay=o);break;case"direction":"number"==typeof o&&[1,-1].includes(o)&&(e.direction=o);break;case"loop":("boolean"==typeof o||"number"==typeof o)&&(e.loop=o);break;case"playMode":"string"==typeof o&&["normal","bounce"].includes(o)&&(e.playMode=o);break;case"speed":"number"==typeof o&&(e.speed=o);break;case"themeColor":"string"==typeof o&&(e.themeColor=o);break;case"hover":"boolean"==typeof o&&(e.hover=o);break;case"intermission":"number"==typeof o&&(e.intermission=o);break;case"defaultTheme":"string"==typeof o&&(e.defaultTheme=o)}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){if(!this._dotLottieLoader.manifest?.animations.length)throw er("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(0===this._dotLottieLoader.animationsMap.size)throw er("No animations have been loaded.")}async play(t,e){if(["initial","loading"].includes(this._currentState)){es("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){-1===this._lottie.playDirection&&0===this._lottie.currentFrame?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if("number"==typeof t){let i=this._dotLottieLoader.manifest?.animations[t];if(!i)throw er("animation not found.");"function"==typeof e?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}if("string"==typeof t){let i=this._dotLottieLoader.manifest?.animations.find(e=>e.id===t);if(!i)throw er("animation not found.");"function"==typeof e?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){es("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing")}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){es("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t)}togglePlay(){"playing"===this.currentState?this.pause():this.play()}_getAnimationByIdOrIndex(t){if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),"number"==typeof t){let e=this._dotLottieLoader.manifest?.animations[t];if(!e)throw er("animation not found.");return e}if("string"==typeof t){let e=this._dotLottieLoader.manifest?.animations.find(e=>e.id===t);if(!e)throw er("animation not found.");return e}throw er("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){en("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(0===this._dotLottieLoader.stateMachinesMap.size&&await this._dotLottieLoader.getStateMachines(),0===this._dotLottieLoader.stateMachinesMap.size)throw er("No interactivity states are available.");if("undefined"===t)throw er("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await eI(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}enterInteractiveMode(t){if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&this._stateMachineManager?.stop(),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw er("stateId must be a non-empty string.")}exitInteractiveMode(){this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",this._stateMachineManager?.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){let t=this._getActiveAnimationId(),e=this._dotLottieLoader.manifest?.animations.find(e=>e.id===t);if(this._inInteractiveMode&&this.exitInteractiveMode(),!e)throw er("animation not found.");this.play(t)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw er("manifest not found.");if(this._inInteractiveMode){es("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw er("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw er("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw er("manifest not found.");if(this._inInteractiveMode){es("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw er("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw er("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){es("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){es("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){es("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){es("freeze() Can't use whilst loading.");return}"frozen"!==this.currentState&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){es("unfreeze() Can't use whilst loading.");return}"playing"===this._stateBeforeFreeze?this.play():this.pause()}destroy(){this._container?.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(t=>{t.unload()}),this._audios=[]),this.clearCountTimer(),"u">typeof document&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,this._lottie?.destroy()}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${eO.dependencies["lottie-web"]}`}addEventListener(t,e){this._listeners.has(t)||this._listeners.set(t,new Set),this._listeners.get(t)?.add(e);try{"complete"===t?this._container?.addEventListener(t,e):this._lottie?.addEventListener(t,e)}catch(t){en(`addEventListener ${t}`)}}getState(){return{autoplay:this._lottie?.autoplay??!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:this._lottie?.playDirection??1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:this._lottie?.playSpeed??1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:this._activeStateId??""}}_notify(){this.state.setState(this.getState())}get totalFrames(){return this._lottie?.totalFrames||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){return this._lottie?.playSpeed||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){return this._lottie?.autoplay??!1}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){es("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){es("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){es("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?"completed"===this.currentState?-1===this.direction?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){let e;e=Array.isArray(t)&&0!==t.length?t:["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"];let i=!1;if(e.includes("activeAnimationId")){let t=this._dotLottieLoader.manifest?.activeAnimationId,e=this._getAnimationByIdOrIndex(t||0);this._activeAnimationId=t,await this._setCurrentAnimation(e.id),i=!0}e.forEach(t=>{switch(t){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"))}}),i&&this.render()}removeEventListener(t,e){try{"complete"===t?this._container?.removeEventListener(t,e):this._lottie?.removeEventListener(t,e),this._listeners.get(t)?.delete(e)}catch(t){en("removeEventListener",t)}}_handleAnimationComplete(){"number"==typeof this._loop&&this.stop();let t=-1===this.direction?0:this.totalFrames;this.goToAndStop(t,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),this._container?.dispatchEvent(new Event("complete"))}addEventListeners(){if(!this._lottie||["loading"].includes(this._currentState)){es("addEventListeners() Can't use whilst loading.");return}for(let[t,e]of(this._lottie.addEventListener("enterFrame",()=>{if(!this._lottie){es("enterFrame event : Lottie is undefined.");return}0===Math.floor(this._lottie.currentFrame)&&-1===this.direction&&(this._container?.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{if(!this._lottie){es("loopComplete event : Lottie is undefined.");return}this._container?.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let t=this._lottie.playDirection;if("number"==typeof this._loop&&this._loop>0&&(this._counter+="bounce"===this._mode?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}"bounce"===this._mode&&"number"==typeof t&&(t=-1*Number(t));let e=-1===t?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(e,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:t})),this.goToAndPlay(e,!0))},this._intermission)):(this._setPlayerState(()=>({direction:t})),this.goToAndPlay(-1===t?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&!1===this._loop&&"bounce"===this._mode){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let t=this._lottie.playDirection;"bounce"===this._mode&&"number"==typeof t&&(t=-1*Number(t));let e=-1===t?this.totalFrames-1:0;this._setPlayerState(()=>({direction:t})),this.goToAndPlay(e,!0)},this._intermission)}else this._handleAnimationComplete()}),this._listeners))if("complete"===t)for(let i of e)this._container?.addEventListener(t,i);else for(let i of e)this._lottie.addEventListener(t,i)}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){let t;if(this._animation&&(t=this._animation.assets)&&t.some(t=>t1(t))){let{DotLottieAudio:t}=await a("eMuYQ");return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){if(t?.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw er("no animation selected");let e=eT.loop??!1,i=eT.autoplay??!1,o=eT.playMode??"normal",r=eT.intermission??0,n=eT.hover??!1,s=eT.direction??1,a=eT.speed??1,l=eT.defaultTheme??"";e=t?.loop??this._getOption("loop"),i=t?.autoplay??this._getOption("autoplay"),o=t?.playMode??this._getOption("playMode"),r=t?.intermission??this._getOption("intermission"),n=t?.hover??this._getOption("hover"),s=t?.direction??this._getOption("direction"),a=t?.speed??this._getOption("speed"),l=t?.defaultTheme??this._getOption("defaultTheme");let h={...this._animationConfig,autoplay:!n&&i,loop:"number"==typeof e||e,renderer:this._worker?"svg":this._animationConfig.renderer??"svg"},[u,d,p]=await Promise.all([this._dotLottieLoader.getTheme(l),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(u&&this._animation?this._animation=await eu(this._animation,u):this._animation=await this._dotLottieLoader.getAnimation(this._currentAnimationId??""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:l,playMode:o,intermission:r,hover:n,loop:e})),p?this._lottie=d.loadAnimation({...h,container:this._container,animationData:this._animation,audioFactory:p}):this._lottie=d.loadAnimation({...h,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{this._lottie?.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:s,speed:a})),i&&!n&&this.play(),this._updateTestData()}async _getLottiePlayerInstance(){let t=this._animationConfig.renderer??"svg",e;if(this._worker)return"svg"!==t&&es("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),(e=await a("7Otxb")).default;switch(t){case"svg":e=this._light?await a("7f8pw"):await a("6aYSI");break;case"canvas":e=this._light?await a("8Vn7b"):await a("4lPHx");break;case"html":e=this._light?await a("3XXw7"):await a("5ETh6");break;default:throw Error(`Invalid renderer: ${t}`)}return e.default}_getActiveAnimationId(){let t=this._dotLottieLoader.manifest;return this._activeAnimationId??t?.activeAnimationId??t?.animations[0]?.id??void 0}async load(t){if("loading"===this._currentState){es("Loading in progress..");return}try{if(this.setCurrentState("loading"),"string"==typeof this._src){if(function(t){try{let e=JSON.parse(t);return ea(e)}catch{return!1}}(this._src)){let t=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(t)}else{let t=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(t.toString())}}else if("object"==typeof this._src&&ea(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw er("Invalid src provided");if(!this._dotLottieLoader.manifest)throw er("No manifest found");let e=this._getActiveAnimationId();if(!e)throw er("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(t){this.setCurrentState("error"),t instanceof Error&&en(`Error loading animation: ${t.message}`)}}setErrorState(t){this.setCurrentState("error"),en(t)}_requireValidDirection(t){if(-1!==t&&1!==t)throw er("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw er("intermission must be a positive number")}_requireValidLoop(t){if("number"==typeof t&&(!Number.isInteger(t)||t<0))throw er("loop must be a positive number or boolean")}_requireValidSpeed(t){if("number"!=typeof t)throw er("speed must be a number")}_requireValidBackground(t){if("string"!=typeof t)throw er("background must be a string")}_requireValidAutoplay(t){if("boolean"!=typeof t)throw er("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}};//# sourceMappingURL=out.js.map
}),l("6ZWSX",function(e,i){t(e.exports,"Buffer",()=>o,t=>o=t),t(e.exports,"INSPECT_MAX_BYTES",()=>r,t=>r=t);var o,r,n=a("kuxul"),s=a("9NvM5");let l="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function h(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function u(t,e,i){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return c(t)}return d(t,e,i)}function d(t,e,i){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!u.isEncoding(e))throw TypeError("Unknown encoding: "+e);let i=0|y(t,e),o=h(i),r=o.write(t,e);return r!==i&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(o=o.slice(0,r)),o}(t,e);if(ArrayBuffer.isView(t))return function(t){if(z(t,Uint8Array)){let e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return f(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(z(t,ArrayBuffer)||t&&z(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(z(t,SharedArrayBuffer)||t&&z(t.buffer,SharedArrayBuffer)))return m(t,e,i);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let o=t.valueOf&&t.valueOf();if(null!=o&&o!==t)return u.from(o,e,i);let r=function(t){var e;if(u.isBuffer(t)){let e=0|g(t.length),i=h(e);return 0===i.length||t.copy(i,0,0,e),i}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?h(0):f(t):"Buffer"===t.type&&Array.isArray(t.data)?f(t.data):void 0}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function p(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return p(t),h(t<0?0:0|g(t))}function f(t){let e=t.length<0?0:0|g(t.length),i=h(e);for(let o=0;o<e;o+=1)i[o]=255&t[o];return i}function m(t,e,i){let o;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(i||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(o=void 0===e&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,e):new Uint8Array(t,e,i),u.prototype),o)}function g(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function y(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||z(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let i=t.length,o=arguments.length>2&&!0===arguments[2];if(!o&&0===i)return 0;// Use a for loop to avoid recursion
let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return R(t).length;default:if(r)return o?-1:N(t).length// assume utf8
;e=(""+e).toLowerCase(),r=!0}}function v(t,e,i){let o=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(i>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,i){let o=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>o)&&(i=o);let r="";for(let o=e;o<i;++o)r+=D[t[o]];return r}(this,e,i);case"utf8":case"utf-8":return C(this,e,i);case"ascii":return function(t,e,i){let o="";i=Math.min(t.length,i);for(let r=e;r<i;++r)o+=String.fromCharCode(127&t[r]);return o}(this,e,i);case"latin1":case"binary":return function(t,e,i){let o="";i=Math.min(t.length,i);for(let r=e;r<i;++r)o+=String.fromCharCode(t[r]);return o}(this,e,i);case"base64":var r,s;return r=e,s=i,0===r&&s===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(r,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,i){let o=t.slice(e,i),r="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<o.length-1;t+=2)r+=String.fromCharCode(o[t]+256*o[t+1]);return r}(this,e,i);default:if(o)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}function _(t,e,i){let o=t[e];t[e]=t[i],t[i]=o}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function b(t,e,i,o,r){var n;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof i?(o=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),(n=i=+i// Coerce to Number.
)!=n&&(i=r?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(r)return -1;i=t.length-1}else if(i<0){if(!r)return -1;i=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=u.from(e,o)),u.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:w(t,e,i,o,r));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):w(t,[e],i,o,r);throw TypeError("val must be string, number or Buffer")}function w(t,e,i,o,r){let n,s=1,a=t.length,l=e.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(t.length<2||e.length<2)return -1;s=2,a/=2,l/=2,i/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(r){let o=-1;for(n=i;n<a;n++)if(h(t,n)===h(e,-1===o?0:n-o)){if(-1===o&&(o=n),n-o+1===l)return o*s}else -1!==o&&(n-=n-o),o=-1}else for(i+l>a&&(i=a-l),n=i;n>=0;n--){let i=!0;for(let o=0;o<l;o++)if(h(t,n+o)!==h(e,o)){i=!1;break}if(i)return n}return -1}function C(t,e,i){i=Math.min(t.length,i);let o=[],r=e;for(;r<i;){let e=t[r],n=null,s=e>239?4:e>223?3:e>191?2:1;if(r+s<=i){let i,o,a,l;switch(s){case 1:e<128&&(n=e);break;case 2:(192&(i=t[r+1]))==128&&(l=(31&e)<<6|63&i)>127&&(n=l);break;case 3:i=t[r+1],o=t[r+2],(192&i)==128&&(192&o)==128&&(l=(15&e)<<12|(63&i)<<6|63&o)>2047&&(l<55296||l>57343)&&(n=l);break;case 4:i=t[r+1],o=t[r+2],a=t[r+3],(192&i)==128&&(192&o)==128&&(192&a)==128&&(l=(15&e)<<18|(63&i)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(n=l)}}null===n?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
n=65533,s=1):n>65535&&(// encode to utf16 (surrogate pair dance)
n-=65536,o.push(n>>>10&1023|55296),n=56320|1023&n),o.push(n),r+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let i="",o=0;for(;o<e;)i+=String.fromCharCode.apply(String,t.slice(o,o+=4096));return i}(o)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function A(t,e,i){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>i)throw RangeError("Trying to access beyond buffer length")}function L(t,e,i,o,r,n){if(!u.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<n)throw RangeError('"value" argument is out of bounds');if(i+o>t.length)throw RangeError("Index out of range")}function S(t,e,i,o,r){M(e,o,r,t,i,7);let n=Number(e&BigInt(4294967295));t[i++]=n,n>>=8,t[i++]=n,n>>=8,t[i++]=n,n>>=8,t[i++]=n;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[i++]=s,s>>=8,t[i++]=s,s>>=8,t[i++]=s,s>>=8,t[i++]=s,i}function k(t,e,i,o,r){M(e,o,r,t,i,7);let n=Number(e&BigInt(4294967295));t[i+7]=n,n>>=8,t[i+6]=n,n>>=8,t[i+5]=n,n>>=8,t[i+4]=n;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[i+3]=s,s>>=8,t[i+2]=s,s>>=8,t[i+1]=s,s>>=8,t[i]=s,i+8}function x(t,e,i,o,r,n){if(i+o>t.length||i<0)throw RangeError("Index out of range")}function E(t,e,i,o,r){return e=+e,i>>>=0,r||x(t,e,i,4,34028234663852886e22,-34028234663852886e22),s.write(t,e,i,o,23,4),i+4}function I(t,e,i,o,r){return e=+e,i>>>=0,r||x(t,e,i,8,17976931348623157e292,-17976931348623157e292),s.write(t,e,i,o,52,8),i+8}o=u,r=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */u.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/u.from=function(t,e,i){return d(t,e,i)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/u.alloc=function(t,e,i){return(p(t),t<=0)?h(t):void 0!==e?"string"==typeof i?h(t).fill(e,i):h(t).fill(e):h(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */u.allocUnsafe=function(t){return c(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */u.allocUnsafeSlow=function(t){return c(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},u.compare=function(t,e){if(z(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),z(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let i=t.length,o=e.length;for(let r=0,n=Math.min(i,o);r<n;++r)if(t[r]!==e[r]){i=t[r],o=e[r];break}return i<o?-1:o<i?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){let i;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);if(void 0===e)for(i=0,e=0;i<t.length;++i)e+=t[i].length;let o=u.allocUnsafe(e),r=0;for(i=0;i<t.length;++i){let e=t[i];if(z(e,Uint8Array))r+e.length>o.length?(u.isBuffer(e)||(e=u.from(e)),e.copy(o,r)):Uint8Array.prototype.set.call(o,e,r);else if(u.isBuffer(e))e.copy(o,r);else throw TypeError('"list" argument must be an Array of Buffers');r+=e.length}return o},u.byteLength=y,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
u.prototype._isBuffer=!0,u.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)_(this,e,e+1);return this},u.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)_(this,e,e+3),_(this,e+1,e+2);return this},u.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)_(this,e,e+7),_(this,e+1,e+6),_(this,e+2,e+5),_(this,e+3,e+4);return this},u.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?C(this,0,t):v.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){let t="",e=r;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(u.prototype[l]=u.prototype.inspect),u.prototype.compare=function(t,e,i,o,r){if(z(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===o&&(o=0),void 0===r&&(r=this.length),e<0||i>t.length||o<0||r>this.length)throw RangeError("out of range index");if(o>=r&&e>=i)return 0;if(o>=r)return -1;if(e>=i)return 1;if(e>>>=0,i>>>=0,o>>>=0,r>>>=0,this===t)return 0;let n=r-o,s=i-e,a=Math.min(n,s),l=this.slice(o,r),h=t.slice(e,i);for(let t=0;t<a;++t)if(l[t]!==h[t]){n=l[t],s=h[t];break}return n<s?-1:s<n?1:0},u.prototype.includes=function(t,e,i){return -1!==this.indexOf(t,e,i)},u.prototype.indexOf=function(t,e,i){return b(this,t,e,i,!0)},u.prototype.lastIndexOf=function(t,e,i){return b(this,t,e,i,!1)},u.prototype.write=function(t,e,i,o){var r,n,s,a,l,h,u,d;// Buffer#write(string)
if(void 0===e)o="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)o=e,i=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(i)?(i>>>=0,void 0===o&&(o="utf8")):(o=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let p=this.length-e;if((void 0===i||i>p)&&(i=p),t.length>0&&(i<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let c=!1;for(;;)switch(o){case"hex":return function(t,e,i,o){let r;i=Number(i)||0;let n=t.length-i;o?(o=Number(o))>n&&(o=n):o=n;let s=e.length;for(o>s/2&&(o=s/2),r=0;r<o;++r){let o=parseInt(e.substr(2*r,2),16);if(o!=o)break;t[i+r]=o}return r}(this,t,e,i);case"utf8":case"utf-8":return r=e,n=i,j(N(t,this.length-r),this,r,n);case"ascii":case"latin1":case"binary":return s=e,a=i,j(function(t){let e=[];for(let i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=e,h=i,j(R(t),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=e,d=i,j(function(t,e){let i,o;let r=[];for(let n=0;n<t.length&&!((e-=2)<0);++n)o=(i=t.charCodeAt(n))>>8,r.push(i%256),r.push(o);return r}(t,this.length-u),this,u,d);default:if(c)throw TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),c=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(t,e){let i=this.length;t=~~t,e=void 0===e?i:~~e,t<0?(t+=i)<0&&(t=0):t>i&&(t=i),e<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t);let o=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(o,u.prototype),o)},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,i){t>>>=0,e>>>=0,i||A(t,e,this.length);let o=this[t],r=1,n=0;for(;++n<e&&(r*=256);)o+=this[t+n]*r;return o},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,i){t>>>=0,e>>>=0,i||A(t,e,this.length);let o=this[t+--e],r=1;for(;e>0&&(r*=256);)o+=this[t+--e]*r;return o},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||A(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||A(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||A(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||A(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||A(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readBigUInt64LE=F(function(t){T(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&B(t,this.length-8);let o=e+256*this[++t]+65536*this[++t]+16777216*this[++t],r=this[++t]+256*this[++t]+65536*this[++t]+16777216*i;return BigInt(o)+(BigInt(r)<<BigInt(32))}),u.prototype.readBigUInt64BE=F(function(t){T(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&B(t,this.length-8);let o=16777216*e+65536*this[++t]+256*this[++t]+this[++t],r=16777216*this[++t]+65536*this[++t]+256*this[++t]+i;return(BigInt(o)<<BigInt(32))+BigInt(r)}),u.prototype.readIntLE=function(t,e,i){t>>>=0,e>>>=0,i||A(t,e,this.length);let o=this[t],r=1,n=0;for(;++n<e&&(r*=256);)o+=this[t+n]*r;return o>=(r*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readIntBE=function(t,e,i){t>>>=0,e>>>=0,i||A(t,e,this.length);let o=e,r=1,n=this[t+--o];for(;o>0&&(r*=256);)n+=this[t+--o]*r;return n>=(r*=128)&&(n-=Math.pow(2,8*e)),n},u.prototype.readInt8=function(t,e){return(t>>>=0,e||A(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||A(t,2,this.length);let i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},u.prototype.readInt16BE=function(t,e){t>>>=0,e||A(t,2,this.length);let i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||A(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||A(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readBigInt64LE=F(function(t){T(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&B(t,this.length-8);let o=this[t+4]+256*this[t+5]+65536*this[t+6]+(i<<24// Overflow
);return(BigInt(o)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),u.prototype.readBigInt64BE=F(function(t){T(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&B(t,this.length-8);let o=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(o)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+i)}),u.prototype.readFloatLE=function(t,e){return t>>>=0,e||A(t,4,this.length),s.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||A(t,4,this.length),s.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||A(t,8,this.length),s.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||A(t,8,this.length),s.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,i,o){if(t=+t,e>>>=0,i>>>=0,!o){let o=Math.pow(2,8*i)-1;L(this,t,e,i,o,0)}let r=1,n=0;for(this[e]=255&t;++n<i&&(r*=256);)this[e+n]=t/r&255;return e+i},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,i,o){if(t=+t,e>>>=0,i>>>=0,!o){let o=Math.pow(2,8*i)-1;L(this,t,e,i,o,0)}let r=i-1,n=1;for(this[e+r]=255&t;--r>=0&&(n*=256);)this[e+r]=t/n&255;return e+i},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigUInt64LE=F(function(t,e=0){return S(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=F(function(t,e=0){return k(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(t,e,i,o){if(t=+t,e>>>=0,!o){let o=Math.pow(2,8*i-1);L(this,t,e,i,o-1,-o)}let r=0,n=1,s=0;for(this[e]=255&t;++r<i&&(n*=256);)t<0&&0===s&&0!==this[e+r-1]&&(s=1),this[e+r]=(t/n>>0)-s&255;return e+i},u.prototype.writeIntBE=function(t,e,i,o){if(t=+t,e>>>=0,!o){let o=Math.pow(2,8*i-1);L(this,t,e,i,o-1,-o)}let r=i-1,n=1,s=0;for(this[e+r]=255&t;--r>=0&&(n*=256);)t<0&&0===s&&0!==this[e+r+1]&&(s=1),this[e+r]=(t/n>>0)-s&255;return e+i},u.prototype.writeInt8=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,i){return t=+t,e>>>=0,i||L(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigInt64LE=F(function(t,e=0){return S(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=F(function(t,e=0){return k(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeFloatLE=function(t,e,i){return E(this,t,e,!0,i)},u.prototype.writeFloatBE=function(t,e,i){return E(this,t,e,!1,i)},u.prototype.writeDoubleLE=function(t,e,i){return I(this,t,e,!0,i)},u.prototype.writeDoubleBE=function(t,e,i){return I(this,t,e,!1,i)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
u.prototype.copy=function(t,e,i,o){if(!u.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(i||(i=0),o||0===o||(o=this.length),e>=t.length&&(e=t.length),e||(e=0),o>0&&o<i&&(o=i),o===i||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(o<0)throw RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-e<o-i&&(o=t.length-e+i);let r=o-i;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,i,o):Uint8Array.prototype.set.call(t,this.subarray(i,o),e),r},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
u.prototype.fill=function(t,e,i,o){let r;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(o=e,e=0,i=this.length):"string"==typeof i&&(o=i,i=this.length),void 0!==o&&"string"!=typeof o)throw TypeError("encoding must be a string");if("string"==typeof o&&!u.isEncoding(o))throw TypeError("Unknown encoding: "+o);if(1===t.length){let e=t.charCodeAt(0);("utf8"===o&&e<128||"latin1"===o)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<i)throw RangeError("Out of range index");if(i<=e)return this;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(r=e;r<i;++r)this[r]=t;else{let n=u.isBuffer(t)?t:u.from(t,o),s=n.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<i-e;++r)this[r+e]=n[r%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let O={};function $(t,e,i){O[t]=class extends i{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function P(t){let e="",i=t.length,o="-"===t[0]?1:0;for(;i>=o+4;i-=3)e=`_${t.slice(i-3,i)}${e}`;return`${t.slice(0,i)}${e}`}function M(t,e,i,o,r,n){if(t>i||t<e){let o;let r="bigint"==typeof e?"n":"";throw o=n>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${(n+1)*8}${r}`:`>= -(2${r} ** ${(n+1)*8-1}${r}) and < 2 ** ${(n+1)*8-1}${r}`:`>= ${e}${r} and <= ${i}${r}`,new O.ERR_OUT_OF_RANGE("value",o,t)}T(r,"offset"),(void 0===o[r]||void 0===o[r+n])&&B(r,o.length-(n+1))}function T(t,e){if("number"!=typeof t)throw new O.ERR_INVALID_ARG_TYPE(e,"number",t)}function B(t,e,i){if(Math.floor(t)!==t)throw T(t,i),new O.ERR_OUT_OF_RANGE(i||"offset","an integer",t);if(e<0)throw new O.ERR_BUFFER_OUT_OF_BOUNDS;throw new O.ERR_OUT_OF_RANGE(i||"offset",`>= ${i?1:0} and <= ${e}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),$("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),$("ERR_OUT_OF_RANGE",function(t,e,i){let o=`The value of "${t}" is out of range.`,r=i;return Number.isInteger(i)&&Math.abs(i)>4294967296?r=P(String(i)):"bigint"==typeof i&&(r=String(i),(i>BigInt(2)**BigInt(32)||i<-(BigInt(2)**BigInt(32)))&&(r=P(r)),r+="n"),o+=` It must be ${e}. Received ${r}`},RangeError);// HELPER FUNCTIONS
// ================
let U=/[^+/0-9A-Za-z-_]/g;function N(t,e){let i;e=e||1/0;let o=t.length,r=null,n=[];for(let s=0;s<o;++s){// is surrogate component
if((i=t.charCodeAt(s))>55295&&i<57344){// last char was a lead
if(!r){// no lead yet
if(i>56319||s+1===o){// unexpected trail
(e-=3)>-1&&n.push(239,191,189);continue}// valid lead
r=i;continue}// 2 leads in a row
if(i<56320){(e-=3)>-1&&n.push(239,191,189),r=i;continue}// valid surrogate pair
i=(r-55296<<10|i-56320)+65536}else r&&(e-=3)>-1&&n.push(239,191,189);// encode utf8
if(r=null,i<128){if((e-=1)<0)break;n.push(i)}else if(i<2048){if((e-=2)<0)break;n.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;n.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((e-=4)<0)break;n.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return n}function R(t){return n.toByteArray(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(U,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function j(t,e,i,o){let r;for(r=0;r<o&&!(r+i>=e.length)&&!(r>=t.length);++r)e[r+i]=t[r];return r}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function z(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let D=function(){let t="0123456789abcdef",e=Array(256);for(let i=0;i<16;++i){let o=16*i;for(let r=0;r<16;++r)e[o+r]=t[i]+t[r]}return e}();// Return not function with Error if BigInt not supported
function F(t){return"undefined"==typeof BigInt?V:t}function V(){throw Error("BigInt not supported")}}),l("kuxul",function(e,i){t(e.exports,"toByteArray",()=>o,t=>o=t),t(e.exports,"fromByteArray",()=>r,t=>r=t),o=function(t){var e,i,o=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var i=t.indexOf("=");-1===i&&(i=e);var o=i===e?0:4-i%4;return[i,o]}(t),r=o[0],n=o[1],l=new a((r+n)*3/4-n),h=0,u=n>0?r-4:r;for(i=0;i<u;i+=4)e=s[t.charCodeAt(i)]<<18|s[t.charCodeAt(i+1)]<<12|s[t.charCodeAt(i+2)]<<6|s[t.charCodeAt(i+3)],l[h++]=e>>16&255,l[h++]=e>>8&255,l[h++]=255&e;return 2===n&&(e=s[t.charCodeAt(i)]<<2|s[t.charCodeAt(i+1)]>>4,l[h++]=255&e),1===n&&(e=s[t.charCodeAt(i)]<<10|s[t.charCodeAt(i+1)]<<4|s[t.charCodeAt(i+2)]>>2,l[h++]=e>>8&255,l[h++]=255&e),l},r=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,i=t.length,o=i%3// if we have 1 byte left, pad 2 bytes
,r=[],s=0,a=i-o;s<a;s+=16383// must be multiple of 3
)r.push(function(t,e,i){for(var o,r=[],s=e;s<i;s+=3)r.push(n[(o=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]))>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return r.join("")}(t,s,s+16383>a?a:s+16383));return 1===o?r.push(n[(e=t[i-1])>>2]+n[e<<4&63]+"=="):2===o&&r.push(n[(e=(t[i-2]<<8)+t[i-1])>>10]+n[e>>4&63]+n[e<<2&63]+"="),r.join("")};for(var o,r,n=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=0,u=l.length;h<u;++h)n[h]=l[h],s[l.charCodeAt(h)]=h;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63}),l("9NvM5",function(e,i){var o,r;t(e.exports,"read",()=>o,t=>o=t),t(e.exports,"write",()=>r,t=>r=t),o=function(t,e,i,o,r){var n,s,a=8*r-o-1,l=(1<<a)-1,h=l>>1,u=-7,d=i?r-1:0,p=i?-1:1,c=t[e+d];for(d+=p,n=c&(1<<-u)-1,c>>=-u,u+=a;u>0;n=256*n+t[e+d],d+=p,u-=8);for(s=n&(1<<-u)-1,n>>=-u,u+=o;u>0;s=256*s+t[e+d],d+=p,u-=8);if(0===n)n=1-h;else{if(n===l)return s?NaN:(c?-1:1)*(1/0);s+=Math.pow(2,o),n-=h}return(c?-1:1)*s*Math.pow(2,n-o)},r=function(t,e,i,o,r,n){var s,a,l,h=8*n-r-1,u=(1<<h)-1,d=u>>1,p=23===r?5960464477539062e-23:0,c=o?0:n-1,f=o?1:-1,m=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?e+=p/l:e+=p*Math.pow(2,1-d),e*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(e*l-1)*Math.pow(2,r),s+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,r),s=0));r>=8;t[i+c]=255&a,c+=f,a/=256,r-=8);for(s=s<<r|a,h+=r;h>0;t[i+c]=255&s,c+=f,s/=256,h-=8);t[i+c-f]|=128*m}}),l("3ucSz",function(t,e){var i=a("Gr8vk");t.exports=i("22Pvv").then(()=>a("bmjRq"))}),l("Gr8vk",function(t,e){t.exports=function(t){// eslint-disable-next-line no-undef
return import(a("27Lyk").resolve(t))}}),l("9tw3I",function(t,e){var i=a("Gr8vk");t.exports=i("b9aeF").then(()=>a("lHoPa"))}),l("8T7Ab",function(t,e){var i=a("Gr8vk");t.exports=i("daqVk").then(()=>a("3vhML"))}),l("eMuYQ",function(t,e){var i=a("Gr8vk");t.exports=i("714Hj").then(()=>a("lLE2A"))}),l("7Otxb",function(t,e){var i=a("Gr8vk");t.exports=i("1Gdlg").then(()=>a("fPydZ"))}),l("7f8pw",function(t,e){var i=a("Gr8vk");t.exports=i("2rQVo").then(()=>a("dasMC"))}),l("6aYSI",function(t,e){var i=a("Gr8vk");t.exports=i("cAbip").then(()=>a("8wrzU"))}),l("8Vn7b",function(t,e){var i=a("Gr8vk");t.exports=i("kjSxC").then(()=>a("9aaxD"))}),l("4lPHx",function(t,e){var i=a("Gr8vk");t.exports=i("iBQbf").then(()=>a("gXg5m"))}),l("3XXw7",function(t,e){var i=a("Gr8vk");t.exports=i("27obU").then(()=>a("l0JTn"))}),l("5ETh6",function(t,e){var i=a("Gr8vk");t.exports=i("dHhQ8").then(()=>a("aVhKM"))}),l("5iyND",function(e,i){t(e.exports,"a",()=>h),t(e.exports,"b",()=>d);var o=Object.create,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),u=(t,e,i,o)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let a of s(e))l.call(t,a)||a===i||r(t,a,{get:()=>e[a],enumerable:!(o=n(e,a))||o.enumerable});return t},d=(t,e,i)=>(i=null!=t?o(a(t)):{},u(!e&&t&&t.__esModule?i:r(i,"default",{value:t,enumerable:!0}),t));//# sourceMappingURL=out.js.map
}),l("lp8W1",function(e,i){t(e.exports,"a",()=>n);var o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=(t,e,i,n)=>{for(var s,a=n>1?void 0:n?r(e,i):e,l=t.length-1;l>=0;l--)(s=t[l])&&(a=(n?s(e,i,a):s(a))||a);return n&&a&&o(e,i,a),a};//# sourceMappingURL=out.js.map
});var h,u=window,d=u.ShadowRoot&&(void 0===u.ShadyCSS||u.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),c=new WeakMap,f=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(d&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(e,t))}return t}toString(){return this.cssText}},m=t=>new f("string"==typeof t?t:t+"",void 0,p),g=(t,e)=>{d?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),o=u.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)})},y=d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return m(e)})(t):t,v=window,_=v.trustedTypes,b=_?_.emptyScript:"",w=v.reactiveElementPolyfillSupport,C={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},A=(t,e)=>e!==t&&(e==e||t==t),L={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:A},S="finalized",k=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty(S))return!1;this[S]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(y(i));else void 0!==t&&e.push(y(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return g(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=L){var o;let r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){let n=((null===(o=i.converter)||void 0===o?void 0:o.toAttribute)!==void 0?i.converter:C).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,r=o._$Ev.get(t);if(void 0!==r&&this._$El!==r){let t=o.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)!==void 0?t.converter:C;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||A)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};k[S]=!0,k.elementProperties=new Map,k.elementStyles=[],k.shadowRootOptions={mode:"open"},w?.({ReactiveElement:k}),(null!==(h=v.reactiveElementVersions)&&void 0!==h?h:v.reactiveElementVersions=[]).push("1.6.3");var x,E=window,I=E.trustedTypes,O=I?I.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,M="?"+P,T=`<${M}>`,B=document,U=()=>B.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,j=t=>R(t)||"function"==typeof t?.[Symbol.iterator],z=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,V=/>/g,q=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,Z=/"/g,G=/^(?:script|style|textarea|title)$/i,J=(t,...e)=>({_$litType$:1,strings:t,values:e}),W=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Y=new WeakMap,K=B.createTreeWalker(B,129,null,!1);function Q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(e):e}var tt=(t,e)=>{let i=t.length-1,o=[],r,n=2===e?"<svg>":"",s=D;for(let e=0;e<i;e++){let i=t[e],a,l,h=-1,u=0;for(;u<i.length&&(s.lastIndex=u,null!==(l=s.exec(i)));)u=s.lastIndex,s===D?"!--"===l[1]?s=F:void 0!==l[1]?s=V:void 0!==l[2]?(G.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=q):void 0!==l[3]&&(s=q):s===q?">"===l[0]?(s=r??D,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?q:'"'===l[3]?Z:H):s===Z||s===H?s=q:s===F||s===V?s=D:(s=q,r=void 0);let d=s===q&&t[e+1].startsWith("/>")?" ":"";n+=s===D?i+T:h>=0?(o.push(a),i.slice(0,h)+$+i.slice(h)+P+d):i+P+(-2===h?(o.push(void 0),e):d)}return[Q(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),o]},te=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,n=0,s=t.length-1,a=this.parts,[l,h]=tt(t,e);if(this.el=te.createElement(l,i),K.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=K.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes()){let t=[];for(let e of o.getAttributeNames())if(e.endsWith($)||e.startsWith(P)){let i=h[n++];if(t.push(e),void 0!==i){let t=o.getAttribute(i.toLowerCase()+$).split(P),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?ts:"?"===e[1]?tl:"@"===e[1]?th:tn})}else a.push({type:6,index:r})}for(let e of t)o.removeAttribute(e)}if(G.test(o.tagName)){let t=o.textContent.split(P),e=t.length-1;if(e>0){o.textContent=I?I.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],U()),K.nextNode(),a.push({type:2,index:++r});o.append(t[e],U())}}}else if(8===o.nodeType){if(o.data===M)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}}r++}}static createElement(t,e){let i=B.createElement("template");return i.innerHTML=t,i}};function ti(t,e,i=t,o){var r,n,s;if(e===W)return e;let a=void 0!==o?null===(r=i._$Co)||void 0===r?void 0:r[o]:i._$Cl,l=N(e)?void 0:e._$litDirective$;return a?.constructor!==l&&(null===(n=a?._$AO)||void 0===n||n.call(a,!1),void 0===l?a=void 0:(a=new l(t))._$AT(t,i,o),void 0!==o?(null!==(s=i._$Co)&&void 0!==s?s:i._$Co=[])[o]=a:i._$Cl=a),void 0!==a&&(e=ti(t,a._$AS(t,e.values),a,o)),e}var to=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:o}=this._$AD,r=(null!==(e=t?.creationScope)&&void 0!==e?e:B).importNode(i,!0);K.currentNode=r;let n=K.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new tr(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new tu(n,this,t)),this._$AV.push(e),l=o[++a]}s!==l?.index&&(n=K.nextNode(),s++)}return K.currentNode=B,r}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tr=class{constructor(t,e,i,o){var r;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(r=o?.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){N(t=ti(this,t,e))?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):j(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==X&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(B.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=te.createElement(Q(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{let t=new to(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new te(t)),e}T(t){R(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let r of t)o===e.length?e.push(i=new tr(this.k(U()),this.k(U()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},tn=class{constructor(t,e,i,o,r){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let r=this.strings,n=!1;if(void 0===r)(n=!N(t=ti(this,t,e,0))||t!==this._$AH&&t!==W)&&(this._$AH=t);else{let o=t,s,a;for(t=r[0],s=0;s<r.length-1;s++)(a=ti(this,o[i+s],e,s))===W&&(a=this._$AH[s]),n||(n=!N(a)||a!==this._$AH[s]),a===X?t=X:t!==X&&(t+=(a??"")+r[s+1]),this._$AH[s]=a}n&&!o&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ts=class extends tn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}},ta=I?I.emptyScript:"",tl=class extends tn{constructor(){super(...arguments),this.type=4}j(t){t&&t!==X?this.element.setAttribute(this.name,ta):this.element.removeAttribute(this.name)}},th=class extends tn{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=ti(this,t,e,0))&&void 0!==i?i:X)===W)return;let o=this._$AH,r=t===X&&o!==X||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==X&&(o===X||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},tu=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ti(this,t)}},td=E.litHtmlPolyfillSupport;td?.(te,tr),(null!==(x=E.litHtmlVersions)&&void 0!==x?x:E.litHtmlVersions=[]).push("2.8.0");var tp=(t,e,i)=>{var o,r;let n=null!==(o=i?.renderBefore)&&void 0!==o?o:e,s=n._$litPart$;if(void 0===s){let t=null!==(r=i?.renderBefore)&&void 0!==r?r:null;n._$litPart$=s=new tr(e.insertBefore(U(),t),t,void 0,i??{})}return s._$AI(t),s},tc=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tp(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return W}};tc.finalized=!0,tc._$litElement$=!0,null===(e=globalThis.litElementHydrateSupport)||void 0===e||e.call(globalThis,{LitElement:tc});var tf=globalThis.litElementPolyfillSupport;tf?.({LitElement:tc}),(null!==(i=globalThis.litElementVersions)&&void 0!==i?i:globalThis.litElementVersions=[]).push("3.3.3");var tm=((t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new f(i,t,p)})`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`,tg=a("f1VGz");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/a("5iyND");var ty=a("lp8W1"),tv=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}},t_=(t,e,i)=>{e.constructor.createProperty(i,t)};function tb(t){return(e,i)=>void 0!==i?t_(t,e,i):tv(t,e)}(null===(o=window.HTMLSlotElement)||void 0===o?void 0:o.prototype.assignedElements)!=null||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE));var tw="dotlottie-player",tC=class extends tc{defaultTheme="";container;playMode=tg.g.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):"string"==typeof t&&["true","false"].includes(t)?(this._loop="true"===t,this._loop):((0,tg.c)("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let t=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let i=t/100*this._dotLottieCommonPlayer.totalFrames;this.seek(i)}catch{throw(0,tg.a)("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(void 0===t){(0,tg.c)("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((t,e)=>{this._seeker=t.seeker,this.requestUpdate(),e.currentState!==t.currentState&&this.dispatchEvent(new CustomEvent(t.currentState)),this.dispatchEvent(new CustomEvent(tg.e.Frame,{detail:{frame:t.frame,seeker:t.seeker}})),this.dispatchEvent(new CustomEvent(tg.e.VisibilityChange,{detail:{visibilityPercentage:t.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(tg.e.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(tg.e.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let t=this.getManifest();t&&t.themes&&(this._themesForCurrentAnimation=t.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||""))),t&&t.states&&(this._hasMultipleStates=t.states.length>0,this._statesForCurrentAnimation=[],t.states.forEach(t=>{this._statesForCurrentAnimation.push(t)})),this.dispatchEvent(new CustomEvent(tg.e.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(tg.e.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(tg.e.DataFail))}),window&&window.addEventListener("click",t=>this._clickOutListener(t))}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new tg.j(t,this.container,{rendererSettings:e??{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?1===this.direction?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let o=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,o&&(o.themes&&(this._themesForCurrentAnimation=o.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=o.themes.length>0),o.states&&(this._hasMultipleStates=o.states.length>0,this._statesForCurrentAnimation=[],o.states.forEach(t=>{this._statesForCurrentAnimation.push(t)}))),this._initListeners()}getCurrentAnimationId(){return this._dotLottieCommonPlayer?.currentAnimationId}animationCount(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.getManifest()?.animations.length||0}animations(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.getManifest()?.animations.map(t=>t.id)||[]}currentAnimation(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.currentAnimationId?this._dotLottieCommonPlayer.currentAnimationId:""}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():tg.i}getManifest(){return this._dotLottieCommonPlayer?.getManifest()}getLottie(){return this._dotLottieCommonPlayer?.getAnimationInstance()}getVersions(){return{lottieWebVersion:(0,tg.j).getLottieWebVersion(),dotLottiePlayerVersion:"2.7.0"}}previous(t){this._dotLottieCommonPlayer?.previous(t)}next(t){this._dotLottieCommonPlayer?.next(t)}reset(){this._dotLottieCommonPlayer?.reset()}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let e=this.shadowRoot.querySelector(".animation svg"),i=new XMLSerializer().serializeToString(e);if(t){let t=document.createElement("a");t.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,t.download=`download_${this._seeker}.svg`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}return i}setTheme(t){this._dotLottieCommonPlayer?.setDefaultTheme(t)}themes(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.getManifest()?.themes?.map(t=>t.id)||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return!!this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.loop}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){this._dotLottieCommonPlayer?.revertToManifestValues(t)}static get styles(){return tm}async firstUpdated(){this.container=this.shadowRoot?.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(t=>{void 0!==t[0]&&t[0].isIntersecting?this._dotLottieCommonPlayer?.currentState===tg.f.Frozen&&this.play():this._dotLottieCommonPlayer?.currentState===tg.f.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),"svg"===this.renderer?this._renderer="svg":"canvas"===this.renderer?this._renderer="canvas":"html"===this.renderer&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){this._io&&(this._io.disconnect(),this._io=void 0),this._dotLottieCommonPlayer?.destroy(),this._unsubscribeListeners?.(),window&&window.removeEventListener("click",t=>this._clickOutListener(t))}_clickOutListener(t){!t.composedPath().some(t=>t instanceof HTMLElement&&(t.classList.contains("popover")||"lottie-animation-options"===t.id))&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){let t=this._dotLottieCommonPlayer?.currentState===tg.f.Playing,e=this._dotLottieCommonPlayer?.currentState===tg.f.Paused;return J`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?J`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:J``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${t||e?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${t?J`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:J`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?J`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:J``}
        <input
          id="lottie-seeker-input"
          class="seeker ${this._dotLottieCommonPlayer?.direction===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${t=>this._handleSeekChange(t)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{this._dotLottieCommonPlayer?.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${this._dotLottieCommonPlayer?.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?J`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:J``}
      </div>
      ${this._popoverIsOpen?J`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${this._animationsTabIsOpen||this._styleTabIsOpen||this._statesTabIsOpen?J``:J`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `}
              ${!this._hasMultipleThemes||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":J` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${!this._hasMultipleStates||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":J` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${this._animationsTabIsOpen?J`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(t=>J`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${t}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate()}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===t?J`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:J`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:J``}
              ${this._styleTabIsOpen?J`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${this._dotLottieCommonPlayer?.defaultTheme===""?J``:J`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(t=>J`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t.id}"
                                @click=${()=>{this.setTheme(t.id)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.setTheme(t.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===t.id?J`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:J`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:J``}
              ${this._statesTabIsOpen?J`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(t=>J`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t}"
                                @click=${()=>{this.enterInteractiveMode(t)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.enterInteractiveMode(t)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===t?J`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:J`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:J``}
            </div>
          `:J``}
    `}render(){let t=this.controls?"main controls":"main",e=this.controls?"animation controls":"animation";return J`
      <div id="animation-container" class=${t} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${e} style="background:${this.background};">
          ${this._dotLottieCommonPlayer?.currentState===tg.f.Error?J` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};(0,ty.a)([tb({type:String})],tC.prototype,"defaultTheme",2),(0,ty.a)([(({finisher:t,descriptor:e})=>(i,o)=>{var r;if(void 0===o){let o=null!==(r=i.originalKey)&&void 0!==r?r:i.key,n=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(n.finisher=function(e){t(e,o)}),n}{let r=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),t?.(r,o)}})({descriptor:t=>({get(){var t,e;return null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("#animation"))&&void 0!==e?e:null},enumerable:!0,configurable:!0})})],tC.prototype,"container",2),(0,ty.a)([tb()],tC.prototype,"playMode",2),(0,ty.a)([tb({type:Boolean})],tC.prototype,"autoplay",2),(0,ty.a)([tb({type:String})],tC.prototype,"background",2),(0,ty.a)([tb({type:Boolean})],tC.prototype,"controls",2),(0,ty.a)([tb({type:Number})],tC.prototype,"direction",2),(0,ty.a)([tb({type:Boolean})],tC.prototype,"hover",2),(0,ty.a)([tb({type:String})],tC.prototype,"loop",2),(0,ty.a)([tb({type:String})],tC.prototype,"renderer",2),(0,ty.a)([tb({type:Number})],tC.prototype,"speed",2),(0,ty.a)([tb({type:String})],tC.prototype,"src",2),(0,ty.a)([tb()],tC.prototype,"intermission",2),(0,ty.a)([tb({type:String})],tC.prototype,"activeAnimationId",2),(0,ty.a)([tb({type:Boolean})],tC.prototype,"light",2),(0,ty.a)([tb({type:Boolean})],tC.prototype,"worker",2),(0,ty.a)([tb({type:String})],tC.prototype,"activeStateId",2),(0,ty.a)([tb({state:!0})],tC.prototype,"_seeker",2),customElements.get(tw)||customElements.define(tw,tC);var tA=t=>{let e=document.querySelectorAll("anchor");e.forEach(e=>{e.addEventListener("click",()=>{t.changePageById(e.getAttribute("ref"))})})};let tL=!1;var tS=(t,e)=>{let i=document.querySelector("dotlottie-player");i.style.opacity=0,t.isBulbOn=!1,i.addEventListener("ready",()=>{e(!1,!1)&&(t.isBulbOn=!0,i.seek("70%")),i.style.opacity=1});let o=document.getElementById("light-switch1"),r=document.getElementById("light-switch2"),n=()=>{tL=!0,o.style.cursor="default",r&&(r.style.cursor="default"),i.play()},s=()=>{tL=!1,o.style.cursor="pointer",r&&(r.style.cursor="pointer"),i.stop(),i.seek("70%")},a=()=>{e(o.checked,r?.checked)&&!t.isBulbOn?(n(),t.isBulbOn=!0,setTimeout(()=>{s()},1500)):e(o.checked,r?.checked)||(i.stop(),t.isBulbOn=!1)};o.addEventListener("click",t=>{tL?t.preventDefault():a()}),r?.addEventListener("click",t=>{tL?t.preventDefault():a()}),tA(t)};const tk=t=>(t+"").replace(/[/][/].*$/mg,"")// strip single-line comments
    .replace(/\s+/g,"")// strip white space
    .replace(/[/][*][^/*]*[*][/]/g,"")// strip multi-line comments  
    .split("){",1)[0].replace(/^[^(]*[(]/,"")// extract the parameters  
    .replace(/=[^,]+/g,"")// strip any ES6 defaults  
    .split(",").filter(Boolean),tx=`
    <anchor ref="home" id="return-anchor"><img src="./static/opened-door.svg"/></anchor>
    <h1 id="roomName"></h1>

    <dotlottie-player src="./static/animation_lnkzkhyu.lottie" background="transparent" speed="1" style="width: 300px; height: 200px" direction="1" mode="normal"></dotlottie-player>
            
    <div id="switch-container">
        <input type="checkbox" id="light-switch1" name="2"/>
        <label for="light-switch1" id="light-switch-label1">
            <div class="switch"></div>
        </label>
        
        <input type="checkbox" id="light-switch2" name="2"/>
        <label for="light-switch2" id="light-switch-label2">
            <div class="switch"></div>
        </label>
    </div>
    <img class="logic-gate-icon" src="" height="64px">
`;var tE=class{name;roomLogic;pageLogic;htmlCode;iconSrc;id;constructor(t,e,i,o){this.name=t,this.roomLogic=e,this.pageLogic=t=>{tS(t,e)},this.iconSrc=i,this.id=o,this.htmlCode=tx.replace('<h1 id="roomName"></h1>',`<h1 id="roomName">${t}</h1>`),this.htmlCode=this.htmlCode.replace('<img class="logic-gate-icon" src="" height="64px">',`<img class="logic-gate-icon" src="${i}" height="128px">`),1==tk(e).length&&(this.htmlCode=this.htmlCode.replace(`
        <input type="checkbox" id="light-switch2" name="2"/>
        <label for="light-switch2" id="light-switch-label2">
            <div class="switch"></div>
        </label>`,"").replace('height="128px">','height="96px">'))}};const tI=[new tE("None",t=>t,"https://upload.wikimedia.org/wikipedia/commons/9/98/Ellipsis.svg","none"),new tE("NOT",t=>!t,"https://upload.wikimedia.org/wikipedia/commons/b/bc/NOT_ANSI.svg","not"),new tE("AND",(t,e)=>t&&e,"https://upload.wikimedia.org/wikipedia/commons/6/64/AND_ANSI.svg","and"),new tE("OR",(t,e)=>t||e,"https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg","or"),new tE("NAND",(t,e)=>!(t&&e),"https://upload.wikimedia.org/wikipedia/commons/f/f2/NAND_ANSI.svg","nand"),new tE("NOR",(t,e)=>!(t||e),"https://upload.wikimedia.org/wikipedia/commons/6/6c/NOR_ANSI.svg","nor"),new tE("XOR",(t,e)=>t&&!e||!t&&e,"https://upload.wikimedia.org/wikipedia/commons/0/01/XOR_ANSI.svg","xor"),new tE("XNOR",(t,e)=>!(t&&!e||!t&&e),"https://upload.wikimedia.org/wikipedia/commons/d/d6/XNOR_ANSI.svg","xnor")];var tO=t=>{let e=document.querySelector("dotlottie-player");console.log(e),e.addEventListener("ready",()=>{t.isBulbOn?e.seek("70%"):(e.play(),setTimeout(()=>{e.stop(),e.seek("70%")},1500))}),tA(t)};const t$=`
    <h1 id="roomName">Logicbulbs</h1>

    <dotlottie-player src="./static/animation_lnkzkhyu.lottie" background="transparent" speed="1" style="width: 300px; height: 200px" direction="1" mode="normal"></dotlottie-player>   
    <div id="rooms-container">

    </div>
`;let tP=t$;tI.forEach(t=>{tP=function(t,e,i){let o=t.lastIndexOf(e);if(-1===o)return t;let r=t.substring(0,o),n=t.substring(o+e.length);return r+i+n}(tP,"</div>",`
        <anchor ref="${t.id}">
            <h2>${t.name}</h2>
            <img src="${t.iconSrc}"/>
        </anchor>
    </div>
    `)});const tM=new class{pageLogic;htmlCode;id;constructor(){this.pageLogic=tO,this.htmlCode=tP,this.id="home"}};class tT{static root=document.getElementById("root");static pages={common:[],logicRooms:[]};static isBulbOn=!1;static addPage(t){this.pages.common.push(t)}static addLogicRoom(t){this.pages.logicRooms.push(t)}static addLogicRoomsFromArray(t){this.pages.logicRooms=[...t]}static changePageById(t){for(let e in this.pages){let i=this.pages[e],o=i.find(e=>e.id==t);o&&this.setPage(o)}}static setPage(t){this.root.innerHTML=t.htmlCode,t.pageLogic(this)}}tT.addLogicRoomsFromArray(tI),tT.addPage(tM),// Application.addNewLogicRoom(
//     new LogicRoom(
//         "OR", (a, b) => a || b, 
//         "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", 
//         "or"
//     ),
// )
//     new LogicRoom(
//         "OR", (a, b) => a || b, 
//         "https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg", 
//         "or"
//     ),
// )
tT.changePageById("home")// NAND Gate by Mohamed Mb from <a href="https://thenounproject.com/browse/icons/term/nand-gate/" target="_blank" title="NAND Gate Icons">Noun Project</a> (CC BY 3.0)
;//# sourceMappingURL=index.8f9deb25.js.map

//# sourceMappingURL=index.8f9deb25.js.map
