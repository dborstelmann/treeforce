webpackJsonp([1],{0:function(t,e){},"0GLn":function(t,e,n){"use strict";e.a={name:"contact-modal",props:["contact","contactSearch"]}},"0aNp":function(t,e){},"431H":function(t,e){},"7qMK":function(t,e,n){"use strict";function a(t){n("aCya")}var c=n("YsAA"),r=n("ApmC"),o=n("VU/8"),s=a,i=o(c.a,r.a,!1,s,"data-v-0d6d4394",null);e.a=i.exports},"8kKL":function(t,e,n){"use strict";function a(t){n("yUmq")}var c=n("dUXA"),r=n("ofwx"),o=n("VU/8"),s=a,i=o(c.a,r.a,!1,s,null,null);e.a=i.exports},"91lF":function(t,e,n){"use strict";var a=n("NYxO");e.a={name:"contact-filters",computed:Object(a.b)(["contactSearch"]),methods:{searchContacts:function(t){this.$store.dispatch("search",{searchKey:"contactSearch",searchString:t.target.value})}}}},"9XKw":function(t,e,n){"use strict";var a=n("Za4h"),c=(n.n(a),n("rdLu")),r=n.n(c);e.a=function(t,e,n){function c(t,e,n){if(t){e(t);var a=n(t);if(a)for(var r=a.length,o=0;o<r;o++)c(a[o],e,n)}}function o(){Y.sort(function(t,e){return e.name.toLowerCase()<t.name.toLowerCase()?1:-1})}function s(t,e){var n=T;if(I){clearTimeout(I);var c=a.transform(W.attr("transform")),r=null,o=null;"left"===e||"right"===e?(r="left"===e?c.translate[0]+n:c.translate[0]-n,o=c.translate[1]):"up"!==e&&"down"!==e||(r=c.translate[0],o="up"===e?c.translate[1]+n:c.translate[1]-n);var i=R.scale();W.transition().attr("transform","translate("+r+","+o+")scale("+i+")"),a.select(t).select("g.node").attr("transform","translate("+r+","+o+")"),R.scale(R.scale()),R.translate([r,o]),I=setTimeout(function(){s(t,n,e)},50)}}function i(){W.attr("transform","translate("+a.event.translate+")scale("+a.event.scale+")")}function l(t,e){L=t,a.select(e).select(".ghostCircle").attr("pointer-events","none"),a.selectAll(".ghostCircle").attr("class","ghostCircle show"),a.select(e).attr("class","node activeDrag"),W.selectAll("g.node").sort(function(t,e){return t.id!==L.id?1:-1}),v.length>1&&(w=Y.links(v),b=W.selectAll("path.link").data(w,function(t){return t.target.id}).remove(),M=W.selectAll("g.node").data(v,function(t){return t.id}).filter(function(t,e){return t.id!==L.id}).remove()),_=Y.links(Y.nodes(L.parent)),W.selectAll("path.link").filter(function(t,e){return t.target.id===L.id}).remove(),$=null}function u(){S=null,a.selectAll(".ghostCircle").attr("class","ghostCircle"),a.select(C).attr("class","node"),a.select(C).select(".ghostCircle").attr("pointer-events",""),D(),null!==L&&(p(m),L=null)}function d(t){t._children&&(t.children=t._children,t.children.forEach(d),t._children=null)}function h(t){return t.children?(t._children=t.children,t.children=null):t._children&&(t.children=t._children,t._children=null),t}function f(t){a.event.defaultPrevented||(t=h(t),p(t))}function p(t){function n(t,e,a){return void 0===n.e&&(n.e=document.createElement("span"),n.e.style.visibility="hidden",document.body.appendChild(n.e)),n.e.style.fontSize=a,n.e.style.fontFamily=e,n.e.innerText=t,n.e.offsetWidth}var c=[1];!function t(e,n){n.children&&n.children.length>0&&(c.length<=e+1&&c.push(0),c[e+1]+=n.children.length,n.children.forEach(function(n){t(e+1,n)}))}(0,m);var o=35*a.max(c);Y=Y.size([o,U]);var s=Y.nodes(m).reverse(),i=Y.links(s),l={};!function(){r.a.each(s,function(t){var e=r.a.where(s,{depth:t.depth}),a=0;r.a.each(e,function(t){a=Math.max(n(t.name,"sans-serif","11px"),a)}),l[t.depth]=a})}();var u=[0];r.a.each(r.a.keys(l),function(t,e){u.push(r.a.reduce(r.a.values(l).splice(0,e),function(t,e){return t+e},0)+l[t])}),s.forEach(function(t){t.y=u[t.depth]+25*t.depth});var d=W.selectAll("g.node").data(s,function(t){return t.id||(t.id=++F)}),h=d.enter().append("g").call(j).attr("class","node").attr("transform",function(e){return"translate("+t.x0+","+t.y0+")"}).on("click",f);h.append("circle").attr("class","nodeCircle").attr("r",0).style("fill",function(t){return t._children?"#6190e8":"#fff"}).on("mouseover",function(t){var n=this.getBoundingClientRect(),a=document.createElement("div");a.className="tooltip",a.style.left=n.x-100+"px",a.style.bottom=window.innerHeight-n.y+6+"px",a.innerHTML='\n                    <div class="pop-title pop-name">'+t.contact.name+'</div>\n                    <div class="pop-title">'+(t.contact.titleOverride||t.contact.title)+'</div>\n                    <div class="pop-title">'+t.contact.email+'</div>\n                    <div class="pop-title">'+t.contact.phone+'</div>\n                    <div class="pop-title">'+t.contact.mobilephone+"</div>\n                ",e.appendChild(a)}).on("mouseout",function(){a.select(e).select("div.tooltip").remove()}),h.append("text").attr("x",10).attr("dy",function(t){return t.children||t._children?"-0.3em":".3em"}).attr("transform","rotate(90)").attr("class","nodeText").text(function(t){return t.name}).style("fill-opacity",0),h.append("circle").attr("class","ghostCircle").attr("r",25).attr("opacity",.2).style("fill","#13CE66").attr("pointer-events","mouseover").on("mouseover",function(t){B(t)}).on("mouseout",function(t){P(t)}),d.select("text").attr("x",10).text(function(t){return t.name}),d.select("circle.nodeCircle").attr("r",7).style("fill",function(t){return t._children?"#6190e8":"#fff"}).style("stroke",function(t){return t.children||t._children?"#6190e8":"#ccc"}),d.transition().duration(E).attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).select("text").style("fill-opacity",1);var p=d.exit().transition().duration(E).attr("transform",function(e){return"translate("+t.x+","+t.y+")"}).remove();p.select("circle").attr("r",0),p.select("text").style("fill-opacity",0);var v=W.selectAll("path.link").data(i,function(t){return t.target.id});v.enter().insert("path","g").attr("class","link").attr("d",function(e){var n={x:t.x0,y:t.y0};return K({source:n,target:n})}),v.transition().duration(E).attr("d",K),v.exit().transition().duration(E).attr("d",function(e){var n={x:t.x,y:t.y};return K({source:n,target:n})}).remove(),s.forEach(function(t){t.x0=t.x,t.y0=t.y})}var m,v=null,C=null,g=null,y=null,x=null,w=null,_=null,b=null,M=null,k=null,$=null,I=null,A=0,O=0,S=null,L=null,T=200,F=0,E=750,N=e.getBoundingClientRect(),U=N.width,q=N.height,Y=a.layout.tree().size([q,U]),K=a.svg.diagonal().projection(function(t){return[t.x,t.y]});c(t,function(t){A++,O=Math.max(t.name.length,O)},function(t){return t.children&&t.children.length>0?t.children:null}),o();var R=a.behavior.zoom().scaleExtent([.1,10]).on("zoom",i);e.innerHTML=null;var z=a.select(e).append("svg").attr("width",U).attr("height",q).attr("class","overlay").call(R),j=a.behavior.drag().on("dragstart",function(t){t!==m&&($=!0,v=Y.nodes(t),a.event.sourceEvent.stopPropagation())}).on("drag",function(t){if(t!==m){if($&&(C=this,l(t,C)),k=a.mouse(document.getElementsByTagName("svg")[0]),k[0]<20)I=!0,s(this,"left");else if(k[0]>N.width-20)I=!0,s(this,"right");else if(k[1]<20)I=!0,s(this,"up");else if(k[1]>N.height-20)I=!0,s(this,"down");else try{clearTimeout(I)}catch(t){}t.x0+=a.event.dx,t.y0+=a.event.dy;a.select(this).attr("transform","translate("+t.x0+","+t.y0+")"),D()}}).on("dragend",function(t){if(t!==m)if(C=this,S){var e=L.parent.children.indexOf(L);e>-1&&L.parent.children.splice(e,1),void 0!==S.children||void 0!==S._children?void 0!==S.children?S.children.push(L):S._children.push(L):(S.children=[],S.children.push(L)),L.contact.parentId=S.contact.id,n(L.contact),d(S),o(),u()}else u()}),B=function(t){S=t,D()},P=function(t){S=null,D()},D=function(){var t=[];null!==L&&null!==S&&(t=[{source:{x:S.x0,y:S.y0},target:{x:L.x0,y:L.y0}}]);var e=W.selectAll(".templink").data(t);e.enter().append("path").attr("class","templink").attr("d",a.svg.diagonal()).attr("pointer-events","none"),e.attr("d",a.svg.diagonal()),e.exit().remove()},W=z.append("g");m=t,m.x0=q/2,m.y0=0,p(m),function(t){x=R.scale(),g=-t.x0,y=-t.y0,g=g*x+U/2,y=y*x+20,a.select("g").transition().duration(E).attr("transform","translate("+g+","+y+")scale("+x+")"),R.scale(x),R.translate([g,y])}(m)}},ApmC:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accounts-wrapper"},[t._m(0),t._v(" "),n("div",{staticClass:"row at-row"},[n("AccountFilters")],1),t._v(" "),n("div",{staticClass:"row at-row"},[n("div",{staticClass:"accounts"},t._l(t.filteredAccounts,function(e){return n("div",{key:e.id,staticClass:"account row at-row"},[n("router-link",{attrs:{to:{name:"account",params:{id:e.sfid}}}},[n("at-button",{attrs:{type:"primary",size:"large",hollow:""}},[t._v(t._s(e.name))])],1)],1)}))])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row at-row top-row"},[a("div",{staticClass:"col-sm-24"},[a("div",{staticClass:"banner"},[a("img",{staticClass:"hierarchy-image",attrs:{src:n("yoyZ")}}),t._v(" "),a("span",{staticClass:"treeforce-title"},[t._v("TreeForce")])])])])}],r={render:a,staticRenderFns:c};e.a=r},BfNg:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-filters"},[n("at-input",{attrs:{value:t.contactSearch,placeholder:"Search contacts...",size:"large"},nativeOn:{keyup:function(e){t.searchContacts(e)}}})],1)},c=[],r={render:a,staticRenderFns:c};e.a=r},Hjxw:function(t,e,n){"use strict";function a(t){n("0aNp")}var c=n("0GLn"),r=n("rIW4"),o=n("VU/8"),s=a,i=o(c.a,r.a,!1,s,"data-v-22346b9b",null);e.a=i.exports},IcnI:function(t,e,n){"use strict";var a=n("mUbh"),c=n("ukYY");e.a={state:{accounts:[],accountSearch:"",contactSearch:""},actions:a.a,mutations:c.a}},KF9i:function(t,e){},LcqU:function(t,e,n){"use strict";var a=n("NYxO");e.a={name:"account-filters",computed:Object(a.b)(["accountSearch"]),methods:{searchAccounts:function(t){this.$store.dispatch("search",{searchKey:"accountSearch",searchString:t.target.value})}}}},M93x:function(t,e,n){"use strict";function a(t){n("431H")}var c=n("xJD8"),r=n("PjOu"),o=n("VU/8"),s=a,i=o(c.a,r.a,!1,s,"data-v-a03cb094",null);e.a=i.exports},MBON:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-filters"},[n("at-input",{attrs:{value:t.accountSearch,placeholder:"Search accounts...",size:"large"},nativeOn:{keyup:function(e){t.searchAccounts(e)}}})],1)},c=[],r={render:a,staticRenderFns:c};e.a=r},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),c=n("ORbq"),r=n("NYxO"),o=n("/ocq"),s=n("yweG"),i=n.n(s),l=n("KF9i"),u=(n.n(l),n("M93x")),d=n("IcnI"),h=n("YaEn");a.default.use(c.a),a.default.use(r.a),a.default.use(o.a),a.default.use(i.a),a.default.config.productionTip=!1;var f=new r.a.Store(d.a),p=new o.a({routes:h.a});new a.default({el:"#app",store:f,router:p,template:"<App/>",components:{App:u.a}})},PjOu:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],r={render:a,staticRenderFns:c};e.a=r},Y8F9:function(t,e){},YaEn:function(t,e,n){"use strict";var a=n("uK6g"),c=n("7qMK");e.a=[{name:"home",path:"/",component:c.a},{name:"account",path:"/account/:id",component:a.a}]},YsAA:function(t,e,n){"use strict";var a=n("NYxO"),c=n("rdLu"),r=n.n(c),o=n("zgGR");e.a={name:"accounts",components:{AccountFilters:o.a},created:function(){this.$store.dispatch("fetchAccounts")},computed:Object(a.b)({filteredAccounts:function(t){return t.accountSearch?r.a.filter(t.accounts,function(e){return e.name.toLowerCase().indexOf(t.accountSearch.toLowerCase())>-1}):t.accounts}}),methods:{}}},aCya:function(t,e){},dUXA:function(t,e,n){"use strict";var a=n("rdLu"),c=n.n(a),r=n("9XKw");e.a={name:"tree-three",props:["contacts"],mounted:function(){this.buildTree()},watch:{contacts:{handler:function(t,e,n){this.buildTree()},deep:!0}},computed:{parentMap:function(){var t=this,e={};return c.a.each(this.contacts,function(n){n.parentId?e[n.parentId]=c.a.findWhere(t.contacts,{id:n.parentId}):n.reportstoid&&(e[n.reportstoid]=c.a.findWhere(t.contacts,{sfid:n.reportstoid}))}),e},root:function(){var t=this,e={};return c.a.each(c.a.keys(this.parentMap),function(n){t.parentMap[n].parentId||t.parentMap[n].reportstoid||(e=t.parentMap[n])}),e},contactsInTree:function(){var t=this;return c.a.filter(this.contacts,function(e){return t.parentMap[e.id||e.sfid]||e.parentId||e.reportstoid})}},methods:{hierarchyContacts:function(t){return{name:t.name,contact:t,children:this.findChildren(t)}},findChildren:function(t){var e=this,n=c.a.where(this.contactsInTree,{parentId:t.id});c.a.each(this.contactsInTree,function(e){t.sfid&&e.reportstoid===t.sfid&&null===e.parentId&&n.push(e)});var a=[];return c.a.each(n,function(t){a.push({name:t.name,contact:t,children:e.findChildren(t)})}),a},buildTree:function(){this.contacts.length&&Object(r.a)(this.hierarchyContacts(this.root),this.$el,this.updateParent)},updateParent:function(t){this.$store.dispatch("editContact",t)}}}},dYQ4:function(t,e,n){"use strict";function a(t){n("Y8F9")}var c=n("91lF"),r=n("BfNg"),o=n("VU/8"),s=a,i=o(c.a,r.a,!1,s,"data-v-17c83f2e",null);e.a=i.exports},lIye:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-wrapper"},[n("div",{staticClass:"row at-row"},[n("div",{staticClass:"banner"},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("at-button",{attrs:{type:"primary",icon:"icon-arrow-left",hollow:""}},[t._v("Back")])],1),t._v(" "),t.account?n("span",{staticClass:"account-name"},[t._v(t._s(t.account.name))]):t._e()],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"row at-row account"},[n("div",{staticClass:"col-xs-24 col-md-6 col-lg-4"},[n("ContactFilters"),t._v(" "),n("div",{staticClass:"contact-list"},t._l(t.filteredContacts,function(e){return n("div",{key:e.id,staticClass:"contact"},[n("div",{staticClass:"name"},[t._v("\n                        "+t._s(e.firstname)+" "+t._s(e.lastname)+"\n                        "),e.sfid?n("i",{staticClass:"icon icon-download"}):t._e(),t._v(" "),e.sfid?t._e():n("i",{staticClass:"icon icon-cloud-off no-cloud"}),t._v(" "),n("at-button",{staticClass:"edit-button",attrs:{icon:"icon-edit",circle:"",size:"small"},on:{click:function(n){t.editModals[e.id]=!0}}}),t._v(" "),n("at-modal",{attrs:{title:e.name,okText:"Save"},on:{"on-confirm":function(n){t.editContact(t.editModalsData[e.id],!0)}},model:{value:t.editModals[e.id],callback:function(n){t.$set(t.editModals,e.id,n)},expression:"editModals[contact.id]"}},[n("ContactModal",{attrs:{contact:t.editModalsData[e.id],contactSearch:t.contactSearch(e.id)}})],1)],1),t._v(" "),n("div",{staticClass:"title"},[t._v("\n                        "+t._s(e.titleOverride||e.title)+"\n                    ")]),t._v(" "),t.checkForRoot(e)?n("div",{staticClass:"tags"},[n("at-tag",{staticClass:"tag",attrs:{color:"primary"}},[t._v("Root")])],1):n("at-select",{attrs:{filterable:"",placeholder:"Reports to...",size:"small",notFoundText:"No matching contact"},on:{"on-change":function(n){t.editContact(e)}},model:{value:e.parentId,callback:function(n){t.$set(e,"parentId",n)},expression:"contact.parentId"}},t._l(t.contactSearch(e.id),function(e){return n("at-option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}))],1)})),t._v(" "),n("div",{staticClass:"new-contact"},[n("at-button",{staticClass:"new-contact-button",attrs:{type:"primary",icon:"icon-user-plus",size:"large",hollow:""},on:{click:function(e){t.newContactModal=!0}}},[t._v("\n                    New Contact\n                ")]),t._v(" "),n("at-modal",{attrs:{title:"New Contact",okText:"Save"},on:{"on-confirm":t.createContact},model:{value:t.newContactModal,callback:function(e){t.newContactModal=e},expression:"newContactModal"}},[n("ContactModal",{attrs:{contact:t.newContact,contactSearch:t.contactSearch()}})],1)],1)],1),t._v(" "),n("div",{staticClass:"col-xs-24 col-md-18 col-lg-20"},[n("TreeThree",{attrs:{contacts:t.contacts}})],1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"legend"},[n("div",{staticClass:"legend-item"},[n("i",{staticClass:"icon icon-download"}),t._v(" Synced From Salesforce\n                ")]),t._v(" "),n("div",{staticClass:"legend-item"},[n("i",{staticClass:"icon icon-cloud-off no-cloud"}),t._v(" Created in TreeForce\n                ")]),t._v(" "),n("div",{staticClass:"legend-item"},[n("strong",[t._v("Note:")]),t._v(" Changes made in TreeForce will not persist to Salesforce\n                ")])])}],r={render:a,staticRenderFns:c};e.a=r},mUbh:function(t,e,n){"use strict";var a=n("Xxa5"),c=n.n(a),r=n("exGp"),o=n.n(r),s=n("mvHQ"),i=n.n(s),l=n("7+uW"),u="https://trees-graph.herokuapp.com/graphql",d=function(t){return i()(t).replace(/"([^(")"]+)":/g,"$1:")};e.a={fetchAccounts:function(t){var e=this,n=t.commit;return o()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:"\n                        query {\n                            allAccounts {\n                                nodes {\n                                    name\n                                    id\n                                    sfid\n                                    nodeId\n                                    createddate\n                                    isdeleted\n                                    systemmodstamp\n                                }\n                            }\n                        }\n                    "});case 3:a=t.sent,n("fetchAccounts",a.body.data.allAccounts.nodes),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},fetchContacts:function(t,e){var n=this;t.commit;return o()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:'\n                        query {\n                            allContacts (condition: {accountid: "'+e+'"}) {\n                                nodes {\n                                    createdLocally\n                                    parentId\n                                    titleOverride\n                                    uploadedImageUrl\n                                    lastname\n                                    accountid\n                                    name\n                                    mobilephone\n                                    phone\n                                    isdeleted\n                                    homephone\n                                    systemmodstamp\n                                    reportstoid\n                                    createddate\n                                    salutation\n                                    title\n                                    firstname\n                                    email\n                                    description\n                                    photourl\n                                    sfid\n                                    id\n                                    _hcLastop\n                                    _hcErr\n                                }\n                            }\n                        }\n                    '});case 3:return a=t.sent,t.abrupt("return",a.body.data.allContacts.nodes);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,7]])}))()},search:function(t,e){(0,t.commit)("search",{searchKey:e.searchKey,searchString:e.searchString})},createContact:function(t,e){var n=this;t.commit;return o()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:"\n                        mutation {\n                            createContact(input: {\n                                contact: "+d(e)+"\n                            }) {\n                                contact {\n                                    createdLocally\n                                    parentId\n                                    titleOverride\n                                    uploadedImageUrl\n                                    lastname\n                                    accountid\n                                    name\n                                    mobilephone\n                                    phone\n                                    isdeleted\n                                    homephone\n                                    systemmodstamp\n                                    reportstoid\n                                    createddate\n                                    salutation\n                                    title\n                                    firstname\n                                    email\n                                    description\n                                    photourl\n                                    sfid\n                                    id\n                                    _hcLastop\n                                    _hcErr\n                                }\n                            }\n                        }\n\n                    "});case 3:return a=t.sent,t.abrupt("return",a.body.data.createContact.contact);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,7]])}))()},editContact:function(t,e){var n=this;t.commit;return o()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:"\n                        mutation {\n                            updateContactById(input: {\n                                id: "+e.id+",\n                                contactPatch: "+d(e)+"\n                            }) {\n                                contact {\n                                    createdLocally\n                                    parentId\n                                    titleOverride\n                                    uploadedImageUrl\n                                    lastname\n                                    accountid\n                                    name\n                                    mobilephone\n                                    phone\n                                    isdeleted\n                                    homephone\n                                    systemmodstamp\n                                    reportstoid\n                                    createddate\n                                    salutation\n                                    title\n                                    firstname\n                                    email\n                                    description\n                                    photourl\n                                    sfid\n                                    id\n                                    _hcLastop\n                                    _hcErr\n                                }\n                            }\n                        }\n\n                    "});case 3:return a=t.sent,t.abrupt("return",a.body.data.updateContactById.contact);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,7]])}))()}}},neyN:function(t,e){},oOLh:function(t,e){},ofwx:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tree"})},c=[],r={render:a,staticRenderFns:c};e.a=r},qDI4:function(t,e,n){"use strict";var a=n("NYxO"),c=n("rdLu"),r=n.n(c),o=n("Hjxw"),s=n("dYQ4"),i=n("8kKL"),l={firstname:"",lastname:"",name:"",titleOverride:"",email:"",phone:"",mobilephone:"",accountid:"",createdLocally:!0};e.a={name:"accounts",components:{ContactModal:o.a,ContactFilters:s.a,TreeThree:i.a},data:function(){return{contacts:[],contactMap:{},salesforceContactMap:{},account:{},newContactModal:!1,newContact:r.a.extend({},l),editModals:{},editModalsData:{}}},created:function(){this.$store.dispatch("search",{searchKey:"contactSearch",searchText:""}),this.$store.state.accounts.length?this.mapAccount():this.$store.dispatch("fetchAccounts").then(this.mapAccount),this.$store.dispatch("fetchContacts",this.$route.params.id).then(this.updateContacts)},computed:Object(a.b)({accounts:"accounts",filteredContacts:function(t){return t.contactSearch?r.a.filter(this.contacts,function(e){return e.name.toLowerCase().indexOf(t.contactSearch.toLowerCase())>-1}):r.a.sortBy(this.contacts,function(t){return t.name.toLowerCase()})}}),methods:{updateContacts:function(t){var e=this;this.contacts=t,r.a.each(t,function(t){e.contactMap[t.id]=t.name,t.sfid&&(e.salesforceContactMap[t.sfid]=t.name),e.$set(e.editModals,t.id,!1),e.$set(e.editModalsData,t.id,r.a.extend({},t))})},contactSearch:function(t){return r.a.sortBy(r.a.reject(this.contacts,function(e){return e.id===t}),function(t){return t.name.toLowerCase()})},checkForRoot:function(t){return!t.parentId&&!t.reportstoid&&(r.a.findWhere(this.contacts,{parentId:t.id})||t.sfid&&r.a.findWhere(this.contacts,{reportstoid:t.sfid}))},mapAccount:function(){this.account=r.a.findWhere(this.$store.state.accounts,{sfid:this.$route.params.id})},findParent:function(t){return t.parentId?this.contactMap[t.parentId]:this.salesforceContactMap[t.reportstoid]},createContact:function(){this.newContact.firstname&&this.newContact.lastname&&this.newContact.titleOverride?(this.newContact.name=this.newContact.firstname+" "+this.newContact.lastname,this.newContact.accountid=this.account.sfid,this.$store.dispatch("createContact",this.newContact).then(this.createdContact,this.errorMessage)):this.$Message.warning("Please input a first name, last name, and title.")},createdContact:function(t){this.contacts.push(t),this.contactMap[t.id]=t.name,this.editModalsData[t.id]=r.a.extend({},t),this.newContact=r.a.extend({},l),this.$Message.success("Contact created!")},editContact:function(t,e){var n=this;e&&(t=r.a.extend(r.a.findWhere(this.contacts,{id:t.id}),t)),t.firstname&&t.lastname&&(t.titleOverride||t.title)?(t.name=t.firstname+" "+t.lastname,this.$store.dispatch("editContact",t).then(function(e){return n.editedContact(e,t)},this.errorMessage)):this.$Message.warning("Please input a first name, last name, and title.")},editedContact:function(t,e){this.contactMap[t.id]=t.name,this.editModalsData[t.id]=r.a.extend({},t),this.$Message.success("Contact edited!")},errorMessage:function(){this.$Message.error("Server error")}}}},rIW4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-modal"},[n("div",{staticClass:"row at-row"},[n("div",{staticClass:"col-sm-24 col-md-12"},[n("at-input",{staticClass:"contact-input",attrs:{value:t.contact.firstname,placeholder:"First name"},model:{value:t.contact.firstname,callback:function(e){t.$set(t.contact,"firstname",e)},expression:"contact.firstname"}})],1),t._v(" "),n("div",{staticClass:"col-sm-24 col-md-12"},[n("at-input",{staticClass:"contact-input",attrs:{value:t.contact.lastname,placeholder:"Last name"},model:{value:t.contact.lastname,callback:function(e){t.$set(t.contact,"lastname",e)},expression:"contact.lastname"}})],1),t._v(" "),n("div",{staticClass:"col-sm-24 col-md-12"},[n("at-input",{staticClass:"contact-input",attrs:{value:t.contact.titleOverride,placeholder:t.contact.title?t.contact.title:"Title"},model:{value:t.contact.titleOverride,callback:function(e){t.$set(t.contact,"titleOverride",e)},expression:"contact.titleOverride"}})],1),t._v(" "),n("div",{staticClass:"col-sm-24 col-md-12"},[n("at-input",{staticClass:"contact-input",attrs:{value:t.contact.email,placeholder:"Email (optional)"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}})],1),t._v(" "),n("div",{staticClass:"col-sm-24 col-md-12"},[n("at-input",{staticClass:"contact-input",attrs:{value:t.contact.phone,placeholder:"Phone (optional)"},model:{value:t.contact.phone,callback:function(e){t.$set(t.contact,"phone",e)},expression:"contact.phone"}})],1),t._v(" "),n("div",{staticClass:"col-sm-24 col-md-12"},[n("at-input",{staticClass:"contact-input",attrs:{value:t.contact.mobilephone,placeholder:"Mobile phone (optional)"},model:{value:t.contact.mobilephone,callback:function(e){t.$set(t.contact,"mobilephone",e)},expression:"contact.mobilephone"}})],1)])])},c=[],r={render:a,staticRenderFns:c};e.a=r},uK6g:function(t,e,n){"use strict";function a(t){n("neyN")}var c=n("qDI4"),r=n("lIye"),o=n("VU/8"),s=a,i=o(c.a,r.a,!1,s,"data-v-c5906922",null);e.a=i.exports},ukYY:function(t,e,n){"use strict";e.a={fetchAccounts:function(t,e){t.accounts=e},search:function(t,e){var n=e.searchKey,a=e.searchString;t[n]=a}}},xJD8:function(t,e,n){"use strict";e.a={name:"app"}},yUmq:function(t,e){},yoyZ:function(t,e,n){t.exports=n.p+"static/img/hierarchy.50ae765.png"},zgGR:function(t,e,n){"use strict";function a(t){n("oOLh")}var c=n("LcqU"),r=n("MBON"),o=n("VU/8"),s=a,i=o(c.a,r.a,!1,s,"data-v-1569203c",null);e.a=i.exports}},["NHnr"]);
//# sourceMappingURL=app.e4c5cd0d878cd646ede4.js.map