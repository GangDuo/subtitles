(this.webpackJsonpshadowing=this.webpackJsonpshadowing||[]).push([[0],{77:function(e,t,a){e.exports=a(94)},82:function(e,t,a){},87:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),s=(a(82),a(68)),i=a(14),l=a(17),m=a.n(l),u=(a(87),a(59)),d=a(53),h=a(69),f=a(67),g=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this);var r=new(window.webkitSpeechRecognition||window.SpeechRecognition);return r.interimResults=!0,r.continuous=!0,r.onresult=function(e){n.emit("result",e)},r.onsoundstart=function(e){console.log("".concat(new Date,"\u8a8d\u8b58\u4e2d...")),n.emit("soundstart",null)},r.onsoundend=function(){n.emit("soundend",null)},r.onnomatch=function(){console.log("".concat(new Date," \u97f3\u58f0\u3092\u8a8d\u8b58\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f")),n.emit("nomatch",null)},r.onerror=function(e){console.log(e),n.emit("error",e)},r.onstart=function(e){console.log("".concat(new Date," ").concat(e.timeStamp," \u97f3\u58f0\u8a8d\u8b58\u30b5\u30fc\u30d3\u30b9\u958b\u59cb ->>>>>")),n.emit("start",null)},r.onend=function(e){console.log("".concat(new Date," <<<<<- \u97f3\u58f0\u8a8d\u8b58\u30b5\u30fc\u30d3\u30b9\u5207\u65ad")),n.hasAlreadyStarted=!1,n.emit("end",null),n.isIdle||n.listen()},n.recognition=r,n.isIdle=!1,n.hasAlreadyStarted=!1,n}return Object(d.a)(a,[{key:"lang",get:function(){return this.lang_},set:function(e){this.lang_=e.replace("_","-")}}]),Object(d.a)(a,[{key:"listen",value:function(){this.hasAlreadyStarted||(this.hasAlreadyStarted=!0,this.isIdle=!1,this.lang&&(this.recognition.lang=this.lang),this.recognition.start())}},{key:"kill",value:function(){this.isIdle=!0,this.recognition.stop()}},{key:"restart",value:function(){this.isIdle=!1,this.recognition.stop()}}]),a}(a(60).EventEmitter),p=[".app.jsx-1744396685{text-align:center;}","#results.jsx-1744396685{font-size:14px;font-weight:bold;border:1px solid #ddd;padding:15px;text-align:left;min-height:100px;}",".recognition.jsx-1744396685{position:relative;}",".tools.jsx-1744396685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;right:0;}",".footer.jsx-1744396685 a.jsx-1744396685{cursor:pointer;color:black;-webkit-text-decoration:none;text-decoration:none;}",".training-mode.jsx-1744396685{margin:15px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",'.training-mode.jsx-1744396685 .button.jsx-1744396685{cursor:"pointer";}'];p.__hash="1744396685";var x=p,b=[".microphone-switch.jsx-2640999393{position:relative;}","@-webkit-keyframes shiny-jsx-2640999393{0%{-webkit-transform:scale(0) rotate(25deg);-ms-transform:scale(0) rotate(25deg);transform:scale(0) rotate(25deg);opacity:0;}50%{-webkit-transform:scale(1) rotate(25deg);-ms-transform:scale(1) rotate(25deg);transform:scale(1) rotate(25deg);opacity:1;}100%{-webkit-transform:scale(50) rotate(25deg);-ms-transform:scale(50) rotate(25deg);transform:scale(50) rotate(25deg);opacity:0;}}","@keyframes shiny-jsx-2640999393{0%{-webkit-transform:scale(0) rotate(25deg);-ms-transform:scale(0) rotate(25deg);transform:scale(0) rotate(25deg);opacity:0;}50%{-webkit-transform:scale(1) rotate(25deg);-ms-transform:scale(1) rotate(25deg);transform:scale(1) rotate(25deg);opacity:1;}100%{-webkit-transform:scale(50) rotate(25deg);-ms-transform:scale(50) rotate(25deg);transform:scale(50) rotate(25deg);opacity:0;}}",".shiny-btn.jsx-2640999393{position:relative;overflow:hidden;}",".shiny-btn.jsx-2640999393::after{content:'';position:absolute;top:-100px;left:-100px;width:50px;height:50px;background-image:linear-gradient(100deg,rgba(255,255,255,0) 10%,rgba(255,255,255,1) 100%,rgba(255,255,255,0) 0%);-webkit-animation-name:shiny-jsx-2640999393;animation-name:shiny-jsx-2640999393;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}",".circle.jsx-2640999393{border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}",".microphone-on.jsx-2640999393,.microphone-off.jsx-2640999393{cursor:pointer;}",".microphone-on.jsx-2640999393{background:#1373C7;width:48px;height:48px;color:#FFF;}",".microphone-off.jsx-2640999393{background:#FFF;width:38px;height:38px;border:solid 5px #ED1C22;color:#1373C7;}",".heartbeat.jsx-2640999393{position:absolute;top:0;left:0;-webkit-animation:pounding-jsx-2640999393 .1s linear infinite alternate;animation:pounding-jsx-2640999393 .1s linear infinite alternate;opacity:0.2;z-index:-99;background:#1373C7;width:48px;height:48px;}","@-webkit-keyframes pounding-jsx-2640999393{0%{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes pounding-jsx-2640999393{0%{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}"];b.__hash="2640999393";var E=b,j=a(16);function y(e){return r.a.createElement(j.a,Object.assign({icon:"circle"},e))}function v(e){return r.a.createElement(j.a,Object.assign({icon:["far","circle"],color:"green"},e))}function k(e){return r.a.createElement(j.a,Object.assign({icon:"times",color:"red"},e))}function w(e){return r.a.createElement(j.a,{icon:"microphone",size:"2x"})}function N(e){return r.a.createElement(j.a,{icon:"volume-up",size:"1x"})}function _(e){return r.a.createElement(j.a,{icon:["fab","windows"],size:"2x"})}function S(e){return r.a.createElement(j.a,{icon:["fab","apple"],size:"2x"})}function O(e){return r.a.createElement(j.a,{icon:["fab","android"],size:"2x"})}function I(e){return r.a.createElement(j.a,{icon:["fab","github"],size:"2x"})}function C(e){return r.a.createElement(j.a,Object.assign({icon:"trash"},e))}function R(e){return r.a.createElement(j.a,Object.assign({icon:"trophy"},e))}function A(e){return r.a.createElement(j.a,Object.assign({icon:"arrow-alt-circle-right"},e))}var P=function(e){var t=e.isPowerOn,a=e.onClick;return e.background,r.a.createElement("div",{className:"jsx-".concat(E.__hash)+" microphone-switch"},r.a.createElement("div",{id:"microphone",onClick:function(e){a&&a.apply()},className:"jsx-".concat(E.__hash)+" "+"circle microphone-".concat(t?"on shiny-btn":"off")},r.a.createElement("div",{className:"jsx-".concat(E.__hash)},r.a.createElement(w,null))),r.a.createElement("div",{id:"heartbeat",className:"jsx-".concat(E.__hash)+" "+"circle ".concat(t?"heartbeat":"")}),r.a.createElement(m.a,{id:E.__hash},E))},z=a(41),D=a(28),H=a(66),T=a(43),B=a(126),F=a(129),M=a(144),V=a(143),U=a(131),K=a(132),L=a(133),Y=a(44),G=a(141),W=a(138),Z=a(134),J=Object(B.a)({root:{height:"48px",width:"48px",borderRadius:"50%",color:"#fff",backgroundColor:"#1976d2",border:0,cursor:"pointer","&:hover":{color:"#fff",backgroundColor:"#1976d2"}},container:{margin:"0 auto",width:"99%"}}),q=r.a.forwardRef((function(e,t){var a=J(),n=e.onChangedSentence,o=e.onChangeVoice,c=e.onSpeak,s=e.sentence,i=e.selectedVoice,l=e.voices,m=e.rate,u=e.onChangedRate,d=e.volume,h=e.onChangedVolume;return r.a.createElement("div",null,r.a.createElement(F.a,{required:!0,fullWidth:!0,variant:"outlined"},r.a.createElement(M.a,{htmlFor:"outlined-adornment-sentence"},"\u53f0\u8a5e"),r.a.createElement(V.a,{inputRef:t,id:"outlined-adornment-sentence",type:"text",labelWidth:50,value:s,onChange:n,endAdornment:r.a.createElement(U.a,{position:"end"},r.a.createElement(K.a,{focusVisibleClassName:"a",classes:{root:a.root},onClick:function(e){c&&c(s);var t=new SpeechSynthesisUtterance(s);t.voice=i,t.lang=i.lang.replace("_","-"),m&&m>=.1&&m<=10&&(t.rate=m),d&&d>=0&&d<=1&&(t.volume=d),speechSynthesis.speak(t)},size:"small"},r.a.createElement(N,null)))})),r.a.createElement(L.a,{container:!0,spacing:2,alignItems:"center",classes:{root:a.container}},r.a.createElement(L.a,{item:!0},r.a.createElement(Y.a,{id:"input-slider",gutterBottom:!0},"\u901f\u5ea6")),r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(G.a,{min:.1,max:10,step:.1,value:m,onChange:u,valueLabelDisplay:"auto","aria-labelledby":"input-slider"})),r.a.createElement(L.a,{item:!0},r.a.createElement(Y.a,null,m))),r.a.createElement(L.a,{container:!0,spacing:2,alignItems:"center",classes:{root:a.container}},r.a.createElement(L.a,{item:!0},r.a.createElement(Y.a,{id:"volume-slider",gutterBottom:!0},"\u97f3\u91cf")),r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(G.a,{min:0,max:1,step:.1,value:d,onChange:h,valueLabelDisplay:"auto","aria-labelledby":"volume-slider"})),r.a.createElement(L.a,{item:!0},r.a.createElement(Y.a,null,d))),r.a.createElement(F.a,null,r.a.createElement(M.a,{shrink:!0,id:"selectVoicesLabel"},"\u8a00\u8a9e"),r.a.createElement(W.a,{labelId:"selectVoicesLabel",value:i.name,onChange:o,displayEmpty:!0},l.map((function(e,t){return r.a.createElement(Z.a,{key:t,value:e.name},"".concat(e.name," (").concat(e.lang,")"))})))))})),X=a(65),$=a.n(X);function Q(e){var t=e.children,a=e.text;return r.a.createElement("button",{onClick:function(){var e=document.createElement("a");e.href="data:text/plain,"+encodeURIComponent(a),e.download="log".concat($()().format("_YYYYMMDD_HHmmss"),".txt"),e.click()}},t)}var ee=a(139),te=a(137);function ae(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"jsx-2529574083"},e.children),r.a.createElement(m.a,{id:"2529574083"},["span.jsx-2529574083{color:gray;}"]))}var ne=a(95),re=a(135),oe=a(140),ce=a(136),se=a(70),ie=function(e){var t=e.index,a=e.style,n=e.data,o=n.histories,c=n.selectedIndex,s=n.setSelectedIndex,i=n.onChange,l=n.toggleItemRemove;return r.a.createElement(ne.a,{button:!0,style:a,key:t,selected:c===t,onClick:function(e){s(t),o[t]&&i&&i({target:{value:o[t].sentence}})}},r.a.createElement(re.a,null,r.a.createElement(oe.a,{edge:"start",checked:!!o[t].willRemove,icon:r.a.createElement(y,{color:"#1976d2"}),disableRipple:!0,onChange:function(e){var a=e.target.checked;l&&l({checked:a,index:t})}})),r.a.createElement(ce.a,{primary:o[t].sentence}))};function le(e){var t=e.title,a=e.histories,o=e.onChange,c=e.size,s=e.onRemove,l=e.toggleItemRemove,u=Object(n.useState)(null),d=Object(i.a)(u,2),h=d[0],f=d[1];return r.a.createElement("div",{className:"jsx-264903680"},r.a.createElement("div",{className:"jsx-264903680 stack-history-header"},r.a.createElement("span",{className:"jsx-264903680"},a.filter((function(e){return e.willRemove})).length>0&&r.a.createElement(K.a,{onClick:s},r.a.createElement(C,null))),r.a.createElement("p",{className:"jsx-264903680"},t)),r.a.createElement(se.a,{height:7*c,itemCount:a.length,itemSize:c,width:"100%",itemData:{histories:a,selectedIndex:h,setSelectedIndex:f,onChange:o,toggleItemRemove:l}},ie),r.a.createElement(m.a,{id:"264903680"},[".stack-history-header.jsx-264903680{position:relative;}",".stack-history-header.jsx-264903680 span.jsx-264903680{position:absolute;right:10px;}"]))}function me(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"jsx-2360185325"},"\u3088\u304f\u3042\u308b\u8cea\u554f"),r.a.createElement("h3",{className:"jsx-2360185325"},"\u4f7f\u7528\u65b9\u6cd5\u3092\u6559\u3048\u3066\uff1f"),r.a.createElement("ol",{className:"jsx-2360185325 text-left"},r.a.createElement("li",{className:"jsx-2360185325"},"\u30c9\u30e9\u30de\u30fb\u6620\u753b\u306e\u540d\u8a00\u3092\u5165\u529b\u3057\u307e\u3057\u3087\u3046\u3002"),r.a.createElement("li",{className:"jsx-2360185325"},"\u30b9\u30d4\u30fc\u30ab\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u767a\u97f3\u3092\u805e\u304d\u307e\u3059\u3002"),r.a.createElement("li",{className:"jsx-2360185325"},"\u30de\u30a4\u30af\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u30de\u30a4\u30afON\u306b\u3057\u307e\u3059\u3002"),r.a.createElement("li",{className:"jsx-2360185325"},"\u5f79\u8005\u306b\u306a\u3063\u305f\u3064\u3082\u308a\u3067\u3001\u805e\u3053\u3048\u305f\u3068\u304a\u308a\u306b\u558b\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),r.a.createElement("h3",{className:"jsx-2360185325"},"\u52d5\u4f5c\u3057\u306a\u3044\u3051\u3069..."),"Chrome\u30d6\u30e9\u30a6\u30b6\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002",r.a.createElement("table",{className:"jsx-2360185325 qa"},r.a.createElement("thead",{className:"jsx-2360185325"},r.a.createElement("tr",{className:"jsx-2360185325"},r.a.createElement("th",{colSpan:"2",className:"jsx-2360185325"},"\u5bfe\u5fdc\u30c7\u30d0\u30a4\u30b9"),r.a.createElement("th",{className:"jsx-2360185325"},"\u53ef\u5426"))),r.a.createElement("tbody",{className:"jsx-2360185325"},r.a.createElement("tr",{className:"jsx-2360185325"},r.a.createElement("td",{className:"jsx-2360185325"},r.a.createElement(_,null)),r.a.createElement("td",{className:"jsx-2360185325 text-left"},"PC"),r.a.createElement("td",{className:"jsx-2360185325"},r.a.createElement(v,{size:"2x"}))),r.a.createElement("tr",{className:"jsx-2360185325"},r.a.createElement("td",{className:"jsx-2360185325"},r.a.createElement(O,null)),r.a.createElement("td",{className:"jsx-2360185325 text-left"},"Android"),r.a.createElement("td",{className:"jsx-2360185325"},r.a.createElement(v,{size:"2x"}))),r.a.createElement("tr",{className:"jsx-2360185325"},r.a.createElement("td",{className:"jsx-2360185325"},r.a.createElement(S,null)),r.a.createElement("td",{className:"jsx-2360185325 text-left"},"iPhone"),r.a.createElement("td",{className:"jsx-2360185325"},r.a.createElement(k,{size:"2x"}))))),r.a.createElement("h3",{className:"jsx-2360185325"},"\u904e\u53bb\u306e\u53f0\u8a5e\u306b\u3064\u3044\u3066"),r.a.createElement("p",{className:"jsx-2360185325 text-left"},"\u30b9\u30d4\u30fc\u30ab\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u62bc\u3057\u3066\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u767a\u97f3\u3092\u805e\u304f\u3068\u3001\u53f0\u8a5e\u3092\u5c65\u6b74\u306b\u8a18\u9332\u3057\u307e\u3059\u3002",r.a.createElement("br",{className:"jsx-2360185325"}),"\u30b9\u30d4\u30fc\u30ab\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u62bc\u3055\u306a\u3044\u3068\u3001\u5c65\u6b74\u306b\u306f\u4f55\u3082\u6b8b\u308a\u307e\u305b\u3093\u3002",r.a.createElement("br",{className:"jsx-2360185325"}),"\u5c65\u6b74\u304b\u3089\u53f0\u8a5e\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),r.a.createElement(m.a,{id:"2360185325"},[".qa.jsx-2360185325{margin:10px auto;}",".text-left.jsx-2360185325{text-align:left;}"]))}le.defaultProps={title:"\u5c65\u6b74",size:35};var ue=a(50),de=['label.jsx-657432299 input[type="checkbox"].jsx-657432299{position:absolute;opacity:0;cursor:pointer;}',"label.jsx-657432299 .icon.jsx-657432299{position:relative;width:48px;height:48px;background:#18191f;color:#555;font-size:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin:0 10px;box-shadow: -1px 1px 4px rgba(255,255,255,0.05), 4px 4px 6px rgba(0,0,0,0.2), inset 1px 1px 4px rgba(255,255,255,0.05), inset 1px 1px 1px rgba(0,0,0,1);overflow:hidden;border-radius:10px;}",'label.jsx-657432299 input[type="checkbox"].jsx-657432299:checked~.icon.jsx-657432299{color:#00f3ff;}'];function he(e){var t=e.children,a=Object(ue.a)(e,["children"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"jsx-".concat(de.__hash)},r.a.createElement("input",Object.assign({type:"checkbox"},a,{className:"jsx-".concat(de.__hash)+" "+(a&&null!=a.className&&a.className||"")})),r.a.createElement("div",{className:"jsx-".concat(de.__hash)+" icon"},t)),r.a.createElement(m.a,{id:de.__hash},de))}function fe(e){var t=e.children,a=e.value,n=r.a.Children.map(t,(function(e,t){return r.a.cloneElement(e,{index:t,isActive:a===t})}));return r.a.createElement("div",{className:"TabPanels-root"},n)}function ge(e){var t=e.children,a=e.index,n=e.isActive,o=Object(ue.a)(e,["children","index","isActive"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:!n,id:"tabpanel-".concat(a),"aria-labelledby":"tab-".concat(a)},o),t)}de.__hash="657432299",fe.defaultProps={value:0},z.b.add(D.c,D.d,D.e,D.i,H.a,D.b,D.f,T.d,T.b,T.a,T.c,D.g,D.h,D.a);var pe=Object(B.a)({item:{textAlign:"center"}}),xe=[["Afrikaans",["af-ZA"]],["\u12a0\u121b\u122d\u129b",["am-ET"]],["Az\u0259rbaycanca",["az-AZ"]],["\u09ac\u09be\u0982\u09b2\u09be",["bn-BD","\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6"],["bn-IN","\u09ad\u09be\u09b0\u09a4"]],["Bahasa Indonesia",["id-ID"]],["Bahasa Melayu",["ms-MY"]],["Catal\xe0",["ca-ES"]],["\u010ce\u0161tina",["cs-CZ"]],["Dansk",["da-DK"]],["Deutsch",["de-DE"]],["English",["en-AU","Australia"],["en-CA","Canada"],["en-IN","India"],["en-KE","Kenya"],["en-TZ","Tanzania"],["en-GH","Ghana"],["en-NZ","New Zealand"],["en-NG","Nigeria"],["en-ZA","South Africa"],["en-PH","Philippines"],["en-GB","United Kingdom"],["en-US","United States"]],["Espa\xf1ol",["es-AR","Argentina"],["es-BO","Bolivia"],["es-CL","Chile"],["es-CO","Colombia"],["es-CR","Costa Rica"],["es-EC","Ecuador"],["es-SV","El Salvador"],["es-ES","Espa\xf1a"],["es-US","Estados Unidos"],["es-GT","Guatemala"],["es-HN","Honduras"],["es-MX","M\xe9xico"],["es-NI","Nicaragua"],["es-PA","Panam\xe1"],["es-PY","Paraguay"],["es-PE","Per\xfa"],["es-PR","Puerto Rico"],["es-DO","Rep\xfablica Dominicana"],["es-UY","Uruguay"],["es-VE","Venezuela"]],["Euskara",["eu-ES"]],["Filipino",["fil-PH"]],["Fran\xe7ais",["fr-FR"]],["Basa Jawa",["jv-ID"]],["Galego",["gl-ES"]],["\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",["gu-IN"]],["Hrvatski",["hr-HR"]],["IsiZulu",["zu-ZA"]],["\xcdslenska",["is-IS"]],["Italiano",["it-IT","Italia"],["it-CH","Svizzera"]],["\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",["kn-IN"]],["\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",["km-KH"]],["Latvie\u0161u",["lv-LV"]],["Lietuvi\u0173",["lt-LT"]],["\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",["ml-IN"]],["\u092e\u0930\u093e\u0920\u0940",["mr-IN"]],["Magyar",["hu-HU"]],["\u0ea5\u0eb2\u0ea7",["lo-LA"]],["Nederlands",["nl-NL"]],["\u0928\u0947\u092a\u093e\u0932\u0940 \u092d\u093e\u0937\u093e",["ne-NP"]],["Norsk bokm\xe5l",["nb-NO"]],["Polski",["pl-PL"]],["Portugu\xeas",["pt-BR","Brasil"],["pt-PT","Portugal"]],["Rom\xe2n\u0103",["ro-RO"]],["\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",["si-LK"]],["Sloven\u0161\u010dina",["sl-SI"]],["Basa Sunda",["su-ID"]],["Sloven\u010dina",["sk-SK"]],["Suomi",["fi-FI"]],["Svenska",["sv-SE"]],["Kiswahili",["sw-TZ","Tanzania"],["sw-KE","Kenya"]],["\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",["ka-GE"]],["\u0540\u0561\u0575\u0565\u0580\u0565\u0576",["hy-AM"]],["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",["ta-IN","\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe"],["ta-SG","\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd"],["ta-LK","\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8"],["ta-MY","\u0bae\u0bb2\u0bc7\u0b9a\u0bbf\u0baf\u0bbe"]],["\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",["te-IN"]],["Ti\u1ebfng Vi\u1ec7t",["vi-VN"]],["T\xfcrk\xe7e",["tr-TR"]],["\u0627\u064f\u0631\u062f\u064f\u0648",["ur-PK","\u067e\u0627\u06a9\u0633\u062a\u0627\u0646"],["ur-IN","\u0628\u06be\u0627\u0631\u062a"]],["\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",["el-GR"]],["\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",["bg-BG"]],["P\u0443\u0441\u0441\u043a\u0438\u0439",["ru-RU"]],["\u0421\u0440\u043f\u0441\u043a\u0438",["sr-RS"]],["\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",["uk-UA"]],["\ud55c\uad6d\uc5b4",["ko-KR"]],["\u4e2d\u6587",["cmn-Hans-CN","\u666e\u901a\u8bdd (\u4e2d\u56fd\u5927\u9646)"],["cmn-Hans-HK","\u666e\u901a\u8bdd (\u9999\u6e2f)"],["cmn-Hant-TW","\u4e2d\u6587 (\u53f0\u7063)"],["yue-Hant-HK","\u7cb5\u8a9e (\u9999\u6e2f)"]],["\u65e5\u672c\u8a9e",["ja-JP"]],["\u0939\u093f\u0928\u094d\u0926\u0940",["hi-IN"]],["\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",["th-TH"]]],be=["You're gonna need a bigger boat.","May the Force be with you.","With great power comes great responsibility.","I never had any friends later on like the ones I had when I was twelve. Jesus, does anyone?","We think too much, and feel too little.","Mama always said life was like a box of chocolates. You never know what you're gonna get.","This is Sparta!","I'll have what she's having.","War has already begun.","Elementary, my dear Watson.","I feel the need-the need for speed!","It was Beauty killed the Beast.","They're here","Magic Mirror on the wall, who is the fairest one of all?","Oh yes, the past can hurt. But you can either run from it, or learn from it.","Then,you\u2019re saying yes,not because you have to,not because a covenant tells you to,but because you know in your heart that you want to.","Truth is, sometimes I miss you so bad I can hardly stand it...","I mean, funny like I'm a clown? I amuse you?","After all, tomorrow is another day!","Why are you trying so hard to fit in when you were born to stand out?","I'm the king of the world!","Show me the money!","Hey. Don't ever let somebody tell you... You can't do something. Not even me. All right?","You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period.","To infinity and beyond!","I need your help","You talkin' to me?","Son, you\u2019re gonna have to face him sooner or later. If you\u2019re afraid of something, you've got to stand and face it.","You have all these rules, and you think they\u2019ll save you.","Usually they\u2019re just trying to protect you because they love you."];Array.prototype.skip||(Array.prototype.skip=function(e){return e<1?this:this.filter((function(t,a){return a>e-1}))});var Ee=function(e){return window.speechSynthesis.getVoices().filter(e||function(e){return e})},je=function(e){return window.localStorage.setItem("histories",JSON.stringify(e))};var ye=function(){var e=Object(n.useRef)([]),t=Object(n.useRef)(),a=Object(n.useState)(null),o=Object(i.a)(a,2),c=o[0],l=o[1],u=Object(n.useState)(),d=Object(i.a)(u,2),h=d[0],f=d[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),E=b[0],j=b[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),N=w[0],_=w[1],S=Object(n.useState)(!1),O=Object(i.a)(S,2),C=O[0],z=O[1],D=Object(n.useState)([]),H=Object(i.a)(D,2),T=H[0],B=H[1],F=Object(n.useState)(null),M=Object(i.a)(F,2),V=M[0],U=M[1],K=Object(n.useState)("I'm going to make him an offer he can't refuse."),G=Object(i.a)(K,2),W=G[0],Z=G[1],J=Object(n.useState)(1),X=Object(i.a)(J,2),$=X[0],ne=X[1],re=Object(n.useState)(1),oe=Object(i.a)(re,2),ce=oe[0],se=oe[1],ie=Object(n.useState)([]),ue=Object(i.a)(ie,2),de=ue[0],ye=ue[1],ve=r.a.useState(0),ke=Object(i.a)(ve,2),we=ke[0],Ne=ke[1],_e=pe(),Se=Object(n.useState)(!1),Oe=Object(i.a)(Se,2),Ie=Oe[0],Ce=Oe[1],Re=Object(n.useState)(be),Ae=Object(i.a)(Re,2),Pe=Ae[0],ze=Ae[1],De=Object(n.useRef)(),He=function(){var e=Ee((function(e){return e.lang.match("ja|en[-_]US")})).reverse(),t=e.filter((function(e){return e.lang.match("en[-_]US")}))[0];t&&U(t),B(e)};if(Object(n.useEffect)((function(a){console.log("\u521d\u671f\u5316\u51e6\u7406"),t.current=new g,t.current.on("result",(function(a){for(var n="",r="",o=a.resultIndex;o<a.results.length;o++)n=a.results[o][0].transcript,a.results[o].isFinal&&(!/(android)/i.test(navigator.userAgent)||a.results[o][0].confidence>0)?function(){"ja-JP"===t.current.lang&&(n+="\u3002");var a=new RegExp(/[\s!',-\.\?\u2019\u3001\u3002]/,"g"),r=[n,De.current.value].map((function(e){return e.replace(a,"").toLowerCase()})),o=Object(i.a)(r,2),c=o[0],s=o[1];e.current.push({transcript:n,isCorrect:c===s,sentence:De.current.value}),console.log("".concat(n," : ").concat(De.current.value)),j(e.current.filter((function(e){return e.transcript.length>0})).map((function(e){return e.transcript})).join("\n"))}():r+=n,_(r)})).on("start",(function(){console.log("\u8a71\u3057\u304b\u3051\u3066\u307f\u3066")})).on("soundstart",(function(){console.log("\u8a8d\u8b58\u4e2d...")})).on("soundend",(function(){console.log("\u505c\u6b62\u4e2d")})).on("nomatch",(function(e){console.log("\u97f3\u58f0\u3092\u8a8d\u8b58\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f")})).on("error",(function(e){console.log("\u30a8\u30e9\u30fc: "+e.error)})),window.speechSynthesis.onvoiceschanged=function(e){console.log("onvoiceschanged"),He()},He();var n=JSON.parse(localStorage.getItem("histories"));n&&ye(n.map((function(e){return"string"===typeof e?{sentence:e}:e})))}),[]),Object(n.useEffect)((function(e){if(console.log("changed selectedVoice"),V){var t,a=(t=V.lang.replace("_","-"),xe.reduce((function(e,a,n){return a.skip(1).reduce((function(e,t){return e.push(t[0]),e}),[]).includes(t)&&(e=n,console.log("exists ".concat(n))),e}),null));l(a),f(xe[a].filter((function(e,t){return t>0})).reduce((function(e,t){return t[0]===V.lang.replace("_","-")&&(e=t),e}))[0])}}),[V]),!V||!c)return console.log("\u97f3\u58f0\u53d6\u5f97\u4e2d"),r.a.createElement(r.a.Fragment,null,"\u97f3\u58f0\u53d6\u5f97\u4e2d");var Te=xe[c][1].length>1;C?(console.log("Microphone On"),t.current.lang=h,t.current.listen()):(console.log("onMicrophone Off"),t.current.kill());var Be,Fe=function(e){return Z(e.target.value)};return r.a.createElement("div",{className:"jsx-".concat(x.__hash)+" app"},r.a.createElement(Y.a,null,"\u30c9\u30e9\u30de\u30fb\u6620\u753b\u306e\u540d\u8a00\u3092\u30b7\u30e3\u30c9\u30fc\u30a4\u30f3\u30b0"),r.a.createElement(ee.a,{value:we,onChange:function(e,t){Ne(t)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(te.a,{label:"\u30db\u30fc\u30e0"}),r.a.createElement(te.a,{label:"\u904e\u53bb\u306e\u53f0\u8a5e"})),r.a.createElement(fe,{value:we},r.a.createElement(ge,null,r.a.createElement("div",{className:"jsx-".concat(x.__hash)+" recognition"},r.a.createElement("div",{id:"results",className:"jsx-".concat(x.__hash)},r.a.createElement("span",{id:"final_span",className:"jsx-".concat(x.__hash)+" final"},(Be=5,r.a.createElement(r.a.Fragment,null,e.current.filter((function(e){return e.transcript.length>0})).slice(-1*Be).map((function(e,t){return r.a.createElement(L.a,{key:t,container:!0,spacing:3},r.a.createElement(L.a,{item:!0,xs:1,classes:{item:_e.item}},e.isCorrect?r.a.createElement(v,null):r.a.createElement(k,null)),r.a.createElement(L.a,{item:!0,xs:11},e.transcript))}))))),r.a.createElement(ae,null,N)),r.a.createElement("div",{className:"jsx-".concat(x.__hash)+" tools"},r.a.createElement(L.a,{container:!0,direction:"column",justify:"space-around",alignItems:"center"},r.a.createElement(L.a,{item:!0},r.a.createElement("div",{style:{display:"none"},className:"jsx-".concat(x.__hash)},r.a.createElement("select",{disabled:!0,value:c,className:"jsx-".concat(x.__hash)},xe.map((function(e,t){return r.a.createElement("option",{key:e[0],value:t,className:"jsx-".concat(x.__hash)},e[0])}))),"\xa0\xa0",r.a.createElement("select",{disabled:!0,value:h,style:{visibility:Te?"visible":"hidden"},className:"jsx-".concat(x.__hash)},xe[c].filter((function(e,t){return t>0})).map((function(e,t){return r.a.createElement("option",{key:t,value:e[0],className:"jsx-".concat(x.__hash)},e[1]||"")}))))),r.a.createElement(L.a,{item:!0},r.a.createElement(Q,{text:E},"\u30ed\u30b0\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),r.a.createElement(L.a,{item:!0},r.a.createElement("div",{style:{padding:"10px"},className:"jsx-".concat(x.__hash)},r.a.createElement(P,{isPowerOn:C,onClick:function(){z(!C)}})))))),r.a.createElement("div",{className:"jsx-".concat(x.__hash)+" training-mode"},r.a.createElement(he,{checked:Ie,onChange:function(e){return Ce(!Ie)}},r.a.createElement(R,null)),Ie&&r.a.createElement("div",{onClick:function(e){var t=Pe.concat();if(0===t.length)return ze(be),Ce(!1),void alert("\u304a\u3057\u307e\u3044");var a=Math.floor(Math.random()*t.length);console.log("".concat(a,"/").concat(t.length)),Z(t[a]),t.splice(a,1),ze(t)},className:"jsx-".concat(x.__hash)+" button"},r.a.createElement(A,{size:"3x",color:"#1976d2"}))),r.a.createElement(q,{sentence:W,ref:De,selectedVoice:V,voices:T,onChangedSentence:Fe,onChangeVoice:function(e){var a,n=(a=e.target.value,Ee((function(e){return e.name===a}))[0]);U(n),t.current.lang=n.lang,t.current.restart()},onSpeak:function(e){var t=[{sentence:W}].concat(Object(s.a)(de.filter((function(e){return e.sentence!==W}))));ye(t),je(t)},rate:$,onChangedRate:function(e,t){return ne(t)},volume:ce,onChangedVolume:function(e,t){return se(t)}})),r.a.createElement(ge,null,r.a.createElement(le,{histories:de,toggleItemRemove:function(e){var t=e.checked,a=e.index,n=de.concat();n[a].willRemove=t,ye(n)},onRemove:function(e){var t=de.filter((function(e){return!e.willRemove})).concat();ye(t),je(t)},onChange:Fe}))),r.a.createElement(me,null),r.a.createElement("hr",{className:"jsx-".concat(x.__hash)}),r.a.createElement("div",{className:"jsx-".concat(x.__hash)+" footer"},r.a.createElement("a",{target:"_blank",href:"https://github.com/GangDuo/shadowing",className:"jsx-".concat(x.__hash)},r.a.createElement(I,null),"GitHub")),r.a.createElement(m.a,{id:x.__hash},x))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.6f5a7018.chunk.js.map