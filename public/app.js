async function loadSite(){
const r=await fetch("/api/site",{cache:"no-store"});if(!r.ok)throw Error();const s=await r.json();
document.title=s.brand;document.getElementById("brand").textContent=s.brand;
document.getElementById("heroTitle").innerHTML=s.heroTitle;document.getElementById("heroText").textContent=s.heroText;
let h=document.getElementById("heroButton");h.textContent=s.heroButton;h.href=s.heroButtonUrl;
let b=document.getElementById("secondaryButton");b.textContent=s.secondaryButton;b.href=s.secondaryButtonUrl;
document.getElementById("aboutTitle").textContent=s.aboutTitle;document.getElementById("aboutText").textContent=s.aboutText;
document.getElementById("stats").innerHTML=s.stats.map(x=>`<div><b>${e(x.value)}</b><span>${e(x.label)}</span></div>`).join("");
document.getElementById("servicesTitle").textContent=s.servicesTitle;
document.getElementById("services").innerHTML=s.services.map(x=>`<article class="card"><div class="icon">${e(x.icon)}</div><h3>${e(x.title)}</h3><p>${e(x.text)}</p><div class="price">${e(x.price)}</div></article>`).join("");
document.getElementById("whyTitle").textContent=s.whyTitle;
document.getElementById("features").innerHTML=s.features.map(x=>`<article class="card"><h3>${e(x.title)}</h3><p>${e(x.text)}</p></article>`).join("");
document.getElementById("contactTitle").textContent=s.contactTitle;document.getElementById("contactText").textContent=s.contactText;
document.getElementById("email").textContent=s.email;document.getElementById("phone").textContent=s.phone;document.getElementById("footer").textContent=s.footer}
function e(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
document.getElementById("menu").onclick=()=>document.querySelector("nav").classList.toggle("open");
document.getElementById("contactForm").onsubmit=async ev=>{ev.preventDefault();let f=ev.currentTarget,s=document.getElementById("formStatus");s.textContent="Wysyłanie…";
let r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});
s.textContent=r.ok?"Wiadomość została wysłana.":"Nie udało się wysłać wiadomości.";if(r.ok)f.reset()};
loadSite().catch(()=>document.getElementById("heroTitle").textContent="Nie udało się wczytać strony.");