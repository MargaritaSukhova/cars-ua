import{r as s,j as e,L as c,a as y}from"./index-e5f64618.js";import{g as R,a as v,C as P,F as S,b as E,c as F,P as d}from"./CarList-0d85920b.js";import"./Container.styled-f14df469.js";const M=({favorites:u,setFavorites:f})=>{const[a,g]=s.useState([]),[n,x]=s.useState([]),[o,h]=s.useState(1),[j,i]=s.useState(!1),[p,l]=s.useState(!1),C=s.useRef(null),r=s.useRef(null);s.useEffect(()=>{i(!0),R().then(t=>{g(t)}).finally(()=>i(!1))},[]),s.useEffect(()=>{l(!0),v(o).then(t=>{x(L=>[...L,...t])}).finally(()=>{l(!1),r.current&&r.current.scrollIntoView({behavior:"smooth"})})},[o]);const m=()=>{h(t=>t+1)};return e.jsx(P,{children:j?e.jsx("div",{children:e.jsx(c,{})}):e.jsxs(e.Fragment,{children:[e.jsx(S,{}),(a==null?void 0:a.length)>0?e.jsxs(E,{ref:C,children:[e.jsx(F,{cars:n,favorites:u,setFavorites:f}),e.jsx("div",{ref:r}),p&&e.jsx("div",{children:e.jsx(c,{})})]}):e.jsx("h2",{children:"Unfortunately, we couldn't find any cars"}),a.length>n.length&&e.jsx(y,{type:"button",onClick:m,children:"Load more"})]})})};M.propTypes={favorites:d.array.isRequired,setFavorites:d.func.isRequired};export{M as default};
