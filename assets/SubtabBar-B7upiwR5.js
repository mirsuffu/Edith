import{j as e}from"./index-DO-ISTKJ.js";const l=({views:n,activeView:o,onViewChange:s})=>e.jsx("div",{className:"flex bg-surface-2/80 p-0.5 rounded-xl shrink-0 mb-3",children:n.map(t=>e.jsx("button",{onClick:()=>s(t.id),className:`
          flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-all duration-200
          ${o===t.id?"bg-accent/12 text-accent shadow-sm":"text-text-3 hover:text-text-2"}
        `,children:t.label},t.id))});export{l as S};
