(this.webpackJsonpvitamins=this.webpackJsonpvitamins||[]).push([[0],{23:function(t,e,n){t.exports=n(34)},28:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=(n(28),n(13)),u=n(5),l=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(c.b,{to:"/task-2"},"Task 2"),r.a.createElement(c.b,{to:"/task-3"},"Task 3"))},s=n(7),p=n(8),h=n(10),f=n(9),m=n(11),v=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(h.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(o)))).state={figures:[]},n.generatePolygon=function(t,e){var n=[],a=2*Math.PI/t,o="white";"G"===e&&(o="lightgrey"),"B"===e&&(o="black");for(var i=0;i<t;i++){var c=100+50*Math.cos(i*a+0*Math.PI),u=100+50*Math.sin(i*a+0*Math.PI);n.push("".concat(c," ").concat(u))}var l=n.join(" ");return r.a.createElement("svg",{width:200,height:200,fill:o,stroke:"#111",strokeWidth:"1",key:t},r.a.createElement("polygon",{points:l}))},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.input.split(" ").map((function(t){return{name:t.split("")[0],color:t.split("")[1],prevColor:""}}));this.setState({figures:t})}},{key:"componentDidUpdate",value:function(t){if(t.input!==this.props.input){var e=this.props.input.split(" ").map((function(t){return{name:t.split("")[0],color:t.split("")[1],prevColor:""}}));this.setState({figures:e})}}},{key:"render",value:function(){var t=this,e=this.state.figures;return r.a.createElement("div",null,e.map((function(e){return t.generatePolygon(e.name,e.color)})))}}]),e}(a.Component),g=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={inputValue:"3B 4B 5G 6W"},n.handleChange=function(t){var e=t.target;n.setState({inputValue:e.value})},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.state.inputValue;return r.a.createElement("div",{className:"second-task"},r.a.createElement("h2",null,"Task 2"),r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,placeholder:"state"}),r.a.createElement(v,{input:t}))}}]),e}(a.Component),b=n(22);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var O=function(t,e,n){return n.map((function(n){return n.name===t.name&&(n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(b.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n,{prevColor:n.color,color:e})),n}))},y=function t(e,n,a,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];return n===e?i.push([n,a,o]):(t(e,n+1,a,o,r,i),i.push([n,a,o]),t(e,n+1,r,a,o,i)),i},j=function(t){var e=t.split(" ").map((function(t){return{name:t.split("")[0],color:t.split("")[1]}})),n=e[0].color,a=e.length+2,r=["W","G","B"].filter((function(t){return n&&"W"!==t}));return void 0!==e[e.length-1].color?y(a,3,n,r,"W"):[]},k=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={inputValue:"3B 4B 5B 6B",currentState:"",order:[],i:0},n.handleChange=function(t){var e=t.target;n.setState({inputValue:e.value})},n.stopTimer=function(){clearInterval(n.timer)},n.changeState=function(t){n.setState((function(e){return{currentState:t,i:e.i+1}}))},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=j(this.state.inputValue),n=function(t,e){var n=function(t){return t.split(" ").map((function(t){return{name:t.split("")[0],color:t.split("")[1],prevColor:""}}))}(t),a=[t];return e.map((function(t){return O(n[t[0]-3],t[2],n)})).forEach((function(t){var e=t.map((function(t){return"".concat(t.name).concat(t.color)}));a.push(e.join(" "))})),a}(this.state.inputValue,e);this.setState({order:n}),this.timer=setInterval((function(){t.changeState(n[t.state.i])}),1e3)}},{key:"componentDidUpdate",value:function(){this.state.i>=this.state.order.length&&this.stopTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return r.a.createElement("div",{className:"third-task"},r.a.createElement("h2",null,"Task 3"),r.a.createElement(v,{input:this.state.currentState}))}}]),e}(a.Component),E=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(l,null),r.a.createElement(u.a,{path:"/task-2",component:g}),r.a.createElement(u.a,{path:"/task-3",component:k})))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.413c8773.chunk.js.map