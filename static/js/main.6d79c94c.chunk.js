(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),s=a(20),o=(a(37),a(8)),i=a(2),u=a(17),p=a(11),d=a(12),m=a(14),h=a(13),E=a(7),b=a.n(E),f=a(15),v=function(){var e=Object(f.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://economia.awesomeapi.com.br/json/all",e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),g=(a(43),/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).checkLoginInputs=function(){var t=e.state,a=t.email,n=t.password;a.match(g)&&n.length>=6?e.setState({isLoginBtnDisabled:!1}):e.setState({isLoginBtnDisabled:!0})},e.onInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r),e.checkLoginInputs)},e.handleSubmit=function(t){t.preventDefault();var a=e.state.email;(0,e.props.getUserEmail)(a),e.setState({redirect:!0})},e.state={email:"",password:"",isLoginBtnDisabled:!0,redirect:!1},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.isLoginBtnDisabled;return e.redirect?r.a.createElement(i.a,{to:"/carteira"}):r.a.createElement("form",{onSubmit:this.handleSubmit,className:"login-page__form"},r.a.createElement("h1",{className:"default--title"},"TrybeWallet"),r.a.createElement("input",{"data-testid":"email-input",name:"email",className:"default--input",type:"email",placeholder:"E-mail",value:t,onChange:this.onInputChange}),r.a.createElement("input",{"data-testid":"password-input",name:"password",className:"default--input",type:"password",placeholder:"Senha",value:a,onChange:this.onInputChange}),r.a.createElement("button",{type:"submit",className:"default--button",disabled:n},"Entrar"))}}]),a}(r.a.Component),x=Object(o.b)(null,(function(e){return{getUserEmail:function(t){return e({type:"USER_LOGIN",payload:t})}}}))(y),j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleClick,a=e.valueInput,n=e.descriptionInput,l=e.onInputChange,c=e.currencies,s=e.isDisabled;return r.a.createElement("form",{className:"--menu-aside-form",onSubmit:t},r.a.createElement("label",{className:"default--input-label",htmlFor:"valueInput"},"Valor",r.a.createElement("input",{"data-testid":"value-input",className:"default--input value",id:"valueInput",name:"valueInput",type:"number",value:a,onChange:l})),r.a.createElement("label",{className:"default--input-label currency",htmlFor:"currency"},"Moeda",r.a.createElement("select",{"data-testid":"currency-input",className:"default--select",name:"currency",id:"currency",onChange:l},c.map((function(e){return r.a.createElement("option",{key:e,value:e,"data-testid":e},e)})))),r.a.createElement("label",{className:"default--input-label method",htmlFor:"method"},"M\xe9todo de Pagamento",r.a.createElement("select",{"data-testid":"method-input",className:"default--select",name:"method",id:"method",onChange:l},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{className:"default--input-label tag",htmlFor:"tag"},"Tag",r.a.createElement("select",{"data-testid":"tag-input",className:"default--select",name:"tag",id:"tag",onChange:l},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("label",{className:"default--input-label description",htmlFor:"description"},"Descri\xe7\xe3o",r.a.createElement("input",{"data-testid":"description-input",className:"default--input",id:"description",name:"descriptionInput",type:"text",value:n,onChange:l})),r.a.createElement("button",{type:"submit",className:"default--button button",disabled:s},"Adicionar despesa"))}}]),a}(r.a.Component),w=Object(o.b)((function(e){return{currencies:e.wallet.currencies}}))(j),C=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onEraseBtnClick=function(t){var a=e.props,n=a.updateExpensesProp,r=a.expenses,l=a.updateTotal,c=r.filter((function(e){return e.id!==t})),s=r.find((function(e){return e.id===t}));n(c),l(s)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.expenses;return r.a.createElement("table",{className:"wallet__page--table"},r.a.createElement("thead",{className:"table--header"},r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",{className:"table--body"},t.map((function(t){var a=t.description,n=t.currency,l=t.value,c=t.method,s=t.tag,o=t.exchangeRates,i=t.id,u=o[n],p=u.ask,d=u.name.split("/"),m=l*p;return r.a.createElement("tr",{key:i},r.a.createElement("td",null,a),r.a.createElement("td",null,s),r.a.createElement("td",null,c),r.a.createElement("td",null,(Math.round(100*l)/100).toFixed(2)),r.a.createElement("td",null,d[0]),r.a.createElement("td",null,(Math.round(100*p)/100).toFixed(2)),r.a.createElement("td",null,(Math.round(100*m)/100).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{"data-testid":"delete-btn",type:"button",className:"default--erase-btn",onClick:function(){return e.onEraseBtnClick(i)}},"X")))}))))}}]),a}(r.a.Component),O=Object(o.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{updateExpensesProp:function(t){return e({type:"UPDATE_EXPENSES",payload:t})}}}))(C),N=(a(49),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).fetchCurrencies=Object(f.a)(b.a.mark((function t(){var a,n,r,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.addCurrenciesProp,t.next=3,v();case 3:n=t.sent,r=Object.keys(n),l=r.filter((function(e){return"USDT"!==e})),a(l);case 7:case"end":return t.stop()}}),t)}))),e.checkValueInput=function(){e.state.valueInput>0?e.setState({isExpenseBtnDisabled:!1}):e.setState({isExpenseBtnDisabled:!0})},e.onInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(u.a)({},n,r),e.checkValueInput)},e.generateId=function(e){return e.length},e.calculateTotal=function(t){var a=t.exchangeRates,n=t.currency,r=t.value,l=e.state.expensesTotal,c=r*a[n].ask;e.setState({expensesTotal:l+c})},e.updateTotal=function(t){var a=e.state.expensesTotal,n=t.exchangeRates,r=t.currency,l=a-t.value*n[r].ask;e.setState({expensesTotal:l})},e.handleClick=function(){var t=Object(f.a)(b.a.mark((function t(a){var n,r,l,c,s,o,i,u,p,d,m;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.props,r=n.fetchApiProp,l=n.expenses,c=e.state,s=c.valueInput,o=c.descriptionInput,i=c.currency,u=c.method,p=c.tag,d=e.generateId(l),m={id:d,value:s,description:o,currency:i,method:u,tag:p,exchangeRates:{}},t.next=7,r(m);case 7:e.calculateTotal(m),e.setState({valueInput:"",descriptionInput:""},e.checkValueInput);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={expensesTotal:0,localCurrency:"BRL",valueInput:"",descriptionInput:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",isExpenseBtnDisabled:!0},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchCurrencies()}},{key:"render",value:function(){var e=this.state,t=e.expensesTotal,a=e.localCurrency,n=e.valueInput,l=e.descriptionInput,c=e.isExpenseBtnDisabled,s=this.props.userEmail;return r.a.createElement("div",{className:"wallet__page"},r.a.createElement("header",{className:"wallet__page--header"},r.a.createElement("h1",{className:"__header--title"},"TrybeWallet"),r.a.createElement("section",{className:"__header--section"},r.a.createElement("div",{className:"__header--div"},r.a.createElement("span",{"data-testid":"email-field",className:"--div-span-email"},"User: ".concat(s))),r.a.createElement("div",{className:"__header--div"},r.a.createElement("p",null,"Despesa total: "),r.a.createElement("span",{"data-testid":"total-field",className:"--div-span-total"},"".concat((Math.round(100*t)/100).toFixed(2)))),r.a.createElement("span",{"data-testid":"header-currency-field",className:"--div-span-currency"},a))),r.a.createElement("aside",{className:"wallet__page--menu-aside"},r.a.createElement(w,{handleClick:this.handleClick,onInputChange:this.onInputChange,valueInput:n,descriptionInput:l,isDisabled:c})),r.a.createElement(O,{updateTotal:this.updateTotal}))}}]),a}(r.a.Component)),I=Object(o.b)((function(e){var t=e.user,a=e.wallet;return{userEmail:t.email,currencies:a.currencies,expenses:a.expenses,expensesTotal:a.expensesTotal}}),(function(e){return{fetchApiProp:function(t){return e(function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v();case 3:n=t.sent,e.exchangeRates=n,a({type:"ADD_WALLET_EXPENSES",payload:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},addCurrenciesProp:function(t){return e({type:"FETCH_CURRENCIES",payload:t})}}}))(N);a(50);var k=function(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:x}),r.a.createElement(i.b,{path:"/carteira",component:I}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(10),T=a(29),D=a(30),_=a(9),L={email:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOGIN":return Object(_.a)(Object(_.a)({},e),{},{email:n});default:return e}},A=a(31),B={currencies:[],expenses:[]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_WALLET_EXPENSES":return Object(_.a)(Object(_.a)({},e),{},{expenses:[].concat(Object(A.a)(e.expenses),[n])});case"UPDATE_EXPENSES":return Object(_.a)(Object(_.a)({},e),{},{expenses:n});case"FETCH_CURRENCIES":return Object(_.a)(Object(_.a)({},e),{},{currencies:n});default:return e}},F=Object(S.combineReducers)({user:R,wallet:P}),M=Object(S.createStore)(F,Object(T.composeWithDevTools)(Object(S.applyMiddleware)(D.a)));c.a.render(r.a.createElement(o.a,{store:M},r.a.createElement(s.a,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6d79c94c.chunk.js.map