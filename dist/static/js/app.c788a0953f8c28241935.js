webpackJsonp([1],{0:function(t,n){},"0GLn":function(t,n,e){"use strict";n.a={name:"contact-modal",props:["contact","contactSearch","removeContact","new"]}},"0aNp":function(t,n){},"431H":function(t,n){},"7qMK":function(t,n,e){"use strict";function a(t){e("aCya")}var c=e("YsAA"),o=e("ApmC"),r=e("VU/8"),s=a,i=r(c.a,o.a,!1,s,"data-v-0d6d4394",null);n.a=i.exports},"8kKL":function(t,n,e){"use strict";function a(t){e("yUmq")}var c=e("dUXA"),o=e("ofwx"),r=e("VU/8"),s=a,i=r(c.a,o.a,!1,s,null,null);n.a=i.exports},"91lF":function(t,n,e){"use strict";var a=e("NYxO");n.a={name:"contact-filters",computed:Object(a.b)(["contactSearch"]),methods:{searchContacts:function(t){this.$store.dispatch("search",{searchKey:"contactSearch",searchString:t.target.value})}}}},"9XKw":function(t,n,e){"use strict";var a=e("Za4h"),c=(e.n(a),e("rdLu")),o=e.n(c);n.a=function(t,n,e){function c(t,n,e){if(t){n(t);var a=e(t);if(a)for(var o=a.length,r=0;r<o;r++)c(a[r],n,e)}}function r(){q.sort(function(t,n){return n.name.toLowerCase()<t.name.toLowerCase()?1:-1})}function s(t,n){var e=L;if(O){clearTimeout(O);var c=a.transform(W.attr("transform")),o=null,r=null;"left"===n||"right"===n?(o="left"===n?c.translate[0]+e:c.translate[0]-e,r=c.translate[1]):"up"!==n&&"down"!==n||(o=c.translate[0],r="up"===n?c.translate[1]+e:c.translate[1]-e);var i=K.scale();W.transition().attr("transform","translate("+o+","+r+")scale("+i+")"),a.select(t).select("g.node").attr("transform","translate("+o+","+r+")"),K.scale(K.scale()),K.translate([o,r]),O=setTimeout(function(){s(t,e,n)},50)}}function i(){W.attr("transform","translate("+a.event.translate+")scale("+a.event.scale+")")}function l(t,n){F=t,a.select(n).select(".ghostCircle").attr("pointer-events","none"),a.selectAll(".ghostCircle").attr("class","ghostCircle show"),a.select(n).attr("class","node activeDrag"),W.selectAll("g.node").sort(function(t,n){return t.id!==F.id?1:-1}),v.length>1&&(w=q.links(v),b=W.selectAll("path.link").data(w,function(t){return t.target.id}).remove(),k=W.selectAll("g.node").data(v,function(t){return t.id}).filter(function(t,n){return t.id!==F.id}).remove()),x=q.links(q.nodes(F.parent)),W.selectAll("path.link").filter(function(t,n){return t.target.id===F.id}).remove(),M=null}function u(){A=null,a.selectAll(".ghostCircle").attr("class","ghostCircle"),a.select(C).attr("class","node"),a.select(C).select(".ghostCircle").attr("pointer-events",""),P(),null!==F&&(f(m),F=null)}function d(t){t._children&&(t.children=t._children,t.children.forEach(d),t._children=null)}function h(t){return t.children?(t._children=t.children,t.children=null):t._children&&(t.children=t._children,t._children=null),t}function p(t){a.event.defaultPrevented||(t=h(t),f(t))}function f(t){function e(t,n,a){return void 0===e.e&&(e.e=document.createElement("span"),e.e.style.visibility="hidden",document.body.appendChild(e.e)),e.e.style.fontSize=a,e.e.style.fontFamily=n,e.e.innerText=t,e.e.offsetWidth}var c=[1];!function t(n,e){e.children&&e.children.length>0&&(c.length<=n+1&&c.push(0),c[n+1]+=e.children.length,e.children.forEach(function(e){t(n+1,e)}))}(0,m);var r=35*a.max(c);q=q.size([r,N]);var s=q.nodes(m).reverse(),i=q.links(s),l={};!function(){o.a.each(s,function(t){var n=o.a.where(s,{depth:t.depth}),a=0;o.a.each(n,function(t){a=Math.max(e(t.name,"sans-serif","11px"),a)}),l[t.depth]=a})}();var u=[0];o.a.each(o.a.keys(l),function(t,n){u.push(o.a.reduce(o.a.values(l).splice(0,n),function(t,n){return t+n},0)+l[t])}),s.forEach(function(t){t.y=u[t.depth]+25*t.depth});var d=W.selectAll("g.node").data(s,function(t){return t.id||(t.id=++T)}),h=d.enter().append("g").call(B).attr("class","node").attr("transform",function(n){return"translate("+t.x0+","+t.y0+")"}).on("click",p);h.append("circle").attr("class","nodeCircle").attr("r",0).style("fill",function(t){return t._children?"#999":"#fff"}).on("mouseover",function(t){var e=this.getBoundingClientRect(),a=document.createElement("div");a.className="tooltip",a.style.left=e.x-100+"px",a.style.bottom=window.innerHeight-e.y+6+"px",a.innerHTML='\n                    <div class="pop-title pop-name">'+(t.contact.name||"")+'</div>\n                    <div class="pop-title">'+(t.contact.titleOverride||t.contact.title||"")+'</div>\n                    <div class="pop-title">'+(t.contact.email||"")+'</div>\n                    <div class="pop-title">'+(t.contact.phone||"")+'</div>\n                    <div class="pop-title">'+(t.contact.mobilephone||"")+"</div>\n                ",t.contact.uploadedImageUrl&&(a.innerHTML='<img width="80px" src="'+(t.contact.uploadedImageUrl||"")+'">'+a.innerHTML),n.appendChild(a)}).on("mouseout",function(){a.select(n).select("div.tooltip").remove()}),h.append("text").attr("x",10).attr("dy",function(t){return t.children||t._children?"-0.3em":".3em"}).attr("transform","rotate(90)").attr("class","nodeText").text(function(t){return t.name}).style("fill-opacity",0),h.append("circle").attr("class","ghostCircle").attr("r",25).attr("opacity",.2).style("fill","#13CE66").attr("pointer-events","mouseover").on("mouseover",function(t){j(t)}).on("mouseout",function(t){H(t)}),d.select("text").attr("x",10).text(function(t){return t.name}),d.select("circle.nodeCircle").attr("r",7).style("fill",function(t){return t.contact.colorCode&&t._children?"#"+t.contact.colorCode:t._children?"#999":"#fff"}).style("stroke",function(t){return t.contact.colorCode?"#"+t.contact.colorCode:t.children||t._children?"#999":"#ccc"}),d.transition().duration(E).attr("transform",function(t){return"translate("+t.x+","+t.y+")"}).select("text").style("fill-opacity",1);var f=d.exit().transition().duration(E).attr("transform",function(n){return"translate("+t.x+","+t.y+")"}).remove();f.select("circle").attr("r",0),f.select("text").style("fill-opacity",0);var v=W.selectAll("path.link").data(i,function(t){return t.target.id});v.enter().insert("path","g").attr("class","link").attr("d",function(n){var e={x:t.x0,y:t.y0};return Y({source:e,target:e})}),v.transition().duration(E).attr("d",Y),v.exit().transition().duration(E).attr("d",function(n){var e={x:t.x,y:t.y};return Y({source:e,target:e})}).remove(),s.forEach(function(t){t.x0=t.x,t.y0=t.y})}var m,v=null,C=null,g=null,y=null,_=null,w=null,x=null,b=null,k=null,I=null,M=null,O=null,S=0,$=0,A=null,F=null,L=200,T=0,E=750,U=n.getBoundingClientRect(),N=U.width,R=U.height,q=a.layout.tree().size([R,N]),Y=a.svg.diagonal().projection(function(t){return[t.x,t.y]});c(t,function(t){S++,$=Math.max(t.name.length,$)},function(t){return t.children&&t.children.length>0?t.children:null}),r();var K=a.behavior.zoom().scaleExtent([.1,10]).on("zoom",i);n.innerHTML=null,a.select(n).empty();var z=a.select(n).append("svg").attr("width",N).attr("height",R).attr("class","overlay").call(K),B=(z.append("svg:defs"),a.behavior.drag().on("dragstart",function(t){t!==m&&(M=!0,v=q.nodes(t),a.event.sourceEvent.stopPropagation())}).on("drag",function(t){if(t!==m){if(M&&(C=this,l(t,C)),I=a.mouse(document.getElementsByTagName("svg")[0]),I[0]<20)O=!0,s(this,"left");else if(I[0]>U.width-20)O=!0,s(this,"right");else if(I[1]<20)O=!0,s(this,"up");else if(I[1]>U.height-20)O=!0,s(this,"down");else try{clearTimeout(O)}catch(t){}t.x0+=a.event.dx,t.y0+=a.event.dy;a.select(this).attr("transform","translate("+t.x0+","+t.y0+")"),P()}}).on("dragend",function(t){if(t!==m)if(C=this,A){var n=F.parent.children.indexOf(F);n>-1&&F.parent.children.splice(n,1),void 0!==A.children||void 0!==A._children?void 0!==A.children?A.children.push(F):A._children.push(F):(A.children=[],A.children.push(F)),F.contact.parentId=A.contact.id,e(F.contact),d(A),r(),u()}else u()})),j=function(t){A=t,P()},H=function(t){A=null,P()},P=function(){var t=[];null!==F&&null!==A&&(t=[{source:{x:A.x0,y:A.y0},target:{x:F.x0,y:F.y0}}]);var n=W.selectAll(".templink").data(t);n.enter().append("path").attr("class","templink").attr("d",a.svg.diagonal()).attr("pointer-events","none"),n.attr("d",a.svg.diagonal()),n.exit().remove()},W=z.append("g");m=t,m.x0=R/2,m.y0=0,f(m),function(t){_=K.scale(),g=-t.x0,y=-t.y0,g=g*_+N/2,y=y*_+20,a.select("g").transition().duration(E).attr("transform","translate("+g+","+y+")scale("+_+")"),K.scale(_),K.translate([g,y])}(m)}},ApmC:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"accounts-wrapper"},[t._m(0),t._v(" "),e("div",{staticClass:"row at-row"},[e("AccountFilters")],1),t._v(" "),e("div",{staticClass:"row at-row"},[e("div",{staticClass:"accounts"},t._l(t.filteredAccounts,function(n){return e("div",{key:n.id,staticClass:"account row at-row"},[e("router-link",{attrs:{to:{name:"account",params:{id:n.sfid}}}},[e("at-button",{attrs:{type:"primary",size:"large",hollow:""}},[t._v(t._s(n.name))])],1)],1)}))])])},c=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"row at-row top-row"},[a("div",{staticClass:"col-sm-24"},[a("div",{staticClass:"banner"},[a("img",{staticClass:"hierarchy-image",attrs:{src:e("yoyZ")}}),t._v(" "),a("span",{staticClass:"treeforce-title"},[t._v("TreeForce")])])])])}],o={render:a,staticRenderFns:c};n.a=o},BfNg:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contact-filters"},[e("at-input",{attrs:{value:t.contactSearch,placeholder:"Search contacts...",size:"large"},nativeOn:{keyup:function(n){t.searchContacts(n)}}})],1)},c=[],o={render:a,staticRenderFns:c};n.a=o},Hjxw:function(t,n,e){"use strict";function a(t){e("0aNp")}var c=e("0GLn"),o=e("rIW4"),r=e("VU/8"),s=a,i=r(c.a,o.a,!1,s,"data-v-22346b9b",null);n.a=i.exports},IcnI:function(t,n,e){"use strict";var a=e("mUbh"),c=e("ukYY");n.a={state:{accounts:[],accountSearch:"",contactSearch:""},actions:a.a,mutations:c.a}},KF9i:function(t,n){},LcqU:function(t,n,e){"use strict";var a=e("NYxO");n.a={name:"account-filters",computed:Object(a.b)(["accountSearch"]),methods:{searchAccounts:function(t){this.$store.dispatch("search",{searchKey:"accountSearch",searchString:t.target.value})}}}},M93x:function(t,n,e){"use strict";function a(t){e("431H")}var c=e("xJD8"),o=e("PjOu"),r=e("VU/8"),s=a,i=r(c.a,o.a,!1,s,"data-v-a03cb094",null);n.a=i.exports},MBON:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"account-filters"},[e("at-input",{attrs:{value:t.accountSearch,placeholder:"Search accounts...",size:"large"},nativeOn:{keyup:function(n){t.searchAccounts(n)}}})],1)},c=[],o={render:a,staticRenderFns:c};n.a=o},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),c=e("ORbq"),o=e("NYxO"),r=e("/ocq"),s=e("yweG"),i=e.n(s),l=e("KF9i"),u=(e.n(l),e("M93x")),d=e("IcnI"),h=e("YaEn");a.default.use(c.a),a.default.use(o.a),a.default.use(r.a),a.default.use(i.a),a.default.config.productionTip=!1;var p=new o.a.Store(d.a),f=new r.a({routes:h.a});new a.default({el:"#app",store:p,router:f,template:"<App/>",components:{App:u.a}})},PjOu:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],o={render:a,staticRenderFns:c};n.a=o},Y8F9:function(t,n){},YaEn:function(t,n,e){"use strict";var a=e("uK6g"),c=e("7qMK");n.a=[{name:"home",path:"/",component:c.a},{name:"account",path:"/account/:id",component:a.a}]},YsAA:function(t,n,e){"use strict";var a=e("NYxO"),c=e("rdLu"),o=e.n(c),r=e("zgGR");n.a={name:"accounts",components:{AccountFilters:r.a},created:function(){this.$store.dispatch("fetchAccounts")},computed:Object(a.b)({filteredAccounts:function(t){return t.accountSearch?o.a.filter(t.accounts,function(n){return n.name.toLowerCase().indexOf(t.accountSearch.toLowerCase())>-1}):t.accounts}}),methods:{}}},aCya:function(t,n){},dUXA:function(t,n,e){"use strict";var a=e("rdLu"),c=e.n(a),o=e("9XKw");n.a={name:"tree-three",props:["contacts"],mounted:function(){this.buildTree()},watch:{contacts:{handler:function(t,n,e){this.buildTree()},deep:!0}},computed:{parentMap:function(){var t=this,n={};return c.a.each(this.contacts,function(e){e.parentId?n[e.parentId]=c.a.findWhere(t.contacts,{id:e.parentId}):e.reportstoid&&(n[e.reportstoid]=c.a.findWhere(t.contacts,{sfid:e.reportstoid}))}),n},root:function(){return{id:0,name:"Root",parentId:null}},contactsInTree:function(){var t=this;return c.a.filter(this.contacts,function(n){return t.parentMap[n.id||n.sfid]||n.parentId||n.reportstoid})}},methods:{hierarchyContacts:function(t){return{name:t.name,contact:t,children:this.findChildren(t)}},findChildren:function(t){var n=this,e=c.a.where(this.contactsInTree,{parentId:t.id});c.a.each(this.contactsInTree,function(n){t.sfid&&n.reportstoid===t.sfid&&null===n.parentId&&e.push(n)});var a=[];return c.a.each(e,function(t){a.push({name:t.name,contact:t,children:n.findChildren(t)})}),a},buildTree:function(){this.contacts.length&&Object(o.a)(this.hierarchyContacts(this.root),this.$el,this.updateParent)},updateParent:function(t){this.$store.dispatch("editContact",t)}}}},dYQ4:function(t,n,e){"use strict";function a(t){e("Y8F9")}var c=e("91lF"),o=e("BfNg"),r=e("VU/8"),s=a,i=r(c.a,o.a,!1,s,"data-v-17c83f2e",null);n.a=i.exports},lIye:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"account-wrapper"},[e("at-modal",{attrs:{title:t.modalContact.name,okText:"Save"},on:{"on-confirm":function(n){t.editContact(t.modalContact,!0)}},model:{value:t.modalOn,callback:function(n){t.modalOn=n},expression:"modalOn"}},[e("ContactModal",{attrs:{new:!1,removeContact:t.removeContact,contact:t.modalContact,contactSearch:t.contactSearch}})],1),t._v(" "),e("div",{staticClass:"row at-row"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("at-button",{attrs:{type:"primary",icon:"icon-arrow-left",hollow:""}},[t._v("Back")])],1),t._v(" "),t.account?e("span",{staticClass:"account-name"},[t._v(t._s(t.account.name))]):t._e()],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"row at-row account"},[e("div",{staticClass:"col-xs-24 col-md-6 col-lg-4"},[e("ContactFilters"),t._v(" "),e("div",{staticClass:"contact-list"},t._l(t.filteredContacts,function(n){return e("div",{key:n.id,staticClass:"contact"},[e("div",{staticClass:"name"},[t._v("\n                        "+t._s(n.firstname)+" "+t._s(n.lastname)+"\n                        "),n.sfid?e("i",{staticClass:"icon icon-download"}):t._e(),t._v(" "),n.sfid?t._e():e("i",{staticClass:"icon icon-cloud-off no-cloud"}),t._v(" "),e("at-button",{staticClass:"edit-button",attrs:{icon:"icon-edit",circle:"",size:"small"},on:{click:function(e){t.openModal(n)}}})],1),t._v(" "),e("div",{staticClass:"title"},[t._v("\n                        "+t._s(n.titleOverride||n.title)+"\n                    ")]),t._v(" "),n.parentId?e("div",{staticClass:"tags"},[e("at-tag",{staticClass:"tag",attrs:{color:"primary"}},[t._v(t._s(t.contactMap[n.parentId]))])],1):t._e(),t._v(" "),t.checkForRoot(n)?e("div",{staticClass:"tags"},[e("at-tag",{staticClass:"tag",attrs:{color:"primary"}},[t._v("Root")])],1):t._e()])})),t._v(" "),e("div",{staticClass:"new-contact"},[e("at-button",{staticClass:"new-contact-button",attrs:{type:"primary",icon:"icon-user-plus",size:"large",hollow:""},on:{click:function(n){t.newContactModal=!0}}},[t._v("\n                    New Contact\n                ")]),t._v(" "),e("at-modal",{attrs:{title:"New Contact",okText:"Save"},on:{"on-confirm":t.createContact},model:{value:t.newContactModal,callback:function(n){t.newContactModal=n},expression:"newContactModal"}},[e("ContactModal",{attrs:{new:!0,removeContact:t.removeContact,contact:t.newContact,contactSearch:t.contactSearch}})],1)],1)],1),t._v(" "),e("div",{staticClass:"col-xs-24 col-md-18 col-lg-20"},[e("TreeThree",{attrs:{contacts:t.contacts}})],1)])],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"legend"},[e("div",{staticClass:"legend-item"},[e("i",{staticClass:"icon icon-download"}),t._v(" Synced From Salesforce\n                ")]),t._v(" "),e("div",{staticClass:"legend-item"},[e("i",{staticClass:"icon icon-cloud-off no-cloud"}),t._v(" Created in TreeForce\n                ")]),t._v(" "),e("div",{staticClass:"legend-item"},[e("strong",[t._v("Note:")]),t._v(" Changes made in TreeForce will not persist to Salesforce\n                ")])])}],o={render:a,staticRenderFns:c};n.a=o},mUbh:function(t,n,e){"use strict";var a=e("Xxa5"),c=e.n(a),o=e("exGp"),r=e.n(o),s=e("mvHQ"),i=e.n(s),l=e("7+uW"),u="https://trees-graph.herokuapp.com/graphql",d=function(t){return i()(t).replace(/"([^(")"]+)":/g,"$1:")};n.a={fetchAccounts:function(t){var n=this,e=t.commit;return r()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:"\n                        query {\n                            allAccounts {\n                                nodes {\n                                    name\n                                    id\n                                    sfid\n                                    nodeId\n                                    createddate\n                                    isdeleted\n                                    systemmodstamp\n                                }\n                            }\n                        }\n                    "});case 3:a=t.sent,e("fetchAccounts",a.body.data.allAccounts.nodes),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,7]])}))()},fetchContacts:function(t,n){var e=this;t.commit;return r()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:'\n                        query {\n                            allContacts (condition: {accountid: "'+n+'"}) {\n                                nodes {\n                                    colorCode\n                                    createdLocally\n                                    parentId\n                                    titleOverride\n                                    uploadedImageUrl\n                                    lastname\n                                    accountid\n                                    name\n                                    mobilephone\n                                    phone\n                                    isdeleted\n                                    homephone\n                                    systemmodstamp\n                                    reportstoid\n                                    createddate\n                                    salutation\n                                    title\n                                    firstname\n                                    email\n                                    description\n                                    photourl\n                                    sfid\n                                    id\n                                    _hcLastop\n                                    _hcErr\n                                }\n                            }\n                        }\n                    '});case 3:return a=t.sent,t.abrupt("return",a.body.data.allContacts.nodes);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},search:function(t,n){(0,t.commit)("search",{searchKey:n.searchKey,searchString:n.searchString})},createContact:function(t,n){var e=this;t.commit;return r()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:"\n                        mutation {\n                            createContact(input: {\n                                contact: "+d(n)+"\n                            }) {\n                                contact {\n                                    colorCode\n                                    createdLocally\n                                    parentId\n                                    titleOverride\n                                    uploadedImageUrl\n                                    lastname\n                                    accountid\n                                    name\n                                    mobilephone\n                                    phone\n                                    isdeleted\n                                    homephone\n                                    systemmodstamp\n                                    reportstoid\n                                    createddate\n                                    salutation\n                                    title\n                                    firstname\n                                    email\n                                    description\n                                    photourl\n                                    sfid\n                                    id\n                                    _hcLastop\n                                    _hcErr\n                                }\n                            }\n                        }\n\n                    "});case 3:return a=t.sent,t.abrupt("return",a.body.data.createContact.contact);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},editContact:function(t,n){var e=this;t.commit;return r()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.default.http.post(u,{query:"\n                        mutation {\n                            updateContactById(input: {\n                                id: "+n.id+",\n                                contactPatch: "+d(n)+"\n                            }) {\n                                contact {\n                                    colorCode\n                                    createdLocally\n                                    parentId\n                                    titleOverride\n                                    uploadedImageUrl\n                                    lastname\n                                    accountid\n                                    name\n                                    mobilephone\n                                    phone\n                                    isdeleted\n                                    homephone\n                                    systemmodstamp\n                                    reportstoid\n                                    createddate\n                                    salutation\n                                    title\n                                    firstname\n                                    email\n                                    description\n                                    photourl\n                                    sfid\n                                    id\n                                    _hcLastop\n                                    _hcErr\n                                }\n                            }\n                        }\n\n                    "});case 3:return a=t.sent,t.abrupt("return",a.body.data.updateContactById.contact);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},removeContact:function(t,n){var e=this;t.commit;return r()(c.a.mark(function t(){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.prev=1,t.next=4,l.default.http.post(u,{query:"\n                        mutation {\n                            deleteContactById(input: {\n                                id: "+n+",\n                            }) {\n                                contact {\n                                    parentId\n                                    lastname\n                                    accountid\n                                    name\n                                    title\n                                    firstname\n                                    id\n                                }\n                            }\n                        }\n\n                    "});case 4:return a=t.sent,t.abrupt("return",a.body.data.deleteContactById.contact);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}},t,e,[[1,8]])}))()}}},neyN:function(t,n){},oOLh:function(t,n){},ofwx:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"tree"})},c=[],o={render:a,staticRenderFns:c};n.a=o},qDI4:function(t,n,e){"use strict";var a=e("NYxO"),c=e("rdLu"),o=e.n(c),r=e("Hjxw"),s=e("dYQ4"),i=e("8kKL"),l={firstname:"",lastname:"",name:"",titleOverride:"",email:"",phone:"",mobilephone:"",accountid:"",uploadedImageUrl:"",colorCode:"",createdLocally:!0};n.a={name:"accounts",components:{ContactModal:r.a,ContactFilters:s.a,TreeThree:i.a},data:function(){return{contacts:[],contactMap:{},salesforceContactMap:{},account:{},newContactModal:!1,newContact:o.a.extend({},l),modalContact:{},modalOn:!1}},created:function(){this.$store.dispatch("search",{searchKey:"contactSearch",searchText:""}),this.$store.state.accounts.length?this.mapAccount():this.$store.dispatch("fetchAccounts").then(this.mapAccount),this.$store.dispatch("fetchContacts",this.$route.params.id).then(this.updateContacts)},computed:Object(a.b)({accounts:"accounts",filteredContacts:function(t){return t.contactSearch?o.a.filter(this.contacts,function(n){return n.name.toLowerCase().indexOf(t.contactSearch.toLowerCase())>-1}):o.a.sortBy(this.contacts,function(t){return t.name.toLowerCase()})}}),methods:{updateContacts:function(t){var n=this;this.contacts=t,o.a.each(t,function(t){n.contactMap[t.id]=t.name,t.sfid&&(n.salesforceContactMap[t.sfid]=t.name)})},contactSearch:function(t){return o.a.sortBy(o.a.reject(this.contacts,function(n){return n.id===t}),function(t){return t.name.toLowerCase()})},checkForRoot:function(t){return!t.parentId&&!t.reportstoid&&(o.a.findWhere(this.contacts,{parentId:t.id})||t.sfid&&o.a.findWhere(this.contacts,{reportstoid:t.sfid}))},mapAccount:function(){this.account=o.a.findWhere(this.$store.state.accounts,{sfid:this.$route.params.id})},findParent:function(t){return t.parentId?this.contactMap[t.parentId]:this.salesforceContactMap[t.reportstoid]},openModal:function(t){this.modalContact=t,this.modalOn=!0},createContact:function(){this.newContact.firstname&&this.newContact.lastname&&this.newContact.titleOverride?(this.newContact.name=this.newContact.firstname+" "+this.newContact.lastname,this.newContact.accountid=this.account.sfid,this.$store.dispatch("createContact",this.newContact).then(this.createdContact,this.errorMessage)):this.$Message.warning("Please input a first name, last name, and title.")},createdContact:function(t){this.contacts.push(t),this.contactMap[t.id]=t.name,this.newContact=o.a.extend({},l),this.$Message.success("Contact created!")},editContact:function(t,n){var e=this;"null"===t.parentId&&(t.parentId=null),n&&(t=o.a.extend(o.a.findWhere(this.contacts,{id:t.id}),t)),t.firstname&&t.lastname&&(t.titleOverride||t.title)?(t.name=t.firstname+" "+t.lastname,this.modalOn=!1,this.$store.dispatch("editContact",t).then(function(n){return e.editedContact(n,t)},this.errorMessage)):this.$Message.warning("Please input a first name, last name, and title.")},editedContact:function(t,n){this.contactMap[t.id]=t.name,this.$Message.success("Contact edited!")},removeContact:function(t,n){this.modalOn=!1,this.$store.dispatch("removeContact",t).then(this.removedContact,this.errorMessage)},removedContact:function(t){this.contacts=o.a.reject(this.contacts,function(n){return n.id===t.id}),delete this.contactMap[t.id],this.$Message.warning("Contact removed!")},errorMessage:function(){this.$Message.error("Server error")}}}},rIW4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contact-modal"},[e("div",{staticClass:"row at-row"},[e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-input",{staticClass:"contact-input",attrs:{value:t.contact.firstname,placeholder:"First name"},model:{value:t.contact.firstname,callback:function(n){t.$set(t.contact,"firstname",n)},expression:"contact.firstname"}})],1),t._v(" "),e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-input",{staticClass:"contact-input",attrs:{value:t.contact.lastname,placeholder:"Last name"},model:{value:t.contact.lastname,callback:function(n){t.$set(t.contact,"lastname",n)},expression:"contact.lastname"}})],1),t._v(" "),e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-input",{staticClass:"contact-input",attrs:{value:t.contact.titleOverride,placeholder:t.contact.title?t.contact.title:"Title"},model:{value:t.contact.titleOverride,callback:function(n){t.$set(t.contact,"titleOverride",n)},expression:"contact.titleOverride"}})],1),t._v(" "),e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-input",{staticClass:"contact-input",attrs:{value:t.contact.email,placeholder:"Email (optional)"},model:{value:t.contact.email,callback:function(n){t.$set(t.contact,"email",n)},expression:"contact.email"}})],1),t._v(" "),e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-input",{staticClass:"contact-input",attrs:{value:t.contact.phone,placeholder:"Phone (optional)"},model:{value:t.contact.phone,callback:function(n){t.$set(t.contact,"phone",n)},expression:"contact.phone"}})],1),t._v(" "),e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-input",{staticClass:"contact-input",attrs:{value:t.contact.uploadedImageUrl,placeholder:"Image url (optional)"},model:{value:t.contact.uploadedImageUrl,callback:function(n){t.$set(t.contact,"uploadedImageUrl",n)},expression:"contact.uploadedImageUrl"}})],1),t._v(" "),e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-select",{staticClass:"contact-select",staticStyle:{width:"140px"},attrs:{value:t.contact.colorCode,placeholder:"Color code (optional)"},model:{value:t.contact.colorCode,callback:function(n){t.$set(t.contact,"colorCode",n)},expression:"contact.colorCode"}},[e("at-option",{attrs:{value:"",label:"No Color Code"}},[e("span",[t._v("No Color Code")])]),t._v(" "),e("at-option",{attrs:{value:"13CE66",label:"Trusted Adviser"}},[e("span",[t._v("Trusted Advisor")]),e("span",{staticClass:"color-option",staticStyle:{background:"#13CE66"}})]),t._v(" "),e("at-option",{attrs:{value:"3473e7",label:"Developing Relations"}},[e("span",[t._v("Developing Relations")]),e("span",{staticClass:"color-option",staticStyle:{background:"#3473e7"}})]),t._v(" "),e("at-option",{attrs:{value:"FFC82C",label:"Create Relationship"}},[e("span",[t._v("Create Relationship")]),e("span",{staticClass:"color-option",staticStyle:{background:"#FFC82C"}})]),t._v(" "),e("at-option",{attrs:{value:"FF4949",label:"Unfriendly"}},[e("span",[t._v("Unfriendly")]),e("span",{staticClass:"color-option",staticStyle:{background:"#FF4949"}})])],1)],1),t._v(" "),e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-select",{attrs:{value:t.contact.parentId,filterable:"",placeholder:"Reports to...",size:"small",notFoundText:"No matching contact"},model:{value:t.contact.parentId,callback:function(n){t.$set(t.contact,"parentId",n)},expression:"contact.parentId"}},[e("at-option",{attrs:{value:"null"}},[t._v("Remove from tree")]),t._v(" "),e("at-option",{attrs:{value:0}},[t._v("Root")]),t._v(" "),t._l(t.contactSearch(t.contact.id),function(n){return e("at-option",{key:n.id,attrs:{value:n.id}},[t._v(t._s(n.name))])})],2)],1),t._v(" "),this.new?t._e():e("div",{staticClass:"col-sm-24 col-md-12"},[e("at-button",{staticClass:"remove-contact",attrs:{size:"medium",type:"error",hollow:""},on:{click:function(n){t.removeContact(t.contact.id)}}},[t._v("Delete Contact")])],1)])])},c=[],o={render:a,staticRenderFns:c};n.a=o},uK6g:function(t,n,e){"use strict";function a(t){e("neyN")}var c=e("qDI4"),o=e("lIye"),r=e("VU/8"),s=a,i=r(c.a,o.a,!1,s,"data-v-c5906922",null);n.a=i.exports},ukYY:function(t,n,e){"use strict";n.a={fetchAccounts:function(t,n){t.accounts=n},search:function(t,n){var e=n.searchKey,a=n.searchString;t[e]=a}}},xJD8:function(t,n,e){"use strict";n.a={name:"app"}},yUmq:function(t,n){},yoyZ:function(t,n,e){t.exports=e.p+"static/img/hierarchy.50ae765.png"},zgGR:function(t,n,e){"use strict";function a(t){e("oOLh")}var c=e("LcqU"),o=e("MBON"),r=e("VU/8"),s=a,i=r(c.a,o.a,!1,s,"data-v-1569203c",null);n.a=i.exports}},["NHnr"]);
//# sourceMappingURL=app.c788a0953f8c28241935.js.map