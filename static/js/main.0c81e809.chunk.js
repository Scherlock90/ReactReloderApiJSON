(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=(a(66),a(25)),s=a(26),i=a(29),d=a(27),m=a(30),u=a(59),v=a.n(u),p=(a(86),a(37)),h=a.n(p),E=a(28),b=a.n(E),g={color:"blue"},f=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"grey-text text-darken-4"},c.a.createElement("div",{className:"card-title card-title-title center heading headingText2"},c.a.createElement("span",{className:"headingText"},e.title))),c.a.createElement("div",{className:"grey-text text-darken-3 strechLine notesMain",style:g},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.notes}})),c.a.createElement("div",{className:"row center"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("span",{className:"d-md-block1 bolderInfo"}," Data modyfikacji: "),c.a.createElement("span",{className:"d-md-block"}," ",e.modified," ")),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement("span",{className:"d-md-block1 bolderInfo"}," Data utworzenia: "),c.a.createElement("span",{className:"d-md-block"}," ",e.created," "))),c.a.createElement("div",{className:"center"},c.a.createElement("span",{className:"d-md-block1 bolderInfo"},"Odwiedzaj\u0105cych:"),c.a.createElement("span",{className:"d-md-block"},e.views_count)),c.a.createElement("div",{className:"center"},e.author),c.a.createElement("div",{className:"grey-text text-darken-3 strechLine"},c.a.createElement("span",{className:"bolderInfo"},"S\u0142owa kluczowe:"),c.a.createElement("span",null," "+e.tags)))},y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={dataGov:[],subDataGov:[],linksDataGov:[]},a.handleMove=function(e){var t=document.querySelector(".pointer");h()(t).css({left:e.pageX,top:e.pageY,color:"#fff"})},a.showLoupe=function(e){e.preventDefault();var t=document.querySelector(".pointer");h()(t).css({opacity:1,left:e.pageX,top:e.pageY})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.dane.gov.pl/articles?page=1&per_page=5&sort=-created").then(function(t){console.log(t),e.setState({dataGov:t.data.data,subDataGov:t.data.meta,linksDataGov:t.data.links})})}},{key:"render",value:function(){var e=this.state.dataGov,t=this.state,a=(t.subDataGov,t.linksDataGov,e.length?e.map(function(e,t){return c.a.createElement("div",{className:"post card backgroundCard",key:e.id},c.a.createElement("div",{className:"card-content"},c.a.createElement(f,{tags:e.attributes.tags,title:e.attributes.title.replace(/( \S) /g,"$1\xa0"),notes:e.attributes.notes.replace(/<\/?[^>]+(>|$)/g,"").slice(0,220).replace(/( \S) /g,"$1\xa0")+"...",modified:e.attributes.modified.slice(0,10).replace(/-/g,".")+", "+e.attributes.modified.slice(11,16),created:e.attributes.created.slice(0,10).replace(/-/g,".")+", "+e.attributes.created.slice(11,16),views_count:e.attributes.views_count,author:e.attributes.author})))}):c.a.createElement("div",{className:"center"},"No data yet! "));return c.a.createElement("div",{className:"containerLoader"},c.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.showLoupe},"Show Loupe"),c.a.createElement("div",{className:"pointer",onMouseMove:this.handleMove,onMouseOut:this.handleMove}),c.a.createElement("div",{className:"card z-depth-0 project-summary thumb"},c.a.createElement("div",{className:"card-content grey-text text-darken-3 containerPost"},a),c.a.createElement("div",null,c.a.createElement("strong",null,"Elementy meta i links:"),c.a.createElement("div",{className:"countStyle"},"Count: ",this.state.subDataGov.count),c.a.createElement("div",null,"Path: ",this.state.subDataGov.path))))}}]),t}(c.a.Component),k={textAlign:"center",color:"#1a237e !important",padding:"2em 0 2em 0",width:"auto"};function N(){return c.a.createElement("div",{style:k},c.a.createElement(b.a,{variant:"contained",color:"primary",href:"http://senjs.eu/"},"Designed SeN"))}var w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{backgroundColor:"#bdbdbd"}},c.a.createElement("div",{style:{fontSize:"180%",padding:"2em",textAlign:"center",fontWeight:"bold",color:"#424242"}},"JSON API LOADER ",c.a.createElement("br",null)," WITH BLACK&WHITE EFFECTS"),c.a.createElement(y,null),c.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a(169)},66:function(e,t,a){},86:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.0c81e809.chunk.js.map