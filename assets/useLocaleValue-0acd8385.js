import{a as u}from"./box.module-9f32fae9.js";import{L as p}from"./api-6e52aa13.js";const f={toHome:"Move to Main",toPortfolio:"Check CV",close:"Close",selectAnswer:"Select the answer",answer:"Answer",answerList:["Yes","No"]},$={nav:["Main","Skill","Experience","Project","ETC"],employment_period:"Employment period",team_member:"Team members",dev_env:"Development environtment",project_period:"Project period"},d={question:f,portfolio:$},w={toHome:"홈으로 이동",toPortfolio:"이력서로 이동",close:"닫기",selectAnswer:"위 항목중 선택해주세요",answer:"선택하기",answerList:["네","아니요"]},g={nav:["메인","기술","경력사항","개인 프로젝트","기타"],employment_period:"재직기간",team_member:"팀구성",dev_env:"개발환경",project_period:"작업기간"},h={question:w,portfolio:g},D=()=>{const i=u(o=>o.langCode);return{getText:o=>{const r=i===p.kr?h:d,n=o.split(".");return r[n[0]][n[1]]},getDate:(o,r)=>{const n=new Date(o),s=r==="Now"?new Date:new Date(r),c=s.getMonth()-n.getMonth()+12*(s.getFullYear()-n.getFullYear())+1,e=Math.floor(c/12),t=c%12,a=i===p.kr;if(e===0)return a?`${t}개월`:t===1?`${t} month`:`${t} months`;{if(t===0)return a?`${e}년`:e===1?`${e} year`:`${e} years`;if(a)return`${e}년 ${t}개월`;let l=`${e} year`,m=`${t} month`;return e>1&&(l+="s"),t>1&&(m+="s"),`${l} ${m}`}}}};export{D as u};
