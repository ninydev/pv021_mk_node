"use strict";(self["webpackChunkfrontvue3"]=self["webpackChunkfrontvue3"]||[]).push([[824],{4969:function(t,o,n){n.r(o),n.d(o,{default:function(){return k}});var e=n(3396);const r=(0,e._)("h1",null,"My Portfolio",-1);function i(t,o,n,i,l,u){const s=(0,e.up)("PortfolioList");return(0,e.wg)(),(0,e.iD)(e.HY,null,[r,(0,e.Wm)(s)],64)}const l=(0,e._)("h1",null," Все портфолио ",-1);function u(t,o,n,r,i,u){const s=(0,e.up)("PortfolioItem");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("ul",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.items,(t=>((0,e.wg)(),(0,e.j4)(s,{key:t.id,item:t},null,8,["item"])))),128))])],64)}var s=n(7139);function c(t,o,n,r,i,l){return(0,e.wg)(),(0,e.iD)("p",null,(0,s.zw)(n.item.name),1)}var f={name:"PortfolioItem",props:{item:{}}},m=n(89);const a=(0,m.Z)(f,[["render",c]]);var p=a,v=n(65),w={name:"PortfolioList",components:{PortfolioItem:p},setup(){const t=(0,v.oR)();return t.dispatch("apiGetPortfolioItems"),{items:(0,e.Fl)((()=>t.getters.portfolioItem))}}};const P=(0,m.Z)(w,[["render",u]]);var d=P,g={components:{PortfolioList:d}};const h=(0,m.Z)(g,[["render",i]]);var k=h}}]);
//# sourceMappingURL=portfolio.f99bce9f.js.map