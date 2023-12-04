var q=Object.defineProperty;var K=(s,c,t)=>c in s?q(s,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[c]=t;var U=(s,c,t)=>(K(s,typeof c!="symbol"?c+"":c,t),t);import{j as e,r as f,d as S}from"./index-0_R2kaBR.js";import{a as M,b as H,c as k,V as h,d as a,T as p,I as E,L as O,F as X,D as Y,P as J,p as Q}from"./box.module-N6jLVvJh.js";import{C as F,A as V,b as Z,P as j,I as P,L as ee}from"./aos-NFort6hh.js";import{u as N}from"./useLocaleValue-F4yOZopS.js";import{A as se,P as I}from"./index-ZUs7T3Dv.js";import{c as G}from"./commonUtil-oI8t_6q-.js";import{C as te}from"./index-vKp1WN5A.js";const ne=()=>e.jsxs("footer",{className:M.footer,children:[e.jsx("p",{children:"Devmemory"}),e.jsx("div",{children:F.map((s,c)=>e.jsx("div",{className:M.div_circle,children:e.jsx("img",{src:s.logo,onClick:()=>window.open(s.path)})},`footer_btn_${c}`))})]}),ie=()=>e.jsx("div",{className:H.div_white_bg,children:e.jsx("div",{className:H.div_loading})});class ce extends se{constructor(t){super();U(this,"lang");this.lang=t}async getBasicInfo(){return(await super.get(`/assets/data/${this.lang}/basic.json`)).data}async getSkill(){return(await super.get(`/assets/data/${this.lang}/skill.json`)).data}async getExperience(){return(await super.get(`/assets/data/${this.lang}/experience.json`)).data}async getProject(){return(await super.get(`/assets/data/${this.lang}/project.json`)).data}}const re=()=>{const{langCode:s}=N(),[c,t]=f.useState(),[n,m]=f.useState(!1);f.useEffect(()=>(c!==void 0&&V.init(),()=>{V.refresh()}),[c]),f.useEffect(()=>{r(s)},[s]);const r=async l=>{m(!0);try{const x=new ce(l),u=await x.getBasicInfo(),o=await x.getSkill(),i=await x.getExperience(),_=await x.getProject();t({basicInfo:u,skillList:o,experienceList:i,projectList:_})}catch{}finally{m(!1)}};return{portfolio:c,langCode:s,showLoading:n}},oe=({langCode:s,activeIdx:c,shadow:t,moveTo:n})=>{const{getText:m,toggleLang:r}=N(),l=m("portfolio.nav");return e.jsxs("header",{className:t?`${k.head_nav} ${k.nav_shadow}`:k.head_nav,children:[l.map((x,u)=>e.jsx("button",{className:c===u?`${k.btn_nav} ${k.active_nav}`:k.btn_nav,onClick:()=>n(u),children:x},`btn_${x}`)),e.jsx("button",{onClick:r,children:s.toUpperCase()})]})},A={calendar:"/assets/icon/grey/calendar.png",bullet:"/assets/icon/grey/bullet.png"},ae=({basicInfo:s,skillList:c,skill:t})=>{var m;const n=r=>(r!=null&&r.includes("(")?r=r.replace("(",`
(`):r!=null&&r.includes("of")&&(r=r.replace("of",`of
`)),r);return e.jsxs(h,{style:a.additional,children:[(m=s==null?void 0:s.etcInfoList)==null?void 0:m.map(r=>e.jsxs(h,{style:a.etcInfo,children:[e.jsx(p,{style:a.addTitle,children:r.title}),e.jsx(p,{style:a.addSub,children:n(r.name)}),e.jsxs(h,{style:a.row,children:[e.jsx(E,{src:A.bullet,style:a.icon}),e.jsx(p,{style:a.addDesc,children:n(r.summary)})]}),e.jsxs(h,{style:a.row,children:[e.jsx(E,{src:A.calendar,style:a.icon}),e.jsx(p,{style:a.addDesc,children:n(r.date)})]})]},r.title)),e.jsx(p,{style:a.addTitle,children:t}),c==null?void 0:c.map(r=>{var l;return e.jsxs(h,{style:a.marginBottom,children:[e.jsx(p,{style:a.skillDiv,children:r.title}),(l=r.list)==null?void 0:l.map(x=>e.jsxs(p,{style:a.skill,children:["- ",x.title]},x.title))]},r.title)})]})},le=({name:s,basicInfo:c})=>e.jsxs(h,{style:a.basic,children:[e.jsx(p,{style:a.name,children:s}),e.jsx(p,{style:a.position,children:c==null?void 0:c.position}),e.jsx(p,{children:"Contact"}),e.jsx(p,{style:a.email,children:c==null?void 0:c.email}),e.jsx(h,{style:a.row,children:F.map((t,n)=>e.jsx(O,{src:t.path,style:a.iconLink,children:e.jsx(E,{src:G.setGrey(t.logo),style:a.icon})},`contact_${n}`))})]}),de=({about:s,basicInfo:c})=>{var t;return e.jsxs(h,{style:a.marginBottom,children:[e.jsx(p,{style:a.bigTitle,children:s}),(t=c==null?void 0:c.about)==null?void 0:t.map((n,m)=>{var r;return e.jsxs(h,{style:n.gap?a.marginBottom:void 0,children:[e.jsx(p,{style:a.about,children:n.text}),(r=n.linkList)==null?void 0:r.map((l,x)=>e.jsxs(O,{src:l,style:a.linkDark,children:[">"," ",l]},`about_${m}_${x}`))]},`about_${m}`)})]})},_e=({experience:s,experienceList:c,getDate:t})=>e.jsxs(h,{style:a.marginBottom,children:[e.jsx(p,{style:a.bigTitle,children:s}),c==null?void 0:c.map(n=>{var m;return e.jsxs(h,{style:a.marginBottom,children:[e.jsx(p,{style:a.infoTitle,children:n.company}),e.jsx(p,{style:a.summary,children:n.bm}),e.jsx(p,{style:a.expPos,children:n.position}),e.jsxs(h,{style:a.row,children:[e.jsx(E,{src:A.calendar,style:a.icon}),e.jsx(p,{style:a.date,children:`${n.startDate} ~ ${n.endDate} (${t(n.startDate,n.endDate)})`})]}),(m=n.summary)==null?void 0:m.map((r,l)=>e.jsxs(p,{style:a.expText,children:["- ",r]},`${n.company}_${l}`))]},n.company)})]}),xe=({project:s,projectList:c,getDate:t})=>e.jsxs(h,{children:[e.jsx(p,{style:a.bigTitle,children:s}),c==null?void 0:c.map(n=>e.jsxs(h,{style:a.marginBottom,children:[e.jsx(p,{style:a.infoTitle,children:n.title}),e.jsx(p,{style:a.summary,children:n.summary}),e.jsxs(h,{style:a.row,children:[e.jsx(E,{src:A.calendar,style:a.icon}),e.jsx(p,{style:a.date,children:`${n.startDate} ~ ${n.endDate} (${t(n.startDate,n.endDate)})`})]}),e.jsxs(O,{style:a.linkDark,src:n.link,children:[">"," ",n.link]})]},n.title))]}),me="/assets/font/NotoSans-Bold.woff2",ue="/assets/font/NotoSans-Regular.woff2",ve=({portfolio:s,getDate:c,getText:t})=>{const n={skill:t("resume.skill"),about:t("resume.about"),experience:t("resume.experience"),project:t("resume.project"),name:t("resume.name")};return X.register({family:Z.notoSans,fonts:[{src:ue,fontWeight:"normal"},{src:me,fontWeight:"bold"}]}),e.jsx(Y,{children:e.jsxs(J,{size:"A4",style:a.page,children:[e.jsxs(h,{style:a.left,children:[e.jsx(le,{name:n.name,basicInfo:s.basicInfo}),e.jsx(ae,{basicInfo:s.basicInfo,skillList:s.skillList,skill:n.skill})]}),e.jsxs(h,{style:a.right,children:[e.jsx(de,{about:n.about,basicInfo:s.basicInfo}),e.jsx(_e,{experience:n.experience,experienceList:s.experienceList,getDate:c}),e.jsx(xe,{project:n.project,projectList:s.projectList,getDate:c})]})]})})},je=()=>{const s=f.useRef([]),[c,t]=f.useState(0),[n,m]=f.useState(!1),r=f.useRef(!1);f.useEffect(()=>(window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}),[c]);const l=u=>{s.current[u].scrollIntoView({behavior:"smooth"})},x=u=>{if(s.current.length<Object.keys(j).length||r.current)return;r.current=!0,G.delay(50).then(()=>{r.current=!1});const o=20,i=u.currentTarget.scrollY+o,_=s.current,d=_[j.project].offsetTop+_[j.project].scrollHeight/2-150;i<_[j.skill].offsetTop&&c!==j.main?(n&&m(!1),t(j.main)):i>=_[j.skill].offsetTop&&i<_[j.experience].offsetTop&&c!==j.skill?(n||m(!0),t(j.skill)):i>=_[j.experience].offsetTop&&i<_[j.project].offsetTop&&c!==j.experience?t(j.experience):i>=_[j.project].offsetTop&&i<d&&c!==j.project?t(j.project):i>=d&&c!==j.etc&&t(j.etc)};return{refList:s.current,moveTo:l,activeIdx:c,shadow:n}},pe="_section_education_r8akb_2",he="_div_name_r8akb_17",z={section_education:pe,div_name:he},ge=({etcInfoList:s,refList:c})=>e.jsx("section",{ref:t=>c[j.etc]=t,className:z.section_education,children:s==null?void 0:s.map(t=>e.jsxs("article",{"data-aos":"flip-up",children:[e.jsx("h2",{children:t.title}),e.jsxs("div",{children:[e.jsxs("div",{className:z.div_name,children:[e.jsx("strong",{children:t.name}),e.jsx("img",{src:"/assets/icon/link.svg",onClick:()=>window.open(t.link)})]}),e.jsx("p",{children:t.date})]}),e.jsx("p",{children:t.summary})]},t.title))}),fe="_section_experience_1gl93_2",ye="_div_company_circle_1gl93_22",we="_div_selected_1gl93_39",ke="_div_exp_time_1gl93_58",be="_div_project_icon_1gl93_63",Ne="_article_project_1gl93_79",$e="_div_project_info_1gl93_85",Le="_div_env_1gl93_90",Te="_div_desc_1gl93_105",Se="_div_explanation_1gl93_124",Ee="_div_divider_1gl93_131",g={section_experience:fe,div_company_circle:ye,div_selected:we,div_exp_time:ke,div_project_icon:be,article_project:Ne,div_project_info:$e,div_env:Le,div_desc:Te,div_explanation:Se,div_divider:Ee},De=({experienceList:s=[],refList:c})=>{var u,o;const{getText:t,getDate:n}=N(),[m,r]=f.useState(0);let l=s[m];const x=i=>{switch(i){case P.web:return"/assets/icon/web.svg";case P.android:return"/assets/icon/playstore.svg";case P.ios:return"/assets/icon/appstore.svg"}};return l===void 0?e.jsx("div",{}):e.jsxs("section",{ref:i=>c[j.experience]=i,className:g.section_experience,children:[e.jsx("div",{"data-aos":"fade-up",children:s.map((i,_)=>{var d;return e.jsxs("div",{className:g.div_company_circle,title:i.company,style:{backgroundColor:i.pointColor},onClick:()=>r(_),children:[(d=i.company)==null?void 0:d.charAt(0),m===_&&e.jsx("div",{className:g.div_selected})]},`logo_${_}`)})}),e.jsxs("div",{"data-aos":"fade-up",children:[e.jsx("h2",{children:l.company}),e.jsxs("div",{className:g.div_exp_time,children:[t("portfolio.employment_period")," : ",l.startDate," -"," ",l.endDate," (",n(l.startDate,l.endDate),")"]}),e.jsx("div",{className:g.div_project_icon,children:(u=l.linkList)==null?void 0:u.map((i,_)=>e.jsx("img",{src:x(i.icon),onClick:()=>window.open(i.link)},`${l.company}_${_}`))}),e.jsx("div",{className:g.div_divider}),e.jsx("div",{children:(o=l.projects)==null?void 0:o.map(i=>{var _,d;return e.jsxs("article",{className:g.article_project,"data-aos":"fade-up",children:[e.jsxs("div",{children:[e.jsx("h3",{children:i.name}),e.jsx("p",{children:i.summary}),e.jsxs("div",{className:g.div_project_info,children:[t("portfolio.team_member")," : ",i.member,e.jsx("br",{}),t("portfolio.my_position")," : ",i.position]}),i.period!==void 0&&e.jsxs("p",{children:[t("portfolio.project_period")," : ",i.period]}),e.jsxs("div",{className:g.div_env,children:[e.jsx("p",{children:t("portfolio.dev_env")}),(_=i.environment)==null?void 0:_.map((v,y)=>e.jsxs("div",{children:["- ",v]},`${i.name}_env_${y}`))]})]}),e.jsx("div",{className:g.div_divider}),e.jsx("div",{className:g.div_desc,children:(d=i.descList)==null?void 0:d.map((v,y)=>{var $;return e.jsxs("div",{children:[y+1,". ",v.title,v.explanation!==void 0&&e.jsx("div",{children:($=v.explanation)==null?void 0:$.map((L,D)=>e.jsxs("div",{className:g.div_explanation,children:["- ",L]},`${i.name}_exp_${y}${D}`))})]},`${i.name}_desc_${y}`)})})]},`${i.name}`)})})]},l.company)]})};var W={exports:{}};(function(s,c){(function(t,n){n()})(S,function(){function t(o,i){return typeof i>"u"?i={autoBom:!1}:typeof i!="object"&&(i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function n(o,i,_){var d=new XMLHttpRequest;d.open("GET",o),d.responseType="blob",d.onload=function(){u(d.response,i,_)},d.onerror=function(){},d.send()}function m(o){var i=new XMLHttpRequest;i.open("HEAD",o,!1);try{i.send()}catch{}return 200<=i.status&&299>=i.status}function r(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(i)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof S=="object"&&S.global===S?S:void 0,x=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(o,i,_){var d=l.URL||l.webkitURL,v=document.createElement("a");i=i||o.name||"download",v.download=i,v.rel="noopener",typeof o=="string"?(v.href=o,v.origin===location.origin?r(v):m(v.href)?n(o,i,_):r(v,v.target="_blank")):(v.href=d.createObjectURL(o),setTimeout(function(){d.revokeObjectURL(v.href)},4e4),setTimeout(function(){r(v)},0))}:"msSaveOrOpenBlob"in navigator?function(o,i,_){if(i=i||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(t(o,_),i);else if(m(o))n(o,i,_);else{var d=document.createElement("a");d.href=o,d.target="_blank",setTimeout(function(){r(d)})}}:function(o,i,_,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof o=="string")return n(o,i,_);var v=o.type==="application/octet-stream",y=/constructor/i.test(l.HTMLElement)||l.safari,$=/CriOS\/[\d]+/.test(navigator.userAgent);if(($||v&&y||x)&&typeof FileReader<"u"){var L=new FileReader;L.onloadend=function(){var T=L.result;T=$?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=T:location=T,d=null},L.readAsDataURL(o)}else{var D=l.URL||l.webkitURL,R=D.createObjectURL(o);d?d.location=R:location.href=R,d=null,setTimeout(function(){D.revokeObjectURL(R)},4e4)}});l.saveAs=u.saveAs=u,s.exports=u})})(W);var Ce=W.exports;const Ae="_section_intro_1xd82_2",Re="_div_intro_left_1xd82_16",Pe="_div_intro_text_1xd82_21",Be="_div_intro_info_1xd82_33",Oe="_div_contact_img_1xd82_68",Fe="_div_intro_right_1xd82_85",Ie="_button_resume_1xd82_92",Ue="_div_textbox_1xd82_107",w={section_intro:Ae,div_intro_left:Re,div_intro_text:Pe,div_intro_info:Be,div_contact_img:Oe,div_intro_right:Fe,button_resume:Ie,div_textbox:Ue},Me=({portfolio:s,refList:c})=>{var u,o,i,_,d;const{getText:t,getDate:n,langCode:m}=N(),[r,l]=f.useState(!1),x=async()=>{const v=await Q(e.jsx(ve,{portfolio:s,getText:t,getDate:n})).toBlob(),y=m===ee.kr?"이력서_김동화.pdf":"Resume_Kim_Dong_Hwa.pdf";Ce.saveAs(v,y)};return e.jsxs(e.Fragment,{children:[e.jsxs("section",{ref:v=>c[j.main]=v,className:w.section_intro,children:[e.jsx("div",{className:w.div_intro_left,"data-aos":"fade-left",children:e.jsxs("div",{children:[e.jsxs("div",{className:w.div_intro_text,children:[t("portfolio.greeting"),e.jsx("br",{}),e.jsx("div",{dangerouslySetInnerHTML:{__html:t("portfolio.im",`<strong>${((u=s==null?void 0:s.basicInfo)==null?void 0:u.name)??""}</strong>`)}}),(o=s==null?void 0:s.basicInfo)==null?void 0:o.position]}),e.jsx("br",{}),e.jsxs("div",{className:w.div_intro_info,children:[e.jsxs("div",{onClick:()=>l(!0),children:[e.jsx("img",{src:"/assets/icon/location.svg"}),(i=s==null?void 0:s.basicInfo)==null?void 0:i.location,e.jsx("img",{src:"/assets/img/intro/map_icon.png"})]}),e.jsxs("div",{children:[e.jsx("img",{src:"/assets/icon/bullet.svg"}),(_=s==null?void 0:s.basicInfo)==null?void 0:_.status]})]}),e.jsx("div",{className:w.div_contact_img,children:F.map((v,y)=>e.jsx("img",{src:v.logo,onClick:()=>window.open(v.path)},`contact_${y}`))}),e.jsx("button",{className:w.button_resume,onClick:x,children:t("portfolio.resume")})]})}),e.jsx("div",{className:w.div_intro_right,"data-aos":"fade-right",children:e.jsx("img",{src:"/assets/img/intro/developer.png"})})]}),r&&e.jsx(I,{closePopup:()=>l(!1),children:e.jsx(te,{latLng:(d=s==null?void 0:s.basicInfo)==null?void 0:d.latLng})})]})},He="_section_personal_project_xzw0j_2",Ve="_article_card_xzw0j_10",ze="_p_date_xzw0j_73",Ge="_div_link_xzw0j_78",We="_div_desc_xzw0j_96",qe="_ul_summary_xzw0j_100",b={section_personal_project:He,article_card:Ve,p_date:ze,div_link:Ge,div_desc:We,ul_summary:qe},Ke=({projectList:s=[],refList:c})=>{const{getDate:t}=N();return e.jsx("section",{ref:n=>c[j.project]=n,className:b.section_personal_project,children:s.map(n=>{var m;return e.jsxs("article",{className:b.article_card,style:{"--bg":`url(${n.bg})`},children:[e.jsx("div",{}),e.jsx("h2",{children:n.title}),e.jsxs("div",{children:[e.jsx("h3",{children:n.summary}),e.jsxs("p",{className:b.p_date,children:[n.startDate," - ",n.endDate," (",t(n.startDate,n.endDate),")"]}),e.jsxs("div",{className:b.div_desc,children:[e.jsxs("div",{className:b.div_link,title:n.link,onClick:()=>window.open(n.link),children:[e.jsx("img",{src:"/assets/icon/link.svg"}),e.jsx("p",{children:n.link})]}),e.jsx("ul",{className:b.ul_summary,children:(m=n.desc)==null?void 0:m.map((r,l)=>e.jsx("li",{children:r},`${n.title}_li_${l}`))})]})]})]},n.title)})})},Xe="_div_overlay_5ryt3_1",Ye="_img_logo_5ryt3_14",Je="_LogoHor_5ryt3_1",Qe="_div_close_text_5ryt3_23",Ze="_div_content_5ryt3_33",es="_LogoVert_5ryt3_1",C={div_overlay:Xe,img_logo:Ye,LogoHor:Je,div_close_text:Qe,div_content:Ze,LogoVert:es},ss=({top:s,left:c,model:t,closePopup:n})=>{const{getText:m}=N();return e.jsx(I,{closePopup:n,withStyle:!1,children:e.jsxs("div",{className:C.div_overlay,onClick:n,children:[e.jsx("img",{className:C.img_logo,src:t==null?void 0:t.img,style:{"--top":`${s}px`,"--left":`${c}px`}}),e.jsx("div",{className:C.div_close_text,children:m("portfolio.close_popup")}),e.jsxs("div",{className:C.div_content,children:[e.jsx("h2",{children:t==null?void 0:t.title}),e.jsxs("div",{children:[t==null?void 0:t.desc,(t==null?void 0:t.link)&&e.jsx("img",{src:"/assets/icon/link.svg",onClick:()=>window.open(t==null?void 0:t.link)})]})]})]})})},ts="_section_skill_1alcd_2",ns="_div_skill_container_1alcd_18",is="_div_skillbox_1alcd_37",B={section_skill:ts,div_skill_container:ns,div_skillbox:is},cs=({skillList:s=[],refList:c})=>{const[t,n]=f.useState({state:!1}),m=(x,u)=>{const o=x.currentTarget.getBoundingClientRect(),i=o.top,_=o.left;n({state:!0,left:_,top:i,model:u})},r=()=>{n({state:!1})},l=(x,u)=>x<(u??0)/2?"fade-left":"fade-right";return e.jsxs(e.Fragment,{children:[e.jsx("section",{ref:x=>c[j.skill]=x,className:B.section_skill,children:e.jsx("div",{children:s.map(x=>{var u;return e.jsxs("div",{className:B.div_skill_container,"data-aos":"fade-up",children:[e.jsx("p",{children:x.title}),(u=x.list)==null?void 0:u.map((o,i)=>{var _;return e.jsxs("div",{className:B.div_skillbox,"data-aos":l(i,(_=x.list)==null?void 0:_.length),children:[e.jsx("div",{onClick:d=>m(d,o),children:e.jsx("img",{src:o.img})}),o.title]},o.title)})]},x.title)})})}),t.state&&e.jsx(ss,{...t,closePopup:r})]})},rs="_main_portfolio_15emb_1",os={main_portfolio:rs},js=()=>{var x;const{portfolio:s,langCode:c,showLoading:t}=re(),{refList:n,moveTo:m,activeIdx:r,shadow:l}=je();return e.jsxs("main",{className:os.main_portfolio,children:[e.jsx(oe,{langCode:c,moveTo:m,activeIdx:r,shadow:l}),e.jsx(Me,{refList:n,portfolio:s}),e.jsx(cs,{refList:n,skillList:s==null?void 0:s.skillList}),e.jsx(De,{refList:n,experienceList:s==null?void 0:s.experienceList}),e.jsx(Ke,{refList:n,projectList:s==null?void 0:s.projectList}),e.jsx(ge,{refList:n,etcInfoList:(x=s==null?void 0:s.basicInfo)==null?void 0:x.etcInfoList}),e.jsx(ne,{}),t&&e.jsx(I,{withStyle:!1,children:e.jsx(ie,{})})]})};export{js as default};
