(this["webpackJsonpyevgeny-bendersky-store"]=this["webpackJsonpyevgeny-bendersky-store"]||[]).push([[0],{41:function(e){e.exports=JSON.parse('{"a":[{"id":1,"amount":100,"name":"Nike Air Max 2090","price":150},{"id":2,"amount":100,"name":"Rio de Janeiro","price":895000},{"id":3,"amount":1000,"name":"The Moon","price":12},{"id":4,"amount":1000,"name":"Stan the Giraffe","price":99999},{"id":5,"amount":1,"name":"State of Florida","price":275000}]}')},54:function(e,t,a){e.exports=a(71)},59:function(e,t,a){},60:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=(a(59),a(60),a(14)),l=a(5),u=a(95),m=a(96),d=a(97),s=a(94),p=a(15),E=a(50),f=a.n(E),b=a(100);var v=function(){var e=Object(p.c)((function(e){return e.cartReducer}));return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"contained",startIcon:r.a.createElement(f.a,null),component:i.b,to:"/cart"},e.length))},N=Object(s.a)((function(e){return{root:{},title:{color:"white"},appBar:{backgroundColor:"#005361"}}}));var y=function(){var e=N();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{position:"static",className:e.appBar},r.a.createElement(m.a,null,r.a.createElement(d.a,{className:e.title,variant:"h6",noWrap:!0,component:i.b,to:"/"},"Kornit Digital Demo Store"),r.a.createElement(v,null))))},O=a(31),g={ADD_INVENTORY:function(e){return{type:"ADD_INVENTORY",payload:e}},ADD_INVENTORY_ITEM:function(e){return{type:"ADD_INVENTORY_ITEM",payload:e}},REMOVE_INVENTORY_ITEM:function(e){return{type:"REMOVE_INVENTORY_ITEM",payload:e}}},T=a(98),I=a(73);var M=function(e){var t=e.product;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{elevation:5,className:"storeCard",component:i.b,to:"/product/".concat(t.id)},r.a.createElement("div",{className:"product-name"}," ",t.name+" "," "),r.a.createElement("div",{className:"product-price"}," ",t.price.toLocaleString()," $ "),r.a.createElement("img",{className:"product-image",alt:"product",src:window.location.origin+"/images/".concat(t.id,".jpg")})))},_=(a(68),a(41));var h=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(p.b)();return Object(n.useEffect)((function(){c(_.a),o(g.ADD_INVENTORY(_.a))}),[o]),r.a.createElement(T.a,null,r.a.createElement("div",{className:"wrapper"},a&&a.map((function(e,t){return r.a.createElement(M,{product:e,key:t})}))))};var R=function(e){var t=e.products.reduce((function(e,t){return e+t.price*t.amount}),0);return r.a.createElement(I.a,{className:"cart-card"},r.a.createElement("div",{className:"total"},"  subtotal:"," "+t.toLocaleString()+" ","$"),r.a.createElement(b.a,{className:"buy-button",color:"primary"},"Buy these items"))},j=a(99),A={ADD_CART_ITEM:function(e){return{type:"ADD_CART_ITEM",payload:e}},REMOVE_CART_ITEM:function(e){return{type:"REMOVE_CART_ITEM",payload:e}},MODIFY_ITEM_AMOUNT:function(e){return{type:"MODIFY_ITEM_AMOUNT",payload:e}}},D=Object(s.a)((function(e){return{amountModifier:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},paper:{position:"absolute",borderRadius:"5px",width:300,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,2,2),top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",outline:"none",justifyContent:"space-between"},button:{margin:"5px",padding:"5px",textAlign:"center"},addItem:{alignItems:"baseline"}}}));var C=function(e){var t=e.product,a=e.inCart,c=D(),o=Object(n.useState)(0),l=Object(O.a)(o,2),u=l[0],m=l[1],d=Object(n.useState)(!1),s=Object(O.a)(d,2),E=s[0],f=s[1],v=Object(p.b)(),N=function(){f(!1)},y=r.a.createElement("div",{className:c.paper},r.a.createElement("div",null,t.name," has been added to cart"),r.a.createElement(b.a,{className:c.button,variant:"contained",color:"primary",component:i.b,to:"/cart"},"View Cart"),r.a.createElement(b.a,{className:c.button,variant:"outlined",color:"primary",component:i.b,to:"/"},"Continue Shoping")),g=r.a.createElement("div",{className:c.paper},r.a.createElement("div",{className:c.addItem},"Are you sure you want to remove ",t.name," from cart?"),r.a.createElement(b.a,{onClick:N,className:c.button,variant:"contained",color:"primary"},"Cancel"),r.a.createElement(b.a,{className:c.button,variant:"outlined",color:"primary",onClick:function(){v(A.REMOVE_CART_ITEM({id:t.id,name:t.name,price:t.price,amount:u})),f(!1)}},"Remove Item"));return r.a.createElement("div",null,r.a.createElement(j.a,{open:E,onClose:N,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},a?g:y),r.a.createElement("div",{className:c.amountModifier},r.a.createElement(b.a,{className:c.button,disabled:0===u,onClick:function(){return m((function(e){return e-1}))}},"-"),r.a.createElement("div",null,u," "),r.a.createElement(b.a,{className:c.button,onClick:function(){return m((function(e){return e+1}))}},"+")),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:c.button,onClick:a?function(){f(!0)}:function(){0!==u&&(v(A.ADD_CART_ITEM({id:t.id,name:t.name,price:t.price,amount:u})),f(!0))}},a?"Remove Item":"Add to cart"),a?r.a.createElement(b.a,{className:c.button,variant:"outlined",color:"primary",onClick:function(){0!==u&&v(A.MODIFY_ITEM_AMOUNT({id:t.id,name:t.name,price:t.price,amount:u}))}},u>0?"Modify Amount of items to "+u:"Modify Amount"):null))};var w=function(e){var t=e.product,a=e.inCart;return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(I.a,{className:"product-card",elevation:5},r.a.createElement("div",{className:"product-name"}," ",t.name+" "," "),r.a.createElement("div",{className:"product-price"}," ",a?t.amount+" items in cart, "+t.price.toLocaleString()+" each":t.price.toLocaleString()," $ "),r.a.createElement("div",{className:"product-decription"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),r.a.createElement(C,{className:"product-amount",product:t,inCart:a}),r.a.createElement("img",{className:"product-card-image",alt:"product",src:window.location.origin+"/images/".concat(t.id,".jpg")}))))};a(69);var k=function(){var e=Object(p.c)((function(e){return e.cartReducer}));return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement("h2",{className:"cart-title"},"Cart"),r.a.createElement(R,{className:"cart-card",products:e}),e&&e.map((function(e,t){return r.a.createElement(w,{product:e,key:t,inCart:!0})}))))};a(70);var V=function(){var e=Object(p.c)((function(e){return e.inventoryReducer})),t=Object(l.g)(),a=e.find((function(e){return e.id==t.pathname.split("/")[t.pathname.split("/").length-1]}));return r.a.createElement("div",null,a?r.a.createElement(w,{product:a}):r.a.createElement(l.a,{to:"/"}))};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(y,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(l.b,{exact:!0,path:"/cart"},r.a.createElement(k,null)),r.a.createElement(l.b,{path:"/product/:id"},r.a.createElement(V,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(24),x=a(21),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INVENTORY":return Object(x.a)(t.payload);case"ADD_INVENTORY_ITEM":return[].concat(Object(x.a)(e),[t.payload]);case"REMOVE_INVENTORY_ITEM":return Object(x.a)(e.filter((function(e){return e.id!==t.payload.id})));default:return e}},B=a(42),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CART_ITEM":return e.find((function(e){return e.id===t.payload.id}))?Object(x.a)(e.map((function(e){return e.id===t.payload.id?Object(B.a)(Object(B.a)({},e),{},{amount:e.amount+t.payload.amount}):e}))):[].concat(Object(x.a)(e),[t.payload]);case"REMOVE_CART_ITEM":return Object(x.a)(e.filter((function(e){return e.id!==t.payload.id})));case"MODIFY_ITEM_AMOUNT":return Object(x.a)(e.map((function(e){return e.id===t.payload.id?t.payload:e})));default:return e}},J=Object(Y.b)({inventoryReducer:F,cartReducer:L}),U=Object(Y.c)(J);o.a.render(r.a.createElement(p.a,{store:U},r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.bb081ffe.chunk.js.map