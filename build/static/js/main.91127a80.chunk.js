(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{16:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(14),u=n(15),h=(n(26),n(3)),d=n(4),m=n(7),E=n(6),b=(n(27),function(e){var t=e.id,n=e.name,r=e.email;e.imgUrl;return a.a.createElement("div",{id:t,className:"card ",style:{width:"15rem"}},a.a.createElement("img",{src:"https://robohash.org/"+t,className:"card-img-top",alt:""}),a.a.createElement("div",{className:"card-body"},a.a.createElement("h5",{className:"card-title"},n),a.a.createElement("p",{className:"card-text"},r)))}),p=(n(28),function(e){var t=e.robots;return a.a.createElement("div",{className:"robotsContainer"},t.map((function(e,n){return a.a.createElement(b,{key:n,id:t[n].id,name:t[n].name,email:t[n].email,imgUrl:t[n].imgUrl})})))}),f=(n(29),function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"input_container"},a.a.createElement("input",{className:"form-control",type:"search",placeholder:"search robots",onChange:t}))}),g=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},v=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooooops, Something goes wrong"):this.props.children}}]),n}(r.Component),O=(n(30),function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=(e.error,r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"text-center"},"RoboFriends"),a.a.createElement(f,{searchChange:n}),a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement(p,{robots:c}))))}}]),n}(r.Component)),y=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}(e)}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);var R={searchField:""},S={isPending:!1,robots:[],error:""},j=Object(l.createLogger)(),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(C,Object(i.a)(u.a,j));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:_},a.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.91127a80.chunk.js.map