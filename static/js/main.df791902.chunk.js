(this["webpackJsonpgoit-react-hw-09-feedback"]=this["webpackJsonpgoit-react-hw-09-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(6),i=a.n(s),r=a(3),l=a(2),o=a.n(l),j=a(0),b=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(j.jsxs)("div",{className:o.a.statistic,children:[Object(j.jsxs)("p",{className:o.a.item,children:["good: ",Object(j.jsx)("span",{className:o.a.value,children:t})]}),Object(j.jsxs)("p",{className:o.a.item,children:["neutral: ",Object(j.jsx)("span",{className:o.a.value,children:a})]}),Object(j.jsxs)("p",{className:o.a.item,children:["bad: ",Object(j.jsx)("span",{className:o.a.value,children:c})]}),Object(j.jsxs)("p",{className:o.a.item,children:["total: ",Object(j.jsx)("span",{className:o.a.value,children:n})]}),Object(j.jsxs)("p",{className:o.a.item,children:["Positive Feedback:",Object(j.jsx)("span",{className:o.a.value,style:{color:s>=50?"green":"red"},children:s}),"%"]})]})},u=a(7),d=a.n(u),O=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:t.map((function(e,t){return Object(j.jsx)("button",{className:d.a.btn,type:"text",onClick:a,children:e},t)}))})},h=a(5),p=a.n(h),x=function(e){var t=e.title,a=e.children;return Object(j.jsxs)("section",{className:p.a.container,children:[Object(j.jsx)("h2",{className:p.a.title,children:t}),a]})},m=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})};function v(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),l=i[0],o=i[1],u=Object(c.useState)(0),d=Object(r.a)(u,2),h=d[0],p=d[1],v=function(){return Object.values({good:a,neutral:l,bad:h}).reduce((function(e,t){return e+t}),0)},f=v(),g=function(){var e=Math.ceil(a/v()*100);return e||0}(),N=Object.keys({good:a,neutral:l,bad:h});return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{title:"Please leave feedback",children:Object(j.jsx)(O,{options:N,onLeaveFeedback:function(e){switch(e.target.textContent){case"good":n((function(e){return e+1}));break;case"neutral":o((function(e){return e+1}));break;case"bad":p((function(e){return e+1}));break;default:console.log("hello")}}})}),Object(j.jsx)(x,{title:"Statistics",children:0===f?Object(j.jsx)(m,{message:"No feedback given"}):Object(j.jsx)(b,{good:a,neutral:l,bad:h,total:f,positivePercentage:g})})]})}i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={item:"Statistics_item__1vE2T",value:"Statistics_value__2eXJD"}},5:function(e,t,a){e.exports={container:"Section_container__37ABw",title:"Section_title__2S6oE"}},7:function(e,t,a){e.exports={btn:"FeedbackOptions_btn__1rp9P"}}},[[13,1,2]]]);
//# sourceMappingURL=main.df791902.chunk.js.map