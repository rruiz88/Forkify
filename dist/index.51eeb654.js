function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.51eeb654.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,d,f,p={};f=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h=Function.prototype,g=h.call,v=f&&h.bind.bind(g,g);p=f?v:function(e){return function(){return g.apply(e,arguments)}};var y,m={},b="object"==typeof document&&document.all,_=(y={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;m=y.IS_HTMLDDA?function(e){return"function"==typeof e||e===_}:function(e){return"function"==typeof e};var w,k,E,S={};E=function(e){return null==e};var O=TypeError;k=function(e){if(E(e))throw O("Can't call method on "+e);return e};var L=Object;w=function(e){return L(k(e))};var j=p({}.hasOwnProperty);S=Object.hasOwn||function(e,t){return j(w(e),t)};var $,T=Function.prototype,x=c&&Object.getOwnPropertyDescriptor,P=S(T,"name"),M={EXISTS:P,PROPER:P&&"something"===function(){}.name,CONFIGURABLE:P&&(!c||c&&x(T,"name").configurable)}.CONFIGURABLE,H={},I={},q=Object.defineProperty;$=function(e,t){try{q(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var A="__core-js_shared__",C=a[A]||$(A,{});I=C;var F=p(Function.toString);m(I.inspectSource)||(I.inspectSource=function(e){return F(e)}),H=I.inspectSource;var N,R,D=a.WeakMap;R=m(D)&&/native code/.test(String(D));var W={},U=y.all;W=y.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:m(e)||e===U}:function(e){return"object"==typeof e?null!==e:m(e)};var G,B,z,J={},V=a.document,Y=W(V)&&W(V.createElement);z=function(e){return Y?V.createElement(e):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(z("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(W(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=f?re.bind(re):function(){return re.apply(re,arguments)};var ie,oe={},ae=function(e){return m(e)?e:void 0};ie=function(e,t){return arguments.length<2?ae(a[e]):a[e]&&a[e][t]};var se={};se=p({}.isPrototypeOf);var ce,ue,le,de={};de="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var fe,pe,he=a.process,ge=a.Deno,ve=he&&he.versions||ge&&ge.version,ye=ve&&ve.v8;ye&&(pe=(fe=ye.split("."))[0]>0&&fe[0]<4?1:+(fe[0]+fe[1])),!pe&&de&&(!(fe=de.match(/Edge\/(\d+)/))||fe[1]>=74)&&(fe=de.match(/Chrome\/(\d+)/))&&(pe=+fe[1]),le=pe,ce=(ue=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&le&&le<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var me=Object;oe=ce?function(e){return"symbol"==typeof e}:function(e){var t=ie("Symbol");return m(t)&&se(t.prototype,me(e))};var be,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(m(e))return e;throw Ee(we(e)+" is not a function")},be=function(e,t){var n=e[t];return E(n)?void 0:_e(n)};var Se,Oe=TypeError;Se=function(e,t){var n,r;if("string"===t&&m(n=e.toString)&&!W(r=ne(n,e)))return r;if(m(n=e.valueOf)&&!W(r=ne(n,e)))return r;if("string"!==t&&m(n=e.toString)&&!W(r=ne(n,e)))return r;throw Oe("Can't convert object to primitive value")};var Le;(Le=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.28.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"});var je,$e=0,Te=Math.random(),xe=p(1..toString);je=function(e){return"Symbol("+(void 0===e?"":e)+")_"+xe(++$e+Te,36)};var Pe=a.Symbol,Me=Le("wks"),He=ce?Pe.for||Pe:Pe&&Pe.withoutSetter||je,Ie=TypeError,qe=function(e){return S(Me,e)||(Me[e]=ue&&S(Pe,e)?Pe[e]:He("Symbol."+e)),Me[e]}("toPrimitive");te=function(e,t){if(!W(e)||oe(e))return e;var n,r=be(e,qe);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!W(n)||oe(n))return n;throw Ie("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return oe(t)?t:t+""};var Ae=TypeError,Ce=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Ne="enumerable",Re="configurable",De="writable";G=c?Q?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&De in n&&!n[De]){var r=Fe(e,t);r&&r[De]&&(e[t]=n.value,n={configurable:Re in n?n[Re]:r[Re],enumerable:Ne in n?n[Ne]:r[Ne],writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(K(e),t=ee(t),K(n),B)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ae("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var We;We=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,n){return G(e,t,We(1,n))}:function(e,t,n){return e[t]=n,e};var Ue,Ge=Le("keys");Ue=function(e){return Ge[e]||(Ge[e]=je(e))};var Be={};Be={};var ze,Je,Ve,Ye="Object already initialized",Qe=a.TypeError,Ke=a.WeakMap;if(R||I.state){var Xe=I.state||(I.state=new Ke);Xe.get=Xe.get,Xe.has=Xe.has,Xe.set=Xe.set,ze=function(e,t){if(Xe.has(e))throw Qe(Ye);return t.facade=e,Xe.set(e,t),t},Je=function(e){return Xe.get(e)||{}},Ve=function(e){return Xe.has(e)}}else{var Ze=Ue("state");Be[Ze]=!0,ze=function(e,t){if(S(e,Ze))throw Qe(Ye);return t.facade=e,J(e,Ze,t),t},Je=function(e){return S(e,Ze)?e[Ze]:{}},Ve=function(e){return S(e,Ze)}}var et=(N={set:ze,get:Je,has:Ve,enforce:function(e){return Ve(e)?Je(e):ze(e,{})},getterFor:function(e){return function(t){var n;if(!W(t)||(n=Je(t)).type!==e)throw Qe("Incompatible receiver, "+e+" required");return n}}}).enforce,tt=N.get,nt=String,rt=Object.defineProperty,it=p("".slice),ot=p("".replace),at=p([].join),st=c&&!u((function(){return 8!==rt((function(){}),"length",{value:8}).length})),ct=String(String).split("String"),ut=d=function(e,t,n){"Symbol("===it(nt(t),0,7)&&(t="["+ot(nt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!S(e,"name")||M&&e.name!==t)&&(c?rt(e,"name",{value:t,configurable:!0}):e.name=t),st&&n&&S(n,"arity")&&e.length!==n.arity&&rt(e,"length",{value:n.arity});try{n&&S(n,"constructor")&&n.constructor?c&&rt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=et(e);return S(r,"source")||(r.source=at(ct,"string"==typeof t?t:"")),e};Function.prototype.toString=ut((function(){return m(this)&&tt(this).source||H(this)}),"toString"),l=function(e,t,n){return n.get&&d(n.get,t,{getter:!0}),n.set&&d(n.set,t,{setter:!0}),G(e,t,n)};var lt;lt=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var dt=a.RegExp,ft=dt.prototype;c&&u((function(){var e=!0;try{dt(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(ft,"flags").get.call(t)!==r||n!==r}))&&l(ft,"flags",{configurable:!0,get:lt});var pt,ht,gt,vt={}.propertyIsEnumerable,yt=Object.getOwnPropertyDescriptor,mt=yt&&!vt.call({1:2},1);gt=mt?function(e){var t=yt(this,e);return!!t&&t.enumerable}:vt;var bt,_t,wt={},kt=p({}.toString),Et=p("".slice);_t=function(e){return Et(kt(e),8,-1)};var St=Object,Ot=p("".split);wt=u((function(){return!St("z").propertyIsEnumerable(0)}))?function(e){return"String"==_t(e)?Ot(e,""):St(e)}:St,bt=function(e){return wt(k(e))};var Lt,jt=Object.getOwnPropertyDescriptor,$t=ht=c?jt:function(e,t){if(e=bt(e),t=ee(t),B)try{return jt(e,t)}catch(e){}if(S(e,t))return We(!ne(gt,e,t),e[t])};Lt=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(m(n)&&d(n,o,r),r.global)i?e[t]=n:$(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:G(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var Tt,xt,Pt,Mt,Ht,It={},qt={},At=Math.ceil,Ct=Math.floor;qt=Math.trunc||function(e){var t=+e;return(t>0?Ct:At)(t)},Ht=function(e){var t=+e;return t!=t||0===t?0:qt(t)};var Ft=Math.max,Nt=Math.min;Mt=function(e,t){var n=Ht(e);return n<0?Ft(n+t,0):Nt(n,t)};var Rt,Dt,Wt=Math.min;Dt=function(e){return e>0?Wt(Ht(e),9007199254740991):0},Rt=function(e){return Dt(e.length)};var Ut=function(e){return function(t,n,r){var i,o=bt(t),a=Rt(o),s=Mt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Gt={includes:Ut(!0),indexOf:Ut(!1)}.indexOf,Bt=p([].push);Pt=function(e,t){var n,r=bt(e),i=0,o=[];for(n in r)!S(Be,n)&&S(r,n)&&Bt(o,n);for(;t.length>i;)S(r,n=t[i++])&&(~Gt(o,n)||Bt(o,n));return o};var zt,Jt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");xt=Object.getOwnPropertyNames||function(e){return Pt(e,Jt)},zt=Object.getOwnPropertySymbols;var Vt=p([].concat);It=ie("Reflect","ownKeys")||function(e){var t=xt(K(e));return zt?Vt(t,zt(e)):t},Tt=function(e,t,n){for(var r=It(t),i=G,o=ht,a=0;a<r.length;a++){var s=r[a];S(e,s)||n&&S(n,s)||i(e,s,o(t,s))}};var Yt={},Qt=/#|\.prototype\./,Kt=function(e,t){var n=Zt[Xt(e)];return n==tn||n!=en&&(m(t)?u(t):!!t)},Xt=Kt.normalize=function(e){return String(e).replace(Qt,".").toLowerCase()},Zt=Kt.data={},en=Kt.NATIVE="N",tn=Kt.POLYFILL="P";Yt=Kt,pt=function(e,t){var n,r,i,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||$(c,{}):(a[c]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(s=$t(n,r))&&s.value:n[r],!Yt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Tt(o,i)}(e.sham||i&&i.sham)&&J(o,"sham",!0),Lt(n,r,o,e)}};var nn,rn={},on=Function.prototype,an=on.apply,sn=on.call;rn="object"==typeof Reflect&&Reflect.apply||(f?sn.bind(an):function(){return sn.apply(an,arguments)});var cn,un,ln=(un=function(e){if("Function"===_t(e))return p(e)})(un.bind);cn=function(e,t){return _e(e),void 0===t?e:f?ln(e,t):function(){return e.apply(t,arguments)}};var dn={};dn=ie("document","documentElement");var fn={};fn=p([].slice);var pn={},hn=TypeError;pn=function(e,t){if(e<t)throw hn("Not enough arguments");return e};var gn;gn=/(?:ipad|iphone|ipod).*applewebkit/i.test(de);var vn,yn,mn,bn,_n=yn={};function wn(){throw new Error("setTimeout has not been defined")}function kn(){throw new Error("clearTimeout has not been defined")}function En(e){if(mn===setTimeout)return setTimeout(e,0);if((mn===wn||!mn)&&setTimeout)return mn=setTimeout,setTimeout(e,0);try{return mn(e,0)}catch(t){try{return mn.call(null,e,0)}catch(t){return mn.call(this,e,0)}}}!function(){try{mn="function"==typeof setTimeout?setTimeout:wn}catch(e){mn=wn}try{bn="function"==typeof clearTimeout?clearTimeout:kn}catch(e){bn=kn}}();var Sn,On=[],Ln=!1,jn=-1;function $n(){Ln&&Sn&&(Ln=!1,Sn.length?On=Sn.concat(On):jn=-1,On.length&&Tn())}function Tn(){if(!Ln){var e=En($n);Ln=!0;for(var t=On.length;t;){for(Sn=On,On=[];++jn<t;)Sn&&Sn[jn].run();jn=-1,t=On.length}Sn=null,Ln=!1,function(e){if(bn===clearTimeout)return clearTimeout(e);if((bn===kn||!bn)&&clearTimeout)return bn=clearTimeout,clearTimeout(e);try{bn(e)}catch(t){try{return bn.call(null,e)}catch(t){return bn.call(this,e)}}}(e)}}function xn(e,t){this.fun=e,this.array=t}function Pn(){}_n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];On.push(new xn(e,t)),1!==On.length||Ln||En(Tn)},xn.prototype.run=function(){this.fun.apply(null,this.array)},_n.title="browser",_n.browser=!0,_n.env={},_n.argv=[],_n.version="",_n.versions={},_n.on=Pn,_n.addListener=Pn,_n.once=Pn,_n.off=Pn,_n.removeListener=Pn,_n.removeAllListeners=Pn,_n.emit=Pn,_n.prependListener=Pn,_n.prependOnceListener=Pn,_n.listeners=function(e){return[]},_n.binding=function(e){throw new Error("process.binding is not supported")},_n.cwd=function(){return"/"},_n.chdir=function(e){throw new Error("process.chdir is not supported")},_n.umask=function(){return 0},vn=void 0!==yn&&"process"==_t(yn);var Mn,Hn,In,qn,An=a.setImmediate,Cn=a.clearImmediate,Fn=a.process,Nn=a.Dispatch,Rn=a.Function,Dn=a.MessageChannel,Wn=a.String,Un=0,Gn={},Bn="onreadystatechange";u((function(){Mn=a.location}));var zn=function(e){if(S(Gn,e)){var t=Gn[e];delete Gn[e],t()}},Jn=function(e){return function(){zn(e)}},Vn=function(e){zn(e.data)},Yn=function(e){a.postMessage(Wn(e),Mn.protocol+"//"+Mn.host)};An&&Cn||(An=function(e){pn(arguments.length,1);var t=m(e)?e:Rn(e),n=fn(arguments,1);return Gn[++Un]=function(){rn(t,void 0,n)},Hn(Un),Un},Cn=function(e){delete Gn[e]},vn?Hn=function(e){Fn.nextTick(Jn(e))}:Nn&&Nn.now?Hn=function(e){Nn.now(Jn(e))}:Dn&&!gn?(qn=(In=new Dn).port2,In.port1.onmessage=Vn,Hn=cn(qn.postMessage,qn)):a.addEventListener&&m(a.postMessage)&&!a.importScripts&&Mn&&"file:"!==Mn.protocol&&!u(Yn)?(Hn=Yn,a.addEventListener("message",Vn,!1)):Hn=Bn in z("script")?function(e){dn.appendChild(z("script"))[Bn]=function(){dn.removeChild(this),zn(e)}}:function(e){setTimeout(Jn(e),0)});var Qn=(nn={set:An,clear:Cn}).clear;pt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Qn},{clearImmediate:Qn});var Kn,Xn,Zn=nn.set;Xn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var er,tr=a.Function,nr=/MSIE .\./.test(de)||Xn&&((er=a.Bun.version.split(".")).length<3||0==er[0]&&(er[1]<3||3==er[1]&&0==er[2]));Kn=function(e,t){var n=t?2:1;return nr?function(r,i){var o=pn(arguments.length,1)>n,a=m(r)?r:tr(r),s=o?fn(arguments,n):[],c=o?function(){rn(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rr=a.setImmediate?Kn(Zn,!1):Zn;pt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==rr},{setImmediate:rr});var ir=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),s=new x(r||[]);return i(a,"_invoke",{value:L(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",g="completed",v={};function y(){}function m(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(P([])));k&&k!==n&&r.call(k,a)&&(_=k);var E=b.prototype=y.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function L(e,t,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===g){if("throw"===i)throw o;return M()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?g:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=d(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:t,done:!0}}return m.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),u(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new O(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=ir}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=ir:Function("r","regeneratorRuntime = r")(ir)}const or="https://forkify-api.herokuapp.com/api/v2/recipes/",ar="07e80c46-fd3f-4b40-bdcc-397328dd0068";var sr;sr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class cr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(this._parentElement.querySelectorAll("*"));Array.from(n.querySelectorAll("*")).forEach(((e,t)=>{const n=r[t];e.isEqualNode(n)&&""!==e.firstChild?.nodeValue.trim()&&(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n        <div class="spinner">\n                <svg>\n                  <use href="${n(sr)}#icon-loader"></use>\n                </svg>\n              </div>\n        `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n        <div class="error">\n                <div>\n                  <svg>\n                    <use href="${n(sr)}#icon-alert-triangle"></use>\n                  </svg>\n                </div>\n                <p>${e}</p>\n              </div>\n              `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n        <div class="message">\n                <div>\n                  <svg>\n                    <use href="${n(sr)}#icon-smile"></use>\n                  </svg>\n                </div>\n                <p>${e}</p>\n              </div>\n              `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var ur=new class extends cr{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n  <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(sr)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${n(sr)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${n(sr)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${n(sr)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n          <use href="${n(sr)}#icon-user"></use>\n          </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${n(sr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${n(sr)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n              <svg class="recipe__icon">\n                <use href="${n(sr)}#icon-check"></use>\n              </svg>\n              <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>\n              <div class="recipe__description">\n                <span class="recipe__unit">${e.unit}</span>\n                ${e.description}\n              </div>\n            </li>\n              `}};const lr=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var n},dr={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},fr=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},pr=function(e=dr.search.page){dr.search.page=e;const t=(e-1)*dr.search.resultsPerPage,n=e*dr.search.resultsPerPage;return dr.search.results.slice(t,n)},hr=function(){localStorage.setItem("bookmarks",JSON.stringify(dr.bookmarks))},gr=function(e){dr.bookmarks.push(e),e.id===dr.recipe.id&&(dr.recipe.bookmarked=!0),hr()};!function(){const e=localStorage.getItem("bookmarks");e&&(dr.bookmarks=JSON.parse(e))}();var vr=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var yr=new class extends cr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n              <figure class="preview__fig">\n                <img src="${this._data.image}" alt="${this._data.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                <p class="preview__publisher">${this._data.publisher}</p>\n              <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n          <use href="${n(sr)}#icon-user"></use>\n          </svg>\n          </div>\n          </div>\n            </a>\n          </li>\n    `}};var mr=new class extends cr{_parentElement=document.querySelector(".results");_errorMessage="We could not find that recipe. Please try another one!";_message="";_generateMarkup(){return this._data.map((e=>yr.render(e,!1))).join("")}};var br=new class extends cr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :]";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>yr.render(e,!1))).join("")}};var _r=new class extends cr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(sr)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n          `:e===t&&t>1?`\n      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(sr)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page${e-1}</span>\n          </button>\n      `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n              <svg class="search__icon">\n                <use href="${n(sr)}#icon-arrow-left"></use>\n              </svg>\n              <span>Page${e-1}</span>\n            </button>\n            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page${e+1}</span>\n            <svg class="search__icon">\n              <use href="${n(sr)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n          `:""}};var wr=new class extends cr{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe was successfully uploaded!";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const kr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;ur.renderSpinner(),mr.update(pr()),await async function(e){try{const t=await lr(`${or}${e}?key=${ar}`),{recipe:n}=t.data;dr.recipe=fr(t),dr.bookmarks.some((t=>t.id===e))?dr.recipe.bookmarked=!0:dr.recipe.bookmarked=!1}catch(e){console.error(e),ur.renderError(`${e}`)}}(e),ur.render(dr.recipe),br.update(dr.bookmarks)}catch(e){ur.renderError()}},Er=async function(){try{mr.renderSpinner();const e=vr.getQuery();if(!e)return;await async function(e){try{dr.search.query=e;const t=await lr(`${or}?search=${e}&key=${ar}`);console.log(t),dr.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),dr.search.page=1}catch(e){throw console.error(e),ur.renderError(`${e}`),e}}(e),mr.render(pr(1)),_r.render(dr.search)}catch(e){console.log(e)}},Sr=function(e){!function(e){dr.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/dr.recipe.servings})),dr.recipe.servings=e}(e),ur.update(dr.recipe)},Or=function(e){mr.render(pr(e)),_r.render(dr.search)},Lr=function(){dr.recipe.bookmarked?function(e){const t=dr.bookmarks.findIndex((t=>t.id===e));dr.bookmarks.splice(t,1),e===dr.recipe.id&&(dr.recipe.bookmarked=!1),hr()}(dr.recipe.id):gr(dr.recipe),ur.update(dr.recipe),br.render(dr.bookmarks)},jr=function(){br.render(dr.bookmarks)},$r=async function(e){try{wr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong format! Please use correct format.");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await lr(`${or}?key=${ar}`,n);dr.recipe=fr(r),gr(dr.recipe)}catch(e){throw e}}(e),ur.render(dr.recipe),wr.renderMessage(),br.render(dr.bookmarks),window.history.pushState(null,"",`#${dr.recipe.id}`),setTimeout((function(){wr.toggleWindow()}),2500)}catch(e){console.error(e),wr.renderError(e.message)}};br.addHandlerRender(jr),ur.addHandlerRender(kr),ur.addHandlerUpdateServings(Sr),ur.addHandlerBookmark(Lr),vr.addHandlerSearch(Er),_r.addHandlerClick(Or),wr.addHandlerUpload($r);
//# sourceMappingURL=index.51eeb654.js.map