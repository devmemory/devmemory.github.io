import{r as u}from"./index-68f92230.js";import{a as $,L as c}from"./box.module-bec8103d.js";const w={toHome:"Move to Main",toPortfolio:"Check CV",close:"Close",selectAnswer:"Select the answer",answer:"Answer",answerList:["Yes","No"]},_={greeting:"Hello",im:"I'm {}",resume:"View Resume",nav:["Main","Skill","Experience","Project","ETC"],employment_period:"Employment period",team_member:"Team members",my_position:"My position",dev_env:"Development environtment",project_period:"Project period",close_popup:"Click anywhere to close"},y={name:"Kim Dong Hwa",skill:"Skill",about:"About me",experience:"Work Experience",project:"Project",used_skill:"Skills"},h={question:w,portfolio:_,resume:y},v={toHome:"홈으로 이동",toPortfolio:"이력서로 이동",close:"닫기",selectAnswer:"위 항목중 선택해주세요",answer:"선택하기",answerList:["네","아니요"]},j={greeting:"안녕하세요",im:"저는 {} 입니다",resume:"이력서 보기",nav:["메인","기술","경력사항","개인 프로젝트","기타"],employment_period:"재직기간",team_member:"팀구성",my_position:"역할",dev_env:"개발환경",project_period:"작업기간",close_popup:"아무곳이나 눌러서 닫기"},x={name:"김동화",skill:"보유 기술",about:"핵심 역량",experience:"경력 사항",project:"개인 프로젝트",used_skill:"사용 기술"},b={question:v,portfolio:j,resume:x},C={kr:b,en:h},L=()=>{const{langCode:n,setLocale:f}=$(),d=()=>{const s=n===c.en?c.kr:c.en;f(s)},g=u.useCallback((s,r)=>{const i=C[n],l=s.split(".");let o=i;return l.forEach(e=>{o=o[e]}),o===void 0?`Missing text json : ${s}`:r===void 0?o:o.replace("{}",r)},[n]),k=u.useCallback((s,r)=>{const i=new Date(s),l=r==="Now"?new Date:new Date(r),o=l.getMonth()-i.getMonth()+12*(l.getFullYear()-i.getFullYear())+1,e=Math.floor(o/12),t=o%12,a=n===c.kr;if(e===0)return a?`${t}개월`:t===1?`${t} month`:`${t} months`;{if(t===0)return a?`${e}년`:e===1?`${e} year`:`${e} years`;if(a)return`${e}년 ${t}개월`;let m=`${e} year`,p=`${t} month`;return e>1&&(m+="s"),t>1&&(p+="s"),`${m} ${p}`}},[n]);return{getText:g,getDate:k,langCode:n,toggleLang:d}};export{L as u};
