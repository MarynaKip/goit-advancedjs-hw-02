import{f as h,i as l}from"./vendor-BbSUbo7J.js";function x(){const r=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),s=document.querySelector("[data-days]"),c=document.querySelector("[data-hours]"),d=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]");let a=null,u=null;t.disabled=!0,h(r,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){const o=n[0];!o||o<=new Date?(l.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),t.disabled=!0):(a=o,t.disabled=!1)}}),t.addEventListener("click",()=>{if(!a)return;t.disabled=!0,r.disabled=!0;function n(){const e=a-new Date;if(e<=0){clearInterval(u),s.textContent="00",c.textContent="00",d.textContent="00",i.textContent="00",l.success({title:"Completed",message:"The countdown has ended!",position:"topRight"});return}const m=String(Math.floor(e/(1e3*60*60*24))).padStart(2,"0"),p=String(Math.floor(e%(1e3*60*60*24)/(1e3*60*60))).padStart(2,"0"),S=String(Math.floor(e%(1e3*60*60)/(1e3*60))).padStart(2,"0"),f=String(Math.floor(e%(1e3*60)/1e3)).padStart(2,"0");s.textContent=m,c.textContent=p,d.textContent=S,i.textContent=f}n(),u=setInterval(n,1e3)})}export{x as c};
//# sourceMappingURL=1-timer-DRbl2WuT.js.map
