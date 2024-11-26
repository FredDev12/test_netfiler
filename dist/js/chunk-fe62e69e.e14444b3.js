(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe62e69e"],{"50d5":function(e,t,r){e.exports=r.p+"img/wadoria.673e5e7d.png"},5326:function(e,t,r){"use strict";r.r(t);var o=r("7a23"),a=r("50d5"),n=r.n(a);const l={class:"login-container"},c={class:"form-group"},s={key:0,class:"error"};function d(e,t,r,a,d,i){const u=Object(o["resolveComponent"])("InputField"),m=Object(o["resolveComponent"])("ButtonComponent"),p=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[t[7]||(t[7]=Object(o["createElementVNode"])("img",{src:n.a,alt:"Logo",class:"logo"},null,-1)),t[8]||(t[8]=Object(o["createElementVNode"])("h1",null,"Connexion",-1)),Object(o["createElementVNode"])("form",{onSubmit:t[2]||(t[2]=Object(o["withModifiers"])((...t)=>e.handleLogin&&e.handleLogin(...t),["prevent"]))},[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(u,{type:"email",id:"email",modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.email=t),label:"Email","error-message":e.emailError,placeholder:"Entrez votre email",required:""},null,8,["modelValue","error-message"]),Object(o["createVNode"])(u,{type:"password",id:"password",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),label:"Mot de passe","error-message":e.passwordError,placeholder:"Entrez votre mot de passe",required:""},null,8,["modelValue","error-message"])]),Object(o["createVNode"])(m,{type:"submit",class:"btn-primary",disabled:e.loading},{default:Object(o["withCtx"])(()=>[e.loading?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createTextVNode"])("Chargement...")],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[Object(o["createTextVNode"])("Se connecter")],64))]),_:1},8,["disabled"]),e.apiError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",s,Object(o["toDisplayString"])(e.apiError),1)):Object(o["createCommentVNode"])("",!0)],32),Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(p,{to:"/requestPasswordReset"},{default:Object(o["withCtx"])(()=>t[3]||(t[3]=[Object(o["createTextVNode"])("Mot de passe oublié ?")])),_:1})]),Object(o["createElementVNode"])("p",null,[t[5]||(t[5]=Object(o["createTextVNode"])(" Vous n'avez pas de compte ? ")),Object(o["createVNode"])(p,{to:"/register"},{default:Object(o["withCtx"])(()=>t[4]||(t[4]=[Object(o["createTextVNode"])("Inscrivez-vous ici")])),_:1}),t[6]||(t[6]=Object(o["createTextVNode"])(". "))])])}var i=r("6605"),u=r("dfd5"),m=r("e4c3"),p=r("8192"),b=Object(o["defineComponent"])({name:"Login",components:{ButtonComponent:m["a"],InputField:p["a"]},setup(){const e=Object(i["d"])(),t=Object(o["reactive"])({email:"",password:""}),r=Object(o["ref"])(""),a=Object(o["ref"])(""),n=Object(o["ref"])(""),l=Object(o["ref"])(!1),c=async()=>{if(l.value=!0,r.value="",a.value="",n.value="",!s(t.email))return r.value="Veuillez entrer une adresse email valide.",void(l.value=!1);if(t.password.length<6)return a.value="Le mot de passe doit contenir au moins 6 caractères.",void(l.value=!1);try{const r=await Object(u["g"])(t);r.token&&(localStorage.setItem("token",r.token),localStorage.setItem("username",r.userInfo.username),console.log("login",r.userInfo),"admin"===r.userInfo.role?e.push({path:"/dashboardAdmin",query:{username:r.userInfo.username}}):"client"===r.userInfo.role?e.push("/dashboardClient"):"manager"===r.userInfo.role?e.push("/dashboardManager"):"user"===r.userInfo[0]?e.push("/dashboardUser"):(n.value="Role non reconnu.",console.log("Role non reconnu.")))}catch(o){console.error(o),console.log(t),"string"===typeof o?(n.value=o,console.error("erreur type : ",o)):n.value="Email ou mot de passe incorrect."}finally{l.value=!1}},s=e=>{const t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return t.test(e)};return{form:t,emailError:r,passwordError:a,apiError:n,handleLogin:c,loading:l}}}),g=r("6b0d"),j=r.n(g);const O=j()(b,[["render",d]]);t["default"]=O},8192:function(e,t,r){"use strict";var o=r("7a23");const a={class:"input-field"},n=["for"],l=["id","type","value","placeholder","disabled","maxlength","minlength"],c={key:1,class:"error-message"};function s(e,t,r,s,d,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[e.label?(Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{key:0,for:e.id,class:"input-label"},Object(o["toDisplayString"])(e.label),9,n)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("input",{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,maxlength:e.maxlength,minlength:e.minlength,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),class:"input"},null,40,l),e.errorMessage?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",c,Object(o["toDisplayString"])(e.errorMessage),1)):Object(o["createCommentVNode"])("",!0)])}var d=Object(o["defineComponent"])({name:"InputField",props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},placeholder:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1},maxlength:{type:Number,required:!1},minlength:{type:Number,required:!1},errorMessage:{type:String,required:!1}}}),i=(r("be8d"),r("6b0d")),u=r.n(i);const m=u()(d,[["render",s],["__scopeId","data-v-424e3b7f"]]);t["a"]=m},be8d:function(e,t,r){"use strict";r("d2e2")},d2e2:function(e,t,r){}}]);
//# sourceMappingURL=chunk-fe62e69e.e14444b3.js.map