_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{TVId:function(e,a,t){"use strict";var o=t("qVTj"),n=t("C+eC"),c=t("Owyq"),i=t("eWCh"),s=t("17x9"),l=t.n(s),r=t("q1tI"),m=t.n(r),u=t("9a1i"),p=n.a.stablePrefix,d=u.a.prefix,g=function(e){var a=e.heading,t=e.logosGroup,n=e.ctaCopy,s=e.ctaHref,l=e.hideBorder,r=null;return s&&(r={style:"card",type:"local",heading:n,cta:{href:s}}),m.a.createElement("section",{"data-autoid":"".concat(p,"--logo-grid"),className:"".concat(d,"--logo-grid")},m.a.createElement("div",{className:"".concat(d,"--logo-grid__container")},m.a.createElement("div",{className:"".concat(d,"--logo-grid__wrapper")},m.a.createElement(o.a,{heading:a,cta:r},m.a.createElement("div",{className:"".concat(d,"--logo-grid__row")},t.map((function(e,a){return m.a.createElement("div",{className:"".concat(d,"--logo-grid__col"),key:a},m.a.createElement("div",{className:"".concat(d,"--logo-grid__logo"),key:e.label},m.a.createElement(i.a,{defaultSrc:e.imgSrc,classname:"".concat(d,"--logo-grid_img"),alt:e.altText,longDescription:e.label})))})))))),!l&&m.a.createElement(c.a,null))};g.propTypes={heading:l.a.string,logosGroup:l.a.arrayOf(l.a.shape({label:l.a.string,imgSrc:l.a.string,altText:l.a.string})).isRequired,ctaCopy:l.a.string,ctaHref:l.a.string,hideBorder:l.a.bool},a.a=g},URu4:function(e,a,t){"use strict";t.r(a);var o=t("nKUr"),n=t("9GtX"),c=t("pVnL"),i=t.n(c),s=t("qVTj"),l=t("vtTq"),r=t("C+eC"),m=t("Owyq"),u=t("/J8l"),p=t("oHr6"),d=t("17x9"),g=t.n(d),h=t("q1tI"),y=t.n(h),b=t("9a1i"),f=t("vQcT"),x=r.a.stablePrefix,_=b.a.prefix,q=function(e){var a=e.title,t=e.heading,o=e.copy,n=e.mediaType,c=e.mediaData,r=e.items,d=e.cta,g=y.a.createElement("div",null,a&&y.a.createElement("h1",{"data-autoid":"".concat(x,"--leadspace-block__title"),className:"".concat(_,"--leadspace-block__title")},a));return y.a.createElement("div",{"data-autoid":"".concat(x,"--leadspace-block"),className:"".concat(_,"--leadspace-block")},g,y.a.createElement(s.a,{heading:t,copy:o},function(e,a){if(a)return y.a.createElement("div",{"data-autoid":"".concat(x,"--leadspace-block__media"),className:"".concat(_,"--leadspace-block__media")},"image"===e&&y.a.createElement(u.a,a),"video"===e&&y.a.createElement(f.a,a))}(n,c),y.a.createElement(p.a,{style:"vertical-end",heading:r.heading,items:r.items}),y.a.createElement(l.a,i()({customClassName:"".concat(_,"--leadspace-block__cta ").concat(_,"--leadspace-block__cta-col")},d))),y.a.createElement(m.a,null))};q.propTypes={title:g.a.string.isRequired,heading:g.a.string.isRequired,items:g.a.shape({heading:g.a.string.isRequired,items:g.a.arrayOf(g.a.shape({style:g.a.oneOf(["text","card","button","feature"]),type:g.a.oneOfType([g.a.oneOf(["jump","local","external","download","video"]),g.a.arrayOf(g.a.oneOf(["jump","local","external","download","video"]))]),copy:g.a.string,href:g.a.string,customClassName:g.a.string})).isRequired}).isRequired,copy:g.a.string,mediaType:g.a.oneOf(["image","video"]),mediaData:g.a.oneOfType([g.a.shape({inverse:g.a.bool,image:g.a.shape({classname:g.a.string,sources:g.a.arrayOf(g.a.shape({src:g.a.string,breakpoint:g.a.oneOfType([g.a.string,g.a.number])})),defaultSrc:g.a.string.isRequired,alt:g.a.string.isRequired,longDescription:g.a.string}).isRequired,lightbox:g.a.bool,heading:g.a.string,copy:g.a.string,customClassName:g.a.string}),g.a.shape({customClassName:g.a.string,videoId:g.a.string.isRequired,showCaption:g.a.bool,inverse:g.a.bool})]),cta:g.a.shape({style:g.a.oneOf(["text","card","button","feature"]),type:g.a.oneOfType([g.a.oneOf(["jump","local","external","download","video"]),g.a.arrayOf(g.a.oneOf(["jump","local","external","download","video"]))]),copy:g.a.string,href:g.a.string,customClassName:g.a.string})},q.defaultProps={copy:"",mediaType:null,mediaData:null,cta:null};var v=q,E=t("dakj"),j=t("vJbN"),O=t("9PG6"),k=t("+EOV"),w=t("Qp7z"),C=r.a.stablePrefix,N=b.a.prefix,T=function(e){var a=e.heading,t=e.items;return y.a.createElement("div",{"data-autoid":"".concat(C,"--content-group-horizontal"),className:"".concat(N,"--content-group-horizontal")},y.a.createElement(s.a,{heading:a,border:!0},t.map((function(e,a){return y.a.createElement(k.a,{eyebrow:e.eyebrow,heading:e.heading,copy:e.copy,cta:e.cta,key:a})}))))};T.propTypes={heading:g.a.string.isRequired,items:g.a.arrayOf(g.a.shape({eyebrow:g.a.string,heading:g.a.string.isRequired,copy:g.a.string.isRequired,cta:g.a.shape({heading:g.a.string,items:g.a.arrayOf(g.a.shape({type:g.a.oneOfType([g.a.oneOf(["local","external"]),g.a.arrayOf(g.a.oneOf(["local","external"]))]),copy:g.a.string,href:g.a.string,customClassName:g.a.string})).isRequired,iconPlacement:g.a.oneOf(["left","right"])})})).isRequired};var S=Object(w.a)(T,"\n  The ContentGroupHorizontal component has been deprecated in favor of the ContentBlockHorizontal component.\n  See ContentBlockHorizontal documentation for more information.\n"),I=t("TVId"),R=t("4kvx"),H=t("grDW"),D=t("aGeS"),A={sources:[{src:"images/320/fpo--16x9--320x180--003.jpg",breakpoint:320},{src:"images/480/fpo--16x9--480x270--003.jpg",breakpoint:400},{src:"images/720/fpo--16x9--720x405--003.jpg",breakpoint:672}],alt:"Image alt text",defaultSrc:"images/720/fpo--16x9--720x405--003.jpg"};a.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(n.a,{theme:"white",menuLabel:"Jump to",stickyOffset:48,children:[Object(o.jsx)("a",{name:"section-1","data-title":"Lead Space Block"}),Object(o.jsx)(v,{title:"Lead Space Block",copy:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",heading:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",mediaType:"video",mediaData:{videoId:"0_uka1msg4",showDescription:!0},items:{heading:"Featured products",items:[{type:"local",copy:"IBM Cloud Continuous Delivery",cta:{href:"https://ibm.com"}},{type:"local",copy:"UrbanCode",cta:{href:"https://ibm.com"}},{type:"local",copy:"View all products",cta:{href:"https://ibm.com"}}]},cta:{style:"button",type:"local",buttons:[{type:"local",copy:"Excepteur sint occaecat",href:"https://example.com/"}]}}),Object(o.jsx)("a",{name:"section-2","data-title":"Content Block Segmented"}),Object(o.jsx)(E.a,{heading:"Content Block Segmented",items:[{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",cta:{type:"local",copy:"Lorem Ipsum dolor sit",href:"https://example.com"}},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames."},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",cta:{type:"local",copy:"Lorem Ipsum dolor sit",href:"https://example.com"}},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames."}]}),Object(o.jsxs)(j.a,{nested:!0,type:"2-1",border:!0,children:[Object(o.jsx)("a",{name:"section-3","data-title":"Content Block Segmented (2)"}),Object(o.jsx)(E.a,{heading:"Content Block Segmented (2)",items:[{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",image:{heading:"Mauris iaculis eget dolor nec hendrerit.",image:A},cta:{type:"local",copy:"Lorem Ipsum dolor sit",href:"https://example.com"}},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",image:{heading:"Mauris iaculis eget dolor nec hendrerit.",image:A}}],cta:{style:"card",disableImage:!0,type:"video",media:{src:"1_sf5ovm7u",type:"video"}},mediaType:"image"})]}),Object(o.jsx)(O.a,{mediaData:{videoId:"1_9h94wo6b",showCaption:!0},mediaType:"video",heading:"Callout With Media",copy:"Porttitor eget dolor morbi non arcu. Et ligula ullamcorper malesuada proin libero nunc consequat. In est ante in nibh mauris cursus mattis. Turpis tincidunt id aliquet risus feugiat in. Vel facilisis volutpat est velit egestas dui."}),Object(o.jsx)("a",{name:"section-4","data-title":"Content Group Horizontal"}),Object(o.jsx)(S,{heading:"Content Group Horizontal",items:[{eyebrow:"Lorem ipsum",heading:"Aliquam condimentum",copy:"Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",cta:{items:[{type:"local",copy:"Link text",href:"https://example.com"},{type:"external",copy:"External link text",href:"https://example.com"}]}},{eyebrow:"Lorem ipsum",heading:"Aliquam condimentum",copy:"Lorem ipsum dolor sit amet, _consectetur_ adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.",cta:{items:[{type:"local",copy:"Link text",href:"https://example.com"},{type:"external",copy:"External link text",href:"https://example.com"}]}}]}),Object(o.jsx)("a",{name:"section-5","data-title":"Logo Grid"}),Object(o.jsx)(I.a,{heading:"Logo Grid",logosGroup:[{title:"Microsoft",imgSrc:"images/logos/logo-microsoft.png",altText:"Image alt text",href:"http://example.com/"},{title:"Dell",imgSrc:"images/logos/logo-dell.png",altText:"Image alt text",href:"http://example.com/"},{title:"Rabobank",imgSrc:"images/logos/logo-rabobank.png",altText:"Image alt text",href:"http://example.com/"},{title:"Adobe",imgSrc:"images/logos/logo-adobe.png",altText:"Image alt text",href:"http://example.com/"},{title:"US Bank",imgSrc:"images/logos/logo-usbank.png",altText:"Image alt text",href:"http://example.com/"},{title:"Cisco",imgSrc:"images/logos/logo-cisco.png",altText:"Image alt text",href:"http://example.com/"}],ctaCopy:"Amet justo donec",ctaHref:"https://www.example.com"}),Object(o.jsx)("a",{name:"section-6","data-title":"Content Block Cards"}),Object(o.jsx)(R.a,{heading:"Content Block Cards",cards:[{image:{defaultSrc:"images/1312/fpo--1x1--1312x1312--001.jpg",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--4x3--1312x984--002.jpg",alt:"Image alt text"},eyebrow:"Blog",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--2x1--1312x656--003.jpg",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}}]}),Object(o.jsx)("a",{name:"section-7","data-title":"Callout Quote"}),Object(o.jsx)(H.a,{quote:{copy:"Callout Quote: Duis aute irure dolor in reprehenderit",source:{heading:"Lorem ipsum",copy:"dolor sit amet"},cta:{copy:"Link with Icon",type:"local",href:"https://example.com"}}})]}),Object(o.jsx)("div",{className:"bx--grid",children:Object(o.jsx)("div",{className:"bx--row",children:Object(o.jsx)("div",{className:"bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4",children:Object(o.jsx)(D.a,{theme:"white",cta:{style:"button",type:"local",buttons:[{type:"local",copy:"Contact sales",href:"https://example.com/"}]},items:[{heading:"Get connected",copy:"IBM DevOps partners have a wide range of expertise.\n                Find one to build the right solution for you.",cta:{copy:"Find a partner",type:"local",href:"https://example.com/"}},{heading:"Learn how",copy:"Dig into more self-directed learning about DevOps methodologies.",cta:{copy:"Browse tutorials",type:"local",href:"https://example.com/"}}],heading:"CTA Section",copy:"Want to discuss your options with a DevOps expert? Contact our sales team to evaluate your needs."})})})})]})}},grDW:function(e,a,t){"use strict";var o=t("Hke9"),n=t("C+eC"),c=t("17x9"),i=t.n(c),s=t("lSNA"),l=t.n(s),r=t("J4zp"),m=t.n(r),u=t("q1tI"),p=t.n(u),d=t("tZdU"),g=t("TSYQ"),h=t.n(g);var y=function(e){var a=document.createElement("div");return a.innerHTML=e,a.textContent},b=t("Owyq"),f=t("ngl/"),x=t("qHd8"),_=t("9a1i"),q=n.a.stablePrefix,v=_.a.prefix,E=function(e){var a=e.markType,t=void 0===a?"doubleCurved":a,o=e.copy,n=e.source,c=e.cta,i=e.inverse,s=Object(u.useState)(""),r=m()(s,2),g=r[0],_=r[1];Object(u.useEffect)((function(){_(y(o))}),[o]);return p.a.createElement("div",{"data-autoid":"".concat(q,"--quote"),className:h()("".concat(v,"--quote"),l()({},"".concat(v,"--quote__inverse"),i))},p.a.createElement("div",{className:"".concat(v,"--quote__container")},p.a.createElement("div",{className:"".concat(v,"--quote__wrapper"),"data-autoid":"".concat(q,"--quote__copy")},function(){switch(t){case"doubleCurved":return p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{className:"".concat(v,"--quote__mark")},"\u201c"),p.a.createElement("blockquote",{className:"".concat(v,"--quote__copy")},g,"\u201d"));case"singleCurved":return p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{className:"".concat(v,"--quote__mark")},"\u2018"),p.a.createElement("blockquote",{className:"".concat(v,"--quote__copy")},g,"\u2019"));case"doubleAngle":return p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{className:"".concat(v,"--quote__mark")},"\xab"),p.a.createElement("blockquote",{className:"".concat(v,"--quote__copy")},g,"\xbb"));case"singleAngle":return p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{className:"".concat(v,"--quote__mark")},"\u2039"),p.a.createElement("blockquote",{className:"".concat(v,"--quote__copy")},g,"\u203a"));case"lowHighReversedDoubleCurved":return p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{className:"".concat(v,"--quote__mark")},"\u201e"),p.a.createElement("blockquote",{className:"".concat(v,"--quote__copy")},g,"\u201c"));case"cornerBracket":return p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{className:"".concat(v,"--quote__mark ").concat(v,"--quote__mark-corner-bracket")},"\u300c"),p.a.createElement("blockquote",{className:"".concat(v,"--quote__copy")},g,"\u300d"))}}()),!!(n&&n.heading&&n.copy)&&p.a.createElement("div",{className:"".concat(v,"--quote__source"),"data-autoid":"".concat(q,"--quote__source")},p.a.createElement("p",{className:"".concat(v,"--quote__source-heading")},n.heading),p.a.createElement("p",{className:"".concat(v,"--quote__source-body")},n.copy),n.copy2&&p.a.createElement("p",{className:"".concat(v,"--quote__source-optional-copy")},n.copy2))),!!c&&p.a.createElement("div",{className:"".concat(v,"--quote__footer")},p.a.createElement(b.a,null),p.a.createElement(x.a,{href:c.href},p.a.createElement("span",null,c.copy),"local"===c.type&&p.a.createElement(d.a,null),"external"===c.type&&p.a.createElement(f.a,null))))};E.propTypes={markType:i.a.oneOf(["doubleCurved","singleCurved","doubleAngle","singleAngle","lowHighReversedDoubleCurved","cornerBracket"]),copy:i.a.string.isRequired,source:i.a.shape({heading:i.a.string.isRequired,copy:i.a.string.isRequired,copy2:i.a.string}),cta:i.a.shape({copy:i.a.string,type:i.a.oneOf(["local","external"]),href:i.a.string}),inverse:i.a.bool};var j=E,O=n.a.stablePrefix,k=_.a.prefix,w=function(e){var a=e.quote;return p.a.createElement("div",{className:"".concat(k,"--callout-quote"),"data-autoid":"".concat(O,"--callout-quote")},p.a.createElement(o.a,null,p.a.createElement(j,a)))};w.propTypes={quote:i.a.shape({markType:i.a.oneOf(["doubleCurved","singleCurved","doubleAngle","singleAngle","lowHighReversedDoubleCurved"]),copy:i.a.string.isRequired,source:i.a.shape({heading:i.a.string,copy:i.a.string}),cta:i.a.shape({copy:i.a.string,type:i.a.oneOf(["local","external"]),href:i.a.string}),inverse:i.a.bool})};a.a=w},vWyO:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example-page-b",function(){return t("URu4")}])}},[["vWyO",2,4,7,6,0,8,10,11,13,17]]]);