(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{LCod:function(t,e,i){"use strict";i.r(e),i.d(e,"CustomElement",(function(){return w})),i.d(e,"descriptor",(function(){return S})),i.d(e,"propTypes",(function(){return X}));i("2TRz");var a=i("H53n"),o=i("XLRp"),n=i("ReuC"),r=i("foSv"),s=i("CQbg"),c=i("ljsJ"),d=i("6TBq"),u=i("OGQo"),l=i("XfVf"),b=i("gsxF"),p=i("RQ6T"),v=i("CX7s");let f,k=t=>t;const{stablePrefix:O}=c.a;var y=Object(o.a)([Object(s.c)(`${O}-text-cta`)],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[Object(s.h)()],key:"_hasContent",value:()=>!1},{kind:"method",key:"_handleSlotChange",value:function({target:t}){this._hasContent=t.assignedNodes().some((t=>{var e;return t.nodeType!==Node.COMMENT_NODE&&(t.nodeType!==Node.TEXT_NODE||(null===(e=t.nodeValue)||void 0===e?void 0:e.trim()))}))}},{kind:"method",key:"_renderContent",value:function(){const{ctaType:t,_hasContent:e}=this;if(t!==p.a.VIDEO)return Object(n.a)(Object(r.a)(i.prototype),"_renderContent",this).call(this);const{videoDuration:a,videoName:o,formatVideoCaption:c,formatVideoDuration:d}=this,u=e?void 0:c({duration:d({duration:a?1e3*a:a}),name:o});return Object(s.d)(f||(f=k`
      <span><slot @slotchange="${0}"></slot>${0}</span>
    `),this._handleSlotChange,u)}},{kind:"field",decorators:[Object(s.e)({reflect:!0,attribute:"cta-type"})],key:"ctaType",value:()=>p.a.REGULAR},{kind:"field",decorators:[Object(s.e)({attribute:!1})],key:"formatVideoCaption",value:()=>d.a},{kind:"field",decorators:[Object(s.e)({attribute:!1})],key:"formatVideoDuration",value:()=>d.b},{kind:"field",decorators:[Object(s.e)({type:Number,attribute:"video-duration"})],key:"videoDuration",value:void 0},{kind:"field",decorators:[Object(s.e)({attribute:"video-name"})],key:"videoName",value:void 0},{kind:"field",decorators:[Object(s.e)({attribute:"video-description"})],key:"videoDescription",value:void 0},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${O}--text-cta`}},{kind:"field",static:!0,key:"styles",value:()=>v.a}]}}),Object(b.a)(Object(l.a)(u.b))),j=i("iZHX"),m=i("17x9"),h=i.n(m),g=i("9a1i"),C=i("OT8j"),T=(g.a.prefix,C.a.stablePrefix),D=Object.assign({},a.descriptor,{ctaType:{attribute:"cta-type"},formatVideoCaption:{attribute:!1},formatVideoDuration:{attribute:!1},videoDuration:{serialize:j.c,attribute:"video-duration"},videoName:{attribute:"video-name"},videoDescription:{attribute:"video-description"}}),x=Object.assign({},a.propTypes,{ctaType:h.a.string,formatVideoCaption:h.a.string,formatVideoDuration:h.a.string,videoDuration:h.a.number,videoName:h.a.string,videoDescription:h.a.string});const N=Object(j.b)("".concat(T,"-text-cta"),D);N.propTypes=x;var _=i("8tB5");let V,E=t=>t;const{stablePrefix:$}=c.a;var w=Object(o.a)([Object(s.c)(`${$}-link-list-item-cta`)],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"method",key:"connectedCallback",value:function(){this.hasAttribute("role")||this.setAttribute("role","listitem"),Object(n.a)(Object(r.a)(i.prototype),"connectedCallback",this).call(this)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${$}--link-list-item-cta`}},{kind:"get",static:!0,key:"styles",value:function(){return Object(s.b)(V||(V=E`${0}${0}`),Object(n.a)(Object(r.a)(i),"styles",this),_.a)}}]}}),y),R=(g.a.prefix,C.a.stablePrefix),S=Object.assign({},D,{}),X=Object.assign({},x,{});const P=Object(j.b)("".concat(R,"-link-list-item-cta"),S);P.propTypes=X;e.default=P}}]);