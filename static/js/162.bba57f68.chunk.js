"use strict";(self.webpackChunksale_product=self.webpackChunksale_product||[]).push([[162],{7273:function(e,t,n){n.d(t,{h:function(){return o}});var s=n(3504),i=n(8880),r=n(184),c=function(){var e=(0,i.D3)(),t=e.loginWithRedirect,n=e.isAuthenticated;return(0,r.jsx)(r.Fragment,{children:!n&&(0,r.jsx)("button",{onClick:function(){return t()},children:"Log In"})})},l=function(){var e=(0,i.D3)(),t=e.logout,n=e.isAuthenticated;return(0,r.jsx)(r.Fragment,{children:n&&(0,r.jsx)("button",{className:"bg-red-500 text-white px-4 py-2",onClick:function(){return t({returnTo:window.location.origin})},children:"Log Out"})})},a=function(){var e=(0,i.D3)(),t=e.user,n=e.isAuthenticated;return e.isLoading?(0,r.jsx)("div",{children:"Loading!"}):(0,r.jsx)("div",{children:n?(0,r.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,r.jsx)(s.rU,{to:"/userProfile",children:(0,r.jsx)("img",{className:"w-12",src:null===t||void 0===t?void 0:t.picture})}),(0,r.jsx)("h2",{children:null===t||void 0===t?void 0:t.nickname})]}):null})},d=n(1904),o=(n(2791),function(e){var t=(0,i.D3)().isAuthenticated;return(0,r.jsxs)("div",{className:"flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md sticky top-0",children:[(0,r.jsx)(s.rU,{to:"/",children:(0,r.jsx)("h1",{className:"text-lg md:text-2xl font-semibold",children:"E-Commerce App"})}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)(c,{}),(0,r.jsx)(l,{}),(0,r.jsx)(a,{}),t&&(0,r.jsx)(s.rU,{to:"/cart",children:(0,r.jsxs)("div",{className:"cart relative",children:[(0,r.jsx)("span",{className:"bg-sky-300 px-2 py-1 py rounded-full text-xs absolute left-5 -top-2",children:e.value}),(0,r.jsx)("img",{className:"w-8",src:d})]})})]})]})})},9162:function(e,t,n){n.r(t),n.d(t,{AddToCartPresentation:function(){return a}});var s=n(885),i=n(2791),r=n(7273),c=n(3845),l=n(184),a=function(e){var t=(0,i.useState)(),n=(0,s.Z)(t,2),a=n[0],d=n[1],o=(0,i.useState)(),u=(0,s.Z)(o,2),x=u[0],h=u[1];(0,i.useEffect)((function(){(0,c.Sk)().then((function(e){d(e.data),h(e.data.length)}))}),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h,{value:x}),(0,l.jsxs)("div",{className:"px-10 py-5 w-full h-full bg-gray-100 flex-grow overflow-y-auto",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"Your cart"}),a&&a.map((function(e,t){return(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row items-center gap-8 justify-between p-3 md:p-0 mt-6 bg-white rounded-lg overflow-hidden",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between md:justify-start gap-8 w-full",children:[(0,l.jsx)("figure",{className:"w-24 h-full",children:(0,l.jsx)("img",{src:e.image})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:e.title}),(0,l.jsxs)("p",{className:"pt-6",children:["$",e.price]})]})]}),(0,l.jsx)("button",{onClick:function(){return t=e.id,(0,c.Cf)(t).then((function(e){alert("Deleted Cart")})),void(0,c.Sk)().then((function(e){d(e.data),h(e.data.length)}));var t},className:"bg-red-500 px-3 py-1 text-white rounded mx-6",children:"Remove"})]},t)}))]})]})}},1904:function(e,t,n){e.exports=n.p+"static/media/shopping-cart.eca5ee08f37494f3f691.png"}}]);
//# sourceMappingURL=162.bba57f68.chunk.js.map