(this["webpackJsonpsberbank-sticker"]=this["webpackJsonpsberbank-sticker"]||[]).push([[0],{32:function(e,t,n){e.exports=n(43)},37:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(16),c=n.n(r),l=(n(37),n(8)),d=n(3);function i(e){return{type:"LOCALSTORAGE_GET",localTodos:e}}function u(e,t){return function(n){n(function(e,t){return{type:"ADD_TODO_ITEM",todosTitle:e,todosList:t}}(e,t)),n(E())}}function s(e,t){return function(n){n({type:"CHECK_ITEM",id:e,index:t}),n(E())}}function m(e){return function(t){t(function(e){return{type:"REMOVE_TODO_ITEM",id:e}}(e)),t(E())}}function p(e,t,n){return function(o){o(function(e,t,n){return{type:"CHANGE_BY_ID",id:e,title:t,todosList:n}}(e,t,n)),o(E())}}function E(){return{type:"LOCALSTORAGE_SET"}}var f=n(10);function h(e,t){return{type:"SHOW_MODAL",modalType:e,modalProps:t}}var O=Object(d.b)((function(e){return{todosArray:e.todos.todosArray}}),(function(e){return{removeTodoItem:function(t){return e(m(t))},checkItem:function(t,n){return e(s(t,n))},showModal:function(t,n){e(h(t,n))}}}))((function(e){return a.a.createElement("li",{className:"todoItem"},a.a.createElement("div",{className:"todoItem__todoHeader"},a.a.createElement("div",{className:"todoItem__title"},e.title),a.a.createElement("div",{className:"todoItem__buttons"},a.a.createElement(f.b,{className:"todoItem__change",to:"/todo/"+e.id},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),a.a.createElement("div",{className:"todoItem__delete",onClick:function(){return e.showModal("DELETE_POST",e.id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),a.a.createElement("hr",null),e.todosList.map((function(t,n){var o=["todoCheck"];return t.completed&&o.push("completed"),a.a.createElement("div",{key:n,className:o.join(" ")},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){return e.checkItem(e.id,n)}}),a.a.createElement("div",null)),a.a.createElement("span",null,t.name))})))}));function b(e){var t=e.todos;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement(O,Object.assign({key:e.id},e))})))}var v=Object(d.b)((function(e){return{todosArray:e.todos.todosArray,todoTitle:e.todos.todoTitle,modalData:e.modal}}),(function(e){return{localstorageGet:function(t){return e(i(t))},showModal:function(t,n){e(h(t,n))}}}))((function(e){var t=Object(l.a)(e.todosArray);return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"\u0417\u0430\u043c\u0435\u0442\u043a\u0438 \u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a\u0430"),a.a.createElement("button",{className:"button",onClick:function(){return e.showModal("SHOW_CREATE_TODO")}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"),a.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447:"),t.length?a.a.createElement(b,{todos:t.reverse()}):a.a.createElement("div",{className:"zeroTodo"},a.a.createElement("h1",null,"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0435\u0449\u0435 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043c\u0435\u0442\u043a\u0438"),a.a.createElement("button",{className:"button",onClick:function(){return e.showModal("SHOW_CREATE_TODO")}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443")))})),y=n(19),T=n(20),k=n(22),_=n(21),C=n(15);var j=Object(d.b)(null,(function(e){return{removeTodoItem:function(t){return e(m(t))},hideModal:function(){return e({type:"HIDE_MODAL"})}}}))((function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u043c\u0435\u0442\u043a\u0443?"),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"button",onClick:function(){e.removeTodoItem(e.modalProps),e.hideModal()}},"\u0414\u0430"),a.a.createElement("button",{className:"button",onClick:e.hideModal},"\u041d\u0435\u0442")))})),I=n(27);var D=Object(d.b)((function(e){return{todoTitle:e.todos.todoTitle}}),(function(e){return{addTodoItem:function(t,n){e(u(t,n))},hideModal:function(){return e({type:"HIDE_MODAL"})}}}))((function(e){var t=Object(o.useState)([""]),n=Object(I.a)(t,2),r=n[0],c=n[1],d=Object(o.useState)([{name:"",completed:!1}]),i=Object(I.a)(d,2),u=i[0],s=i[1];return a.a.createElement("div",{className:"create-todo"},a.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"),a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"Title",value:r,onChange:function(e){return c(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(e.addTodoItem(r,u),s([]),e.hideModal())}})),u.map((function(e,t){var n=["todoCheck"];return e.completed&&n.push("completed"),a.a.createElement("div",{className:n.join(" "),key:t},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){return function(e,t){u[t].completed=!e,s(Object(l.a)(u))}(e.completed,t)}}),a.a.createElement("div",null)),a.a.createElement("input",{type:"text",placeholder:"Task",onChange:function(e){return function(e,t){u[t].name=e.target.value,s(Object(l.a)(u))}(e,t)},value:e.name}),a.a.createElement("button",{className:"button--delete",onClick:function(e){return function(e){u.splice(e,1),s(Object(l.a)(u))}(e)}},"\xd7"))})),a.a.createElement("button",{className:"button",onClick:function(){s([].concat(Object(l.a)(u),[{name:"",completed:!1}]))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u0435\u043a\u0431\u043e\u043a\u0441"),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"button",onClick:function(){e.addTodoItem(r,u),s([]),e.hideModal()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),a.a.createElement("button",{className:"button",onClick:e.hideModal},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))})),A=n(2);var g=Object(d.b)(null,(function(e){return{changeById:function(t,n,o){e(p(t,n,o))},hideModal:function(){return e({type:"HIDE_MODAL"})}}}))((function(e){var t=Object(A.e)();return a.a.createElement("div",null,a.a.createElement("h2",null,"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u044d\u0442\u0443 \u0437\u0430\u043c\u0435\u0442\u043a\u0443?"),a.a.createElement("div",null),a.a.createElement("button",{onClick:function(){e.changeById(e.modalProps.id,e.modalProps.title,e.modalProps.todosList),e.hideModal(),t.push("/")}},"Yes"),a.a.createElement("button",{onClick:e.hideModal},"Nope"))})),M=function(e){Object(k.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(y.a)(this,n),(e=t.call(this)).handleClick=function(){console.log(!e.props.modal.modalType),e.props.modal.modalType?document.removeEventListener("click",e.handleOutsideClick,!1):document.addEventListener("click",e.handleOutsideClick,!1)},e.renderTypeModal=function(){return"DELETE_POST"===e.props.modal.modalType?a.a.createElement(j,{modalProps:e.props.modal.modalProps}):"SHOW_CREATE_TODO"===e.props.modal.modalType?a.a.createElement(D,null):"CHANGE_TODO"===e.props.modal.modalType?a.a.createElement(g,{modalProps:e.props.modal.modalProps}):void 0},e.handleOutsideClick=function(t){e.node.contains(t.target)||e.handleClick()},e.handleClick=e.handleClick.bind(Object(C.a)(e)),e.handleOutsideClick=e.handleOutsideClick.bind(Object(C.a)(e)),e.state={showModal:!1},e}return Object(T.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.modal.modalType?a.a.createElement("div",{className:"modalBackground",ref:function(t){e.node=t}},a.a.createElement("div",{className:"modal-content"},this.renderTypeModal())):null)}}]),n}(a.a.Component);var N=Object(d.b)((function(e){return{modal:e.modal}}),(function(e){return{hideModal:function(){return e({type:"HIDE_MODAL"})}}}))(M),L=function(e){Object(k.a)(n,e);var t=Object(_.a)(n);function n(e){var o;return Object(y.a)(this,n),(o=t.call(this,e)).addTodoItem=function(){o.setState({arr:[].concat(Object(l.a)(o.state.arr),[{name:"",completed:!1}])})},o.handleChange=function(e,t){var n=o.state.arr;n[t].name=e.target.value,o.setState({arr:n})},o.handleRemove=function(e){o.state.arr.splice(e,1),o.setState({arr:Object(l.a)(o.state.arr)})},o.checkItem=function(e,t){var n=o.state.arr;n[t].completed=!e,o.setState({arr:n})},o.state={todoTitle:"",arr:[]},o}return Object(T.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.todoById(e.props.match.params.id),e.setState({todoTitle:e.props.todoId.title,arr:e.props.todoId.todosList})}))}},{key:"handleChangeTitle",value:function(e){this.setState({todoTitle:e.target.value})}},{key:"handleSave",value:function(){this.props.changeById(this.props.todoId.id,this.state.todoTitle,this.state.arr),this.props.history.push("/")}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement(f.b,{to:"/"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"),a.a.createElement("h1",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"),a.a.createElement("input",{value:this.state.todoTitle,onChange:function(t){return e.handleChangeTitle(t)}}),this.state.arr.map((function(t,n){var o=["todoCheck"];return t.completed&&o.push("completed"),a.a.createElement("div",{className:o.join(" "),key:n},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){return e.checkItem(t.completed,n)}}),a.a.createElement("div",null)),a.a.createElement("input",{type:"text",placeholder:"Task",onChange:function(t){return e.handleChange(t,n)},value:t.name}),a.a.createElement("button",{onClick:function(){return e.handleRemove(n)}},"Remove"))})),a.a.createElement("button",{onClick:this.addTodoItem},"Add checkbox"),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){e.props.showModal("CHANGE_TODO",{id:e.props.todoId.id,title:e.state.todoTitle,todosList:e.state.arr})}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),a.a.createElement(f.b,{to:"/"},a.a.createElement("button",null,"\u041e\u0442\u043c\u0435\u043d\u0430"))),a.a.createElement(N,null))}}]),n}(a.a.Component);var w=Object(d.b)((function(e){return{todoId:e.todos.todo}}),(function(e){return{todoById:function(t){return e({type:"TODO_BY_ID",byId:t})},changeById:function(t,n,o){e(p(t,n,o))},showModal:function(t,n){e(h(t,n))}}}))(L);var S=Object(d.b)((function(e){return{modalData:e.modal}}),(function(e){return{hideModal:function(){return e({type:"HIDE_MODAL"})}}}))((function(e){var t=Object(o.useRef)(null),n=Object(o.useCallback)((function(t){var o={27:function(){t.preventDefault(),e.hideModal(),window.removeEventListener("keyup",n,!1)}};o[t.keyCode]&&o[t.keyCode]()}),[e]),r=Object(o.useCallback)((function(n){t&&(t.current.contains(n.target)||(e.hideModal(),document.removeEventListener("click",r,!1)))}),[e]);Object(o.useEffect)((function(){return window.addEventListener("keyup",n,!1),document.addEventListener("click",r,!1),function(){window.removeEventListener("keyup",n,!1),document.removeEventListener("click",r,!1)}}),[n,r]);return a.a.createElement("div",{className:"modalBackground"},a.a.createElement("div",{className:"modal-content",ref:t},a.a.createElement("button",{type:"button",className:"closeButton",onClick:e.hideModal}),"DELETE_POST"===e.modalData.modalType?a.a.createElement(j,{modalProps:e.modalData.modalProps}):"SHOW_CREATE_TODO"===e.modalData.modalType?a.a.createElement(D,null):"CHANGE_TODO"===e.modalData.modalType?a.a.createElement(g,{modalProps:e.modalData.modalProps}):void 0))}));var P=Object(d.b)((function(e){return{todosArray:e.todos.todosArray,modalData:e.modal}}),(function(e){return{localstorageGet:function(t){return e(i(t))}}}))((function(e){return Object(o.useEffect)((function(){if(null!==window.localStorage.getItem("todoItem")){var t=Array.from(JSON.parse(window.localStorage.getItem("todoItem")));e.localstorageGet(t)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(A.a,{path:"/",exact:!0,component:v}),a.a.createElement(A.a,{path:"/todo/:id",exact:!0,component:w}),e.modalData.modalType?a.a.createElement(S,null):null)})),H=n(11),R=n(7),B={todosArray:[],todo:{}};var G={modalType:null,modalProps:{}};var x=Object(H.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOCALSTORAGE_GET":return Object(R.a)(Object(R.a)({},e),{},{todosArray:t.localTodos});case"TODO_BY_ID":return Object(R.a)(Object(R.a)({},e),{},{todo:e.todosArray.filter((function(e){return e.id===Number(t.byId)}))[0]});case"ADD_TODO_ITEM":return Object(R.a)(Object(R.a)({},e),{},{todosArray:[].concat(Object(l.a)(e.todosArray),[{id:Date.now(),title:t.todosTitle,todosList:t.todosList}])});case"CHECK_ITEM":return Object(R.a)(Object(R.a)({},e),{},{todosArray:e.todosArray.map((function(e){return e.id===t.id&&e.todosList.map((function(e,n){return n===t.index&&(e.completed=!e.completed),e})),e}))});case"REMOVE_TODO_ITEM":return Object(R.a)(Object(R.a)({},e),{},{todosArray:e.todosArray.filter((function(e){return e.id!==t.id}))});case"CHANGE_BY_ID":return console.log(t.todosList),Object(R.a)(Object(R.a)({},e),{},{todosArray:e.todosArray.map((function(e){return e.id===Number(t.id)&&(e.title=t.title,e.todosList=t.todosList),e}))});case"LOCALSTORAGE_SET":return window.localStorage.setItem("todoItem",JSON.stringify(e.todosArray)),e;default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return{modalType:t.modalType,modalProps:t.modalProps};case"HIDE_MODAL":return G;default:return e}}}),W=n(31);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):H.d,J=Object(H.e)(x,Y(Object(H.a)(W.a))),V=a.a.createElement(d.a,{store:J},a.a.createElement(f.a,{basename:"/"},a.a.createElement(P,null)));c.a.render(V,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.35a168a6.chunk.js.map