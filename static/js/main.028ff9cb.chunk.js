(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),s=(a(23),a(2)),o=a(3),i=a(5),d=a(4),m=a(6),u=a(15),v=a.n(u),p=(a(43),a(16)),b=a.n(p),h={color:"blue"},E=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"grey-text text-darken-4"},c.a.createElement("div",{className:"card-title card-title-title center heading headingText2"},c.a.createElement("span",{className:"headingText"},e.title))),c.a.createElement("div",{className:"grey-text text-darken-3 strechLine notesMain",style:h},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.notes}})),c.a.createElement("div",{className:"row center"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("span",{className:"d-md-block1 bolderInfo"}," Data modyfikacji: "),c.a.createElement("span",{className:"d-md-block"}," ",e.modified," ")),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement("span",{className:"d-md-block1 bolderInfo"}," Data utworzenia: "),c.a.createElement("span",{className:"d-md-block"}," ",e.created," "))),c.a.createElement("div",{className:"center"},c.a.createElement("span",{className:"d-md-block1 bolderInfo"},"Odwiedzaj\u0105cych:"),c.a.createElement("span",{className:"d-md-block"},e.views_count)),c.a.createElement("div",{className:"center"},e.author),c.a.createElement("div",{className:"grey-text text-darken-3 strechLine"},c.a.createElement("span",{className:"bolderInfo"},"S\u0142owa kluczowe:"),c.a.createElement("span",null," "+e.tags)))},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={dataGov:[],subDataGov:[],linksDataGov:[]},a.handleMove=function(e){var t=document.querySelector(".pointer");b()(t).css({left:e.pageX,top:e.pageY})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.dane.gov.pl/articles?page=1&per_page=5&sort=-created").then(function(t){console.log(t),e.setState({dataGov:t.data.data,subDataGov:t.data.meta,linksDataGov:t.data.links})})}},{key:"render",value:function(){var e=this.state.dataGov,t=this.state,a=t.subDataGov,n=t.linksDataGov,l=e.length?e.map(function(e,t){return c.a.createElement("div",{className:"post card backgroundCard",key:e.id},c.a.createElement("div",{className:"card-content"},c.a.createElement(E,{tags:e.attributes.tags,title:e.attributes.title.replace(/( \S) /g,"$1\xa0"),notes:e.attributes.notes.replace(/<\/?[^>]+(>|$)/g,"").slice(0,220).replace(/( \S) /g,"$1\xa0")+"...",modified:e.attributes.modified.slice(0,10).replace(/-/g,".")+", "+e.attributes.modified.slice(11,16),created:e.attributes.created.slice(0,10).replace(/-/g,".")+", "+e.attributes.created.slice(11,16),views_count:e.attributes.views_count,author:e.attributes.author}),c.a.createElement("div",null,e.relationships.datasets.links.related.href)))}):c.a.createElement("div",{className:"center"},"No data yet! ");return console.log(l),console.log(a),console.log(n),c.a.createElement("div",null,c.a.createElement("div",{className:"pointer",onMouseMove:this.handleMove}),c.a.createElement("div",{className:"card z-depth-0 project-summary thumb"},c.a.createElement("div",{className:"card-content grey-text text-darken-3 containerPost"},l),c.a.createElement("div",null,c.a.createElement("strong",null,"Elementy meta i links:"),c.a.createElement("div",null,"Count: ",this.state.subDataGov.count),c.a.createElement("div",null,"Path: ",this.state.subDataGov.path))))}}]),t}(c.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{backgroundColor:"#bdbdbd"}},c.a.createElement("div",{style:{fontSize:"40px",padding:"2em",textAlign:"center",fontWeight:"bold",color:"#424242"}},"JSON API LOADER"),c.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.028ff9cb.chunk.js.map