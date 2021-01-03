(()=>{"use strict";(function(){let e=document.querySelector("#timer-hours"),t=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");const n=e=>e<10?"0"+e:e;let c=setInterval((function(){let a=function(){let e=(new Date("7 january 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:t}}();e.textContent=n(a.hours),t.textContent=n(a.minutes),o.textContent=n(a.seconds),a.timeRemaining<0&&(clearInterval(c),e.textContent="00",t.textContent="00",o.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body");t.addEventListener("click",(t=>{let o=t.target;o.closest(".menu")||o.classList.contains("close-btn")||o.closest("menu")&&!o.classList.contains("active-menu")?e.classList.toggle("active-menu"):o.classList.contains("active-menu")?e.classList.add("active-menu"):e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content");document.querySelector(".service").addEventListener("click",(o=>{o.target.classList.contains("popup-btn")&&(document.documentElement.clientWidth>768?(e.style.display="block",function({duration:e,draw:t,timing:o}){let n=performance.now();requestAnimationFrame((function c(a){let r=(a-n)/e;r>1&&(r=1);let s=o(r);t(s),r<1&&requestAnimationFrame(c)}))}({duration:1e3,timing:function(e){return e},draw:function(e){t.style.left=50*e+"%",t.style.transform="translateX(-50%)"}})):e.style.display="block")})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector("menu"),t=document.querySelectorAll(".container"),o=document.querySelector('a[href*="#service-block"]'),n=document.querySelector(".service");e.addEventListener("click",(e=>{const o=e.target;if(o.matches("a")){let e=o.hash.slice(1);t.forEach((t=>{e===t.parentElement.className&&t.scrollIntoView({block:"start",behavior:"smooth"})}))}})),o.addEventListener("click",(()=>{n.scrollIntoView({block:"start",behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,c)=>{n===e&&(e=>{for(let n=0;n<o.length;n++)n===e?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(c)}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots"));let n,c,a=0;t.forEach(((e,t)=>{let n=document.createElement("li");n.classList.add("dot"),0===t&&n.classList.add("dot-active"),o.append(n)})),c=document.querySelectorAll(".dot");const r=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},l=()=>{r(t,a,"portfolio-item-active"),r(c,a,"dot-active"),a++,a>=t.length&&(a=0),s(t,a,"portfolio-item-active"),s(c,a,"dot-active")},i=(e=3e3)=>{n=setInterval(l,e)};e.addEventListener("click",(e=>{e.preventDefault();let o=e.target;o.matches(".portfolio-btn, .dot")&&(r(t,a,"portfolio-item-active"),r(c,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&c.forEach(((e,t)=>{e===o&&(a=t)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),s(t,a,"portfolio-item-active"),s(c,a,"dot-active"))})),e.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),e.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i(1500)})),i(1500)})(),(()=>{const e=document.querySelector(".command");let t,o;e.addEventListener("mouseover",(e=>{let n=e.target;n.classList.contains("command__photo")&&(t=n.src,o=n.dataset.img,n.src=o,n.dataset.img=t)})),e.addEventListener("mouseout",(e=>{let n=e.target;n.classList.contains("command__photo")&&(n.src=t,n.dataset.img=o)}))})(),document.querySelector(".calc-block").addEventListener("input",(e=>{let t=e.target;t.classList.contains("calc-item")&&(t.value=t.value.replace(/\D/g,""))})),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),r=document.getElementById("total");t.addEventListener("change",(t=>{const s=t.target;(s.matches("select")||s.matches("input"))&&(()=>{let t=0,s=1,l=1;const i=o.options[o.selectedIndex].value,u=+n.value;c.value>1&&(s+=(c.value-1)/10),a.value&&a.value<5?l*=2:a.value&&a.value<10&&(l*=1.5),i&&u&&(t=e*u*i*s*l),function(){let e=0;!function({duration:e,draw:t,timing:o}){let n=performance.now();requestAnimationFrame((function c(a){let r=(a-n)/e;r>1&&(r=1);let s=o(r);t(s),r<1&&requestAnimationFrame(c)}))}({duration:500,timing:function(e){return e},draw:function(o){e<t&&(e++,r.textContent=Math.floor(o*t))}})}()})()}))})(100),(()=>{const e=[...document.querySelectorAll("form")],t=document.querySelector(".popup"),o=document.createElement("div");o.classList.add("sk-rotating-plane"),o.style.cssText="font-size: 2rem",o.style.color="#fff",document.querySelector("body").addEventListener("submit",(e=>{let a=e.target;if(e.preventDefault(),a.matches("form")){a.appendChild(o);const e=new FormData(a);let r={};e.forEach(((e,t)=>{r[t]=e})),n(r).then((e=>{if(200!==e.status)throw new Error("status network not 200");o.classList.remove("sk-rotating-plane"),o.textContent="Спасибо, мы скоро с вами свяжемся",c(),setTimeout((function(){o.textContent="",a.matches("#form3")&&(t.style.display="none")}),2e3)})).catch((e=>{o.classList.remove("sk-rotating-plane"),o.textContent="Что-то пошло не так",console.error(e)}))}}));const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),c=()=>{e.forEach((e=>{[...e.elements].filter((e=>"button"!==e.tagName.toUppercase&&"button"!==e.type)).forEach((e=>{e.value=""}))}))};document.querySelector("body").addEventListener("input",(e=>{const t=e.target;"tel"===t.type?t.value=t.value.match(/\+?\d{1,13}/):"text"===t.type&&"form2-message"!==t.id?t.value=t.value.match(/[а-яё]+/gi):"form2-message"===t.id&&(t.value=t.value.match(/([а-яё0-9 .,!?;])+/gi))}))})()})();