(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){e.exports=t(50)},22:function(e,a,t){},24:function(e,a,t){},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),s=t(13),m=t.n(s),n=(t(22),t(5));t(24),t(26);var r=function(){return c.a.createElement("div",{className:"glowing-moon"})};t(28);var i=function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"stars1"}),c.a.createElement("div",{id:"stars2"}),c.a.createElement("div",{id:"stars3"}))};t(30);var d=function(){return c.a.createElement("div",{className:"scene"},c.a.createElement("img",{src:"https://habrastorage.org/webt/ev/3h/fl/ev3hfljwpd7qqfntbha2vae5ylu.png",alt:"cloud",className:"cloud2"}),c.a.createElement("img",{src:"https://habrastorage.org/webt/vu/ge/jz/vugejzlek-hrppd3e269gmsb0hq.png",alt:"cloud",className:"cloud3"}),c.a.createElement("img",{src:"https://habrastorage.org/webt/vu/ge/jz/vugejzlek-hrppd3e269gmsb0hq.png",alt:"cloud",className:"cloud5"}))};function E(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function v(){var e=Object(l.useState)(E()),a=Object(n.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)(function(){function e(){c(E())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t}t(12);var o=function(e){if(v().width<=500){var a=10*Math.random()+1+"%";if("left"===e.treeType){var t=Math.floor(-21*Math.random())-10+"%";return c.a.createElement("img",{src:e.src,alt:e.alt,className:e.className,style:{marginTop:a,left:t}})}var l=Math.floor(17*Math.random())+35+"%";return c.a.createElement("img",{src:e.src,alt:e.alt,className:e.className,style:{marginTop:a,left:l}})}return c.a.createElement("img",{src:e.src,alt:e.alt,className:e.className,style:{marginTop:e.correction.y,left:e.correction.x}})};var N=function(){function e(){var e=["withered tree","stumpy tree"],a=[],t=v().width,l=40;t<=400?l=10:t<=600&&(l=15);for(var c=0;c<l;c++){var s=Math.floor(Math.random()*e.length);a.push(e[s])}return a}return c.a.createElement("div",{className:"TreeGen"},c.a.createElement("div",{className:"leftTrees"},e().map(function(e,a){var t={};return t.x=Math.floor(25*Math.random()+1)-10+"%",t.y=10*Math.random()+1+"%",c.a.createElement(o,{key:a,src:"./images/".concat(e,".png"),treeType:"left",className:"Trees leftTree",correction:t})})),c.a.createElement("div",{className:"rightTrees"},e().map(function(e,a){var t={};return t.x=Math.floor(36*Math.random())+50+"%",t.y=10*Math.random()+1+"%",c.a.createElement(o,{key:a,src:"./images/".concat(e,".png"),treeType:"right",className:"Trees rightTree",correction:t})})))};t(33);var b=function(e){return c.a.createElement("div",{className:"hillContainer",style:{zIndex:5}},c.a.createElement("div",{className:"wave-container"},c.a.createElement("div",{className:"wave -zero ".concat(e.frontClass)}),c.a.createElement("div",{className:"wave -one ".concat(e.frontClass)}),c.a.createElement("div",{className:"wave -three ".concat(e.frontClass)}),c.a.createElement("div",{className:"wave -four ".concat(e.frontClass),hidden:e.hidden}),c.a.createElement("div",{className:"wave -two ".concat(e.frontClass)})))};t(35);var h=function(e){return c.a.createElement("div",{className:"postCont"},c.a.createElement("div",{hidden:e.hidden,className:"post",onClick:function(){e.slider(e.changeTo)}},c.a.createElement("span",null,e.content)),c.a.createElement("div",{className:"post2",hidden:e.hidden2,onClick:function(){e.slider(e.changeTo2)}},c.a.createElement("span",null,e.content2)))};var u=function(e){return c.a.createElement("div",null,c.a.createElement(r,null),c.a.createElement(d,null),c.a.createElement(i,null),c.a.createElement(h,{content:"About",content2:"Hire",changeTo:"2",changeTo2:"0",hidden:!1,slider:e.slider}),c.a.createElement(b,{frontClass:"front"}),c.a.createElement(N,null))};t(37);var f=function(e){var a=new c.a.useState(0),t=Object(n.a)(a,2),l=t[0],s=t[1];return c.a.createElement("img",{src:"./images/witch.png",className:"witchHouse grow ".concat(1==l&&"clickedGrow"),onClick:function(){s(1),setTimeout(function(){e.change(3)},900)},alt:""})};var p=function(e){return c.a.createElement("div",null,c.a.createElement(r,null),c.a.createElement(d,null),c.a.createElement(i,null),c.a.createElement(h,{content:"Return",content2:"About",changeTo:"1",changeTo2:"2",slider:e.change}),c.a.createElement(b,{frontClass:"",hidden:!0}),c.a.createElement(N,null),c.a.createElement(f,{change:e.change}))};var g=function(e){return c.a.createElement("div",null,c.a.createElement(r,null),c.a.createElement(d,null),c.a.createElement(i,null),c.a.createElement(h,{content:"Hire",content2:"Return",changeTo:"0",changeTo2:"1",slider:e.slider}),c.a.createElement(b,{frontClass:"",hidden:!0}),c.a.createElement(N,null))},w=t(68),k=t(60),y=t(71);var T=function(e){var a=Object(k.a)({palette:{primary:{main:"#000000"}}});return c.a.createElement(y.a,{theme:a},c.a.createElement(w.a,{timeout:1e3,easing:{enter:" cubic-bezier(0.0, 0.0, 0.2, 1)",exit:a.transitions.easing.sharp},in:e.condition,direction:e.direction,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("div",null,e.children)))};var C=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"backButton",onClick:function(){window.location.reload(!0)}},"Go Back?"),c.a.createElement("div",{className:"shelf-one"},c.a.createElement("div",{className:"shelf shadow"},c.a.createElement("div",{className:"shelf-hooks"}),c.a.createElement("div",{className:"base"}),c.a.createElement("div",{className:"crystal-ball"},c.a.createElement("div",{className:"stand"}),c.a.createElement("div",{className:"ball"})),c.a.createElement("div",{className:"bottle bottle-1"},c.a.createElement("div",{className:"bowl"}),c.a.createElement("div",{className:"bottle-neck"}),c.a.createElement("div",{className:"bottle-top"})),c.a.createElement("div",{className:"drippings"},c.a.createElement("div",{className:"drip"})),c.a.createElement("div",{className:"bottle bottle-3"},c.a.createElement("div",{className:"bowl"}),c.a.createElement("div",{className:"bottle-neck"}),c.a.createElement("div",{className:"bottle-top"}))),c.a.createElement("div",{className:"shelf"},c.a.createElement("div",{className:"shelf-hooks"}),c.a.createElement("div",{className:"base"}),c.a.createElement("div",{className:"crystal-ball"},c.a.createElement("div",{className:"stand"}),c.a.createElement("div",{className:"ball"},c.a.createElement("div",{className:"ball-highlight"}))),c.a.createElement("div",{className:"bottle bottle-1"},c.a.createElement("div",{className:"bowl"},c.a.createElement("div",{className:"bowl-in"},c.a.createElement("div",{className:"liquid"},c.a.createElement("div",{className:"bottle-bubble"}),c.a.createElement("div",{className:"bottle-bubble"}),c.a.createElement("div",{className:"bottle-bubble"}),c.a.createElement("div",{className:"bottle-bubble"}),c.a.createElement("div",{className:"bottle-bubble"})),c.a.createElement("div",{className:"bottle-reflection"}))),c.a.createElement("div",{className:"bottle-neck"}),c.a.createElement("div",{className:"bottle-top"})),c.a.createElement("div",{className:"drippings"},c.a.createElement("div",{className:"drip"})),c.a.createElement("div",{className:"bottle bottle-3"},c.a.createElement("div",{className:"bowl"},c.a.createElement("div",{className:"bowl-in"},c.a.createElement("div",{className:"liquid"}))),c.a.createElement("div",{className:"bottle-neck"}),c.a.createElement("div",{className:"bottle-top"})))),c.a.createElement("div",{className:"shelf-two"},c.a.createElement("div",{className:"shelf shadow"},c.a.createElement("div",{className:"shelf-hooks"}),c.a.createElement("div",{className:"base"}),c.a.createElement("div",{className:"skull"},c.a.createElement("div",{className:"head"}),c.a.createElement("div",{className:"teeth"})),c.a.createElement("div",{className:"candles",title:"Need it urgently?"},c.a.createElement("div",null,c.a.createElement("span",{className:"toolTip"},"Need it urgently? Click here")),c.a.createElement("div",{className:"candle"},c.a.createElement("div",{className:"candle-wax"}),c.a.createElement("div",{className:"flame"},c.a.createElement("div",{className:"flame-in"}))),c.a.createElement("div",{className:"candle"},c.a.createElement("div",{className:"candle-wax"}),c.a.createElement("div",{className:"flame"},c.a.createElement("div",{className:"flame-in"}))))),c.a.createElement("div",{className:"shelf"},c.a.createElement("div",{className:"shelf-hooks"}),c.a.createElement("div",{className:"base"}),c.a.createElement("div",{className:"skull"},c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"skull-stain"}),c.a.createElement("div",{className:"eye"}),c.a.createElement("div",{className:"eye"}),c.a.createElement("div",{className:"nose"})),c.a.createElement("div",{className:"teeth"},c.a.createElement("div",{className:"tooth"}),c.a.createElement("div",{className:"tooth"}),c.a.createElement("div",{className:"tooth"}))),c.a.createElement("div",{className:"candles"},c.a.createElement("div",{className:"candle"},c.a.createElement("div",{className:"candle-wax"},c.a.createElement("div",{className:"wax-reflection"}),c.a.createElement("div",{className:"wax-reflection-top"})),c.a.createElement("div",{className:"candle-reflection"}),c.a.createElement("div",{className:"flame"},c.a.createElement("div",{className:"flame-in"}))),c.a.createElement("div",{className:"candle"},c.a.createElement("div",{className:"candle-wax"},c.a.createElement("div",{className:"wax-reflection"}),c.a.createElement("div",{className:"wax-reflection-top"})),c.a.createElement("div",{className:"candle-reflection"}),c.a.createElement("div",{className:"flame"},c.a.createElement("div",{className:"flame-in"})))))),c.a.createElement("div",{className:"shelf-three"},c.a.createElement("div",{className:"shelf shadow"},c.a.createElement("div",{className:"shelf-hooks"}),c.a.createElement("div",{className:"base"}),c.a.createElement("div",{className:"spider-group"},c.a.createElement("div",{className:"thread"}),c.a.createElement("div",{className:"spider"},c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}))),c.a.createElement("div",{className:"books"},c.a.createElement("div",{className:"book"}),c.a.createElement("div",{className:"book"}),c.a.createElement("div",{className:"book"}),c.a.createElement("div",{className:"book-up"})),c.a.createElement("div",{className:"candy-bowl"},c.a.createElement("div",{className:"candy-bowl-top"}))),c.a.createElement("div",{className:"shelf"},c.a.createElement("div",{className:"shelf-hooks"}),c.a.createElement("div",{className:"base"}),c.a.createElement("div",{className:"spider-group"},c.a.createElement("div",{className:"thread"}),c.a.createElement("div",{className:"spider"},c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}),c.a.createElement("div",{className:"spider-leg"}))),c.a.createElement("div",{className:"books"},c.a.createElement("div",{className:"book"},c.a.createElement("div",{className:"details"})),c.a.createElement("div",{className:"book"},c.a.createElement("div",{className:"details"})),c.a.createElement("div",{className:"book"},c.a.createElement("div",{className:"details"})),c.a.createElement("div",{className:"book-up"},c.a.createElement("div",{className:"details"}))),c.a.createElement("div",{className:"candy-bowl"},c.a.createElement("div",{className:"candy-bowl-top"}),c.a.createElement("div",{className:"candy-bowl-in"},c.a.createElement("div",{className:"candy-1"}),c.a.createElement("div",{className:"candy-1"}),c.a.createElement("div",{className:"candy-1"}),c.a.createElement("div",{className:"candy-1"}),c.a.createElement("div",{className:"candy-2"},c.a.createElement("div",{className:"candy-reflection"})),c.a.createElement("div",{className:"candy-2"},c.a.createElement("div",{className:"candy-reflection"})),c.a.createElement("div",{className:"candy-2"},c.a.createElement("div",{className:"candy-reflection"})),c.a.createElement("div",{className:"candy-2"},c.a.createElement("div",{className:"candy-reflection"})),c.a.createElement("div",{className:"candy-3"}),c.a.createElement("div",{className:"candy-3"}),c.a.createElement("div",{className:"candy-3"}),c.a.createElement("div",{className:"candy-3"}),c.a.createElement("div",{className:"candy-4"},c.a.createElement("div",{className:"candy-reflection"})),c.a.createElement("div",{className:"candy-4"},c.a.createElement("div",{className:"candy-reflection"})),c.a.createElement("div",{className:"candy-4"},c.a.createElement("div",{className:"candy-reflection"})),c.a.createElement("div",{className:"candy-4"},c.a.createElement("div",{className:"candy-reflection"}))),c.a.createElement("div",{className:"candy-bowl-reflection"})))),c.a.createElement("div",{className:"witch shadow"},c.a.createElement("div",{className:"middle"}),c.a.createElement("div",{className:"right-arm"},c.a.createElement("div",{className:"bottle bottle-1"},c.a.createElement("div",{className:"bowl"},c.a.createElement("div",{className:"bowl-in"})),c.a.createElement("div",{className:"bottle-neck"}),c.a.createElement("div",{className:"bottle-top"},c.a.createElement("div",{className:"pink-liquid"}))),c.a.createElement("div",{className:"right-hand"})),c.a.createElement("div",{className:"head-group"},c.a.createElement("div",{className:"hair-back"},c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"})),c.a.createElement("div",{className:"witch-head"}),c.a.createElement("div",{className:"hat"},c.a.createElement("div",{className:"hat-top"},c.a.createElement("div",{className:"hat-top-in"})),c.a.createElement("div",{className:"hat-band"}),c.a.createElement("div",{className:"hat-bottom"})))),c.a.createElement("div",{className:"witch"},c.a.createElement("div",{className:"bottom"}),c.a.createElement("div",{className:"middle"}),c.a.createElement("div",{className:"right-arm"},c.a.createElement("div",{className:"bottle bottle-1"},c.a.createElement("div",{className:"bowl"},c.a.createElement("div",{className:"bowl-in"},c.a.createElement("div",{className:"liquid"}),c.a.createElement("div",{className:"bottle-reflection"}))),c.a.createElement("div",{className:"bottle-neck"}),c.a.createElement("div",{className:"bottle-top"},c.a.createElement("div",{className:"pink-liquid"}))),c.a.createElement("div",{className:"right-hand"})),c.a.createElement("div",{className:"head-group"},c.a.createElement("div",{className:"neck"}),c.a.createElement("div",{className:"hair-back"},c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"hair"}),c.a.createElement("div",{className:"witch-ears"},c.a.createElement("div",{className:"witch-ear"}),c.a.createElement("div",{className:"witch-ear"}))),c.a.createElement("div",{className:"witch-head"},c.a.createElement("div",{className:"cheeks"}),c.a.createElement("div",{className:"eyes"}),c.a.createElement("div",{className:"eyes"}),c.a.createElement("div",{className:"mouth"}),c.a.createElement("div",{className:"mouth-hidden"}),c.a.createElement("div",{className:"hair-front"})),c.a.createElement("div",{className:"hat"},c.a.createElement("div",{className:"hat-top"},c.a.createElement("div",{className:"hat-top-in"})),c.a.createElement("div",{className:"hat-band"}),c.a.createElement("div",{className:"hat-stars"},c.a.createElement("div",{className:"hat-star"}),c.a.createElement("div",{className:"hat-star"}),c.a.createElement("div",{className:"hat-star"})),c.a.createElement("div",{className:"hat-band-top"}),c.a.createElement("div",{className:"hat-bottom"})))),c.a.createElement("div",{className:"light"}),c.a.createElement("div",{className:"cauldron shadow"},c.a.createElement("div",{className:"left-arm"}),c.a.createElement("div",{className:"stick-group"},c.a.createElement("div",{className:"stick"}),c.a.createElement("div",{className:"hand"})),c.a.createElement("div",{className:"bubbles"},c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"})),c.a.createElement("div",{className:"cauldron-top"})),c.a.createElement("div",{className:"cauldron"},c.a.createElement("div",{className:"left-arm"}),c.a.createElement("div",{className:"stick-group"},c.a.createElement("div",{className:"stick"}),c.a.createElement("div",{className:"hand"})),c.a.createElement("div",{className:"handle"}),c.a.createElement("div",{className:"bubbles"},c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"}),c.a.createElement("div",{className:"bubble"})),c.a.createElement("div",{className:"cauldron-top"})),c.a.createElement("div",{className:"window-group shadow"},c.a.createElement("div",{className:"window"})),c.a.createElement("div",{className:"window-group"},c.a.createElement("div",{className:"window"},c.a.createElement("div",{className:"window-reflections"}),c.a.createElement("div",{className:"window-reflections"}),c.a.createElement("div",{className:"window-reflections"},"     "),c.a.createElement("div",{className:"window-in"},c.a.createElement("div",{className:"ghost-group"},c.a.createElement("div",{className:"ghost"},c.a.createElement("div",{className:"bottom"},c.a.createElement("div",{className:"bottom-part"}),c.a.createElement("div",{className:"bottom-part"}),c.a.createElement("div",{className:"bottom-part"})),c.a.createElement("div",{className:"eyes"}))),c.a.createElement("div",{className:"moon"},c.a.createElement("div",{className:"craters"})),c.a.createElement("div",{className:"stars"},c.a.createElement("div",{className:"star"}),c.a.createElement("div",{className:"star"}),c.a.createElement("div",{className:"star"}),c.a.createElement("div",{className:"star"}),c.a.createElement("div",{className:"star"})))),c.a.createElement("div",{className:"cat highlight"},c.a.createElement("div",{className:"cat-head"},c.a.createElement("div",{className:"ear"},c.a.createElement("div",{className:"ear-in"})),c.a.createElement("div",{className:"ear"},c.a.createElement("div",{className:"ear-in"}))),c.a.createElement("div",{className:"cat-body"}),c.a.createElement("div",{className:"cat-paw"}),c.a.createElement("div",{className:"cat-neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},"           "))))))))))),c.a.createElement("div",{className:"cat"},c.a.createElement("div",{className:"cat-head"},c.a.createElement("div",{className:"ear"},c.a.createElement("div",{className:"ear-in"})),c.a.createElement("div",{className:"ear"},c.a.createElement("div",{className:"ear-in"}))),c.a.createElement("div",{className:"cat-body"}),c.a.createElement("div",{className:"cat-paw"}),c.a.createElement("div",{className:"cat-neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"},c.a.createElement("div",{className:"neck"})))))))))),c.a.createElement("div",{className:"cat-tail highlight"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail last"}))))))))),c.a.createElement("div",{className:"cat-tail shadow"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail last"}))))))))),c.a.createElement("div",{className:"cat-tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail"},c.a.createElement("div",{className:"tail last"}))))))))))),c.a.createElement("div",{className:"broom shadow"},c.a.createElement("div",{className:"broom-stick"},c.a.createElement("div",{className:"bat"},c.a.createElement("div",{className:"bat-legs"}),c.a.createElement("div",{className:"bat-body"}),c.a.createElement("div",{className:"bat-wing"}),c.a.createElement("div",{className:"bat-wing"}),c.a.createElement("div",{className:"bat-ear"}),c.a.createElement("div",{className:"bat-ear"}))),c.a.createElement("div",{className:"broom-hook"}),c.a.createElement("div",{className:"broom-hook"}),c.a.createElement("div",{className:"broom-hair"},c.a.createElement("div",{className:"broom-hair-top"}),c.a.createElement("div",{className:"broom-hair-bottom"}),c.a.createElement("div",{className:"broom-hair-band"}))),c.a.createElement("div",{className:"broom"},c.a.createElement("div",{className:"broom-stick"},c.a.createElement("div",{className:"broom-stick-shadow"}),c.a.createElement("div",{className:"bat"},c.a.createElement("div",{className:"bat-legs"}),c.a.createElement("div",{className:"bat-body"}),c.a.createElement("div",{className:"bat-wing"}),c.a.createElement("div",{className:"bat-wing"}),c.a.createElement("div",{className:"bat-ear"}),c.a.createElement("div",{className:"bat-ear"}))),c.a.createElement("div",{className:"broom-hook"}),c.a.createElement("div",{className:"broom-hook"}),c.a.createElement("div",{className:"broom-hair"},c.a.createElement("div",{className:"broom-hair-top"}),c.a.createElement("div",{className:"broom-hair-bottom"}),c.a.createElement("div",{className:"broom-lines"}),c.a.createElement("div",{className:"broom-hair-bottom-reflection"}),c.a.createElement("div",{className:"broom-hair-band"}),c.a.createElement("div",{className:"broom-details"}),c.a.createElement("div",{className:"broom-details"}))),c.a.createElement("div",{className:"pumpkins shadow"},c.a.createElement("div",{className:"pumpkin"},c.a.createElement("div",{className:"top"})),c.a.createElement("div",{className:"pumpkin"},c.a.createElement("div",{className:"top"}))),c.a.createElement("div",{className:"pumpkins"},c.a.createElement("div",{className:"pumpkin"},c.a.createElement("div",{className:"top"})),c.a.createElement("div",{className:"pumpkin"},c.a.createElement("div",{className:"top"}))))},x=c.a.lazy(function(){return t.e(1).then(t.bind(null,66))}),M=function(e){var a=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(c.a.Fragment,null)},c.a.createElement(x,null)),a)};var j=function(){function e(){return 0==s?(console.log("witch"),c.a.createElement(T,{condition:a,direction:"right"},c.a.createElement(p,{change:r}))):2==s?(console.log("about"),c.a.createElement(T,{condition:a,direction:"left"},c.a.createElement(g,{slider:r}))):1==s?(console.log("front"),c.a.createElement(T,{condition:a,direction:"up"},c.a.createElement(u,{slider:r}))):3==s?(console.log("house"),c.a.createElement(M,null,c.a.createElement(C,{slider:r,currentSlide:s}))):void 0}var a=!0,t=new c.a.useState(1),l=Object(n.a)(t,2),s=l[0],m=l[1];function r(a){m(a),e()}return console.log(s),e()},z=function(e){e&&e instanceof Function&&t.e(2).then(t.bind(null,67)).then(function(a){var t=a.getCLS,l=a.getFID,c=a.getFCP,s=a.getLCP,m=a.getTTFB;t(e),l(e),c(e),s(e),m(e)})};m.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null))),z()}},[[14,4,3]]]);
//# sourceMappingURL=main.16534f04.chunk.js.map