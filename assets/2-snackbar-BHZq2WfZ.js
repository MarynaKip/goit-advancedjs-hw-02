import{i}from"./vendor-BbSUbo7J.js";function n(){document.querySelector(".form").addEventListener("submit",o=>{o.preventDefault();const t=o.target,s=parseInt(t.delay.value,10),r=t.state.value;new Promise((e,a)=>{setTimeout(()=>{r==="fulfilled"?e(s):a(s)},s)}).then(e=>{i.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"❌ Error",message:`Rejected promise in ${e}ms`,position:"topRight"})}),t.reset()})}export{n as h};
//# sourceMappingURL=2-snackbar-BHZq2WfZ.js.map
