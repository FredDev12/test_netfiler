(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-620dc40e"],{"8c07":function(e,t,n){"use strict";var c=n("7a23");const l={class:"sidebar"},o=["href"];function a(e,t,n,a,r,i){return Object(c["openBlock"])(),Object(c["createElementBlock"])("aside",l,[Object(c["createElementVNode"])("nav",null,[Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.menuItems,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name,class:Object(c["normalizeClass"])({active:e.active})},[Object(c["createElementVNode"])("a",{href:e.link},Object(c["toDisplayString"])(e.name),9,o)],2))),128))])])])}var r=Object(c["defineComponent"])({name:"SidebarComponent",props:{menuItems:{type:Array,required:!0}}}),i=(n("9261"),n("6b0d")),s=n.n(i);const d=s()(r,[["render",a],["__scopeId","data-v-74b7da77"]]);t["a"]=d},9261:function(e,t,n){"use strict";n("d558")},d000:function(e,t,n){"use strict";var c=n("7a23");const l={class:"navbar"};function o(e,t,n,o,a,r){const i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createElementVNode"])("header",l,[t[1]||(t[1]=Object(c["createElementVNode"])("div",{class:"logo"},[Object(c["createElementVNode"])("a",{href:"/"},"MonLogo")],-1)),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.menuItems,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name,class:Object(c["normalizeClass"])({active:e.active})},[Object(c["createVNode"])(i,{to:e.link},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]),_:2},1032,["to"])],2))),128))])],2),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(c["createElementVNode"])("ul",null,[Object(c["createElementVNode"])("li",null,[Object(c["createElementVNode"])("a",{href:"#",onClick:t[0]||(t[0]=Object(c["withModifiers"])((...t)=>e.logout&&e.logout(...t),["prevent"]))},"Déconnexion")])])],2)])])}var a=n("6605"),r=Object(c["defineComponent"])({name:"NavbarComponent",props:{menuItems:{type:Array,required:!0}},setup(){const e=Object(a["c"])(),t=()=>{localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("role"),e.push("/")};return{logout:t}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}}),i=n("6b0d"),s=n.n(i);const d=s()(r,[["render",o]]);t["a"]=d},d558:function(e,t,n){},f6e6:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const l={class:"dashboard"},o={class:"client-container"},a={key:0,class:"client-table"},r={key:1};function i(e,t,n,i,s,d){const b=Object(c["resolveComponent"])("NavBar"),u=Object(c["resolveComponent"])("ButtonComponent"),m=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createVNode"])(b,{menuItems:e.filteredMenuItems},null,8,["menuItems"]),Object(c["createElementVNode"])("main",o,[Object(c["createElementVNode"])("h1",null,"Liste des "+Object(c["toDisplayString"])(e.entityTitle),1),Object(c["createVNode"])(u,{onClick:t[0]||(t[0]=t=>e.addUser())},{default:Object(c["withCtx"])(()=>t[1]||(t[1]=[Object(c["createTextVNode"])("Ajouter")])),_:1}),e.entities.length>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])("table",a,[t[4]||(t[4]=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",null,"Nom complet"),Object(c["createElementVNode"])("th",null,"Email"),Object(c["createElementVNode"])("th",null,"Tache"),Object(c["createElementVNode"])("th",null,"Status"),Object(c["createElementVNode"])("th",null,"Rôle"),Object(c["createElementVNode"])("th",null,"Actions")])],-1)),Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.entities,n=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:n.id},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.name),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.email),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.task),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.status),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.role),1),Object(c["createElementVNode"])("td",null,[Object(c["createVNode"])(u,{onClick:t=>e.editEntity(n.id)},{default:Object(c["withCtx"])(()=>t[2]||(t[2]=[Object(c["createTextVNode"])("Éditer")])),_:2},1032,["onClick"]),Object(c["createVNode"])(u,{onClick:t=>e.deleteEntity(n.id)},{default:Object(c["withCtx"])(()=>t[3]||(t[3]=[Object(c["createTextVNode"])("Supprimer")])),_:2},1032,["onClick"])])]))),128))])])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",r,[Object(c["createTextVNode"])("Aucun "+Object(c["toDisplayString"])(e.entityTitle.toLowerCase())+" trouvé ",1),Object(c["createVNode"])(m,{to:"/addUser"},{default:Object(c["withCtx"])(()=>t[5]||(t[5]=[Object(c["createTextVNode"])("Ajouter ici")])),_:1}),t[6]||(t[6]=Object(c["createTextVNode"])("."))]))])])}var s=n("e4c3"),d=n("8c07"),b=n("d000"),u=n("6605"),m=n("dfd5"),O=Object(c["defineComponent"])({name:"List",components:{ButtonComponent:s["a"],SidebarComponent:d["a"],NavBar:b["a"]},props:{entityType:{type:String,required:!0}},setup(e){const t=Object(c["ref"])([]),n=Object(c["ref"])(""),l=Object(c["ref"])(localStorage.getItem("role")||"User"),o=Object(c["ref"])([{name:"Tableau de Bord",link:"/dashboard",active:!1,visibleTo:["Admin","Client","Manager"]},{name:"Gestion Utilisateur",link:"/liste",active:!0,visibleTo:["Admin","Client","Manager"]},{name:"Profil d'utilisateur",link:"/profile",active:!1,visibleTo:["Admin","Client","Manager"]}]),a=o.value.filter(e=>e.visibleTo.includes(l.value));Object(u["c"])();Object(c["onMounted"])(async()=>{try{let e;const c=l.value;switch(c){case"Admin":n.value="Admin";break;case"Client":n.value="Client";break;case"Manager":n.value="Manager";break;case"Utilisateur":n.value="Utilisateur";break;default:return void console.warn("Type d'entité inconnu: "+c)}console.log(n.value),e=await Object(m["c"])(n.value),console.log(e),e&&Array.isArray(e)?t.value=e:console.warn("Aucune donnée reçue pour la liste des entités.")}catch(e){console.error("Une erreur est survenue lors de la récupération des données.",e)}});const r=e=>{console.log("Edit entity:",e)},i=e=>{console.log("Delete entity with ID:",e)},s=()=>{};return{entities:t,entityTitle:n,menuItems:o,editEntity:r,deleteEntity:i,addUser:s,filteredMenuItems:a,role:l}}}),j=n("6b0d"),p=n.n(j);const v=p()(O,[["render",i]]);t["default"]=v}}]);
//# sourceMappingURL=chunk-620dc40e.10fe8a36.js.map