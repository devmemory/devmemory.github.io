var q=Object.defineProperty;var K=(t,r,s)=>r in t?q(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;var I=(t,r,s)=>(K(t,typeof r!="symbol"?r+"":r,s),s);import{j as e,r as g,d as E}from"./index-K0NOQQad.js";import{a as U,b as H,c as k,V as h,d as a,T as j,I as S,L as O,F as X,D as Y,P as J,p as Q}from"./box.module-4sN9y0r2.js";import{C as F,A as M,b as Z,P as u,I as P,L as ee}from"./aos-my47RYQH.js";import{u as N}from"./useLocaleValue-6D4V0cD7.js";import{A as se,P as z}from"./index-w4R--zAf.js";import{c as G}from"./commonUtil-D3m6W2nw.js";const te=()=>e.jsxs("footer",{className:U.footer,children:[e.jsx("p",{children:"Devmemory"}),e.jsx("div",{children:F.map((t,r)=>e.jsx("div",{className:U.div_circle,children:e.jsx("img",{src:t.logo,onClick:()=>window.open(t.path)})},`footer_btn_${r}`))})]}),ne=()=>e.jsx("div",{className:H.div_white_bg,children:e.jsx("div",{className:H.div_loading})});class ie extends se{constructor(s){super();I(this,"lang");this.lang=s}async getBasicInfo(){return(await super.get(`/assets/data/${this.lang}/basic.json`)).data}async getSkill(){return(await super.get(`/assets/data/${this.lang}/skill.json`)).data}async getExperience(){return(await super.get(`/assets/data/${this.lang}/experience.json`)).data}async getProject(){return(await super.get(`/assets/data/${this.lang}/project.json`)).data}}const re=()=>{const{langCode:t}=N(),[r,s]=g.useState(),[n,m]=g.useState(!1);g.useEffect(()=>(r!==void 0&&M.init(),()=>{M.refresh()}),[r]),g.useEffect(()=>{o(t)},[t]);const o=async l=>{m(!0);try{const _=new ie(l),v=await _.getBasicInfo(),c=await _.getSkill(),i=await _.getExperience(),d=await _.getProject();s({basicInfo:v,skillList:c,experienceList:i,projectList:d})}catch{}finally{m(!1)}};return{portfolio:r,langCode:t,showLoading:n}},oe=({langCode:t,activeIdx:r,shadow:s,moveTo:n})=>{const{getText:m,toggleLang:o}=N(),l=m("portfolio.nav");return e.jsxs("header",{className:s?`${k.head_nav} ${k.nav_shadow}`:k.head_nav,children:[l.map((_,v)=>e.jsx("button",{className:r===v?`${k.btn_nav} ${k.active_nav}`:k.btn_nav,onClick:()=>n(v),children:_},`btn_${_}`)),e.jsx("button",{onClick:o,children:t.toUpperCase()})]})},A={calendar:"/assets/icon/grey/calendar.png",bullet:"/assets/icon/grey/bullet.png"},ce=({basicInfo:t,skillList:r,skill:s})=>{var m;const n=o=>(o!=null&&o.includes("(")?o=o.replace("(",`
(`):o!=null&&o.includes("of")&&(o=o.replace("of",`of
`)),o);return e.jsxs(h,{style:a.additional,children:[(m=t==null?void 0:t.etcInfoList)==null?void 0:m.map(o=>e.jsxs(h,{style:a.etcInfo,children:[e.jsx(j,{style:a.addTitle,children:o.title}),e.jsx(j,{style:a.addSub,children:n(o.name)}),e.jsxs(h,{style:a.row,children:[e.jsx(S,{src:A.bullet,style:a.icon}),e.jsx(j,{style:a.addDesc,children:n(o.summary)})]}),e.jsxs(h,{style:a.row,children:[e.jsx(S,{src:A.calendar,style:a.icon}),e.jsx(j,{style:a.addDesc,children:n(o.date)})]})]},o.title)),e.jsx(j,{style:a.addTitle,children:s}),r==null?void 0:r.map(o=>{var l;return e.jsxs(h,{style:a.marginBottom,children:[e.jsx(j,{style:a.skillDiv,children:o.title}),(l=o.list)==null?void 0:l.map(_=>e.jsxs(j,{style:a.skill,children:["- ",_.title]},_.title))]},o.title)})]})},ae=({name:t,basicInfo:r})=>e.jsxs(h,{style:a.basic,children:[e.jsx(j,{style:a.name,children:t}),e.jsx(j,{style:a.position,children:r==null?void 0:r.position}),e.jsx(j,{children:"Contact"}),e.jsx(j,{style:a.email,children:r==null?void 0:r.email}),e.jsx(h,{style:a.row,children:F.map((s,n)=>e.jsx(O,{src:s.path,style:a.iconLink,children:e.jsx(S,{src:G.setGrey(s.logo),style:a.icon})},`contact_${n}`))})]}),le=({about:t,basicInfo:r})=>{var s;return e.jsxs(h,{style:a.marginBottom,children:[e.jsx(j,{style:a.bigTitle,children:t}),(s=r==null?void 0:r.about)==null?void 0:s.map((n,m)=>{var o;return e.jsxs(h,{style:n.gap?a.marginBottom:void 0,children:[e.jsx(j,{style:a.about,children:n.text}),(o=n.linkList)==null?void 0:o.map((l,_)=>e.jsxs(O,{src:l,style:a.linkDark,children:[">"," ",l]},`about_${m}_${_}`))]},`about_${m}`)})]})},de=({experience:t,experienceList:r,getDate:s})=>e.jsxs(h,{style:a.marginBottom,children:[e.jsx(j,{style:a.bigTitle,children:t}),r==null?void 0:r.map(n=>{var m;return e.jsxs(h,{style:a.marginBottom,children:[e.jsx(j,{style:a.infoTitle,children:n.company}),e.jsx(j,{style:a.summary,children:n.bm}),e.jsx(j,{style:a.expPos,children:n.position}),e.jsxs(h,{style:a.row,children:[e.jsx(S,{src:A.calendar,style:a.icon}),e.jsx(j,{style:a.date,children:`${n.startDate} ~ ${n.endDate} (${s(n.startDate,n.endDate)})`})]}),(m=n.summary)==null?void 0:m.map((o,l)=>e.jsxs(j,{style:a.expText,children:["- ",o]},`${n.company}_${l}`))]},n.company)})]}),_e=({project:t,projectList:r,getDate:s})=>e.jsxs(h,{children:[e.jsx(j,{style:a.bigTitle,children:t}),r==null?void 0:r.map(n=>e.jsxs(h,{style:a.marginBottom,children:[e.jsx(j,{style:a.infoTitle,children:n.title}),e.jsx(j,{style:a.summary,children:n.summary}),e.jsxs(h,{style:a.row,children:[e.jsx(S,{src:A.calendar,style:a.icon}),e.jsx(j,{style:a.date,children:`${n.startDate} ~ ${n.endDate} (${s(n.startDate,n.endDate)})`})]}),e.jsxs(O,{style:a.linkDark,src:n.link,children:[">"," ",n.link]})]},n.title))]}),xe="/assets/font/NotoSans-Bold.woff2",me="/assets/font/NotoSans-Regular.woff2",ve=({portfolio:t,getDate:r,getText:s})=>{const n={skill:s("resume.skill"),about:s("resume.about"),experience:s("resume.experience"),project:s("resume.project"),name:s("resume.name")};return X.register({family:Z.notoSans,fonts:[{src:me,fontWeight:"normal"},{src:xe,fontWeight:"bold"}]}),e.jsx(Y,{children:e.jsxs(J,{size:"A4",style:a.page,children:[e.jsxs(h,{style:a.left,children:[e.jsx(ae,{name:n.name,basicInfo:t.basicInfo}),e.jsx(ce,{basicInfo:t.basicInfo,skillList:t.skillList,skill:n.skill})]}),e.jsxs(h,{style:a.right,children:[e.jsx(le,{about:n.about,basicInfo:t.basicInfo}),e.jsx(de,{experience:n.experience,experienceList:t.experienceList,getDate:r}),e.jsx(_e,{project:n.project,projectList:t.projectList,getDate:r})]})]})})},ue=()=>{const t=g.useRef([]),[r,s]=g.useState(0),[n,m]=g.useState(!1),o=g.useRef(!1);g.useEffect(()=>(window.addEventListener("scroll",_),()=>{window.removeEventListener("scroll",_)}),[r]);const l=v=>{t.current[v].scrollIntoView({behavior:"smooth"})},_=v=>{if(t.current.length<Object.keys(u).length||o.current)return;o.current=!0,G.delay(50).then(()=>{o.current=!1});const c=20,i=v.currentTarget.scrollY+c,d=t.current,x=d[u.project].offsetTop+d[u.project].scrollHeight/2-150;i<d[u.skill].offsetTop&&r!==u.main?(n&&m(!1),s(u.main)):i>=d[u.skill].offsetTop&&i<d[u.experience].offsetTop&&r!==u.skill?(n||m(!0),s(u.skill)):i>=d[u.experience].offsetTop&&i<d[u.project].offsetTop&&r!==u.experience?s(u.experience):i>=d[u.project].offsetTop&&i<x&&r!==u.project?s(u.project):i>=x&&r!==u.etc&&s(u.etc)};return{refList:t.current,moveTo:l,activeIdx:r,shadow:n}},je="_section_education_r8akb_2",pe="_div_name_r8akb_17",V={section_education:je,div_name:pe},he=({etcInfoList:t,refList:r})=>e.jsx("section",{ref:s=>r[u.etc]=s,className:V.section_education,children:t==null?void 0:t.map(s=>e.jsxs("article",{"data-aos":"flip-up",children:[e.jsx("h2",{children:s.title}),e.jsxs("div",{children:[e.jsxs("div",{className:V.div_name,children:[e.jsx("strong",{children:s.name}),e.jsx("img",{src:"/assets/icon/link.svg",onClick:()=>window.open(s.link)})]}),e.jsx("p",{children:s.date})]}),e.jsx("p",{children:s.summary})]},s.title))}),fe="_section_experience_1gl93_2",ge="_div_company_circle_1gl93_22",ye="_div_selected_1gl93_39",we="_div_exp_time_1gl93_58",ke="_div_project_icon_1gl93_63",be="_article_project_1gl93_79",Ne="_div_project_info_1gl93_85",$e="_div_env_1gl93_90",Le="_div_desc_1gl93_105",Te="_div_explanation_1gl93_124",Ee="_div_divider_1gl93_131",f={section_experience:fe,div_company_circle:ge,div_selected:ye,div_exp_time:we,div_project_icon:ke,article_project:be,div_project_info:Ne,div_env:$e,div_desc:Le,div_explanation:Te,div_divider:Ee},Se=({experienceList:t=[],refList:r})=>{var v,c;const{getText:s,getDate:n}=N(),[m,o]=g.useState(0);let l=t[m];const _=i=>{switch(i){case P.web:return"/assets/icon/web.svg";case P.android:return"/assets/icon/playstore.svg";case P.ios:return"/assets/icon/appstore.svg"}};return l===void 0?e.jsx("div",{}):e.jsxs("section",{ref:i=>r[u.experience]=i,className:f.section_experience,children:[e.jsx("div",{"data-aos":"fade-up",children:t.map((i,d)=>{var x;return e.jsxs("div",{className:f.div_company_circle,title:i.company,style:{backgroundColor:i.pointColor},onClick:()=>o(d),children:[(x=i.company)==null?void 0:x.charAt(0),m===d&&e.jsx("div",{className:f.div_selected})]},`logo_${d}`)})}),e.jsxs("div",{"data-aos":"fade-up",children:[e.jsx("h2",{children:l.company}),e.jsxs("div",{className:f.div_exp_time,children:[s("portfolio.employment_period")," : ",l.startDate," -"," ",l.endDate," (",n(l.startDate,l.endDate),")"]}),e.jsx("div",{className:f.div_project_icon,children:(v=l.linkList)==null?void 0:v.map((i,d)=>e.jsx("img",{src:_(i.icon),onClick:()=>window.open(i.link)},`${l.company}_${d}`))}),e.jsx("div",{className:f.div_divider}),e.jsx("div",{children:(c=l.projects)==null?void 0:c.map(i=>{var d,x;return e.jsxs("article",{className:f.article_project,"data-aos":"fade-up",children:[e.jsxs("div",{children:[e.jsx("h3",{children:i.name}),e.jsx("p",{children:i.summary}),e.jsxs("div",{className:f.div_project_info,children:[s("portfolio.team_member")," : ",i.member,e.jsx("br",{}),s("portfolio.my_position")," : ",i.position]}),i.period!==void 0&&e.jsxs("p",{children:[s("portfolio.project_period")," : ",i.period]}),e.jsxs("div",{className:f.div_env,children:[e.jsx("p",{children:s("portfolio.dev_env")}),(d=i.environment)==null?void 0:d.map((p,y)=>e.jsxs("div",{children:["- ",p]},`${i.name}_env_${y}`))]})]}),e.jsx("div",{className:f.div_divider}),e.jsx("div",{className:f.div_desc,children:(x=i.descList)==null?void 0:x.map((p,y)=>{var $;return e.jsxs("div",{children:[y+1,". ",p.title,p.explanation!==void 0&&e.jsx("div",{children:($=p.explanation)==null?void 0:$.map((L,D)=>e.jsxs("div",{className:f.div_explanation,children:["- ",L]},`${i.name}_exp_${y}${D}`))})]},`${i.name}_desc_${y}`)})})]},`${i.name}`)})})]},l.company)]})};var W={exports:{}};(function(t,r){(function(s,n){n()})(E,function(){function s(c,i){return typeof i>"u"?i={autoBom:!1}:typeof i!="object"&&(i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function n(c,i,d){var x=new XMLHttpRequest;x.open("GET",c),x.responseType="blob",x.onload=function(){v(x.response,i,d)},x.onerror=function(){},x.send()}function m(c){var i=new XMLHttpRequest;i.open("HEAD",c,!1);try{i.send()}catch{}return 200<=i.status&&299>=i.status}function o(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(i)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof E=="object"&&E.global===E?E:void 0,_=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!_?function(c,i,d){var x=l.URL||l.webkitURL,p=document.createElement("a");i=i||c.name||"download",p.download=i,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?o(p):m(p.href)?n(c,i,d):o(p,p.target="_blank")):(p.href=x.createObjectURL(c),setTimeout(function(){x.revokeObjectURL(p.href)},4e4),setTimeout(function(){o(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,i,d){if(i=i||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(s(c,d),i);else if(m(c))n(c,i,d);else{var x=document.createElement("a");x.href=c,x.target="_blank",setTimeout(function(){o(x)})}}:function(c,i,d,x){if(x=x||open("","_blank"),x&&(x.document.title=x.document.body.innerText="downloading..."),typeof c=="string")return n(c,i,d);var p=c.type==="application/octet-stream",y=/constructor/i.test(l.HTMLElement)||l.safari,$=/CriOS\/[\d]+/.test(navigator.userAgent);if(($||p&&y||_)&&typeof FileReader<"u"){var L=new FileReader;L.onloadend=function(){var T=L.result;T=$?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),x?x.location.href=T:location=T,x=null},L.readAsDataURL(c)}else{var D=l.URL||l.webkitURL,R=D.createObjectURL(c);x?x.location=R:location.href=R,x=null,setTimeout(function(){D.revokeObjectURL(R)},4e4)}});l.saveAs=v.saveAs=v,t.exports=v})})(W);var De=W.exports;const Ce="_section_intro_3dje4_2",Ae="_div_intro_left_3dje4_16",Re="_div_intro_text_3dje4_21",Pe="_div_intro_info_3dje4_33",Be="_div_contact_img_3dje4_55",Oe="_div_intro_right_3dje4_72",Fe="_button_resume_3dje4_79",Ie="_div_textbox_3dje4_94",w={section_intro:Ce,div_intro_left:Ae,div_intro_text:Re,div_intro_info:Pe,div_contact_img:Be,div_intro_right:Oe,button_resume:Fe,div_textbox:Ie},Ue=({portfolio:t,refList:r})=>{var l,_,v,c;const{getText:s,getDate:n,langCode:m}=N(),o=async()=>{const i=await Q(e.jsx(ve,{portfolio:t,getText:s,getDate:n})).toBlob(),d=m===ee.kr?"이력서_김동화.pdf":"Resume_Kim_Dong_Hwa.pdf";De.saveAs(i,d)};return e.jsxs("section",{ref:i=>r[u.main]=i,className:w.section_intro,children:[e.jsx("div",{className:w.div_intro_left,"data-aos":"fade-left",children:e.jsxs("div",{children:[e.jsxs("div",{className:w.div_intro_text,children:[s("portfolio.greeting"),e.jsx("br",{}),e.jsx("div",{dangerouslySetInnerHTML:{__html:s("portfolio.im",`<strong>${((l=t==null?void 0:t.basicInfo)==null?void 0:l.name)??""}</strong>`)}}),(_=t==null?void 0:t.basicInfo)==null?void 0:_.position]}),e.jsx("br",{}),e.jsxs("div",{className:w.div_intro_info,children:[e.jsxs("div",{children:[e.jsx("img",{src:"/assets/icon/location.svg"}),(v=t==null?void 0:t.basicInfo)==null?void 0:v.location]}),e.jsxs("div",{children:[e.jsx("img",{src:"/assets/icon/bullet.svg"}),(c=t==null?void 0:t.basicInfo)==null?void 0:c.status]})]}),e.jsx("div",{className:w.div_contact_img,children:F.map((i,d)=>e.jsx("img",{src:i.logo,onClick:()=>window.open(i.path)},`contact_${d}`))}),e.jsx("button",{className:w.button_resume,onClick:o,children:s("portfolio.resume")})]})}),e.jsx("div",{className:w.div_intro_right,"data-aos":"fade-right",children:e.jsx("img",{src:"/assets/img/intro/developer.png"})})]})},He="_section_personal_project_xzw0j_2",Me="_article_card_xzw0j_10",Ve="_p_date_xzw0j_73",ze="_div_link_xzw0j_78",Ge="_div_desc_xzw0j_96",We="_ul_summary_xzw0j_100",b={section_personal_project:He,article_card:Me,p_date:Ve,div_link:ze,div_desc:Ge,ul_summary:We},qe=({projectList:t=[],refList:r})=>{const{getDate:s}=N();return e.jsx("section",{ref:n=>r[u.project]=n,className:b.section_personal_project,children:t.map(n=>{var m;return e.jsxs("article",{className:b.article_card,style:{"--bg":`url(${n.bg})`},children:[e.jsx("div",{}),e.jsx("h2",{children:n.title}),e.jsxs("div",{children:[e.jsx("h3",{children:n.summary}),e.jsxs("p",{className:b.p_date,children:[n.startDate," - ",n.endDate," (",s(n.startDate,n.endDate),")"]}),e.jsxs("div",{className:b.div_desc,children:[e.jsxs("div",{className:b.div_link,title:n.link,onClick:()=>window.open(n.link),children:[e.jsx("img",{src:"/assets/icon/link.svg"}),e.jsx("p",{children:n.link})]}),e.jsx("ul",{className:b.ul_summary,children:(m=n.desc)==null?void 0:m.map((o,l)=>e.jsx("li",{children:o},`${n.title}_li_${l}`))})]})]})]},n.title)})})},Ke="_div_overlay_5ryt3_1",Xe="_img_logo_5ryt3_14",Ye="_LogoHor_5ryt3_1",Je="_div_close_text_5ryt3_23",Qe="_div_content_5ryt3_33",Ze="_LogoVert_5ryt3_1",C={div_overlay:Ke,img_logo:Xe,LogoHor:Ye,div_close_text:Je,div_content:Qe,LogoVert:Ze},es=({top:t,left:r,model:s,closePopup:n})=>{const{getText:m}=N();return e.jsx(z,{closePopup:n,withStyle:!1,children:e.jsxs("div",{className:C.div_overlay,onClick:n,children:[e.jsx("img",{className:C.img_logo,src:s==null?void 0:s.img,style:{"--top":`${t}px`,"--left":`${r}px`}}),e.jsx("div",{className:C.div_close_text,children:m("portfolio.close_popup")}),e.jsxs("div",{className:C.div_content,children:[e.jsx("h2",{children:s==null?void 0:s.title}),e.jsxs("div",{children:[s==null?void 0:s.desc,(s==null?void 0:s.link)&&e.jsx("img",{src:"/assets/icon/link.svg",onClick:()=>window.open(s==null?void 0:s.link)})]})]})]})})},ss="_section_skill_1alcd_2",ts="_div_skill_container_1alcd_18",ns="_div_skillbox_1alcd_37",B={section_skill:ss,div_skill_container:ts,div_skillbox:ns},is=({skillList:t=[],refList:r})=>{const[s,n]=g.useState({state:!1}),m=(_,v)=>{const c=_.currentTarget.getBoundingClientRect(),i=c.top,d=c.left;n({state:!0,left:d,top:i,model:v})},o=()=>{n({state:!1})},l=(_,v)=>_<(v??0)/2?"fade-left":"fade-right";return e.jsxs(e.Fragment,{children:[e.jsx("section",{ref:_=>r[u.skill]=_,className:B.section_skill,children:e.jsx("div",{children:t.map(_=>{var v;return e.jsxs("div",{className:B.div_skill_container,"data-aos":"fade-up",children:[e.jsx("p",{children:_.title}),(v=_.list)==null?void 0:v.map((c,i)=>{var d;return e.jsxs("div",{className:B.div_skillbox,"data-aos":l(i,(d=_.list)==null?void 0:d.length),children:[e.jsx("div",{onClick:x=>m(x,c),children:e.jsx("img",{src:c.img})}),c.title]},c.title)})]},_.title)})})}),s.state&&e.jsx(es,{...s,closePopup:o})]})},rs="_main_portfolio_15emb_1",os={main_portfolio:rs},vs=()=>{var _;const{portfolio:t,langCode:r,showLoading:s}=re(),{refList:n,moveTo:m,activeIdx:o,shadow:l}=ue();return e.jsxs("main",{className:os.main_portfolio,children:[e.jsx(oe,{langCode:r,moveTo:m,activeIdx:o,shadow:l}),e.jsx(Ue,{refList:n,portfolio:t}),e.jsx(is,{refList:n,skillList:t==null?void 0:t.skillList}),e.jsx(Se,{refList:n,experienceList:t==null?void 0:t.experienceList}),e.jsx(qe,{refList:n,projectList:t==null?void 0:t.projectList}),e.jsx(he,{refList:n,etcInfoList:(_=t==null?void 0:t.basicInfo)==null?void 0:_.etcInfoList}),e.jsx(te,{}),s&&e.jsx(z,{withStyle:!1,children:e.jsx(ne,{})})]})};export{vs as default};
