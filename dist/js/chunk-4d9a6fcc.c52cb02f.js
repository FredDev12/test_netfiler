(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d9a6fcc"],{4601:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const l={class:"dashboard"},o={class:"dashboard-container"},a={key:0,class:"entity-table"};function r(e,t,n,r,i,s){const d=Object(c["resolveComponent"])("NavBar"),u=Object(c["resolveComponent"])("ButtonComponent");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createVNode"])(d,{menuItems:e.filteredMenuItems},null,8,["menuItems"]),Object(c["createElementVNode"])("main",o,[Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("h1",null,"Bienvenue sur le tableau de bord, "+Object(c["toDisplayString"])(e.username)+" ("+Object(c["toDisplayString"])(e.role)+") !",1),Object(c["createVNode"])(u,{onClick:e.logout},{default:Object(c["withCtx"])(()=>t[0]||(t[0]=[Object(c["createTextVNode"])("Se déconnecter")])),_:1},8,["onClick"])]),e.entities.length>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])("table",a,[t[3]||(t[3]=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",null,"Nom complet"),Object(c["createElementVNode"])("th",null,"Rôle"),Object(c["createElementVNode"])("th",null,"Actions")])],-1)),Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.entities,n=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:n.id},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.name),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.role),1),Object(c["createElementVNode"])("td",null,[Object(c["createVNode"])(u,{onClick:t=>e.editEntity(n.id)},{default:Object(c["withCtx"])(()=>t[1]||(t[1]=[Object(c["createTextVNode"])("Éditer")])),_:2},1032,["onClick"]),Object(c["createVNode"])(u,{onClick:t=>e.deleteEntity(n.id)},{default:Object(c["withCtx"])(()=>t[2]||(t[2]=[Object(c["createTextVNode"])("Supprimer")])),_:2},1032,["onClick"])])]))),128))])])):Object(c["createCommentVNode"])("",!0)])])}var i=n("e4c3"),s=n("8c07"),d=n("d000"),u=n("6605"),b=n("dfd5"),m=Object(c["defineComponent"])({name:"Dashboard",components:{ButtonComponent:i["a"],SidebarComponent:s["a"],NavBar:d["a"]},data(){return{filteredMenuItems:[],username:"Invité",role:"User"}},setup(){const e=Object(u["c"])(),t=Object(c["ref"])(localStorage.getItem("name")||"Invité"),n=Object(c["ref"])(localStorage.getItem("role")||"User"),l=Object(c["ref"])([]),o=Object(c["ref"])(""),a=Object(c["ref"])(localStorage.getItem("id")||"1"),r=Object(c["ref"])([{name:"Tableau de Bord",link:"/dashboard",active:!1,visibleTo:["Admin","Client","Manager","Utilisateur"]},{name:"Liste des Utilisateurs",link:"/liste",active:!1,visibleTo:["Admin","Client","Manager"]},{name:"Mon Profil",link:"/profile",active:!0,visibleTo:["Admin","Client","Manager","Utilisateur"]}]),i=r.value.filter(e=>e.visibleTo.includes(n.value));Object(c["onMounted"])(async()=>{try{let e;const t=n.value;switch(t){case"Admin":o.value="Admin";break;case"Client":o.value="Client";break;case"Manager":o.value="Manager";break;case"Utilisateur":o.value="Utilisateur";break;default:return void console.warn("Type d'entité inconnu: "+t)}console.log(o.value),e=await Object(b["c"])({role:o.value,id:a.value}),console.log(e),e&&Array.isArray(e)?l.value=e:console.warn("Aucune donnée reçue pour la liste des entités.")}catch(e){console.error("Une erreur est survenue lors de la récupération des données.",e)}});const s=e=>{console.log("Edit entity:",e)},d=e=>{console.log("Delete entity with ID:",e)},m=e=>{console.log("Editing client:",e)},O=e=>{console.log("Editing client:",e)},j=()=>{localStorage.removeItem("username"),localStorage.removeItem("role"),localStorage.removeItem("token"),e.push({name:"Login"})};return{username:t,role:n,menuItems:r,filteredMenuItems:i,entities:l,entityTitle:o,editEntity:s,userId:a,deleteEntity:d,editContract:m,deleteContract:O,logout:j}}}),O=n("6b0d"),j=n.n(O);const p=j()(m,[["render",r]]);t["default"]=p},"8c07":function(e,t,n){"use strict";var c=n("7a23");const l={class:"sidebar"},o=["href"];function a(e,t,n,a,r,i){return Object(c["openBlock"])(),Object(c["createElementBlock"])("aside",l,[Object(c["createElementVNode"])("nav",null,[Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.menuItems,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name,class:Object(c["normalizeClass"])({active:e.active})},[Object(c["createElementVNode"])("a",{href:e.link},Object(c["toDisplayString"])(e.name),9,o)],2))),128))])])])}var r=Object(c["defineComponent"])({name:"SidebarComponent",props:{menuItems:{type:Array,required:!0}}}),i=(n("9261"),n("6b0d")),s=n.n(i);const d=s()(r,[["render",a],["__scopeId","data-v-74b7da77"]]);t["a"]=d},9261:function(e,t,n){"use strict";n("d558")},d000:function(e,t,n){"use strict";var c=n("7a23");const l={class:"navbar"};function o(e,t,n,o,a,r){const i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createElementVNode"])("header",l,[t[1]||(t[1]=Object(c["createElementVNode"])("div",{class:"logo"},[Object(c["createElementVNode"])("a",{href:"/"},"MonLogo")],-1)),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.menuItems,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name,class:Object(c["normalizeClass"])({active:e.active})},[Object(c["createVNode"])(i,{class:"link",to:e.link},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]),_:2},1032,["to"])],2))),128))])],2),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(c["createElementVNode"])("ul",null,[Object(c["createElementVNode"])("li",null,[Object(c["createElementVNode"])("a",{href:"#",onClick:t[0]||(t[0]=Object(c["withModifiers"])((...t)=>e.logout&&e.logout(...t),["prevent"]))},"Déconnexion")])])],2)])])}var a=n("6605"),r=Object(c["defineComponent"])({name:"NavbarComponent",props:{menuItems:{type:Array,required:!0}},setup(){const e=Object(a["c"])(),t=()=>{localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("role"),e.push("/")};return{logout:t}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}}),i=n("6b0d"),s=n.n(i);const d=s()(r,[["render",o]]);t["a"]=d},d558:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4d9a6fcc.c52cb02f.js.map