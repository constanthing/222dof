let sayMessage=void 0;(()=>{let t=document.querySelector("#message"),a=!1;sayMessage=async e=>{a||(a=!0,t.innerText=e,t.classList.add("reveal-message"),await new Promise((e,a)=>{setTimeout(()=>{t.style.display="",t.classList.remove("reveal-message"),e()},1e3)}),a=!1)};var e,s=document.querySelector("#counter-day"),r=Math.floor((new Date-new Date(2024,11,22))/864e5);s.innerText=r+" /";for(e of s=document.querySelectorAll("#main-navigation-links a"))-1!=window.location.pathname.indexOf(e.innerText)&&e.classList.add("selected-link");navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&document.querySelector("html").classList.add("safari"),document.querySelector("#hamburger").addEventListener("click",e=>{"0"==(e=e.target).dataset.mode?(e.classList.add("hamburger-selected"),e.dataset.mode="1"):(e.classList.remove("hamburger-selected"),e.dataset.mode="0")})})();