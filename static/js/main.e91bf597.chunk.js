(this.webpackJsonpshadowing=this.webpackJsonpshadowing||[]).push([[0],{75:function(e,t,a){e.exports=a(92)},80:function(e,t,a){},85:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(9),r=a.n(s),o=(a(80),a(67)),i=a(14),l=a(28),m=a.n(l),u=(a(85),a(58)),h=a(52),d=a(68),f=a(66),g=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this);var c=new(window.webkitSpeechRecognition||window.SpeechRecognition);return c.interimResults=!0,c.continuous=!0,c.onresult=function(e){n.emit("result",e)},c.onsoundstart=function(e){console.log("".concat(new Date,"\u8a8d\u8b58\u4e2d...")),n.emit("soundstart",null)},c.onsoundend=function(){n.emit("soundend",null)},c.onnomatch=function(){console.log("".concat(new Date," \u97f3\u58f0\u3092\u8a8d\u8b58\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f")),n.emit("nomatch",null)},c.onerror=function(e){console.log(e),n.emit("error",e)},c.onstart=function(e){console.log("".concat(new Date," ").concat(e.timeStamp," \u97f3\u58f0\u8a8d\u8b58\u30b5\u30fc\u30d3\u30b9\u958b\u59cb ->>>>>")),n.emit("start",null)},c.onend=function(e){console.log("".concat(new Date," <<<<<- \u97f3\u58f0\u8a8d\u8b58\u30b5\u30fc\u30d3\u30b9\u5207\u65ad")),n.hasAlreadyStarted=!1,n.emit("end",null),n.isIdle||n.listen()},n.recognition=c,n.isIdle=!1,n.hasAlreadyStarted=!1,n}return Object(h.a)(a,[{key:"lang",get:function(){return this.lang_},set:function(e){this.lang_=e.replace("_","-")}}]),Object(h.a)(a,[{key:"listen",value:function(){this.hasAlreadyStarted||(this.hasAlreadyStarted=!0,this.isIdle=!1,this.lang&&(this.recognition.lang=this.lang),this.recognition.start())}},{key:"kill",value:function(){this.isIdle=!0,this.recognition.stop()}},{key:"restart",value:function(){this.isIdle=!1,this.recognition.stop()}}]),a}(a(59).EventEmitter),p=[".app.jsx-2864826660{text-align:center;}","#results.jsx-2864826660{font-size:14px;font-weight:bold;border:1px solid #ddd;padding:15px;text-align:left;min-height:100px;}",".recognition.jsx-2864826660{position:relative;}",".tools.jsx-2864826660{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;right:0;}",".qa.jsx-2864826660{margin:10px auto;}",".text-left.jsx-2864826660{text-align:left;}",".footer.jsx-2864826660 a.jsx-2864826660{cursor:pointer;color:black;-webkit-text-decoration:none;text-decoration:none;}"];p.__hash="2864826660";var x=p,E=[".microphone-switch.jsx-2640999393{position:relative;}","@-webkit-keyframes shiny-jsx-2640999393{0%{-webkit-transform:scale(0) rotate(25deg);-ms-transform:scale(0) rotate(25deg);transform:scale(0) rotate(25deg);opacity:0;}50%{-webkit-transform:scale(1) rotate(25deg);-ms-transform:scale(1) rotate(25deg);transform:scale(1) rotate(25deg);opacity:1;}100%{-webkit-transform:scale(50) rotate(25deg);-ms-transform:scale(50) rotate(25deg);transform:scale(50) rotate(25deg);opacity:0;}}","@keyframes shiny-jsx-2640999393{0%{-webkit-transform:scale(0) rotate(25deg);-ms-transform:scale(0) rotate(25deg);transform:scale(0) rotate(25deg);opacity:0;}50%{-webkit-transform:scale(1) rotate(25deg);-ms-transform:scale(1) rotate(25deg);transform:scale(1) rotate(25deg);opacity:1;}100%{-webkit-transform:scale(50) rotate(25deg);-ms-transform:scale(50) rotate(25deg);transform:scale(50) rotate(25deg);opacity:0;}}",".shiny-btn.jsx-2640999393{position:relative;overflow:hidden;}",".shiny-btn.jsx-2640999393::after{content:'';position:absolute;top:-100px;left:-100px;width:50px;height:50px;background-image:linear-gradient(100deg,rgba(255,255,255,0) 10%,rgba(255,255,255,1) 100%,rgba(255,255,255,0) 0%);-webkit-animation-name:shiny-jsx-2640999393;animation-name:shiny-jsx-2640999393;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}",".circle.jsx-2640999393{border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}",".microphone-on.jsx-2640999393,.microphone-off.jsx-2640999393{cursor:pointer;}",".microphone-on.jsx-2640999393{background:#1373C7;width:48px;height:48px;color:#FFF;}",".microphone-off.jsx-2640999393{background:#FFF;width:38px;height:38px;border:solid 5px #ED1C22;color:#1373C7;}",".heartbeat.jsx-2640999393{position:absolute;top:0;left:0;-webkit-animation:pounding-jsx-2640999393 .1s linear infinite alternate;animation:pounding-jsx-2640999393 .1s linear infinite alternate;opacity:0.2;z-index:-99;background:#1373C7;width:48px;height:48px;}","@-webkit-keyframes pounding-jsx-2640999393{0%{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes pounding-jsx-2640999393{0%{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}"];E.__hash="2640999393";var b=E,j=a(18);function v(e){return c.a.createElement(j.a,Object.assign({icon:"circle"},e))}function _(e){return c.a.createElement(j.a,{icon:["far","circle"],size:"2x",color:"green"})}function k(e){return c.a.createElement(j.a,{icon:"times",size:"2x",color:"red"})}function y(e){return c.a.createElement(j.a,{icon:"microphone",size:"2x"})}function w(e){return c.a.createElement(j.a,{icon:"volume-up",size:"1x"})}function N(e){return c.a.createElement(j.a,{icon:["fab","windows"],size:"2x"})}function S(e){return c.a.createElement(j.a,{icon:["fab","apple"],size:"2x"})}function C(e){return c.a.createElement(j.a,{icon:["fab","android"],size:"2x"})}function O(e){return c.a.createElement(j.a,{icon:["fab","github"],size:"2x"})}function I(e){return c.a.createElement(j.a,Object.assign({icon:"trash"},e))}var R=function(e){var t=e.isPowerOn,a=e.onClick;return e.background,c.a.createElement("div",{className:"jsx-".concat(b.__hash)+" microphone-switch"},c.a.createElement("div",{id:"microphone",onClick:function(e){a&&a.apply()},className:"jsx-".concat(b.__hash)+" "+"circle microphone-".concat(t?"on shiny-btn":"off")},c.a.createElement("div",{className:"jsx-".concat(b.__hash)},c.a.createElement(y,null))),c.a.createElement("div",{id:"heartbeat",className:"jsx-".concat(b.__hash)+" "+"circle ".concat(t?"heartbeat":"")}),c.a.createElement(m.a,{id:b.__hash},b))},P=a(41),A=a(30),z=a(65),D=a(43),H=a(125),V=a(128),F=a(142),B=a(143),K=a(130),L=a(131),U=a(132),T=a(44),G=a(140),M=a(137),Z=a(133),Y=Object(H.a)({root:{height:"48px",width:"48px",borderRadius:"50%",color:"#fff",backgroundColor:"#1976d2",border:0,cursor:"pointer","&:hover":{color:"#fff",backgroundColor:"#1976d2"}}});var J=function(e){var t=Y(),a=e.onChangedSentence,n=e.onChangeVoice,s=e.onSpeak,r=e.sentence,o=e.selectedVoice,i=e.voices,l=e.rate,m=e.onChangedRate,u=e.volume,h=e.onChangedVolume;return c.a.createElement("div",null,c.a.createElement(V.a,{required:!0,fullWidth:!0,variant:"outlined"},c.a.createElement(F.a,{htmlFor:"outlined-adornment-sentence"},"\u53f0\u8a5e"),c.a.createElement(B.a,{id:"outlined-adornment-sentence",type:"text",labelWidth:50,value:r,onChange:a,endAdornment:c.a.createElement(K.a,{position:"end"},c.a.createElement(L.a,{focusVisibleClassName:"a",classes:{root:t.root},onClick:function(e){s&&s(r);var t=new SpeechSynthesisUtterance(r);t.voice=o,t.lang=o.lang.replace("_","-"),l&&l>=.1&&l<=10&&(t.rate=l),u&&u>=0&&u<=1&&(t.volume=u),speechSynthesis.speak(t)},size:"small"},c.a.createElement(w,null)))})),c.a.createElement(U.a,{container:!0,spacing:2,alignItems:"center"},c.a.createElement(U.a,{item:!0},c.a.createElement(T.a,{id:"input-slider",gutterBottom:!0},"\u901f\u5ea6")),c.a.createElement(U.a,{item:!0,xs:!0},c.a.createElement(G.a,{min:.1,max:10,step:.1,value:l,onChange:m,valueLabelDisplay:"auto","aria-labelledby":"input-slider"})),c.a.createElement(U.a,{item:!0},c.a.createElement(T.a,null,l))),c.a.createElement(U.a,{container:!0,spacing:2,alignItems:"center"},c.a.createElement(U.a,{item:!0},c.a.createElement(T.a,{id:"volume-slider",gutterBottom:!0},"\u97f3\u91cf")),c.a.createElement(U.a,{item:!0,xs:!0},c.a.createElement(G.a,{min:0,max:1,step:.1,value:u,onChange:h,valueLabelDisplay:"auto","aria-labelledby":"volume-slider"})),c.a.createElement(U.a,{item:!0},c.a.createElement(T.a,null,u))),c.a.createElement(V.a,null,c.a.createElement(F.a,{shrink:!0,id:"selectVoicesLabel"},"\u8a00\u8a9e"),c.a.createElement(M.a,{labelId:"selectVoicesLabel",value:o.name,onChange:n,displayEmpty:!0},i.map((function(e,t){return c.a.createElement(Z.a,{key:t,value:e.name},"".concat(e.name," (").concat(e.lang,")"))})))))},W=a(64),q=a.n(W);function X(e){var t=e.children,a=e.text;return c.a.createElement("button",{onClick:function(){var e=document.createElement("a");e.href="data:text/plain,"+encodeURIComponent(a),e.download="log".concat(q()().format("_YYYYMMDD_HHmmss"),".txt"),e.click()}},t)}var $=a(138),Q=a(136);function ee(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"jsx-2529574083"},e.children),c.a.createElement(m.a,{id:"2529574083"},["span.jsx-2529574083{color:gray;}"]))}var te=a(93),ae=a(134),ne=a(139),ce=a(135),se=a(69),re=function(e){var t=e.index,a=e.style,n=e.data,s=n.histories,r=n.selectedIndex,o=n.setSelectedIndex,i=n.onChange,l=n.toggleItemRemove;return c.a.createElement(te.a,{button:!0,style:a,key:t,selected:r===t,onClick:function(e){o(t),s[t]&&i&&i({target:{value:s[t].sentence}})}},c.a.createElement(ae.a,null,c.a.createElement(ne.a,{edge:"start",checked:!!s[t].willRemove,icon:c.a.createElement(v,{color:"#1976d2"}),disableRipple:!0,onChange:function(e){var a=e.target.checked;l&&l({checked:a,index:t})}})),c.a.createElement(ce.a,{primary:s[t].sentence}))};function oe(e){var t=e.title,a=e.histories,s=e.onChange,r=e.size,o=e.onRemove,l=e.toggleItemRemove,u=Object(n.useState)(null),h=Object(i.a)(u,2),d=h[0],f=h[1];return c.a.createElement("div",{className:"jsx-264903680"},c.a.createElement("div",{className:"jsx-264903680 stack-history-header"},c.a.createElement("span",{className:"jsx-264903680"},a.filter((function(e){return e.willRemove})).length>0&&c.a.createElement(L.a,{onClick:o},c.a.createElement(I,null))),c.a.createElement("p",{className:"jsx-264903680"},t)),c.a.createElement(se.a,{height:7*r,itemCount:a.length,itemSize:r,width:"100%",itemData:{histories:a,selectedIndex:d,setSelectedIndex:f,onChange:s,toggleItemRemove:l}},re),c.a.createElement(m.a,{id:"264903680"},[".stack-history-header.jsx-264903680{position:relative;}",".stack-history-header.jsx-264903680 span.jsx-264903680{position:absolute;right:10px;}"]))}oe.defaultProps={title:"\u5c65\u6b74",size:35},P.b.add(A.b,A.c,A.d,A.g,z.a,A.a,A.e,D.d,D.b,D.a,D.c,A.f);var ie=[["Afrikaans",["af-ZA"]],["\u12a0\u121b\u122d\u129b",["am-ET"]],["Az\u0259rbaycanca",["az-AZ"]],["\u09ac\u09be\u0982\u09b2\u09be",["bn-BD","\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6"],["bn-IN","\u09ad\u09be\u09b0\u09a4"]],["Bahasa Indonesia",["id-ID"]],["Bahasa Melayu",["ms-MY"]],["Catal\xe0",["ca-ES"]],["\u010ce\u0161tina",["cs-CZ"]],["Dansk",["da-DK"]],["Deutsch",["de-DE"]],["English",["en-AU","Australia"],["en-CA","Canada"],["en-IN","India"],["en-KE","Kenya"],["en-TZ","Tanzania"],["en-GH","Ghana"],["en-NZ","New Zealand"],["en-NG","Nigeria"],["en-ZA","South Africa"],["en-PH","Philippines"],["en-GB","United Kingdom"],["en-US","United States"]],["Espa\xf1ol",["es-AR","Argentina"],["es-BO","Bolivia"],["es-CL","Chile"],["es-CO","Colombia"],["es-CR","Costa Rica"],["es-EC","Ecuador"],["es-SV","El Salvador"],["es-ES","Espa\xf1a"],["es-US","Estados Unidos"],["es-GT","Guatemala"],["es-HN","Honduras"],["es-MX","M\xe9xico"],["es-NI","Nicaragua"],["es-PA","Panam\xe1"],["es-PY","Paraguay"],["es-PE","Per\xfa"],["es-PR","Puerto Rico"],["es-DO","Rep\xfablica Dominicana"],["es-UY","Uruguay"],["es-VE","Venezuela"]],["Euskara",["eu-ES"]],["Filipino",["fil-PH"]],["Fran\xe7ais",["fr-FR"]],["Basa Jawa",["jv-ID"]],["Galego",["gl-ES"]],["\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",["gu-IN"]],["Hrvatski",["hr-HR"]],["IsiZulu",["zu-ZA"]],["\xcdslenska",["is-IS"]],["Italiano",["it-IT","Italia"],["it-CH","Svizzera"]],["\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",["kn-IN"]],["\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",["km-KH"]],["Latvie\u0161u",["lv-LV"]],["Lietuvi\u0173",["lt-LT"]],["\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",["ml-IN"]],["\u092e\u0930\u093e\u0920\u0940",["mr-IN"]],["Magyar",["hu-HU"]],["\u0ea5\u0eb2\u0ea7",["lo-LA"]],["Nederlands",["nl-NL"]],["\u0928\u0947\u092a\u093e\u0932\u0940 \u092d\u093e\u0937\u093e",["ne-NP"]],["Norsk bokm\xe5l",["nb-NO"]],["Polski",["pl-PL"]],["Portugu\xeas",["pt-BR","Brasil"],["pt-PT","Portugal"]],["Rom\xe2n\u0103",["ro-RO"]],["\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",["si-LK"]],["Sloven\u0161\u010dina",["sl-SI"]],["Basa Sunda",["su-ID"]],["Sloven\u010dina",["sk-SK"]],["Suomi",["fi-FI"]],["Svenska",["sv-SE"]],["Kiswahili",["sw-TZ","Tanzania"],["sw-KE","Kenya"]],["\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",["ka-GE"]],["\u0540\u0561\u0575\u0565\u0580\u0565\u0576",["hy-AM"]],["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",["ta-IN","\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe"],["ta-SG","\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd"],["ta-LK","\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8"],["ta-MY","\u0bae\u0bb2\u0bc7\u0b9a\u0bbf\u0baf\u0bbe"]],["\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",["te-IN"]],["Ti\u1ebfng Vi\u1ec7t",["vi-VN"]],["T\xfcrk\xe7e",["tr-TR"]],["\u0627\u064f\u0631\u062f\u064f\u0648",["ur-PK","\u067e\u0627\u06a9\u0633\u062a\u0627\u0646"],["ur-IN","\u0628\u06be\u0627\u0631\u062a"]],["\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",["el-GR"]],["\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",["bg-BG"]],["P\u0443\u0441\u0441\u043a\u0438\u0439",["ru-RU"]],["\u0421\u0440\u043f\u0441\u043a\u0438",["sr-RS"]],["\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",["uk-UA"]],["\ud55c\uad6d\uc5b4",["ko-KR"]],["\u4e2d\u6587",["cmn-Hans-CN","\u666e\u901a\u8bdd (\u4e2d\u56fd\u5927\u9646)"],["cmn-Hans-HK","\u666e\u901a\u8bdd (\u9999\u6e2f)"],["cmn-Hant-TW","\u4e2d\u6587 (\u53f0\u7063)"],["yue-Hant-HK","\u7cb5\u8a9e (\u9999\u6e2f)"]],["\u65e5\u672c\u8a9e",["ja-JP"]],["\u0939\u093f\u0928\u094d\u0926\u0940",["hi-IN"]],["\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",["th-TH"]]];Array.prototype.skip||(Array.prototype.skip=function(e){return e<1?this:this.filter((function(t,a){return a>e-1}))});var le=function(e){return window.speechSynthesis.getVoices().filter(e||function(e){return e})},me=function(e){return window.localStorage.setItem("histories",JSON.stringify(e))};var ue=function(){var e=Object(n.useRef)(""),t=Object(n.useRef)(),a=Object(n.useState)(null),s=Object(i.a)(a,2),r=s[0],l=s[1],u=Object(n.useState)(),h=Object(i.a)(u,2),d=h[0],f=h[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),b=E[0],j=E[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),w=y[0],I=y[1],P=Object(n.useState)(!1),A=Object(i.a)(P,2),z=A[0],D=A[1],H=Object(n.useState)([]),V=Object(i.a)(H,2),F=V[0],B=V[1],K=Object(n.useState)(null),L=Object(i.a)(K,2),G=L[0],M=L[1],Z=Object(n.useState)("I'm going to make him an offer he can't refuse."),Y=Object(i.a)(Z,2),W=Y[0],q=Y[1],te=Object(n.useState)(1),ae=Object(i.a)(te,2),ne=ae[0],ce=ae[1],se=Object(n.useState)(1),re=Object(i.a)(se,2),ue=re[0],he=re[1],de=Object(n.useState)([]),fe=Object(i.a)(de,2),ge=fe[0],pe=fe[1],xe=c.a.useState(0),Ee=Object(i.a)(xe,2),be=Ee[0],je=Ee[1],ve=function(){var e=le((function(e){return e.lang.match("ja|en[-_]US")})).reverse(),t=e.filter((function(e){return e.lang.match("en[-_]US")}))[0];t&&M(t),B(e)};if(Object(n.useEffect)((function(a){console.log("\u521d\u671f\u5316\u51e6\u7406"),t.current=new g,t.current.on("result",(function(a){for(var n="",c="",s=a.resultIndex;s<a.results.length;s++)n=a.results[s][0].transcript,a.results[s].isFinal&&(!/(android)/i.test(navigator.userAgent)||a.results[s][0].confidence>0)?("ja-JP"===t.current.lang&&(n+="\u3002"),e.current+=n+"\n",console.log(e.current),j(e.current)):c+=n,I(c)})).on("start",(function(){console.log("\u8a71\u3057\u304b\u3051\u3066\u307f\u3066")})).on("soundstart",(function(){console.log("\u8a8d\u8b58\u4e2d...")})).on("soundend",(function(){console.log("\u505c\u6b62\u4e2d")})).on("nomatch",(function(e){console.log("\u97f3\u58f0\u3092\u8a8d\u8b58\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f")})).on("error",(function(e){console.log("\u30a8\u30e9\u30fc: "+e.error)})),window.speechSynthesis.onvoiceschanged=function(e){console.log("onvoiceschanged"),ve()},ve();var n=JSON.parse(localStorage.getItem("histories")).map((function(e){return"string"===typeof e?{sentence:e}:e}));n&&pe(n)}),[]),Object(n.useEffect)((function(e){if(console.log("changed selectedVoice"),G){var t,a=(t=G.lang.replace("_","-"),ie.reduce((function(e,a,n){return a.skip(1).reduce((function(e,t){return e.push(t[0]),e}),[]).includes(t)&&(e=n,console.log("exists ".concat(n))),e}),null));l(a),f(ie[a].filter((function(e,t){return t>0})).reduce((function(e,t){return t[0]===G.lang.replace("_","-")&&(e=t),e}))[0])}}),[G]),!G||!r)return console.log("\u97f3\u58f0\u53d6\u5f97\u4e2d"),c.a.createElement(c.a.Fragment,null,"\u97f3\u58f0\u53d6\u5f97\u4e2d");var _e=ie[r][1].length>1;z?(console.log("Microphone On"),t.current.lang=d,t.current.listen()):(console.log("onMicrophone Off"),t.current.kill());var ke,ye=function(e){return q(e.target.value)},we=function(t){var a=e.current.split("\n").filter((function(e){return e.length>0}));if(a.length>0){var n=new RegExp(/[\s!',\.\u3001\u3002]/,"g"),s=[a.pop(),W].map((function(e){return e.replace(n,"").toLowerCase()})),r=Object(i.a)(s,2);return r[0]===r[1]?c.a.createElement(_,null):c.a.createElement(k,null)}return c.a.createElement(c.a.Fragment,null)}();return c.a.createElement("div",{className:"jsx-".concat(x.__hash)+" app"},c.a.createElement(T.a,null,"\u30c9\u30e9\u30de\u30fb\u6620\u753b\u306e\u540d\u8a00\u3092\u30b7\u30e3\u30c9\u30fc\u30a4\u30f3\u30b0"),c.a.createElement($.a,{value:be,onChange:function(e,t){je(t)},indicatorColor:"primary",textColor:"primary",centered:!0},c.a.createElement(Q.a,{label:"\u30db\u30fc\u30e0"}),c.a.createElement(Q.a,{label:"\u904e\u53bb\u306e\u53f0\u8a5e"})),0===be&&c.a.createElement(c.a.Fragment,null,we,c.a.createElement("div",{className:"jsx-".concat(x.__hash)+" recognition"},c.a.createElement("div",{id:"results",className:"jsx-".concat(x.__hash)},c.a.createElement("span",{id:"final_span",className:"jsx-".concat(x.__hash)+" final"},(ke=5,b.split("\n").filter((function(e){return e.length>0})).slice(-1*ke).map((function(e,t){return c.a.createElement("p",{key:t},e)})))),c.a.createElement(ee,null,w)),c.a.createElement("div",{className:"jsx-".concat(x.__hash)+" tools"},c.a.createElement(U.a,{container:!0,direction:"column",justify:"space-around",alignItems:"center"},c.a.createElement(U.a,{item:!0},c.a.createElement("div",{style:{display:"none"},className:"jsx-".concat(x.__hash)},c.a.createElement("select",{disabled:!0,value:r,className:"jsx-".concat(x.__hash)},ie.map((function(e,t){return c.a.createElement("option",{key:e[0],value:t,className:"jsx-".concat(x.__hash)},e[0])}))),"\xa0\xa0",c.a.createElement("select",{disabled:!0,value:d,style:{visibility:_e?"visible":"hidden"},className:"jsx-".concat(x.__hash)},ie[r].filter((function(e,t){return t>0})).map((function(e,t){return c.a.createElement("option",{key:t,value:e[0],className:"jsx-".concat(x.__hash)},e[1]||"")}))))),c.a.createElement(U.a,{item:!0},c.a.createElement(X,{text:b},"\u30ed\u30b0\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),c.a.createElement(U.a,{item:!0},c.a.createElement("div",{style:{padding:"10px"},className:"jsx-".concat(x.__hash)},c.a.createElement(R,{isPowerOn:z,onClick:function(){D(!z)}})))))),c.a.createElement("br",{className:"jsx-".concat(x.__hash)}),c.a.createElement(J,{sentence:W,selectedVoice:G,voices:F,onChangedSentence:ye,onChangeVoice:function(e){var a,n=(a=e.target.value,le((function(e){return e.name===a}))[0]);M(n),t.current.lang=n.lang,t.current.restart()},onSpeak:function(e){var t=[{sentence:W}].concat(Object(o.a)(ge.filter((function(e){return e.sentence!==W}))));pe(t),me(t)},rate:ne,onChangedRate:function(e,t){return ce(t)},volume:ue,onChangedVolume:function(e,t){return he(t)}})),1===be&&c.a.createElement(oe,{histories:ge,toggleItemRemove:function(e){var t=e.checked,a=e.index,n=ge.concat();n[a].willRemove=t,pe(n)},onRemove:function(e){var t=ge.filter((function(e){return!e.willRemove})).concat();pe(t),me(t)},onChange:ye}),c.a.createElement("h2",{className:"jsx-".concat(x.__hash)},"\u3088\u304f\u3042\u308b\u8cea\u554f"),c.a.createElement("h3",{className:"jsx-".concat(x.__hash)},"\u4f7f\u7528\u65b9\u6cd5\u3092\u6559\u3048\u3066\uff1f"),c.a.createElement("ol",{className:"jsx-".concat(x.__hash)+" text-left"},c.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u30c9\u30e9\u30de\u30fb\u6620\u753b\u306e\u540d\u8a00\u3092\u5165\u529b\u3057\u307e\u3057\u3087\u3046\u3002"),c.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u30b9\u30d4\u30fc\u30ab\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u767a\u97f3\u3092\u805e\u304d\u307e\u3059\u3002"),c.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u30de\u30a4\u30af\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u30de\u30a4\u30afON\u306b\u3057\u307e\u3059\u3002"),c.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u5f79\u8005\u306b\u306a\u3063\u305f\u3064\u3082\u308a\u3067\u3001\u805e\u3053\u3048\u305f\u3068\u304a\u308a\u306b\u558b\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),c.a.createElement("h3",{className:"jsx-".concat(x.__hash)},"\u52d5\u4f5c\u3057\u306a\u3044\u3051\u3069..."),"Chrome\u30d6\u30e9\u30a6\u30b6\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002",c.a.createElement("table",{className:"jsx-".concat(x.__hash)+" qa"},c.a.createElement("thead",{className:"jsx-".concat(x.__hash)},c.a.createElement("tr",{className:"jsx-".concat(x.__hash)},c.a.createElement("th",{colSpan:"2",className:"jsx-".concat(x.__hash)},"\u5bfe\u5fdc\u30c7\u30d0\u30a4\u30b9"),c.a.createElement("th",{className:"jsx-".concat(x.__hash)},"\u53ef\u5426"))),c.a.createElement("tbody",{className:"jsx-".concat(x.__hash)},c.a.createElement("tr",{className:"jsx-".concat(x.__hash)},c.a.createElement("td",{className:"jsx-".concat(x.__hash)},c.a.createElement(N,null)),c.a.createElement("td",{className:"jsx-".concat(x.__hash)+" text-left"},"PC"),c.a.createElement("td",{className:"jsx-".concat(x.__hash)},c.a.createElement(_,null))),c.a.createElement("tr",{className:"jsx-".concat(x.__hash)},c.a.createElement("td",{className:"jsx-".concat(x.__hash)},c.a.createElement(C,null)),c.a.createElement("td",{className:"jsx-".concat(x.__hash)+" text-left"},"Android"),c.a.createElement("td",{className:"jsx-".concat(x.__hash)},c.a.createElement(_,null))),c.a.createElement("tr",{className:"jsx-".concat(x.__hash)},c.a.createElement("td",{className:"jsx-".concat(x.__hash)},c.a.createElement(S,null)),c.a.createElement("td",{className:"jsx-".concat(x.__hash)+" text-left"},"iPhone"),c.a.createElement("td",{className:"jsx-".concat(x.__hash)},c.a.createElement(k,null))))),c.a.createElement("hr",{className:"jsx-".concat(x.__hash)}),c.a.createElement("div",{className:"jsx-".concat(x.__hash)+" footer"},c.a.createElement("a",{target:"_blank",href:"https://github.com/GangDuo/shadowing",className:"jsx-".concat(x.__hash)},c.a.createElement(O,null),"GitHub")),c.a.createElement(m.a,{id:x.__hash},x))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.e91bf597.chunk.js.map