var z=Object.defineProperty;var F=(t,i,s)=>i in t?z(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s;var T=(t,i,s)=>(F(t,typeof i!="symbol"?i+"":i,s),s);import{h as O,E as A,j as e,r as u}from"./index-c36778b0.js";import{a as C,b as f,c as I}from"./loading.module-94c2a7e5.js";import{C as S,a as H,L as k,P as l,I as N}from"./useLocaleStore-1b6180e0.js";import{u as b}from"./useLocaleValue-950bd2bd.js";import{A as U,P as D}from"./index-006c9885.js";import{p as V}from"./commonUtil-72b0c998.js";import B from"./index-1c43e41d.js";const M=()=>({converToImg:async s=>{var r;const c=document.createElement("style");document.head.appendChild(c),(r=c.sheet)==null||r.insertRule("body > div:last-child img { display: inline-block; }");const o=await O(s,{scale:1.2});return c.remove(),o.toDataURL("image/png",1)},converToPdf:s=>{const c=new A("p","mm","a4",!0),o=c.internal.pageSize.getWidth(),a=c.internal.pageSize.getHeight();c.addImage(s,"PNG",0,0,o,a),window.open(c.output("bloburl"))}}),G=()=>e.jsxs("footer",{className:C.footer,children:[e.jsx("p",{children:"Devmemory"}),e.jsx("div",{children:S.map((t,i)=>e.jsx("div",{className:C.div_circle,children:e.jsx("img",{src:t.logo,onClick:()=>window.open(t.path)})},`footer_btn_${i}`))})]});class W extends U{constructor(s){super();T(this,"lang");this.lang=s}async getBasicInfo(){return(await super.get(`/assets/data/${this.lang}/basic.json`)).data}async getSkill(){return(await super.get(`/assets/data/${this.lang}/skill.json`)).data}async getExperience(){return(await super.get(`/assets/data/${this.lang}/experience.json`)).data}async getProject(){return(await super.get(`/assets/data/${this.lang}/project.json`)).data}}const q=()=>{const{langCode:t,setLocale:i}=H(),[s,c]=u.useState(),[o,a]=u.useState(!1);u.useEffect(()=>{r(t)},[t]);const r=async d=>{a(!0);try{const v=new W(d),n=await v.getBasicInfo(),_=await v.getSkill(),p=await v.getExperience(),h=await v.getProject();c({basicInfo:n,skillList:_,experienceList:p,projectList:h})}catch{}finally{a(!1)}};return{toggleLang:()=>{const d=t===k.en?k.kr:k.en;i(d)},portfolio:s,langCode:t,showLoading:o,setShowLoading:a}},J=({langCode:t,activeIdx:i,shadow:s,toggleLang:c,moveTo:o})=>{const{getText:a}=b(),r=a("portfolio.nav");return e.jsxs("header",{className:s?`${f.head_nav} ${f.nav_shadow}`:f.head_nav,children:[r.map((x,d)=>e.jsx("button",{className:i===d?`${f.btn_nav} ${f.active_nav}`:f.btn_nav,onClick:()=>o(d),children:x},`btn_${x}`)),e.jsx("button",{onClick:c,children:t.toUpperCase()})]})},K=()=>e.jsx("div",{className:I.div_white_bg,children:e.jsx("div",{className:I.div_loading})}),Q=()=>{const t=u.useRef([]),[i,s]=u.useState(0),[c,o]=u.useState(!1),a=u.useRef(!1),r=d=>{t.current[d].scrollIntoView({behavior:"smooth"})},x=d=>{if(t.current.length<Object.keys(l).length||a.current)return;a.current=!0,V.delay(50).then(()=>{a.current=!1});const v=20,n=d.currentTarget.scrollTop+v,_=t.current,p=_[l.project].offsetTop+_[l.project].scrollHeight/2-150;n<_[l.skill].offsetTop&&i!==l.main?(c&&o(!1),s(l.main)):n>=_[l.skill].offsetTop&&n<_[l.experience].offsetTop&&i!==l.skill?(c||o(!0),s(l.skill)):n>=_[l.experience].offsetTop&&n<_[l.project].offsetTop&&i!==l.experience?s(l.experience):n>=_[l.project].offsetTop&&n<p&&i!==l.project?s(l.project):n>=p&&i!==l.etc&&s(l.etc)};return{refList:t.current,moveTo:r,onScroll:x,activeIdx:i,shadow:c}},X="_div_education_dgmrf_2",Y="_div_name_dgmrf_17",P={div_education:X,div_name:Y},Z=({etcInfoList:t,refList:i})=>e.jsx("div",{ref:s=>i[l.etc]=s,className:P.div_education,children:t==null?void 0:t.map(s=>e.jsxs("div",{children:[e.jsx("h3",{children:s.title}),e.jsxs("div",{children:[e.jsxs("div",{className:P.div_name,children:[e.jsx("strong",{children:s.name}),e.jsx("img",{src:"/assets/icon/link.svg",onClick:()=>window.open(s.link)})]}),e.jsx("p",{children:s.date})]}),e.jsx("p",{children:s.summary})]},s.title))}),ee="_div_experience_1eibd_2",se="_div_company_circle_1eibd_22",te="_div_selected_1eibd_39",ie="_div_exp_time_1eibd_58",ne="_div_project_icon_1eibd_63",ce="_div_project_1eibd_63",re="_div_project_info_1eibd_84",oe="_div_env_1eibd_89",ae="_div_desc_1eibd_104",de="_div_explanation_1eibd_123",le="_div_divider_1eibd_130",m={div_experience:ee,div_company_circle:se,div_selected:te,div_exp_time:ie,div_project_icon:ne,div_project:ce,div_project_info:re,div_env:oe,div_desc:ae,div_explanation:de,div_divider:le},_e=({experienceList:t=[],refList:i})=>{var d,v;const{getText:s,getDate:c}=b(),[o,a]=u.useState(0);let r=t[o];const x=n=>{switch(n){case N.web:return"/assets/icon/web.svg";case N.android:return"/assets/icon/playstore.svg";case N.ios:return"/assets/icon/appstore.svg"}};return r===void 0?e.jsx("div",{}):e.jsxs("div",{ref:n=>i[l.experience]=n,className:m.div_experience,children:[e.jsx("div",{children:t.map((n,_)=>{var p;return e.jsxs("div",{className:m.div_company_circle,title:n.company,style:{backgroundColor:n.pointColor},onClick:()=>a(_),children:[(p=n.company)==null?void 0:p.charAt(0),o===_&&e.jsx("div",{className:m.div_selected})]},`logo_${_}`)})}),e.jsxs("div",{children:[e.jsx("h2",{children:r.company}),e.jsxs("div",{className:m.div_exp_time,children:[s("portfolio.employment_period")," : ",r.startDate," -"," ",r.endDate," (",c(r.startDate,r.endDate),")"]}),e.jsx("div",{className:m.div_project_icon,children:(d=r.linkList)==null?void 0:d.map((n,_)=>e.jsx("img",{src:x(n.icon),onClick:()=>window.open(n.link)},`${r.company}_${_}`))}),e.jsx("div",{className:m.div_divider}),e.jsx("div",{children:(v=r.projects)==null?void 0:v.map(n=>{var _,p;return e.jsxs("div",{className:m.div_project,children:[e.jsxs("div",{children:[e.jsx("h3",{children:n.name}),e.jsx("p",{children:n.summary}),e.jsxs("div",{className:m.div_project_info,children:[s("portfolio.team_member")," : ",n.member,e.jsx("br",{}),s("portfolio.my_position")," : ",n.position]}),n.period!==void 0&&e.jsxs("p",{children:[s("portfolio.project_period")," : ",n.period]}),e.jsxs("div",{className:m.div_env,children:[e.jsx("p",{children:s("portfolio.dev_env")}),(_=n.environment)==null?void 0:_.map((h,j)=>e.jsxs("div",{children:["- ",h]},`${n.name}_env_${j}`))]})]}),e.jsx("div",{className:m.div_divider}),e.jsx("div",{className:m.div_desc,children:(p=n.descList)==null?void 0:p.map((h,j)=>{var L;return e.jsxs("div",{children:[j+1,". ",h.title,h.explanation!==void 0&&e.jsx("div",{children:(L=h.explanation)==null?void 0:L.map((E,R)=>e.jsxs("div",{className:m.div_explanation,children:["- ",E]},`${n.name}_exp_${j}${R}`))})]},`${n.name}_desc_${j}`)})})]},`${n.name}`)})})]},r.company)]})},ve="_div_intro_5frhz_2",xe="_div_textbox_5frhz_16",me="_div_intro_left_text_5frhz_21",pe="_div_intro_info_5frhz_33",ue="_div_contact_img_5frhz_55",he="_div_intro_right_5frhz_72",ge="_button_resume_5frhz_79",g={div_intro:ve,div_textbox:xe,div_intro_left_text:me,div_intro_info:pe,div_contact_img:ue,div_intro_right:he,button_resume:ge},je=({portfolio:t,refList:i,setShowLoading:s})=>{var r,x,d,v;const{getText:c}=b(),o=u.useRef(null),a=async()=>{if(s(!0),o.current===null){alert(`err : ${o.current} = null`),s(!1);return}const n=M(),_=await n.converToImg(o.current);n.converToPdf(_),s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:n=>i[l.main]=n,className:g.div_intro,children:[e.jsx("div",{children:e.jsxs("div",{className:g.div_textbox,children:[e.jsxs("div",{className:g.div_intro_left_text,children:[c("portfolio.greeting"),e.jsx("br",{}),e.jsx("div",{dangerouslySetInnerHTML:{__html:c("portfolio.im",`<strong>${(r=t==null?void 0:t.basicInfo)==null?void 0:r.name}</strong>`)}}),(x=t==null?void 0:t.basicInfo)==null?void 0:x.position]}),e.jsx("br",{}),e.jsxs("div",{className:g.div_intro_info,children:[e.jsxs("div",{children:[e.jsx("img",{src:"/assets/icon/location.svg"}),(d=t==null?void 0:t.basicInfo)==null?void 0:d.location]}),e.jsxs("div",{children:[e.jsx("img",{src:"/assets/icon/bullet.svg"}),(v=t==null?void 0:t.basicInfo)==null?void 0:v.status]})]}),e.jsx("div",{className:g.div_contact_img,children:S.map((n,_)=>e.jsx("img",{src:n.logo,onClick:()=>window.open(n.path)},`contact_${_}`))}),e.jsx("button",{className:g.button_resume,onClick:a,children:c("portfolio.resume")})]})}),e.jsx("div",{className:g.div_intro_right,children:e.jsx("img",{src:"/assets/img/intro/developer.png"})})]}),t&&e.jsx(B,{ref:o,portfolio:t})]})},fe="_div_personal_project_1r0p5_2",be="_div_card_1r0p5_11",ye="_ul_summary_1r0p5_81",ke="_div_project_1r0p5_99",w={div_personal_project:fe,div_card:be,ul_summary:ye,div_project:ke},Ne=({projectList:t=[],refList:i})=>{const{getDate:s}=b();return e.jsx("div",{ref:c=>i[l.project]=c,className:w.div_personal_project,children:t.map(c=>{var o;return e.jsxs("div",{className:w.div_card,style:{"--bg":`url(${c.bg})`},children:[e.jsx("div",{}),e.jsx("h3",{children:c.title}),e.jsxs("div",{children:[e.jsxs("p",{children:[c.startDate," - ",c.endDate," (",s(c.startDate,c.endDate),")"]}),e.jsx("img",{src:"/assets/icon/link.svg",onClick:()=>window.open(c.link)}),e.jsxs("div",{children:[e.jsx("p",{children:c.summary}),e.jsx("ul",{className:w.ul_summary,children:(o=c.desc)==null?void 0:o.map((a,r)=>e.jsx("li",{children:a},`${c.title}_li_${r}`))})]})]})]},c.title)})})},we="_div_overlay_1yb68_1",$e="_img_logo_1yb68_14",Le="_LogoHor_1yb68_1",Te="_div_close_text_1yb68_23",Ce="_div_content_1yb68_33",Ie="_LogoVert_1yb68_1",y={div_overlay:we,img_logo:$e,LogoHor:Le,div_close_text:Te,div_content:Ce,LogoVert:Ie},Pe=({top:t,left:i,model:s,closePopup:c})=>{const{getText:o}=b();return e.jsx(D,{closePopup:c,withStyle:!1,children:e.jsxs("div",{className:y.div_overlay,onClick:c,children:[e.jsx("img",{className:y.img_logo,src:s==null?void 0:s.img,style:{"--top":`${t}px`,"--left":`${i}px`}}),e.jsx("div",{className:y.div_close_text,children:o("portfolio.close_popup")}),e.jsxs("div",{className:y.div_content,children:[e.jsx("h2",{children:s==null?void 0:s.title}),e.jsxs("div",{children:[s==null?void 0:s.desc,(s==null?void 0:s.link)&&e.jsx("img",{src:"/assets/icon/link.svg",onClick:()=>window.open(s==null?void 0:s.link)})]})]})]})})},Se="_div_skill_28m5s_2",De="_div_skill_container_28m5s_18",Ee="_div_skillbox_28m5s_37",$={div_skill:Se,div_skill_container:De,div_skillbox:Ee},Re=({skillList:t=[],refList:i})=>{const[s,c]=u.useState({state:!1}),o=(r,x)=>{const d=r.currentTarget.getBoundingClientRect(),v=d.top,n=d.left;c({state:!0,left:n,top:v,model:x})},a=()=>{c({state:!1})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:r=>i[l.skill]=r,className:$.div_skill,children:e.jsx("div",{children:t.map(r=>{var x;return e.jsxs("div",{className:$.div_skill_container,children:[e.jsx("p",{children:r.title}),(x=r.list)==null?void 0:x.map(d=>e.jsxs("div",{className:$.div_skillbox,children:[e.jsx("div",{onClick:v=>o(v,d),children:e.jsx("img",{src:d.img})}),d.title]},d.title))]},r.title)})})}),s.state&&e.jsx(Pe,{...s,closePopup:a})]})},ze="_div_portfolio_o4mst_1",Fe={div_portfolio:ze},We=()=>{var n;const{toggleLang:t,portfolio:i,langCode:s,showLoading:c,setShowLoading:o}=q(),{refList:a,moveTo:r,onScroll:x,activeIdx:d,shadow:v}=Q();return e.jsxs("div",{className:Fe.div_portfolio,onScroll:x,children:[e.jsx(J,{langCode:s,toggleLang:t,moveTo:r,activeIdx:d,shadow:v}),e.jsx(je,{refList:a,portfolio:i,setShowLoading:o}),e.jsx(Re,{refList:a,skillList:i==null?void 0:i.skillList}),e.jsx(_e,{refList:a,experienceList:i==null?void 0:i.experienceList}),e.jsx(Ne,{refList:a,projectList:i==null?void 0:i.projectList}),e.jsx(Z,{refList:a,etcInfoList:(n=i==null?void 0:i.basicInfo)==null?void 0:n.etcInfoList}),e.jsx(G,{}),c&&e.jsx(D,{withStyle:!1,children:e.jsx(K,{})})]})};export{We as default};
