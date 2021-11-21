(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"contactForm_label__2k45f",input:"contactForm_input__QGXGH",button:"contactForm_button__1Dei5"}},13:function(t,e,n){t.exports={contact:"contact_contact__1qFoW",item:"contact_item__2wCmh",button:"contact_button__3IhiS",name:"contact_name__545j8"}},21:function(t,e,n){t.exports={container:"App_container__1iFof",wrapper:"App_wrapper__2xmvr"}},25:function(t,e,n){t.exports={input:"filter_input__1DzMe"}},57:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),s=n(6),i=n(26),u=n(15),l=n(1),b=n(5),d=n(24),j=Object(d.a)({reducerPath:"contactApi",baseQuery:Object(b.d)({baseUrl:"https://6199033d3fc322001722f610.mockapi.io/api/v1/"}),tagTypes:["Contact"],endpoints:function(t){return{fetchContact:t.query({query:function(){return"/contacts"},providesTags:["Contact"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contact"]}),createContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:{name:t.name,number:t.number}}},invalidatesTags:["Contact"]})}}}),m=j.useFetchContactQuery,h=j.useDeleteContactMutation,p=j.useCreateContactMutation,O=Object(l.a)({reducer:Object(u.a)({},j.reducerPath,j.reducer),middleware:function(t){return[].concat(Object(i.a)(t()),[j.middleware])},devTools:!1});Object(b.e)(O.dispatch);var x=n(10),f=n(11),_=n.n(f),v=n(17),g=n(16),C=n.n(g),y=(n(22),n(2));function T(){var t=p(),e=Object(x.a)(t,2),n=e[0],a=e[1].isLoading,c=m().data;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget.name.value,a=t.currentTarget.number.value,r={name:e,number:a};if(c.some((function(t){return e===t.name})))return v.b.error("This contact is already exist!"),void t.currentTarget.reset();n(r),t.currentTarget.reset()},children:[Object(y.jsxs)("label",{className:_.a.label,children:["Name",Object(y.jsx)("input",{maxLength:"22",className:_.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(y.jsxs)("label",{className:_.a.label,children:["Number",Object(y.jsx)("input",{className:_.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(y.jsxs)("button",{type:"submit",className:_.a.button,disabled:a,children:["Add contact",a&&Object(y.jsx)(C.a,{type:"ThreeDots",color:"#000000",height:12,width:12})]})]})})}var w=n(25),N=n.n(w);function A(t){var e=t.value,n=t.onChange;return Object(y.jsxs)("label",{children:["Find contacts by name",Object(y.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:n})]})}var F=n(20),k=n(13),D=n.n(k);function q(t){var e=t.contacts,n=h(),a=Object(x.a)(n,2),c=a[0],r=a[1].isLoading;return Object(y.jsx)("ul",{className:D.a.contact,children:e.map((function(t){return Object(y.jsxs)("li",Object(F.a)(Object(F.a)({},t),{},{className:D.a.item,children:[Object(y.jsx)("p",{className:D.a.name,children:t.name}),Object(y.jsx)("p",{children:t.number}),Object(y.jsxs)("button",{className:D.a.button,onClick:function(){return c(t.id)},disabled:r,children:["Delete",r&&Object(y.jsx)(C.a,{type:"ThreeDots",color:"#000000",height:12,width:12})]})]}),t.id)}))})}var L=n(21),z=n.n(L);n(56);function M(){var t=Object(a.useState)(""),e=Object(x.a)(t,2),n=e[0],c=e[1],r=m(),o=r.data;r.isFetching;return Object(y.jsxs)("div",{className:z.a.container,children:[Object(y.jsx)("h1",{children:"Phonebook"}),Object(y.jsx)("h3",{children:"Add contacts"}),Object(y.jsx)(T,{}),Object(y.jsx)("h3",{children:"Contacts"}),Object(y.jsx)(A,{value:n,onChange:function(t){c(t.currentTarget.value)}}),Object(y.jsx)("div",{className:z.a.wrapper,children:o&&Object(y.jsx)(q,{contacts:function(){var t=n.toLowerCase();return o.filter((function(e){return e.name.toLowerCase().includes(t)}))}()})}),Object(y.jsx)(v.a,{autoClose:4e3})]})}o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(s.a,{store:O,children:Object(y.jsx)(M,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.dee26183.chunk.js.map