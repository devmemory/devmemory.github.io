import{r as d,j as c,R as T}from"./index-0_R2kaBR.js";import{c as j,d as S}from"./aos-NFort6hh.js";import{c as _}from"./commonUtil-oI8t_6q-.js";const w=(e,r)=>{const f=d.useRef(null),p=d.useRef(null);d.useEffect(()=>{j.highlightAll()},[e]);const m=t=>{t.code==="Tab"&&g(t),t.code==="Quote"&&h(t)},g=t=>{const{start:s,end:l,hasStartEnd:n}=a(t);if(n){const o=e.substring(0,s)+"	"+e.substring(l);r(o),x(s)}},h=t=>{const{start:s,end:l,hasStartEnd:n}=a(t);if(n){t.preventDefault();const o=e.substring(s,l),i=e.substring(0,s),u=e.substring(l),v=t.shiftKey?'"':"'",E=o.startsWith(v)&&o.endsWith(v)?i+o.replaceAll(v,"")+u:i+v+`${o}`+v+u;r(E),x(s)}},a=t=>{t.preventDefault();const s=t.currentTarget,l=s.selectionStart,n=s.selectionEnd;return{start:l,end:n,hasStartEnd:l!==null&&n!==null}},x=t=>{_.delay(100).then(()=>{f.current.setSelectionRange(t+1,t+1)})};return{textareaRef:f,preRef:p,getCode:()=>({__html:e.replace(new RegExp("&","g"),"&amp;").replace(new RegExp("<","g"),"&lt;")}),onKeyDown:m,onScroll:t=>{const s=t.currentTarget;p.current.scrollTop=s.scrollTop,p.current.scrollLeft=s.scrollLeft}}},D=`
function Component() {
  const [counter, setCounter] = React.useState(1);
  const [title, setTitle] = React.useState()
  const debounce = React.useRef()

  React.useEffect(() => {
    clearTimeout(debounce.current)

    debounce.current = setTimeout(() => {
      getTitle();
    }, 1000);
  },[counter])

  const getTitle = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + counter)

    // const data = await res.json()

    // setTitle(data.title)
  }

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
      <div style={{textAlign: "center"}}>
        {title} <br/>
        {counter}
      </div>
      <div style={{display: "flex"}}>
        <button onClick={increase}>+</button>
        <div style={{width: "20px"}}/>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<Component />)
`.trim(),L=()=>{const e=d.useRef(null),[r,f]=d.useState(D),[p,m]=d.useState(),g=d.useRef(),h=d.useRef(!1),a=d.useRef();d.useEffect(()=>{x(),R()},[]),d.useEffect(()=>{t()},[r]);const x=()=>{const n=[{isLoaded:!1,src:"https://unpkg.com/react@18/umd/react.production.min.js"},{isLoaded:!1,src:"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"}];for(let i=0;i<n.length;i++){const u=document.createElement("script");u.src=n[i].src,u.defer=!0,u.onload=()=>{n[i].isLoaded=!0,n.every(C=>C.isLoaded)&&(h.current=!0,s())},e.current.contentDocument.head.appendChild(u)}const o=document.createElement("div");o.id="app",e.current.contentDocument.body.appendChild(o)},R=()=>{const n=document.createElement("script");n.text=`
const originalLog = console.log;

console.log = (...args) => {
  parent.window.postMessage({ type: 'log', args: args }, '*')
  originalLog(...args)
}`.trim(),e.current.contentDocument.head.appendChild(n),window.addEventListener("message",y)},y=n=>{const o=n.data;if(o.type==="log"){let i;if(typeof o.args=="object"){const u=JSON.stringify(o.args);i=u.substring(1,u.length-1)}else i=o.args;m(`${i}`)}},t=()=>{h.current&&(clearTimeout(g.current),g.current=setTimeout(()=>{s()},2e3))},s=async()=>{if(r!==void 0)try{const n=S.transform(`${r}`,{presets:["react"]}).code;a.current!==void 0&&(e.current.contentDocument.head.removeChild(a.current),l()),a.current=document.createElement("script"),a.current.text=`${n}`,e.current.contentDocument.head.appendChild(a.current),m(void 0)}catch(n){a.current!==void 0&&l(),m(`Error : ${n}`)}},l=()=>{e.current.contentDocument.body.children[0].innerHTML=""};return{text:r,setText:f,printText:p,resultRef:e}},k="_div_editor_1m27l_1",M="_div_code_1m27l_28",b={div_editor:k,div_code:M},$=({text:e,setText:r})=>{const{textareaRef:f,preRef:p,getCode:m,onKeyDown:g,onScroll:h}=w(e,r);return c.jsxs("div",{className:b.div_code,children:[c.jsx("div",{children:"index.jsx"}),c.jsx("textarea",{ref:f,onKeyDown:g,value:e,spellCheck:!1,autoComplete:"false",onScroll:h,onChange:a=>r(a.target.value)}),c.jsx("pre",{ref:p,children:c.jsx("code",{className:"language-jsx",dangerouslySetInnerHTML:m()})})]})},I=({printText:e})=>c.jsx("div",{children:e??"console.log will be printed here."}),N=T.forwardRef(({},e)=>c.jsx("iframe",{ref:e})),H=()=>{const{text:e,setText:r,resultRef:f,printText:p}=L();return c.jsxs("div",{className:b.div_editor,children:[c.jsx($,{text:e,setText:r}),c.jsxs("div",{children:[c.jsx(N,{ref:f}),c.jsx(I,{printText:p})]})]})};export{H as default};
