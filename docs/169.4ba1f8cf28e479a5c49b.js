(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{o5AU:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),i=function(){return function(){}}(),u=l("pMnS"),o=l("ra/t"),c=l("ntG5"),s=l("M9A9"),r=l("ZYCi"),a=l("tXrQ"),b=l("Ip0R"),p=l("G5J1"),h=l("mrSG"),f=l("Ehmk"),d=l("eihs"),m=l("MGBS"),v=l("zotm"),g=function(){function n(n,t,l){this.project=n,this.concurrent=t,this.scheduler=l}return n.prototype.call=function(n,t){return t.subscribe(new w(n,this.project,this.concurrent,this.scheduler))},n}(),w=function(n){function t(t,l,e,i){var u=n.call(this,t)||this;return u.project=l,u.concurrent=e,u.scheduler=i,u.index=0,u.active=0,u.hasCompleted=!1,e<Number.POSITIVE_INFINITY&&(u.buffer=[]),u}return h.c(t,n),t.dispatch=function(n){n.subscriber.subscribeToProjection(n.result,n.value,n.index)},t.prototype._next=function(n){var l=this.destination;if(l.closed)this._complete();else{var e=this.index++;if(this.active<this.concurrent){l.next(n);var i=Object(f.a)(this.project)(n,e);i===d.a?l.error(d.a.e):this.scheduler?this.destination.add(this.scheduler.schedule(t.dispatch,0,{subscriber:this,result:i,value:n,index:e})):this.subscribeToProjection(i,n,e)}else this.buffer.push(n)}},t.prototype.subscribeToProjection=function(n,t,l){this.active++,this.destination.add(Object(v.a)(this,n,t,l))},t.prototype._complete=function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(n,t,l,e,i){this._next(t)},t.prototype.notifyComplete=function(n){var t=this.buffer;this.destination.remove(n),this.active--,t&&t.length>0&&this._next(t.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()},t}(m.a),I=l("t/Na"),k=function(){function n(n){this.httpSvc=n}return n.prototype.getPlanets=function(){var n,t,l,e=this;return console.log("getPlanets() called"),this.getPage("https://swapi.co/api/planets").pipe((n=function(n,t){return n.next?e.getPage(n.next):Object(p.b)()},void 0===t&&(t=Number.POSITIVE_INFINITY),void 0===l&&(l=void 0),t=(t||0)<1?Number.POSITIVE_INFINITY:t,function(e){return e.lift(new g(n,t,l))}))},n.prototype.getPage=function(n){return this.httpSvc.get(n)},n.ngInjectableDef=e.S({factory:function(){return new n(e.W(I.c))},token:n,providedIn:"root"}),n}(),j=l("HNpX"),x=function(){function n(n,t){this.planetSvc=n,this.appStateSvc=t,this.icons=["flask","wifi","beer","football","basketball","paper-plane","american-football","boat","bluetooth","build"],this.items=[]}return n.prototype.ngOnInit=function(){var n=this;this.planetSvc.getPlanets().subscribe(function(t){console.log("got my data"),console.log(t),n.items=n.items.concat(t.results.map(function(n){return{title:n.name,note:n.gravity,icon:"planet"}})),n.items.sort(function(n,t){return n.title.toLowerCase()>t.title.toLowerCase()?1:-1})})},n}(),y=e.nb({encapsulation:0,styles:[[""]],data:{}});function S(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,7,"ion-item",[],null,[[null,"click"]],function(n,t,l){var i=!0;return"click"===t&&(i=!1!==e.yb(n,2).onClick(l)&&i),i},o.I,o.m)),e.ob(1,49152,null,0,c.C,[e.h,e.k],null,null),e.ob(2,16384,null,0,s.a,[[2,r.m],a.a,e.k],null,null),(n()(),e.pb(3,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,o.F,o.j)),e.ob(4,49152,null,0,c.x,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.Cb(5,0,[" "," "])),(n()(),e.pb(6,0,null,0,1,"div",[["class","item-note"],["slot","end"]],null,null,null,null,null)),(n()(),e.Cb(7,null,[" "," "]))],function(n,t){n(t,4,0,t.context.$implicit.icon)},function(n,t){n(t,5,0,t.context.$implicit.title),n(t,7,0,t.context.$implicit.note)})}function C(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,o.E,o.i)),e.ob(1,49152,null,0,c.w,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.R,o.u)),e.ob(3,49152,null,0,c.vb,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.x,o.b)),e.ob(5,49152,null,0,c.g,[],null,null),(n()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.M,o.r)),e.ob(7,49152,null,0,c.M,[e.h,e.k],null,null),(n()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,o.Q,o.v)),e.ob(9,49152,null,0,c.wb,[e.h,e.k],null,null),(n()(),e.Cb(10,0,[" "," "])),(n()(),e.pb(11,0,null,null,5,"ion-content",[],null,null,null,o.D,o.h)),e.ob(12,49152,null,0,c.p,[e.h,e.k],null,null),(n()(),e.pb(13,0,null,0,3,"ion-list",[],null,null,null,o.L,o.o)),e.ob(14,49152,null,0,c.J,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,S)),e.ob(16,278528,null,0,b.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,16,0,t.component.items)},function(n,t){n(t,10,0,t.component.appStateSvc.title)})}function N(n){return e.Db(0,[(n()(),e.pb(0,0,null,null,1,"app-list",[],null,null,null,C,y)),e.ob(1,114688,null,0,x,[k,j.a],null,null)],function(n,t){n(t,1,0)},null)}var P=e.lb("app-list",x,N,{},{},[]),O=l("gIcY"),T=l("95zI"),_=l("9opb"),F=l("apKv"),M=l("B4/3");l.d(t,"ListPageModuleNgFactory",function(){return D});var D=e.mb(i,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[u.a,P]],[3,e.j],e.x]),e.wb(4608,b.j,b.i,[e.u,[2,b.p]]),e.wb(4608,O.g,O.g,[]),e.wb(4608,T.a,T.a,[e.z,e.g]),e.wb(4608,_.a,_.a,[T.a,e.j,e.q]),e.wb(4608,F.a,F.a,[T.a,e.j,e.q]),e.wb(1073742336,b.b,b.b,[]),e.wb(1073742336,O.f,O.f,[]),e.wb(1073742336,O.a,O.a,[]),e.wb(1073742336,M.a,M.a,[]),e.wb(1073742336,r.o,r.o,[[2,r.u],[2,r.m]]),e.wb(1073742336,i,i,[]),e.wb(1024,r.k,function(){return[[{path:"",component:x}]]},[])])})}}]);