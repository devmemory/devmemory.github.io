import{r as v,j as g,R as C}from"./index-K0NOQQad.js";import{c as b,d as T}from"./aos-my47RYQH.js";import{c as w}from"./commonUtil-D3m6W2nw.js";const _=(e,i)=>{const x=v.useRef(null),p=v.useRef(null);v.useEffect(()=>{b.highlightAll()},[e]);const f=t=>{t.code==="Tab"&&h(t),t.code==="Quote"&&d(t)},h=t=>{const{start:o,end:a,hasStartEnd:r}=u(t);if(r){const l=e.substring(0,o)+"	"+e.substring(a);i(l),n(o)}},d=t=>{const{start:o,end:a,hasStartEnd:r}=u(t);if(r){t.preventDefault();const l=e.substring(o,a),m=e.substring(0,o),y=e.substring(a),j=t.shiftKey?'"':"'",E=l.startsWith(j)&&l.endsWith(j)?m+l.replaceAll(j,"")+y:m+j+`${l}`+j+y;i(E),n(o)}},u=t=>{t.preventDefault();const o=t.currentTarget,a=o.selectionStart,r=o.selectionEnd;return{start:a,end:r,hasStartEnd:a!==null&&r!==null}},n=t=>{w.delay(100).then(()=>{x.current.setSelectionRange(t+1,t+1)})};return{textareaRef:x,preRef:p,getCode:()=>({__html:e.replace(new RegExp("&","g"),"&amp;").replace(new RegExp("<","g"),"&lt;")}),onKeyDown:f,onScroll:t=>{const o=t.currentTarget;p.current.scrollTop=o.scrollTop,p.current.scrollLeft=o.scrollLeft}}},D=`
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
`.trim(),A=()=>{const e=v.useRef(null),[i,x]=v.useState(D),[p,f]=v.useState(),h=v.useRef(),d=v.useRef(!1),u=v.useRef();v.useEffect(()=>{n(),s()},[]),v.useEffect(()=>{t()},[i]);const n=()=>{const r=[{isLoaded:!1,src:"https://unpkg.com/react@18/umd/react.production.min.js"},{isLoaded:!1,src:"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"}];for(let m=0;m<r.length;m++){const y=document.createElement("script");y.src=r[m].src,y.defer=!0,y.onload=()=>{r[m].isLoaded=!0,r.every(R=>R.isLoaded)&&(d.current=!0,o())},e.current.contentDocument.head.appendChild(y)}const l=document.createElement("div");l.id="app",e.current.contentDocument.body.appendChild(l)},s=()=>{const r=document.createElement("script");r.text=`
const originalLog = console.log;

console.log = (...args) => {
  parent.window.postMessage({ type: 'log', args: args }, '*')
  originalLog(...args)
}`.trim(),e.current.contentDocument.head.appendChild(r),window.addEventListener("message",c)},c=r=>{const l=r.data;if(l.type==="log"){let m;if(typeof l.args=="object"){const y=JSON.stringify(l.args);m=y.substring(1,y.length-1)}else m=l.args;f(`${m}`)}},t=()=>{d.current&&(clearTimeout(h.current),h.current=setTimeout(()=>{o()},2e3))},o=async()=>{if(i!==void 0)try{const r=T.transform(`${i}`,{presets:["react"]}).code;u.current!==void 0&&(e.current.contentDocument.head.removeChild(u.current),a()),u.current=document.createElement("script"),u.current.text=`${r}`,e.current.contentDocument.head.appendChild(u.current),f(void 0)}catch(r){u.current!==void 0&&a(),f(`Error : ${r}`)}},a=()=>{e.current.contentDocument.body.children[0].innerHTML=""};return{text:i,setText:x,printText:p,resultRef:e}};(function(e){var i=e.util.clone(e.languages.javascript),x=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,p=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,f=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function h(n,s){return n=n.replace(/<S>/g,function(){return x}).replace(/<BRACES>/g,function(){return p}).replace(/<SPREAD>/g,function(){return f}),RegExp(n,s)}f=h(f).source,e.languages.jsx=e.languages.extend("markup",i),e.languages.jsx.tag.pattern=h(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=i.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:h(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:h(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var d=function(n){return n?typeof n=="string"?n:typeof n.content=="string"?n.content:n.content.map(d).join(""):""},u=function(n){for(var s=[],c=0;c<n.length;c++){var t=n[c],o=!1;if(typeof t!="string"&&(t.type==="tag"&&t.content[0]&&t.content[0].type==="tag"?t.content[0].content[0].content==="</"?s.length>0&&s[s.length-1].tagName===d(t.content[0].content[1])&&s.pop():t.content[t.content.length-1].content==="/>"||s.push({tagName:d(t.content[0].content[1]),openedBraces:0}):s.length>0&&t.type==="punctuation"&&t.content==="{"?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&t.type==="punctuation"&&t.content==="}"?s[s.length-1].openedBraces--:o=!0),(o||typeof t=="string")&&s.length>0&&s[s.length-1].openedBraces===0){var a=d(t);c<n.length-1&&(typeof n[c+1]=="string"||n[c+1].type==="plain-text")&&(a+=d(n[c+1]),n.splice(c+1,1)),c>0&&(typeof n[c-1]=="string"||n[c-1].type==="plain-text")&&(a=d(n[c-1])+a,n.splice(c-1,1),c--),n[c]=new e.Token("plain-text",a,null,a)}t.content&&typeof t.content!="string"&&u(t.content)}};e.hooks.add("after-tokenize",function(n){n.language!=="jsx"&&n.language!=="tsx"||u(n.tokens)})})(Prism);const B="_div_editor_1m27l_1",L="_div_code_1m27l_28",S={div_editor:B,div_code:L},$=({text:e,setText:i})=>{const{textareaRef:x,preRef:p,getCode:f,onKeyDown:h,onScroll:d}=_(e,i);return g.jsxs("div",{className:S.div_code,children:[g.jsx("div",{children:"index.jsx"}),g.jsx("textarea",{ref:x,onKeyDown:h,value:e,spellCheck:!1,autoComplete:"false",onScroll:d,onChange:u=>i(u.target.value)}),g.jsx("pre",{ref:p,children:g.jsx("code",{className:"language-jsx",dangerouslySetInnerHTML:f()})})]})},M=({printText:e})=>g.jsx("div",{children:e??"console.log will be printed here."}),N=C.forwardRef(({},e)=>g.jsx("iframe",{ref:e})),O=()=>{const{text:e,setText:i,resultRef:x,printText:p}=A();return g.jsxs("div",{className:S.div_editor,children:[g.jsx($,{text:e,setText:i}),g.jsxs("div",{children:[g.jsx(N,{ref:x}),g.jsx(M,{printText:p})]})]})};export{O as default};
